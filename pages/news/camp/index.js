import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Breadcrumb from "@components/Breadcrumb";
import Link from "next/link";
import Card from "@components/Card";

function Camp() {
    const route = [
        {
            title: "หน้าหลัก",
            link: "/member",
        },
        {
            title: "ข่าวประชาสัมพันธ์",
            link: "#",
        },
        {
            title: "กิจกรรม/ค่าย",
            link: "#",
        },
    ];

    const activity = [
        {
            image: "../assets/images/activity/activity-1.png",
            title: "TECH FESTIVAL",
            content:
                "มหกรรมด้าน Computer และTechnology เรียนกับพี่แฮม Senior Software Engineer จากประเทศ Canada และ พี่เอิร์ท จบจาก ...",
            expire_date: 1,
            link: "#",
        },
        {
            image: "../assets/images/activity/activity-2.png",
            title: "Javascript Tier 2 SS2 // C Tier 2",
            content:
                "เหมาะสำหรับน้อง ๆ ที่อยากต่อยอดความรู้ HTML CSS JS ให้เก่งยิ่งขึ้นด้วย JS TIER 2 และ ยังมีคอร์สสำหรับน้อง ๆ ที่ต้องการเ...",
            expire_date: 2,
            link: "#",
        },
        {
            image: "../assets/images/activity/activity-3.png",
            title: "CREATIVE AI CAMP 2022 🎉",
            content:
                "CREATIVE AI CAMP 2022 ปีนี้เรามาใน ธีม Anytime, Anywhere with AI 🤖 ในรูป แบบ Phenomena Work-based Learni...",
            expire_date: 3,
            link: "#",
        },
        {
            image: "../assets/images/activity/activity-4.png",
            title: "SUPER COM SCI ครั้งที่ 9",
            content:
                "กลับมาอีกครั้งกับค่าย Super com sci ที่ทำ ให้น้อง ๆ ได้เรียนผ่านการลงมือปฎิบัติ On-site วางแผนระบบ สร้าง App แนะแนวกา...",
            expire_date: 4,
            link: "#",
        },
    ];

    return (
        <>
            <div className="px-[104px] pt-[29px]">
                <Breadcrumb route={route} />
                <div className="font-semibold text-[30px] text-center mt-[38px] mb-[48px]">กิจกรรม/ค่าย</div>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{ marginLeft: 346, marginRight: 346, marginTop: 10 }}
            >
                <SwiperSlide>
                    <a href="https://www.dek-d.com/tcas/61701/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/Banner_Camphub.jpg.webp"
                            alt="image slide 1"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.dek-d.com/tcas/61028/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/JAVA-CAMP.png.webp"
                            alt="image slide 2"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.dek-d.com/tcas/60936/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/MicrosoftTeams-image-2.jpg.webp"
                            alt="image slide 3"
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="px-[104px] pt-[29px]">
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">ค่าย/กิจกรรมที่จะเปิดรับสมัครเร็ว ๆ นี้</div>
                <div className="flex-1">
                    <div className="grid grid-cols-4 gap-7 mx-auto max-w-[1232px]">
                        {activity.map((item) => {
                            return <Card item={item} type="activity" />;
                        })}
                    </div>
                </div>
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">ค่าย/กิจกรรมทั้งหมด</div>
                <div className="grid grid-cols-3 gap-14 mx-auto max-w-[1232px]">

                    {/* col 1 */}
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
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

                    {/* col 1 */}

                    {/* col 2 */}

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
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
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

                    {/* col 2 */}

                    {/* col 3 */}

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/TFUBanner.jpg.webp"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            Technology Test for University
                        </div>
                        <div className="flex justify-between items-center mt-[80px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    ปิดรับสมัครแล้ว
                                </div>
                            </div>
                            <a href="https://www.camphub.in.th/hamster-hub-tfu/" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/poster-16.jpg.webp"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            “CS Camp 15” ค่ายวิทยาการคอมพิวเตอร์ พระจอมเกล้าลาดกระบัง
                        </div>
                        <div className="flex justify-between items-center mt-[55px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    ปิดรับสมัครแล้ว
                                </div>
                            </div>
                            <a href="https://www.camphub.in.th/cs-camp-15/" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-1-1.png"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            Zero To Hero Javascript & Typescript
                        </div>
                        <div className="flex justify-between items-center mt-[80px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    ปิดรับสมัครแล้ว
                                </div>
                            </div>
                            <a href="https://www.camphub.in.th/zero-to-hero-javascript-feb2023/" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* col 3 */}

                </div>
                <div className="flex gap-3.5 justify-center mt-[42px] mb-[0px]">
                    <Link href="#">
                        <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#D9D9D9] rounded-full">
                            1
                        </button>
                    </Link>
                    <Link href="#">
                        <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                            2
                        </button>
                    </Link>
                    <Link href="#">
                        <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                            3
                        </button>
                    </Link>
                    <Link href="#">
                        <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                            4
                        </button>
                    </Link>
                    <span className="text-[16px] font-semibold pt-4">...</span>
                    <Link href="#">
                        <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                            5
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Camp;