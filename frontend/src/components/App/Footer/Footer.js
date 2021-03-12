import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div style={{ height: 500 }}></div>
			<div className="keepintouch-sm">
				<h1 id="keepintouch">Keep In Touch</h1>
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
			<div id="nav-footer">
				<nav>
					<ul>
						<li>
							<a href="#aboutus">About Us</a>
						</li>
						<li>
							<a href="#terms">Terms & Conditions</a>
						</li>
						<li>
							<a href="#policies">Privacy & Cookie Policies</a>
						</li>
						<li>2021 &copy; SoftwareChasers</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;
