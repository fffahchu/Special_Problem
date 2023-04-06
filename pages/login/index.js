import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";


const Loginform = () => {

    const route = [{
            title: "หน้าแรก",
            link: "/member",
        },
        {
            title: "เข้าสู่ระบบ",
            link: "/login",
        },
    ];
    return (
      <div className="px-[104px] py-[29px]">
        <MoveToTop />
        <Breadcrumb route={route} />
        <div className="text-center text-[28px] font-semibold my-12">
          เข้าสู่ระบบ
        </div>
        <div className="flex-center shadow-inner shadow-[#bbf7d0] w-[354px] h-[573px] border-[1px] border-[#bbf7d0] rounded mx-auto">
          <div className="flex">
            <div className="flex flex-col">
              <div className="flex flex-wrap mb-5">
                <label
                  for="username_email"
                  className="font-bold pl-[25px] mt-[30px]"
                >
                  {" "}
                  ชื่อผู้ใช้งาน หรือ อีเมล
                </label>
                <input
                  className="py-2.5 px-3.5 w-[306px] h-[35px] ml-[23px] mt-[4px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="username_email"
                  type="text"
                ></input>
              </div>

              <div className="flex flex-wrap mb-5">
                <label
                  for="username_email"
                  className="font-bold pl-[25px] mt-[1px]"
                >
                  {" "}
                  รหัสผ่าน
                </label>
                <input
                  className="py-2.5 px-3.5 w-[306px] h-[35px] ml-[23px] mt-[4px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="username_email"
                  type="text"
                ></input>
              </div>

              <div className="flex justify-between items-center ml-[23px]">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-600 rounded-sm bg-[#f4f4f5] checked:bg-blue-600 checked:border-[#e4e4e7] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800 font-bold text-[15px]"
                    for="exampleCheck2"
                  >
                    จดจำรหัสผ่านไว้
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-gray-800 font-bold text-[15px] underline underline-offset-2 mr-[23px]"
                >
                  ลืมรหัสผ่าน
                </a>
              </div>
              <div className="mt-[30px] ml-[23px]">
                <button
                  type="submit"
                  className="w-[306px] h-[48px] rounded-3xl shadow drop-shadow-lg font-bold transition ease-in-out bg-[#FFCA61] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFEC85] duration-300"
                >
                  เข้าสู่ระบบ
                </button>
              </div>


              
              <div className="flex justify-between items-center mt-[23px] ml-[23px]">
                <div className="h-[1px] w-[120px] border border-[#dcfce7]"></div>
                <a className="text-[15px] font-bold inline-block">หรือ</a>
                <div className="h-[1px] w-[120px] border border-[#dcfce7] mr-[26px]"></div>
              </div>
              <div className="mt-[20px] ml-[23px]">
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
              </div>
              <div className="flex justify-between items-center mt-[23px] ml-[23px]">
                <div className="h-[1px] w-[120px] border border-[#dcfce7]"></div>
                <a className="text-[15px] font-bold inline-block">หรือ</a>
                <div className="h-[1px] w-[120px] border border-[#dcfce7] mr-[26px]"></div>
              </div>
              <div className="mt-[20px] ml-[23px]">
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
            </div>
          </div>
        </div>
        <div className="mt-[40px] text-center font-bold">
          <a>ยังไม่มีบัญชีผู้ใช้ ComPort?</a>
          <a
            href="#!"
            className="text-gray-800 font-bold underline underline-offset-2 pl-[10px]"
          >
            ลงทะเบียน
          </a>
        </div>
      </div>
    );
}
export default Loginform;