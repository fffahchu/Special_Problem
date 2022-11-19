import React from "react";

const Header = () => {
  const menu = [
    { title: "หน้าหลัก", icon: "home", location: "/" },
    { title: "ข่าวประชาสัมพันธ์", icon: "advertise", location: "/" },
    { title: "แนะนำคณะ", icon: "advice", location: "/" },
    { title: "คลังความรู้", icon: "book", location: "/" },
  ];

  return (
    <div className="flex justify-between items-center py-2.5 px-[104px] bg-green">
      <div className="flex items-center">
        <div className="flex items-center gap-1.5 mr-16">
          <img src="/assets/logo.svg" alt="logo" className="py-1.5" width="24" height="24" />
          <div className="text-xl font-semibold">Comport</div>
        </div>
        <div className="flex items-center divide-x-[1px] divide-[#ABCCB6]">
          {menu.map((item, index) => {
            return (
              <button className="flex items-center px-3" key={item.icon}>
                <img
                  src={`/assets/icons/${item.icon}.svg`}
                  alt={`icon-${item.icon}`}
                  className="mr-1.5"
                  width="16"
                  height="16"
                />
                <div className="font-semibold">{item.title}</div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-[22px]">
          <div className="flex gap-2.5 mr-12">
            <img
              className="rounded-full"
              src="/assets/images/mock-profile-image.png"
              alt="profile"
              width="38"
              height="38"
            />
            <img
              src="/assets/icons/arrow-point-to-down.svg"
              alt="arrow-profile"
            />
          </div>
          <div>
            <img
              src="/assets/icons/bell.svg"
              alt="icon-search"
              width="20"
              height="20"
            />
          </div>
        </div>
        {/* <div className="flex items-center mr-[42px] gap-[15px]">
            <button className="flex items-center rounded-full bg-orange py-2 px-[15px] gap-1.5">
                <img src="assets/icons/lock.svg" alt="login" width="20" height="20" />
                <div className="font-semibold">เข้าสู่ระบบ</div>
            </button>
            <button className="flex items-center rounded-full bg-orange py-2 px-[15px] gap-1.5">
                <img src="assets/icons/arrow-circle-right.svg" alt="login" width="20" height="20" />
                <div className="font-semibold">ลงทะเบียน</div>
            </button>
        </div> */}
        <div>
          <img
            src="/assets/icons/search.svg"
            alt="icon-search"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
