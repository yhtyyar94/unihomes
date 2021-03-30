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

export default function Header({ toggleLogin, isLoggedIn, shortlist, setUserInfo,setIsLoggedIn}) {
	const [visible, setVisibility] = useState(true)
	const [history1, setHistory] = useState('/')
	const [search, setSearch] = useState('')
	const history = useHistory()


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
		setSearch(e.target.value)

	}

	return (
		<div className={history1 === '/' || history1 === '' ? 'header' : 'scroll'} id="header">
			<div className="header-logo">
				<a href="/" id="unihomes" style={{ fontSize: 35 }}>
					<MdHome className="home-logo"/>Unihomes
				</a>
			</div>
			<div className="search-toggle" style={styles}>
				<input type="search" placeholder="Search accommodation by cities..." value={search} onChange={onSearch} data-list='list'/>
			</div>
			{!isLoggedIn ? <div className="header-items">
				<a className="navbar-item btn" onClick={() => setVisibility(!visible)}>
					<ImSearch className="search-logo"/> Search
				</a>
			   {shortlist.length===0 
			   ? <a href="/shortlists" className="navbar-item">
			   <span className="heart-number-zero">{shortlist.length}</span><BsHeartFill fill="white" /> Shortlist 
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
			</div> : <div className="agency">
				<a className="navbar-item btn" onClick={() => history.push('/agency/addproperty')}>
					<BiLayerPlus className="search-logo"/> Add Property
				</a>
				<a className="navbar-item" onClick={() => history.push('/agency/properties')}>
					<FaHome /> Properties
				</a>
				<a className="navbar-item" onClick={() => history.push('/agency/myprofile')}>
					<CgProfile /> My Profile
				</a>
				<a className="navbar-item" onClick={logout}>
					<RiLogoutBoxFill /> Log out
				</a>
			</div>}
		</div>
	);
}
