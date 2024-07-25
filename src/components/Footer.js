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
        height: "auto",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "2rem 0rem",
          }}
        >
          <div style={{ textAlign: "left", padding: "1rem" }}>
            <p>
              Phone: +91 86054 10290 <br></br>
              Email: Fashwind@theMail.com<br></br>
              Address:1234 Street Name City, AA 99999
            </p>
          </div>
          <div style={{ textAlign: "right", padding: "1rem" }}>
            <p>
              About Us <br></br>
              Services <br></br>
              Get In Touch
            </p>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <p>
            <br></br>
          </p>
          <p>
            <br></br>
          </p>
          <p>© Copyright 2018 FashWind - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
