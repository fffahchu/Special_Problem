import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-28 sm:pt-36 pb-5 md:pt-36 lg:pt-28 bg-[#fff] pb-10">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
