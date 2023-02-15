import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Card from "components/Card";

const ReviewComsci = () => {
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
      title: "รีวิวคณะ/สาขา",
      link: "/reviews/comsci",
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
    <div className="px-[10px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />

      <div class="mt-[20px] bg-cover bg-[url('https://t3.ftcdn.net/jpg/02/27/91/24/240_F_227912451_kaWIwRyRndDYUIVwY4IPOj3DNcCc5Rkg.jpg')] h-[400px] w-full">
        <div className="text-[#ffffff] font-outline-2 text-center uppercase text-[40px] font-bold pt-[80px] pr-[28px]">
          รีวิวคณะ/สาขา
        </div>
        <div className="text-[#FED502] font-outline-4 text-center uppercase text-[64px] font-extrabold pt-[20px] pr-[28px]">
          computer science
        </div>
      </div>

      <div className="flex">
        <div className="w-[690px] ml-[255px]">
          <div className="text-left text-[30px] font-bold drop-shadow-2xl shadow-black mt-[48px] pl-[45px]">
            Computer Science - วิทยาการคอมพิวเตอร์
          </div>

          <div className="text-left text-[20px] font-semibold mt-[15px]">
            “วิทยาการคอมฯ ถึงจะอยู่ในคณะวิทยาศาสตร์ แต่ไม่ต้องเรียนฟิสิกส์ เคมี
            ชีวะ”
          </div>

          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            สาขาได้เล็งเห็นความเปลี่ยนแปลงที่สำคัญของงานด้านวิทยาการคอมพิวเตอร์จึงต้องการพัฒนาหลักสูตรให้มีประสิทธิภาพสามารถทำให้น้อง
            ๆ
            ที่จบไปมีทักษะความรู้ที่ทันต่อเทคโนโลยีที่ทันสมัยและความยั่งยืนของอาชีพด้วย
            ดังนั้นทางสาขาจึงรวบรวมปัญหาต่าง ๆ จากพันธมิตรที่หลากหลาย เช่น
            กระแสความเปลี่ยนแปลงของเทคโนโลยี ความต้องการของบริษัทการสัมมนาต่าง ๆ
            เป็นต้น
          </div>

          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            ในหลักสูตรที่น้อง ๆ
            จะได้เรียนนั้นเป็นหลักสูตรที่อัปเกรดขึ้นจากสาขาวิทยาการคอมพิวเตอร์ทั่วไปแล้วจะมีการผนวกศาสตร์จากวิชาอื่น
            ๆ ที่จำเป็นเข้ามาด้วยคือภาควิชาคณิตศาสตร์ สถิติ และคอมฯ
            เพื่อขยายขอบเขตการศึกษาและร่วมกันพัฒนากลุ่ม Data Science
          </div>

          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            วิทย์คอมลาดกระบัง จะเรียนไปทางด้านคอม คณิตศาสตร์และภาษาอังกฤษ
            (นิดหน่อย แล้วแต่โอกาส) โดยที่สำคัญมากสุดคือ คอม+คณิต
            เพราะทั้งคู่ต้องใช้ร่วมกันไปตลอดใครที่หนีวิชาวิทย์ตั่งต่างมา
            ยินดีด้วยค่ะ เพราะคุณจะไม่เจอฟิสิกส์ เคมี ชีวะ เลยสักตัว!!
            (ยกเว้นว่าจะลงวิชาเลือกเอาเอง) แต่ถ้าใครจะหนีคณิตล่ะก็
            สาขานี้หนีไม่พ้นแน่นอนแต่อย่าเพิ่งกลัวใจตัวเองกันค่ะเพราะมันอาจไม่ยากอย่างที่คิดก็ได้
            ถ้าเราตั้งใจและพยายามกับมันมาก ๆ ค่ะ
          </div>

          <div className=" text-[18px] font-regular mt-[30px]">
            ปัจจุบันตอนนี้ทางสาขามีการปรับหลักสูตรใหม่แล้วนะคะ
            รวมถึงลักษณะการเรียนต่างๆก็จะเปลี่ยนไปตามกาลเวลาและหลักสูตรค่ะ
            โดยสามารถเข้าไปดูหลักสูตรใหม่ (ปี 2564)
            <Link
              href="https://drive.google.com/file/d/127QSPc553l2g8aEuxmWIyX7x8MO3OkSu/view"
              target="_blank"
              className="flex text-blue-500 underline"
            >
              https://drive.google.com/file/d/127QSPc553l2g8aEuxmWIyX7x8MO3OkSu/view
            </Link>
          </div>

          <div className="text-left text-[20px] font-semibold mt-[30px]">
            ทำไมต้องเรียน วท.บ. วิทยาการคอมพิวเตอร์ ?
          </div>

          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>1. หลักสูตรนี้ฝึกให้ ใจสู้ ใฝ่รู้ สู้งาน แข่งขันกับตนเอง</li>
              <li>
                2.
                หลักสูตรสร้างนักพัฒนามืออาชีพด้านดิจิทัลรองรับการพัฒนาประเทศไทยในภาคธุรกิจและภาคอุตสาหกรรม
              </li>
              <li>
                3. หลักสูตรนี้ปรับปรุงวิชาให้เท่าทันเทคโนโลโลยีที่ปรับเปลี่ยนไป
              </li>
              <li>
                4. หลักสูตรนี้มีเครือข่ายผู้ประกอบการที่เข้มแข็ง
                ทำสหกิจต่อเนื่องเป็นปีที่ 7
              </li>
              <li>
                5. หลักสูตรนี้เข้าโครงการทำงาน 1
                ปีครึ่งกับเครือข่ายผู้ประกอบการเป็นปีที่ 3
              </li>
            </ul>
          </div>

          <div className=" text-[18px] font-regular mt-[30px]">
            [ ทักษะ ] สามารถทำงานแบบวงจรคุณภาพ PDCA (Plan-Do-Check-Act)
            สามารถทำงานแบบวงจรชีวิตการพัฒนาระบบงาน (SDLC : System Development
            Life Cycle) สามารถทำงานที่มีกระบวนการอย่างเป็นระบบ (Systematic
            Process) สามารถทำงานแบบ Lean ด้วย Agile Team แบบคิดเป็น ทำเป็น
            แก้ปัญหาได้ สามารถทำ Higher-order Thinking ( วิเคราะห์ สังเคราะห์
            ประเมินค่า สร้างสรรค์ได้ ) สร้างความตระหนักรู้
            ประเมินคุณค่าความน่าเชื่อถือของแหล่งข้อมูล (Social Network)
          </div>

          <div className="text-left text-[20px] font-semibold mt-[30px]">
            โอกาสในการทำงาน
          </div>

          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                - นักพัฒนาระบบงานสารสนเทศเชิงบูรณาการ (Web App. Developer,
                Mobile Dev.)
              </li>
              <li>- นักพัฒนาด้าน Internet of Things (IoT Dev.)</li>
              <li>- นักพัฒนาแบบมืออาชีพ (DevOps , Full Stack Dev.)</li>
              <li>- นักพัฒนาระบบงานธุรกิจขนาดใหญ่ (ERP Developer)</li>
              <li>- นักทดสอบระบบงาน (Tester)</li>
              <li>
                - นักออกแบบและวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data Analytics)
              </li>
              <li>
                - นักออกแบบและวิเคราะห์คลังข้อมูล (Business Intelligence in Data
                Warehouse)
              </li>
              <li>- นักวิเคราะห์ข้อมูล (Data Analyst)</li>
              <li>- สถาปนิกด้านข้อมูล (Data Architect)</li>
              <li>- นักวิทยาศาสตร์ข้อมูล (Data Scientist)</li>
              <li>- (AI , Deep Learning in Business/Industrial)</li>
              <li>- นักวิเคราะห์และออกแบบระบบงาน (Junior System Analyst)</li>
              <li>- นักพัฒนาด้าน (Blockchain Technology)</li>
              <li>
                - นักทดสอบระบบงานด้านความปลอดภัย (Secure Code Test , Penetration
                Test)
              </li>
            </ul>
          </div>

          <div className=" text-[18px] font-bold mt-[15px]">
            “อัตราเงินเดือน
            ตามเกณฑ์มาตรฐานของหลักสูตรด้านคอมพิวเตอร์ชั้นนำของประเทศไทย
            อัตราการได้งานทำตรงสาขา เกิน 95 %”
          </div>
        </div>

        <div className="flex w-[378px] ml-[90px]">
          <div className="h-[1274px] w-[378px] rounded-xl mt-[48px] bg-[#f3f4f6]">
            <div className="bg-[#bbf7d0] w-[378px] h-[65px] rounded-t-xl">
              <div className="font-bold text-[18px] pt-[20px] text-center">
                กิจกรรมที่กำลังจะมาถึง
              </div>
            </div>
          <div className="grid grid-rows-4">
            {activity.map((item) => {
              return <Card item={item} type="activity" />;
            })}
          </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewComsci;