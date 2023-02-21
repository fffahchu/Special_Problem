import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";


const Registerform = () => {
  const route = [
    {
      title: "หน้าแรก",
      link: "/member",
    },
    {
      title: "ลงทะเบียน",
      link: "/register",
    },
  ];
  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        ลงทะเบียนเข้าใช้ ComPort
      </div>

      <div className="w-[1000px]">
        <div className="ml-[330px] grid grid-cols-2 gap-2">
          <button
            type="submit"
            className="flex justify-between items-center pr-[45px] w-[306px] h-[48px] rounded-3xl shadow drop-shadow-lg text-[#FFFFFF] font-bold bg-[#3B5998]"
          >
            <div className="pl-[29px] items-center"></div>
            <img
              className="w-[28px] h-[28px] rouned-full"
              src="../assets/images/fb-logo.png"
              alt="fb login"
            />
            เข้าสู่ระบบด้วย Facebook
          </button>

          <button
            type="submit"
            className="flex justify-between items-center pr-[45px] w-[306px] h-[48px] rounded-3xl shadow drop-shadow-lg text-[#FFFFFF] font-bold bg-[#DD4B39]"
          >
            <div className="pl-[29px] items-center"></div>
            <img
              className="w-[28px] h-[28px] rouned-full"
              src="../assets/images/gg-logo.png"
              alt="fb login"
            />
            เข้าสู่ระบบด้วย Google+
          </button>
        </div>

        <div className="flex items-center gap-4 mt-[40px] ml-[500px]">
          <div className="h-[1px] w-[120px] border border-[#dcfce7]"></div>
          <a className="text-[15px] font-bold inline-block">หรือ</a>
          <div className="h-[1px] w-[120px] border border-[#dcfce7] mr-[26px]"></div>
        </div>

        <div className="flex mt-[30px]">
          <div className="shadow-inner shadow-[#bbf7d0] w-[560px] h-[933px] border-[1px] border-[#bbf7d0] rounded ml-[372px]">
            <div className="mt-[30px] ml-[10px] grid grid-cols-2">
              <div className=" font-bold ml-[85px]">
                ชื่อ <a className="text-[#FF0000]">*</a>
              </div>
              <div className=" font-bold">
                นามสกุล <a className="text-[#FF0000]">*</a>
              </div>
              <input
                className="ml-[85px] mt-[10px] w-[180px] h-[35px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                type="text"
              ></input>
              <input
                className="mt-[10px] w-[180px] h-[35px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                type="text"
              ></input>
            </div>
            <div className=" font-bold mt-[25px] ml-[95px]">
              ชื่อผู้ใช้งาน <a className="text-[#FF0000]">*</a>
            </div>
            <input
              className="ml-[95px] w-[370px] h-[35px] mt-[10px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
              type="text"
            ></input>
            <div className="text-[13px] font-light text-[#9ca3af] ml-[97px] mt-[5px]">
              คุณใช้ตัวอักษร ตัวเลข และจุดได้
            </div>
            <div className=" font-bold mt-[20px] ml-[95px]">
              อีเมล <a className="text-[#FF0000]">*</a>
            </div>
            <input
              className="ml-[95px] w-[370px] h-[35px] mt-[10px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
              type="text"
            ></input>
            <div className=" font-bold mt-[25px] ml-[95px]">
              รหัสผ่าน <a className="text-[#FF0000]">*</a>
            </div>
            <input
              className="ml-[95px] w-[370px] h-[35px] mt-[10px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
              type="text"
            ></input>
            <div className="text-[13px] font-light text-[#9ca3af] ml-[97px] mt-[5px]">
              ใช้อักขระ 8 ตัวขึ้นไปที่มีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน
            </div>
            <div className=" font-bold mt-[20px] ml-[95px]">
              ป้อนรหัสผ่านอีกครั้ง <a className="text-[#FF0000]">*</a>
            </div>
            <input
              className="ml-[95px] w-[370px] h-[35px] mt-[10px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
              type="text"
            ></input>
            <div className=" font-bold mt-[20px] ml-[95px]">
              เบอร์โทรศัพท์ <a className="text-[#FF0000]">*</a>
            </div>
            <input
              className="ml-[95px] w-[370px] h-[35px] mt-[10px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
              type="text"
            ></input>
            <div className="mt-[30px] ml-[95px] h-[1px] w-[371px] border border-[#dcfce7]"></div>
            <div className="mt-[12px] ml-[95px] font-bold">
              ข้อตกลงและเงื่อนไขในการใช้งาน ComPort
            </div>
            <div className="flex items-center mt-[25px] bg-[#C9F0D6] w-[371px] h-[104px] ml-[95px] rounded">
              <div className="form-group form-check ml-[25px]">
                <input
                  type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-600 rounded-sm bg-[#f4f4f5] checked:bg-[#4b5563] checked:border-[#e4e4e7] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label inline-block flex flex-wrap font-md text-[15px] "
                  for="exampleCheck2"
                >
                  ฉันได้อ่านและยอมรับ{" "}
                  <a className="underline">ข้อตกลงและเงื่อนไข</a> และ{" "}
                  <a className="underline">นโยบายความเป็นส่วนตัว</a>
                </label>
              </div>
            </div>
            <div className="mt-[40px] ml-[195px]">
              <button
                type="submit"
                className="w-[152px] h-[44px] rounded-3xl shadow drop-shadow-lg font-bold transition ease-in-out bg-[#FFCA61] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFEC85] duration-300"
              >
                ลงทะเบียน
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] text-center font-bold">
        <a>มีบัญชีผู้ใช้ ComPort แล้ว?</a>
        <a
          href="#!"
          className="text-gray-800 font-bold underline underline-offset-2 pl-[10px]"
        >
          เข้าสู่ระบบ
        </a>
      </div>
    </div>
  );
};
export default Registerform;