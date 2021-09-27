import axios from "axios";

const api = axios.create({
  baseURL: "https://api-db1.herokuapp.com/",
});

export default api;
