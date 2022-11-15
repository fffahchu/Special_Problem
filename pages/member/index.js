import React from "react";
import Card from "components/Card";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const Member = () => {
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
      title: "Portfolio 10 หนา ควรมีอะไรบ้าง?",
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

  const course = [
    {
      image: "assets/images/course/course-1.png",
      title: "Go: The Fundamentals",
      content: "เรียนรู้พื้นฐานสำคัญของภาษา Go",
      persons: 1166,
      link: "#",
    },
  ];

  return (
    <div>
      <MoveToTop />
      <div className="relative">
        <img
          src="assets/images/gradient-background.png"
          alt="gradient-background"
          className="w-full"
        />
        <img
          src="assets/images/background-profile.png"
          alt="gradient-background"
          className="mx-[108px] h-[184px] -mt-[184px]"
        />
        <div className="flex gap-9 absolute bottom-0 right-0 mx-[155px] my-[32px]">
          <Link href="/create-portfolio" className="flex items-center gap-2 py-3 px-6 rounded-full bg-orange">
            <img
              src="assets/icons/plus.svg"
              alt="icon-plus"
              width="21"
              height="21"
            />
            <span className="font-semibold">สร้างแฟ้มสะสมผลงานใหม่</span>
          </Link>
          <button className="flex items-center gap-2 py-3 px-6 rounded-full bg-orange">
            <img
              src="assets/icons/eye.svg"
              alt="icon-plus"
              width="21"
              height="21"
            />
            <span className="font-semibold">ดูตัวอย่างแฟ้มสะสมผลงาน</span>
          </button>
          <button className="flex items-center gap-2 py-3 px-6 rounded-full bg-orange">
            <img
              src="assets/icons/icon-image.svg"
              alt="icon-plus"
              width="21"
              height="21"
            />
            <span className="font-semibold">เพิ่มรูปผลงานใหม่</span>
          </button>
        </div>
      </div>
      <div className="flex gap-[51px] px-[108px] pb-[110px]">
        <div className="flex flex-col gap-12 w-[312px]">
          <div>
            <div className="flex flex-col items-center bg-green-light px-[13px] pb-[25px]">
              <img
                src="assets/images/mock-profile-image.png"
                alt="profile-image"
                className="-mt-[66px] rounded-full z-10"
                width="120"
                height="120"
              />
              <div className="text-sm mt-[25px]">ยินดีต้อนรับสู่ ComPort!</div>
              <div className="mt-1.5 bg-green rounded-full px-[15px] pb-1">
                คุณ
              </div>
              <div className="mt-[10px] text-xl font-semibold">
                สุธิดา มานะยิ่ง
              </div>
              <div className="mt-1 text-[11px] text-gray">@aom_suthida</div>
              <div className="flex text-[11px] gap-[15px] mt-4">
                <div className="flex items-center gap-1.5">
                  <img src="assets/icons/location.svg" alt="icon-location" />
                  <div>ไม่ได้ระบุชื่อสถานศึกษา</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="assets/icons/calendar.svg" alt="icon-location" />
                  <div>เข้าร่วมเมื่อ สิงหาคม 2565</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-lg font-semibold rounded-b-xl cursor-pointer bg-orange py-4">
              แก้ไขโปรไฟล์
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="text-xl font-semibold">ข่าวฮอต</div>
                <img
                  src="assets/icons/fire.svg"
                  alt="icon-fire"
                  width="24"
                  height="24"
                />
              </div>
              <a href="#" className="font-semibold underline">
                ดูทั้งหมด
              </a>
            </div>
            <div className="flex flex-col gap-8 mt-7">
              <div className="flex flex-col gap-3">
                <img src="assets/images/news/news-1.png" alt="news-1" />
                <div>
                  ปฏิทิน 2566 : อัพเดท ตารางสอบ 'TCAS' ที่ 'DEK66' ต้องรู้ไว้
                  สมัครสอบ TGAT/TPAT และ
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <img src="assets/images/news/news-2.png" alt="news-2" />
                <div>
                  ประกาศผล admission 65 TCAS รอบ 3 ครั้งที่ 2 เช็กผลสอบที่นี่
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow pt-[51px] pr-1">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold">
                แฟ้มสะสมผลงานของฉัน (0)
              </div>
              <div className="flex items-center gap-[18px]">
                <div className="flex items-center gap-2">
                  <img
                    src="assets/icons/check.svg"
                    alt="icon-check"
                    width="16"
                    height="16"
                  />
                  <div className="text-sm">เสร็จแล้ว (0)</div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="assets/icons/edit.svg"
                    alt="icon-check"
                    width="16"
                    height="16"
                  />
                  <div className="text-sm">กำลังทำอยู่ (0)</div>
                </div>
              </div>
            </div>
            <hr className="mt-[18px]" />
            <div className="flex flex-col items-center py-[69px]">
              <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-yellow">
                <img
                  src="assets/icons/folder.svg"
                  alt="icon-folder"
                  width="60"
                  height="60"
                />
              </div>
              <div className="text-[15px] font-semibold mt-[18px]">
                คุณยังไม่ได้สร้างแฟ้มสะสมผลงาน
              </div>
              <div className="text-[13px] mt-1">
                มาสร้างแฟ้มสะสมผลงานชิ้นแรกกันเถอะ!
              </div>
              <div className="flex items-center mt-5 gap-[8px]">
                <div className="text-[13px]">
                  การสร้างแฟ้มสะสะสมผลงาน กดปุ่ม
                </div>
                <Link href="/create-portfolio" className="flex items-center gap-2 py-2 px-5 rounded-full bg-orange">
                  <img
                    src="assets/icons/plus.svg"
                    alt="icon-plus"
                    width="16"
                    height="16"
                  />
                  <span className="text-[13px] font-semibold">
                    สร้างแฟ้มสะสมผลงานใหม่
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="text-xl font-semibold">ผลงานของฉัน (0)</div>
            <hr className="mt-[18px]" />
            <div className="flex flex-col items-center py-[69px]">
              <div className="flex justify-center items-center w-[100px] h-[100px] rounded-full bg-yellow">
                <img
                  src="assets/icons/certificate.svg"
                  alt="icon-folder"
                  width="60"
                  height="60"
                />
              </div>
              <div className="text-[15px] font-semibold mt-[18px]">
                คุณยังไม่มีผลงาน
              </div>
              <div className="text-[13px] mt-1">
                คุณสามารถเก็บรูปภาพ ผลงาน รางวัล เกียรติบัตร ฯลฯ ของคุณไว้ใน
                ComPort
              </div>
              <div className="flex items-center mt-5 gap-[8px]">
                <div className="text-[13px]">การเพิ่มผลงาน กดปุ่ม</div>
                <button className="flex items-center gap-2 py-2 px-5 rounded-full bg-orange">
                  <img
                    src="assets/icons/icon-image.svg"
                    alt="icon-plus"
                    width="16"
                    height="16"
                  />
                  <span className="text-[13px] font-semibold">
                    เพิ่มรูปผลงานใหม่
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[108px] pt-[88px] pb-[144px] mt-[110px] bg-green-light">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="text-[25px] font-semibold">
              กิจกรรมที่กำลังจะมาถึง
            </div>
            <a href="#" className="font-semibold underline">
              ดูทั้งหมด
            </a>
          </div>
          <hr className="mt-[18px] mb-4" />
          <div className="grid grid-cols-4">
            {activity.map((item) => {
              return <Card item={item} type="activity" />;
            })}
          </div>
        </div>
        <div className="flex-1 mt-12">
          <div className="flex justify-between items-center">
            <div className="text-[25px] font-semibold">บทความน่าสนใจ</div>
            <a href="#" className="font-semibold underline">
              ดูทั้งหมด
            </a>
          </div>
          <hr className="mt-[18px] mb-4" />
          <div className="grid grid-cols-4">
            {article.map((item) => {
              return <Card item={item} type="article" />;
            })}
          </div>
        </div>
        <div className="flex-1 mt-12">
          <div className="flex justify-between items-center">
            <div className="text-[25px] font-semibold">
              คอร์สแนะนำจาก ComPort
            </div>
            <a href="#" className="font-semibold underline">
              ดูทั้งหมด
            </a>
          </div>
          <hr className="mt-[18px] mb-4" />
          <div className="grid grid-cols-4">
            {course.map((item) => {
              return <Card item={item} type="course" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
