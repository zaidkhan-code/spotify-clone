import React, { createContext, useContext, useRef, useState } from "react";
import { songsData } from "../../assets/assets";
export const mainContext = createContext();
function Playercontext(props) {
  const audioref = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minutes: 0,
    },
    totalTime: {
      second: 0,
      minutes: 0,
    },
  });
  const play = () => {
    audioref.current.play();
    setPlayStatus(true);
  };
  const pause = () => {
    audioref.current.pause();
    setPlayStatus(false);
  };
  const contextValue = {
    audioref,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    pause,
    play,
  };
  return (
    <mainContext.Provider value={contextValue}>
      {props.children}
    </mainContext.Provider>
  );
}

export default Playercontext;
