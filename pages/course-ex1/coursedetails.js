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

function App() {

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
                        <button className="ml-[20px] py-[14px] px-[11px] rounded-[11px] bg-[#FFCA61] my-[13px] font-semibold">
                            รายละเอียดหลักสูตร
                        </button>
                        <button className="pl-[29px] my-[13px] font-semibold">
                            เข้าเรียน
                        </button>
                        <button className="pl-[40px] my-[13px] font-semibold">
                            ผลการเรียน
                        </button>
                    </div>
                    <hr className="border-1 border-black opacity-25 w-full" />
                    <div className="flex flex-col-3 w-full">
                        <img
                            src="https://lms.thaimooc.org/assets/courseware/v1/7aafc1bbfc5c39e17dbe01e7e210038d/asset-v1:KMUTT+KMUTT013+2019+type@asset+block/kmutt013_-_welcome.png"
                            className="ml-[20px] mt-[28px] w-[424px] h-[264px] rounded-[11px]"
                        />
                        <div className="ml-[17px] mt-[28px] w-[423px] h-[264px] grid grid-cols-1 divide-y divide-slate-500 border border-slate-500 rounded-[11px]">
                            <div className="flex flex-col-2 items-center">
                                <img
                                    src="../assets/icons/teacher.png"
                                    className="ml-[28px] w-[42px] h-[42px]"
                                />
                                <div className="ml-[30px] grid grid-rows-2">
                                    <div className="font-semibold text-[15px]">วิทยากร</div>
                                    <div className="font-semibold text-[16px]">คุณชนกชนม์ สังวรโยธิน</div>
                                </div>
                            </div>
                            <div className="flex flex-col-2 items-center">
                                <img
                                    src="../assets/icons/timer.png"
                                    className="ml-[28px] w-[42px] h-[42px]"
                                />
                                <div className="ml-[30px] grid grid-rows-2">
                                    <div className="font-semibold text-[15px]">ระยะเวลารวม</div>
                                    <div className="font-semibold text-[16px]">1 ชั่วโมง 45 นาที</div>
                                </div>
                            </div>
                            <div className="flex flex-col-2 items-center">
                                <img
                                    src="../assets/icons/money.png"
                                    className="ml-[28px] w-[42px] h-[42px]"
                                />
                                <div className="ml-[30px] grid grid-rows-2">
                                    <div className="font-semibold text-[15px]">ค่าธรรมเนียม</div>
                                    <div className="font-semibold text-[16px]">ฟรี</div>
                                </div>
                            </div>
                        </div>
                        <button className="font-semibold bg-[#FFCA61] ml-[20px] w-[217px] h-[48px] rounded-[11px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] mt-[28px]">
                            เข้าเรียน
                        </button>
                    </div>
                    <div className="mx-[20px] mt-[64px]">
                        <Tabs defaultIndex={0}>
                            <div className="font-semibold text-[18px] mb-[48px]">
                                <TabList>
                                    <Tab>รายละเอียดหลักสูตร</Tab>
                                    <Tab>โครงสร้างหลักสูตร</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div className="flex flex-col-2 items-center">
                                    <img
                                        src="../assets/icons/description.png"
                                        className="ml-[10px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-semibold text-[18px]">คำอธิบายหลักสูตร</div>
                                </div>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px]">ผู้เรียนจะได้เรียนรู้หลักการวิธีการออกแบบและพัฒนาโปรแกรมคอมพิวเตอร์พื้นฐานทางเทคโนโลยีและวิศวกรรมพัฒนา โดยใช้ผังงานและภาษาซี การเขียนโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสไวยากรณ์ของภาษาซี โครงสร้างของข้อมูลและตัวแปรการดำเนินการทางคณิตศาสตร์และตรรกศาสตร์เชิงตัวเลข กระบวนการการทำงานแบบตัดสินใจและการทำงานแบบวนรอบ</p>
                                <p className="ml-[10px] mt-[28px] mb-[40px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <div className="flex flex-col-2 items-center">
                                    <img
                                        src="../assets/icons/goal.png"
                                        className="ml-[10px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-semibold text-[18px]">วัตถุประสงค์</div>
                                </div>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">1. ผู้เรียนสามารถอธิบาย ประยุกต์ใช้และวิเคราะห์เกี่ยวกับแนวคิดการพัฒนาโปรแกรมคอมพิวเตอร์และหลักเกณฑ์ในการเขียนผังงานได้</p>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">2. ผู้เรียนสามารถประยุกต์ใช้และวิเคราะห์เกี่ยวกับโครงสร้างและส่วนประกอบของภาษาซีได้</p>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">3. ผู้เรียนสามารถวิเคราะห์เกี่ยวกับการพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซีได้</p>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">4. ผู้เรียนสามารถประยุกต์ใช้และวิเคราะห์เกี่ยวกับการเขียนโปรแกรมแบบทางเลือกได้</p>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">5. ผู้เรียนสามารถวิเคราะห์เกี่ยวกับการเขียนโปรแกรมแบบทำซ้ำได้</p>
                                <p className="ml-[10px] mt-[28px] mb-[40px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <div className="flex flex-col-2 items-center">
                                    <img
                                        src="../assets/icons/user.png"
                                        className="ml-[10px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-semibold text-[18px]">หลักสูตรนี้เหมาะสำหรับ</div>
                                </div>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">นักเรียน นักศึกษา และประชาชนทั่วไป ทุกเพศ ทุกวัย ที่สนใจสามารถเรียนได้</p>
                                <p className="ml-[10px] mt-[28px] mb-[40px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <div className="flex flex-col-2 items-center mb-[26px]">
                                    <img
                                        src="../assets/icons/check-mark.png"
                                        className="ml-[10px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-semibold text-[18px]">ระดับเนื้อหา</div>
                                </div>
                                <div className="flex flex-col-2 items-center mb-[10px]">
                                    <img
                                        src="../assets/icons/check-mark.png"
                                        className="ml-[42px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-normal text-[18px]">ระดับพื้นฐาน (Basic)</div>
                                </div>
                                <div className="flex flex-col-2 items-center mb-[10px]">
                                    <img
                                        src="../assets/icons/circle.png"
                                        className="ml-[42px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-normal text-[18px]">ระดับกลาง (Intermediate)</div>
                                </div>
                                <div className="flex flex-col-2 items-center">
                                    <img
                                        src="../assets/icons/circle.png"
                                        className="ml-[42px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-normal text-[18px]">ระดับสูง (Advance)</div>
                                </div>
                                <p className="ml-[10px] mt-[28px] mb-[40px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                                <div className="flex flex-col-2 items-center">
                                    <img
                                        src="../assets/icons/certification.png"
                                        className="ml-[10px] w-[32px] h-[32px]"
                                    />
                                    <div className="ml-[8px] font-semibold text-[18px]">การรับวุฒิบัตร</div>
                                </div>
                                <p className="ml-[10px] mt-[26px] font-normal text-[18px] text-justify">เข้าเรียนไม่น้อยกว่า 80% ของเวลาเรียนทั้งหมด และสอบผ่านไม่น้อยกว่า 70% ของคะแนนโดยรวมทั้งหมด</p>
                                <p className="ml-[10px] mt-[28px] mb-[32px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                            </TabPanel>
                            <TabPanel>
                                <span className="font-normal text-[18px]">การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1</span>
                                <span className="font-normal text-[18px] ml-[96px]">● บทที่ 1 การพัฒนาโปรแกรมคอมพิวเตอร์และการเขียนผังงานซี</span>
                                <div className="font-normal text-[18px] ml-[477px] mt-[26px]">● บทที่ 2 ทำความรู้จักกับภาษาซี</div>
                                <div className="font-normal text-[18px] ml-[477px] mt-[26px]">● บทที่ 3 การพัฒนาโปรแกรมคอมพิวเตอร์ที่ทำงานบนระบบปฏิบัติการดอสด้วยภาษาซี</div>
                                <div className="font-normal text-[18px] ml-[477px] mt-[26px]">● บทที่ 4 การเขียนโปรแกรมแบบทางเลือก</div>
                                <div className="font-normal text-[18px] ml-[477px] mt-[26px]">● บทที่ 5 การเขียนโปรแกรมแบบทำซ้ำ</div>
                                <p className="ml-[10px] mt-[28px] mb-[32px] opacity-50">--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;