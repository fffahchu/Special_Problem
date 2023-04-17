import React, { Component, Fragment, useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";
import Modal from "@components/Modal";

const Upload = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "ผลงานของฉัน",
      link: "/uplaod",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="px-[104px] py-[29px]">
        <MoveToTop />
        <Breadcrumb route={route} />
        <div className="text-center text-[28px] font-semibold my-12">
          ผลงานของฉัน
        </div>
        <hr className="mt-[18px] mb-4 border-[#d4d4d4]" />

        <div className="flex">
          <div className="flex justify-center">
            <button
              className="flex justify-center items-center bg-[#FFCA61] w-[212px] h-[57px] rounded-2xl shadow-md font-semibold"
              onClick={() => setShowModal(true)}
            >
              <img src="../assets/icons/plus-circle.svg" alt="plus-circle" />
              {""}เพิ่มอัลบัม
            </button>
          </div>
        </div>
        <hr className="mt-[18px] mb-4 border-[#d4d4d4]" />

        <div className="flex justify-center">
          <div className="flex flex-col mt-[40px]">
            <div className="flex justify-center items-center self-end mb-[20px] w-[321px] h-[427px] border rounded-[6px]">
              <img
                src="/assets/icons/camera-icon.svg"
                alt="/assets/icons/camera-icon.svg"
              />
            </div>
            <div className="flex justify-center">
              <div>
                <button
                  type="submit"
                  className="w-[101px] h-[42px] rounded-2xl shadow-md transition ease-in-out  bg-[#d4d4d4] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFCA61] duration-300"
                >
                  บันทึก
                </button>
              </div>
            </div>
          </div>

          <div className="ml-[70px]">
            <div className="flex flex-col mb-6 mt-[80px]">
              <label
                htmlFor="file_name"
                className="w-[278px] text-lg font-bold pt-[60px] text-start"
              >
                ชื่อไฟล์
              </label>
              <input
                className="mt-[8px] shadow appearance-none border rounded-lg w-[278px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="file_name"
                type="text"
                placeholder="เช่น ผลการเรียน 2/2565"
              />
            </div>
            <label
              htmlFor="dropzone-file"
              className="px-[20px] py-[6px] w-[165px] border-[1px] rounded-[20px] font-bold cursor-pointer"
            >
              อัพโหลดรูป
            </label>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[80px]">
          <div className="text-[20px] font-semibold">ผลงานของฉันทั้งหมด</div>
        </div>
        <hr className="mt-[12px] mb-4 border-[#d4d4d4]" />
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}></Modal>
    </Fragment>
  );
};
export default Upload;
