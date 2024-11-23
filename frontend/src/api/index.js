import axios from "axios";

const baseUrl =
    import.meta.env.VITE_SERVER_URL;

const createApiInstance = () => {
    const config = {
        baseURL: baseUrl,
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    };

    return axios.create(config);
};

const baseApi = createApiInstance();

export default baseApi;