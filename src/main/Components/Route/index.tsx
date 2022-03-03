import { Route, Routes } from "react-router-dom";
import React from "react";
import Countries from "../../Pages/Countries";
import HomePage from "../../Pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<Countries />} />
    </Routes>
  );
}
