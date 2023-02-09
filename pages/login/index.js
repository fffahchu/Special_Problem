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
      <div className = "px-[104px] py-[29px]" >
        <MoveToTop />
        <Breadcrumb route = { route }/> 
        <div className = "text-center text-[28px] font-semibold my-12" >
        เข้าสู่ระบบ
        </div>

        <div className= "box-border h-32 w-32 p-4 bg-white">
          <div className="w-[180px] text-sm font-semibold">
                     <h1> ชื่อผู้ใช้งาน หรือ อีเมล </h1>
            <input className="username" 
                    style={{width:"306px",
                            height:"36px",
                            boxShadow:"0.4px 0.4px 4.4px 4.4px #C9F0D6",
                            borderRadius:"6px"}}
                      type="text"/>

          <div className="w-[180px] text-sm font-semibold">
                     <h1> รหัสผ่าน </h1>
            <input className="password" 
                    style={{width:"306px",
                            height:"36px",
                            boxShadow:"0.4px 0.4px 4.4px 4.4px #C9F0D6",
                            borderRadius:"6px"}}
                      type="text"/>
          </div>

        </div>        
        </div>
      </div>

        
    )
}
export default Loginform;