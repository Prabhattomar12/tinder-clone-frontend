import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-tinder-backend.herokuapp.com/",
});

export default instance;
