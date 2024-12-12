import "./songsdata.css"
import React from 'react'

function Songdata({name,image,desc,id}) {
  return (
    <div className="songs-data">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Songdata