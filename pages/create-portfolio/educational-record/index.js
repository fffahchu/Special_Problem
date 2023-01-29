import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";

const PersonalRecord = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-5.png";
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
  const [schools, setSchools] = useState([
    {
      name: "",
      level: "",
      year: "",
      major: "",
      gpa: "",
    },
  ]);

  const addSchool = () => {
    setSchools([
      ...schools,
      {
        name: "",
        level: "",
        year: "",
        major: "",
        gpa: "",
      },
    ]);
  };

  const removeSchool = (index) => {
    let arrSchools = [...schools]
    arrSchools.splice(index, 1)
    setSchools([...arrSchools])
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={6} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">ประวัติการศึกษา</div>
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
                defaultValue="2"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {schools.map((item, index) => {
              return (
                <div key={`education-${index}`}>
                  <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
                  <div className="flex mb-6">
                    <div className="pl-[250px]">
                      <div className="flex justify-center items-center w-[144px] h-[144px] rounded-[11px] bg-[#FFEC85]">
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
                      ชื่อโรงเรียน
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น สวนกุหลาบวิทยาลัย"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ระดับการศึกษาที่เรียนจบ
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น ระดับมัธยมศึกษา ปีที่ 4-6"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ปีที่จบการศึกษา
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น ปีการศึกษา 2561-2563"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      สายการเรียน/สาขาวิชา
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น วิทย์-คณิต"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      เกรดเฉลี่ยสะสม (เทอมล่าสุด)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น 3.25"
                    />
                  </div>
                  {index + 1 < schools.length && (
                    <div className="flex items-center">
                      <div className="w-[218px] mr-8" />
                      <button
                        className="rounded-full bg-red text-white text-lg font-bold px-[20px] py-[13px]"
                        onClick={() => removeSchool(index)}
                      >
                        ลบข้อมูล
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center mt-[52px]">
              <div className="w-[218px] mr-8" />
              <button
                className="rounded-full bg-black text-white text-lg font-bold px-[20px] py-[13px]"
                onClick={addSchool}
              >
                เพิ่มโรงเรียนใหม่
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/activities">
          <button className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]">
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalRecord;
