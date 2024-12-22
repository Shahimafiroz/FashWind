/* eslint-disable */
import React from "react";
import HomeImage from "../Assets/home1.png";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Divider from "@mui/material/Divider";
import Images from "../Assets/images";
import config from "../config/config";
import Button from "@mui/material/Button";
import AuthServiceAppWrite from "./../appWrite/AuthService";

function Home() {
  console.log("🚀 ~ Button:", AuthServiceAppWrite);

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "1rem",
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
        <div style={{ margin: "-18px" }}>
          <img
            style={{ width: "500px", objectFit: "contain", height: "97%" }}
            src={HomeImage}
            alt="err"
          />
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
      {/* /////////// */}
      <div
        style={{
          background: "#1e1305",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/argyle.png")',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "5% 20% 0% 20%", fontFamily: "" }}>
          <p
            style={{
              fontSize: "20px",
              color: "#e6a774",
              fontFamily: "Cormorant Upright",
              padding: "60px 20px",
              textAlign: "center",
            }}
          >
            Indulge in timeless sophistication with our tailored blazer and silk
            blouse. The perfect ensemble for a day at the office or a night on
            the town.Command attention in our impeccably tailored suit. Crafted
            from luxurious fabrics and designed for the modern gentleman, this
            ensemble effortlessly transitions from boardroom to evening events.
            Experience the epitome of sophistication and style.
          </p>
          <Divider sx={{ background: "#eddfd0", margin: "8px 0rem" }} />
          <h1
            style={{
              fontFamily: "Sevillana",
              letterSpacing: "2px",
              fontSize: "50px",
              color: "#EDDFD0",
              textUnderlineOffset: true,
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            Classic Elegance
          </h1>
        </div>
        <div
          style={{
            display: "block",
            margin: "1% 10%",
            color: "#E6A774",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: 750,
              overflowY: "scroll",
            }}
          >
            <ImageList variant="masonry" cols={4} gap={8}>
              {Images.map((item) => (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{ fontFamily: "Sevillana" }}
                    position="below"
                    title={item.author}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>
      {/* /////////// */}
      <div>
        <div
          style={{
            margin: "5% 20% 0% 20%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Cormorant Upright",
              letterSpacing: "2px",
              fontSize: "40px",
              color: "#1f170d",
              textUnderlineOffset: true,
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "20px",
            }}
          >
            The Art of Attire:<br></br>{" "}
            <span style={{ color: "#1a4941", fontSize: "30px" }}>
              A Dialogue on Dress and Identity
            </span>
          </h1>
          <Divider
            sx={{ background: "#B15306", margin: "8px 0rem", padding: "1px" }}
          />
          <p
            style={{
              fontSize: "25px",
              color: "#7A583C",
              fontWeight: "bolder",
              fontFamily: "Cormorant Upright",
              padding: "30px 20px",
              textAlign: "center",
            }}
          >
            Indeed, attire is more than mere adornment; it is a silent language
            that precedes verbal communication. Our sartorial choices are a
            reflection of our self-perception, and consequently, how we are
            perceived by the world.Quite so. Clothing is a form of nonverbal
            expression, a visual statement about one's identity and aspirations.
            It is an art form that requires careful curation.
          </p>
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
              background: "#1A4941",
              width: "30%",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            Catalogue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
