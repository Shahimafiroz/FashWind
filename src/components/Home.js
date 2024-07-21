import React from "react";
import HomeImage from "../Assets/home1.png";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Divider from "@mui/material/Divider";
import images from "../Assets/homegall/a.jpg";
import Button from "@mui/material/Button";

const itemData = [
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588139621/fa8b4762-bd51-4406-9e7a-5ffa2cf5bc5f.jpeg?auto=compress,format&format=webp",
    title: "Bed",
    author: "swabdesign",
    id: 1,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588145874/6d51be7d-0556-4798-b63c-a06049b8ae59.jpeg?auto=compress,format&format=webp",
    title: "Books",
    author: "Pavel Nekoranec",
    id: 2,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588152375/09a42983-ea3d-403a-ad5c-9abd9bf7299f.jpeg?auto=compress,format&format=webp",
    title: "Sink",
    author: "Charles Deluvio",
    id: 3,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588445799/4f783e8c-c2ac-49a1-8cc5-0a9926ef1f66.jpeg?auto=compress,format&format=webp",
    title: "Sink",
    author: "Charles Deluvio",
    id: 4,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588277427/751a9367-56c4-4d5d-bbdf-e91a1d2139c2.jpeg?auto=compress,format&format=webp",
    title: "Blinds",
    author: "Darren Richardson",
    id: 5,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588200460/8178d1a7-649d-4d1a-8366-6165c89d53e3.jpeg?auto=compress,format&format=webp",
    title: "Kitchen",
    author: "Christian Mackie",
    id: 6,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588246033/1579f31b-2d86-4ef3-baa4-0829c4aa48fc.jpeg?auto=compress,format&format=webp",
    title: "Chairs",
    author: "Taylor Simpson",
    id: 7,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588267169/8db32008-6ebc-48d9-9882-7efbbfe18b50.jpeg?auto=compress,format&format=webp",
    title: "Laptop",
    author: "Ben Kolde",
    id: 8,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588293735/8a013f99-7290-4e9f-8ee0-d00b29a536ac.jpeg?auto=compress,format&format=webp",
    title: "Doors",
    author: "Philipp Berndt",
    id: 9,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588371525/3cf93520-b99c-495e-a5b2-6c4cdefdb438.jpeg?auto=compress,format&format=webp",
    title: "Coffee",
    author: "Jen P.",
    id: 10,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588391696/f7bd9a20-3008-4028-bb64-08a435f681dc.jpeg?auto=compress,format&format=webp",
    title: "Storage",
    author: "Douglas Sheppard",
    id: 11,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588206933/61533875-311f-4e10-9954-ecfaf490c51a.jpeg?auto=compress,format&format=webp",
    title: "Candle",
    author: "Fi Bell",
    id: 12,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588508691/a3895250-f2e6-4eff-8aa7-7e0aee480047.jpeg?auto=compress,format&format=webp",
    title: "Coffee table",
    author: "Hutomo Abrianto",
    id: 13,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588489284/eaae7aa2-9aa3-44a3-84e3-a3c8cd944d84.jpeg?auto=compress,format&format=webp",
    title: "Kitchen",
    author: "Christian Mackie",
    id: 14,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588402933/4b8ae8e9-2207-4f15-8726-016b42f975b9.jpeg?auto=compress,format&format=webp",
    title: "Coffee table",
    author: "Hutomo Abrianto",
    id: 15,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588235967/cb1ca518-1600-43bf-bff7-5a572287fe5c.jpeg?auto=compress,format&format=webp",
    title: "Coffee table",
    author: "Hutomo Abrianto",
    id: 16,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588258456/7d79d8c0-47b2-4cdf-aca4-cfb23f4403f4.jpeg?auto=compress,format&format=webp",
    title: "Coffee",
    author: "Jen P.",
    id: 17,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588200460/8178d1a7-649d-4d1a-8366-6165c89d53e3.jpeg?auto=compress,format&format=webp",
    title: "Kitchen",
    author: "Christian Mackie",
    id: 18,
  },
  {
    img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721588416552/8317c4d5-019a-41e2-a260-7c582717040d.jpeg?auto=compress,format&format=webp",
    title: "Bed",
    author: "swabdesign",
    id: 19,
  },
];

function Home() {
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
            style={{ width: "500px", objectFit: "contain", height: "100%" }}
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
              {itemData.map((item) => (
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
