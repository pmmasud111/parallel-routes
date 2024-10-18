"use client";
import Link from "next/link"; // Fixed the import
import React from "react";

const AssignmentPage = () => {
  return (
    <div className="flex items-center justify-center border border-red-500 rounded-lg text-white grid-cols-1 grid-rows-1">
      <div className="flex items-center justify-center gap-2">
        <p>Assignment</p>
        <Link href="/dashboard">all</Link>
      </div>
    </div>
  );
};

export default AssignmentPage;
