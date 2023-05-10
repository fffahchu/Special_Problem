import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const route = [
  {
    title: "หน้าหลัก",
    link: "/member",
  },
  {
    title: "คลังความรู้",
    link: "/education",
  },
  {
    title: "คอร์สเรียนเสริม",
    link: "/education/learning",
  },
  {
    title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1",
    link: "/course-ex/topic1",
  },
];

function TopicOne() {
  return (
    <div className="py-[29px]">
      <div className="px-[104px]">
        <MoveToTop />
        <Breadcrumb route={route} />
      </div>
      <div className="grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center">
        การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1
      </div>
      <div className="px-[104px]">
        <div className="grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]">
          <div className="flex">
            <a
              href="/course-ex"
              className="ml-[31px] py-[14px] px-[11px] my-[13px]"
            >
              รายละเอียดหลักสูตร
            </a>
            <a
              href="/course-ex/course"
              className="ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]"
            >
              เข้าเรียน
            </a>
            <a href="#" className="pl-[29px] my-[13px] py-[14px] px-[11px]">
              ผลการเรียน
            </a>
          </div>
          <hr className="border-1 border-black opacity-25 w-full" />
          <div className="flex flex-row-2">
            <div className="flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
              <ol className="ml-[40px] mt-[32px]">
                <li class="border-l-2 border-[#FFCA61]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <a
                      href="#"
                      className="w-[339px] h-[48px] ml-[12px] cursor-pointer"
                    >
                      ดาวน์โหลดเอกสาร
                    </a>
                  </div>
                </li>
                <li class="border-l-2 border-[#FFCA61]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <a
                      href="#"
                      className="w-[200px] h-[96px] ml-[28px] text-[#FFCA61]"
                    >
                      บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี
                    </a>
                  </div>
                </li>
                <li class="border-l-2 border-[#C5C5C5]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="w-[200px] h-[48px] text-black ml-[28px]">
                      บทที่ 2 ทำความรู้จักกับภาษาซี
                    </div>
                  </div>
                </li>
                <li class="border-l-2 border-[#C5C5C5]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="w-[200px] h-[96px] text-black ml-[28px]">
                      บทที่ 3
                      การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี
                    </div>
                  </div>
                </li>
                <li class="border-l-2 border-[#C5C5C5]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="w-[200px] h-[72px] text-black ml-[28px]">
                      บทที่ 4 การเขียนโปรแกรมแบบทางเลือก
                    </div>
                  </div>
                </li>
                <li class="border-l-2 border-[#C5C5C5]">
                  <div class="md:flex flex-start">
                    <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="w-[200px] h-[72px] text-black ml-[28px]">
                      บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ
                    </div>
                  </div>
                </li>
                <li class="border-l-2 border-white">
                  <div class="md:flex flex-start">
                    <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="white"
                        class="w-3 h-3"
                      >
                        <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                      </svg>
                    </div>
                    <div className="w-[200px] h-[48px] text-[#C5C5C5] ml-[12px]">
                      แบบทดสอบหลังเรียน
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex flex-col mx-auto">
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/vcaBmzK90fs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="mt-[20px] rounded-[11px]"
                allowFullScreen
              ></iframe>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-[8px] mt-[15px] drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] bg-white border-[1px] border-[#AEAEAE] w-[108px] h-[41px] text-[16px]"
                >
                  🡸 ก่อนหน้า
                </a>
                <a
                  href="/course-ex/topic2"
                  className="flex items-center justify-center rounded-[8px] mt-[15px] drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] bg-[#FFCA61] w-[108px] h-[41px] text-[16px]"
                >
                  ถัดไป 🡺
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicOne;