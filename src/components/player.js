import React, { useContext } from "react";
import "./player.css";
import { assets, songsData } from "../assets/assets";
import { mainContext } from "./context/context";
function Player() {
  const { seekBar, seekBg, playStatus, play, pause } = useContext(mainContext);

  return (
    <div className="player">
      <div className="player-1">
        <img src={songsData[0].image} alt="" />
        <div className="des">
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className="center">
        <div className="center-1">
          <img src={assets.shuffle_icon} alt="" />
          <img src={assets.prev_icon} alt="" />
          {playStatus ? (
            <img onClick={pause} src={assets.pause_icon} alt="" />
          ) : (
            <img onClick={play} src={assets.play_icon} alt="" />
          )}
          <img src={assets.next_icon} alt="" />
          <img src={assets.loop_icon} alt="" />
        </div>
        <div className="center-2">
          <p>1:6</p>
          <div ref={seekBg} className="line-controle">
            {" "}
            <hr ref={seekBar} className="line" />
          </div>
          <p>1:7</p>
        </div>
      </div>
      <div className="menu">
        <img src={assets.play_icon} alt="" />
        <img src={assets.mic_icon} alt="" />
        <img src={assets.queue_icon} alt="" />
        <img src={assets.speaker_icon} alt="" />
        <img src={assets.volume_icon} alt="" />
        <div className="volume"></div>
        <img src={assets.mini_player_icon} alt="" />
        <img src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
}

export default Player;
