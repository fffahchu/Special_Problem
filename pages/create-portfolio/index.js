import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import StateCreate from "@components/StateCreate";
import TemplatePortfolioCard from "@components/TemplatePortfolioCard";
import React, { useState } from "react";
import Link from "next/link";

const CreatePortfolio = () => {
  const [selectTemp, setSelectTemp] = useState(0);

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

  const portTemplate = [
    {
      image: "assets/images/portfolio/portfolio-1.png",
      title: "เทคโนโลยีสารสนเทศ",
      desc: "เทมเพลตนี้เหมาะสำหรับผู้สนใจศึกษาต่อคณะเทคโนโลยีสารสนเทศ",
    },
    {
      image: "assets/images/portfolio/portfolio-2.png",
      title: "วิทยาศาสตร์",
      desc: "เทมเพลตนี้เหมาะสำหรับผู้สนใจศึกษาต่อคณะวิทยาศาสตร์",
    },
    {
      image: "assets/images/portfolio/portfolio-3.png",
      title: "วิศวกรรมศาสตร์",
      desc: "เทมเพลตนี้เหมาะสำหรับผู้สนใจศึกษาต่อคณะวิศวกรรมศาสตร์",
    },
    {
      image: "assets/images/portfolio/portfolio-4.png",
      title: "วิศวกรรมศาสตร์",
      desc: "เทมเพลตนี้เหมาะสำหรับผู้สนใจศึกษาต่อคณะวิศวกรรมศาสตร์",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={1} />
      <div className="mt-[72px] mb-12">
        <div className="text-xl font-bold">เทมเพลต</div>
        <div className="grid grid-cols-3 gap-x-[67px] gap-y-[36px] mt-9">
          {portTemplate.map((item, index) => {
            return (
              <div className="relative">
                <TemplatePortfolioCard
                  item={item}
                  onSelect={() => setSelectTemp(index)}
                />
                {index == selectTemp && (
                  <img
                    src="assets/icons/check-green.svg"
                    alt="select"
                    width="32"
                    height="32"
                    className="absolute top-4 right-4"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/front-cover">
          <button className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]">
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePortfolio;
