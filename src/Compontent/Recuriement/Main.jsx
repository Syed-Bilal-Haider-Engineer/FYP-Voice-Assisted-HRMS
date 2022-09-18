import React from "react";
import Home from "./Home";
import Category from "./Category";
import Joblist from "./Joblist";
import Applyjob from "./Works";
import FaqApp from './Faq/Faqapp';
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
function Main() {
  return (
    <>
    <Header/>
      <Home />
      <Category />
      <Joblist />
      <Applyjob />
      <FaqApp/>
      <Footer/>
    </>
  );
}

export default Main;
