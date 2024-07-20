import React from "react";
import HomeImage from "../Assets/home1.png";
import sweat from "../Assets/homegall/sweater.jpg";
import { Height } from "@mui/icons-material";

function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "Nanum Pen Script",
          fontSize: "x-Large",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "-8px" }}>
          <img style={{ width: "500px" }} src={HomeImage} alt="err" />
        </div>

        <div
          style={{
            position: "absolute",
            top: "60%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "normal",
              padding: "0px",
              color: "#F1720C",
            }}
          >
            FashWind
          </h1>
          <p
            style={{
              fontFamily: "Sevillana",
              letterSpacing: "2px",
              fontSize: "30px",
              color: "#E7A774",
            }}
          >
            <span style={{ color: "#1E1305" }}> People </span> Will stare at you
            , make it worth their{" "}
            <span style={{ color: "#1E1305" }}>While</span>
          </p>
        </div>
      </div>
      <div style={{ position: "" }}>
        {/* <div>
          <img src={sweat} sx={{ width: "90%", Height: "90%" }}></img>
        </div> */}
        <div></div>
        <div></div>
      </div>

      {/* <div style={{ position: "relative" }}>
        <div>
          <img style={{ width: "30%" }} src={HomeImage} alt="err"></img>
        </div>
        <div style={{ position: "absolute" }}>
          <h1
            style={{
              fontSize: "120px",
              fontWeight: "normal",
              padding: "0px",
            }}
          >
            FashWind
          </h1>
          <p
            style={{
              fontFamily: "Sevillana",
              letterSpacing: "2px",
              fontSize: "30px",
            }}
          >
            People Will stare at you , make it worth their While
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
