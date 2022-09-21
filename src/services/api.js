import axios from "axios"

export const api = axios.create({
    baseURL: "https://rocketnotesapi.herokuapp.com/"
})