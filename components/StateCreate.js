import React from "react";

const StateCreate = ({ state }) => {
  const menu = [
    "เทมเพลต",
    "หน้าปก",
    "คำนำ",
    "สารบัญ",
    "ประวัติส่วนตัว",
    "ประวัติการศึกษา",
    "ผลงาน/กิจกรรม",
    "เกียรติบัตรที่ได้รับ",
    "ดาวน์โหลด",
  ];
  return (
    <div className="flex">
      {menu.map((item, index) => {
        return (
          <div className={`flex flex-col ${index > 0 ? `${index < menu.length-1 ? 'items-center':'grow items-start'}`:'grow items-end'}`}>
            <div className="flex items-center">
              {index > 0 && (
                <hr className={`border-[6px] w-[46px] ${index+1 <= state ? 'border-green-real':'border-gray-3' }`} />
              )}
              <div>
                {
                  index+1 < state ? (
                    <img src="assets/icons/check-green.svg" alt="icon-check-green" width="56" height="56" className="rounded-full" />
                  ) : (
                    <div
                  className={`flex justify-center items-center w-14 h-14 rounded-full ${
                    index + 1 == state
                      ? "bg-black font-bold text-white"
                      : index+1 > state && "bg-gray-3"
                  }`}
                >
                  {index + 1}
                </div>
                  )
                }
              </div>
              {index < menu.length - 1 && (
                <hr className={`border-[6px] w-[45px] ${index+1 < state ? 'border-green-real':'border-gray-3'}`} />
              )}
            </div>
            <div className="self-center mt-4">{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StateCreate;
