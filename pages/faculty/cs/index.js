import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const FacultyofScience = () => {
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
      title: "วิทย์คอม",
      link: "/faculty/ce",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-left text-[28px] font-semibold mt-[48px]">
        คณะวิทยาศาสตร์ สาขาคอมพิวเตอร์
      </div>
      <div class="mt-[16px] bg-cover bg-[url('https://t3.ftcdn.net/jpg/02/27/91/24/240_F_227912451_kaWIwRyRndDYUIVwY4IPOj3DNcCc5Rkg.jpg')] h-[364px] w-full">
        <div className="text-[#FED502] font-outline-4 text-center uppercase text-[64px] font-extrabold pt-[128px] pr-[28px]">
          computer science
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
        หลักสูตรของภาควิชาวิทยาการคอมพิวเตอร์
      </div>
      <div className="bg-[#FFEC85] text-left text-[18px] font-semibold mt-[16px] py-[32px] pl-[8px]">
        หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์ (Bachelor of Science
        Program in Computer Science)
      </div>
      <div className="bg-[#FAFAFA] shadow-md">
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[32px] pl-[32px]">
          ชื่อหลักสูตร
        </div>
        <div className="text-[18px] font-semibold my-[8px] pl-[56px]">
          ชื่อภาษาไทย
          <span className="text-[18px] font-normal">
            : หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อภาษาอังกฤษ
          <span className="text-[18px] font-normal">
            : Bachelor of Science Program in Computer Science
          </span>
        </div>
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[24px] pl-[32px]">
          ชื่อปริญญาและสาขาวิชา
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อเต็ม (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อเต็ม (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : Bachelor of Science Program in Computer Science
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อย่อ (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วท.บ. (วิทยาการคอมพิวเตอร์)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] pb-[32px]">
          ชื่อย่อ (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : B.Sc. (Computer Science)
          </span>
        </div>
      </div>
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px] mt-[64px]">
        ข่าวประชาสัมพันธ์
      </div>
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[56px] mx-auto max-w-[1232px]">
        <Link href="https://cscamp.net/" target="_blank" className="flex-col">
          <img
            src="https://cscamp.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoCamp.4f75f67f.webp&w=828&q=100"
            class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
          />
          <div className="text-center pt-2 font-semibold">
            CSCamp 15 ค่ายวิทยาการคอมพิวเตอร์ พระจอมเกล้าลาดกระบัง
          </div>
        </Link>
        <Link
          href="https://www.trueplookpanya.com/tcas/campnews/detail/1940"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://static.trueplookpanya.com/trueplookpanya/camp-news/file/1940/camp-news19405114.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            Computer Science KU Open House 2022
          </div>
        </Link>
        <Link
          href="https://www.cs.science.cmu.ac.th/2020/03/05/%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.cs.science.cmu.ac.th/wp-content/uploads/2020/03/88960301_2864487996928267_5863646891899617280_n.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ภาควิชาวิทยาการคอมพิวเตอร์ เปิดรับสมัครผู้สนใจเข้าร่วมค่าย Young
            Computer Scientist Camp #1 ในหัวข้อ Social Media And Beyond
            ระหว่างวันที่ 16 – 20 มีนาคม 2563
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/comcamp-18-maejo/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2019/10/comcamp-1200.jpg.webp"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            ค่ายยุวชนคอมพิวเตอร์ครั้งที่ 18 ม.แม่โจ้
          </div>
        </Link>
        <Link
          href="http://cs2.science.swu.ac.th/Default.aspx?tabid=16797&ArtMID=37627&ArticleID=12825"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="http://cs2.science.swu.ac.th/Portals/70/EasyDNNNews/12825/600600p37627EDNmaintest3.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            22-23 ธันวาคม 2562: ขอเชิญนักเรียนและผู้สนใจเข้าร่วมงาน Open House
            Computer Science
          </div>
        </Link>
        <Link
          href="https://www.camphub.in.th/jpc11/"
          target="_blank"
          className="flex-col"
        >
          <div class="relative overflow-hidden rounded-[12px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2016/05/659.jpg"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="text-center pt-2 font-semibold">
            Junior Programmer Camp 11
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FacultyofScience;
