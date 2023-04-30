import React, { useState, useEffect } from "react";
import Breadcrumb from "@components/Breadcrumb";
import StateCreate from "@components/StateCreate";
import MoveToTop from "@components/MoveToTop";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const CreateCertificate = () => {
  const coverImage = "/assets/images/portfolio/portfolio-4-7.png";
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
  const [page, setPage] = useState(4);
  const [certificates, setCertificates] = useState([
    {
      id: -1,
      title: "",
      file: "",
    },
    {
      id: -1,
      title: "",
      file: "",
    },
    {
      id: -1,
      title: "",
      file: "",
    },
  ]);

  const newCertificates = () => {
    setCertificates([
      {
        id: -1,
        title: "",
        file: "",
      },
      {
        id: -1,
        title: "",
        file: "",
      },
      {
        id: -1,
        title: "",
        file: "",
      },
    ]);
  };

  useEffect(() => {
    const idPort8 = localStorage.getItem("idPort8") || null;
    const idFilePort8 = localStorage.getItem("idFilePort8") || null;

    if (idPort8 && idFilePort8) {
      getPort(idPort8.split(","), idFilePort8.split(","));
    }
  }, []);

  const getPort = async (idPorts, idFilePorts) => {
    let arr = [];
    for (var i = 0; i < idPorts.length; i++) {
      let index = i;
      let idport = idPorts[i];
      await axios
        .get(`http://localhost:1337/api/port-step-8s/${idport}`)
        .then(async (data) => {
          if (data.status === 200) {
            if (page == 3) {
              setPage(data.data.data.attributes.numberPage);
            }
            let model = {
              id: data.data.data.id,
              title: data.data.data.attributes.title,
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
    // idPorts.forEach(async (idport, index) => {
    //   await axios
    //     .get(`http://localhost:1337/api/port-step-8s/${idport}`)
    //     .then(async (data) => {
    //       if (data.status === 200) {
    //         if (page == 3) {
    //           setPage(data.data.data.attributes.numberPage);
    //         }
    //         let model = {
    //           id: data.data.data.id,
    //           title: data.data.data.attributes.title,
    //         };

    //         await axios
    //           .get(
    //             `http://localhost:1337/api/upload/files/${idFilePorts[index]}`
    //           )
    //           .then((data) => {
    //             if (data.status === 200) {
    //               model.file = data.data.data.attributes.cerImage;
    //             }
    //           })
    //           .catch((e) => {
    //             console.log(e);
    //           });

    //         arr.push(model);
    //       }
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // });
    if (arr.length > 0) {
      setCertificates(arr);
    }
  };

  const onPreviewImage = (e, index) => {
    if (e.target.files.length > 0) {
      let arr = [...certificates];
      const file = e.target.files[0];

      if (file) {
        arr[index].file = file;
      }
      setCertificates([...arr]);
    }
  };

  const onSubmit = async () => {
    const idPort = localStorage.getItem("idPort") || null;
    const idPort8 = localStorage.getItem("idPort8") || null;
    const idFilePort8 = localStorage.getItem("idFilePort8") || null;
    const idUser = localStorage.getItem("idUser") || null;

    let arrIdPort8 = [];
    let arrIdFilePort8 = [];

    if (idFilePort8) {
      arrIdFilePort8 = idFilePort8.split(",");
    }

    if (idPort) {
      let model = {
        data: {
          numberPage: page,
          iduser: idUser,
          idPort: idPort,
        },
      };

      // let arr = [...certificates];

      for (var i = 0; i < certificates.length; i++) {
        let cer = certificates[i];
        model.data.title = cer.title;
        if (cer.id >= 0) {
          await axios
            .put(`http://localhost:1337/api/port-step-8s/${cer.id}`, model)
            .then((data) => {
              if (data.status === 200) {
                console.log("update port step 8 id => ", data.data.data.id);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          await axios
            .post("http://localhost:1337/api/port-step-8s", model)
            .then((data) => {
              if (data.status === 200) {
                arrIdPort8.push(data.data.data.id);
                cer.id = data.data.data.id;
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }

        if (typeof cer.file == "object") {
          if (cer.id >= 0 && cer.file) {
            const form = new FormData();
            form.append("files", cer.file);
            form.append("ref", "api::port-step-8.port-step-8");
            form.append("refId", cer.id);
            form.append("field", "cerImage");
            await axios
              .post(`http://localhost:1337/api/upload`, form)
              .then((data) => {
                if (data.status === 200) {
                  arrIdFilePort8.push(data.data[0].id);
                }
              });
          }
        }
      }

      // arr.forEach(async (cer) => {
      //   model.data.title = cer.title;
      //   if (cer.id >= 0) {
      //     await axios
      //       .put(`http://localhost:1337/api/port-step-8s/${cer.id}`, model)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           console.log("update port step 8 id => ", data.data.data.id);
      //         }
      //       })
      //       .catch((e) => {
      //         console.log(e);
      //       });
      //   } else {
      //     await axios
      //       .post("http://localhost:1337/api/port-step-8s", model)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           arrIdPort8.push(data.data.data.id);
      //           cer.id = data.data.data.id;
      //         }
      //       })
      //       .catch((e) => {
      //         console.log(e);
      //       });
      //   }

      //   if (cer.id >= 0 && cer.file) {
      //     const form = new FormData();
      //     form.append("files", cer.file);
      //     form.append("ref", "api::port-step-8.port-step-8");
      //     form.append("refId", cer.id);
      //     form.append("field", "cerImage");
      //     await axios
      //       .post(`http://localhost:1337/api/upload`, form)
      //       .then((data) => {
      //         if (data.status === 200) {
      //           arrIdFilePort8.push(data.data.data.id);
      //         }
      //       });
      //   }
      // });

      if (arrIdPort8.length > 0) {
        localStorage.setItem("idPort8", arrIdPort8);
      }
      if (arrIdFilePort8.length > 0) {
        localStorage.setItem("idFilePort8", arrIdFilePort8);
      }
    }
    router.push("/create-portfolio/download");
  };

  return (
    <div className="px-[104px] py-[29px]">
      <MoveToTop />
      <Breadcrumb route={route} />{" "}
      <div className="text-center text-[28px] font-semibold my-12">
        สร้างแฟ้มสะสมผลงาน{" "}
      </div>{" "}
      <StateCreate state={8} />{" "}
      <div className="mt-[72px] mb-[42px] mx-auto max-w-[1232px]">
        <div className="flex mb-[48px] gap-[5px]">
          <div className="text-xl font-bold "> เกียรติบัตรที่ได้รับ </div>{" "}
          <div className="text-lg bg-[#D9D9D9] py-[3px] px-1.5 rounded-full">
            2 จาก 2{" "}
          </div>{" "}
        </div>{" "}
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
                defaultValue="4"
                value={page}
                onChange={(e) => setPage(e.target.value)}
              >
                <option value="1"> 1 </option> <option value="2"> 2 </option>{" "}
                <option value="3"> 3 </option> <option value="4"> 4 </option>{" "}
              </select>{" "}
            </div>{" "}
            {certificates.map((item, index) => {
              return (
                <>
                  <hr className="border-[1px] border-black opacity-25 w-full my-[42px]" />
                  <div className="flex mb-6">
                    <div className="pl-[250px]">
                      {" "}
                      {item.file == "" ? (
                        <div className="flex justify-center items-center w-[300px] h-[200px] rounded-[11px] bg-[#FFEC85]">
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
                          className="w-[300px] h-[200px] rounded-[11px] object-cover border"
                        />
                      )}{" "}
                    </div>{" "}
                    <div className="ml-[30px]">
                      <div className="font-bold mb-[13px]"> คำแนะนำ </div>{" "}
                      <div className="mb-[9px]"> •สำหรับรูปโปรไฟล์ </div>{" "}
                      <div className="mb-[28px]">
                        {" "}
                        •ขนาดรูปไม่เกิน 10 MB png หรือ jpg{" "}
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
                      ชื่อเกียรติบัตร/งานอบรม {index + 1}{" "}
                    </label>{" "}
                    <input
                      className="shadow appearance-none border rounded w-[531px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        let arr = [...certificates];
                        arr[index].title = e.target.value;
                        setCertificates(arr);
                      }}
                    />{" "}
                  </div>{" "}
                </>
              );
            })}{" "}
            <div className="flex items-center mt-[88px]">
              <div className="w-[218px] mr-8" />
              <Link href="/create-portfolio/certificate/createCertificate">
                <button
                  className="flex gap-1.5 items-center text-white font-bold bg-black rounded-full py-[13px] px-[22px]"
                  onClick={newCertificates}
                >
                  <img
                    src="/assets/icons/plus-white.svg"
                    alt="plus"
                    width="14"
                    height="14"
                  />
                  สร้างหน้าใหม่{" "}
                </button>{" "}
              </Link>{" "}
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

export default CreateCertificate;
