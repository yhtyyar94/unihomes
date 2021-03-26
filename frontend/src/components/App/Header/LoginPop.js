import React,{useEffect} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import "./Header.css"

export default function LoginPop({register, setLog}) {
 
  const scrollFunctionLog = () => {
    if (window.pageYOffset > 0) {
      document.querySelector('.logContainer').className = 'logContainer logScroll'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunctionLog)
    return () => {
      window.removeEventListener('scroll', scrollFunctionLog)
    }
  },[])

  return (
    <div className="logContainer">
    <form>
      <div className="logTitle">Agent Login <RiCloseFill className="close-logo1" onClick={() => setLog(false)}/> </div>
      <hr className="logLine"/> 
      <div className="login-email">
      <label htmlFor="email" >Email</label>
      <input type="text" id="email" name="email" placeholder="Enter your email address" required/>
      </div>
      <div className="login-password">
      <label htmlFor="password" >Password</label>
      <input type="text" id="password" name="password" placeholder="Enter your password" required/>
      </div>
      <button className="loginBtn">Login</button>
    </form> 
    <div className="registerPlc"></div>
      <div className="registerTxt">Register as a...</div>
      <hr className="regLine"/>
      <button className="agentBtn" onClick={register}>Letting Agent</button>
    </div>
  )
}


