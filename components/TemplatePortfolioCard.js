import React, { useState } from "react";

const TemplatePortfolioCard = ({ item = {}, onSelect }) => {
  const [selectColor, setSelectColor] = useState();
  return (
    <div>
      <img
        src={item.image}
        alt={item.title}
        height="500"
        className="rounded-[6px] cursor-pointer"
        onClick={onSelect}
      />
      <div className="mt-2 border-[1px] border-gray-4 rounded-[6px] px-[18px] pt-[14px] pb-[22px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#17A095] cursor-pointer ${
                selectColor == 1 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(1)}
            ></div>
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#3176E0] cursor-pointer ${
                selectColor == 2 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(2)}
            ></div>
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#D0021B] cursor-pointer ${
                selectColor == 3 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(3)}
            ></div>
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#303030] cursor-pointer ${
                selectColor == 4 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(4)}
            ></div>
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#9A9A9A] cursor-pointer ${
                selectColor == 5 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(5)}
            ></div>
            <div
              className={`w-[18px] h-[18px] rounded-full bg-[#6E5750] cursor-pointer ${
                selectColor == 6 && "border-2 border-black"
              }`}
              onClick={() => setSelectColor(6)}
            ></div>
          </div>
          <button className="flex gap-1.5 px-2.5 pt-1.5 pb-2 bg-gray-4 rounded-[6px]">
            <img
              src="assets/icons/eye.svg"
              alt="icon-eye"
              width="18"
              height="18"
            />
            <div className="text-sm">ดูตัวอย่าง</div>
          </button>
        </div>
        <div className="mt-[9px] text-lg font-bold">{item.title}</div>
        <div className="mt-4 text-lg">{item.desc}</div>
      </div>
    </div>
  );
};

export default TemplatePortfolioCard;
