import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
//

const AllNews = () => {
    const route = [{
            title: "หน้าหลัก",
            link: "/member",
        },
        {
            title: "ข่าวประชาสัมพันธ์",
            link: "/faculty/all-faculty",
        },
    ];

    return ( <
        div className = "px-[104px] py-[29px]" >
        <
        MoveToTop / >
        <
        Breadcrumb route = { route }
        /> <
        div className = "text-center text-[28px] font-semibold my-12" >
        ข่ าวประสามชั มพั นธ์ <
        /div>

        { /* กิจกรรม/ค่าย */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > กิจกรรม / ค่ าย < /div> <
        a href = "/faculty/cs"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >

        { /* row 1 */ }

<<<<<<< Updated upstream
        <
        div className = "grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14" >
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        Computer Engineering Camp htmlFor TCAS Portfolio SS2 <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        3 เม.ย .66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/computer-engineering-camp-htmlFor-tcas-portfolio-ss2/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        How To Be A Graphic Designer รุ่ น 3 <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        02 พ.ค 66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/how-to-be-a-graphic-designer-3/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14">
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        Computer Engineering Camp for TCAS Portfolio SS2
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                3 เม.ย. 66
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/computer-engineering-camp-for-tcas-portfolio-ss2/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        How To Be A Graphic Designer รุ่น 3
                    </div>
                    <div className="flex justify-between items-center mt-[80px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                02 พ.ค 66
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/how-to-be-a-graphic-designer-3/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        ค่าย ONSITE วิศวคอมพิวเตอร์รุ่นเยาว์ COMPUTER ENGINEER รุ่น 3
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                ปิดรับสมัครแล้ว
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>
=======
        <
        div className = "grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14" >
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
=======
        <
        div className = "grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14" >
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
=======
        <
        div className = "grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14" >
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        ค่ าย ONSITE วิศวคอมพิวเตอร์ รุ่ นเยาว์ COMPUTER ENGINEER รุ่ น 3 <
=======
        Computer Engineering Camp htmlFor TCAS Portfolio SS2 <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< Updated upstream
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
=======
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
>>>>>>> Stashed changes
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< Updated upstream
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/"
=======
        3 เม.ย .66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/computer-engineering-camp-htmlFor-tcas-portfolio-ss2/"
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< Updated upstream
        { /* row 1 */ }

        { /* row 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        How To Be A Graphic Designer รุ่ น 3 <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        02 พ.ค 66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/how-to-be-a-graphic-designer-3/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        Computer Engineering Camp htmlFor TCAS Portfolio SS2 <
=======
        ค่ าย ONSITE วิศวคอมพิวเตอร์ รุ่ นเยาว์ COMPUTER ENGINEER รุ่ น 3 <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< HEAD
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
=======
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        3 เม.ย .66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/computer-engineering-camp-htmlFor-tcas-portfolio-ss2/"
=======
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        HERO PROGRAMMING <
=======
        How To Be A Graphic Designer รุ่ น 3 <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< Updated upstream
=======
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        02 พ.ค 66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/how-to-be-a-graphic-designer-3/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        Computer Engineering Camp htmlFor TCAS Portfolio SS2 <
=======
        ค่ าย ONSITE วิศวคอมพิวเตอร์ รุ่ นเยาว์ COMPUTER ENGINEER รุ่ น 3 <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< HEAD
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
=======
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        3 เม.ย .66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/computer-engineering-camp-htmlFor-tcas-portfolio-ss2/"
=======
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
=======
        { /* row 1 */ }

        { /* row 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        How To Be A Graphic Designer รุ่ น 3 <
=======
        HERO PROGRAMMING <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< HEAD
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        02 พ.ค 66 <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/how-to-be-a-graphic-designer-3/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        ค่ าย ONSITE วิศวคอมพิวเตอร์ รุ่ นเยาว์ COMPUTER ENGINEER รุ่ น 3 <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
=======
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
<<<<<<< Updated upstream
        a href = "https://www.camphub.in.th/hero-programming/"
=======
<<<<<<< HEAD
        a href = "https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/"
=======
        a href = "https://www.camphub.in.th/hero-programming/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< Updated upstream

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        SUPER COM SCI <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/super-com-sci-nov2022/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        Basic AI Gen9 - สร้ างโมเดลปั ญญาประดิษฐ์ พื้ นฐานภายใน 6 ชั่ วโมง <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/basic-ai-gen-9/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div > <
        /div>

        { /* row 2 */ }

        { /* ข่าวสาร */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > ข่ าวสาร < /div> <
        a href = "/faculty/ce"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mb-[104px] mx-auto max-w-[1232px]" >

        { /* row 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
=======
<<<<<<< HEAD
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* row 1 */ }

        { /* row 2 */ }

<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        HERO PROGRAMMING
                    </div>
                    <div className="flex justify-between items-center mt-[80px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                ปิดรับสมัครแล้ว
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/hero-programming/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        SUPER COM SCI
                    </div>
                    <div className="flex justify-between items-center mt-[80px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                ปิดรับสมัครแล้ว
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/super-com-sci-nov2022/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
                    <img
                        src="https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        Basic AI Gen9- สร้างโมเดลปัญญาประดิษฐ์พื้นฐานภายใน 6 ชั่วโมง
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                ปิดรับสมัครแล้ว
                            </div>
                        </div>
                        <a href="https://www.camphub.in.th/basic-ai-gen-9/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>
            </div>
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
=======
        { /* row 1 */ }

        { /* row 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        HERO PROGRAMMING <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/hero-programming/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        SUPER COM SCI <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/super-com-sci-nov2022/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        HERO PROGRAMMING <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
=======
        Basic AI Gen9 - สร้ างโมเดลปั ญญาประดิษฐ์ พื้ นฐานภายใน 6 ชั่ วโมง <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
<<<<<<< HEAD
        a href = "https://www.camphub.in.th/hero-programming/"
=======
        a href = "https://www.camphub.in.th/basic-ai-gen-9/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
<<<<<<< HEAD
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        TCAS66 รีบยืนยั นสิทธิ์ ก่ อนปิดระบบวั นนี้ กรณีไม่ ใช้ สิทธิ์ ทำอย่ างไร มีคำตอบ <
=======
        SUPER COM SCI <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/super-com-sci-nov2022/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        Basic AI Gen9 - สร้ างโมเดลปั ญญาประดิษฐ์ พื้ นฐานภายใน 6 ชั่ วโมง <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< Updated upstream
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
=======
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
>>>>>>> Stashed changes
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< Updated upstream
        08 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/news/1052017"
=======
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/basic-ai-gen-9/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div > <
        /div>

        { /* row 2 */ }

        { /* ข่าวสาร */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > ข่ าวสาร < /div> <
        a href = "/faculty/ce"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mb-[104px] mx-auto max-w-[1232px]" >

        { /* row 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        SUPER COM SCI <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/super-com-sci-nov2022/"
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< Updated upstream

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" > “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้ นตอน ยืนยั นสิทธิ 7 - 8 ก.พ.นี้ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        07 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1051882"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        โค้ งสุดท้ าย dex66 เตรียมพร้ อม TCAS อย่ าง ไร ? ไม่ ให้ พลาด <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1040125"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* row 1 */ }

        { /* row 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "../assets/images/news/1.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        TCAS 66 รอบ 1 : รอบ Portfolio ครั้ งที่ 2 มรภ.บ้ านสมเด็ จเจ้ าพระยา <
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        Basic AI Gen9 - สร้ างโมเดลปั ญญาประดิษฐ์ พื้ นฐานภายใน 6 ชั่ วโมง <
=======
        TCAS66 รีบยืนยั นสิทธิ์ ก่ อนปิดระบบวั นนี้ กรณีไม่ ใช้ สิทธิ์ ทำอย่ างไร มีคำตอบ <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
<<<<<<< HEAD
        path fill - rule = "evenodd"
        d = "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
=======
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        ปิดรั บสมั ครแล้ ว <
        /div> < /
        div > <
        a href = "https://www.camphub.in.th/basic-ai-gen-9/"
=======
        08 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/news/1052017"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
<<<<<<< HEAD
        div > <
        /div>
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* row 2 */ }

        { /* ข่าวสาร */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > ข่ าวสาร < /div> <
        a href = "/faculty/ce"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mb-[104px] mx-auto max-w-[1232px]" >

        { /* row 1 */ }

<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        TCAS66 รีบยืนยันสิทธิ์ก่อนปิดระบบวันนี้ กรณีไม่ใช้สิทธิ์ทำอย่างไร มีคำตอบ
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                08 ก.พ. 66
                            </div>
                        </div>
                        <a href="https://www.bangkokbiznews.com/news/1052017" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
                    <img
                        src="https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้นตอน ยืนยันสิทธิ 7-8 ก.พ.นี้
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                07 ก.พ. 66
                            </div>
                        </div>
                        <a href="https://www.bangkokbiznews.com/health/1051882" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
                    <img
                        src="https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        โค้งสุดท้าย dex66 เตรียมพร้อม TCAS อย่าง ไร? ไม่ให้พลาด
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                27 พ.ย. 65
                            </div>
                        </div>
                        <a href="https://www.bangkokbiznews.com/health/1040125" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
=======
        div > <
        /div>

        { /* row 2 */ }

        { /* ข่าวสาร */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > ข่ าวสาร < /div> <
        a href = "/faculty/ce"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mb-[104px] mx-auto max-w-[1232px]" >

        { /* row 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
=======
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" > “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้ นตอน ยืนยั นสิทธิ 7 - 8 ก.พ.นี้ <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
<<<<<<< Updated upstream
        div className = "pl-[4px] text-[15px] font-normal" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61647/"
=======
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        07 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1051882"
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< Updated upstream

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        TCAS 66 รอบที่ 1: มหาวิทยาลั ยพะเยา เปิดรั บสมั คร 7 โครงการ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.ryt9.com/s/prg/3372876"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "../assets/images/news/2.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        เช็ กเลย!ปฏิทิน TCAS66 มหาวิทยาลั ยราชภั ฏบ้ านสมเด็ จเจ้ าพระยา ทั้ ง 7 รอบ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61271/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* row 2 */ }

        <
        /div>

        { /* ข่าวสาร */ }

        { /* บทความ */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > บทความ < /div> <
        a href = "/faculty/it"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mx-auto max-w-[1232px]" >

        { /* col 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.admissionpremium.com/className/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        โค้ งสุดท้ าย dex66 เตรียมพร้ อม TCAS อย่ าง ไร ? ไม่ ให้ พลาด <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1040125"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* row 1 */ }

        { /* row 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "../assets/images/news/1.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        TCAS66 รีบยืนยั นสิทธิ์ ก่ อนปิดระบบวั นนี้ กรณีไม่ ใช้ สิทธิ์ ทำอย่ างไร มีคำตอบ <
=======
        TCAS 66 รอบ 1 : รอบ Portfolio ครั้ งที่ 2 มรภ.บ้ านสมเด็ จเจ้ าพระยา <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
<<<<<<< HEAD
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        08 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/news/1052017"
=======
        div className = "pl-[4px] text-[15px] font-normal" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61647/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< HEAD

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" > “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้ นตอน ยืนยั นสิทธิ 7 - 8 ก.พ.นี้ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        07 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1051882"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        TCAS66 รีบยืนยั นสิทธิ์ ก่ อนปิดระบบวั นนี้ กรณีไม่ ใช้ สิทธิ์ ทำอย่ างไร มีคำตอบ <
=======
        โค้ งสุดท้ าย dex66 เตรียมพร้ อม TCAS อย่ าง ไร ? ไม่ ให้ พลาด <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        08 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/news/1052017"
=======
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1040125"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" > “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้ นตอน ยืนยั นสิทธิ 7 - 8 ก.พ.นี้ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        07 ก.พ .66 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1051882"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        โค้ งสุดท้ าย dex66 เตรียมพร้ อม TCAS อย่ าง ไร ? ไม่ ให้ พลาด <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.bangkokbiznews.com/health/1040125"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* row 1 */ }

        { /* row 2 */ }

<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="../assets/images/news/1.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        TCAS 66 รอบ 1 : รอบ Portfolio ครั้งที่ 2 มรภ.บ้านสมเด็จเจ้าพระยา
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal">
                                13 ธ.ค. 65
                            </div>
                        </div>
                        <a href="https://www.dek-d.com/tcas/61647/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
                    <img
                        src="https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        TCAS 66 รอบที่ 1 : มหาวิทยาลัยพะเยา เปิดรับสมัคร 7 โครงการ
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                27 พ.ย. 65
                            </div>
                        </div>
                        <a href="https://www.ryt9.com/s/prg/3372876" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
                    <img
                        src="../assets/images/news/2.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        เช็กเลย! ปฏิทิน TCAS66 มหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา ทั้ง 7 รอบ
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                13 ธ.ค. 65
                            </div>
                        </div>
                        <a href="https://www.dek-d.com/tcas/61271/" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "../assets/images/news/1.jpg"
=======
        { /* row 1 */ }
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        TCAS 66 รอบที่ 1: มหาวิทยาลั ยพะเยา เปิดรั บสมั คร 7 โครงการ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.ryt9.com/s/prg/3372876"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "../assets/images/news/2.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        เช็ กเลย!ปฏิทิน TCAS66 มหาวิทยาลั ยราชภั ฏบ้ านสมเด็ จเจ้ าพระยา ทั้ ง 7 รอบ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61271/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* row 2 */ }

        <
<<<<<<< HEAD
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "../assets/images/news/1.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        TCAS 66 รอบ 1 : รอบ Portfolio ครั้ งที่ 2 มรภ.บ้ านสมเด็ จเจ้ าพระยา <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61647/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        TCAS 66 รอบที่ 1: มหาวิทยาลั ยพะเยา เปิดรั บสมั คร 7 โครงการ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.ryt9.com/s/prg/3372876"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "../assets/images/news/2.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        TCAS 66 รอบ 1 : รอบ Portfolio ครั้ งที่ 2 มรภ.บ้ านสมเด็ จเจ้ าพระยา <
=======
        เช็ กเลย!ปฏิทิน TCAS66 มหาวิทยาลั ยราชภั ฏบ้ านสมเด็ จเจ้ าพระยา ทั้ ง 7 รอบ <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
<<<<<<< HEAD
        div className = "pl-[4px] text-[15px] font-normal" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61647/"
=======
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61271/"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        คณะวิทย์ ฯ ลาดกระบั ง ทำยั งไงถึงสอบติด ?
        <
=======
        TCAS 66 รอบที่ 1: มหาวิทยาลั ยพะเยา เปิดรั บสมั คร 7 โครงการ <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< Updated upstream
        06 ก.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/unews/news/6412"
=======
        27 พ.ย .65 <
        /div> < /
        div > <
        a href = "https://www.ryt9.com/s/prg/3372876"
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< Updated upstream

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        อยากติด TCAS รอบ Portfolio ต้ องทำอะไรบ้ าง ?
        <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        22 ก.ค .64 <
        /div> < /
        div > <
        a href = "อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        10 เรื่ องที่ ควรรู้ ในการทำ Portfolio <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg>

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        15 ก.ค .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6381"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* col 1 */ }

        { /* col 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210629183731uq6D1kS.jpg"
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "../assets/images/news/2.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        เช็ กเลย!ปฏิทิน TCAS66 มหาวิทยาลั ยราชภั ฏบ้ านสมเด็ จเจ้ าพระยา ทั้ ง 7 รอบ <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        13 ธ.ค .65 <
        /div> < /
        div > <
        a href = "https://www.dek-d.com/tcas/61271/"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* row 2 */ }

        <
        /div>

        { /* ข่าวสาร */ }

        { /* บทความ */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > บทความ < /div> <
        a href = "/faculty/it"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mx-auto max-w-[1232px]" >

        { /* col 1 */ }

<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="https://www.admissionpremium.com/class/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        คณะวิทย์ฯ ลาดกระบัง ทำยังไงถึงสอบติด?
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                06 ก.ย. 64
                            </div>
                        </div>
                        <a href="https://www.admissionpremium.com/unews/news/6412" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
                    <img
                        src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                22 ก.ค. 64
                            </div>
                        </div>
                        <a href="อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
                    <img
                        src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        10 เรื่องที่ควรรู้ในการทำ Portfolio
                    </div>
                    <div className="flex justify-between items-center mt-[80px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.admissionpremium.com/className/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
=======
        { /* row 2 */ }

        <
        /div>

        { /* ข่าวสาร */ }

        { /* บทความ */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > บทความ < /div> <
        a href = "/faculty/it"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mx-auto max-w-[1232px]" >

        { /* col 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.admissionpremium.com/className/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
=======
        /div>

        { /* ข่าวสาร */ }

        { /* บทความ */ }

        <
        div className = "flex justify-between items-center" >
        <
        div className = "text-left text-[25px] font-semibold" > บทความ < /div> <
        a href = "/faculty/it"
        className = "text-right text-[16px] font-semibold underline" >
        ดูทั้ งหมด <
        /a> < /
        div > <
        hr className = "mt-[18px] mb-[16px]" / >
        <
        div className = "grid grid-cols-3 gap-y-14 mx-auto max-w-[1232px]" >

        { /* col 1 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "https://www.admissionpremium.com/className/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        8 สิ่ งที่ ต้ องรู้ เตรียมยื่ น TCAS รอบ Portfolio <
=======
        คณะวิทย์ ฯ ลาดกระบั ง ทำยั งไงถึงสอบติด ?
        <
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
<<<<<<< Updated upstream
        /svg>

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        29 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6357"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

=======
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        06 ก.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/unews/news/6412"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        อยากติด TCAS รอบ Portfolio ต้ องทำอะไรบ้ าง ?
        <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        22 ก.ค .64 <
        /div> < /
        div > <
        a href = "อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        10 เรื่ องที่ ควรรู้ ในการทำ Portfolio <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg>

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        15 ก.ค .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6381"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* col 1 */ }

        { /* col 2 */ }

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210629183731uq6D1kS.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        คณะวิทย์ ฯ ลาดกระบั ง ทำยั งไงถึงสอบติด ?
        <
=======
        8 สิ่ งที่ ต้ องรู้ เตรียมยื่ น TCAS รอบ Portfolio <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
<<<<<<< HEAD
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        06 ก.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/unews/news/6412"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        อยากติด TCAS รอบ Portfolio ต้ องทำอะไรบ้ าง ?
        <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        22 ก.ค .64 <
        /div> < /
        div > <
        a href = "อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        คณะวิทย์ ฯ ลาดกระบั ง ทำยั งไงถึงสอบติด ?
        <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
=======
        10 เรื่ องที่ ควรรู้ ในการทำ Portfolio <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
<<<<<<< HEAD
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        06 ก.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/unews/news/6412"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        อยากติด TCAS รอบ Portfolio ต้ องทำอะไรบ้ าง ?
        <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        22 ก.ค .64 <
        /div> < /
        div > <
        a href = "อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?"
=======
        /svg>

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        15 ก.ค .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6381"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        10 เรื่ องที่ ควรรู้ ในการทำ Portfolio <
        /div> <
        div className = "flex justify-between items-center mt-[80px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg>
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        15 ก.ค .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6381"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* col 1 */ }

        { /* col 2 */ }

<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210629183731uq6D1kS.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        8 สิ่งที่ต้องรู้เตรียมยื่น TCAS รอบ Portfolio
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
=======
=======
        { /* col 1 */ }

        { /* col 2 */ }

>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210629183731uq6D1kS.jpg"
=======
        /svg>

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        29 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6357"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

>>>>>>> Stashed changes
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210625181911c2B9ytV.jpg"
<<<<<<< Updated upstream
=======
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< Updated upstream
        อยากติด TCAS รอบ Portfolio ห้ ามพลาดค่ าย สอวน. <
=======
<<<<<<< HEAD
        8 สิ่ งที่ ต้ องรู้ เตรียมยื่ น TCAS รอบ Portfolio <
=======
        อยากติด TCAS รอบ Portfolio ห้ ามพลาดค่ าย สอวน. <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
        /svg>
<<<<<<< HEAD
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
=======
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        29 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6357"
=======
>>>>>>> Stashed changes
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        25 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6352"
<<<<<<< Updated upstream
=======
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
<<<<<<< Updated upstream

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        เปรียบเทียบกองทุนกู้ เรียน กยศ.VS กรอ. <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        06 ก.พ .63 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/5357"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

        { /* col 2 */ }

=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210625181911c2B9ytV.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        อยากติด TCAS รอบ Portfolio ห้ามพลาดค่าย สอวน.
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                25 มิ.ย. 64
                            </div>
                        </div>
                        <a href="https://www.admissionpremium.com/content/6352" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                    <img
                        src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
                        className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                    />
                    <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                        เปรียบเทียบกองทุนกู้เรียน กยศ. VS กรอ.
                    </div>
                    <div className="flex justify-between items-center mt-[55px]">
                        <div className="flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                            </svg>
                            <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                06 ก.พ. 63
                            </div>
                        </div>
                        <a href="https://www.admissionpremium.com/content/5357" target="_blank">
                            <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                อ่านเพิ่มเติม
                            </button>
                        </a>
                    </div>
                </div>
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210625181911c2B9ytV.jpg"
=======
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210625181911c2B9ytV.jpg"
=======

        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        อยากติด TCAS รอบ Portfolio ห้ ามพลาดค่ าย สอวน. <
=======
        เปรียบเทียบกองทุนกู้ เรียน กยศ.VS กรอ. <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        25 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6352"
=======
        06 ก.พ .63 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/5357"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
<<<<<<< HEAD
        อยากติด TCAS รอบ Portfolio ห้ ามพลาดค่ าย สอวน. <
=======
        เปรียบเทียบกองทุนกู้ เรียน กยศ.VS กรอ. <
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
<<<<<<< HEAD
        25 มิ.ย .64 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/6352"
=======
        06 ก.พ .63 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/5357"
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >

<<<<<<< HEAD
        <
        div className = "flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]" >
        <
        img src = "http://www.admissionpremium.com/className/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
        className = "w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]" /
        >
        <
        div className = "mx-[22px] mt-[24px] text-[17px] font-semibold" >
        เปรียบเทียบกองทุนกู้ เรียน กยศ.VS กรอ. <
        /div> <
        div className = "flex justify-between items-center mt-[55px]" >
        <
        div className = "flex flex-row items-center" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 24 24"
        fill = "#525252"
        className = "ml-[22px] w-[18px] h-[18px]" >
        <
        path d = "M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" / >
        <
        path fill - rule = "evenodd"
        d = "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
        clip - rule = "evenodd" / >
        <
        /svg> <
        div className = "pl-[4px] text-[15px] font-normal text-[#525252]" >
        06 ก.พ .63 <
        /div> < /
        div > <
        a href = "https://www.admissionpremium.com/content/5357"
        target = "_blank" >
        <
        button className = "font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]" >
        อ่ านเพิ่ มเติม <
        /button> < /
        a > <
        /div> < /
        div >
>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df

        { /* col 2 */ }

=======
        { /* col 2 */ }

>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
=======
        { /* col 2 */ }

>>>>>>> a01ec60f481445841d2765697049ef40c98fa8df
>>>>>>> Stashed changes
        <
        /div> < /
        div >
    );
};

export default AllNews;