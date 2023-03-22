import React from "react";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-25 bg-white backdrop-blur-lg"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex">
        <div className="flex-col">
          <div className="relative">
            <div className="bg-white w-[600px] h-[370px] shadow-lg rounded-lg">
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => {
                    onClose();
                  }}
                >
                  <img
                    src="../assets/icons/close-circle.svg"
                    alt="close-circle"
                  />
                </button>
              </div>

              <div className="font-semibold text-[23px] pt-[50px] pl-[250px]">
                สร้างอัลบัม
              </div>
              <div className="pt-[10px] pl-[255px]">
                <img
                  className="w-[100px] h-[100px]"
                  src="../assets/icons/album.svg"
                  alt="album"
                ></img>
              </div>

              <label
                for="album_name"
                className="pl-[132px] w-[338px] h-[49px] text-lg font-bold text-start"
              ></label>
              <input
                className="mt-[20px] border rounded-2xl w-[338px] h-[49px] py-[6px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="album_name"
                type="text"
                placeholder="เช่น กิจกรรม 2/2565"
              />

              <div className="flex gap-4 absolute bottom-2 right-2">
                <div>
                  <button
                    type="submit"
                    className="w-[101px] h-[42px] rounded-2xl shadow-md transition ease-in-out  bg-[#d4d4d4] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFCA61] duration-300"
                  >
                    บันทึก
                  </button>
                </div>
                <div>
                  <button
                    type="cancle"
                    className="w-[101px] h-[42px] rounded-2xl shadow-md transition ease-in-out  bg-[#d4d4d4] hover:-translate-y-1 hover:scale-110 hover:bg-[#FFCA61] duration-300"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;