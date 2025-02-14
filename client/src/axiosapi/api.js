import axios from "axios";

const api = axios.create({
    baseURL: "https://realestate-client-3avd.onrender.com",
});

export default api;
