import React from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";


const Exercise = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "member",
    },
    {
      title: "คลังความรู้",
      link: "/education/all",
    },
    {
      title: "แบบฝึกหัด",
      link: "/education/exercise",
    },
  ];
  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="flex justify-center">
        <div>
          <div className="mt-[40px]">
            <div className="text-[23px] font-semibold"> แบบฝึกหัด </div>{" "}
          </div>{" "}
          <hr className="mt-[12px] mb-4" />
          <div className="flex gap-[51px] px-[45px]">
            <div className="flex flex-col gap-12 w-[312px]">
              <div>
                <div className="w-[390px] mt-[30px]">
                  <div>
                    <ur className="underline text-[20px]"> แบบฝึกหัดเรื่อง </ur>{" "}
                    <div className="flex flex-col gap-2 mt-[5px]">
                      <div className="text-[18px] mt-[14px]">
                        <Link
                          href="https://images-se-ed.com/ws/Storage/PDF/552230/001/5522300010435PDF.pdf"
                          target="_blank"
                          className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-200"
                        >
                          <ur>
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
                          <ur> 5. Lab #6 โจทย์พร้อมเฉลย</ur>
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
              <div>
                <div className="flex justify-between items-center mt-[100px]">
                  <div className="flex items-center gap-1">
                    <div className="text-xl font-semibold"> ข่าวฮอต </div>{" "}
                    <img
                      src="../assets/icons/fire.svg"
                      alt="icon-fire"
                      width="24"
                      height="24"
                    />
                  </div>{" "}
                  <a href="#" className="font-semibold underline">
                    ดูทั้งหมด{" "}
                  </a>{" "}
                </div>{" "}
                <div className="flex flex-col gap-8 mt-7">
                  <div className="flex flex-col gap-3">
                    <img src="../assets/images/news/news-1.png" alt="news-1" />
                    <div>
                      ปฏิทิน 2566: อัพเดทตารางสอบ 'TCAS' ที่ 'DEK66' ต้องรู้ไว้
                      สมัครสอบ TGAT/TPAT และ{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex flex-col gap-3">
                    <img src="../assets/images/news/news-2.png" alt="news-2" />
                    <div>
                      ประกาศผล admission 65 TCAS รอบ 3 ครั้งที่ 2 เช็กผลสอบที่
                      นี่{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div>
              <div className="flex flex-col pt-[51px]">
                <div className="flex justify-center bg-[#fafafa] rounded-md shadow-inner w-[680px] h-[300px] ml-[150px]">
                  <div className="inline-block w-[640px] pt-[20px]">
                    <div className="text-[15px] indent-10">
                      เมื่อพบใคร.. ที่สนใจการโปรแกรม (Programming) และเป็นผู้
                      เริ่มต้น (Beginner) หรือจะเป็นนักพัฒนา(Developer)
                      จะมีคำถามสำคัญที่ใช้ชวนพูดคุยกันว่า
                      "อยากเขียนโปรแกรมบนแพลตฟอร์ม (Platform) ใด"
                      ก็มักเริ่มจากการเลือกระบบปฏิบัติการ คือ Windows, Linux,
                      Android, iOS แล้วเลือกแหล่งที่ใช้โปรแกรม คือ Windows,
                      Website หรือ Application แล้วก็ต้องเลือกภาษาที่ใช้พัฒนา
                      อาทิ PHP, JAVA, C, ASP, VB, Python
                      ซึ่งมีบางภาษาที่พัฒนาแล้วสามารถนำไปใช้ได้ในหลายแพลตฟอร์ม{" "}
                    </div>{" "}
                    <div className=" mt-[10px] text-[15px] indent-10">
                      <a className="font-bold"> การโปรแกรม </a> คือ
                      การกำหนดขั้นตอนให้กับคอมพิวเตอร์ทำงานตามลำดับและรูปแบบที่
                      กำหนด อัลกอริทึม(Algorithm) คือ
                      กระบวนการแก้ปัญหาอย่างเป็นขั้นตอนหรือขั้นตอนวิธีอย่างมีลำดับ
                      คือ
                      กลุ่มของขั้นตอนวิธีหรือกฎเกณฑ์ที่จะนำพาไปสู่การแก้ปัญหา
                      คือ ขั้นตอนวิธีที่ประกอบด้วยชุดคำสั่งเป็นขั้นเป็นตอนที่
                      ชัดเจนและรับประกันว่าเมื่อปฏิบัติอย่างถูกต้องตามขั้นตอนจนครบ
                      จะได้ผลลัพธ์ที่ถูกต้องตามที่ต้องการ คือ
                      รูปแบบของการกำหนดการกระทำอย่างเป็นขั้นตอน
                      ซึ่งผ่านการวิเคราะห์ และแยกแยะ
                      เพื่อการแก้ปัญหาตามลำดับขั้น
                      อาจเลือกใช้ภาษาไทยหรือภาษาอังกฤษ เพื่อนำเสนอให้
                      เข้าใจเป็นขั้นตอน{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="flex flex-col gap-10 mt-[90px] ml-[150px]">
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
                          ทุกคนที่ต้องการเรียนรู้ ภาษาเขียนโปรแกรมแทบจะทุกภาษา
                          ตั้งแต่ การเขียนโปรแกรมบนเว็บ
                          ไปจนถึงภาษาโปรแกรมมิ่งสำหรับฐานข้อมูลหรือโปรแกรมบนเดสก์ท็อปซึ่งทุกหลักสูตรฟรีหมด{" "}
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
                        <div className="text-[16px] font-regular">
                          เป็นโปรเจ็กต์สำหรับฝึกโปรแกรมเมอร์หน้าใหม่ ที่
                          ไร้ประสบการณ์โดยสิ้นเชิง เพื่อให้สามารถพัฒนาเว็บไซต์
                          หรือแม้แต่แอพพลิเคชั่นเป็นของตนเองได้ด้วย
                          ผู้ใช้หลากหลายล้านที่เข้ามาเยี่ยมชมเว็บนี้ในแต่ละวัน{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex justify-between ml-[30px] mt-[15px] w-[520px]">
                    <img
                      className="w-[152px] h-[152px] rounded-md"
                      src="../assets/images/course/exercise3.jpg"
                      alt="../assets/images/course/exercise3.jpg"
                    />
                    <div className="ml-[35px]">
                      <div className="text-[16px] font-bold">
                        <Link
                          href="https://www.codecademy.com/"
                          target="_blank"
                          className="flex transition text-[#0f172a] hover:text-indigo-500 hover:underline duration-100"
                        >
                          <ur> CodeAcademy.com </ur>{" "}
                        </Link>{" "}
                      </div>
                      <div className="w-[350px]">
                        <div className="text[8px] font-regular">
                          เป็นเว็บไซต์
                          ที่มีชื่อเสียงมากในการสอนการเขียนโค้ดให้โปรแกรมเมอร์แบบอินเตอร์แอคทีฟ
                          หลักสูตรที่ มีนั้นได้แก่ PHP, Python, jQuery, Web
                          Fundamentals, JavaScript, Ruby, API เป็นต้น{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex gap-2 justify-center mt-[60px] ml-[40px]">
                  <Link href="#">
                    <button className="w-[10px] h-[10px] text-black text-[16px] font-semibold bg-[#D9D9D9] rounded-full">
                      {" "}
                    </button>{" "}
                  </Link>{" "}
                  <Link href="#">
                    <button className="w-[10px] h-[10px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                      {" "}
                    </button>{" "}
                  </Link>{" "}
                  <Link href="#">
                    <button className="w-[10px] h-[10px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                      {" "}
                    </button>{" "}
                  </Link>{" "}
                  <Link href="#">
                    <button className="w-[10px] h-[10px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                      {" "}
                    </button>{" "}
                  </Link>{" "}
                  <Link href="#">
                    <button className="w-[10px] h-[10px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
                      {" "}
                    </button>{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex items-center justify-center mt-[40px]">
        <div className="bg-[#fafafa] rounded-md shadow-inner w-[1000px] h-[321px]  mx-auto">
          <div className="text-[18px] text-[#facc15] font-bold text-center mt-[30px]">
            แนะนำเครื่องมือที่ใช้เขียนโปรแกรม (โปรแกรม, เว็บไซต์){" "}
          </div>{" "}
          <div className="ml-[12px] grid grid-cols-4 gap-4">
            <div className="inline-block pt-[48px]">
              <img
                className="w-[224px] h-[128px] rounded rounded-xl"
                src="../assets/images/course/logo1.jpg"
                alt="vscode"
              />
              <div className="pl-[36px] mt-[10px]">
                <Link href="https://code.visualstudio.com/" target="_blank">
                  <div className="flex transition text-[#facc15] hover:text-indigo-500 hover:underline duration-100 underline after:content-['_↗']">
                    Visual Studio Code{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inline-block pt-[50px]">
              <img
                className="w-[224px] h-[128px] rounded rounded-xl"
                src="../assets/images/course/logo2.jpg"
                alt="vscode"
              />
              <div className="pl-[59px] mt-[10px]">
                <Link
                  href="https://visualstudio.microsoft.com/"
                  target="_blank"
                >
                  <div className="flex transition text-[#facc15] hover:text-indigo-500 hover:underline duration-100 underline after:content-['_↗']">
                    Visual Studio{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inline-block pt-[50px]">
              <img
                className="w-[224px] h-[128px] rounded rounded-xl"
                src="../assets/images/course/logo3.jpg"
                alt="vscode"
              />
              <div className="pl-[77px] mt-[10px]">
                <Link
                  href="https://codelabs.developers.google.com/"
                  target="_blank"
                >
                  <div className="flex transition text-[#facc15] hover:text-indigo-500 hover:underline duration-100 underline after:content-['_↗']">
                    Codelabs{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="inline-block pt-[50px]">
              <img
                className="w-[224px] h-[128px] rounded rounded-xl"
                src="../assets/images/course/logo4.jpg"
                alt="vscode"
              />
              <div className="pl-[72px] mt-[10px]">
                <Link href="https://www.codeply.com/" target="_blank">
                  <div className="text-center flex transition text-[#facc15] hover:text-indigo-500 hover:underline duration-100 underline after:content-['_↗']">
                    Codeply{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Exercise;