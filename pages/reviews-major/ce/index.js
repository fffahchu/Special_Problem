import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ReviewCe = () => {
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
      title: "วิศวะคอม",
      link: "/faculty/ce",
    },
    {
      title: "รีวิวคณะ/สาขา",
      link: "/reviews/ce",
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
      <div className="mt-[20px]">
        <img
          className="bg-cover h-[500px] w-full"
          src="../assets/images/reviews/ce/cover9.gif"
        ></img>
      </div>

      <div className="flex">
        <div className="w-[750px] ml-[150px]">
          <div className="text-center text-[28px] font-bold drop-shadow-2xl shadow-black mt-[48px]">
            สาขาวิชา “วิศวกรรมคอมพิวเตอร์” หรือ “Computer Engineering”
            เรียนอะไรบ้าง? จบมาทำงานอะไรได้บ้าง?
          </div>

          <div className="mt-[30px]">
            <img src="../assets/images/reviews/ce/re-ce.jpg"></img>
          </div>

          <div className="text-[18px] font-regular mt-[40px]">
            สวัสดีครับ น้องๆ ทั้งหลาย ที่มีความสนใจในวิชาชีพด้าน
            “วิศวกรรมศาสตร์” พี่คิดว่า น้องๆ หลายๆ คน
            ส่วนใหญ่คงมีความฝันที่อยากจะทำงานอาชีพเป็น “วิศวกร” กันใช่ไหมครับ
          </div>

          <div className="text-[18px] font-regular mt-[30px]">
            ในหลักสูตรที่น้อง ๆ
            จะได้เรียนนั้นเป็นหลักสูตรที่อัปเกรดขึ้นจากสาขาวิทยาการคอมพิวเตอร์ทั่วไปแล้วจะมีการผนวกศาสตร์จากวิชาอื่น
            ๆ ที่จำเป็นเข้ามาด้วยคือภาควิชาคณิตศาสตร์ สถิติ และคอมฯ
            เพื่อขยายขอบเขตการศึกษาและร่วมกันพัฒนากลุ่ม Data Science
          </div>

          <div className="text-[18px] font-regular mt-[30px]">
            สำหรับอาชีพ “วิศวกร” นั้น ก็จะมีหลากหลายด้าน และหลากหลายสาขา
            ซึ่งแต่ละสาขานั้น ก็จะทำงานในส่วนงานที่ตัวเองเป็นผู้เชี่ยวชาญ
            สำหรับปัจจุบันนี้ ซึ่งทุกๆ คน ก็รู้ดีกันอยู่แล้วใช่ไหมครับ
            ว่าเป็นยุคที่มาแรงมากๆ ของ “เทคโนโลยีด้านคอมพิวเตอร์”
            เพราะในอนาคตอันใกล้นี้ เครื่องมือ อุปกรณ์ เครื่องจักร ยานยนต์ หรือ
            อื่นๆ จะมีการนำ “เทคโนโลยีด้านคอมพิวเตอร์” เข้ามามีบทบาทมากขึ้น
            เพราะฉะนั้น “สาขาวิศวกรรมศาสตร์”
            สาขาหนึ่งที่กำลังเป็นที่นิยมเป็นอย่างมากๆ นั้นก็คือ
            “วิศวกรรมคอมพิวเตอร์” หรือ “Computer Engineering”
          </div>

          <div className="text-center text-[18px] font-bold mt-[30px]">
            “วิศวกรรมคอมพิวเตอร์” หรือ “Computer Engineering”
            เป็นสาขาวิชาที่ศึกษาเกี่ยวกับวิชาทางด้าน “วิทยาศาสตร์คอมพิวเตอร์”
            และ “วิศวกรรมไฟฟ้า”
            <div className="mt-[30px] ml-[90px]">
              <img
                className="rounded-lg"
                src="../assets/images/reviews/ce/cover4.jpg"
                alt="comeng"
              ></img>
            </div>
          </div>

          <div className="mt-[30px] text-[18px] font-regular">
            “วิศวกรรมคอมพิวเตอร์” สามารถแบ่งออกเป็น 2 ส่วนหลักๆ
            ในการเลือกที่จะศึกษานะครับ นั้นก็คือ“ระบบ Hardware” และ “ระบบ
            Software” เดี่ยวผมขออนุญาติอธิบายให้ น้องๆ ทุกๆ คน
            ได้รับทราบกันก่อนนะครับว่า ระหว่าง “ระบบ Hardware” และ “ระบบ
            Software” นั้นมีความแตกต่างกันอย่างไรบ้าง
          </div>
          <div className="text-[18px] font-regular mt-[20px]">
            “ระบบ Hardware” คือ การศึกษาเกี่ยวกับการออกแบบ
            และปรับปรุงพัฒนาเทคโนโลยีของ อุปกรณ์ต่างๆ ระบบคอมพิวเตอร์
            เพื่อให้สอดคล้องกับความต้องการของวงการอุตสาหกรรม
          </div>
          <div className="text-[18px] font-regular mt-[20px]">
            “ระบบ Software” คือ การศึกษาเกี่ยวกับการออกแบบ
            และปรับปรุงพัฒนาเทคโนโลยีของ โปรแกรมต่างๆ ของระบบคอมพิวเตอร์
            เพื่อให้สอดคล้องกับความต้องการของวงการอุตสาหกรรม
          </div>
          <div className="text-[18px] font-regular mt-[30px]">
            ผมคิดว่า สาขาวิชา“วิศวกรรมคอมพิวเตอร์” จึงเป็นที่ต้องการมากๆ
            ของท้องตลาด ในยุคนี้ และในอนาคตอีกด้วย ครับผม หากน้องๆ
            มีความสนใจด้านนี้ และคิดว่าตัวเองมีความสามารถทางด้าน “คณิตศาสตร์”
            หรือวิชาคำนวณ เป็นอย่างดี สาขาวิชา“วิศวกรรมคอมพิวเตอร์”
            ก็เป็นอีกหนึ่งสาขาวิชา ที่น่าสนใจมากๆเลยทีเดียวครับผม
          </div>

          <div className="text-[18px] font-regular mt-[30px]">
            สาขาวิชา“วิศวกรรมคอมพิวเตอร์” ที่เรียนจบใหม่ๆ
            ไม่มีประสบการณ์ในการทำงานเลย ส่วนใหญ่แล้วนะครับ
            จากที่ผมเคยสอบถามหลายๆ คนมา เงินเดือนก็จะเริ่มต้นอยู่ที่ประมาณ
            20,000 – 30,000 บาท ต่อ เดือน
            จะได้มากหรือน้อยก็ขึ้นอยู่กับความสามารถของแต่ละคนนะครับผม
          </div>
          <div className="text-[18px] font-regular mt-[20px]">
            สำหรับอาชีพของคนที่เรียนจบ สาขาวิชา“วิศวกรรมคอมพิวเตอร์” ก็มีมากมาย
            เช่นกัน เพราะที่ไหนที่ต้องใช้คอมพิวเตอร์ ก็ต้องมี
            “วิศวกรคอมพิวเตอร์” เช่นกัน ครับผม ยกตัวอย่างเช่น
            หน่วยงานของรัฐบาลและเอกชน, โรงงานอุตสาหกรรม, ธนาคาร, โรงแรม,
            รีสอร์ท, โรงพยาบาล และอื่นๆ เป็นต้น
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[10px]">
            <img
              className="rounded h-[250px] w-[550px]"
              src="../assets/images/reviews/ce/ex1.jpg"
            ></img>
            <img
              className="rounded h-[250px] w-[550px]"
              src="../assets/images/reviews/ce/ex2.jpg"
            ></img>
            <img
              className="rounded h-[250px] w-[550px]"
              src="../assets/images/reviews/ce/ex3.jpg"
            ></img>
            <img
              className="rounded h-[250px] w-[550px]"
              src="../assets/images/reviews/ce/ex4.jpg"
            ></img>
          </div>

          <div className="text-[18px] font-regular mt-[30px]">
            ส่วนตำแหน่งงาน ส่วนใหญ่ที่ผมเห็นนะครับ ก็จะมี Programmer, System
            Analyst, Project Manager, Software Engineer, Network Engineer,
            Computer Graphic, Robotic, Application Developer, Game Developer
            และอีกมากมายหลากหลาย
          </div>
          <div className="text-[18px] font-regular mt-[20px]">
            หรือถ้าหากใครที่ต้องการที่จะไปประกอบธุรกิจส่วนตัวก็สามารถทำได้ไม่ยากครับ
            เช่น เปิดบริษัทรับจ้างวางระบบคอมพิวเตอร์, รับเขียนโปรแกรม,
            เปิดร้านซ่อมคอมพิวเตอร์ และ อื่นๆ ครับผม
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
export default ReviewCe;
