import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ActivityIt = () => {
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
      title: "รีวิวค่าย/กิจกรรม",
      link: "/reviews-activity/it",
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

      <div className="mt-[20px] bg-cover h-[400px] w-full">
        <img
          className="h-[600px] w-full"
          src="../assets/images/reviews/it/acit-cover.png"
        ></img>
      </div>

      <div className="flex justify-center mt-[200px]">
        <div className="w-[750px] ml-[200px]">
          <div className="bg-[#fb923c] rounded-lg shadow-gray shadow-sm text-center text-[25px] font-bold drop-shadow-2xl mt-[48px]">
            รีวิวค่าย IT CAMP #13 ไอทีลาดกระบัง [EP.50]
          </div>

          <div className=" text-[18px] font-regular mt-[30px]">
            เฮ้ยๆๆ เดินทางมา{" "}
            <div className="text-sky-400 font-bold">
              ครึ่งร้อย EP. แล้ว กับ “แคมป์รีวิว”
            </div>
            สวัสดีจ้า น้องๆ แคมป์ฮับทุกคนเลย วันนี้แคมป์รีวิวตอนที่ 50
            (มาไกลเหมือนกันนะเนี่ย) จะมาขอเสนอค่ายที่น้องๆ
            สายคอมและไอทีอยากเข้ามากที่สุด ค่ายนึงเลย !! กับ{" "}
            <div className="text-sky-400 font-bold">“IT CAMP”</div>
            ซึ่งก่อนที่จะไปเข้าค่ายกันในครั้งที่ 14 ในปีนี้ พี่ฟิวส์ พี่มน
            และพี่จ๊อบ ก็ขอพาน้องๆ ย้อนกลับไปสัมผัสบรรยากาศในครั้งที่ 13 กันก่อน
            มาดูกันซิว่า ปีที่แล้วมีกิจกรรมอะไรให้น้องๆ ร่วมกันสนุกเฮฮา
            และมีอะไรบ้างให้น้องๆ เรียนรู้ไปกับโลกแห่งไอทีกันบ้าง
            เลื่อนลงไปข้างล่างกันเลยจ้า
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/it/it1.png"></img>
          </div>
          <div className="text-[25px] font-bold mt-[40px] text-sky-400 font-bold">
            <div className="text-[#f87171] font-bold">รู้จัก</div> “ไอทีลาดกระบัง”
          </div>
          <div className="mt-[18px] ml-[10px]">
            <img src="../assets/images/reviews/it/it2.png"></img>
          </div>

          <div className=" text-[18px] font-regular mt-[20px]">
            <div className=" text-[18px] font-regular mt-[30px]">
              <Link
                href="https://www.it.kmitl.ac.th/th/"
                target="_blank"
                className="flex text-blue-500 underline"
              >
                <div className="text-sky-400 underline after:content-['_↗']">
                  คณะเทคโนโลยีสารสนเทศ
                  สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                </div>{" "}
              </Link>
              หรือที่เราเรียกสั้นๆ ว่า ไอทีลาดกระบัง ถูกสถาปนาเป็นส่วนราชการขึ้น
              เมื่อ 27 กุมภาพันธ์ 2539 ซึ่งเป็นโครงการที่ริเริ่มโดยศาสตราจารย์
              ดร.ไพรัช ธัชยพงษ์ อธิการบดี ในขณะนั้นได้มีวิสัยทัศน์
              และเล็งเห็นถึงบทบาทความสำคัญ และแนวโน้ม ของเทคโนโลยีสารสนเทศ
              ต่อการพัฒนาประเทศ ประกอบกับความต้องการ
              ของตลาดแรงงานที่ขาดแคลนบุคลากร ที่มีศักยภาพในด้านนี้อยู่มาก
              โดยแรกเริ่ม ได้เปิดสอนในระดับปริญญาโทก่อน ต่อมาในปี 2546
              ได้เปิดรับนักศึกษาในระดับปริญญาตรีเป็นรุ่นแรก และปริญญาเอก ในปี
              2547
            </div>
          </div>
          <div className="text-[25px] font-bold mt-[40px] text-sky-400 font-bold">
            <div className="text-[#f87171] font-bold">
              มีอะไรบ้างให้เราได้เรียนรู้ใน
            </div>{" "}
            “ไอทีลาดกระบัง”
          </div>
          <div className="mt-[18px] ml-[10px]">
            <img src="../assets/images/reviews/it/it3.png"></img>
          </div>
          <div className=" text-[18px] font-regular mt-[20px]">
            สำหรับหลักสูตรสำหรับน้องๆ ที่กำลังจะขึ้นมาศึกษาต่อในระดับปริญญาตรี
            มี <div className="text-sky-400 font-bold">3 สาขา</div> ด้วยกัน
            ซึ่งน้องๆ จะต้องเลือกกันตั้งแต่สอบเข้า ผ่านระบบ{" "}
            <div className="text-sky-400 font-bold">TCAS</div> เลย ได้แก่…
          </div>
          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                -{" "}
                <div className="text-sky-400 font-bold">
                  Data Science and Business Analytics (DSBA)
                </div>{" "}
                สาขาวิชาเทคโนโลยีสารสนเทศทางธุรกิจ (หลักสูตรนานาชาติ)
              </li>
              <li>
                -{" "}
                <div className="text-sky-400 font-bold">
                  Business Information Technology (BIT)
                </div>{" "}
                สาขาวิชาวิทยาการข้อมูลและการวิเคราะห์เชิงธุรกิจ
              </li>
            </ul>
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            <div className="text-sky-400 font-regular">
              สองสาขาวิชาแรก เป็นสาขาวิชาน้องใหม่ล่าสุด
            </div>
            {"  "} จากการปรับปรุงหลักสูตรในปี 2559
            และสำหรับใครที่แน่ใจว่าตัวเองไม่ใช่สายธุรกิจ หรือ Data Scientist
            แน่ๆ พี่มนขอแนะนำ…
          </div>

          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                -{" "}
                <div className="text-sky-400 font-bold">
                  Information Technology (IT)
                </div>{" "}
                สาขาวิชาเทคโนโลยีสารสนเทศ
              </li>
            </ul>
          </div>
          <div className=" text-[18px] font-regular mt-[20px]">
            และในสาขานี้ยังได้แยกย่อยออกอีก 3 แขนงด้วยกัน ซึ่งน้องๆ
            จะได้เลือกกันอีกทีตอนที่อยู่ ปี 2 เทอม 2
            ยังพอมีเวลาให้ได้ตัดสินใจเลือกกันอีกนิด ได้แก่…
          </div>
          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                - <div className="text-sky-400 font-bold">Software Engineering</div>{" "}
                แขนงวิชาวิศวกรรมซอฟต์แวร์
              </li>
              <li>
                -{" "}
                <div className="text-sky-400 font-bold">
                  Network and System Technology
                </div>{" "}
                แขนงวิชาเทคโนโลยีเครือข่ายและระบบ
              </li>
              <li>
                -{" "}
                <div className="text-sky-400 font-bold">
                  Multimedia and Game Development
                </div>{" "}
                แขนงวิชาการพัฒนาสื่อประสมและเกม
              </li>
            </ul>
          </div>
          <div className="mt-[18px] ml-[20px]">
            <img src="../assets/images/reviews/it/it5.png"></img>
          </div>
          <div className=" text-[18px] font-regular mt-[30px]">
            เห็นชื่อทั้ง 3 สาขา และ 3 แขนงแล้ว
            ใครที่รู้ตัวตนแน่นอนว่าไม่ใช่สายโค้ดดิ้ง
            อาจจะหาทางหนีทีไล่ไปสาขาอื่นๆ เช่น BIT แต่ใช่ว่าถ้าน้องๆ
            เข้าไปแล้วจะไม่เจอโค้ด พี่มนขอบอกเลยนะจุดๆ
            นี้ว่าขึ้นชื่อว่าคณะไอทีแล้ว “เจอโค้ดทุกสาขาจ้า” 55555
            แต่จะไม่ได้เรียนเข้มข้นเท่ากันเท่านั้นเอง
          </div>

          <div className=" text-[18px] font-regular mt-[20px]">
            ขอแนะนำสองสาขาน้องใหม่ต่ออีกซักหน่อย สำหรับสาขา BIT
            จะเป็นหลักสูตรนานาชาติ ที่น้องๆ จะได้เรียนกับอาจารย์ชาวต่างชาติเลย
            เน้นทั้งภาษาอังกฤษ และด้านการบริหารธุรกิจไอที บัญชง บัญชีพื้นฐาน
            ก็มาให้น้องๆ ได้เรียนรู้เช่นกัน และสำหรับ DSBA ก็จะให้น้องๆ
            ได้เข้าสู่โลกแห่ง Big Data การวิเคราะห์ข้อมูลในโลกดิจิทัล
            พฤติกรรมต่างๆ เพื่อนำไปปรับใช้กับธุรกิจต่างๆ
            และการใช้ชีวิตของมวลมนุษยชาติ !! ถ้าน้องๆ
            สนใจข้อมูลของไอทีลาดกระบังเพิ่มเติม สามารถคลิกไปดูได้ที่
            เว็บไซต์ของคณะฯ กันได้เลยจ้า..
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
export default ActivityIt;
