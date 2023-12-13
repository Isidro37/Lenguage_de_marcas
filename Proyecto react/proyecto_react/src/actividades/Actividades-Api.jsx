import axios from "axios";

const BASE_URL="https://iaxcloud.com/api/";
const HTTP= axios.create({baseURL: BASE_URL});

export const getActividades = async (setActividades)=>{
    const url = BASE_URL + "actividades";
    const peticion = await HTTP.get(url);
    const actividades = peticion.data;
    console.log(actividades);
    setActividades(actividades);
};
