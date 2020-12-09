import React from "react"

export default () => (
  <div
    style={{
      paddingLeft: "10vw",
      paddingRight: "10vw",
      top: "10vh",
      position: "relative",
    }}
  >
    <h1
      style={{
        color: "white",
        fontSize: "3em",
        position: "relative",
        textTransform: "uppercase",
      }}
    >
      WE ARE 3OFTHEM! <br />
      WE CREATE PROFESSIONAL <br />
      WEBSITES AND APP <br />
      WITH THE TECHNOLOGY <br />
      TWIST!
    </h1>
    <div
      style={{
        position: "absolute",
        width: "400px",
        height: "65px",
        border: "4px solid #FFFFFF",
        boxSizing: "border-box",
        borderRadius: "57.5px",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        fontSize: "1.8em",
      }}
    >
      LET’S WORK TOGETHER!
    </div>
  </div>
)
