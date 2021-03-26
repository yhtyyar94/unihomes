import React, {useEffect} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import "./Header.css"

export default function RegisterPop({backtoLogin, setSignUp}) {
  const scrollFunctionLog = () => {
    if (window.pageYOffset > 0) {
      document.querySelector('.regContainer').className = 'regContainer regScroll'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunctionLog)
    return () => {
      window.removeEventListener('scroll', scrollFunctionLog)
    }
  },[])
  return (
    <div className="regContainer">
    <form >
      <div className="logTitle">Agent Register <RiCloseFill className="close-logo2" onClick={() => setSignUp(false)} /></div>
      <hr className="logLine"/> 
      <div className="reg-company">
      <label for="companyName" >Company name</label>
      <input type="text" id="companyName" placeholder="Enter a Company name" name="companyName" required/>
      </div>
      <div className="reg-email">
      <label for="email" >Email</label>
      <input type="text" id="email" placeholder="Enter Email adress" name="email" required/>
      </div>
      <div className="reg-password">
      <label for="reg-password" >Password</label>
      <input type="text" id="reg-password" placeholder="Create a password" name="reg-password" required/>
      </div>
      <div className="reg-repassword">
      <label for="reg-repassword" >Repeat password</label>
      <input type="text" id="reg-repassword" placeholder="Enter password again" name="reg-repassword" required/>
      </div>
      <button className="signupBtn" >Sign Up</button>
      
    </form> 
      <div className="loginPlc"></div>
      <button className="loginBtn2" onClick={backtoLogin}>Login</button>
    </div>
  )
}


