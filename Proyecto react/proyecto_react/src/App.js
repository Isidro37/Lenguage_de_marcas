import "./App.css";
import {Routes, Route} from "react-router-dom"
import Login from "./login/Login";
import Actividades from "./actividades/Actividades";
import{Container, Typography} from "@mui/material";
function App() {
  return (
    <Container maxWidth="md">
    <Typography
    variant="h2"
    component="h1"
    sx={{
      textAlign: "center",
      background: "blue",
      color: "white",
      fontWeight: "bold",
    }}>App Extraescolares</Typography>
 
   <Routes>
    <Route path="/" element={<Login></Login>}/>
    <Route path="/login" element={<Login></Login>}/>
    <Route path="/actividades" element={<Actividades></Actividades>}/>
   </Routes>
   </Container>
  );
}

export default App;
