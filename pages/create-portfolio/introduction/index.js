import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateIntroduction = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-2.png";
  const router = useRouter();
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
  const [preface, setPreface] = useState("");

  useEffect(() => {
    const idPort3 = localStorage.getItem("idPort3") || null;

    if (idPort3) {
      getPort(idPort3);
    }
  }, []);

  const getPort = async (idPort) => {
    await axios
      .get(`http://localhost:1337/api/port-step-3s/${idPort}`)
      .then((data) => {
        if (data.status === 200) {
          setPreface(data.data.data.attributes.preface);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onSubmit = async () => {
    const idPort = localStorage.getItem("idPort") || null;
    const idPort3 = localStorage.getItem("idPort3") || null;
    const idUser = localStorage.getItem("idUser") || null;

    if (idPort) {
      let model = {
        data: {
          preface: preface,
          idUser: idUser,
          idPort: idPort,
        },
      };

      if (idPort3) {
        await axios
          .put(`http://localhost:1337/api/port-step-3s/${idPort3}`, model)
          .then((data) => {
            if (data.status === 200) {
              localStorage.setItem("idPort3", data.data.data.id);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        await axios
          .post("http://localhost:1337/api/port-step-3s", model)
          .then((data) => {
            if (data.status === 200) {
              localStorage.setItem("idPort3", data.data.data.id);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
    router.push("/create-portfolio/listofcontent");
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน{" "}
      </div>{" "}
      <StateCreate state={3} />{" "}
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]"> คำนำ </div>{" "}
        <div className="flex gap-x-36">
          <div className="relative w-[170px] h-[246px]">
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
          <div className="flex gap-x-8">
            <div className="text-lg font-bold"> รายละเอียดคำนำ </div>{" "}
            <textarea
              rows="15"
              cols="50"
              className="border-[1px] bg-white rounded-[6px]"
              value={preface}
              onChange={(e) => setPreface(e.target.value)}
            ></textarea>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <button
          className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]"
          onClick={onSubmit}
        >
          บันทึกข้อมูล{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default CreateIntroduction;