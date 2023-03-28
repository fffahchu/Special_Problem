import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ActivityCe = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "แนะนำคณะ",
      link: "/faculty/all-faculty",
    },
    {
      title: "วิทย์คอม",
      link: "/faculty/cs",
    },
    {
      title: "รีวิวค่าย/กิจกรรม",
      link: "/reviews-activity/cs",
    },
  ];

  const activity = [
    {
      image: "../assets/images/activity/activity-4.png",
      title: "SUPER COM SCI ครั้งที่ 9",
      content:
        "กลับมาอีกครั้งกับค่าย Super com sci ที่ทำ ให้น้อง ๆ ได้เรียนผ่านการลงมือปฎิบัติ On-site วางแผนระบบ สร้าง App แนะแนวกา...",
      expire_date: 4,
      link: "#",
    },
    {
      image: "../assets/images/activity/activity-2.png",
      title: "Javascript Tier 2 SS2",
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
  ];

  return (
    <div className="px-[10px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />

      <div class="mt-[20px] bg-cover h-[400px] w-full">
        <img
          className="h-[600px] w-full"
          src="../assets/images/reviews/cs/cscamp-cover.jpg"
        ></img>
      </div>

      <div className="flex justify-center mt-[200px]">
        <div className="w-[750px] ml-[200px]">
          <div className="bg-[#bef264] rounded-lg shadow-gray shadow-sm text-center text-[25px] font-bold drop-shadow-2xl mt-[48px]">
            บรรยากาศค่าย CS CAMP 14 คอมไซน์ลาดกระบัง
          </div>

          <div className="text-center text-[15px] font-regular mt-[40px] text-[#ef4444]">
            เนื่องจากทางภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ได้จัดค่าย CS
            CAMP ครั้งที่ 14 ในช่วงวันที่ 7-11 มิถุนายน พ.ศ.2565 ที่ผ่านมาจำนวน
            5 วัน โดยมีกิจกรรมค่ายในแต่ละวันดังนี้
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วันแรกของค่าย
          </div>

          <div className=" text-[18px] font-regular mt-[5px] indent-10">
            จะเป็นการเริ่มต้นค่ายด้วยพิธีเปิดที่ได้รับเกียรติจาก รองศาสตราจารย์
            ดร.สุธี ชุติไพจิตร คณบดีคณะวิทยาศาสตร์ สจล. และ ผศ.ดร. วิสันต์
            ตั้งวงษ์เจริญ อาจารย์ที่ปรึกษาค่าย CS Camp 14
            ที่ให้เกียรติมากล่าวเปิดค่าย และ ต้อนรับน้องๆเข้าสู่ค่าย
            เมื่อผ่านช่วงพิธีเปิดจะเป็นช่วงที่พี่ ๆ TA เข้าสอนน้อง ๆ
            ในวันแรกนี้จะเป็นการเรียนเกี่ยวพื้นฐานของภาษา java และจะมี Lab เล็ก
            ๆ น้อย ๆ ให้น้องค่ายได้ทดลองเขียนโค้ดกัน
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วันที่ 2 ของค่าย
          </div>
          <div className=" text-[18px] font-regular mt-[5px] indent-10">
            เป็นการเรียนการสอนจากพี่ ๆ TA
            โดยการเรียนในวันที่2นี้จะเป็นการเรียนในเรื่องพื้นฐานการใช้เงื่อนไขทางโปรแกรมมิ่งและการรับค่าจากคีย์บอร์ด
            หลังจากที่ผ่านการสอนสดไปน้อง ๆ จะมี lab ให้ทำอีกเช่นเคย
            หลังจากที่น้อง ๆ ทำ lab เรียบร้อยแล้วจะเข้าสู่ช่วง cs talk
            เป็นช่วงที่มีพี่ ๆ มาแชร์ประสบการณ์และตอบคำถามน้อง ๆ
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วันที่ 3 ของค่าย
          </div>
          <div className=" text-[18px] font-regular mt-[5px] indent-10">
            เป็นการเรียนการสอนจากพี่ ๆ
            อีกเช่นเคยโดยในวันนี้จะเป็นเรียนรู้ในเรื่องพื้นฐานการใช้ loop
            ให้น้อง ๆ ได้เรียนรู้และยังมี lab สนุกๆให้ทำอีกเช่นเคย
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วันที่ 4 ของค่าย
          </div>
          <div className=" text-[18px] font-regular mt-[5px] indent-10">
            ในวันนี้จะพิเศษหน่อย ช่วงแรกจะเป็นการเรียนการสอนจากพี่ ๆ
            หลังจากที่เรียนเสร็จแล้วในวันนี้น้อง ๆ จะมีการทำ mini project
            โดยโปรเจคของแต่ละกลุ่มจะหลากหลายกันไป
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วันสุดท้ายของค่าย
          </div>
          <div className=" text-[18px] font-regular mt-[5px] indent-10">
            หลังจากที่น้อง ๆ ได้เรียนรู้พื้นฐานต่างๆ กันไปแล้ว และ ได้มีการทำ
            mini project ขึ้นมา ก็เข้าสู่ช่วงการนำเสนอนั่นเอง โดยน้อง ๆ
            แต่ละบ้านจะต้องเสนอโปรเจคของบ้านตนเอง พี่ ๆ บอกได้คำเดียวว่า
            น้องค่ายเก่งมาก แต่ละโปรเจคไม่ธรรมดากันทีเดียวว
            เมื่อมีการนำเสนอครบทุกบ้านแล้วจะเป้นช่วงของการสันทนาการโดยมีพี่ ๆ
            มาให้ความสนุกแก่น้อง ๆ ให้สนุกกันสุด ๆ
            ไปเลยหลังจากที่สนุกกันไปแล้วก็เข้าสู่ช่วงสำคัญนั้นก็คือการประกาศรางวัลนั้นเอง
            น้อง ๆ ทุกคนเก่งมาก ๆ ยินดีกับน้อง ๆ ด้วยนะครับ
            เมื่อการประกาศรางวัลผ่านไปก็เข้าสู่ช่วงสุดท้ายของค่ายนั้นคือพิธีปิดโดยได้รับเกียรติจาก
            ดร.วิชญะ ต่อวงศ์ไพชยนต์ หัวหน้าภาควิชา วิทยาการคอมพิวเตอร์ คณะ
            วิทยาศาสตร์ สจล. ที่มากล่าวสร้างแรงบันดาลใจให้กับน้องๆ ของเราครับ
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            หลังจากที่ได้อ่านกันไปข้างต้นแล้วนี่นับว่าเป็นแค่ส่วนหนึ่งเท่านั้น
            น้อง ๆ คนไหนที่สนใจอยากเข้าร่วมค่าย CS CAMP ในปีถัดไป
            สามารถติดตามได้ที่หน้าเพจเฟสบุ๊คหรือทวิตเตอร์ CS-CAMP KMIT'L
            ค่ายของเราได้จัดขึ้นปีละครั้งเท่านั้น แล้วพบกันนะครับ
          </div>
          <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/cs/cscamp1.jpg"></img>
            <img src="../assets/images/reviews/cs/cscamp2.jpg"></img>
            <img src="../assets/images/reviews/cs/cscamp3.jpg"></img>
            <img src="../assets/images/reviews/cs/cscamp4.jpg"></img>
          </div>
          <div className=" text-[18px] font-bold mt-[30px]">
            ติดต่อสอบถามได้ที่
          </div>
          <div className="text-[18px] font-bold mt-[5px]">
            Facebook:
            <Link
              href="https://www.facebook.com/cskmitl.camp"
              target="_blank"
              className="flex text-blue-500 underline"
            >
              https://www.facebook.com/cskmitl.camp
            </Link>
          </div>
          <div className="text-[18px] font-bold mt-[5px]">
            Twitter:
            <Link
              href="https://twitter.com/cskmitlcamp"
              target="_blank"
              className="flex text-blue-500 underline"
            >
              https://twitter.com/cskmitlcamp
            </Link>
          </div>
        </div>

        <div className="flex w-[378px] ml-[220px]">
          <div className="h-[1274px] w-[378px] rounded-xl mt-[48px] bg-[#f3f4f6]">
            <div className="bg-[#bbf7d0] w-[378px] h-[65px] rounded-t-xl">
              <div className="font-bold text-[18px] pt-[20px] text-center">
                กิจกรรมที่กำลังจะมาถึง
              </div>
            </div>

            <div className="grid grid-rows-3 gap-10 mt-[40px] ml-[65px]">
              {activity.map((item) => {
                return <Cardsmall item={item} type="activity" />;
              })}
            </div>
            <div>
              <div
                href="#"
                className="font-regular underline ml-[255px] pt-[15px]"
              >
                ดูทั้งหมด
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 justify-center  mt-[50px]">
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
  );
};
export default ActivityCe;
