import React, { useState } from "react";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import Breadcrumb from "@components/Breadcrumb";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from 'next/navigation';

const Registerform = () => {
  const rounter = useRouter()
  const route = [
    {
      title: "หน้าแรก",
      link: "/member",
    },
    {
      title: "ลงทะเบียน",
      link: "/register",
    },
  ];
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_password] = useState("");
  const [number, setNumber] = useState("");

  // // const submit_button = document.querySelector(".button");
  const submit_button = async (e) => {
    e.preventDefault();

    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastname);
    localStorage.setItem("username", username);
    localStorage.setItem("number", number);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("re_password", re_password);

    if (
      name == "" ||
      lastname == "" ||
      username == "" ||
      email == "" ||
      password == "" ||
      re_password == "" ||
      number == ""
    ) {
      Swal.fire("Opps..!", "input field has no value!", "error");
    } else {
      if (password !== re_password) {
        Swal.fire("Opps..!", "Password not matching!", "error");
      } else {
        Swal.fire("Good job!", "Register successful!", "success");

        let model = {
          data: {
            name: name,
            lastname: lastname,
            user_name: username,
            email: email,
            password: password,
            re_password: re_password,
            phone: number,
          },
        };

        await axios
          .post("http://localhost:1337/api/registers", model)
          .then((data) => {
            if (data.status === 200) {
              localStorage.setItem("idUser", data.data.data.id);
            }
            setTimeout(() => {
              rounter.push("/member")
            }, 2000);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        ลงทะเบียนเข้าใช้ ComPort
      </div>

      <div className="flex">
        <div className="mx-auto w-[600px]">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="submit"
              className="flex justify-between items-center pr-[45px] w-[306px] h-[48px] rounded-3xl shadow drop-shadow-lg text-[#FFFFFF] font-bold bg-[#3B5998]"
            >
              <div className="pl-[40px] items-center">
                <img
                  className="w-[28px] h-[28px] rouned-full"
                  src="../assets/images/fb-logo.png"
                  alt="fb login"
                />
              </div>
              เข้าสู่ระบบด้วย Facebook
            </button>

            <button
              type="submit"
              className="flex justify-between items-center pr-[45px] w-[306px] h-[48px] rounded-3xl shadow drop-shadow-lg text-[#FFFFFF] font-bold bg-[#DD4B39]"
            >
              <div className="pl-[40px] items-center">
                {" "}
                <img
                  className="w-[28px] h-[28px] rouned-full"
                  src="../assets/images/gg-logo.png"
                  alt="fb login"
                />
              </div>
              เข้าสู่ระบบด้วย Google+
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-[40px]">
            <div className="h-[1px] w-[120px] border border-[#dcfce7]"></div>
            <a className="text-[15px] font-bold inline-block">หรือ</a>
            <div className="h-[1px] w-[120px] border border-[#dcfce7] mr-[26px]"></div>
          </div>

          <div className="flex">
            <div className="mx-auto max-w-[1232px] mt-[40px] shadow-inner shadow-[#bbf7d0] w-[560px] h-[933px] border-[1px] border-[#bbf7d0] rounded">
              <div className="mt-[30px] ml-[10px] grid grid-cols-2">
                <div className="flex flex-wrap mb-2">
                  <label for="name" className="font-bold ml-[85px]">
                    ชื่อ <a className="text-[#FF0000]">*</a>
                  </label>
                  <input
                    className="py-2.5 px-3.5 ml-[85px] mt-[10px] w-[180px] h-[35px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                    required
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-wrap mb-2">
                  <label for="lastname" className="font-bold">
                    นามสกุล <a className="text-[#FF0000]">*</a>
                  </label>
                  <input
                    className="py-2.5 px-3.5 mr-[40px] mt-[10px] w-[180px] h-[35px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                    required
                    type="text"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="mt-[15px] ml-[95px]">
                <label for="username" className="font-bold mt-[30px]">
                  ชื่อผู้ใช้งาน <a className="text-[#FF0000]">*</a>
                </label>
                <input
                  className="py-2.5 px-3.5 flex flex-wrap w-[370px] h-[35px] mt-[8px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="username"
                  required
                  type="text"
                  placeholder="เช่น fffahch.62"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
                <div className="text-[13px] font-light text-[#9ca3af] ml-[2px] mt-[5px]">
                  คุณใช้ตัวอักษร ตัวเลข และจุดได้
                </div>
              </div>

              <div className="mt-[18px] ml-[95px]">
                <label for="email" className="font-bold mt-[30px]">
                  อีเมล <a className="text-[#FF0000]">*</a>
                </label>
                <input
                  className="py-2.5 px-3.5 flex flex-wrap w-[370px] h-[35px] mt-[8px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="mt-[18px] ml-[95px]">
                <label for="password" className="font-bold mt-[30px]">
                  รหัสผ่าน <a className="text-[#FF0000]">*</a>
                </label>
                <input
                  className="py-2.5 px-3.5 flex flex-wrap w-[370px] h-[35px] mt-[8px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="password"
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <div className="text-[13px] font-light text-[#9ca3af] ml-[2px] mt-[5px]">
                  ใช้อักขระ 8 ตัวขึ้นไปที่มีทั้งตัวอักษร ตัวเลข
                  และสัญลักษณ์ผสมกัน
                </div>
              </div>

              <div className="mt-[18px] ml-[95px]">
                <label for="re_password" className="font-bold mt-[30px]">
                  ป้อนรหัสผ่านอีกครั้ง <a className="text-[#FF0000]">*</a>
                </label>
                <input
                  className="py-2.5 px-3.5 flex flex-wrap w-[370px] h-[35px] mt-[8px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="re_password"
                  required
                  type="password"
                  value={re_password}
                  onChange={(e) => setRe_password(e.target.value)}
                ></input>
              </div>

              <div className="mt-[18px] ml-[95px]">
                <label for="number" className="font-bold mt-[30px]">
                  เบอร์โทรศัพท์ <a className="text-[#FF0000]">*</a>
                </label>
                <input
                  className="py-2.5 px-3.5 flex flex-wrap w-[370px] h-[35px] mt-[8px] border-[1px] border-[#bbf7d0] rounded-lg shadow-md shadow-[#dcfce7]"
                  id="number"
                  required
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                ></input>
              </div>

              <div className="mt-[30px] ml-[95px] h-[1px] w-[371px] border border-[#dcfce7]"></div>
              <div className="mt-[20px] ml-[95px] font-bold">
                ข้อตกลงและเงื่อนไขในการใช้งาน ComPort
              </div>
              <div className="flex items-center mt-[15px] bg-[#C9F0D6] w-[371px] h-[104px] ml-[95px] rounded">
                <div className="form-group form-check ml-[25px]">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-600 rounded-sm bg-[#f4f4f5] checked:bg-[#4b5563] checked:border-[#e4e4e7] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block flex flex-wrap font-md text-[15px] "
                    for="exampleCheck2"
                  >
                    ฉันได้อ่านและยอมรับ{" "}
                    <a className="underline">ข้อตกลงและเงื่อนไข</a> และ{" "}
                    <a className="underline">นโยบายความเป็นส่วนตัว</a>
                  </label>
                </div>
              </div>
              <div className="mt-[40px] ml-[195px]">
                <button
                  type="submit"
                  onClick={submit_button}
                  className="w-[152px] h-[44px] rounded-3xl shadow drop-shadow-lg font-bold transition ease-in-out bg-[#FFCA61] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFEC85] duration-300"
                >
                  ลงทะเบียน
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] text-center font-bold">
        <a>มีบัญชีผู้ใช้ ComPort แล้ว?</a>
        <a
          href="#!"
          className="text-gray-800 font-bold underline underline-offset-2 pl-[10px]"
        >
          เข้าสู่ระบบ
        </a>
      </div>
    </div>
  );
};
export default Registerform;
