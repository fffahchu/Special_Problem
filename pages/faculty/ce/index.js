import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const FacultyofEngineering = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "แนะนำคณะ",
      link: "/faculty/all-faculty",
    },
    {
      title: "วิศวะคอม",
      link: "/faculty/ce",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-left text-[28px] font-semibold mt-[48px]">
        คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์{" "}
      </div>{" "}
      <div className="mt-[16px] bg-cover bg-[url('https://t3.ftcdn.net/jpg/02/27/91/24/240_F_227912451_kaWIwRyRndDYUIVwY4IPOj3DNcCc5Rkg.jpg')] h-[364px] w-full">
        <div className="text-[#FED502] font-outline-4 text-center uppercase text-[64px] font-extrabold pt-[128px] pr-[28px]">
          computer engineering{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex justify-center gap-32 my-[150px]">
        <Link href="#" className="flex flex-row gap-2">
          <div className="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/8988/8988906.png"
              className="w-[125px] h-[125px] rounded-full hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="font-semibold pt-[48px]"> รีวิวคณะ/สาขา </div>{" "}
        </Link>{" "}
        <Link href="#" className="flex flex-row gap-2">
          <div className="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/9028/9028927.png"
              className="w-[125px] h-[125px] hover:scale-110 transition duration-300 ease-in-out rounded-full"
            />
          </div>{" "}
          <div className="font-semibold pt-[48px]"> รีวิวกิจกรรม/ค่าย </div>{" "}
        </Link>{" "}
        <Link href="#" className="flex flex-row gap-2">
          <div className="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/9028/9028950.png"
              className="w-[125px] h-[125px] rounded-full hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="font-semibold pt-[48px]"> รีวิวทั่วไป </div>{" "}
        </Link>{" "}
      </div>{" "}
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px]">
        หลักสูตรของภาควิชาวิศวกรรมคอมพิวเตอร์{" "}
      </div>{" "}
      <div className="bg-[#FFEC85] text-left text-[18px] font-semibold mt-[16px] py-[32px] pl-[8px]">
        หลักสูตรรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ (Bachelor of
        Engineering Program in Computer Engineering){" "}
      </div>{" "}
      <div className="bg-[#FAFAFA] shadow-md">
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[32px] pl-[32px]">
          ชื่อหลักสูตร{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold my-[8px] pl-[56px]">
          ชื่อภาษาไทย{" "}
          <span className="text-[18px] font-normal">
            : หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์{" "}
          </span>{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อภาษาอังกฤษ{" "}
          <span className="text-[18px] font-normal">
            : Bachelor of Engineering Program in Computer Engineering{" "}
          </span>{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[24px] pl-[32px]">
          ชื่อปริญญาและสาขาวิชา{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อเต็ม (ภาษาไทย){" "}
          <span className="text-[18px] font-normal">
            : วิศวกรรมศาสตร์บัญฑิต (วิศวกรรมคอมพิวเตอร์){" "}
          </span>{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อเต็ม (ภาษาอังกฤษ){" "}
          <span className="text-[18px] font-normal">
            : Bachelor of Engineering Program in Computer Engineering{" "}
          </span>{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อย่อ (ภาษาไทย){" "}
          <span className="text-[18px] font-normal">
            : วศ.บ. (วิศวกรรมคอมพิวเตอร์){" "}
          </span>{" "}
        </div>{" "}
        <div className="text-[18px] font-semibold pl-[56px] pb-[32px]">
          ชื่อย่อ (ภาษาอังกฤษ){" "}
          <span className="text-[18px] font-normal">
            : B.Eng. (Computer Engineering){" "}
          </span>{" "}
        </div>{" "}
      </div>{" "}
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px] mt-[64px]">
        ข่าวประชาสัมพันธ์{" "}
      </div>{" "}
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[56px] mx-auto max-w-[1232px]">
        <Link
          href="https://www.camphub.in.th/cesca-18/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/CESCa18-Banner1200x630.png.webp"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            CESCa ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ ครั้งที่18{" "}
          </div>{" "}
        </Link>{" "}
        <Link
          href="https://www.camphub.in.th/comcamp-34/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/Banner_Camphub.jpg.webp"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            {" "}
            Comcamp34 ค่ายวิศวะคอมฯ มจธ.{" "}
          </div>{" "}
        </Link>{" "}
        <Link
          href="https://www.camphub.in.th/click-camp-13/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/01/ClickCamp13-camphub-banner-edited.jpg.webp"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            Click Camp13 ภาควิชาวิศวกรรมคอมพิวเตอร์มหาวิทยาลัยมหิดล{" "}
          </div>{" "}
        </Link>{" "}
        <Link
          href="https://www.camphub.in.th/to-gear-66-ce-kmitl/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2022/12/togear_ohmposter.jpg.webp"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            To Gear66 CE KMITL–ค่ายพอร์ตแนะนำพอร์ตวิศวะคอม สจล.💻{" "}
          </div>{" "}
        </Link>{" "}
        <Link
          href="https://www.camphub.in.th/let-me-tired-camp-2/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2022/10/LMT_Banner_CampHub.jpg"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            ค่ายลองของ Let Me Tired Camp#2 💻⚙️
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/bitbyte12s/"
          target="_blank"
          className="flex-col"
        >
          <div className="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2016/05/1363-bitbyte.jpg"
              className="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>{" "}
          <div className="text-center pt-2 font-semibold">
            ค่ายถึงบิตถึงไบต์ ครั้งที่12 จังหวัดน่าน{" "}
          </div>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default FacultyofEngineering;
