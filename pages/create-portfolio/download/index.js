import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const Download = () => {
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
  const [selectedPort, setSelectedPort] = useState(-1);
  const [page, setPage] = useState(1);
  const [port, setPort] = useState([
    {
      name: "หน้าปก",
      image: "/assets/images/port-example/1.png",
      page: "",
      link: "create-portfolio/front-cover",
    },
    {
      name: "คำนำ",
      image: "/assets/images/port-example/2.png",
      page: "",
      link: "/create-portfolio/introduction",
    },
    {
      name: "สารบัญ",
      image: "/assets/images/port-example/3.png",
      page: "",
      link: "/create-portfolio/listofcontent",
    },
    {
      name: "ประวัติส่วนตัว",
      image: "/assets/images/port-example/4.png",
      page: "1",
      link: "/create-portfolio/personal-record",
    },
    {
      name: "ประวัติการศึกษา",
      image: "/assets/images/port-example/5.png",
      page: "2",
      link: "/create-portfolio/educational-record",
    },
    {
      name: "ผลงาน/กิจกรรม",
      image: "/assets/images/port-example/6.png",
      page: "3",
      link: "/create-portfolio/activities",
    },
    {
      name: "เกียรติบัตร",
      image: "/assets/images/port-example/7.png",
      page: "4",
      link: "/create-portfolio/certificate",
    },
  ]);

  const removePort = () => {
    let arrPort = [...port];
    arrPort.splice(selectedPort, 1);
    if (arrPort.length < 1) {
      setSelectedPort(-1);
      setPort([...arrPort]);
      return;
    }
    setPort([...arrPort]);
  };

  return (
    <div>
      <div className="px-[104px] py-[29px]">
        <MoveToTop />
        <Breadcrumb route={route} />
        <div className="text-center text-[28px] font-semibold my-12">
          สร้างแฟ้มสะสมผลงาน
        </div>
        <StateCreate state={9} />
      </div>
      {port.length > 0 && (
        <div className="px-[104px] pt-[28px] pb-[38px] bg-[#FFEC85]">
          <div className="flex justify-center mb-[38px]">ดูตัวอย่าง</div>
          <div className="flex gap-x-[81px]">
            {port.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center gap-y-[13px] cursor-pointer"
                  onClick={() => setSelectedPort(index)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width={22}
                    height={32}
                  />
                  <div
                    className={`text-xs ${
                      index == selectedPort && "opacity-50"
                    }`}
                  >
                    {item.name}
                  </div>
                  <div
                    className={`text-xs ${
                      index == selectedPort && "opacity-50"
                    }`}
                  >
                    {item.page}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {(selectedPort < 0 || selectedPort >= port.length) && (
        <div className="grid grid-cols-2 gap-x-9 px-[104px] pt-[42px] py-[34px]">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-x-[32px] mt-[13px] mb-[43px]">
              <div
                className="border-t-[10px] border-transparent border-r-[20px] border-r-gray border-b-[10px] cursor-pointer"
                onClick={() => {
                  page - 1 > 0 && setPage(page - 1);
                }}
              ></div>
              <div className="text-lg font-semibold">
                หน้า: {port.length > 0 ? page : 0} / {port.length}
              </div>
              <div
                className="border-t-[10px] border-transparent border-l-[20px] border-l-gray border-b-[10px] cursor-pointer"
                onClick={() => {
                  page < port.length && setPage(page + 1);
                }}
              ></div>
            </div>
            <img
              src={port.length > 0 && port[page - 1].image}
              alt={port.length > 0 && port[page - 1].name}
              width={595}
              height={859}
            />
          </div>
          <div>
            <div className="text-lg font-semibold mb-[18px]">ดาวน์โหลด PDF</div>
            <div className="w-full rounded-[11px] bg-[#FFEC85] p-6">
              <div className="font-semibold mb-2">portfolio-2022-04-01.pdf</div>
              <div className="font-semibold mb-4">6.0 MB</div>
              <div className="flex justify-center">
                <button className="text-lg text-white font-semibold bg-black py-[11px] px-[26px] rounded-full">
                  ดาวน์โหลดแฟ้มสะสมผลงาน
                </button>
              </div>
            </div>
            <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
            <div className="text-lg font-semibold mb-[18px]">
              แชร์แฟ้มสะสมผลงาน:
            </div>
            <div className="flex gap-x-[9px]">
              <div className="flex bg-[#5D5D5D] rounded-[6px] divide-x-2 divide-[#4E4E4E] w-[144px]">
                <div className="flex items-center py-3 px-2.5">
                  <img
                    src="/assets/icons/comport.svg"
                    alt="comport"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="py-2 px-2.5">
                  <div className="text-xs text-white">แชร์บน</div>
                  <div className="font-semibold text-white">Comport</div>
                </div>
              </div>
              <div className="flex bg-[#475993] rounded-[6px] divide-x-2 divide-[#3B4C7D] w-[144px]">
                <div className="flex items-center py-3 px-2.5">
                  <img
                    src="/assets/icons/facebook-white.svg"
                    alt="comport"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="py-2 px-2.5">
                  <div className="text-xs text-white">แชร์บน</div>
                  <div className="font-semibold text-white">Facebook</div>
                </div>
              </div>
              <div className="flex bg-[#03A9F4] rounded-[6px] divide-x-2 divide-[#0690CF] w-[144px]">
                <div className="flex items-center py-3 px-2.5">
                  <img
                    src="/assets/icons/twitter-white.svg"
                    alt="comport"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="py-2 px-2.5">
                  <div className="text-xs text-white">แชร์บน</div>
                  <div className="font-semibold text-white">Twitter</div>
                </div>
              </div>
              <div className="flex bg-gradient-to-r from-[#94349F] via-[#FE1F1F] to-[#FD973C] rounded-[6px] divide-x-2 divide-[#C01A33] w-[144px]">
                <div className="flex items-center py-3 px-2.5">
                  <img
                    src="/assets/icons/instagram-white.svg"
                    alt="comport"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="py-2 px-2.5">
                  <div className="text-xs text-white">แชร์บน</div>
                  <div className="font-semibold text-white">Instagram</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedPort >= 0 && selectedPort < port.length && (
        <div className="flex flex-col items-center px-[104px] pt-[36px] pb-[42px]">
          <div className="flex gap-x-[229px] mb-9">
            <Link href={port[selectedPort].link}>
              <button className="text-xl text-white px-[26px] py-[13px] bg-[#05AB29] rounded-full">
                แก้ไขหน้านี้
              </button>
            </Link>
            <button
              className="text-xl text-white px-[26px] py-[13px] bg-red rounded-full"
              onClick={removePort}
            >
              ลบหน้านี้
            </button>
          </div>
          <img
            src={port[selectedPort].image}
            alt={port[selectedPort].image}
            width={698}
            height={1008}
          />
        </div>
      )}
    </div>
  );
};

export default Download;
