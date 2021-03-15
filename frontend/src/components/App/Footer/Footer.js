import React from 'react';
import './Footer.css';
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<div>
			<div style={{ height: 500 }}></div>
			<div className="keepintouch-sm">
				<div id="keepintouch">
					<h1 className="footer-title">Keep In Touch</h1>
					<form id="form-keepintouch">
						<input
							id="input-keepintouch"
							placeholder="Enter your email address..."
						/>
						<button id="btn-keepintouch" type="submit">
							Click
						</button>
					</form>
				</div>
				<div id="social-media">
					<h1 className="footer-title">Let's Socialize</h1>
					<div className="sm-icons">
						<a href="#fb">
							<AiOutlineFacebook
								style={{ fill: 'white', marginRight: 20 }}
							/>
						</a>
						<a href="#instagram">
							<AiOutlineInstagram
								style={{ fill: 'white', marginRight: 20 }}
							/>
						</a>
						<a href="#twitter">
							<AiFillTwitterCircle style={{ fill: 'white' }} />
						</a>
					</div>
				</div>
			</div>
			<div id="nav-footer">
				<nav>
					<ul>
						<li>
							<a href="/about-us">About Us</a>
						</li>
						<li>
							<a href="#terms">Terms & Conditions</a>
						</li>
						<li>
							<a href="#policies">Privacy & Cookie Policies</a>
						</li>
						<li style={{ float: 'right' }}>
							2021 &copy; SoftwareChasers
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
