import React from "react"

import Instagram from "../assets/Instagram.png"
import Facebook from "../assets/Facebook.png"
import YouTube from "../assets/YouTube.png"
import Dribble from "../assets/Dribble.png"
import Mail from "../assets/Mail.png"

export default () => (
  <div
    style={{
      right: "3vw",
      top: "25vh",
      position: "absolute",
      width: "2.5em",
      height: "20em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <div
      onClick={() => console.log("dupa")}
      style={{
        height: "2em",
        width: "2.5em",
        backgroundImage: `url(${Instagram})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div
      style={{
        height: "2em",
        width: "2.5em",
        backgroundImage: `url(${Facebook})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div
      style={{
        height: "2em",
        width: "2.5em",
        backgroundImage: `url(${YouTube})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div
      style={{
        height: "2em",
        width: "2.5em",
        backgroundImage: `url(${Dribble})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
    <div
      style={{
        height: "2em",
        width: "2.5em",
        backgroundImage: `url(${Mail})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  </div>
)
