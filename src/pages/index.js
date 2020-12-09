import React from "react"
import "./index.css"

import Background1 from "../assets/background1.png"

import Navbar from "./Navbar"
import FirstPage from "./FirstPage"
import Socials from "./Socials"

export default () => (
  <React.Fragment>
    <div
      style={{
        height: "300vh",
        width: "100vw",
        backgroundImage: `url(${Background1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <FirstPage />
      <Socials />
    </div>
  </React.Fragment>
)
