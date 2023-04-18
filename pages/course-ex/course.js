// import React, { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Breadcrumb from "@components/Breadcrumb";
// import MoveToTop from "@components/MoveToTop";
// import Link from "next/link";
// import Download from "pages/create-portfolio/download";

// const route = [{
//         title: "หน้าหลัก",
//         link: "/member",
//     },
//     {
//         title: "คลังความรู้",
//         link: "#",
//     },
//     {
//         title: "คอร์สเรียนเสริม",
//         link: "#",
//     },
//     {
//         title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1",
//         link: "#",
//     },
// ];

// function Course() {

// <<<<<<< Updated upstream
//     return ( <
//         div className = "py-[29px]" >
//         <
//         div className = "px-[104px]" >
//         <
//         MoveToTop / >
//         <
//         Breadcrumb route = { route }
//         /> <
//         /div> <
//         div className = "grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center" >
//         การเขียนโปรแกรมคอมพิวเตอร์ พื้ นฐาน ด้ วยภาษาซี 1 <
//         /div> <
//         div className = "px-[104px]" >
//         <
//         div className = "grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]" >
//         <
//         div className = "flex" >
//         <
//         a href = "/course-ex"
//         className = "ml-[31px] py-[14px] px-[11px] my-[13px]" >
//         รายละเอียดหลั กสูตร <
//         /a> <
//         a href = "/course-ex/course"
//         className = "ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]" >
//         เข้ าเรียน <
//         /a> <
//         a href = "/course-ex/summary"
//         className = "pl-[29px] my-[13px] py-[14px] px-[11px]" >
//         ผลการเรียน <
//         /a> <
//         /div> <
//         hr className = "border-1 border-black opacity-25 w-full" / >
//         <
//         div className = "flex flex-row-2" >
//         <
//         div className = "flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" >
//         <
//         ol className = "ml-[40px] mt-[32px]" >
//         <
//         li className = "border-l-2 border-[#FFCA61]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-5 h-5" >
//         <
//         path fill - rule = "evenodd"
//         d = "M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
//         clip - rule = "evenodd" / >
//         <
//         /svg>

//         <
//         /div> <
//         a href = "#"
//         className = "w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer" > ดาวน์ โหลดเอกสาร < /a> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 1 การพั ฒนาโปรแกรมคอมพิวเตอร์ และการเขียนผั งงานซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[48px] text-black ml-[28px]" > บทที่ 2 ทำความรู้ จั กกั บภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 3 การพั ฒนาโปรแกรมคอมพิวเตอร์ ที่ ทำงานบนระบบปฏิบั ติการดอสด้ วยภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 4 การเขียนโปรแกรมแบบทางเลือก < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 5 การเขียนโปรแกรมแบบทำซ้ ำ < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-white" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" / >
//         <
//         /svg>

// =======
// <<<<<<< HEAD
// <<<<<<< HEAD
// <<<<<<< HEAD
//     return (
//         <div className="py-[29px]">
//             <div className="px-[104px]">
//                 <MoveToTop />
//                 <Breadcrumb route={route} />
//             </div>
//             <div className="grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center">
//                 การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1
//             </div>
//             <div className="px-[104px]">
//                 <div className="grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]">
//                     <div className="flex">
//                         <a href="/course-ex" className="ml-[31px] py-[14px] px-[11px] my-[13px]">
//                             รายละเอียดหลักสูตร
//                         </a>
//                         <a href="/course-ex/course" className="ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]">
//                             เข้าเรียน
//                         </a>
//                         <a href="/course-ex/summary" className="pl-[29px] my-[13px] py-[14px] px-[11px]">
//                             ผลการเรียน
//                         </a>
//                     </div>
//                     <hr className="border-1 border-black opacity-25 w-full" />
//                     <div className="flex flex-row-2">
//                         <div className="flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
//                             <ol className="ml-[40px] mt-[32px]">
//                                 <li class="border-l-2 border-[#FFCA61]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
//                                                 <path fillRule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clipRule="evenodd" />
//                                             </svg>
//                                         </div>
//                                         <a href="#" className="w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer">ดาวน์โหลดเอกสาร</a>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-[#C5C5C5]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                             </svg>
//                                         </div>
//                                         <div className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี</div>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-[#C5C5C5]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                             </svg>
//                                         </div>
//                                         <div className="w-[200px] h-[48px] text-black ml-[28px]">บทที่ 2 ทำความรู้จักกับภาษาซี</div>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-[#C5C5C5]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                             </svg>
//                                         </div>
//                                         <div className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 3 การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี</div>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-[#C5C5C5]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                             </svg>
//                                         </div>
//                                         <div className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 4 การเขียนโปรแกรมแบบทางเลือก</div>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-[#C5C5C5]">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                             </svg>
//                                         </div>
//                                         <div className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ</div>
//                                     </div>
//                                 </li>
//                                 <li class="border-l-2 border-white">
//                                     <div class="md:flex flex-start">
//                                         <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
//                                                 <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
//                                             </svg>

