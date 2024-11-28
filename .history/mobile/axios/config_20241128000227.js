import axios from 'axios'
//import { IP } from "@env"

const blogFetch = axios.create({
    baseURL: `192.168.15.98:8082`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default blogFetch