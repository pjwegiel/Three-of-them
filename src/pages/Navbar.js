import React from "react"
import Logo from "../assets/logo.png"
import ContactUs from "../assets/contactButton.png"
import More from "../assets/moreButton.png"

export default () => (
  <div
    style={{
      width: "100%",
      height: "15vh",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: "contain",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        left: "7vw",
        top: "2vw",
        zIndex: "20",
        height: "10em",
        width: "10em",
      }}
    />
    <div
      style={{
        backgroundImage: `url(${ContactUs})`,
        backgroundSize: "contain",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        right: "10vw",
        top: "2vw",
        zIndex: "20",
        height: "6em",
        width: "10em",
      }}
    />
    <div
      style={{
        backgroundImage: `url(${More})`,
        backgroundSize: "contain",
        position: "absolute",
        backgroundRepeat: "no-repeat",
        right: "3vw",
        top: "2vw",
        zIndex: "20",
        height: "2.5em",
        width: "2.5em",
      }}
    />
  </div>
)
