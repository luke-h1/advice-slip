import axios from 'axios';

const adviceClient = axios.create({
  baseURL: 'http://localhost:8050/api/',
});
export default adviceClient;
