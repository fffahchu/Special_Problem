import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";

const ListOfContent = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-3.png";
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "สร้างแฟ้มสะสมผลงาน",
      link: "/create-portfolio",
    },
  ];

  const [topics, setTopics] = useState([
    {
      id: -1,
      name: "",
      page: "1",
    },
  ]);

  const addTopics = () => {
    setTopics([
      ...topics,
      {
        id: -1,
        name: "",
        page: "1",
      },
    ]);
  };

  useEffect(() => {
    const idPort4 = localStorage.getItem("idPort4") || null;
    if (idPort4) {
      getPort(idPort4.split(","));
    }
  }, []);

  const getPort = async (idPorts) => {
    let arr = [];
    idPorts.forEach(async (idport) => {
      await axios
        .get(`http://localhost:1337/api/port-step-4s/${idport}`)
        .then((data) => {
          if (data.status === 200) {
            arr.push({
              id: data.data.data.id,
              name: data.data.data.attributes.title,
              page: data.data.data.attributes.number,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });

    if (arr.length > 0) {
      setTopics(arr);
    }
  };

  const onSubmit = async () => {
    const idPort = localStorage.getItem("idPort") || null;
    const idPort4 = localStorage.getItem("idPort4") || null;

    let arrIdPort4 = [];

    if (idPort4) {
      arrIdPort4 = idPort4.split(",");
    }

    if (idPort) {
      let model = {
        data: {
          title: "",
          number: 1,
          iduser: 1,
          idPort: idPort,
        },
      };

      topics.forEach(async (topic) => {
        model.data.title = topic.name;
        model.data.number = topic.page;
        if (topic.id >= 0) {
          await axios
            .put(`http://localhost:1337/api/port-step-4s/${topic.id}`, model)
            .then((data) => {
              if (data.status === 200) {
                console.log("update topic id => ", topic.id);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-4s", model)
            .then((data) => {
              if (data.status === 200) {
                arrIdPort4.push(data.data.data.id);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }
      });

      if (arrIdPort4.length > 0) {
        localStorage.setItem("idPort4", arrIdPort4);
      }
    }
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        สร้ างแฟ้ มสะสมผลงาน{" "}
      </div>{" "}
      <StateCreate state={4} />{" "}
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]"> สารบั ญ </div>{" "}
        <div className="flex gap-x-36">
          <div className="shrink-0 relative w-[170px] h-[246px]">
            <img
              src={coverImage}
              alt={coverImage}
              className="rounded-[6px] cursor-pointer"
            />
            <div className="absolute right-0 bottom-0 flex justify-center items-center w-[38px] h-[38px] bg-black rounded-[6px]">
              <img
                src="/assets/icons/zoom.svg"
                alt="icon-zoom"
                width="18"
                height="18"
              />
            </div>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {" "}
            {topics.map((item, index) => {
              return (
                <>
                  <div className="flex items-center h-[40px]" key={index}>
                    <label htmlFor="topic" className="text-lg mr-8 font-bold">
                      หั วข้ อ{" "}
                    </label>{" "}
                    <input
                      className="shadow border rounded py-2.5 px-3.5 w-[304px] "
                      id="topic"
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        let arr = [...topics];
                        arr[index].name = e.target.value;
                        setTopics(arr);
                      }}
                      placeholder="เช่น ประวัติส่วนตัว"
                    />
                  </div>{" "}
                  <div className="flex items-center h-[40px]">
                    <label htmlFor="page" className="text-lg mr-8 font-bold">
                      หน้ า{" "}
                    </label>{" "}
                    <select
                      id="page"
                      name="page"
                      className="shadow border rounded py-2.5 px-3.5 w-[304px]"
                      value={item.page}
                      onChange={(e) => {
                        let arr = [...topics];
                        arr[index].page = e.target.value;
                        setTopics(arr);
                      }}
                    >
                      <option value="1"> 1 </option>{" "}
                      <option value="2"> 2 </option>{" "}
                      <option value="3"> 3 </option>{" "}
                      <option value="4"> 4 </option>{" "}
                    </select>{" "}
                  </div>{" "}
                </>
              );
            })}
            <button
              className="w-[141px] h-[47px] ml-[74px] mt-16 bg-black py-[13px] px-[20px] rounded-[20px] text-white"
              onClick={addTopics}
            >
              เพิ่มหัวข้อใหม่
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/personal-record">
          <button className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]" onClick={onSubmit}>
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListOfContent;