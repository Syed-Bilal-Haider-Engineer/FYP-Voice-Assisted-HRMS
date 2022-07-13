import React from "react";
import Home from "./Home";
import FaqAI from './Faq/Faqapp';
import Category from "./Category";
import Joblist from "./Joblist";
import Applyjob from "./Works";
function Main() {
  return (
    <>
      <Home />
      <Category />
      <Joblist />
      <Applyjob />
      <FaqAI/>
    </>
  );
}

export default Main;
