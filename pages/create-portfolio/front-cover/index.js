import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";

const CreateFrontCover = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4.png";

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
      <StateCreate state={2} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold">หน้าปก</div>
        <div className="flex justify-between">
          <img
            src={coverImage}
            alt={coverImage}
            className="rounded-[6px] cursor-pointer w-[170px] h-[246px]"
          />
          <div className="flex">
            <div className="mr-[45px]">
              <div className="flex justify-center items-center ml-[200px] mb-[20px] w-[500px] h-[500px] bg-yellow rounded-[6px]">
                <img
                  src="/assets/icons/camera-icon.svg"
                  alt="/assets/icons/camera-icon.svg"
                />
              </div>
              <form className="">
                <div className="flex mb-2">
                  <label
                    for="first_name_thai"
                    className="w-[200px] text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    ชื่อ-นามสกุล ภาษาไทย
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="first_name_thai"
                    type="text"
                    placeholder="เช่น สุธิดา มานะยิ่ง"
                  />
                </div>
                <div className="flex mb-2">
                  <label
                    for="first_name_eng"
                    className="w-[200px] text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    ชื่อ-นามสกุล ภาษาอังกฤษ
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="first_name_eng"
                    type="text"
                    placeholder="เช่น suthida"
                  />
                </div>
                <div className="flex">
                  <label
                    for="school_name"
                    className="w-[200px] text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    โรงเรียน
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="school_name"
                    type="text"
                    placeholder="เช่น สวนกุหลาบวิทยาลัย"
                  />
                </div>
              </form>
            </div>
            <div>
              <div className="text-lg font-bold">คำแนะนำ</div>
              <ul className="list-disc ml-[30px] mb-[20px]">
                <li>สำหรับรูปหน้าปก</li>
                <li>ขนาดรูปไม่เกิน 10 MB png หรือ jpg</li>
              </ul>
              <label
                for="dropzone-file"
                className="px-[30px] py-[9px] w-[165px] border-[1px] rounded-[20px] font-bold cursor-pointer"
              >
                อัพโหลดรูป
              </label>
              <input id="dropzone-file" type="file" className="hidden" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-between items-center">
        <button className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px]">
          <img
            src="/assets/icons/arrow-left.svg"
            alt="arrow-left"
            width="28"
            height="28"
          />
          ก่อนหน้า
        </button>
        <button
          className="flex items-center px-5 py-2.5 border-[1px] rounded-[20px] opacity-[36%]"
          disabled
        >
          ถัดไป
          <img
            src="/assets/icons/arrow-right.svg"
            alt="arrow-right"
            width="28"
            height="28"
          />
        </button>
      </div>
    </div>
  );
};

export default CreateFrontCover;
