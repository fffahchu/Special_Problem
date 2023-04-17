import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState("");
  const [user, setUser] = useState(false);
  const menuRef = useRef();

  const menu = [
    { title: "หน้าหลัก", icon: "home", location: "/member" },
    { title: "ข่าวประชาสัมพันธ์", icon: "advertise", location: "/" },
    { title: "แนะนำคณะ", icon: "advice", location: "/" },
    { title: "คลังความรู้", icon: "book", location: "/" },
  ];

  const advertises = [
    { title: "ทั้งหมด", location: "/news" },
    { title: "ข่าวสาร", location: "/news/info" },
    { title: "กิจกรรม/ค่าย", location: "/news/camp" },
    { title: "บทความ", location: "/news/article" },
  ];

  const advices = [
    { title: "ทั้งหมด", location: "/faculty/all-faculty" },
    { title: "วิทย์คอม", location: "/faculty/cs" },
    { title: "วิศวะคอม", location: "/faculty/ce" },
    { title: "ไอที", location: "/faculty/it" },
  ];

  const books = [
    { title: "ทั้งหมด", location: "/education/all" },
    { title: "คอร์สเรียนเสริม", location: "/education/learning" },
    { title: "แบบฝึกหัด", location: "/education/exercise" },
  ];

  const profiles = [
    { title: "แก้ไขโปรไฟล์", icon: "edit-1", location: "/edit-profile" },
    { title: "รายการที่ฉันสนใจ", icon: "edit-2", location: "/" },
    {
      title: "ออกจากระบบ",
      icon: "logout",
      location: "/login",
    },
  ];

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowDropdown("");
      }
    };

    checkUserLogin();

    document.addEventListener("mousedown", handler);
  });

  const openDropdown = (key) => {
    if (showDropdown == key) {
      return setShowDropdown("");
    }
    return setShowDropdown(key);
  };

  const checkUserLogin = () => {
    if (localStorage.getItem("idUser") != null) {
      return setUser(true);
    }
    return setUser(false);
  };

  return (
    <div
      className="flex justify-between items-center py-2.5 px-[104px] bg-green"
      ref={menuRef}
    >
      <div className="flex items-center">
        <Link href="/member">
          <div className="flex items-center gap-1.5 mr-16">
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="py-1.5"
              width="24"
              height="24"
            />
            <div className="text-xl font-semibold">Comport</div>
          </div>
        </Link>
        <div className="flex items-center divide-x-[1px] divide-[#ABCCB6]">
          {menu.map((item, index) => {
            return index == 0 ? (
              <Link href={item.location}>
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
              </Link>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center px-3"
                  key={item.icon}
                  onClick={() => openDropdown(item.icon)}
                >
                  <img
                    src={`/assets/icons/${item.icon}.svg`}
                    alt={`icon-${item.icon}`}
                    className="mr-1.5"
                    width="16"
                    height="16"
                  />
                  <div className="font-semibold">{item.title}</div>
                </button>
                {item.icon == "advertise" && showDropdown == "advertise" && (
                  <div className={`absolute top-11 left-0 z-20 bg-green`}>
                    {advertises.map((value, i) => {
                      return (
                        <Link href={value.location} key={`advertise-${i}`}>
                          <div className={`flex pl-3 pr-3 py-3`}>
                            <div className="mr-2">•</div>
                            <div className="hover:underline">{value.title}</div>
                          </div>
                          <hr
                            className={`opacity-20 ${
                              i == advertises.length - 1 && "hidden"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
                {item.icon == "advice" && showDropdown == "advice" && (
                  <div className={`absolute top-11 left-0 z-20 bg-green`}>
                    {advices.map((value, i) => {
                      return (
                        <Link href={value.location} key={`advices-${i}`}>
                          <div className={`flex pl-3 pr-3 py-3`}>
                            <div className="mr-2">•</div>
                            <div className="hover:underline">{value.title}</div>
                          </div>
                          <hr
                            className={`opacity-20 ${
                              i == advertises.length - 1 && "hidden"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
                {item.icon == "book" && showDropdown == "book" && (
                  <div
                    className={`w-[150px] absolute top-11 left-0 z-20 bg-green`}
                  >
                    {books.map((value, i) => {
                      return (
                        <Link href={value.location} key={`books-${i}`}>
                          <div className={`flex pl-3 pr-3 py-3`}>
                            <div className="mr-2">•</div>
                            <div className="hover:underline">{value.title}</div>
                          </div>
                          <hr
                            className={`opacity-20 ${
                              i == advertises.length - 1 && "hidden"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="flex items-center mr-[22px]">
            <div
              className="flex gap-2.5 mr-12 relative cursor-pointer"
              onClick={() => openDropdown("profile")}
            >
              <img
                className="rounded-full"
                src="/assets/images/profile.png"
                alt="profile"
                width="38"
                height="38"
              />
              <img
                src="/assets/icons/arrow-point-to-down.svg"
                alt="arrow-profile"
              />
              <div
                className={`w-[200px] absolute top-[51px] left-0 z-20 bg-green`}
              >
                {showDropdown == "profile" &&
                  profiles.map((value, index) => {
                    return index < profiles.length - 1 ? (
                      <Link href={value.location} key={`profiles-${index}`}>
                        <div className={`flex pl-3 py-3`}>
                          <img
                            src={`/assets/icons/${value.icon}.svg`}
                            alt={`icon-${value.icon}`}
                            className="mr-2"
                            width="16"
                            height="16"
                          />
                          <div className=" hover:underline">{value.title}</div>
                        </div>
                      </Link>
                    ) : (
                      <Link href={value.location} key={`profiles-${index}`}>
                        <hr className={`opacity-20`} />
                        <div
                          className={`flex pl-3 py-3`}
                          onClick={() => localStorage.removeItem("idUser")}
                        >
                          <img
                            src={`/assets/icons/${value.icon}.svg`}
                            alt={`icon-${value.icon}`}
                            className="mr-2"
                            width="16"
                            height="16"
                          />
                          <div className=" hover:underline">{value.title}</div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
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
        ) : (
          <div className="flex items-center mr-[42px] gap-[15px]">
            <Link href="/login">
              {" "}
              <button className="flex items-center rounded-full bg-orange py-2 px-[15px] gap-1.5">
                <img
                  src="assets/icons/lock.svg"
                  alt="login"
                  width="20"
                  height="20"
                />
                <div className="font-semibold">เข้าสู่ระบบ</div>
              </button>
            </Link>

            <button className="flex items-center rounded-full bg-orange py-2 px-[15px] gap-1.5">
              <img
                src="assets/icons/arrow-circle-right.svg"
                alt="login"
                width="20"
                height="20"
              />
              <div className="font-semibold">ลงทะเบียน</div>
            </button>
          </div>
        )}

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
