import axios from "axios";

const weatherApi = axios.create({
  baseURL: 'https://api.hgbrasil.com',
  params: {
    key: 'de9ac554'
  }
})

export default weatherApi