//                                         </div>
//                                         <div className="w-[200px] h-[48px] text-[#C5C5C5] ml-[12px]">แบบทดสอบหลังเรียน</div>
//                                     </div>
//                                 </li>
//                             </ol>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
// =======
//     return ( <
//         div className = "py-[29px]" >
//         <
//         div className = "px-[104px]" >
//         <
//         MoveToTop / >
//         <
//         Breadcrumb route = { route }
//         /> <
//         /div> <
//         div className = "grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center" >
//         การเขียนโปรแกรมคอมพิวเตอร์ พื้ นฐาน ด้ วยภาษาซี 1 <
//         /div> <
//         div className = "px-[104px]" >
//         <
//         div className = "grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]" >
//         <
//         div className = "flex" >
//         <
//         a href = "/course-ex"
//         className = "ml-[31px] py-[14px] px-[11px] my-[13px]" >
//         รายละเอียดหลั กสูตร <
//         /a> <
//         a href = "/course-ex/course"
//         className = "ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]" >
//         เข้ าเรียน <
//         /a> <
//         a href = "/course-ex/summary"
//         className = "pl-[29px] my-[13px] py-[14px] px-[11px]" >
//         ผลการเรียน <
//         /a> <
//         /div> <
//         hr className = "border-1 border-black opacity-25 w-full" / >
//         <
//         div className = "flex flex-row-2" >
//         <
//         div className = "flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" >
//         <
//         ol className = "ml-[40px] mt-[32px]" >
//         <
//         li className = "border-l-2 border-[#FFCA61]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-5 h-5" >
//         <
//         path fill - rule = "evenodd"
//         d = "M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
//         clip - rule = "evenodd" / >
//         <
//         /svg>

//         <
//         /div> <
//         a href = "#"
//         className = "w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer" > ดาวน์ โหลดเอกสาร < /a> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 1 การพั ฒนาโปรแกรมคอมพิวเตอร์ และการเขียนผั งงานซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[48px] text-black ml-[28px]" > บทที่ 2 ทำความรู้ จั กกั บภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 3 การพั ฒนาโปรแกรมคอมพิวเตอร์ ที่ ทำงานบนระบบปฏิบั ติการดอสด้ วยภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 4 การเขียนโปรแกรมแบบทางเลือก < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 5 การเขียนโปรแกรมแบบทำซ้ ำ < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-white" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" / >
//         <
//         /svg>

// =======
//     return ( <
//         div className = "py-[29px]" >
//         <
//         div className = "px-[104px]" >
//         <
//         MoveToTop / >
//         <
//         Breadcrumb route = { route }
//         /> <
//         /div> <
//         div className = "grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center" >
//         การเขียนโปรแกรมคอมพิวเตอร์ พื้ นฐาน ด้ วยภาษาซี 1 <
//         /div> <
//         div className = "px-[104px]" >
//         <
//         div className = "grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]" >
//         <
//         div className = "flex" >
//         <
//         a href = "/course-ex"
//         className = "ml-[31px] py-[14px] px-[11px] my-[13px]" >
//         รายละเอียดหลั กสูตร <
//         /a> <
//         a href = "/course-ex/course"
//         className = "ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]" >
//         เข้ าเรียน <
//         /a> <
//         a href = "/course-ex/summary"
//         className = "pl-[29px] my-[13px] py-[14px] px-[11px]" >
//         ผลการเรียน <
//         /a> <
//         /div> <
//         hr className = "border-1 border-black opacity-25 w-full" / >
//         <
//         div className = "flex flex-row-2" >
//         <
//         div className = "flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" >
//         <
//         ol className = "ml-[40px] mt-[32px]" >
//         <
//         li className = "border-l-2 border-[#FFCA61]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-5 h-5" >
//         <
//         path fill - rule = "evenodd"
//         d = "M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
//         clip - rule = "evenodd" / >
//         <
//         /svg>

