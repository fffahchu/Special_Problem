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
      title: "วิศวะคอม",
      link: "/faculty/ce",
    },
    {
      title: "รีวิวค่าย/กิจกรรม",
      link: "/reviews-activity/ce",
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
          src="../assets/images/reviews/ce/ac-ce.png"
        ></img>
      </div>

      <div className="flex justify-center mt-[200px]">
        <div className="w-[750px] ml-[200px]">
          <div className="bg-[#fb923c] rounded-lg shadow-gray shadow-sm text-center text-[25px] font-bold drop-shadow-2xl mt-[48px]">
            รีวิวค่าย CE Smart Camp#11 วิศวะคอม ลาดกระบัง [EP.58]
          </div>

          <div className="text-[18px] font-bold mt-[40px]">
            สิ่งที่น้องๆ จะได้รู้จากรีวิวนี้
          </div>
          <div className=" text-[18px] font-regular mt-[15px]">
            <ul className="list-outside">
              <li>
                - เจาะลึกวิศวะคอม ลาดกระบัง คณะนี้เรียนอะไร เหมาะกับใครบ้าง
                EP.นี้มีคำตอบให้ บุกค่าย CE Smart Camp
              </li>
              <li>
                - ค่ายดีค่ายฟรีที่จะพาน้องๆ
                ไปรู้จักกับโลกของวิศวะคอมผ่านเวิร์คช็อปและกิจกรรมตลอด 6 วัน
              </li>
            </ul>
          </div>

          <div className=" text-[18px] font-regular mt-[30px]">
            กลับมาเจอกันอีกแล้วนะคะน้องๆ แคมป์รีวิว EP.58
            นี้เราก็ยังคงอยู่กับคณะวิศวกรรมศาสตร์ค่ะ หลังจากมีรีวิววิศวะ
            ธรรมศาสตร์และวิศวะ บางมดไปแล้ว รอบก็เป็นคิวของวิศวะ ลาดกระบังค่ะ
            พี่ดรีมจะพาน้องๆ ทุกคนไปบุกค่าย CE Smart Camp 11 ที่จัดโดยพี่ๆ
            วิศวะคอมค่ะ วันนี้ไม่เกริ่นยาวเดี๋ยวเจ็บคอ
            ไปทำความรู้จักกับวิศวะคอมและค่าย CE Smart Camp กันเลยดีกว่า Go Go!
          </div>

          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            INSIGHT วิศวะคอมกับพี่ค่าย CE Smart Camp
          </div>

          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            ใครอยากรู้จักคณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์
            ลาดกระบังผ่านมุมมองของคนที่เรียนอยู่คณะนี้จริงๆ บ้างยกมือขึ้น
            ไปคุยกับพี่ต๊ะ ประธานค่าย และพี่อ้อน พี่ค่าย CE Smart Camp กันดีกว่า
            รับรองเลยว่าน้องๆ จะได้ข้อมูลคณะอินไซต์เจาะลึกแบบที่หาไม่ได้ง่ายๆ ใน
            Google ถ้าพร้อมแล้วไปกันเลย
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/ce/ce1.jpg"></img>
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            วิศวะคอมลาดกระบังเรียนอะไรกันบ้างนะ?
          </div>
          <div className=" text-[18px] font-regular mt-[20px]">
            พี่ต๊ะ :
            ภาควิชาของเราส่วนใหญ่จะเรียนเรื่องการทำงานของระบบคอมพิวเตอร์ครับ
            ตั้งแต่การทำงานของอุปกรณ์ต่างๆ ของคอมพิวเตอร์
            การเขียนโปรแกรมและสร้าง Application
            ขึ้นมาเพื่ออำนวยความสะดวกหรือควบคุมอุปกรณ์ได้
            รวมถึงการสื่อสารกันของอุปกรณ์ต่างๆ ด้วยครับ
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            พี่ต๊ะ :
            ภาควิชานี้เหมาะสำหรับคนที่สนใจด้านการเขียนโปรแกรมคอมพิวเตอร์
            รวมถึงชอบการวิเคราะห์เหตุการณ์ต่างๆ และพร้อมที่จะศึกษาเทคโนโลยีใหม่ๆ
            ครับ
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            พี่อ้อน :
            อย่างที่บอกไปว่าการเรียนวิศวะคอมเน้นการปฏิบัติจริงและใช้ความรู้มาแก้ปัญหาที่เกิดขึ้น
            ปัญหาที่จะได้เจอจะมีความหลากหลายมาก
            ไม่มีคนสามารถตอบคำถามเราได้ทุกครั้ง
            ทำให้เราควร’คิด’อย่างมีกระบวนการเพื่อแก้ปัญหาที่เราจะต้องเจอ
            คนที่เหมาะกับวิศวะคอมควรมีความกระตือรือร้น ความใฝ่เรียนรู้ในการเรียน
            ที่สำคัญควรที่จะติดตามข่าวสารเกี่ยวกับเทคโนโลยีอยู่เสมอค่ะ
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            พี่อ้อน : การเรียนวิศวะคอมเป็นการเรียนการสร้างเครื่องมือ
            ชุดคำสั่งหรืออุปกรณ์เพื่อมารองรับและแก้ปัญหาที่เกิดขึ้น
            สิ่งที่เรียนหลักๆ จะแบ่งออกได้เป็น 3 สาย คือ Software Hardware และ
            Network
            การเรียนในสายนี้สิ่งที่เน้นเป็นการเรียนแบบปฏิบัติจริงและศึกษาด้วยตัวเองค่ะ
          </div>

          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/ce/ce2.jpg"></img>
          </div>
          <div className=" text-[18px] font-regular mt-[20px]">
            พี่ต๊ะ : ทางภาควิชาเรามีการสอนการเขียนโปรแกรมเบื้องต้นครับ
            คือจะเริ่มสอนตั้งแต่พื้นฐานเลย น้องๆ ที่สนใจ
            แต่คิดว่าตัวเองพื้นฐานยังไม่แน่น หรือว่ายังไม่มีพื้นฐานเลย
            ก็สามารถเริ่มเรียนรู้ไปได้ครับ
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            พี่อ้อน :
            การเข้ามาเรียนภาควิชานี้ไม่ต้องมีพื้นฐานก็สามารถเรียนทีนี่ได้เพียงแค่มีความพยายามค่ะ
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            ไปตะลุยค่าย CE Smart Camp กันดีกว่า!
          </div>

          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/ce/ce3.jpg"></img>
          </div>
          <div className="text-[18px] font-regular mt-[20px] indent-10">
            ค่าย CE Smart Camp เป็นค่ายที่จะพาน้องๆ
            ม.ปลายไปรู้จักกับโลกของวิศวะคอม โดยปีนี้ค่ายจัดขึ้นเป็นครั้งที่ 10
            แล้ว จุดประสงค์ของค่ายคือต้องการให้น้องๆ
            ได้รู้จักและเข้าใจวิศวะคอมมากขึ้นผ่านกิจกรรมสนุกๆ
            และเวิร์คช็อปที่น้องๆ จะได้ลงมือทำจริงๆ ตลอดค่าย 6 วัน
            ที่สำคัญคือค่ายนี้เปิดโอกาสให้น้องๆ เข้ามาสัมผัสกับวิศวะคอมแบบฟรีๆ
            ไม่มีค่าใช้จ่ายเลย
          </div>
          <div className="text-[18px] font-bold mt-[40px] text-[#f87171]">
            เข้าค่ายนี้แล้วได้อะไรบ้าง
          </div>
          <div className=" text-[18px] font-regular mt-[20px]">
            น้องบั๊มพ์ : เข้าค่าย CE Smart camp
            อย่างแรกเลยพี่ค่ายค่อยดูแลตลอดค่ายเลย (ฮาๆ) แล้วก็ได้เพื่อนใหม่ๆ
            ที่มีความสนใจในแนวเดียวกัน
            ยังได้ประสบการณ์มากมายที่ไม่ได้อยู่ในห้องเรียน ได้ลองสิ่งใหม่ๆ
            ที่ไม่เคยทำ แล้วได้รู้ว่าอย่าต่อสายไฟผิด (หัวเราะ)
            ได้รู้ว่าตัวเองเหมาะไหมที่จะเรียนทางด้านนี้
            ได้นำทักษะที่เรียนรู้จากค่ายนี้มาประยุกต์ใช้ในชีวิตประจำวันได้
            ผมได้เอาสิ่งที่เรียนจากค่ายไปทำโครงงานพอดีเลย และยังได้ความทรงจำดีๆ
            ที่จะติดตัวเราตลอดไป อยากให้ลองไปสัมผัสค่ายนี้ดู
            เพราะค่ายนี้ให้อะไรเราได้เยอะมากจริงๆ ครับ
            อีกทั้งการไปค่ายนี้ได้ผมรับรองว่าจะได้รับความรู้ ความสนุก
            และความทรงจำดีๆ ตลอดค่ายอย่างแน่นอนครับ
          </div>
          <div className=" text-[18px] font-regular mt-[10px]">
            น้องดรีม : ก่อนมาค่ายคิดว่าต้องได้เล่นโรบอท Lego Mindstorm
            อีกครั้งแน่ๆ คือม.3
            ที่ดรีมเรียนหุ่นยนต์ครั้งแรกเคยได้เล่นครั้งเดียวแล้วไม่ได้เล่นอีกเลย
            อยากเล่นอีก
            แล้วก็เรื่องของกิจกรรมสันทนาการที่อยากเก็บไปใช้ต่อในค่ายของดรีมเอง
            กับคอนเนคชั่นกับคนอื่นๆ ไว้คอยช่วยเหลือตอนมีปัญหาเรื่องโปรแกรมค่ะ
            ซึ่งจบค่ายมาก็ได้อย่างที่หวังหมดเลย55555
          </div>
          <div className="text-[18px] font-bold mt-[10px] text-[#f87171] underline">
            เขียนโดย พี่ดรีม แคมป์ฮับ
          </div>
          <div className="text-center text-[18px] font-bold mt-[30px]">
            ขอขอบคุณ ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          </div>
          <div className="text-[18px] font-bold mt-[30px]">
            รายละเอียด:
            <Link
              href="https://www.camphub.in.th/campreview-ep58-cesmartcamp11/"
              target="_blank"
              className="flex text-blue-500 underline"
            >
              https://www.camphub.in.th/campreview-ep58-cesmartcamp11/
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
