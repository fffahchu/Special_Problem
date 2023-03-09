import React from "react";
const Modal = ({ setOpenModal }) => {
  return (
    <div className="flex justify-center bg-white w-[834px] h-[488px]">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>สร้างอัลบัม</h1>
        </div>
        <div>
          <img
            className="w-[100px] h-[100px]"
            src="../assets/image/photo.png"
          ></img>
        </div>
        <div className="w-[338px] h-[49px] border rounded-[40px]">
          <input id="file_name" type="text" placeholder="ตั้งชื่ออัลบัม" />
        </div>
        <div className="footer">
          <button
            className="bg-[#FFCA61] w-[86px] h-[36px] rounded shadow shadow-m"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            บันทึก
          </button>
          <button className="bg-[#D9D9D9] w-[86px] h-[36px] rounded shadow shadow-m">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
