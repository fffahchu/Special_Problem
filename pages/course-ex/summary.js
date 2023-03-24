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
                    <img
                        className="ml-[30px] mt-[57px]"
                        src="/assets/images/course/owl.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sum;