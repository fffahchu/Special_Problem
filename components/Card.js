import React from "react";

const Card = ({ item, type }) => {
    const nf = new Intl.NumberFormat('th-TH');
  return (
    <div>
      <img
        src={item.image}
        alt="activity-1"
        width="264"
        height="153"
        className="rounded-t-xl"
      />
      <div className="flex w-[264px] h-[247px] rounded-b-xl px-6 pt-[43px] pb-6 bg-green relative">
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full absolute -top-[28px] bg-white">
          <img
            src="../assets/logo.svg"
            alt="profile-activity"
            width="24"
            height="27"
          />
          <div className="text-[9px] font-semibold">
            <div>Com</div>
            <div className="text-gray-2">Port</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <div className=" text-[17px] font-semibold">{item.title}</div>
            <div className="mt-[21px] text-xs">{item.content}</div>
          </div>
          <div className="flex justify-between">
            {type === "activity" ? (
              <div className="flex items-center gap-1">
                <img
                  src="../assets/icons/clock-red.svg"
                  alt="icon-clock-red"
                  width="18"
                  height="18"
                />
                <div className="text-[15px] text-red">
                  อีก {item.expire_date} วัน
                </div>
              </div>
            ) : type === "article" ? (
              <div className="flex items-center gap-1">
                <img
                  src="assets/icons/eye-gray.svg"
                  alt="icon-eye"
                  width="18"
                  height="18"
                />
                <div className="text-[15px] text-gray-2">{nf.format(item.views)}</div>
              </div>
            ) : (
              type === "course" && (
                <div className="flex items-center gap-1">
                  <img
                    src="assets/icons/person.svg"
                    alt="icon-person"
                    width="18"
                    height="18"
                  />
                  <div className="text-[15px] text-gray-2">{nf.format(item.persons)}</div>
                </div>
              )
            )}
            <button className="py-2 px-6 rounded-full border-[1px]">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
