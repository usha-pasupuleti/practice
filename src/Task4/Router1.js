import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllStudents from "./AllStudents";
import Student from "./Student";
// import NotFound from "../NotFound";
import Home from './Home';
const StudentRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllStudents />} />
        <Route path="/Students" element={<AllStudents />} />
        <Route path="/Student/:userId" element={<Student />} />
        <Route path="Students/:userId" element={<Student />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default StudentRouter;
