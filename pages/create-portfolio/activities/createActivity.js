import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";

const CreateActivity = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-6.png";
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
  const [page, setPage] = useState(3);
  const [ports, setPorts] = useState([
    {
      id: -1,
      namePort: "",
      detailPort: "",
      file: "",
    },
    {
      id: -1,
      namePort: "",
      detailPort: "",
      file: "",
    },
    {
      id: -1,
      namePort: "",
      detailPort: "",
      file: "",
    },
  ]);

  const newPorts = () => {
    setPorts([
      {
        id: -1,
        namePort: "",
        detailPort: "",
        file: "",
      },
      {
        id: -1,
        namePort: "",
        detailPort: "",
        file: "",
      },
      {
        id: -1,
        namePort: "",
        detailPort: "",
        file: "",
      },
    ]);
  };

  useEffect(() => {
    const idPort7 = localStorage.getItem("idPort7") || null;
    const idFilePort7 = localStorage.getItem("idFilePort7") || null;

    if (idPort7 && idFilePort7) {
      getPort(idPort7.split(","), idFilePort7.split(","));
    }
  }, []);

  const getPort = async (idPorts, idFilePorts) => {
    let arr = [];
    idPorts.forEach(async (idport, index) => {
      await axios
        .get(`http://localhost:1337/api/port-step-7s/${idport}`)
        .then(async (data) => {
          if (data.status === 200) {
            if (page == 3) {
              setPage(data.data.data.attributes.numberPage);
            }
            let model = {
              id: data.data.data.id,
              namePort: data.data.data.attributes.namePort,
              detailPort: data.data.data.attributes.detailPort,
            };

            await axios
              .get(
                `http://localhost:1337/api/upload/files/${idFilePorts[index]}`
              )
              .then((data) => {
                if (data.status === 200) {
                  model.file = data.data.data.attributes.port;
                }
              })
              .catch((e) => {
                console.log(e);
              });

            arr.push(model);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
    if (arr.length > 0) {
      setPorts(arr);
    }
  };

  const onPreviewImage = (e, index) => {
    if (e.target.files.length > 0) {
      let arr = [...ports];
      const file = e.target.files[0];

      if (file) {
        arr[index].file = file;
      }
      setPorts([...arr]);
    }
  };

  const onSubmit = async () => {
    const idPort = localStorage.getItem("idPort") || null;
    const idPort7 = localStorage.getItem("idPort7") || null;

    let arrIdPort7 = [];
    let arrIdFilePort7 = [];

    if (idPort7) {
      arrIdFilePort7 = idPort7.split(",");
    }

    if (idPort) {
      let model = {
        data: {
          numberPage: page,
          iduser: 1,
          idPort: idPort,
        },
      };

      let arr = [...ports];

      arr.forEach(async (port) => {
        model.data.namePort = port.namePort;
        model.data.detailPort = port.detailPort;
        if (port.id >= 0) {
          await axios
            .put(`http://localhost:1337/api/port-step-7s/${port.id}`, model)
            .then((data) => {
              if (data.status === 200) {
                console.log("update port step 7 id => ", data.data.data.id);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-7s", model)
            .then((data) => {
              if (data.status === 200) {
                arrIdPort7.push(data.data.data.id);
                port.id = data.data.data.id;
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }

        if (port.id >= 0 && port.file) {
          const form = new FormData();
          form.append("files", port.file);
          form.append("ref", "api::port-step-7.port-step-7");
          form.append("refId", port.id);
          form.append("field", "port");
          await axios
            .post(`http://localhost:1337/api/upload`, form)
            .then((data) => {
              if (data.status === 200) {
                arrIdFilePort7.push(data.data.data.id);
              }
            });
        }
      });

      if (arrIdPort7.length > 0) {
        localStorage.setItem("idPort7", arrIdPort7);
      }
      if (arrIdFilePort7.length > 0) {
        localStorage.setItem("idFilePort7", arrIdFilePort7);
      }
    }
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={7} />
      <div className="mt-[72px] mb-[42px] mx-auto max-w-[1232px]">
        <div className="flex mb-[48px] gap-[5px]">
          <div className="text-xl font-bold ">ผลงาน/กิจกรรม</div>
          <div className="text-lg bg-[#D9D9D9] py-[3px] px-1.5 rounded-full">
            2 จาก 2
          </div>
        </div>
        <div className="flex gap-x-8">
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
            </div>
          </div>
          <div className="grow">
            <div className="flex items-center">
              <label
                className="w-[218px] text-lg font-bold text-end mr-8 "
                htmlFor="page_number"
              >
                หมายเลขหน้า
              </label>
              <select
                name="page_number"
                className="shadow border rounded py-2.5 px-3.5 w-[531px]"
                defaultValue="3"
                value={page}
                onChange={(e) => setPage(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {ports.map((item, index) => {
              return (
                <>
                  <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
                  <div className="flex mb-6">
                    <div className="pl-[250px]">
                      {item.file == "" ? (
                        <div className="flex justify-center items-center w-[300px] h-[200px] rounded-[11px] bg-[#FFEC85]">
                          <img
                            src="/assets/icons/camera-icon.svg"
                            alt="/assets/icons/camera-icon.svg"
                            width={56}
                            height={56}
                          />
                        </div>
                      ) : (
                        <img
                          src={URL.createObjectURL(item.file)}
                          alt="preview-image"
                          className="w-[300px] h-[200px] rounded-[11px] object-cover border"
                        />
                      )}
                    </div>
                    <div className="ml-[30px]">
                      <div className="font-bold mb-[13px]">คำแนะนำ</div>
                      <div className="mb-[9px]">• สำหรับรูปโปรไฟล์</div>
                      <div className="mb-[28px]">
                        • ขนาดรูปไม่เกิน 10 MB png หรือ jpg
                      </div>
                      <label
                        htmlFor={`dropzone-file-${index}`}
                        className="py-3 px-[42px] border-[1px] rounded-full text-lg font-bold"
                      >
                        อัพโหลดรูป
                      </label>
                      <input
                        id={`dropzone-file-${index}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => onPreviewImage(e, index)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ชื่อกิจกรรม {index + 1}
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.namePort}
                      onChange={(e) => {
                        let arr = [...ports];
                        arr[index].namePort = e.target.value;
                        setPorts(arr);
                      }}
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      รายละเอียดกิจกรรม {index + 1}
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.detailPort}
                      onChange={(e) => {
                        let arr = [...ports];
                        arr[index].detailPort = e.target.value;
                        setPorts(arr);
                      }}
                    />
                  </div>
                </>
              );
            })}
            <div className="flex items-center mt-[88px]">
              <div className="w-[218px] mr-8" />
              <Link href="/create-portfolio/activities/createActivity">
                <button
                  className="flex gap-1.5 items-center text-white font-bold bg-black rounded-full py-[13px] px-[22px]"
                  onClick={newPorts}
                >
                  <img
                    src="/assets/icons/plus-white.svg"
                    alt="plus"
                    width="14"
                    height="14"
                  />
                  สร้างหน้าใหม่
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/certificate">
          <button className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]" onClick={onSubmit}>
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateActivity;
