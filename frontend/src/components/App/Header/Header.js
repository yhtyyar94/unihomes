import React, { useEffect, useState } from 'react';
import './Header.css';
import { MdHome } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import { MdPerson } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { BiLayerPlus } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { BsHeartFill } from "react-icons/bs";
import {  useHistory} from 'react-router'
import axios from 'axios'
import { pascalCase } from "pascal-case";
import logo from './logo.png'

export default function Header({ toggleLogin, isLoggedIn, shortlist, setUserInfo,setIsLoggedIn}) {
	const [visible, setVisibility] = useState(true)
	const [history1, setHistory] = useState('/')
	const [search, setSearch] = useState('')
	const [cities, setCities] = useState([])
	const history = useHistory()

	useEffect(() => {
		if(window.location.pathname !== '/') {
			document.querySelector("#header").className = "scroll";
		}
	},[])


	const changeClass = () => {
		if(window.location.pathname === '/') {
			if (window.pageYOffset > 0) {
				document.querySelector("#header").className = "header scroll"
			  } else {
				document.querySelector("#header").className = "header";
			  }
		}
	}

	const styles = {
		visibility: visible ? 'hidden' : 'visible'
	}

	const changeUrl = () => {
		if(history1 !== window.location.pathname){
			setHistory(window.location.pathname)
		}
	}



	useEffect(() => {
		window.addEventListener("scroll", changeClass)
		window.addEventListener("click", changeUrl)	
		changeUrl()
		axios.get('https://unilive-backend.herokuapp.com/api/getcities').then(res => setCities(res.data)).catch(err => console.log(err))
		cities && document.querySelector('input[list="browsers"]').addEventListener('input', onInput);
	},[])

	const logout = () => {
		const token = []
		localStorage.setItem('token', JSON.stringify(token))
		setUserInfo()
		setIsLoggedIn(false)
		sessionStorage.removeItem('userInfo')
		sessionStorage.removeItem('token')

		history.push('/')
	}

	const onSearch = (e) => {
		if(cities.length === 0) return
		if(e.key === 'Enter') {
			for (let i = 0; i < document.querySelector('#browsers').children.length; i++) {
				if(document.querySelector('#browsers').children[i].label.toLowerCase() === search.toLowerCase()) {
					history.push(`/cities/${pascalCase(search)}/`)
					document.querySelector("#header").className = "scroll";
				} else {
					setSearch('')
				}
				
			}
		}
	}

	

	

	function onInput(e) {
   var input = e.target
     var  val = input.value;
      var list = input.getAttribute('list')
     var  options = document.getElementById(list).childNodes;

  for(var i = 0; i < options.length; i++) {
    if(options[i].innerText === val) {
		history.push(`/cities/${val}`)
		document.querySelector("#header").className = "scroll";
      break;
    }
  }
}

const goHome = () => {
	if(window.location.pathname === '/agency/welcomepage' || window.location.pathname === '/agency/addproperty' || window.location.pathname === '/agency/properties' || window.location.pathname === '/agency/myprofile') {
		history.push('/agency/welcomepage')
	} else {
		history.push('/')
	}
}
	
	return (
		<div className={history1 === '/' || history1 === '' ? 'header' : 'scroll'} id="header">
			<div className="header-logo">

				<a id="unihomes" style={{ fontSize: 35, cursor: 'pointer' }} onClick={goHome}>
				<img src={logo} alt="" style={{height:"40px"}}></img> UniLive
				</a>
			</div>
			
			<div className="search-toggle" style={styles}>
				<input type="search" placeholder="Search homes by cities..." value={search} onChange={e => setSearch(e.target.value)} onKeyPress={onSearch} list='browsers'/>
			</div>
			{!isLoggedIn ? <div className="header-items">
				<a className="navbar-item btn" onClick={() => setVisibility(!visible)} alt="">
					<ImSearch className="search-logo"/> Search
				</a>
			   {shortlist.length===0 
			   ? <a href="/shortlists" className="navbar-item">
			   <span className="heart-number-zero"></span><BsHeartFill fill="white" /> Shortlist 
			   </a>
			   : <a href="/shortlists" className="navbar-item">
			   <span className="heart-number">{shortlist.length}</span><BsHeartFill fill="red" /> Shortlist 
			   </a>
			   }
				
				<a href="/contact" className="navbar-item">
					<MdMail /> Contact Us
				</a>
				<a  className="navbar-item" onClick={toggleLogin}>
					<MdPerson /> Login
				</a>
			</div> : <div className="header-items agencypage" id="agencypage">
				<a className="navbar-item btn" onClick={() => history.push('/agency/addproperty')} alt="">
					<BiLayerPlus className="search-logo"/> Add Property
				</a>
				<a className="navbar-item" onClick={() => history.push('/agency/properties')} alt="">
					<FaHome /> Properties
				</a>
				<a className="navbar-item" onClick={() => history.push('/agency/myprofile')} alt="">
					<CgProfile /> My Profile
				</a>
				<a className="navbar-item" onClick={logout} alt="">
					<RiLogoutBoxFill /> Log out
				</a>
			</div>}
			<datalist id="browsers">
				{cities && cities.map((city, index) => <option className="datalist-option" key={index} id={city._id} value={city.name} >{city.name}</option>)}
			</datalist>
		</div>
	);
}
