import axios from 'axios'
//import { IP } from "@env"

const blogFetch = axios.create({
    baseURL: `htt192.168.15.98:8081`,
    headers: {
        "Content-Type": "application/json",
    }
})

export default blogFetch