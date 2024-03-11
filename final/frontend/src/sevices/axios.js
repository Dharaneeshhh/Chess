import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
    (config)=>{
        const token = sessionStorage.getItem('token');
        if(token){
            config.headers.Authorization= `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);  
    }
)
export default instance;
// import axios from "axios";

// const api_url = "http://localhost:8181/";

// const instance = axios.create({
//     baseURL: api_url, // 1. Set base URL
// });

// instance.interceptors.request.use(
//     (config) => {
//         const token = sessionStorage.getItem('token');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`; // 2. Set Auth Header
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// export default instance;
