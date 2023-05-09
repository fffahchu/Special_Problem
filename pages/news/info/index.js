import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Breadcrumb from "@components/Breadcrumb";
import Link from "next/link";
import Card from "@components/Card";

function Info() {
    const route = [
      {
        title: "หน้าหลัก",
        link: "/member",
      },
      {
        title: "ข่าวประชาสัมพันธ์",
        link: "/news",
      },
      {
        title: "ข่าวสาร",
        link: "/news/info",
      },
    ];

    const article = [
        {
            image: "../assets/images/news/hotnews-1.jpg",
            title: "รวมกำหนดการรอบ Portfolio #TCAS66 ตุลาคมนี้ รับเพียบ!",
            content: "สวัสดีค่ะ มีน้อง ๆ ถามมาเยอะว่ามหาวิทยาลั...",
            views: 27498,
            link: "https://www.dek-d.com/tcas/61249/",
        },
        {
            image: "../assets/images/news/hotnews-2.jpg",
            title: "TCAS66 รอบ 1 : ม.ศรีนครินทรวิโรฒ 5 โครงการ",
            content: "สวัสดีน้อง ๆ ทุกคนค่ะ รอบ Portfolio #TCA...",
            views: 19529,
            link: "https://www.dek-d.com/tcas/61445/",
        },
        {
            image: "../assets/images/news/hotnews-3.png",
            title: "TCAS66 รอบ 1 : มหาวิทยาลัยธรรมศาสตร์ (Portfolio 1.2)",
            content: "สวัสดีค่ะน้อง ๆ เมื่อสัปดาห์ก่อน มหาวิทยา...",
            views: 15412,
            link: "https://www.dek-d.com/tcas/61184/",
        },
        {
            image: "../assets/images/news/hotnews-4.jpg",
            title: "TCAS66 รอบ 1 : สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
            content: "สวัสดีค่ะน้อง ๆ ทางสถาบันเทคโนโลยีพระจ...",
            views: 12822,
            link: "https://www.dek-d.com/tcas/61381/",
        },
    ];

    return (
        <>
            <div className="px-[104px] pt-[29px]">
                <Breadcrumb route={route} />
                <div className="font-semibold text-[30px] text-center mt-[38px] mb-[48px]">ข่าวสาร</div>
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
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px] mx-auto max-w-[1232px]">ข่าวฮอต</div>
                <div className="grid grid-cols-4 gap-7 mx-auto max-w-[1232px]">
                    {article.map((item) => {
                        return <Card item={item} type="article" />;
                    })}
                </div>
                <div className="font-semibold text-[20px] mt-[75px] mb-[30px] mx-auto max-w-[1232px]">ข่าวทั้งหมด</div>
                <div className="grid grid-cols-3 gap-14 mx-auto max-w-[1232px]">
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                    {/* col 1 */}

                    {/* col 2 */}
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
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
                    {/* col 2 */}

                    {/* col 3 */}
                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="../assets/images/news/3.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            TCAS66 รอบ Portfolio มหาวิทยาลัยเชียงใหม่
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
                            <a href="https://www.dek-d.com/tcas/61282/" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="../assets/images/news/4.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            TCAS 66 รอบ 1 : ม.แม่ฟ้าหลวง 5 โครงการ
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
                            <a href="https://www.dek-d.com/tcas/61272/" target="_blank">
                                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                                    อ่านเพิ่มเติม
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
                        <img
                            src="../assets/images/news/5.jpg"
                            className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
                        />
                        <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
                            มาแล้ว! ปฏิทิน TCAS66 มหาวิทยาลัยมหิดล ทั้ง 4 รอบ เริ่มรอบแรกตุลาคมนี้แล้ว
                        </div>
                        <div className="flex justify-between items-center mt-[28px]">
                            <div className="flex flex-row items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#525252" class="ml-[22px] w-[18px] h-[18px]">
                                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                </svg>
                                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                                    13 ธ.ค. 65
                                </div>
                            </div>
                            <a href="https://www.dek-d.com/tcas/61206/" target="_blank">
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

export default Info;