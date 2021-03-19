import axios from "axios"

export const getTodos = () => (
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
)