//         <
//         /div> <
//         a href = "#"
//         className = "w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer" > ดาวน์ โหลดเอกสาร < /a> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 1 การพั ฒนาโปรแกรมคอมพิวเตอร์ และการเขียนผั งงานซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[48px] text-black ml-[28px]" > บทที่ 2 ทำความรู้ จั กกั บภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 3 การพั ฒนาโปรแกรมคอมพิวเตอร์ ที่ ทำงานบนระบบปฏิบั ติการดอสด้ วยภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 4 การเขียนโปรแกรมแบบทางเลือก < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 5 การเขียนโปรแกรมแบบทำซ้ ำ < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-white" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" / >
//         <
//         /svg>

// >>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
// =======
//     return ( <
//         div className = "py-[29px]" >
//         <
//         div className = "px-[104px]" >
//         <
//         MoveToTop / >
//         <
//         Breadcrumb route = { route }
//         /> <
//         /div> <
//         div className = "grid bg-[#FFCA61] w-full h-[65px] text-center text-[28px] font-semibold mt-[15px] mb-[22px] items-center" >
//         การเขียนโปรแกรมคอมพิวเตอร์ พื้ นฐาน ด้ วยภาษาซี 1 <
//         /div> <
//         div className = "px-[104px]" >
//         <
//         div className = "grid grid-cols-1 w-full shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] rounded-[11px]" >
//         <
//         div className = "flex" >
//         <
//         a href = "/course-ex"
//         className = "ml-[31px] py-[14px] px-[11px] my-[13px]" >
//         รายละเอียดหลั กสูตร <
//         /a> <
//         a href = "/course-ex/course"
//         className = "ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]" >
//         เข้ าเรียน <
//         /a> <
//         a href = "/course-ex/summary"
//         className = "pl-[29px] my-[13px] py-[14px] px-[11px]" >
//         ผลการเรียน <
//         /a> <
//         /div> <
//         hr className = "border-1 border-black opacity-25 w-full" / >
//         <
//         div className = "flex flex-row-2" >
//         <
//         div className = "flex w-[311px] h-[800px] bg-white drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" >
//         <
//         ol className = "ml-[40px] mt-[32px]" >
//         <
//         li className = "border-l-2 border-[#FFCA61]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#FFCA61] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-5 h-5" >
//         <
//         path fill - rule = "evenodd"
//         d = "M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z"
//         clip - rule = "evenodd" / >
//         <
//         /svg>

//         <
//         /div> <
//         a href = "#"
//         className = "w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer" > ดาวน์ โหลดเอกสาร < /a> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 1 การพั ฒนาโปรแกรมคอมพิวเตอร์ และการเขียนผั งงานซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[48px] text-black ml-[28px]" > บทที่ 2 ทำความรู้ จั กกั บภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[96px] text-black ml-[28px]" > บทที่ 3 การพั ฒนาโปรแกรมคอมพิวเตอร์ ที่ ทำงานบนระบบปฏิบั ติการดอสด้ วยภาษาซี < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 4 การเขียนโปรแกรมแบบทางเลือก < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-[#C5C5C5]" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" / >
//         <
//         /svg> <
//         /div> <
//         div className = "w-[200px] h-[72px] text-black ml-[28px]" > บทที่ 5 การเขียนโปรแกรมแบบทำซ้ ำ < /div> <
//         /div> <
//         /li> <
//         li className = "border-l-2 border-white" >
//         <
//         div className = "md:flex flex-start" >
//         <
//         div className = "bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 20 20"
//         fill = "white"
//         className = "w-3 h-3" >
//         <
//         path d = "M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" / >
//         <
//         /svg>

