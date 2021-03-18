import React from 'react'
import "./Header.css"

export default function LoginPop({register}) {
  return (
    <div className="logContainer">
    <form>
      <div className="logTitle">Agent Login</div>
      <hr className="logLine"/> 
      <label for="email" className="logTitleTwo">Email adress</label>
      <input type="text" id="email" className="inputOne" required/>
      <label for="password" className="logTitleThree">Password</label>
      <input type="text" id="password" className="inputTwo" required/>
      <button className="loginBtn">Login</button>
     
    </form> 
    <div className="registerPlc"></div>
      <div className="registerTxt">Register as a...</div>
      <hr className="regLine"/>
      <button className="agentBtn" onClick={register}>Letting Agent</button>
    </div>
  )
}


