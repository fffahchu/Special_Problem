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
    link: "/course-ex/summary1",
  },
];

function Sum() {

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
                        <a href="/course-ex" className="ml-[31px] py-[14px] px-[11px] my-[13px]">
                            รายละเอียดหลักสูตร
                        </a>
                        <a href="/course-ex/course" className="ml-[18px] my-[13px] py-[14px] px-[11px] ">
                            เข้าเรียน
                        </a>
                        <a href="#" className="ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]">
                            ผลการเรียน
                        </a>
                    </div>
                    <hr className="border-1 border-black opacity-25 w-full" />
                    <div className="ml-[29px] mt-[32px]">
                        สถานะเรียนคุณ สุธิดา มานะยิ่ง
                    </div>
                    <div className="flex flex-row-3 mx-auto">
                        <img
                            className="mt-[57px]"
                            src="/assets/images/course/owl.png"
                        />
                        <div className="flex flex-col mr-[50px]">
                            <div className="font-[20px] text-center mt-[64px] mb-[56px]">
                                บทเรียน
                            </div>
                            <ul class="chart-skills1">
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <div className="font-[20px] text-center mt-[64px]">
                                แบบทดสอบหลังเรียน
                            </div>
                            <div className="font-[20px] text-center mt-[8px] mb-[24px]">
                                ยังไม่ได้ทำ
                            </div>
                            <ul class="chart-skills1">
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-row mt-[69px] ml-[28px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        <div className="font-[20px] ml-[6px] mb-[42px]">
                            ไม่สามารถขอรับวุฒิบัตรได้ เนื่องจากการเรียนหรือทดสอบไม่ผ่านตามที่กำหนด
                        </div>
                    </div>
                    <hr className="border-1 border-black opacity-25 mx-[28px]" />
                    <div className="flex flex-row-3 w-full mb-[21px]">
                        <div className="font-[18px] font-semibold mt-[22px] ml-[36px] w-[288px]">
                            การเขียนโปรแกรมภาษาซี
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <a href="#" className="font-[18px] w-[411px]">
                                    บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี
                                </a>
                            </div>
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <a href="#" className="font-[18px] w-[411px]">
                                    บทที่ 2 ทำความรู้จักกับภาษาซี
                                </a>
                            </div>
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <a href="#" className="font-[18px] w-[411px]">
                                    บทที่ 3 การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี
                                </a>
                            </div>
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <a href="#" className="font-[18px] w-[411px]">
                                    บทที่ 4 การเขียนโปรแกรมแบบทางเลือก
                                </a>
                            </div>
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                                </svg>
                                <a href="#" className="font-[18px] w-[411px]">
                                    บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col mr-[32px] m-auto">
                            <div className="w-[411px] font-[15px] text-center bg-[#C5C5C5] ml-[15px] mt-[22px]">
                                0%
                            </div>
                            <div className="w-[411px] font-[15px] text-center bg-[#C5C5C5] ml-[15px] mt-[22px]">
                                0%
                            </div>
                            <div className="w-[411px] font-[15px] text-center bg-[#C5C5C5] ml-[15px] mt-[22px]">
                                0%
                            </div>
                            <div className="w-[411px] font-[15px] text-center bg-[#C5C5C5] ml-[15px] mt-[50px]">
                                0%
                            </div>
                            <div className="w-[411px] font-[15px] text-center bg-[#C5C5C5] ml-[15px] mt-[22px]">
                                0%
                            </div>
                        </div>
                    </div>
                    <hr className="border-1 border-black opacity-25 mx-[28px]" />
                    <div className="flex flex-row-3 w-full mb-[21px]">
                        <div className="font-[18px] font-semibold mt-[22px] ml-[36px] w-[288px]">
                            แบบทดสอบหลังเรียน
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row mt-[22px] items-center ml-[15px]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[18px] h-[18px] mr-[6px]">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>

                                <div className="font-[18px] w-[411px]">
                                    แบบทดสอบหลังเรียน
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mr-[32px] m-auto">
                            <div className="w-[411px] font-[15px] font-semibold ml-[15px] mt-[22px]">
                                ยังไม่ได้ทำ
                            </div>
                        </div>
                    </div>
                    <hr class="class-4" />
                </div>
            </div>
        </div>
    );
}

export default Sum;