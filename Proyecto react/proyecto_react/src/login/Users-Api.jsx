import axios from "axios";

const BASE_URL="https://iaxcloud.com/api/";
const HTTP = axios.create({baseURL: BASE_URL});

export async function loginUser(credentials){
    const url= BASE_URL+"usuario/login";
    const response = await HTTP.patch(url, credentials);
    return response.data;
}