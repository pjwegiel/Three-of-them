import React from "react"

import Invoys from "../assets/invoys.png"
import PureInsight from "../assets/pureInsight.png"
import Stars from "../assets/stars.png"
import Something from "../assets/something.png"
import ArrowLeft from "../assets/arrowLeft.png"
// import ArrowRight from "../assets/arrowRight.png"

export default () => (
  <React.Fragment>
    <div
      style={{
        height: "100vh",
        width: "100vw",
        top: "120vh",
        color: "white",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2em",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "600",
        }}
      >
        With our expertise you will raise your <br />
        visibility and converation rate!
      </h2>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "10em",
              fontWeight: "200",
              margin: "0",
              padding: "0",
            }}
          >
            35%
          </h1>
          <p
            style={{
              margin: "0",
              padding: "0",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "1.25em",
            }}
          >
            Increase in visibility
          </p>
        </div>
        <div>
          <h1
            style={{
              fontSize: "10em",
              fontWeight: "200",
              margin: "0",
              padding: "0",
            }}
          >
            55%
          </h1>
          <p
            style={{
              margin: "0",
              padding: "0",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "1.25em",
            }}
          >
            INCREASE IN CONVERTION RATE
          </p>
        </div>
        <div>
          <h1
            style={{
              fontSize: "10em",
              fontWeight: "200",
              margin: "0",
              padding: "0",
            }}
          >
            145%
          </h1>
          <p
            style={{
              margin: "0",
              padding: "0",
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "1.25em",
            }}
          >
            INCREASE IN reveniue
          </p>
        </div>
      </div>
      <div style={{ padding: "5vh", paddingBottom: "0" }}>
        <h2
          style={{
            fontSize: "2em",
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "500",
          }}
        >
          Our clients say
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80vw",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${ArrowLeft})`,
              height: "15em",
              width: "5em",
              margin: "auto 0",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div>
            <div
              style={{
                backgroundImage: `url(${Invoys})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "5em",
                backgroundPosition: "center",
                width: "10em",
              }}
            />
            <p style={{ fontWeight: "200", fontSize: "1em" }}>
              “3ofthem did a fantastic job designing <br /> a high-end website
              for our brand. Even <br /> with minimal supervision, they took
              <br /> the brief and delivered excellently. We <br /> would
              definitely recommend them to <br /> anyone looking for a creative,
              flexible, <br /> and reliable team.”
            </p>
            <h3
              style={{
                fontSize: "2em",
                paddingTop: "0",
                marginTop: "0",
                marginBottom: "0.5em",
              }}
            >
              MAREK GAJ | CEO
            </h3>
            <div
              style={{
                backgroundImage: `url(${Stars})`,
                height: "2.5em",
                width: "12em",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url(${PureInsight})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                height: "5em",
                backgroundPosition: "center",
                width: "10em",
              }}
            />
            <p style={{ fontWeight: "200", fontSize: "1em" }}>
              “3ofthem did a fantastic job designing <br /> a high-end website
              for our brand. Even <br /> with minimal supervision, they took
              <br /> the brief and delivered excellently. We <br /> would
              definitely recommend them to <br /> anyone looking for a creative,
              flexible, <br /> and reliable team.”
            </p>
            <h3
              style={{
                fontSize: "2em",
                paddingTop: "0",
                marginTop: "0",
                marginBottom: "0.5em",
              }}
            >
              MAREK GAJ | CEO
            </h3>
            <div
              style={{
                backgroundImage: `url(${Stars})`,
                height: "2.5em",
                width: "12em",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
          <div
            style={{
              backgroundImage: `url(${ArrowLeft})`,
              height: "15em",
              transform: "rotate(180deg)",
              width: "5em",
              margin: "auto 0",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
      <div style={{ margin: "0 0" }}>
        <div
          style={{
            backgroundImage: `url(${Something})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            height: "30em",
            width: "15em",
            margin: "0 auto",
          }}
        />
      </div>
    </div>

    <div style={{ width: "100%", margin: "0 auto" }}>
      <h2
        style={{
          color: "white",
          top: "232vh",
          position: "relative",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        Our projects
      </h2>
    </div>
  </React.Fragment>
)
