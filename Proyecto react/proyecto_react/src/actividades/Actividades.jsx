import{Link} from "react-router-dom";
import Actividad from "./Actividad";
import{Grid} from "@mui/material";
import{ getActividades } from "./Actividades-Api";
import { useEffect, useState} from "react";
function Actividades(){
    const [actividades, setActividades] = useState(null);
    
    useEffect(() => {
        getActividades(setActividades);
    },[]);
    
    return (
        <div>
            <h1>Esta es la página de actividades</h1>
            <Grid container spacing={1}>
                {actividades !=null
                ? actividades.map((actividad)=>(
                    <Grid key={actividad.id} item xs={12} sm={6} md={4}>
                    <Actividad
                    act={actividad}
                    ></Actividad>
                    </Grid>
                ))
                :"no hay actividades"}
            </Grid>
        

            <Link to="/login">Haz clic para ver la página de login</Link>
        </div>
    );
}

export default Actividades;