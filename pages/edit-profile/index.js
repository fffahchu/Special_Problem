import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";

const Editprofile = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "เแก้ไขโปรไฟล์",
      link: "/edit-profile",
    },
  ];
  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        โปรไฟล์ของฉัน
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col mr-[45px]">
          <div className="flex justify-center items-center w-[247px] h-[247px] bg-yellow rounded-full ml-[529px] mt-[30px]">
            <img
              className="ml-[92px]"
              src="/assets/icons/camera-icon.svg"
              alt="/assets/icons/camera-icon.svg"
            />
            <button className="h-[77px] w-[77px] mt-[190px] ml-[10px]">
              <img
                className="rounded-full"
                src="../assets/images/edit-profile/plus-edit.jpg"
                alt="../assets/images/edit-profile/plus-edit.jpg"
              />
            </button>
          </div>
          <div className="mt-[30px] ml-[70px] font-bold text-center text-[18px]">
            รูปโปรไฟล์
          </div>
          <div className="ml-[55px] mt-[65px] w-[1189px] border border-[#a1a1aa]"></div>
          <div className="mt-[30px] ml-[55px] font-bold text-[25px]">
            ข้อมูลส่วนตัว
          </div>

          <div className="ml-[118px] mt-[40px] grid grid-cols-2">
            <div className="pl-[168px] mb-2">
              <label for="name" className="font-bold ml-[85px]">
                ชื่อ
              </label>
              <input
                className="flex flex-wrap py-2.5 px-3.5 ml-[85px] mt-[10px] w-[288px] h-[44px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
                type="text"
                id="name"
              ></input>
            </div>

            <div className="mb-2">
              <label for="last_name" className="font-bold">
                นามสกุล
              </label>
              <input
                className="flex flex-wrap py-2.5 px-3.5 mt-[10px] w-[288px] h-[44px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
                type="text"
                id="last_name"
              ></input>
            </div>

            <div className="pl-[168px] mt-[25px]">
              <label for="username" className="font-bold ml-[85px]">
                ชื่อผู้ใช้งาน
              </label>
              <input
                className="flex flex-wrap py-2.5 px-3.5 ml-[85px] mt-[10px] w-[288px] h-[44px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
                type="text"
                id="username"
              ></input>
            </div>

            <div className="mt-[25px]">
              <label for="email" className="font-bold">
                อีเมล
              </label>
              <input
                className="flex flex-wrap py-2.5 px-3.5 mt-[10px] w-[288px] h-[44px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
                type="email"
                id="email"
              ></input>
            </div>
          </div>

          <div className="ml-[370px] mt-[25px]">
            <label for="number" className="font-bold mt-[30px]">
              เบอร์โทรศัพท์
            </label>
            <input
              className="flex flex-wrap py-2.5 px-3.5 w-[597px] h-[44px] mt-[10px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
              id="number"
              type="text"
            ></input>
          </div>

          <div className="pl-[370px] mt-[25px]">
            <label for="school" className="font-bold mt-[30px]">
              สถานศึกษา
            </label>
            <input
              className="flex flex-wrap py-2.5 px-3.5 w-[597px] h-[44px] mt-[10px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
              id="school"
              type="text"
              placeholder="พิมพ์ชื่อสถานศึกษา"
            ></input>
          </div>

          <div className="ml-[55px] mt-[65px] w-[1189px] border border-[#a1a1aa]"></div>
          <div className="mt-[30px] ml-[55px] font-bold text-[25px]">
            เปลี่ยนรหัสผ่าน
          </div>
          <div className="ml-[370px] mt-[25px]">
            <label for="password" className="font-bold mt-[30px]">
              รหัสผ่าน <a className="text-[#FF0000]">*</a>
            </label>
            <input
              className="flex flex-wrap py-2.5 px-3.5 w-[597px] h-[44px] mt-[10px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
              id="password"
              type="text"
            ></input>
          </div>

          <div className="ml-[370px] mt-[25px]">
            <label for="re_password" className="font-bold mt-[30px]">
              ป้อนรหัสผ่านอีกครั้ง <a className="text-[#FF0000]">*</a>
            </label>
            <input
              className="flex flex-wrap py-2.5 px-3.5 w-[597px] h-[44px] mt-[10px] border-[1px] border-[#d4d4d8] rounded-lg shadow-lg shadow-[#d4d4d8]"
              id="re_password"
              type="text"
            ></input>
          </div>

          <div className="ml-[710px] text-[15px] font-md mt-[15px]">
            คำแนะนำในการตั้งรหัสผ่าน
            <ur>
              <li>รหัสผ่านต้องมีตัวอักษรตั้งแต่ 6-20 ตัว</li>
              <li>ใช้ตัวหนังสือหรือตัวเลขเท่านั้น</li>
            </ur>
          </div>
          <div className="ml-[55px] mt-[65px] w-[1189px] border border-[#a1a1aa]"></div>
          <div className="mt-[30px] ml-[55px] font-bold text-[25px]">PDPA</div>
          <div className="mt-[15px] ml-[370px] text-[16px] font-md">
            คุณได้ยอมรับข้อตกลงและเงื่อนไขและนโยบายความเป็นส่วนตัวแล้ว
          </div>
          <div className="mt-[12px] ml-[370px] text-[16px] font-md">
            หากมีข้อสงสัยหรือต้องการยกเลิกการเป็นสมาชิกกรุณาติดต่อ
            เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
          </div>
          <div className="mt-[60px] ml-[595px]">
            <button
              type="submit"
              className="w-[152px] h-[44px] rounded-3xl shadow drop-shadow-lg font-bold transition ease-in-out bg-[#FFCA61] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFEC85] duration-300"
            >
              บันทึกข้อมูล
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editprofile;
