import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardsmall from "@components/Cardsmall";

const ReviewGenneral = () => {
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
      title: "รีวิวทั่วไป",
      link: "/reviews-major/genit",
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
        <img src="../assets/images/reviews/gen/cover.jpg"></img>
      </div>

      <div className="flex mt-[150px]">
        <div className="w-[750px] ml-[200px]">
          <div className="text-[30px] font-bold drop-shadow-2xl shadow-black mt-[48px] pl-[45px]">
            ดินแดนสโลว์ไลฟ์ แต่ไฮเอนเนอจี้ ที่สุดในโลก
          </div>

          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            น้อง ๆ เชื่อหรือไม่ว่า
            ดินแดนลาดกระบังนี้เสมือนมีมนต์สะกดสำหรับผู้มาเยือน
            ภายนอกอาจจะดูไม่แตกต่างจากมหาวิทยาลัยหรือสถาบันการศึกษาแห่งอื่นที่อยู่รายล้อมกรุงเทพมหานคร
            สิ่งที่พี่คิดว่าต่างก็คงจะเป็นความสัมพันธ์ของผู้คน ชุมชน สังคมรอบตัว
            ที่นี่เด็กและอาจารย์เราอยู่ร่วมกันเป็นเนื้อเดียวกับสังคม
            ที่นี่ทำให้พี่ได้ใช้ชีวิตที่ผ่อนคลายและสโลว์ไลฟ์
            ความโลคอลที่ทำให้เราจำเป็นต้องออกไปค้นหาและมีปฏิสัมพันธ์กับชุมชนโดยรอบ
            อาจเพราะรอบตัวเราไม่ใช่พื้นที่สปอร์ตไลท์ที่เต็มไปด้วยแสงสีของเมืองหลวงเลยทำให้เราได้มีเวลาอยู่กับตัวเอง
            กับเพื่อน กับชุมชนรอบ ๆ ตัวเราก็เป็นไปได้
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            สำหรับคนที่ไม่ใช่คนลาดกระบังอย่างพี่ ขอนิยามพื้นที่ย่านนี้ว่าเป็น
            “ความสบายใจในการใช้ชีวิต” ที่หาจากที่ไหนไม่ได้ครับ
            แต่การที่เราสโลว์ไลฟ์ไม่ได้หมายความว่าเราช้าและเฉื่อยชากับทุก ๆ
            เรื่อง เพราะที่ สจล.
            ขึ้นชื่อเรื่องการฝึกความอดทนและความขยันให้กับเรามาก ๆ
            จนเป็นอัตลักษณ์ของสถาบันฯ ที่ว่า “ซื่อสัตย์ ใฝ่รู้ สู้งาน”
            รับรองว่าน้อง ๆ จะได้ใช้ชีวิตแบบเวิร์คไลฟ์บาลานซ์ที่นี่แน่นอนค่ะ
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/3.jpg"></img>
          </div>
          <div className="text-[18px] font-bold mt-[40px]">
            สิ่งศักดิ์สิทธิ์ประจำสถาบัน
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            ที่สถาบันฯ ของเรามีสิ่งศักดิ์สิทธิ์
            ประจำสถาบันสำหรับเป็นที่ยึดเหนี่ยวจิตใจไม่ว่าจะเป็น
            พระบรมราชานุสาวรีย์พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว
            กับความเชื่อการเก็บดอกเข็ม 6 กลีบ ในวันพฤหัสก่อนเที่ยงคืน จะไม่สอบตก
            หรืออนุสาวรีย์เจ้าคุณทหารฯ ตรงคณะเทคโนโลยีการเกษตร ที่เราชาว สจล.
            โดยเฉพาะเด็กเกษตรฯ จะไปขอพรก่อนออกเดินทางทำค่ายอาสาพัฒนาชนบท
            หรืออกทริปต่าง ๆ ค่ะ
          </div>
          <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/1.jpg"></img>
            <img src="../assets/images/reviews/gen/2.jpg"></img>
          </div>
          <div className="text-[18px] font-bold mt-[40px]">
            ชิมอาหาร ชมเครื่องบิน คลอเสียงเพลง ไปพร้อม ๆ กัน
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            แน่นอนค่ะว่า สจล. เราดุอยู่แล้วเรื่องของการกิน ร้านอาหาร ชาบู
            ปิ้งย่าง ยันของหวาน หากน้อง ๆ ได้เข้ามาเรียนที่ สจล.
            พี่ขอแนะนำร้านอาหารเป็นย่าน ๆ ตามแนวหอพักนะคะ
            สำหรับย่านตลาดนัดสุวรรณภูมิและ FBT ร้านขึ้นชื่อหนีไม่พ้นร้านพั้นซ์
            ร้านโคม ร้านป้าแก้วไก่หนังกรอบ ร้านดังด้านการพาไปเลี้ยงสาย
            คิดอะไรไม่ออกก็คงจะที่นี่แน่นอน
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            ส่วนของกินในตลาดนัดสุวรรณภูมิบอกเลยว่าทีเด็ดมากครับแนะนำน้อง ๆ
            คนไหนชอบของกินเล่นเชิญเดินเล่นได้เลย ส่วนย่านเกกีงามและย่าน RNP
            ขอเรียกว่าโซนคาราวานของกินที่น้อง ๆ
            สามารถชิมอาหารคาวหวานได้อย่างจุใจในราคาที่เป็นกันเอง
            ตั้งแต่ข้าวไข่เจียวกี่ไส้ก็ได้ ราคาเริ่มต้นเพียง 25 บาท ร้านนมปั่น
            บิงซู ปังเย็น ปังหวาน ฯลฯ รับรองว่าฟินแน่นอนค่ะ
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            และหากเลยออกไปอีกหน่อยถึงย่านตลาดหัวตะเข้
            จะมีคาเฟ่ร้านกาแฟบริเวณตลาดเก่าให้ได้ชิมและถ่ายรูปชิคๆ ลงไอจีแน่นอน
            หรือร้านก๋วยเตี๋ยวไก่วัดพลมานีย์ เด็ดไม่แพ้กัน
            รับรองว่าหากมาย่านลาดกระบังนี้น้อง ๆ
            จะนั่งกินข้าวชมเครื่องบินขึ้นลงหาที่ไหนไม่ได้อีกแล้วค่ะ
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/4.jpg"></img>
            <div className="text-center font-regular text-[15px]">
              ตลาดเกกีงาม 4
            </div>
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/5.jpg"></img>
            <div className="text-center font-regular text-[15px]">
              บิลเลี่ยน พาร์ค
            </div>
          </div>

          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/6.jpg"></img>
            <div className="text-center font-regular text-[15px]">หัวตะเข้</div>
          </div>
          <div className="text-[18px] font-bold mt-[40px]">รถไฟสายตะวันออก</div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            หากน้องๆอยากเปลี่ยนบรรยากาศขอแนะนำให้ลองนั่งรถไฟสายตะวันออก
            มายังป้ายหยุดรถพระจอมเกล้าได้เลยค่ะ หรือถ้าเพื่อน ๆ
            คนไหนอยากจะขึ้นเครื่องมาละก็สถาบันฯ
            ของเราเรียกว่าเดินจากสุวรรณภูมิได้เลยนะคะ
          </div>
          <div className="grid grid-cols-2 gap-4 mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/7.jpg"></img>
            <img src="../assets/images/reviews/gen/8.jpg"></img>
            <img src="../assets/images/reviews/gen/9.jpg"></img>
            <img src="../assets/images/reviews/gen/10.jpg"></img>
          </div>
          <div className=" text-[18px] font-regular mt-[30px] indent-10">
            ก้าวแรกของการเป็นลูกพระจอมเกล้าฯ ลาดกระบัง
            แน่นอนค่ะว่าการสอบแข่งขันเข้าเป็นวิธีที่คิดว่าง่ายที่สุด
            เพราะมันคือการแข่งกับตัวเอง แข่งกับเวลาที่มีอยู่อย่างจำกัด
            แข่งกับความละเอียดรอบคอบในการทำข้อสอบ
            และพี่เองเป็นหนึ่งในเด็กแอดมิชชั่นที่ทำตามความฝันของการเป็นลูกพระจอมเกล้าฯ
            ลาดกระบังสำเร็จ
          </div>
          <div className=" text-[18px] font-regular mt-[20px] indent-10">
            เมื่อก้าวเข้ามาแล้วผู้คน เพื่อน อาจารย์ บุคลากรต่าง ๆ หล่อหลอมตัวพี่
            และสังคมรอบข้างเสมือนเป็นครอบครัวใหญ่ที่เราแบ่งปันความสุขร่วมกัน
            แม้ในช่วงเวลาที่เรียกว่ากดดันที่สุดหรือช่วงอ่านหนังสือไม่ทันก็ยังมีเพื่อน
            ๆ รอบข้างที่คอยช่วยเหลือและติวให้กับเรา
          </div>
          <div className="mt-[30px] ml-[10px]">
            <img src="../assets/images/reviews/gen/11.jpg"></img>
          </div>
          <div className="text-center text-[18px] font-regular mt-[30px]">
            สำหรับน้อง ๆ
            ที่สนใจอยากเรียนต่อที่สถาเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            (สจล.) สามารถดูรายละเอียดหลักสูตร ตรวจสอบคะแนน คุณสมบัติการรับสมัคร
            และสมัครเข้ารับการคัดเลือก ได้ที่ https://www.reg.kmitl.ac.th
            หรือสอบถามข้อมูลเพิ่มเติมที่ สำนักบริหารงานทั่วไปและประชาสัมพันธ์
            สจล. หมายเลขโทรศัพท์ 02 – 329 – 8111 เว็บไซต์ www.kmitl.ac.th หรือ
            www.facebook.com/kmitlnews
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
export default ReviewGenneral;
