import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
function Footer() {
  return (
    <div
      style={{
        // flex: 1,
        marginBottom: "0px",
        background: "#1e1305",
        height: "200px",
        width: "100%",
        color: "#EDE0D0",
        fontFamily: "Nanum Myeongjo",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ padding: "40px" }}>
              <InstagramIcon />
            </div>
            <div style={{ padding: "40px" }}>
              <TwitterIcon />
            </div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <div style={{ padding: "40px" }}>
                <FacebookIcon />
              </div>
              <div style={{ padding: "40px" }}>
                <PinterestIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1
            style={{
              fontFamily: "Sevillana",
              fontWeight: 300,
              letterSpacing: ".3rem",
              textAlign: "center",
            }}
          >
            FashWind
          </h1>
        </div>
        <div style={{ textAlign: "left", padding: "1rem" }}>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
