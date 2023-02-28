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
            image: "../assets/images/article/article-1.png",
            title: "Portfolio 10 หน้า ควรมีอะไรบ้าง?",
            content:
                "วันนี้พี่รวบรวมข้อมูล Portfolio 10 หน้า ควร มีอะไรบ้าง? มาฝากน้อง ๆ ให้ได้เตรียมตัวกัน ส่วนสำคัญของ Portfolio หน้าที่ 0 | หน้าป...",
            views: 44793,
            link: "#",
        },
        {
            image: "../assets/images/article/article-2.png",
            title: "5 เทคนิค ทำข้อสอบเก่าให้ปัง",
            content:
                "วันนี้พี่รวบรวม 5 เทคนิค ทำข้อสอบเก่าให้ปัง มาฝากน้อง DEK66 ให้น้อง ๆ ได้ลองปรับตัว และทำตาม จะได้สอบติดคณะ สาขา และม...",
            views: 27852,
            link: "#",
        },
        {
            image: "../assets/images/article/article-3.png",
            title: "DEK66 เตรียมตัวก่อนสอบเข้า มหาวิทยาลัย",
            content:
                "ช่วงนี้น้อง ๆ DEK66 ต้องเริ่มเตรียมตัวก่อน เข้ามหาวิทยาลัยกันได้แล้วนะ ก่อนจะเตรียม ตัวไม่ทัน พี่เตือนแล้วนะ !! ศึกษาข้อมูล TC...",
            views: 27494,
            link: "#",
        },
        {
            image: "../assets/images/article/article-4.png",
            title: "HOW TO ตั้งใจเรียน",
            content:
                "ในห้องเรียนแต่มันน่าเบื่อเหลือเกิน ทำยังไงให้ ตั้งใจเรียน เพื่อทักษะในการเรียนให้มีความสุข กับการเรียน 1.กำจัดสิ่งรบกวนสมา...",
            views: 25172,
            link: "#",
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
                    <a href="https://www.dek-d.com/tcas/61701/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="../assets/images/news/slide-1.png"
                            alt="image slide 1"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.dek-d.com/tcas/61028/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="../assets/images/news/slide-2.jpg"
                            alt="image slide 2"
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.dek-d.com/tcas/60936/" target="_blank">
                        <img
                            className="object-fill w-auto h-[346px] rounded-[10px]"
                            src="../assets/images/news/slide-3.png"
                            alt="image slide 3"
                        />
                    </a>
                </SwiperSlide>
            </Swiper>
            <div className="px-[104px] pt-[29px]">
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">บทความยอดนิยม</div>
                <div className="grid grid-cols-4 gap-7">
                    {article.map((item) => {
                        return <Card item={item} type="article" />;
                    })}
                </div>
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px]">บทความทั้งหมด</div>
                <div className="grid grid-cols-3 gap-14">
                    {/* col 1 */}
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                    {/* col 1 */}

                    {/* col 2 */}
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                    {/* col 2 */}

                    {/* col 3 */}
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
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