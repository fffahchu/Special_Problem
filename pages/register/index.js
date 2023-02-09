import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";


const Registerform = () => {

    const route = [{
            title: "หน้าแรก",
            link: "/member",
        },
        {
            title: "ลงทะเบียน",
            link: "/register",
        },
    ];
    return ( 
      <div className = "px-[104px] py-[29px]" >
        <MoveToTop />
        <Breadcrumb route = { route }/> 
        <div className = "text-center text-[28px] font-semibold my-12" >
        ลงทะเบียน
        </div>
    </div>

    )
    }
export default Registerform;