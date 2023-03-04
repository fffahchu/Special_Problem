import React from "react";
import Link from "next/link";

const StateCreate = ({ state }) => {
  const menu = [
    {
      title: "เทมเพลต",
      link: "/create-portfolio",
      icon: "/assets/icons/check-green.svg",
      icon_check: "/assets/icons/state/template.svg",
    },
    {
      title: "หน้าปก",
      link: "/create-portfolio/front-cover",
      icon: "/assets/icons/state/front-cover.svg",
      icon_check: "/assets/icons/state/front-cover-check.svg",
    },
    {
      title: "คำนำ",
      link: "/create-portfolio/introduction",
      icon: "/assets/icons/state/introduction.svg",
      icon_check: "/assets/icons/state/introduction-check.svg",
    },
    {
      title: "สารบัญ",
      link: "/create-portfolio/listofcontent",
      icon: "/assets/icons/state/listofcontent.svg",
      icon_check: "/assets/icons/state/listofcontent-check.svg",
    },
    {
      title: "ประวัติส่วนตัว",
      link: "/create-portfolio/personal-record",
      icon: "/assets/icons/state/personal-record.svg",
      icon_check: "/assets/icons/state/personal-record-check.svg",
    },
    {
      title: "ประวัติการศึกษา",
      link: "/create-portfolio/educational-record",
      icon: "/assets/icons/state/educational-record.svg",
      icon_check: "/assets/icons/state/educational-record-check.svg",
    },
    {
      title: "ผลงาน/กิจกรรม",
      link: "/create-portfolio/activities",
      icon: "/assets/icons/state/activities.svg",
      icon_check: "/assets/icons/state/activities-check.svg",
    },
    {
      title: "เกียรติบัตรที่ได้รับ",
      link: "/create-portfolio/certificate",
      icon: "/assets/icons/state/certificate.svg",
      icon_check: "/assets/icons/state/certificate-check.svg",
    },
    {
      title: "ดาวน์โหลด",
      link: "/create-portfolio/download",
      icon: "/assets/icons/state/download.svg",
      icon_check: "/assets/icons/state/download-check.svg",
    },
  ];
  return (
    <div className="flex gap-x-8 -ml-12">
      {menu.map((item, index) => {
        return (
          <Link href={item.link}>
            <button
              className={`flex flex-col items-center w-[128px] h-[83px]`}
              key={`state-${index}`}
            >
              <img
                src={state != index + 1 ? item.icon : item.icon_check}
                alt={item.title}
                width={32}
                height={32}
                className="rounded-[6px] cursor-pointer mb-2"
              />
              <div
                className={`font-bold mb-2 ${
                  state == index + 1
                    ? "text-[#008DDB]"
                    : index != 0
                    ? "text-[#C5C5C5]"
                    : "text-[#00BA00]"
                }`}
              >
                {item.title}
              </div>
              <div
                className={` w-full rounded-full ${
                  state == index + 1
                    ? "border-2 border-[#008DDB]"
                    : index != 0
                    ? "border-2 border-[#C5C5C5]"
                    : "border-2 border-[#00BA00]"
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
