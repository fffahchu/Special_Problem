import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
//

const PortfolioExample = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "/member",
    },
    {
      title: "ตัวอย่างแฟ้มสะสมผลงาน",
      link: "/portfolio-ex",
    },
  ];

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        ตัวอย่างแฟ้มสะสมผลงาน{" "}
      </div>{" "}
      <hr className="mt-[39px] mb-[72px] border-[#BFBFBF]" />
      <div className="grid grid-cols-4 mt-[40px] mb-[104px] mx-auto max-w-[1232px]">
        {" "}
        {/* col 1 */}{" "}
        <div className="flex flex-col gap-y-5">
          <Link href="/portfolio-ex/example">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex1.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex2.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex7.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex13.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex17.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        {/* col 1 */} {/* col 2 */}{" "}
        <div className="flex flex-col gap-y-5">
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex3.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="https://cscamp.net/">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex8.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex9.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex14.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex18.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        {/* col 2 */} {/* col 3 */}{" "}
        <div className="flex flex-col gap-y-5">
          <Link href="#">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex4.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex5.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex10.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex15.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex19.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        {/* col 3 */} {/* col 4 */}{" "}
        <div className="flex flex-col gap-y-5">
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex6.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="https://cscamp.net/">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex11.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[20px]">
              <img
                src="/assets/images/example/ex12.png"
                className="w-[294px] h-[208px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex16.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
          <Link href="#">
            <div className="relative overflow-hidden rounded-[12px]">
              <img
                src="/assets/images/example/ex20.png"
                className="w-[294px] h-[416px] rounded-[20px] hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        {/* col 4 */}{" "}
      </div>{" "}
      <div className="flex gap-3.5 justify-center">
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#D9D9D9] rounded-full">
            1{" "}
          </button>{" "}
        </Link>{" "}
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            2{" "}
          </button>{" "}
        </Link>{" "}
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            3{" "}
          </button>{" "}
        </Link>{" "}
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            4{" "}
          </button>{" "}
        </Link>{" "}
        <span className="text-[16px] font-semibold pt-4"> ... </span>{" "}
        <Link href="#">
          <button className="w-[37px] h-[37px] text-black text-[16px] font-semibold bg-[#F5F5F5] rounded-full">
            5{" "}
          </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

export default PortfolioExample;