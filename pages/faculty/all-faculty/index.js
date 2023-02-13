import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const Faculty = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "แนะนำคณะ",
      link: "/faculty/all-faculty",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        แนะนำคณะ
      </div>
      {/* วิทย์คอม */}
      <div className="flex justify-between items-center">
        <div className="text-left text-[25px] font-semibold">วิทย์คอม</div>
        <a
          href="/faculty/cs"
          className="text-right text-[16px] font-semibold underline"
        >
          ดูทั้งหมด
        </a>
      </div>
      <hr className="mt-[18px] mb-[16px]" />
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
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[104px]">
        <div className="flex-col">
          <Link href="https://cscamp.net/" target="_blank" className="flex-col">
            <img
              src="https://cscamp.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogoCamp.4f75f67f.webp&w=828&q=100"
              class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
            />
            <div className="text-center pt-2 font-semibold">
              CSCamp 15 ค่ายวิทยาการคอมพิวเตอร์ พระจอมเกล้าลาดกระบัง
            </div>
          </Link>
        </div>
        <div className="flex-col">
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
        </div>
      </div>
      {/* วิทย์คอม */}
      {/* วิศวะคอม */}
      <div className="flex justify-between items-center">
        <div className="text-left text-[25px] font-semibold">วิศวะคอม</div>
        <a
          href="/faculty/ce"
          className="text-right text-[16px] font-semibold underline"
        >
          ดูทั้งหมด
        </a>
      </div>
      <hr className="mt-[18px] mb-[16px]" />
      <div className="bg-[#FFCA61] rounded-[7px] text-left text-[25px] font-semibold py-[25px] pl-[8px]">
        หลักสูตรของภาควิชาวิศวกรรมคอมพิวเตอร์
      </div>
      <div className="bg-[#FFEC85] text-left text-[18px] font-semibold mt-[16px] py-[32px] pl-[8px]">
        หลักสูตรรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์ (Bachelor of
        Engineering Program in Computer Engineering)
      </div>
      <div className="bg-[#FAFAFA] shadow-md">
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[32px] pl-[32px]">
          ชื่อหลักสูตร
        </div>
        <div className="text-[18px] font-semibold my-[8px] pl-[56px]">
          ชื่อภาษาไทย
          <span className="text-[18px] font-normal">
            : หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อภาษาอังกฤษ
          <span className="text-[18px] font-normal">
            : Bachelor of Engineering Program in Computer Engineering
          </span>
        </div>
        <div className="text-[18px] font-semibold text-[#FFCA61] pt-[24px] pl-[32px]">
          ชื่อปริญญาและสาขาวิชา
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อเต็ม (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วิศวกรรมศาสตร์บัญฑิต (วิศวกรรมคอมพิวเตอร์)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px]">
          ชื่อเต็ม (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : Bachelor of Engineering Program in Computer Engineering
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] my-[8px]">
          ชื่อย่อ (ภาษาไทย)
          <span className="text-[18px] font-normal">
            : วศ.บ. (วิศวกรรมคอมพิวเตอร์)
          </span>
        </div>
        <div className="text-[18px] font-semibold pl-[56px] pb-[32px]">
          ชื่อย่อ (ภาษาอังกฤษ)
          <span className="text-[18px] font-normal">
            : B.Eng. (Computer Engineering)
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[104px]">
        <div className="flex-col">
          <Link
            href="https://www.camphub.in.th/cesca-18/"
            target="_blank"
            className="flex-col"
          >
            <div class="relative overflow-hidden rounded-[12px]">
              <img
                src="https://www.camphub.in.th/wp-content/uploads/2023/02/CESCa18-Banner1200x630.png.webp"
                class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="text-center pt-2 font-semibold">
              CESCa ค่ายเยาวชนวิศวกรรมคอมพิวเตอร์ ครั้งที่ 18
            </div>
          </Link>
        </div>
        <div className="flex-col">
          <Link
            href="https://www.camphub.in.th/comcamp-34/"
            target="_blank"
            className="flex-col"
          >
            <div class="relative overflow-hidden rounded-[12px]">
              <img
                src="https://www.camphub.in.th/wp-content/uploads/2023/02/Banner_Camphub.jpg.webp"
                class="w-[621px] h-[349px] rounded-[12px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="text-center pt-2 font-semibold">
              Comcamp34 ค่ายวิศวะคอมฯ มจธ.
            </div>
          </Link>
        </div>
      </div>
      {/* วิศวะคอม */}
      {/* ไอที */}
      <div className="flex justify-between items-center">
        <div className="text-left text-[25px] font-semibold">ไอที</div>
        <a
          href="/faculty/it"
          className="text-right text-[16px] font-semibold underline"
        >
          ดูทั้งหมด
        </a>
      </div>
      <hr className="mt-[18px] mb-[16px]" />
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
      <div className="grid grid-cols-2 gap-14 mt-[40px] mb-[104px]">
        <div className="flex flex-col">
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
        </div>
        <div className="flex flex-col">
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
        </div>
      </div>
      {/* ไอที */}
    </div>
  );
};

export default Faculty;
