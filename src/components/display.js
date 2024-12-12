import React, { useEffect, useRef } from "react";
import "./display.css";
import DisplayHome from "./display-home";
import { Routes, Route, useLocation } from "react-router-dom";
import Album from "./album";
import { albumsData } from "../assets/assets";
function Display() {
  const rewf = useRef();
  const uniform = useLocation();
  console.log(uniform, "slfdmslfm");
  const form = uniform.pathname.includes("Album");
  const id = form ? uniform.pathname.slice(-1) : "";
  const background1 = albumsData[Number(id)].bgColor;
  console.log(background1);
  console.log(rewf, "zaikha");

  useEffect(() => {
    if (form) {
      rewf.current.style.background = `linear-gradient(${background1},#121212)`;
    } else {
      rewf.current.style.background = "#121212";
    }
  });
  return (
    <div className="display" ref={rewf}>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/Album/:id" element={<Album />} />
      </Routes>{" "}
    </div>
  );
}

export default Display;
