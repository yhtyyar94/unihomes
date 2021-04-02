import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {RiCloseFill} from 'react-icons/ri'
import "./LoginReg.css"
import {useHistory} from 'react-router'
import SuccessMessage from './SuccessMessage'



export default function RegisterPop({backtoLogin, setSignUp, setIsLoggedIn, setUserInfo}) {

  const [companyName, setCompanyName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirm, setConfirm] = useState()
  const [seccessMessage, setSeccessMessage] = useState()
  

  const history = useHistory()

  const scrollFunctionLog = () => {
    if (window.pageYOffset > 0) {
      document.querySelector('#regContainer').className = 'regContainer regScroll'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunctionLog)
    return () => {
      window.removeEventListener('scroll', scrollFunctionLog)
    }
  },[])

  const signup = (e) => {
    e.preventDefault()
    if(password !== confirm) {
      alert('Password did not match')
      document.querySelector('#reg-password').style.background = 'red'
      document.querySelector('#con-repassword').style.background = 'red'
      setTimeout(() => {
        document.querySelector('#reg-password').style.background = '#ececfb'
        document.querySelector('#con-repassword').style.background = '#ececfb'
      }, 1000)
      return
    }
    axios.post('https://unilive-backend.herokuapp.com/signup', {
      email:email.toLowerCase(),
      password:password,
      companyName:companyName
    }).then(async (res) => {
      if(res.data.hasOwnProperty('keyValue')) {  
        alert('This email is exist. Please enter new email or try to login.')
        setCompanyName('')
        setEmail('')
        setPassword('')
        setConfirm('')
      } else {
        const promise = await axios.post(`https://unilive-backend.herokuapp.com/login`, {
          email:email,
          password:password
        }).then(res => res.data).catch(err => console.log(err))
  
        sessionStorage.setItem('token', JSON.stringify(promise.token))
        sessionStorage.setItem('userInfo', JSON.stringify(promise))
        setUserInfo(res.data)
        if(promise.status) {
          setSeccessMessage(true)
            
          setTimeout(() => {
            setSeccessMessage(false)
            history.push('/agency/welcomepage')
            document.querySelector("#header").className = "scroll";
            setIsLoggedIn(true)
            setSignUp(false)
          }, 3000)
        }
        
      }
    }).catch((err) => console.log(err))
    
  }

  return (
    <div className="regContainer" id="regContainer">

    {seccessMessage && <SuccessMessage />}
    <form onSubmit={signup}>
      <div className="logTitle">Agent Register <RiCloseFill className="close-logo" onClick={() => setSignUp(false)} /></div>
      <hr className="logLine"/> 
      <div className="reg-company">
      <label for="companyName" >Company name</label>
      <input value={companyName} onChange={e => setCompanyName(e.target.value)} type="text" id="companyName" placeholder="Enter a Company name" name="companyName" required/>
      </div>
      <div className="reg-email">
      <label for="email" >Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" placeholder="Enter Email address" name="email" required/>
      </div>
      <div className="reg-password">
      <label for="reg-password" >Password</label>
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="reg-password" placeholder="Create a password" name="reg-password" required/>
      </div>
      <div className="reg-repassword">
      <label for="con-repassword" >Confirm password</label>
      <input value={confirm} onChange={e => setConfirm(e.target.value)} type="password" id="con-repassword" placeholder="Enter password again" name="reg-repassword" required/>
      </div>
      <button className="signupBtn" >Sign Up</button>
      
    </form> 
      <div className="loginPlc"></div>
      <button className="loginBtn2" onClick={backtoLogin}>Login</button>
    </div>
  )
}


