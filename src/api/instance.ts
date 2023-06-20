import axios from "axios";

export const instance = axios.create({
    baseURL : 'https://api.midjourneyapi.io/v2'
})


// instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//         req.headers.Authorization = token
//     }
//     return req
// })
