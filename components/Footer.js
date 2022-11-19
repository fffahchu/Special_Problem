import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 gap-10 bg-green px-[104px] pt-[55px] pb-[60px]">
      <div className="flex flex-col gap-[15px] col-span-2">
        <img src="/assets/logo.svg" alt="logo-footer" width="48" height="48" />
        <div className="text-sm">&#169; ComPort 2022</div>
      </div>
      <div className="flex flex-col gap-4 font-semibold col-span-2">
        <div>หน้าหลัก</div>
        <div>ข่าวประชาสัมพันธ์</div>
        <div>แนะนำคณะ</div>
        <div>คลังความรู้</div>
        <div>ติดต่อเรา</div>
        <div>แผนผังเว็บไซต์</div>
      </div>
      <div className="flex flex-col gap-4 font-semibold col-span-3">
        <div>ตัวอย่างแฟ้มสะสมผลงาน</div>
        <div>สร้างแฟ้มสะสมผลงานของฉัน</div>
        <div>ผลงานของฉัน</div>
        <div>ร่วมงานกับเรา</div>
        <div>ทำไมต้อง ComPort?</div>
        <div>ข้อเสนอแนะ/ข้อร้องเรียน</div>
      </div>
      <div className="flex flex-col gap-4 font-semibold col-span-2">
        <div>เกี่ยวกับเรา</div>
        <div>ข้อกำหนดและเงื่อนไข</div>
        <div>นโยบายความเป็นส่วนตัว</div>
        <div>คำถามที่พบบ่อย</div>
      </div>
      <div className=" col-span-3">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">ติดต่อเรา</div>
          <div>โทรศัพท์ +668 4940 4303</div>
          <div>gauravgupta@comport.com</div>
        </div>
        <div className="flex flex-col gap-4 mt-[32px]">
          <div className="text-xl font-semibold">ติดตามเรา</div>
          <div className="flex gap-2">
            <img
              src="/assets/icons/line.svg"
              alt="line"
              width="18"
              height="18"
            />
            <div>Line</div>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/icons/facebook.svg"
              alt="line"
              width="18"
              height="18"
            />
            <div>Facebook</div>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/icons/instagram.svg"
              alt="line"
              width="18"
              height="18"
            />
            <div>Instagram</div>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/icons/youtube.svg"
              alt="line"
              width="18"
              height="18"
            />
            <div>Youtube</div>
          </div>
          <div className="flex gap-2">
            <img
              src="/assets/icons/twitter.svg"
              alt="line"
              width="18"
              height="18"
            />
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
