import axios from "axios"
import Cookies from "js-cookie"

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const loginAuth = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, )

        const result = response.data
        if (result.data) {
            Cookies.set("token", result.data.token, {
                expires: 1
            })
        }
        return result.data
    } catch (error) {
        throw error
    }
}