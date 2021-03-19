import React, {useState, useEffect} from 'react'
import axios from "axios"

function App() {

  const [value,setValue] = useState(10);
  const [todos,setTodos] = useState();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((json) => setTodos(json.data))
  },)      

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Rishav</h1>
          <pre className="border rounded p-1 bg-light">
            {JSON.stringify({value,todos},null,2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App
