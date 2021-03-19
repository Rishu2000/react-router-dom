import React, {useState} from 'react'
import Header from "./components/Header"

function App() {

  const [Dark,setDark] = useState(true);

  const handleHeader = (e) => {
    e.preventDefault();
      setDark(e.target.innerHTML.trim() === "dark");  //.trim() function used to remove white-space from both side.
  }

  return (
    <div>
      <Header dark={Dark}>Header</Header>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-primary m-3" onClick={handleHeader}> dark</button>
            <button className="btn btn-primary m-3" onClick={handleHeader}>light</button>
          </div>
          <div className="col-6 offset-3">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App






// import React, {useState, useEffect} from 'react'
// import {getTodos} from "./services/ToDo"

// function App() {

//   const [value,setValue] = useState(10);
//   const [todos,setTodos] = useState();

//   useEffect(() => {
//     getTodos().then((json) => setTodos(json.data))
//   },)      

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <h1>Rishav</h1>
//           <pre className="border rounded p-1 bg-light">
//             {JSON.stringify({value,todos},null,2)}
//           </pre>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
