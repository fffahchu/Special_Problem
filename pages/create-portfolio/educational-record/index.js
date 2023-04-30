import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import axios from "axios";
import { useRouter } from "next/navigation";

const PersonalRecord = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-5.png";
  const router = useRouter();
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
  const [page, setPage] = useState(2);
  const [schools, setSchools] = useState([
    {
      id: -1,
      name: "",
      level: "",
      year: "",
      major: "",
      gpa: "",
      file: "",
    },
  ]);

  const addSchool = () => {
    setSchools([
      ...schools,
      {
        id: -1,
        name: "",
        level: "",
        year: "",
        major: "",
        gpa: "",
        file: "",
      },
    ]);
  };

  const removeSchool = (index) => {
    let arrSchools = [...schools];
    arrSchools.splice(index, 1);
    setSchools([...arrSchools]);
  };

  useEffect(() => {
    const idPort6 = localStorage.getItem("idPort6") || null;
    const idFilePort6 = localStorage.getItem("idFilePort6") || null;

    if (idPort6 && idFilePort6) {
      getPort(idPort6.split(","), idFilePort6.split(","));
    }
  }, []);

  const getPort = async (idPorts, idFilePorts) => {
    let arr = [];
    for (var i = 0; i < idPorts.length; i++) {
      let index = i;
      let idport = idPorts[i];
      await axios
        .get(`http://localhost:1337/api/port-step-6s/${idport}`)
        .then(async (data) => {
          if (data.status === 200) {
            if (page == 2) {
              setPage(data.data.data.attributes.numberPage);
            }
            let model = {
              id: data.data.data.id,
              name: data.data.data.attributes.school,
              level: data.data.data.attributes.educationLevel,
              year: data.data.data.attributes.year,
              major: data.data.data.attributes.major,
              gpa: data.data.data.attributes.gpa,
            };

            await axios
              .get(
                `http://localhost:1337/api/upload/files/${idFilePorts[index]}`
              )
              .then((data) => {
                if (data.status === 200) {
                  if (data.data.url) {
                    model.file = "http://localhost:1337" + data.data.url;
                  }
                }
              })
              .catch((e) => {
                console.log(e);
              });

            arr.push(model);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // idPorts.forEach(async(idport, index) => {
    //     await axios
    //         .get(`http://localhost:1337/api/port-step-6s/${idport}`)
    //         .then(async(data) => {
    //             if (data.status === 200) {
    //                 if (page == 2) {
    //                     setPage(data.data.data.attributes.numberPage);
    //                 }
    //                 let model = {
    //                     id: data.data.data.id,
    //                     name: data.data.data.attributes.school,
    //                     level: data.data.data.attributes.educationLevel,
    //                     year: data.data.data.attributes.year,
    //                     major: data.data.data.attributes.major,
    //                     gpa: data.data.data.attributes.gpa,
    //                 };

    //                 await axios
    //                     .get(
    //                         `http://localhost:1337/api/upload/files/${idFilePorts[index]}`
    //                     )
    //                     .then((data) => {
    //                         if (data.status === 200) {
    //                             model.file = data.data.data.attributes.profile;
    //                         }
    //                     })
    //                     .catch((e) => {
    //                         console.log(e);
    //                     });

    //                 arr.push(model);
    //             }
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // });
    if (arr.length > 0) {
      setSchools(arr);
    }
  };

  const onPreviewImage = (e, index) => {
    if (e.target.files.length > 0) {
      let arr = [...schools];
      const file = e.target.files[0];

      if (file) {
        arr[index].file = file;
      }
      setSchools([...arr]);
    }
  };

  const onSubmit = async () => {
    const idPort = localStorage.getItem("idPort") || null;
    const idPort6 = localStorage.getItem("idPort6") || null;
    const idPortFile6 = localStorage.getItem("idPortFile6") || null;
    const idUser = localStorage.getItem("idUser") || null;

    let arrIdPort6 = [];
    let arrIdFilePort6 = [];

    if (idPortFile6) {
      arrIdFilePort6 = idPortFile6.split(",");
    }

    if (idPort) {
      let model = {
        data: {
          numberPage: page,
          iduser: idUser,
          idPort: idPort,
        },
      };

      // let arr = [...schools];

      for (var i = 0; i < schools.length; i++) {
        let school = schools[i];
        console.log(JSON.stringify(school));
        console.log(school.file);
        model.data.school = school.name;
        model.data.educationLevel = school.level;
        model.data.year = school.year;
        model.data.major = school.major;
        model.data.gpa = school.gpa;
        if (school.id >= 0) {
          await axios
            .put(`http://localhost:1337/api/port-step-6s/${school.id}`, model)
            .then((data) => {
              if (data.status === 200) {
                arrIdPort6.push(data.data.data.id);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-6s", model)
            .then((data) => {
              if (data.status === 200) {
                arrIdPort6.push(data.data.data.id);
                school.id = data.data.data.id;
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }

        if (typeof school.file == "object") {
          if (school.id >= 0 && school.file) {
            const form = new FormData();
            form.append("files", school.file);
            form.append("ref", "api::port-step-6.port-step-6");
            form.append("refId", school.id);
            form.append("field", "logo");
            await axios
              .post(`http://localhost:1337/api/upload`, form)
              .then((data) => {
                if (data.status === 200) {
                  arrIdFilePort6.push(data.data[0].id);
                }
              });
          }
        }
      }

      // arr.forEach(async (school) => {
      //   model.data.school = school.name;
      //   model.data.educationLevel = school.level;
      //   model.data.year = school.year;
      //   model.data.major = school.major;
      //   model.data.gpa = school.gpa;
      //   if (school.id >= 0) {
      //     await axios
      //       .put(`http://localhost:1337/api/port-step-6s/${school.id}`, model)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           arrIdPort6.push(data.data.data.id);
      //         }
      //       })
      //       .catch((e) => {
      //         console.log(e);
      //       });
      //   } else {
      //     await axios
      //       .post("http://localhost:1337/api/port-step-6s", model)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           arrIdPort6.push(data.data.data.id);
      //           school.id = data.data.data.id;
      //         }
      //       })
      //       .catch((e) => {
      //         console.log(e);
      //       });
      //   }

      //   if (school.id >= 0 && school.file) {
      //     const form = new FormData();
      //     form.append("files", school.file);
      //     form.append("ref", "api::port-step-6.port-step-6");
      //     form.append("refId", school.id);
      //     form.append("field", "logo");
      //     await axios
      //       .post(`http://localhost:1337/api/upload`, form)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           arrIdFilePort6.push(data.data.data.id);
      //         }
      //       });
      //   }
      // });

      if (idPort6) {
        let idPort6s = idPort6.split(",");
        for (var i = 0; i < idPort6.split(",").length; i++) {
          let idPort = idPort6s[i];
          if (!arrIdPort6.includes(idPort)) {
            await axios
              .delete(`http://localhost:1337/api/port-step-6s/${idPort}`)
              .then(() => {
                arrIdFilePort6.splice(index, 1);
              })
              .catch((e) => {
                console.log(e);
              });
          }
        }
      }

      // idPort6.split(",").forEach(async (idPort) => {
      //   if (!arrIdPort6.includes(idPort)) {
      //     await axios
      //       .delete(`http://localhost:1337/api/port-step-6s/${idPort}`)
      //       .catch((e) => {
      //         console.log(e);
      //       });
      //   }
      // });

      if (arrIdPort6.length > 0) {
        localStorage.setItem("idPort6", arrIdPort6);
      }
      if (arrIdFilePort6.length > 0) {
        localStorage.setItem("idFilePort6", arrIdFilePort6);
      }
    }
    router.push("/create-portfolio/activities");
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน{" "}
      </div>{" "}
      <StateCreate state={6} />{" "}
      <div className="my-[72px] mx-auto max-w-[1232px]">
        <div className="text-xl font-bold mb-[30px]"> ประวัติการศึกษา </div>{" "}
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
            </div>{" "}
          </div>{" "}
          <div className="grow">
            <div className="flex items-center">
              <label
                className="w-[218px] text-lg font-bold text-end mr-8 "
                htmlFor="page_number"
              >
                หมายเลขหน้า{" "}
              </label>{" "}
              <select
                name="page_number"
                className="shadow border rounded py-2.5 px-3.5 w-[531px]"
                defaultValue="2"
                value={page}
                onChange={(e) => setPage(e.target.value)}
              >
                <option value="1"> 1 </option> <option value="2"> 2 </option>{" "}
                <option value="3"> 3 </option> <option value="4"> 4 </option>{" "}
              </select>{" "}
            </div>{" "}
            {schools.map((item, index) => {
              return (
                <div key={`education-${index}`} id={index}>
                  <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
                  <div className="flex mb-6">
                    <div className="pl-[250px]">
                      {" "}
                      {item.file == "" ? (
                        <div className="flex justify-center items-center w-[144px] h-[144px] rounded-[11px] bg-[#FFEC85]">
                          <img
                            src="/assets/icons/camera-icon.svg"
                            alt="/assets/icons/camera-icon.svg"
                            width={56}
                            height={56}
                          />{" "}
                        </div>
                      ) : (
                        <img
                          src={
                            typeof item.file == "string"
                              ? item.file
                              : typeof item.file == "object"
                              ? URL.createObjectURL(item.file)
                              : ""
                          }
                          alt="preview-image"
                          className="w-[144px] h-[144px] rounded-[11px] object-cover border"
                        />
                      )}{" "}
                    </div>{" "}
                    <div className="ml-[30px]">
                      <div className="font-bold mb-[13px]"> คำแนะนำ </div>{" "}
                      <div className="mb-[9px]"> •สำหรับรูปโปรไฟล์ </div>{" "}
                      <div className="mb-[28px]">
                        {" "}
                        • ขนาดรูปไม่เกิน 10 MB png หรือ jpg{" "}
                      </div>{" "}
                      <label
                        htmlFor={`dropzone-file-${index}`}
                        className="py-3 px-[42px] border-[1px] rounded-full text-lg font-bold"
                      >
                        อัพโหลดรูป{" "}
                      </label>{" "}
                      <input
                        id={`dropzone-file-${index}`}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => onPreviewImage(e, index)}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ชื่อโรงเรียน{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น สวนกุหลาบวิทยาลัย"
                      value={item.name}
                      onChange={(e) => {
                        let arr = [...schools];
                        arr[index].name = e.target.value;
                        setSchools(arr);
                      }}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ระดับการศึกษาที่เรียนจบ{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น ระดับมัธยมศึกษา ปีที่ 4-6"
                      value={item.level}
                      onChange={(e) => {
                        let arr = [...schools];
                        arr[index].level = e.target.value;
                        setSchools(arr);
                      }}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      ปีที่จบการศึกษา{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น ปีการศึกษา 2561-2563"
                      value={item.year}
                      onChange={(e) => {
                        let arr = [...schools];
                        arr[index].year = e.target.value;
                        setSchools(arr);
                      }}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      สายการเรียน/สาขาวิชา{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น วิทย์-คณิต"
                      value={item.major}
                      onChange={(e) => {
                        let arr = [...schools];
                        arr[index].major = e.target.value;
                        setSchools(arr);
                      }}
                    />{" "}
                  </div>{" "}
                  <div className="flex items-center mb-3">
                    <label className="w-[218px] text-lg font-bold mr-8 text-end">
                      เกรดเฉลี่ยสะสม{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="เช่น 3.25"
                      value={item.gpa}
                      onChange={(e) => {
                        let arr = [...schools];
                        arr[index].gpa = e.target.value;
                        setSchools(arr);
                      }}
                    />{" "}
                  </div>{" "}
                  {index + 1 < schools.length && (
                    <div className="flex items-center">
                      <div className="w-[218px] mr-8" />
                      <button
                        className="rounded-full bg-red text-white text-lg font-bold px-[20px] py-[13px]"
                        onClick={() => removeSchool(index)}
                      >
                        ลบข้อมูล{" "}
                      </button>{" "}
                    </div>
                  )}{" "}
                </div>
              );
            })}{" "}
            <div className="flex items-center mt-[52px]">
              <div className="w-[218px] mr-8" />
              <button
                className="rounded-full bg-black text-white text-lg font-bold px-[20px] py-[13px]"
                onClick={addSchool}
              >
                เพิ่มโรงเรียนใหม่{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <hr className="border-gray-4 mb-4" />
      <div className="flex justify-center items-center">
        <button
          className="flex items-center bg-[#D9D9D9] px-5 py-2.5 rounded-[20px]"
          onClick={onSubmit}
        >
          บันทึกข้อมูล{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default PersonalRecord;
