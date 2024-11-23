import axios from "axios";
import Cookies from "js-cookie";

const API_URL = `${import.meta.env.VITE_SERVER_URL}/api`

export const getTask = async () => {
    const token = Cookies.get('token')
    if (!token) return
    try {
        const response = await axios.get(`${API_URL}/tasks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}

export const doneTask = async (id) => {
    const token = Cookies.get('token')
    console.log(token)
    if (!token) return
    try {
        const response = await axios.patch(`${API_URL}/tasks/${id}/done`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}

export const deleteTask = async (id) => {
    const token = Cookies.get('token')
    console.log(token)
    if (!token) return
    try {
        const response = await axios.delete(`${API_URL}/tasks/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}

export const createTask = async (title) => {
    const token = Cookies.get('token')
    console.log(token)
    if (!token) return
    try {
        const response = await axios.post(`${API_URL}/tasks`, {
            title
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