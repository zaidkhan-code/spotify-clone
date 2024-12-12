import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Display from "./components/display";
import Player from "./components/player";
import { mainContext } from "./components/context/context";
function App() {
  const { audioref, track } = useContext(mainContext);
  return (
    <div className="maindev">
      <div className="div-child">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioref} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
