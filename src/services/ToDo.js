import axios from "axios"
import API from "../constants/API"

export const getTodos = () => (
    axios.get(API+'todos/1')
)