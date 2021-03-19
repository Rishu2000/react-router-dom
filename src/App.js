import React, {useState, useEffect} from 'react'

function App() {

  const [value,setValue] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setValue(value-1);
    },1000)
  },[value])      //Amazing property of dependency in useEffect().

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Rishav</h1>
          <pre className="border rounded p-1 bg-light">
            {JSON.stringify(value,null,2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default App
