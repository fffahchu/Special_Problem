import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Card from "components/Card";
import Link from "next/link";

function FirstPage() {
    const activity = [
        {
            image: "assets/images/activity/activity-1.png",
            title: "TECH FESTIVAL",
            content:
                "มหกรรมด้าน Computer และTechnology เรียนกับพี่แฮม Senior Software Engineer จากประเทศ Canada และ พี่เอิร์ท จบจาก ...",
            expire_date: 1,
            link: "#",
        },
        {
            image: "assets/images/activity/activity-2.png",
            title: "Javascript Tier 2 SS2 // C Tier 2",
            content:
                "เหมาะสำหรับน้อง ๆ ที่อยากต่อยอดความรู้ HTML CSS JS ให้เก่งยิ่งขึ้นด้วย JS TIER 2 และ ยังมีคอร์สสำหรับน้อง ๆ ที่ต้องการเ...",
            expire_date: 2,
            link: "#",
        },
        {
            image: "assets/images/activity/activity-3.png",
            title: "CREATIVE AI CAMP 2022 🎉",
            content:
                "CREATIVE AI CAMP 2022 ปีนี้เรามาใน ธีม Anytime, Anywhere with AI 🤖 ในรูป แบบ Phenomena Work-based Learni...",
            expire_date: 3,
            link: "#",
        },
        {
            image: "assets/images/activity/activity-4.png",
            title: "SUPER COM SCI ครั้งที่ 9",
            content:
                "กลับมาอีกครั้งกับค่าย Super com sci ที่ทำ ให้น้อง ๆ ได้เรียนผ่านการลงมือปฎิบัติ On-site วางแผนระบบ สร้าง App แนะแนวกา...",
            expire_date: 4,
            link: "#",
        },
    ];

    const article = [
        {
            image: "assets/images/article/article-1.png",
            title: "Portfolio 10 หน้า ควรมีอะไรบ้าง?",
            content:
                "วันนี้พี่รวบรวมข้อมูล Portfolio 10 หน้า ควร มีอะไรบ้าง? มาฝากน้อง ๆ ให้ได้เตรียมตัวกัน ส่วนสำคัญของ Portfolio หน้าที่ 0 | หน้าป...",
            views: 1576,
            link: "#",
        },
        {
            image: "assets/images/article/article-2.png",
            title: "5 เทคนิค ทำข้อสอบเก่าให้ปัง",
            content:
                "วันนี้พี่รวบรวม 5 เทคนิค ทำข้อสอบเก่าให้ปัง มาฝากน้อง DEK66 ให้น้อง ๆ ได้ลองปรับตัว และทำตาม จะได้สอบติดคณะ สาขา และม...",
            views: 722,
            link: "#",
        },
        {
            image: "assets/images/article/article-3.png",
            title: "DEK66 เตรียมตัวก่อนสอบเข้า มหาวิทยาลัย",
            content:
                "ช่วงนี้น้อง ๆ DEK66 ต้องเริ่มเตรียมตัวก่อน เข้ามหาวิทยาลัยกันได้แล้วนะ ก่อนจะเตรียม ตัวไม่ทัน พี่เตือนแล้วนะ !! ศึกษาข้อมูล TC...",
            views: 646,
            link: "#",
        },
        {
            image: "assets/images/article/article-4.png",
            title: "HOW TO ตั้งใจเรียน",
            content:
                "ในห้องเรียนแต่มันน่าเบื่อเหลือเกิน ทำยังไงให้ ตั้งใจเรียน เพื่อทักษะในการเรียนให้มีความสุข กับการเรียน 1.กำจัดสิ่งรบกวนสมาธิ มีหลา...",
            views: 353,
            link: "#",
        },
    ];

    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex-col pl-[104px]">
                    <p className="font-semibold pt-[56px] text-[48px]">ยินดีต้อนรับสู่ ComPort</p>
                    <p className="w-[480px] font-semibold pt-[26px] text-[20px]">ComPort ตัวช่วยดี ๆ สำหรับน้อง ๆ หนู ๆ ในเรื่องการทำ Portfolio สายคอมฯ ให้เสร็จอย่างรวดเร็วและสวยงาม!🔥👍</p>
                    <p className="w-[480px] font-semibold pt-[26px] text-[16px]">เหมาะสำหรับนักเรียนที่มีความสนใจจะศึกษาต่อในระดับปริญญาตรี ในสาขาวิชาทางด้านคอมพิวเตอร์ เป็นแหล่งรวบรวมข้อมูลข่าวสารและความรู้ ด้านสายการเรียนสายคอมพิวเตอร์ นอกจากนี้ยังมีคอร์สเรียนฟรีมากมาย อัดแน่นไปด้วยเนื้อหาสาระที่เป็นประโยชน์สำหรับผู้ใช้บริการเว็บไซต์ เมื่อเรียนจบมีใบรับรองด้วย ครบ...จบในที่เดียว✨ ที่นี่เลย
                    </p>
                    <a href="#_" className="inline-flex items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] justify-center mt-[38px] px-[28px] py-[14px] text-[18px] font-semibold text-black whitespace-no-wrap bg-[#FFCA61] rounded-[25px] shadow-sm hover:bg-[#FFEC85]">
                        เริ่มต้นใช้งาน
                    </a>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ marginLeft: 0, marginRight: 0, marginTop: 56, borderRadius: 10 }}
                >
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/1.png"
                                alt="image slide 1"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/2.png"
                                alt="image slide 2"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/3.png"
                                alt="image slide 3"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/4.png"
                                alt="image slide 4"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/5.png"
                                alt="image slide 5"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                            <img
                                className="object-fill w-[570px] h-[321px] mr-[104px] rounded-[10px]"
                                src="assets/images/first-page/6.png"
                                alt="image slide 6"
                            />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="px-[104px]">
                <div className="flex justify-between items-center mt-[128px]">
                    <div className="text-left text-[25px] font-semibold">ค่าย/กิจกรรมที่จะเปิดรับสมัครเร็ว ๆ นี้</div>
                    <a
                        href="/faculty/cs"
                        className="text-right text-[16px] font-semibold underline"
                    >
                        ดูทั้งหมด
                    </a>
                </div>
                <hr className="mt-[18px] mb-[16px]" />
                <div className="grid grid-cols-4 gap-7 mt-[32px]">
                    {activity.map((item) => {
                        return <Card item={item} type="activity" />;
                    })}
                </div>
                <div className="flex justify-between items-center mt-[159px]">
                    <div className="text-left text-[25px] font-semibold">ตัวอย่างแฟ้มสะสมผลงาน</div>
                    <a
                        href="/faculty/cs"
                        className="text-right text-[16px] font-semibold underline"
                    >
                        ดูทั้งหมด
                    </a>
                </div>
                <hr className="mt-[18px] mb-[16px]" />
                <div className="grid grid-cols-4 gap-x-[1.125rem] mt-[89px] mb-[250px]">
                    {/* col 1 */}
                    <div className="flex flex-col gap-y-5">
                        <Link href="/portfolio-ex/example">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex1.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex2.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex7.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex13.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* col 1 */}
                    {/* col 2 */}
                    <div className="flex flex-col gap-y-5">
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex3.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="https://cscamp.net/">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex8.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex9.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex14.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* col 2 */}
                    {/* col 3 */}
                    <div className="flex flex-col gap-y-5">
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex4.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex5.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex10.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex15.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* col 3 */}
                    {/* col 4 */}
                    <div className="flex flex-col gap-y-5">
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex6.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="https://cscamp.net/">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex11.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[20px]">
                                <img
                                    src="/assets/images/example/ex12.png"
                                    class="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                        <Link href="#">
                            <div class="relative overflow-hidden rounded-[12px]">
                                <img
                                    src="/assets/images/example/ex16.png"
                                    class="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* col 4 */}
                </div>

            </div>
        </>
    );
}

export default FirstPage;

