/* eslint-disable */
import React  from "react";
import { Box , Paper , Grid , TextField , Button , Tooltip , Typography } from "@mui/material";
import LoginImage from "../../Assets/login5.jpg";
import Register from "./Register";
import { useState } from "react";
import config from "./../../config/config"

import AuthServiceAppWrite from "../../appWrite/AuthService";

// khanshahima4@gmail.com , Shahima@1

function Login() {

///////////////////////// state management  /////////////////////

  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const [loginContent , setLoginContent] = useState({
    email:"",
    password : ""
  })
  const [registerContent , setRegisterContent] = useState({
    name: "",
    phoneNumber:"",
    email:"",
    password : ""
  })
  const settingLoginFromContent = (event) => {
    setLoginContent((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  
  const settingRegisterFromContent = (event) => {
    setRegisterContent((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  // console.log("🚀 ~ Login ~ loginContent:", loginContent , "Register conatent " , registerContent) 
  // console.log("🚀 ~ config:" , config ) 
  
  const toggelPage = () => setLoginOrRegister((prev) => !prev);

  ////////////////////////   login APi call    ////////////////////////////////
  
  
  const loginRegisterService = (type) => {
    console.log("1 login from front end started  . . . . .");

    const authService = new AuthServiceAppWrite();
    console.log("🚀 ~ auth service instantiateds :", authService);

    //////////// login //////////
    switch (type) {

      case "login":

        const loginInstance = async () => {
          console.log("🚀 ~ 2  login instance :", );
          try {
            const sessionLogin = await authService.loginIntoAccount(loginContent);
            console.log("🚀 ~ 3 ~ sessionLogin:", sessionLogin)
            if (sessionLogin) {
              const userData = await authService.getCurrentUser();
              if (userData) {
                console.log("🚀 ~ 4 ~ userData:", userData);
              }
            }
          } catch (error) {
            console.log("🚀 ~ ERRRORORORORO ~ error:", error);
            throw error;
          }
        };

        loginInstance()
        break;
        case "reg":
          const registerInstance = async () => {
          console.log("🚀 ~ registerInstance ~ registerInstance:", type , registerContent)
          try {
                const newAccount =  await authService.createAccount(registerContent);
                 console.log("🚀 ~ registerService ~ newAccount:", newAccount ,registerContent)     
              } catch (error) {
                console.log("🚀 ~ registerInstance ~ error:", error)
              }
        }
        registerInstance();
        break;
      default:
        break;
    }
    
   
  };
 




  ////////////////////////////////////////////// Jsx ///////////////////////////////////
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid item sx={{}} container>
        <Grid item xs={12} md={8}>
          <img style={{ height: "100%", width: "100%" }} src={LoginImage} />
        </Grid>
        <Grid
         item
          xs={12}
          md={4}
          sx={{
            background: "#EDDFD0",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {loginOrRegister ? (
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
                 onChange={settingLoginFromContent}
                  sx={{
                    paddingBottom: "20px",
                    color: "#ede0d0",
                    width: "80%",
                    ". &MuiFormLabel-root-MuiInputLabel-root": {
                      color: "#ede0d0",
                    },
                  }}
                  name="email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                 onChange={settingLoginFromContent}
                  sx={{
                    paddingBottom: "10px",
                    color: "#ede0d0",
                    width: "80%",
                    ". &MuiFormLabel-root-MuiInputLabel-root": {
                      color: "#ede0d0",
                    },
                  }}
                  // type="password"
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
                  onClick={() => loginRegisterService("login")}
                  sx={{
                    marginTop: "80px",
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
                    paddingTop: "20px",
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
              }}>New to FashWind , Create Account ?</Button>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          ) : (
            <Register toggelPage={toggelPage} settingRegisterFromContent={settingRegisterFromContent} loginRegisterService={loginRegisterService} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
