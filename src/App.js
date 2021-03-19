import React, {useState} from 'react'

function App() {

  const [value,setValue] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Rishav</h1>
          {JSON.stringify(value,null,2)}
        </div>
      </div>
    </div>
  )
}

export default App
