import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:3000/api",
});

httpClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default httpClient;
