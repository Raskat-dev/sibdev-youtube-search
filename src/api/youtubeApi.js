import axios from 'axios';

const KEY = "AIzaSyBMNjLXhlEVpYfo3Kcs6pmjGuSOWyM9-KE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  },
  headers: {}
});
