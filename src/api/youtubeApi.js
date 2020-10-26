import axios from 'axios';

const KEY = "Введите сюда свой ключ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY
  },
  headers: {}
});
