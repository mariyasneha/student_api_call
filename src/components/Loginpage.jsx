import React, { useState } from 'react'

const Loginpage = () => {

  const [input,changeInput] = useState(
    {username:"",password:""}
  )

  const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
  }

  const readValues=()=>{
    console.log(input)
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px", maxwidth: "400px" }}>
        <h4 className="mb-4 text-center">Login</h4>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Username</label>
          <input type="text" className="form-control" name='username' value={input.value} onChange={inputHandler}/>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Password</label>
          <input type="password"  id="" className="form-control" name='password' value={input.password} onChange={inputHandler} />
        </div>
        <div className="d-grid mb-3">
          <button className="btn btn-success" onClick={readValues}>Login</button>
        </div>
        <div className="text-center">
          <a href="#" className="text-decoration-none">Forgot Password?</a>
        </div>
      </div>
    </div>
  )
}

export default Loginpage