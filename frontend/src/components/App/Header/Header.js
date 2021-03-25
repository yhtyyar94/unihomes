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
import { useHistory} from 'react-router-dom'

export default function Header({ toggleLogin, isLoggedIn }) {
	const [visible, setVisibility] = useState(true)
	const [history, setHistory] = useState('/')
	const pathHistory = useHistory()
	const [shortlist,setShortlist]=useState([])
	const changeClass = () => {
		if(window.location.pathname === '/') {
			if (window.pageYOffset > 0) {
				document.querySelector(".header").className = "header scroll"
			  } else {
				document.querySelector(".header").className = "header";
			  }
		}
	}

	const styles = {
		visibility: visible ? 'hidden' : 'visible'
	}

	const changeUrl = () => {
		if(history !== window.location.pathname){
			setHistory(window.location.pathname)
		}
	}

	useEffect(() => {
		if(localStorage.getItem('shortlist')===null){
			localStorage.setItem('shortlist','[]')
		}
		setShortlist(JSON.parse(localStorage.getItem('shortlist')))
	}, [])



	useEffect(() => {
		window.addEventListener("scroll", changeClass)
		window.addEventListener("click", changeUrl)	
		changeUrl()
		localStorage.setItem('token', '12345')
	},[])

	return (
		<div className={history === '/' ? 'header' : 'scroll'} id="header">
			<div className="header-logo">
				<a href="/" id="unihomes" style={{ fontSize: 35 }}>
					<MdHome className="home-logo"/>Unihomes
				</a>
			</div>
			<div className="search-toggle" style={styles}>
				<input type="text" placeholder="Search accommodation by cities..."/>
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
				<a className="navbar-item btn" >
					<BiLayerPlus className="search-logo"/> Add Property
				</a>
				<a className="navbar-item">
					<FaHome /> Properties
				</a>
				<a className="navbar-item">
					<CgProfile /> My Profile
				</a>
				<a className="navbar-item" >
					<RiLogoutBoxFill /> Log out
				</a>
			</div>}
		</div>
	);
}
