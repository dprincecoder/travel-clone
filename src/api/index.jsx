import axios from "axios"

const URL = "http://localhost:9090/api/v1"

export const getUsers = async() => {
    try {
        const response = await axios.get(`${URL}/users`)
        return response
    } catch (error) {
        return error
    }
}