import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Breadcrumb from "@components/Breadcrumb";
import Link from "next/link";
import Card from "components/Card";

function Article() {
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
            title: "บทความ",
            link: "#",
        },
    ];

    const article = [
        {
            image: "../assets/images/article/article-11.png",
            title: "8 เทคนิคพิชิตสอบสัมภาษณ์",
            content:
                "มีน้องหลายคนกังวลเกี่ยวกับการเตรียมตัว วันนี้พี่เลยอยากมาแชร์เกร็ดเล็ก ๆ น้อย ๆ เกี่ยวกับการสอบสัมภาษณ์หน่อย เอาจริง ๆ ผู้ให...",
            views: 39517,
            link: "https://www.admissionpremium.com/content/3770",
        },
        {
            image: "../assets/images/article/article-22.png",
            title: "Portfolio ใช้สีไหนดีนะ",
            content:
                "การใช้สีในการทำ พอร์ต มีผลต่อความรู้สึก แล้วสีจะมีผลต่อคะแนนเราไหม แน่นอนว่าสีช่วยเพิ่มการดึงดูด และน่าสนใจ แต่!! สีไม่ไ...",
            views: 20629,
            link: "https://www.admissionpremium.com/content/4137",
        },
        {
            image: "../assets/images/article/article-33.png",
            title: "เคล็ดไม่ลับ ทำ Portfolio ยังไง ให้โดนใจกรรมการ",
            content:
                "ใกล้เข้าสู่เทศกาลของการสมัคร TCAS รอบที่ 1 แล้ว ซึ่งการสมัครในรอบนี้เป็นการชิงตั๋วเข้าเรียนต่อสำหรับน้อง ๆ  ที่มีผลงานทางด้านกิ...",
            views: 8517,
            link: "https://www.admissionpremium.com/content/4983",
        },
        {
            image: "../assets/images/article/article-44.png",
            title: "เจาะเนื้อหา รอบ Portfolio 10 หน้า ควรมีอะไรบ้าง",
            content:
                "มาเจาะเนื้อหา รอบ Portfolio 10 หน้า ควรมีอะไรบ้าง ใครยังงง ๆ กับการทำพอร์ต พี่อ๋องพี่วิวจะมาแผ่ให้ดูกันเลย ว่าควรทำอย่างไร ...",
            views: 3658,
            link: "https://www.trueplookpanya.com/tcas/article/detail/70104",
        },
    ];

    return (
        <>
            <div className="px-[104px] pt-[29px]">
                <Breadcrumb route={route} />
                <div className="font-semibold text-[30px] text-center mt-[38px] mb-[48px]">บทความ</div>
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
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.admissionpremium.com%2Fcontent%2F4147&psig=AOvVaw0DxtxmtFK-fLPDLQ0U975C&ust=1677860948404000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDop6DVvf0CFQAAAAAdAAAAABAE" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20181107175230qaq87W6.jpg"
                            alt="image slide 2"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.admissionpremium.com%2Fcontent%2F4371&psig=AOvVaw2PhU8ihBDfSxzkIbcfnxz6&ust=1677860757409000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCYgMXUvf0CFQAAAAAdAAAAABAE" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/201812301344422X7Y5Qv.jpg"
                            alt="image slide 1"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.admissionpremium.com%2Fcontent%2F4200&psig=AOvVaw2w6CFwu7Oo-NIu7GRtmpUr&ust=1677860821862000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiG5ePUvf0CFQAAAAAdAAAAABAE" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20181119111418ZgaHMKe.jpg"
                            alt="image slide 3"
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="px-[104px] pt-[29px]">
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">บทความยอดนิยม</div>
                <div className="grid grid-cols-4 gap-7 mx-auto max-w-[1232px]">
                    {article.map((item) => {
                        return <Card item={item} type="article" />;
                    })}
                </div>
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">บทความทั้งหมด</div>
                <div className="grid grid-cols-3 gap-14 mx-auto max-w-[1232px]">
                    {/* col 1 */}
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>

                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    15 ก.ค. 64
                                </div>
                            </div>
                            <a href="https://www.admissionpremium.com/content/6381" target="_blank">
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>

                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    29 มิ.ย. 64
                                </div>
                            </div>
                            <a href="https://www.admissionpremium.com/content/6357" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                    {/* col 2 */}

                    {/* col 3 */}
                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20181228203118KYcJr27.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            สอบสัมภาษณ์อย่างไร เมื่อติดรอบ Portfolio คณะวิศวกรรมศาสตร์
                        </div>
                        <div className="flex justify-between items-center mt-[55px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    28 ธ.ค. 61
                                </div>
                            </div>
                            <a href="https://www.admissionpremium.com/content/4370" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="https://www.admissionpremium.com/class/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20181220172827pvB0xju.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            7 List เช็คความพร้อมก่อนสอบสัมภาษณ์
                        </div>
                        <div className="flex justify-between items-center mt-[55px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    20 ธ.ค. 61
                                </div>
                            </div>
                            <a href="https://www.admissionpremium.com/tcaskmitl/news/4343" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20181112215033n9k29Za.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            Portfolio ที่ดีควรมี...
                        </div>
                        <div className="flex justify-between items-center mt-[80px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    12 พ.ย. 61
                                </div>
                            </div>
                            <a href="https://www.admissionpremium.com/content/4170" target="_blank">
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

export default Article;