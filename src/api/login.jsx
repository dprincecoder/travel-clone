import axios from "axios";

const URL = "https://travul9ja.onrender.com/api/v1/users"

export const getUsers = async() => {
    try {
        const response = await axios.get(`${URL}/users`)
        return response
    } catch (error) {
        return error
    }
}