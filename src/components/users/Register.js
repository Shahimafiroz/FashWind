/* eslint-disable */
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginImage from "../../Assets/LoginImage.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";

function Register({ toggelPage , settingRegisterFromContent }) {
  return (
    <div
      style={{ justifyContent: "center", textAlign: "center", widht: "100%" }}
    >
      <Box>
        <Box>
          <p
            style={{
              fontFamily: "Sevillana",
              color: "#1E1305",
              fontSize: "30px",
              marginTop: "4rem",
            }}
          >
            FashWind
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontFamily: "Cormorant Upright",
              color: "#7c0000",
              fontSize: "20px",
              marginTop: "2rem",
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            Welcome To FashWind
          </p>
        </Box>
        <Box
          style={{
            fontFamily: "Cormorant Upright",
            color: "#ede0d0",
            fontSize: "10px",
            marginTop: "3rem",
            letterSpacing: 2,
            fontWeight: "bold",
            widht: "100%",
          }}
        >
          <TextField
            sx={{
              paddingBottom: "20px",
              color: "#ede0d0",
              width: "80%",
              ". &MuiFormLabel-root-MuiInputLabel-root": {
                color: "#ede0d0",
              },
            }}
            onChange={settingRegisterFromContent}
            name ="name"
            label="Name"
            variant="standard"
          />
          <TextField
            sx={{
              paddingBottom: "20px",
              color: "#ede0d0",
              width: "80%",
              ". &MuiFormLabel-root-MuiInputLabel-root": {
                color: "#ede0d0",
              },
            }}
            onChange={settingRegisterFromContent}
            name="phoneNumber"
            label="Phone Number"
            variant="standard"
          />
          <TextField
            sx={{
              paddingBottom: "20px",
              color: "#ede0d0",
              width: "80%",
              ". &MuiFormLabel-root-MuiInputLabel-root": {
                color: "#ede0d0",
              },
            }}
            onChange={settingRegisterFromContent}
            name="email"
            label="Email"
            variant="standard"
          />
          <TextField
            sx={{
              paddingBottom: "10px",
              color: "#ede0d0",
              width: "80%",
              ". &MuiFormLabel-root-MuiInputLabel-root": {
                color: "#ede0d0",
              },
            }}
            onChange={settingRegisterFromContent}
            name="password"
            label="Password"
            variant="standard"
          />
          <Box
            sx={{
              width: "90%",
              textAlign: "right",
              color: "#AF1212",
              fontWeight: "1000",
              fontSize: "15px",
            }}
          >
            <p>Forgot password ?</p>
          </Box>
          <Button
            sx={{
              marginTop: "30px",
              background: "#1A4941",
              width: "150px",
              fontFamily: "Cormorant Upright",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Sign In
          </Button>
          {/* <input type="text" id="fname" name="fname" placeholder='Email' style={{background: '#1a4941' ,border: 'none' ,borderBottom : '2px solid ##ede0d0' , color:'#ec6a0c' ,height:'20px' , widht:'15rem' , fontSize:'15px'}} /> */}
        </Box>
        <Box sx={{ widht: "90%", paddingTop: "1rem" }}>
          <Box
            onClick={toggelPage}
            sx={{
              fontFamily: "Cormorant Upright",
              width: "100%",
              textAlign: "center",
              color: "#AF1212",
              fontWeight: "1000",
              fontSize: "15px",
            }}
          >
            <Tooltip title="Register ?">
              <Button sx={{
                fontSize:"15px",
                fontFamily: "Cormorant Upright",
                textTransform: "capitalize",
                fontWeight:"bold",
                color :"#AF1212",
                "&:hover": {
                     background: "0, 0, 0, 0",
                      color: "#1A4941",
                    },
              }}>Back To login page</Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Register;
