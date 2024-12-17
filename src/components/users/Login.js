/* eslint-disable */
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import LoginImage from '../../Assets/LoginImage.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function Login() {
  

  return (
    <div style={{
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <Grid sx={{}} container spacing={0}>
        <Grid  xs={12} md={8}>
          <img style={{height:'100%' , width: '100%'}} src={LoginImage}/>
        </Grid>
        <Grid xs={12} md={4} sx={{background: "#1a4941" , justifyContent: 'center' , textAlign:'center'}}>
         <Box>

           <p style={{fontFamily: "Sevillana", color : '#ec6a0c' , fontSize:'25px', marginTop :'4rem'}}>FashWind</p>
           <p style={{fontFamily: "Cormorant Upright", color : '#ede0d0'  , fontSize:'15px', marginTop :'3rem' , letterSpacing: 2 , fontWeight:'bold'}}>Welcome To FashWind</p>
         </Box>
         <Box style={{fontFamily: "Cormorant Upright", color : '#ede0d0'  , fontSize:'10px', marginTop :'3rem' , letterSpacing: 2 , fontWeight:'bold' , widht:'100%'}}>
         <TextField sx={{color:"#ede0d0" , width:'80%' , '. &MuiFormLabel-root-MuiInputLabel-root' : {color:"#ede0d0"}}} label="Email" variant="standard" />
         <TextField sx={{color:"#ede0d0" , width:'80%' , '. &MuiFormLabel-root-MuiInputLabel-root' : {color:"#ede0d0"}}} label="Password" variant="standard" />
         <Box sx={{width:'90%' , textAlign: 'right'}}><p>Forgot password ?</p></Box>
         <Button sx={{ marginTop:'30px' , background:'#7c0000' , width: '150px' , fontFamily: "Cormorant Upright",fontWeight: "bold"}} variant="contained">Sign In</Button>
         {/* <input type="text" id="fname" name="fname" placeholder='Email' style={{background: '#1a4941' ,border: 'none' ,borderBottom : '2px solid ##ede0d0' , color:'#ec6a0c' ,height:'20px' , widht:'15rem' , fontSize:'15px'}} /> */}
         </Box>
         <Box sx={{widht:'90%' , paddingTop:'3rem'}}>
          <hr style={{ height:0.3 , widht:'60%' , marginRight : '150px' , marginLeft : '150px'}}/>
         </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
