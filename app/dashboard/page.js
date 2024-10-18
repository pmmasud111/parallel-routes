import React from "react";
import Information from "./@blogs/page";
import Assignment from "./@assignment/page";
import Blogs from "./@information/page";

const page = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-screen">
      <Information />
      <Assignment />
      <Blogs />
    </div>
  );
};

export default page;
