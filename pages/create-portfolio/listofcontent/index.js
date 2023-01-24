import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const ListOfContent = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-3.png";
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

  const [topics, setTopics] = useState([
    {
      name: "",
      page: "1",
    },
  ]);

  const addTopics = () => {
    setTopics([
      ...topics,
      {
        name: "",
        page: "1",
      },
    ]);
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={4} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">คำนำ</div>
        <div className="flex gap-x-36">
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
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {topics.map((item, index) => {
              return (
                <>
                  <div className="flex items-center h-[40px]" key={index}>
                    <label for="topic" className="text-lg mr-8 font-bold">
                      หัวข้อ
                    </label>
                    <input
                      className="shadow border rounded py-2.5 px-3.5 w-[304px] "
                      id="topic"
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        item.name = e.target.value;
                      }}
                      placeholder="เช่น ประวัติส่วนตัว"
                    />
                  </div>
                  <div className="flex items-center h-[40px]">
                    <label for="page" className="text-lg mr-8 font-bold">
                      หน้า
                    </label>
                    <select
                      id="page"
                      name="page"
                      className="shadow border rounded py-2.5 px-3.5 w-[304px]"
                      value={item.page}
                      onChange={(e) => {
                        item.page = e.target.value;
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </>
              );
            })}
            <button className="w-[141px] h-[47px] ml-[74px] mt-16 bg-black py-[13px] px-[20px] rounded-[20px] text-white" onClick={addTopics}>
              เพิ่มหัวข้อใหม่
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-between items-center">
        <Link href="/create-portfolio/introduction">
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
        <Link href="/create-portfolio/personal-record">
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

export default ListOfContent;
