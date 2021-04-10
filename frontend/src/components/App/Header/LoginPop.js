import React,{useEffect, useState} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import axios from 'axios'
import "./LoginReg.css"
import { Redirect, useHistory } from 'react-router'
import SuccessMessageaAddProp from '../Agency/AddProperty/SuccessMessageaAddProp'

export default function LoginPop({register, setLog, setIsLoggedIn, isLoggedIn, setUserInfo, setSignUp}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [successLogin, setSuccessLogin] = useState()
  const history = useHistory()

  
  const Login = async (e) => {
    e.preventDefault()
    setSuccessLogin(true)
     const promise = await axios.post(`https://unilive-backend.herokuapp.com/login`, {
        email:email,
        password:password
      }).then(res => res.data).catch(err => console.log(err))
      

      sessionStorage.setItem('token', JSON.stringify(promise.token))
      
      if(promise.status) {
        sessionStorage.setItem('userInfo', JSON.stringify(promise))
        setUserInfo(promise)
        history.push('/agency/welcomepage')
        document.querySelector("#header").className = "scroll";
        setIsLoggedIn(true)
        setLog(false)
        setSuccessLogin(false)
      } else {
        setSuccessLogin(false)
        alert('Wrong email or password')
        return
      }
      delete promise.data.password
  }
 
  const scrollFunctionLog = () => {
    if (window.pageYOffset > 0) {
      document.querySelector('#logContainer').className = 'logContainer logScroll'
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', scrollFunctionLog)
    return () => {
      window.removeEventListener('scroll', scrollFunctionLog)
    }
    
  },[])

  if(isLoggedIn) {
    return window.location.href = '/agency/welcomepage'
  }


  return (
    <div className="logContainer" id="logContainer">
    {successLogin && <SuccessMessageaAddProp login={'login'}/>}
    <form className="formLog" onSubmit={Login}>
      <div className="logTitle">Agent Login <RiCloseFill className="close-logo" onClick={() => setLog(false)}/> </div>

      <hr className="logLine"/> 
      <div className="login-email">
      <label htmlFor="email" >Email</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required/>
      </div>
      <div className="login-password">
      <label htmlFor="password" >Password</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required/>
      </div>
      <button type="submit" className="loginBtn">Login</button>
    </form> 
    <div className="registerPlc"></div>
    <div className="regContent">
      <div className="registerTxt">Register as a...</div>
      <hr className="regLine"/>
      <button className="agentBtn" onClick={register}>Letting Agent</button>
      </div>
    </div>
  )
}


