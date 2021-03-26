import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
	return (
		<div>
			<div className="contact-us-header">
				<span className="contact-us-title">Contact Us</span>
			</div>
			<div className="contact-us-container">
				<div className="contact-us-main-side">
					<div className="contact-us-form-container">
						<form className="contact-us-form">
							<label>Name</label>
							<br />
							<input placeholder="Name" required />
							<br />
							<label>Email Address</label>
							<br />
							<input
								type="email"
								placeholder="name@email.com"
								required
							/>
							<br />
							<br />
							<label>Are you a</label>
							<br />
							<select>
								<option>Student</option>
								<option>Letting Agent</option>
								<option>Other</option>
							</select>
							<br />
							<label>Phone</label>
							<br />
							<input placeholder="Phone number" required />
							<br />
							<label>Message</label>
							<br />
							<textarea placeholder="Text message..." required />
							<button className="btn-book-viewing-page-form-submit">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="contact-us-side-bar"></div>
			</div>
		</div>
	);
};

export default ContactUs;
