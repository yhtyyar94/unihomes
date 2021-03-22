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

export default function Header({ toggleLogin }) {
	const [visible, setVisibility] = useState(true)
	const changeClass = () => {
		if (window.pageYOffset > 0) {
			document.querySelector(".header").className = "header scroll"
		  } else {
			document.querySelector(".header").className = "header";
		  }
	}

	const styles = {
		visibility: visible ? 'hidden' : 'visible'
	}

	useEffect(() => {
		window.addEventListener("scroll", changeClass)
	},[])
	return (
		<div className="header">
			<div className="header-logo">
				<a href="/" id="unihomes" style={{ fontSize: 35 }}>
					<MdHome />Unihomes
				</a>
			</div>
			<div className="search-toggle" style={styles}>
				<input type="text" placeholder="Search accomadation by cities..."/>
			</div>
			<div className="header-items">
				<a className="navbar-item btn" onClick={() => setVisibility(!visible)}>
					<MdSearch className="home-logo"/> Search
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
