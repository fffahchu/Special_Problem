import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";

const CreateFrontCover = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4.png";
  const [urlPreview, setUrlPreview] = useState("");
  const [file, setFile] = useState(null);
  const [nameTh, setNameTh] = useState("");
  const [nameEng, setNameEng] = useState("");
  const [school, setSchool] = useState("");

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

  useEffect(() => {
    const idPort2 = localStorage.getItem("idPort2") || null;
    const idFilePort2 = localStorage.getItem("idFilePort2") || null;

    if (idPort2 && idFilePort2) {
      getPort(idPort2, idFilePort2);
    }
  }, []);

  const getPort = async (idPort, idFilePort) => {
    await axios
      .get(`http://localhost:1337/api/port-step-2s/${idPort}`)
      .then((data) => {
        if (data.status === 200) {
          setFile(data.data.data.attributes.profile);
          setNameTh(data.data.data.attributes.fullnameTH);
          setNameEng(data.data.data.attributes.fullnameEN);
          setSchool(data.data.data.attributes.school);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    await axios
      .get(`http://localhost:1337/api/upload/files/${idFilePort}`)
      .then((data) => {
        if (data.status === 200) {
          const reader = new FileReader();

          reader.addEventListener("load", () => {
            setUrlPreview(reader.result);
          });

          if (data.data.attributes.profile) {
            reader.readAsDataURL(data.data.data.attributes.profile);
          }

          setFile(data.data.data.attributes.profile)
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onPreviewImage = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setUrlPreview(reader.result);
      });

      if (file) {
        reader.readAsDataURL(file);
        setFile(file);
      }
    }
  };

  const onSubmit = async () => {
    console.log("create front-cover");
    try {
      const idPort = localStorage.getItem("idPort") || null;
      let idPort2 = localStorage.getItem("idPort2") || null;

      if (idPort) {
        let model = {
          data: {
            fullnameTH: nameTh,
            fullnameEN: nameEng,
            school: school,
            idUser: 1,
            idPort: idPort,
          },
        };
        if (idPort2) {
          await axios
            .put(`http://localhost:1337/api/port-step-2s/${idPort2}`, model)
            .then((data) => {
              if (data.status === 200) {
                localStorage.setItem("idPort2", data.data.data.id);
              }
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-2s", model)
            .then((data) => {
              if (data.status === 200) {
                idPort2 = data.data.data.id;
                localStorage.setItem("idPort2", data.data.data.id);
              }
            });
        }
        if (file) {
          const form = new FormData();
          form.append("files", file);
          form.append("ref", "api::port-step-2.port-step-2");
          form.append("refId", idPort2);
          form.append("field", "profile");
          await axios
            .post(`http://localhost:1337/api/upload`, form)
            .then((data) => {
              if (data.status === 200) {
                localStorage.setItem("idFilePort2", data.data.data.id);
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
      <StateCreate state={2} />
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]">หน้าปก</div>
        <div className="flex justify-between">
          <div className="shrink-0 relative w-[170px] h-[246px]">
            <img
              src={coverImage}
              alt={coverImage}
              className="rounded-[6px] cursor-pointer h-full"
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
          <div className="flex">
            <div className="flex flex-col mr-[45px]">
              {urlPreview == "" ? (
                <div className="flex justify-center items-center self-end mb-[20px] w-[500px] h-[500px] bg-yellow rounded-[6px]">
                  <img
                    src="/assets/icons/camera-icon.svg"
                    alt="/assets/icons/camera-icon.svg"
                  />
                </div>
              ) : (
                <img
                  src={urlPreview}
                  alt="preview-image"
                  className="self-end mb-[20px] w-[500px] h-[500px] rounded-[6px] object-cover border"
                />
              )}
              <div className="flex items-center mb-2">
                <label
                  htmlFor="first_name_thai"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  ชื่อ-นามสกุล ภาษาไทย
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first_name_thai"
                  type="text"
                  placeholder="เช่น สุธิดา มานะยิ่ง"
                  value={nameTh}
                  onChange={(e) => setNameTh(e.target.value)}
                />
              </div>
              <div className="flex mb-2">
                <label
                  htmlFor="first_name_eng"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  ชื่อ-นามสกุล ภาษาอังกฤษ
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first_name_eng"
                  type="text"
                  placeholder="เช่น suthida"
                  value={nameEng}
                  onChange={(e) => setNameEng(e.target.value)}
                />
              </div>
              <div className="flex">
                <label
                  htmlFor="school_name"
                  className="w-[224px] text-lg font-bold pr-3 text-end"
                >
                  โรงเรียน
                </label>
                <input
                  className="shadow appearance-none border rounded w-[500px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="school_name"
                  type="text"
                  placeholder="เช่น สวนกุหลาบวิทยาลัย"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="text-lg font-bold">คำแนะนำ</div>
              <ul className="list-disc ml-[30px] mb-[20px]">
                <li>สำหรับรูปหน้าปก</li>
                <li>ขนาดรูปไม่เกิน 10 MB png หรือ jpg</li>
              </ul>
              <label
                htmlFor="dropzone-file"
                className="px-[30px] py-[9px] w-[165px] border-[1px] rounded-[20px] font-bold cursor-pointer"
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
        </div>
      </div>
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <Link href="/create-portfolio/introduction">
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

export default CreateFrontCover;
