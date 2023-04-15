import React, { useState, useEffect } from "react";
import Link from "next/link";

const StateCreate = ({ state }) => {
  const check_icon = "/assets/icons/check-green.svg";
  const [menu, setMenu] = useState([
    {
      title: "เทมเพลต",
      link: "/create-portfolio",
      icon: "/assets/icons/state/template.png",
      icon_check: "/assets/icons/state/template-check.svg",
      status: false,
    },
    {
      title: "หน้าปก",
      link: "/create-portfolio/front-cover",
      icon: "/assets/icons/state/front-cover.svg",
      icon_check: "/assets/icons/state/front-cover-check.svg",
      status: false,
    },
    {
      title: "คำนำ",
      link: "/create-portfolio/introduction",
      icon: "/assets/icons/state/introduction.svg",
      icon_check: "/assets/icons/state/introduction-check.svg",
      status: false,
    },
    {
      title: "สารบัญ",
      link: "/create-portfolio/listofcontent",
      icon: "/assets/icons/state/listofcontent.svg",
      icon_check: "/assets/icons/state/listofcontent-check.svg",
      status: false,
    },
    {
      title: "ประวัติส่วนตัว",
      link: "/create-portfolio/personal-record",
      icon: "/assets/icons/state/personal-record.svg",
      icon_check: "/assets/icons/state/personal-record-check.svg",
      status: false,
    },
    {
      title: "ประวัติการศึกษา",
      link: "/create-portfolio/educational-record",
      icon: "/assets/icons/state/educational-record.svg",
      icon_check: "/assets/icons/state/educational-record-check.svg",
      status: false,
    },
    {
      title: "ผลงาน/กิจกรรม",
      link: "/create-portfolio/activities",
      icon: "/assets/icons/state/activities.svg",
      icon_check: "/assets/icons/state/activities-check.svg",
      status: false,
    },
    {
      title: "เกียรติบัตรที่ได้รับ",
      link: "/create-portfolio/certificate",
      icon: "/assets/icons/state/certificate.svg",
      icon_check: "/assets/icons/state/certificate-check.svg",
      status: false,
    },
    {
      title: "ดาวน์โหลด",
      link: "/create-portfolio/download",
      icon: "/assets/icons/state/download.svg",
      icon_check: "/assets/icons/state/download-check.svg",
      status: false,
    },
  ]);

  useEffect(() => {
    getIdPort()
  }, []);

  const getIdPort = () => {
    let arr = [...menu]
    arr.forEach((item, index) => {
      if (typeof window !== "undefined") {
        const idPort = localStorage.getItem(
          index == 0 ? "idPort" : `idPort${index + 1}`
        );
        if (idPort != null) {
          arr[index].status = true;
        }
      }else {
        arr[index].status = false;
      }
    })

    setMenu(arr)
  };

  return (
    <div className="flex gap-x-6 -ml-4">
      {menu.map((item, index) => {
        return (
          <Link className="flex flex-1" href={item.link} key={`state-${index}`}>
            <button className={`flex flex-col items-center w-full h-full`}>
              <img
                src={
                  state == index + 1
                    ? item.icon_check
                    : item.status
                    ? check_icon
                    : item.icon
                }
                alt={item.title}
                width={32}
                height={32}
                className="rounded-[6px] cursor-pointer mb-2"
              />
              <div
                className={`font-bold mb-2 flex-1 ${
                  state == index + 1
                    ? "text-[#008DDB]"
                    : item.status
                    ? "text-[#00BA00]"
                    : "text-[#C5C5C5]"
                }`}
              >
                {item.title}
              </div>
              <div
                className={`w-full rounded-full ${
                  state == index + 1
                    ? "border-2 border-[#008DDB]"
                    : item.status
                    ? "border-2 border-[#00BA00]"
                    : "border-2 border-[#C5C5C5]"
                }`}
              />
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default StateCreate;
