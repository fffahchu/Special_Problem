import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";
{
  /*import Modal from "@Components/Modal";*/
}

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

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        ผลงานของฉัน
      </div>
      <hr className="mt-[18px] mb-4" />

      <div className="flex">
        <div className="flex flex-col">
          <div className="flex justify-center items-center self-end mb-[20px] w-[321px] h-[427px] bg-white border border-[#D9D9D9] rounded-[10px]">
            <img
              src="/assets/icons/camera-icon.svg"
              alt="/assets/icons/camera-icon.svg"
            />
          </div>
          <div className="pt-[315px] pr-[56px]">
            <button
              for="dropzone-file"
              className="bg-[#FFCA61] w-[321px] h-[111px] rounded-b-lg text-[18px] font-bold cursor-pointer"
            >
              อัพโหลดรูปภาพ
            </button>
            <input id="dropzone-file" type="file" className="hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
