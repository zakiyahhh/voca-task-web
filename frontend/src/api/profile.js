import axios from 'axios'
import Cookies from "js-cookie"

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const getProfile = async () => {
    const token = Cookies.get('token')
    if (!token) return
    try {
        const response = await axios.get(`${API_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}

export const updateProfile = async (name, email, password, photo_url) => {
    const token = Cookies.get('token')
    if (!token) return
    try {
        const response = await axios.put(`${API_URL}/users/profile`, {
            name,
            email,
            password,
            photo_url
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}