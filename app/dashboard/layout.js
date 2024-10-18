import React from "react";
import AssignmentPage from "./@assignment/page";

const DashboardLayout = ({ children, AssignmentPage, Information, Blogs }) => {
  return (
    <div>
      {children}
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {AssignmentPage}
        {Information}
        {Blogs}
      </div>
    </div>
  );
};

export default DashboardLayout;
