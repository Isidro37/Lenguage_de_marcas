import { Box, Button, Container, TextField, Typography } from "@mui/material";
import "./Login.css";
import styled from "@emotion/styled";
import Logo from "./ic_launcher-playstore.png";
import {loginUser} from "./Users-Api";
import{useState}   from "react";
const Img= styled("img")({
    width:200,
    height:"100%",
    objectFit:"cover",
    objectPosition:"center",

});

function Login(){
    const[msglogin,setMsglogin]=useState(null);
    const handleSubmitLogin=async(event)=>{
        event.preventDefault();
        const data= new FormData(event.currentTarget);
        const credentials={
            email:data.get("email"),
            password:data.get("password"),
        };
        const responsedata= await loginUser(credentials);
        console.log(responsedata);
        if(responsedata?.resultCode==="OK"){
            setMsglogin("Resultado de autenticación correcto: "+responsedata.resultDesc);

        }else{
            setMsglogin("Resultado de autenticación erróneo: "+responsedata?.resultDesc);

        }
    };
    
    return(
    <Container
    maxWidth="md"
    sx={{
        border:2,
        boxShadow:1,
        pb:2,}}
    ><Box sx={{
        marginTop:8,
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
    }}>
    <Img src={Logo}></Img>
        <Typography
        variant="h5"
        component="h2">
            Login
        </Typography>
        <Box component="form" onSubmit={handleSubmitLogin} sx={{mt:1}}>
        <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email de murciaeduca.es"
    name="email"
    autoComplete="email"
    autoFocus
/>
        <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
        />
        <Typography
        textAlign={"center"}
        component="h1"
        variant="h5"
        color={"red"}>
            {msglogin}
        </Typography>
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{mt:3,mb:2}}
        >Log In
        </Button>

        </Box>
        </Box>
    </Container>

    );
}

export default Login;