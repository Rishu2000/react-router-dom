import React, {useState, useEffect} from 'react'
import {getTodos} from "./services/ToDo"

function App() {

  const [value,setValue] = useState(10);
  const [todos,setTodos] = useState();

  useEffect(() => {
    getTodos().then((json) => setTodos(json.data))
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
