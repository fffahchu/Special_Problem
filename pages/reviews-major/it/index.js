import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ReviewIt = () => {
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
      title: "ไอที",
      link: "/faculty/it",
    },
    {
      title: "รีวิวคณะ/สาขา",
      link: "/reviews/it",
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
      <div className="mt-[20px] flex items-center justify-center">
        <img
          className="bg-cover h-[500px] w-full"
          src="../assets/images/reviews/it/cover.gif"
        ></img>
      </div>

      <div className="flex justify-center">
        <div className="w-[750px] ml-[200px]">
          <div className="mt-[60px]">
            <img
              className="h-[333px] w-[700px] rounded"
              src="../assets/images/reviews/it/1.jpg"
            ></img>
          </div>

          <div className="indent-10 text-[18px] font-regular mt-[30px]">
            สาขาเทคโนโลยีสารสนเทศ นั้นแบ่งหลายส่วนและรายภาควิชาในแต่ละชั้นปี
            ท่านก็จะได้เรียนในรายวิชาที่แตกต่างกันไปโดยในชั้นปีที่ 1
            ท่านก็จะได้เรียนเกี่ยวกับวิชาความรู้ที่จำเป็นในการเรียนในรายวิชาเทคโนโลยีสารสนเทศนี้
            เช่นรายวิชา algorithm , principles of it , Discrete Mathematics
            เพื่อให้ท่านได้มีพื้นฐานในการที่จะเรียนในปีต่อไปหรือในเทอมต่อไป
          </div>
          <div className="mt-[30px]">
            <img
              className="rounded"
              src="../assets/images/reviews/it/2.jpg"
            ></img>
          </div>
          <div className="text-[18px] font-regular mt-[30px] indent-10">
            เมื่อท่านเข้าในส่วนของชั้นปีที่ 1 ภาคปลาย
            ท่านก็จะได้เรียนเกี่ยวกับวิชาในกลุ่มการพัฒนาซอฟต์แวร์
            เพื่อที่ทำให้ท่านได้เข้าใจเกี่ยวกับการทำงานของระบบคอมพิวเตอร์
            เช่นรายวิชา Computer Networks , database Design , Computer
            programming และกฎหมายด้านเทคโนโลยีสารสนเทศ
            ในรายวิชาดังที่กล่าวมานั้นจะมีความยากอยู่พอสมควรโดยเฉพาะในรายวิชา
            Computer programming และรายวิชา database Design ทั้ง 2
            รายวิชานี้เรียกได้ว่าเป็นวิชาที่ท่านจะต้องทำความเข้าใจ
            เพราะเป็นการเรียนเกี่ยวกับระบบของคอมพิวเตอร์
            และฐานข้อมูลที่ทำงานอยู่เบื้องหลังคอมพิวเตอร์ทุกเครื่อง
          </div>
          <div className="mt-[30px]">
            <img
              className="rounded"
              src="../assets/images/reviews/it/3.jpg"
            ></img>
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            เมื่อท่านเข้าสู่ชั้นปีที่ 2
            ภาคต้นวิชาที่ท่านจะได้เรียนเพิ่มขึ้นมาก็คือ web technology
            ซึ่งในรายวิชานี้ท่านจะได้เรียนเกี่ยวกับการพัฒนาเว็บไซต์ในการออกแบบเว็บไซต์เช่นกัน
            และในรายวิชาต่อมาก็คือ Data and File Structures โดยทั้ง 2
            รายวิชานี้ก็เป็นการปูพื้นฐานสู่การทำงานด้านเทคโนโลยีสารสนเทศต่างๆ
            ทั้งงานโปรแกรมเมอร์ ผู้เชี่ยวชาญด้าน เน็ตเวิร์ค
            หรือแม้กระทั่งนักพัฒนาระบบและพัฒนาซอฟต์แวร์
          </div>

          <div className=" text-[18px] font-regular mt-[20px]">
            เเละเมื่อท่านเข้าสู่ชั้นปีที่ 2
            ภาคปลายท่านก็จะเรียนเกี่ยวกับวิชาที่สอนเรื่อง
            ความปลอดภัยของเครือข่ายคอมพิวเตอร์ , การพัฒนาโปรแกรมประยุกต์ ,
            สถิติและการวิจัยทางเทคโนโลยีสารสนเทศ
            รวมถึงการวิเคราะห์และออกแบบระบบสารสนเทศ
          </div>
          <div className="mt-[30px]">
            <img
              className="rounded"
              src="../assets/images/reviews/it/4.jpg"
            ></img>
          </div>
          <div className="indent-10 text-[18px] font-regular mt-[30px]">
            ในส่วนของชั้นปีที่ 3
            ภาคต้นนั้นเป็นการเรียนลงลึกเกี่ยวกับการพัฒนาโปรแกรมประยุกต์ในการจัดการโครงการด้านเทคโนโลยีสารสนเทศ
            รวมไปถึงการทำธุรกิจที่เกี่ยวกับกลุ่มงานเทคโนโลยีสารสนเทศด้วย
          </div>
          <div className="-[18px] font-regular mt-[20px]">
            ชั้นปี 3 ภาคปลายก็จะเรียนเกี่ยวกับ วิศวกรรมซอฟต์แวร์
            และระบบสารสนเทศการจัดการทางธุรกิจ
            รวมไปถึงการทำโครงงานนิสิตทางเทคโนโลยีสารสนเทศ 1 ด้วย
          </div>
          <div className="mt-[30px]">
            <img
              className="rounded"
              src="../assets/images/reviews/it/6.jpg"
            ></img>
          </div>
          <div className="indent-10 text-[18px] font-regular mt-[30px]">
            และในชั้นปีที่ 4 ภาคต้น นิสิตที่เรียนสาขาเทคโนโลยีสารสนเทศ
            ก็จะได้ทำโครงงานนิสิตทางเทคโนโลยีสารสนเทศ 2 และกลุ่มวิชาเอกเลือก
            ส่วนภาคปลายนั้นก็จะได้ออกไปฝึกประสบการณ์วิชาชีพตลอดทั้งภาคเรียน
          </div>
          <div className="mt-[30px]">
            <img
              className="rounded"
              src="../assets/images/reviews/it/5.jpg"
            ></img>
          </div>
          <div className="indent-10 text-[18px] font-regular mt-[30px]">
            นี้ก็คือรีวิวสาขาเทคโนโลยีสารสนเทศของมหาวิทยาลัยมหาสารคามโดยคร่าว ๆ
            สุดท้ายนี้ผมแนะนำสิ่งที่ควรมีในการเรียนสาขานี้ ก็คือ ความชอบ
            ความอดทน ความรับผิดชอบในงานที่ทำ
            สิ่งที่กล่าวมานั้นเป็นสิ่งที่สำคัญอย่างมากในการเรียนในสาขานี้หรือในสาขาวิชาใด
            ๆ ก็แล้วแต่ ส่วนอาชีพเมื่อท่านจบการศึกษาไปนั้นก็มีมากมายหลากหลาย
            และมีตลาดงานต้องการเป็นอย่างสูง มีโอกาสตกงานน้อยมากถ้าท่านเก่งจริง
            สุดท้ายแล้วผมขอแนะนำสาขาเทคโนโลยีสารสนเทศสำหรับการศึกษาต่อในระดับอุดมศึกษานะครับ
            สาขานี้เรียนไม่ยากอย่างที่คิด
            และที่สำคัญมาพัฒนาประเทศชาติด้วยเทคโนโลยีกันครับ
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
export default ReviewIt;
