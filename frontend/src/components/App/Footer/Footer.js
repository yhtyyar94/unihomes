import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div className="keepintouch-sm">
				<h1 id="keepintouch">Keep In Touch</h1>
				<form>
					<input
						id="input-keepintouch"
						placeholder="Enter your email address..."
					/>
				</form>
			</div>
		</div>
	);
};

export default Footer;
