import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const PersonalRecord = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-4.png";
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "สร้างแฟ้มสะสมผลงาน",
      link: "/create-portfolio",
    },
  ];
  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={5} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">ประวัติส่วนตัว</div>
        <div className="flex gap-x-8">
          <div className="shrink-0 relative w-[170px] h-[246px]">
            <img
              src={coverImage}
              alt={coverImage}
              className="rounded-[6px] cursor-pointer"
            />
            <div className="absolute right-0 bottom-0 flex justify-center items-center w-[38px] h-[38px] bg-black rounded-[6px]">
              <img
                src="/assets/icons/zoom.svg"
                alt="icon-zoom"
                width="18"
                height="18"
              />
            </div>
          </div>
          <div className="grow">
            <div className="flex items-center">
              <label
                className="w-[218px] text-lg font-bold text-end mr-8 "
                htmlFor="page_number"
              >
                หมายเลขหน้า
              </label>
              <select
                name="page_number"
                className="shadow border rounded py-2.5 px-3.5 w-[531px]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
            <div className="flex mb-14">
              <div className="pl-[250px]">
                <div className="flex justify-center items-center w-[222px] h-[222px] rounded-[11px] bg-[#FFEC85]">
                  <img
                    src="/assets/icons/camera-icon.svg"
                    alt="/assets/icons/camera-icon.svg"
                    width={56}
                    height={56}
                  />
                </div>
              </div>
              <div className="ml-[30px]">
                <div className="font-bold mb-[13px]">คำแนะนำ</div>
                <div className="mb-[9px]">• สำหรับรูปโปรไฟล์</div>
                <div className="mb-[28px]">
                  • ขนาดรูปไม่เกิน 10 MB png หรือ jpg
                </div>
                <button className="py-3 px-[42px] border-[1px] rounded-full text-lg font-bold">
                  อัพโหลดรูป
                </button>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อ-นานสกุล ภาษาไทย
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น สุธิดา มานะยิ่ง"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อเล่น
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ออม"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                วัน/เดือน/ปีเกิด
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="วว/ดด/ปปปป"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เชื้อชาติ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ไทย"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                สัญชาติ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ไทย"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ศาสนา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น พุทธ"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                อีเมล
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="เช่น suthida.m@gmail.com "
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="เช่น 089-785-5794"
              />
            </div>
            <div className="flex mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ที่อยู่ปัจจุบัน
              </label>
              <textarea
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                rows={2}
                placeholder="เช่น บ้านเลขที่ 46 หมู่ 9 หมู่บ้านนกน้อย ซอยรัชดาภิเษก 66 แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                งานอดิเรก
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ออกกำลังกาย ถ่ายรูป ฟังเพลง อ่านหนังสือ"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ความถนัด/ทักษะที่มี
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น เล่นกีตาร์, ร้องเพลง, เต้น cover dance"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                วิชาที่ชอบ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น วิทยาศาสตร์"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อบิดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ประสงค์ มานะยิ่ง "
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                อาชีพบิดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ครู "
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="เช่น 082-309-3018"
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อมารดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น สุชารัตน์ มานะยิ่ง"
              />
            </div>
            <div className="flex items-center mb-3">
              <label
                className="w-[218px] text-lg font-bold mr-8 text-end"
              >
                อาชีพมารดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ครู "
              />
            </div>
            <div className="flex items-center mb-3">
              <label
                for="first_name_thai"
                className="w-[218px] text-lg font-bold mr-8 text-end"
              >
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name_thai"
                type="tel"
                placeholder="เช่น 080-401-2530"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-between items-center">
        <Link href="/create-portfolio/listofcontent">
          <button className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px]">
            <img
              src="/assets/icons/arrow-left.svg"
              alt="arrow-left"
              width="28"
              height="28"
            />
            ก่อนหน้า
          </button>
        </Link>
        <Link href="/create-portfolio/educational-record">
          <button className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px]">
            ถัดไป
            <img
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width="28"
              height="28"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalRecord;
