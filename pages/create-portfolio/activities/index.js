import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const Activities = () => {
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
  const [selectTemp, setSelectTemp] = useState(0);

  const [activities, setActivities] = useState([
    {
      name: "รูปแบบที่ 1",
      image: "/assets/images/portfolio/portfolio-4-6.png",
    },
  ]);
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
            1 จาก 2
          </div>
        </div>
        <div className="text-lg font-bold mb-9">
          รูปแบบการจัดหน้าผลงาน/กิจกรรม
        </div>
        <div className="flex gap-8 mb-12">
          {activities.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center w-[250px] relative gap-2"
                onClick={() => {
                  setSelectTemp(index);
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={361}
                  className="rounded-[6px] cursor-pointer"
                />
                <div>{item.name}</div>
                {index == selectTemp && (
                  <img
                    src="../assets/icons/check-green.svg"
                    alt="select"
                    width="26"
                    height="26"
                    className="absolute top-4 right-4"
                  />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href="/create-portfolio/activities/createActivity">
            <button className="flex gap-1.5 items-center text-white font-bold bg-black rounded-full py-[13px] px-[22px]">
              <img
                src="../assets/icons/plus-white.svg"
                alt="plus"
                width="14"
                height="14"
              />
              สร้างหน้าใหม่
            </button>
          </Link>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      {/* <div className="flex justify-between items-center">
        <Link href="/create-portfolio/educational-record">
          <button className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px]">
            <img
              src="/assets/icons/arrow-left.svg"
              alt="arrow-left"
              width="28"
              height="28"
            />
            ก่อนหน้า
          </button>
        </Link>
        <Link href="/create-portfolio/certificate">
          <button className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px]">
            ถัดไป
            <img
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width="28"
              height="28"
            />
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default Activities;
