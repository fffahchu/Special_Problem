import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";

const PersonalRecord = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-4.png";
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
  const [page, setPage] = useState(1);
  const [file, setFile] = useState("");
  const [nameTh, setNameTh] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [hobby, setHobby] = useState("");
  const [aptitude, setAptitude] = useState("");
  const [favoriteSubject, setFavoriteSubject] = useState("");
  const [nameFather, setNameFather] = useState("");
  const [workFather, setWorkFather] = useState("");
  const [telFather, setTelFather] = useState("");
  const [nameMother, setNameMother] = useState("");
  const [workMother, setWorkMother] = useState("");
  const [telMother, setTelMother] = useState("");
  const [tel, setTel] = useState("");

  useEffect(() => {
    const idPort5 = localStorage.getItem("idPort5") || null;
    const idFilePort5 = localStorage.getItem("idFilePort5") || null;

    if (idPort5 && idFilePort5) {
      getPort(idPort5, idFilePort5);
    }
  }, []);

  const getPort = async (idPort, idFilePort) => {
    await axios
      .get(`http://localhost:1337/api/port-step-5s/${idPort}`)
      .then((data) => {
        if (data.status === 200) {
          setPage(data.data.data.attributes.numberPage);
          setFile(data.data.data.attributes.profile);
          setNameTh(data.data.data.attributes.fullnameTH);
          setNickname(data.data.data.attributes.nickname);
          setBirthday(data.data.data.attributes.birthday);
          setEthnicity(data.data.data.attributes.ethnicity);
          setNationality(data.data.data.attributes.nationality);
          setReligion(data.data.data.attributes.religion);
          setEmail(data.data.data.attributes.email);
          setAddress(data.data.data.attributes.address);
          setHobby(data.data.data.attributes.hobby);
          setAptitude(data.data.data.attributes.aptitude);
          setFavoriteSubject(data.data.data.attributes.favoriteSubject);
          setNameFather(data.data.data.attributes.nameFather);
          setWorkFather(data.data.data.attributes.workFather);
          setTelFather(data.data.data.attributes.telFather);
          setNameMother(data.data.data.attributes.nameMother);
          setWorkMother(data.data.data.attributes.workMother);
          setTelMother(data.data.data.attributes.telMother);
          setTel(data.data.data.attributes.tel);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    await axios
      .get(`http://localhost:1337/api/upload/files/${idFilePort}`)
      .then((data) => {
        if (data.status === 200) {
          setFile(data.data.data.attributes.profile);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onPreviewImage = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
      }
    }
  };

  const onSubmit = async () => {
    try {
      const idPort = localStorage.getItem("idPort") || null;
      let idPort5 = localStorage.getItem("idPort5") || null;

      if (idPort) {
        let model = {
          data: {
            numberPage: page,
            fullnameTH: nameTh,
            nickname: nickname,
            birthday: birthday,
            ethnicity: ethnicity,
            nationality: nationality,
            religion: religion,
            email: email,
            address: address,
            hobby: hobby,
            aptitude: aptitude,
            favoriteSubject: favoriteSubject,
            nameFather: nameFather,
            workFather: workFather,
            telFather: telFather,
            nameMother: nameMother,
            workMother: workMother,
            telMother: telMother,
            tel: tel,
            iduser: 1,
            idPort: idPort,
          },
        };
        if (idPort5) {
          await axios
            .put(`http://localhost:1337/api/port-step-5s/${idPort5}`, model)
            .then((data) => {
              if (data.status === 200) {
                localStorage.setItem("idPort5", data.data.data.id);
              }
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-5s", model)
            .then((data) => {
              if (data.status === 200) {
                idPort5 = data.data.data.id;
                localStorage.setItem("idPort5", data.data.data.id);
              }
            });
        }
        if (file) {
          const form = new FormData();
          form.append("files", file);
          form.append("ref", "api::port-step-5.port-step-5");
          form.append("refId", idPort5);
          form.append("field", "profile");
          await axios
            .post(`http://localhost:1337/api/upload`, form)
            .then((data) => {
              if (data.status === 200) {
                localStorage.setItem("idFilePort5", data.data.data.id);
              }
            });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน
      </div>
      <StateCreate state={5} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">ประวัติส่วนตัว</div>
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
                onChange={(e) => setPage(e.target.value)}
                value={page}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
            <div className="flex mb-14">
              <div className="pl-[250px]">
                {file == "" ? (
                  <div className="flex justify-center items-center w-[222px] h-[222px] rounded-[11px] bg-[#FFEC85]">
                    <img
                      src="/assets/icons/camera-icon.svg"
                      alt="/assets/icons/camera-icon.svg"
                      width={56}
                      height={56}
                    />
                  </div>
                ) : (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview-image"
                    className="w-[222px] h-[222px] rounded-[11px] object-cover border"
                  />
                )}
              </div>
              <div className="ml-[30px]">
                <div className="font-bold mb-[13px]">คำแนะนำ</div>
                <div className="mb-[9px]">• สำหรับรูปโปรไฟล์</div>
                <div className="mb-[28px]">
                  • ขนาดรูปไม่เกิน 10 MB png หรือ jpg
                </div>
                <label
                  htmlFor="dropzone-file"
                  className="py-3 px-[42px] border-[1px] rounded-full text-lg font-bold cursor-pointer"
                >
                  อัพโหลดรูป
                </label>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => onPreviewImage(e)}
                />
              </div>
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อ-นานสกุล ภาษาไทย
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น สุธิดา มานะยิ่ง"
                value={nameTh}
                onChange={(e) => setNameTh(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อเล่น
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ออม"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                วัน/เดือน/ปีเกิด
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 placeholder:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="วว/ดด/ปปปป"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เชื้อชาติ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ไทย"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                สัญชาติ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ไทย"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ศาสนา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น พุทธ"
                value={religion}
                onChange={(e) => setReligion(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                อีเมล
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="เช่น suthida.m@gmail.com "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="เช่น 089-785-5794"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div className="flex mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ที่อยู่ปัจจุบัน
              </label>
              <textarea
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                type="text"
                rows={2}
                placeholder="เช่น บ้านเลขที่ 46 หมู่ 9 หมู่บ้านนกน้อย ซอยรัชดาภิเษก 66 แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                งานอดิเรก
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ออกกำลังกาย ถ่ายรูป ฟังเพลง อ่านหนังสือ"
                value={hobby}
                onChange={(e) => setHobby(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ความถนัด/ทักษะที่มี
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น เล่นกีตาร์, ร้องเพลง, เต้น cover dance"
                value={aptitude}
                onChange={(e) => setAptitude(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                วิชาที่ชอบ
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น วิทยาศาสตร์"
                value={favoriteSubject}
                onChange={(e) => setFavoriteSubject(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อบิดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ประสงค์ มานะยิ่ง "
                value={nameFather}
                onChange={(e) => setNameFather(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                อาชีพบิดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ครู "
                value={workFather}
                onChange={(e) => setWorkFather(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="เช่น 082-309-3018"
                value={telFather}
                onChange={(e) => setTelFather(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                ชื่อมารดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น สุชารัตน์ มานะยิ่ง"
                value={nameMother}
                onChange={(e) => setNameMother(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                อาชีพมารดา
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="เช่น ครู "
                value={workMother}
                onChange={(e) => setWorkMother(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-3">
              <label className="w-[218px] text-lg font-bold mr-8 text-end">
                เบอร์โทรศัพท์
              </label>
              <input
                className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="tel"
                placeholder="เช่น 080-401-2530"
                value={telMother}
                onChange={(e) => setTelMother(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/educational-record">
          <button
            className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]"
            onClick={onSubmit}
          >
            บันทึกข้อมูล
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalRecord;
