import React from "react";
import "./displayhome.css";
import Navbar from "./navbar";
import Albumitem from "./Albumitem";
import { albumsData, songsData } from "../assets/assets";
import Songdata from "./sonsdata";
import { useRef, useEffect } from "react";
function DisplayHome() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Perform actions with the container element here
      const container = document.querySelector(".container");

      let isMouseDown = false;
      let startX = 0;
      let scrollX = 0;

      container.addEventListener("mousedown", (event) => {
        isMouseDown = true;
        startX = event.clientX;
        scrollX = container.scrollLeft;
      });

      container.addEventListener("mousemove", (event) => {
        if (isMouseDown) {
          const deltaX = event.clientX - startX;
          container.scrollLeft = scrollX + deltaX;
        }
      });

      container.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
    }
  }, []);

  return (
    <div className="name">
      <Navbar />
      <div className="album">
        <h1> Featured Charts</h1>
        <div className="over-flow">
          {albumsData.map((item, index) => {
            return (
              <Albumitem
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
                key={index}
              />
            );
          })}
        </div>
        <h1 className="today">Today's biggest hits</h1>
        <div className="container" ref={containerRef}>
          {songsData.map((item, index) => {
            return (
              <Songdata
                name={item.name}
                desc={item.desc}
                image={item.image}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DisplayHome;
