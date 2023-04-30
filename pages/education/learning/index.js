import React, { useState } from "react";
import Breadcrumb from "@components/Breadcrumb";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Cardedu from "@components/Cardedu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Learning = () => {
  const route = [
    {
      title: "หน้าหลัก",
      link: "#",
    },
    {
      title: "คลังความรู้",
      link: "/education/all",
    },
    {
      title: "คอร์สเรียนเสริม",
      link: "/education/learning",
    },
  ];
  const course = [
    {
      image: "../assets/images/course/c1.png",
      title: "การเขียนโปรแกรมคอมพิวเตอร์พื้นฐาน ด้วยภาษาซี 1",
      content: "",
      link: "#",
    },
    {
      image: "../assets/images/course/c2.jpg",
      title: "Become To Front-End Developer",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c3.jpg",
      title: "Complete Arduino htmlFor Beginner",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c4.jpg",
      title: "Complete Data Analytics Package",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c5.jpg",
      title: "Programming htmlFor Everyone X",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/course/c6.jpg",
      title: "Fundamental Web Dev",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/learning/python.png",
      title: "Complete Python 3",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/learning/game.png",
      title: "Advanced Game Development",
      content: "borntodev.com",
      link: "#",
    },
    {
      image: "../assets/images/learning/java.png",
      title: "Complete Java Programming",
      content: "borntodev.com",
      link: "#",
    },
  ];
  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="flex">
        <div className="flex-1">
          <div className="flex justify-between items-center mt-[80px]">
            <div className="text-[23px] font-semibold"> คอร์ สเรียนเสริม </div>{" "}
          </div>{" "}
          <hr className="mt-[12px] mb-4" />
        </div>{" "}
      </div>{" "}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ marginLeft: 346, marginRight: 346, marginTop: 40 }}
      >
        <SwiperSlide>
          <a href="https://www.borntodev.com/" target="_blank">
            <img
              className="object-fill w-[767px] h-[450px] rounded-[10px]"
              src="../assets/images/learning/1.png"
              alt="image slide 1"
            />
          </a>{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://www.borntodev.com/" target="_blank">
            <img
              className="object-fill w-[767px] h-[450px] rounded-[10px]"
              src="../assets/images/learning/2.png"
              alt="image slide 2"
            />
          </a>{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://www.borntodev.com/" target="_blank">
            <img
              className="object-fill w-[767px] h-[450px] rounded-[10px]"
              src="../assets/images/learning/3.png"
              alt="image slide 3"
            />
          </a>{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://www.borntodev.com/" target="_blank">
            <img
              className="object-fill w-[767px] h-[450px] rounded-[10px]"
              src="../assets/images/learning/4.png"
              alt="image slide 3"
            />
          </a>{" "}
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://www.borntodev.com/" target="_blank">
            <img
              className="object-fill w-[767px] h-[450px] rounded-[10px]"
              src="../assets/images/learning/5.png"
              alt="image slide 3"
            />
          </a>{" "}
        </SwiperSlide>{" "}
      </Swiper>{" "}
      <div className="felx">
        <div className="flex justify-between items-center mt-[80px]">
          <div className="text-[16px] font-semibold">
            คอร์สเรียนเสริมทั้งหมด(230){" "}
          </div>{" "}
        </div>{" "}
        <hr className="mt-[12px] mb-4" />
        <div className="flex justify-center mt-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-28">
              {" "}
              {course.map((item) => {
                return <Cardedu item={item} type="course" />;
              })}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex gap-3.5 justify-center  mt-[50px]">
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
export default Learning;