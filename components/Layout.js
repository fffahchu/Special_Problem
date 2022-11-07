import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-[#fff] pb-10">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
