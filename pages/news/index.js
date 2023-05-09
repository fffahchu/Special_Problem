import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const AllNews = () => {
    const route = [
      {
        title: "หน้าหลัก",
        link: "/member",
      },
      {
        title: "ข่าวประชาสัมพันธ์",
        link: "/news",
      },
    ];

    return (
      <div className="px-[104px] py-[29px]">
        <MoveToTop />
        <Breadcrumb route={route} />
        <div className="text-center text-[28px] font-semibold my-12">
          ข่าวประชาสัมพันธ์
        </div>

        {/* กิจกรรม/ค่าย */}

        <div className="flex justify-between items-center">
          <div className="text-left text-[25px] font-semibold">
            กิจกรรม/ค่าย
          </div>
          <a
            href="/news/camp"
            className="text-right text-[16px] font-semibold underline"
          >
            ดูทั้งหมด
          </a>
        </div>
        <hr className="mt-[18px] mb-[16px]" />

        {/* row 1 */}

        <div className="grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14">
          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/CEC2Banner.jpg.webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              Computer Engineering Camp for TCAS Portfolio SS2
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  3 เม.ย. 66
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/computer-engineering-camp-for-tcas-portfolio-ss2/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/Sphere_Graphic3_Camphub.jpg.webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              How To Be A Graphic Designer รุ่น 3
            </div>
            <div className="flex justify-between items-center mt-[80px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  02 พ.ค 66
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/how-to-be-a-graphic-designer-3/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%A7%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%84%E0%B8%AD%E0%B8%A1-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%8C-ss.3-1200-%C3%97-630-px.png"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              ค่าย ONSITE วิศวคอมพิวเตอร์รุ่นเยาว์ COMPUTER ENGINEER รุ่น 3
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  ปิดรับสมัครแล้ว
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/onces-onsite-computer-engineer-mar2023/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          {/* row 1 */}

          {/* row 2 */}

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99-2.png"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              HERO PROGRAMMING
            </div>
            <div className="flex justify-between items-center mt-[80px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  ปิดรับสมัครแล้ว
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/hero-programming/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2022/11/image_6483441-18.jpg.webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              SUPER COM SCI
            </div>
            <div className="flex justify-between items-center mt-[80px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  ปิดรับสมัครแล้ว
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/super-com-sci-nov2022/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="https://www.camphub.in.th/wp-content/uploads/2023/02/BannerAI-2.jpg.webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              Basic AI Gen9- สร้างโมเดลปัญญาประดิษฐ์พื้นฐานภายใน 6 ชั่วโมง
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  ปิดรับสมัครแล้ว
                </div>
              </div>
              <a
                href="https://www.camphub.in.th/basic-ai-gen-9/"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* row 2 */}

        {/* ข่าวสาร */}

        <div className="flex justify-between items-center">
          <div className="text-left text-[25px] font-semibold">ข่าวสาร</div>
          <a
            href="/news/info"
            className="text-right text-[16px] font-semibold underline"
          >
            ดูทั้งหมด
          </a>
        </div>
        <hr className="mt-[18px] mb-[16px]" />
        <div className="grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14">
          {/* row 1 */}

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="https://image.bangkokbiznews.com/uploads/images/md/2023/02/npstHe6FnWoUpiDP40y0.webp?x-image-process=style/LG-webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              TCAS66 รีบยืนยันสิทธิ์ก่อนปิดระบบวันนี้ กรณีไม่ใช้สิทธิ์ทำอย่างไร
              มีคำตอบ
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  08 ก.พ. 66
                </div>
              </div>
              <a
                href="https://www.bangkokbiznews.com/news/1052017"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="https://image.bangkokbiznews.com/uploads/images/md/2023/02/O69PpFBHx6vk4kr8He14.webp?x-image-process=style/LG-webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              “TCAS66” ประกาศผลรอบที่ 1 Portfolio เปิดขั้นตอน ยืนยันสิทธิ 7-8
              ก.พ.นี้
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  07 ก.พ. 66
                </div>
              </div>
              <a
                href="https://www.bangkokbiznews.com/health/1051882"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="https://image.bangkokbiznews.com/uploads/images/md/2022/11/t0hFirmzIp26PSGgOGEe.webp?x-image-process=style/LG-webp"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              โค้งสุดท้าย dex66 เตรียมพร้อม TCAS อย่าง ไร? ไม่ให้พลาด
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  27 พ.ย. 65
                </div>
              </div>
              <a
                href="https://www.bangkokbiznews.com/health/1040125"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          {/* row 1 */}

          {/* row 2 */}

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="../assets/images/news/1.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              TCAS 66 รอบ 1 : รอบ Portfolio ครั้งที่ 2 มรภ.บ้านสมเด็จเจ้าพระยา
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal">
                  13 ธ.ค. 65
                </div>
              </div>
              <a href="https://www.dek-d.com/tcas/61647/" target="_blank">
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="https://www.ryt9.com/img/files/20221111/iq98485b868686ae360f95d1663403889a.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              TCAS 66 รอบที่ 1 : มหาวิทยาลัยพะเยา เปิดรับสมัคร 7 โครงการ
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  27 พ.ย. 65
                </div>
              </div>
              <a href="https://www.ryt9.com/s/prg/3372876" target="_blank">
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="../assets/images/news/2.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              เช็กเลย! ปฏิทิน TCAS66 มหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา ทั้ง 7
              รอบ
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  13 ธ.ค. 65
                </div>
              </div>
              <a href="https://www.dek-d.com/tcas/61271/" target="_blank">
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          {/* row 2 */}
        </div>

        {/* ข่าวสาร */}

        {/* บทความ */}

        <div className="flex justify-between items-center">
          <div className="text-left text-[25px] font-semibold">บทความ</div>
          <a
            href="/news/article"
            className="text-right text-[16px] font-semibold underline"
          >
            ดูทั้งหมด
          </a>
        </div>
        <hr className="mt-[18px] mb-[16px]" />
        <div className="grid grid-cols-3 mb-[104px] mx-auto max-w-[1232px] gap-y-14">
          {/* row 1 */}

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="https://www.admissionpremium.com/class/timthumb.php?w=600&h=315&zc=1&a=t&src=https://www.admissionpremium.com/uploads/contents/20210906160507h9fyGCR.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              คณะวิทย์ฯ ลาดกระบัง ทำยังไงถึงสอบติด?
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  06 ก.ย. 64
                </div>
              </div>
              <a
                href="https://www.admissionpremium.com/unews/news/6412"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210722181546usRjn22.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  22 ก.ค. 64
                </div>
              </div>
              <a
                href="อยากติด TCAS รอบ Portfolio ต้องทำอะไรบ้าง?"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210715182218tPQkhsR.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              10 เรื่องที่ควรรู้ในการทำ Portfolio
            </div>
            <div className="flex justify-between items-center mt-[80px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  15 ก.ค. 64
                </div>
              </div>
              <a
                href="https://www.admissionpremium.com/content/6381"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          {/* row 1 */}

          {/* row 2 */}

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px]">
            <img
              src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210629183731uq6D1kS.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              8 สิ่งที่ต้องรู้เตรียมยื่น TCAS รอบ Portfolio
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  29 มิ.ย. 64
                </div>
              </div>
              <a
                href="https://www.admissionpremium.com/content/6357"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] m-auto">
            <img
              src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20210625181911c2B9ytV.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              อยากติด TCAS รอบ Portfolio ห้ามพลาดค่าย สอวน.
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  25 มิ.ย. 64
                </div>
              </div>
              <a
                href="https://www.admissionpremium.com/content/6352"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[341px] h-[417px] bg-[#F2F3EE] rounded-[10px] ml-auto">
            <img
              src="http://www.admissionpremium.com/class/timthumb.php?a=t&zc=1&w=600&h=314&src=/uploads/contents/20200206103439GjBTDby.jpg"
              className="w-[341px] h-[213px] rounded-tl-[10px] rounded-tr-[10px]"
            />
            <div className="mx-[22px] mt-[24px] text-[17px] font-semibold">
              เปรียบเทียบกองทุนกู้เรียน กยศ. VS กรอ.
            </div>
            <div className="flex justify-between items-center mt-[55px]">
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#525252"
                  class="ml-[22px] w-[18px] h-[18px]"
                >
                  <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  <path
                    fill-rule="evenodd"
                    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="pl-[4px] text-[15px] font-normal text-[#525252]">
                  06 ก.พ. 63
                </div>
              </div>
              <a
                href="https://www.admissionpremium.com/content/5357"
                target="_blank"
              >
                <button className="font-semibold mr-[22px] py-2 px-6 rounded-full border-[1px]">
                  อ่านเพิ่มเติม
                </button>
              </a>
            </div>
          </div>

          {/* row 2 */}
        </div>
      </div>
    );
};

export default AllNews;