import React from 'react';
import './ContactUs.css';
import { BiEnvelope, BiPhoneCall } from 'react-icons/bi';

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
							<button
								className="btn-contact-us-page-form-submit"
								onClick={() => window.scroll(0, 0)}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="contact-us-side-bar">
					<h3 className="contact-us-side-bar-title">Need Help?</h3>
					<div className="contact-us-side-bar-email">
						<BiEnvelope style={{ fill: 'white' }} />
						<span className="contact-us-side-bar-contact-details">
							<a
								href="mailto:hello@unilive.co.uk"
								target="_blank"
								rel="noreferrer"
							>
								contact@unilive.co.uk
							</a>
						</span>
					</div>
					<div className="contact-us-side-bar-phone">
						<BiPhoneCall style={{ fill: 'white' }} />
						<span className="contact-us-side-bar-contact-details">
							Call: 12345 678 90
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
