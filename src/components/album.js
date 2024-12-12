import React from "react";
import Navbar from "./navbar";
import "./album.css";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
function Album() {
  const { id } = useParams();
  const album = albumsData[id];
  console.log(album);
  return (
    <>
      <Navbar />
      <div className="main-centre">
        <div className="album-head">
          <img src={album.image} alt="" />
          <div className="head-2">
            <p className="playlist">playlist</p>
            <h1>{album.name}</h1>
            <h4>{album.desc}</h4>
            <div className="image">
              <div className="spotipy">
                <img src={assets.spotify_logo} alt="" /> <p>Spotipy</p>
              </div>
              <b> -13243 likes </b> <b>-50 songs about 2 hr 30 minutes</b>
            </div>
          </div>
        </div>
        <div className="manyitem">
          <div className="one">#</div>
          <div className="tiltle">Title</div>
          <div className="album3">Album</div>
          <div className="Dateadded">Date Added</div>
          <img src={assets.clock_icon} alt="" />
        </div>
        {songsData.map((item, index) => {
          return (
            <div className="onemain">
              <b className="one1">{index + 1}</b>
              <div className="one2">
                <img src={item.image} alt="" />
                <div>{item.name}</div>
              </div>
              <div className="one3">5 daus ago</div>
              <div className="one4">{item.duration}</div>
              <div className="watch">fdsfed</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Album;