// >>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
// >>>>>>> Stashed changes
//         <
//         /div> <
//         div className = "w-[200px] h-[48px] text-[#C5C5C5] ml-[12px]" > แบบทดสอบหลั งเรียน < /div> <
//         /div> <
//         /li> <
//         /ol> <
//         /div> <
//         div className = "flex flex-col" >
//         <
//         div className = "text-[14px] text-black ml-[42px] mt-[24px]" > ดาวน์ โหลดเอกสารประกอบการเรียนทั้ งหมดของหลั กสูตรนี้ < /div> <
//         div className = "ml-[42px] mt-[14px] w-[746px] h-[145px] bg-white rounded-[11px] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]" >
//         <
//         div className = "flex flex-row" >
//         <
//         img src = "../assets/icons/pdf.png"
//         className = "ml-[28px] my-[28px]" / >
//         <
//         div className = "flex flex-col" >
//         <
//         div className = "text-[22px] font-semibold ml-[56px] mt-[42px]" > เอกสารประกอบการเรียน < /div> <
//         div className = "text-[16px] ml-[56px] mt-[18px]" > 3.16 MB < /div> <
//         /div> <
//         div className = "flex flex-col pl-[208px]" >
//         <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         viewBox = "0 0 24 24"
//         fill = "currentColor"
//         className = "w-7 h-7 mx-auto mt-[38px]" >
//         <
//         path fill - rule = "evenodd"
//         d = "M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
//         clip - rule = "evenodd" / >
//         <
//         /svg> <
//         div className = "text-[20px] mt-[18px]" > ดาวน์ โหลด < /div> <
//         /div> <
//         /div> <
//         /div> <
//         a href = "/course-ex/topic1"
//         className = "flex items-center justify-center rounded-[8px] mt-[42px] ml-[680px] drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] bg-[#FFCA61] w-[108px] h-[41px]" >
//         <
//         div className = "text-[16px] mr-[6px]" > ถั ดไป < /div> <
//         svg xmlns = "http://www.w3.org/2000/svg"
//         fill = "none"
//         viewBox = "0 0 24 24"
//         strokeWidth = "1.5"
//         stroke = "currentColor"
//         className = "w-[21px] h-[21px]" >
//         <
//         path strokeLinecap = "round"
//         strokeLinejoin = "round"
//         d = "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" / >
//         <
//         /svg> <
//         /a> <
//         /div> <
//         /div> <
//         /div> <
//         /div> <
//         /div>
// <<<<<<< Updated upstream
// =======
// <<<<<<< HEAD
// <<<<<<< HEAD
// >>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
// =======
// >>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
// =======
// >>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
// >>>>>>> Stashed changes
//     );
// }

// export default Course;




import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Download from "pages/create-portfolio/download";

const route = [
    {
        title: "หน้าหลัก",
        link: "/member",
    },
    {
        title: "คลังความรู้",
        link: "#",
    },
    {
        title: "คอร์สเรียนเสริม",
        link: "#",
    },
    {
        title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1",
        link: "#",
    },
];

function Course() {

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
                        <a href="/course-ex/course" className="ml-[18px] my-[13px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61]">
                            เข้าเรียน
                        </a>
                        <a href="/course-ex/summary" className="pl-[29px] my-[13px] py-[14px] px-[11px]">
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
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
                                                <path fill-rule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clip-rule="evenodd" />
                                            </svg>

                                        </div>
                                        <a href="#" className="w-[339px] h-[48px] text-[#ffa400] ml-[12px] cursor-pointer">ดาวน์โหลดเอกสาร</a>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#C5C5C5]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <div className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี</div>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#C5C5C5]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <div className="w-[200px] h-[48px] text-black ml-[28px]">บทที่ 2 ทำความรู้จักกับภาษาซี</div>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#C5C5C5]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <div className="w-[200px] h-[96px] text-black ml-[28px]">บทที่ 3 การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี</div>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#C5C5C5]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <div className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 4 การเขียนโปรแกรมแบบทางเลือก</div>
                                    </div>
                                </li>
                                <li class="border-l-2 border-[#C5C5C5]">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                            </svg>
                                        </div>
                                        <div className="w-[200px] h-[72px] text-black ml-[28px]">บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ</div>
                                    </div>
                                </li>
                                <li class="border-l-2 border-white">
                                    <div class="md:flex flex-start">
                                        <div class="bg-[#C5C5C5] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-3 h-3">
                                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                            </svg>

                                        </div>
                                        <div className="w-[200px] h-[48px] text-[#C5C5C5] ml-[12px]">แบบทดสอบหลังเรียน</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div className="flex flex-col mx-auto">
                            <div className="text-[14px] text-black mt-[24px]">ดาวน์โหลดเอกสารประกอบการเรียนทั้งหมดของหลักสูตรนี้</div>
                            <div className="mt-[14px] w-full h-[145px] bg-white rounded-[11px] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.25)]">
                                <div className="flex flex-row">
                                    <img src="../assets/icons/pdf.png" className="ml-[28px] my-[28px]" />
                                    <div className="flex flex-col">
                                        <div className="text-[22px] font-semibold ml-[56px] mt-[42px]">เอกสารประกอบการเรียน</div>
                                        <div className="text-[16px] ml-[56px] mt-[18px]">3.16 MB</div>
                                    </div>
                                    <div className="flex flex-col pl-[208px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 mx-auto mt-[38px]">
                                            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                        </svg>
                                        <div className="text-[20px] mt-[18px]">ดาวน์โหลด</div>
                                    </div>
                                </div>
                            </div>
                            <a href="/course-ex/topic1" className="flex items-center justify-center rounded-[8px] mt-[28px] ml-[680px] drop-shadow-[0px_4px_0px_rgba(0,0,0,0.25)] bg-[#FFCA61] w-[108px] h-[41px]">
                                <div className="text-[16px] mr-[6px]">ถัดไป</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-[21px] h-[21px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;