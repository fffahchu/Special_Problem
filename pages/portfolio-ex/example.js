import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const PortfolioExample = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "ตัวอย่างแฟ้มสะสมผลงาน",
      link: "/portfolio-ex",
    },
    {
      title: "ตัวอย่าง Portfolio EP.1",
      link: "/portfolio-ex/example",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-left text-[32px] font-semibold mt-[54px]">
        ตัวอย่าง Portfolio EP.1
      </div>
      <div className="flex justify-between items-end">
      <div className="flex items-center mt-[44px]">
        <img src="/assets/icons/calendar-black.svg" class="w-[17px] h-[17px]" />
        <span className="text-[14px] font-regular ml-[6px]">
          05 ก.ค. 2564 | สร้างโดย ศรสวรรค์ ทองเนื้อนิ่ม
        </span>
        <div className="flex items-center bg-[#C9F0D6] rounded-[6px] ml-[12px] px-[8px] py-[6px]">
          <img src="/assets/icons/view.svg" class="w-[17px] h-[17px]" />
          <span className="text-[14px] font-regular ml-[6px]">12.0 K</span>
        </div>
        </div>
        <div class="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/9028/9028927.png"
              class="w-[125px] h-[125px] hover:scale-110 transition duration-300 ease-in-out rounded-full"
            />
          </div>
      </div>
    </div>
  );
};

export default PortfolioExample;
