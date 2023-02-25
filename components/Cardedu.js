import React from "react";

const Cardedu = ({ item, type }) => {
  return (
    <div>
      <img
        src={item.image}
        alt="activity-1"
        width="260"
        height="150"
        className="rounded-t-xl"
      />
      <div className="flex w-[260px] h-[150px] pt-[18px] bg-yellow gap-10">
        <div className="flex flex-col justify-between">
          <div>
            <div className="px-5 text-[14px] font-bold">{item.title}</div>
            <div className="px-5 mt-[4px] pb-16 text-xs">{item.content}</div>
            <div className="inline-block">
              <button className="justify-center bg-[#fef9c3] w-[260px] h-[33px] text-[15px] transition hover:font-bold hover:bg-[#fb923c] duration-300">
                เข้าเรียน
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            {type === "course" && (
              <div className="relative">
                <div className="flex items-center"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardedu;
