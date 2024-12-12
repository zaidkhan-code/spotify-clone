import { useNavigate } from "react-router-dom";
import "./albumitem.css";
import React from "react";

function Albumitem({ image, name, desc, id }) {
  const navigate = useNavigate();
  return (
    <div className="album-main" onClick={() => navigate(`/Album/${id}`)}>
      <img className="image" src={image} alt="" />
      <h3> {name}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
}

export default Albumitem;
