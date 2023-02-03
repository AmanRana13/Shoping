import React from "react";
import { Route, Routes } from "react-router-dom";
import Outlets from "../Layout";
import Home from "../Screens/Home";
import OurMenu from "../Screens/OurMenu";

const Private = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlets />}>
        <Route path="/" element={<Home />} />
        <Route path="/ourmenu" element={<OurMenu />} />
      </Route>
    </Routes>
  );
};

export default Private;
