import axios from 'axios';

const instance = axios.create({
  baseURL: "http://3.37.235.110",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
});

export default instance;