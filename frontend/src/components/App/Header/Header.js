import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { GoHeart } from 'react-icons/go';
import { MdBookmark } from 'react-icons/md';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Login from './LoginPop.js';
import { useHistory} from 'react-router-dom'

export default function Header({ toggleLogin }) {
	const [visible, setVisibility] = useState(true)
	const [history, setHistory] = useState('/')
	const pathHistory = useHistory()
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
		window.addEventListener("scroll", changeClass)
		window.addEventListener("click", changeUrl)	
		changeUrl()
	},[])

	console.log(history);
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
			<div className="header-items">
				<a className="navbar-item btn" onClick={() => setVisibility(!visible)}>
					<MdSearch className="search-logo"/> Search
				</a>
				<a href="/shortlists" className="navbar-item">
					<MdBookmark /> Shortlist
				</a>
				<a href="/contact" className="navbar-item">
					<MdMail /> Contant Us
				</a>
				<button href="/LoginPop" className="navbar-item" onClick={toggleLogin}>
					<MdPerson /> Login
				</button>
			</div>
		</div>
	);
}
