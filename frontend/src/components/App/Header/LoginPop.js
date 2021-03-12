import React from 'react'
import "./Header.css"

export default function LoginPop() {
  return (
    <div className="logContainer">
      <div className="logTitle">Agent Login</div>
      <hr className="logLine"/> 
      <div className="logTitleTwo">Email adress</div>
      <input type="text" className="inputOne"/>
      <div className="logTitleThree">Password</div>
      <input type="text" className="inputTwo"/>
      <div className="forgotPass">Forgot password?</div>
      <button className="loginBtn">Login</button>
      <div className="registerPlc"></div>
      <div className="registerTxt">Register as a...</div>
      <hr className="regLine"/>
      <button className="agentBtn">Letting Agent</button>
    </div> 
  )
}


