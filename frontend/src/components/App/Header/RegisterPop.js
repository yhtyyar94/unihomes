import React from 'react'
import "./Header.css"

export default function RegisterPop() {
  return (
    <div className="regContainer">
    <form >
      <div className="logTitle">Agent Register</div>
      <hr className="logLine"/> 
      <label for="email" className="logTitleTwo"><b>Email adress</b></label>
      <input type="text" className="inputOne" id="email" placeholder="Enter Email" name="email" required/>
      <label for="psw" className="logTitleThree"><b>Password</b></label>
      <input type="password" className="inputTwo" placeholder="Enter Password" id="psw" name="psw" required/>
      <label for="psw-repeat" className="logTitleFour"><b>Repeat Password</b></label>
      <input type="password" className="inputThree" placeholder="Repeat Password" id="psw-repeat" name="psw-repeat" required/>
      <button className="signupBtn">Sign Up</button>
      
    </form> 
      <div className="loginPlc"></div>
      <button className="loginBtn2">Login</button>
    </div>
  )
}



{/* 
    <label for="email" className="logTitleTwo">Email adress</label>
      <input type="text" id="email" className="inputOne"/>
      <label for="password" className="logTitleThree">Password</label>
      <input type="text" id="password" className="inputTwo"/>
      <label for="passwordConfirm" className="logTitleThree">Password</label>
      <input type="text" id="passwordConfirm" className="inputTwo"/> */}