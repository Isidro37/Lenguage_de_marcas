import {Paper, Typography} from "@mui/material";

function Actividad({act}){
    return(
       <Paper
       sx={{
        display: "flex",
        flexDirection:"column",
        backgroundColor:"#f0f0f0",
        borderRadius:"16px",
        padding:"8px",
        marginTop:"8px"
       }}
       >
        <Typography variant ="h5" sx={{textAlign:"center", fontWeight:"bold"}}>
        {act.titulo}
        </Typography>
       <Typography
       variant="body1"
       sx={{textAlign:"left", fontWeight:"bold"}}
       >
        {act.lugar}
       </Typography>
       <Typography
       variant="body1"
       sx={{textAlign:"right", fontWeight:"bold"}}
       >
       {act.fechaInicio}  
     </Typography>
       <Typography variant ="body2" sx={{textAlign:"justify"}}>
    {act.descripcion}
       </Typography>
       </Paper>
    );
}
export default Actividad;