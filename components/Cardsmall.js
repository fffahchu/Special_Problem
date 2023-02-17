import React from "react";

const Cardsmall = ({ item, type }) => {
  return (
    <div>
      <img
        src={item.image}
        alt="activity-1"
        width="250"
        height="153"
        className="rounded-t-xl"
      />
      <div className="flex w-[250px] h-[200px] rounded-b-xl px-2 pt-[40px] pb-2 bg-white relative gap-10">
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
                <div className="text-[12px] text-red">
                  อีก {item.expire_date} วัน
                </div>
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
                  <div className="text-[15px] text-gray-2">
                    {nf.format(item.persons)}
                  </div>
                </div>
              )
            )}
            <button className="py-1 px-2 rounded-full border-[1px]">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsmall;
