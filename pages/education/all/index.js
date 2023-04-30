import React from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";
import Cardedu from "@components/Cardedu";

const Alleducation = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "member",
    },
    {
      title: "คลังความรู้",
      link: "/education/all",
    },
  ];
  const course = [
    {
      image: "../assets/images/course/c1.jpg",
      title: "การเขียนโปรแกรมภาษาซี",
      content: "สจล.",
      link: "#",
    },
    {
      image: "../assets/images/course/c2.jpg",
      title: "Become To Front-End Developer",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c3.jpg",
      title: "Complete Arduino For Beginner",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c4.jpg",
      title: "Complete Data Analytics Package",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c5.jpg",
      title: "Programming For Everyone X",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c6.jpg",
      title: "Fundamental Web Dev",
      content: "borntodev.com",
      link: "#",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        คลังความรู้{" "}
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="text-[25px] font-semibold"> คอร์สเรียนเสริม </div>{" "}
            <a href="#" className="font-semibold underline">
              ดูทั้งหมด{" "}
            </a>{" "}
          </div>
          <hr className="mt-[18px] mb-4" />
          <div className="flex justify-center mt-12">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-28">
                {" "}
                {course.map((item) => {
                  return <Cardedu item={item} type="course" />;
                })}{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="flex justify-between items-center mt-[150px]">
            <div className="text-[25px] font-semibold"> แบบฝึกหัด </div>{" "}
            <a href="/leaning" className="font-semibold underline">
              ดูทั้งหมด{" "}
            </a>{" "}
          </div>{" "}
          <hr className="mt-[18px]" />
          <div className="flex">
            <div className="mt-[50px] bg-[#fafafa] rounded-md shadow-inner w-[435px] ml-[40px]">
              <div className="flex justify-center w-[430px]">
                <div className="flex flex-col gap-2">
                  <h1 className="mt-[10px] underline text-[20px] text-center">
                    แบบฝึกหัดเรื่อง{" "}
                  </h1>{" "}
                  <div className="flex flex-col gap-2 mt-[5px] ml-[10px]">
                    <div className="text-[18px] mt-[14px]">
                      <Link
                        href="https://images-se-ed.com/ws/Storage/PDF/552230/001/5522300010435PDF.pdf"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur>
                          {" "}
                          1. หนังสือรวมโจทย์ภาษาซีในรูปแบบโอลิมปิกวิชาการ{" "}
                        </ur>{" "}
                      </Link>{" "}
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="http://portal5.udru.ac.th/ebook/pdf/upload/17QjQ6OQ38UCC3lCc238.pdf"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 2. การเขียนโปรแกรมคอมพิวเตอร์ </ur>{" "}
                      </Link>{" "}
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="https://www.academia.edu/12327254/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%82_%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%9A_%E0%B8%A7%E0%B8%B4_%E0%B8%8A%E0%B8%B2_517111_%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B5_%E0%B8%A2%E0%B8%99%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4_%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3_1_%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B4_%E0%B8%8A%E0%B8%B2%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4_%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3_%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4_%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3_%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4_%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1_%E0%B8%A2%E0%B8%A8%E0%B8%B4_%E0%B8%A5%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%A3_2557"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 3. รวมข้อสอบการเขียนโปรแกรมคอมพิวเตอร์ </ur>{" "}
                      </Link>{" "}
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="https://www.facebook.com/tutortongpage/posts/1131111210286332/"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 4. รวมโจทย์ C++ พร้อมเฉลย </ur>{" "}
                      </Link>{" "}
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="https://www.dek-d.com/board/view/1852461/"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 5. Lab#6 โจทย์พร้อมเฉลย</ur>
                      </Link>
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="https://sites.google.com/site/khxmphiwtexrm5/hnwy-kar-reiyn-ru1/kar-wikheraah-payha/kar-wikheraah-payha-p4"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 6. ตัวอย่างโจทย์ปัญหาการวิเคราะห์ปัญหา </ur>{" "}
                      </Link>{" "}
                    </div>
                    <div className="text-[18px]">
                      <Link
                        href="https://anyflip.com/kgfo/vixx/basic"
                        target="_blank"
                        className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                      >
                        <ur> 7. การออกแบบอัลกอรึทึมและการเขียนรหัสเทียม </ur>{" "}
                      </Link>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex">
              <div className="flex ml-[200px]">
                <div className="mt-[50px] bg-[#fafafa] rounded-md shadow-inner w-[600px] h-[420px]">
                  <div>
                    <h1 className="mt-[10px] underline text-[20px] text-center">
                      เว็บไซต์แนะนำ{" "}
                    </h1>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-2 mt-[20px] ml-[10px]">
                    <div className="flex justify-between ml-[30px] w-[515px]">
                      <img
                        className="w-[152px] h-[152px] rounded-md"
                        src="../assets/images/course/exercise2.jpg"
                        alt="../assets/images/course/exercise2.jpg"
                      />
                      <div className="ml-[35px]">
                        <div className="text-[16px] font-bold">
                          <Link
                            href="https://www.w3schools.com/"
                            target="_blank"
                            className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-100"
                          >
                            <ur> W3schools.com </ur>{" "}
                          </Link>{" "}
                        </div>
                        <div className="w-[350px]">
                          <div className="text[8px] font-regular">
                            เป็นหนึ่งในเว็บที่มีชื่อเสียงมากที่สุดสำหรับนักพัฒนาและโปรแกรมเมอร์
                            ทุกคนที่ต้องการเรียนรู้
                            ภาษาเขียนโปรแกรมแทบจะทุกภาษาตั้งแต่
                            การเขียนโปรแกรมบนเว็บ
                            ไปจนถึงภาษาโปรแกรมมิ่งสำหรับฐานข้อมูลหรือโปรแกรมบนเดสก์ท็อป
                            ซึ่งทุกหลักสูตรฟรีหมด{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="flex justify-between ml-[30px] mt-[15px] w-[515px]">
                      <img
                        className="w-[152px] h-[152px] rounded-md"
                        src="../assets/images/course/exercise1.jpg"
                        alt="../assets/images/course/exercise1.jpg"
                      />
                      <div className="ml-[35px]">
                        <div className="text-[16px] font-bold">
                          <Link
                            href="https://teamtreehouse.com/"
                            target="_blank"
                            className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-100"
                          >
                            <ur> TeamTreeHouse.com </ur>{" "}
                          </Link>{" "}
                        </div>
                        <div className="w-[350px]">
                          <div className="text[8px] font-regular">
                            เป็นโปรเจ็กต์สำหรับฝึกโปรแกรมเมอร์หน้าใหม่ ที่
                            ไร้ประสบการณ์โดยสิ้นเชิง เพื่อให้สามารถพัฒนาเว็บไซต์
                            หรือแม้แต่แอพพลิเคชั่นเป็นของตนเองได้ด้วย
                            ผู้ใช้หลากหลายล้านที่เข้ามาเยี่ยมชมเว็บนี้
                            ในแต่ละวัน{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Alleducation;
