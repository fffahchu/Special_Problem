import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const facultyofInformationTechnology = () => {
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
      title: "ไอที",
      link: "/faculty/ce",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-left text-[28px] font-semibold mt-[48px]">
        คณะเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศ
      </div>
      <div class="mt-[16px] bg-cover bg-[url('https://t3.ftcdn.net/jpg/02/27/91/24/240_F_227912451_kaWIwRyRndDYUIVwY4IPOj3DNcCc5Rkg.jpg')] h-[364px] w-full">
        <div className="text-[#FED502] font-outline-4 text-center uppercase text-[64px] font-extrabold pt-[128px] pr-[28px]">
          Information Technology
        </div>
      </div>
      <div className="flex justify-center gap-32 my-[150px]">
        <Link href="#" className="flex flex-row gap-2">
          <div class="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/8988/8988906.png"
              class="w-[125px] h-[125px] rounded-full hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="font-semibold pt-[48px]">รีวิวคณะ/สาขา</div>
        </Link>
        <Link href="#" className="flex flex-row gap-2">
          <div class="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/9028/9028927.png"
              class="w-[125px] h-[125px] hover:scale-110 transition duration-300 ease-in-out rounded-full"
            />
          </div>
          <div className="font-semibold pt-[48px]">รีวิวกิจกรรม/ค่าย</div>
        </Link>
        <Link href="#" className="flex flex-row gap-2">
          <div class="relative overflow-hidden rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/256/9028/9028950.png"
              class="w-[125px] h-[125px] rounded-full hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="font-semibold pt-[48px]">รีวิวทั่วไป</div>
        </Link>
      </div>
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px]">
        หลักสูตรของภาควิชาเทคโนโลยีสารสนเทศ
      </div>
      <div className="bg-[#FFEC85] text-left text-[18px] font-semibold mt-[16px] py-[32px] pl-[8px]">
        หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ (Bachelor of Science
        Program in Information Technology)
      </div>
      <div className="bg-[#FAFAFA] shadow-md">
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[32px] pl-[32px]">
          ชื่อหลักสูตร
        </div>
        <div className="text-[18px] font-semibold my-[8px] pl-[56px]">
          ชื่อภาษาไทย
          <span className="text-[18px] font-normal">
            : หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีสารสนเทศ
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อภาษาอังกฤษ
          <span className="text-[18px] font-normal">
            : Bachelor of Science Program in Information Technology
          </span>
        </div>
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[24px] pl-[32px]">
          ชื่อปริญญาและสาขาวิชา
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อเต็ม (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วิทยาศาสตรบัณฑิต (เทคโนโลยีสารสนเทศ)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อเต็ม (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : Bachelor of Science (Information Technology)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อย่อ (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วท.บ. (เทคโนโลยีสารสนเทศ)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] pb-[32px]">
          ชื่อย่อ (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : B.Sc. (Information Technology)
          </span>
        </div>
      </div>
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px] mt-[64px]">
        ข่าวประชาสัมพันธ์
      </div>
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[56px]">
        <Link
          href="https://www.trueplookpanya.com/tcas/campnews/detail/1942"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://static.trueplookpanya.com/trueplookpanya/camp-news/file/1942/camp-news19428099.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ค่าย ITCAMP MAEJO 2023
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/tobeit66-kmitl/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2022/05/Frame-7.jpg.webp"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ToBeIT’66 @KMITL เสริมความคิด ติดความรู้ ก้าวเข้าสู่เด็กไอที
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/itcamp-18/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2022/06/banner-1.jpg.webp"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ITCAMP 18 | A Post-apocalyptic World
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/inspire-it65-itkmitl/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2021/11/camphub_cover.jpg.webp"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            Inspire IT65 ไอทีห้องแนะแนว
          </div>
        </Link>
        <Link
          href="https://www.it.kmitl.ac.th/th/news/12470/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.it.kmitl.ac.th/wp-content/uploads/2021/10/resize_1300x867pix_TCAS65_round-1_portfolio.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            TCAS 65 รอบ 1 [Portfolio] คณะไอทีลาดกระบัง
          </div>
        </Link>
        <Link
          href="https://tcaster.net/2020/03/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%9D%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%84%E0%B8%AD/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://tcaster.net/wp-content/uploads/2020/03/%E0%B8%84%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%9D%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%84%E0%B8%AD%E0%B8%97%E0%B8%B5-%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88-12-WIP-Camp-12_090363.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ค่ายเส้นทางสู่ฝันนักไอที ครั้งที่ 12 (WIP Camp #12)
          </div>
        </Link>
      </div>
    </div>
  );
};

export default facultyofInformationTechnology;
