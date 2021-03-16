import React from 'react';
import { BsEnvelope } from 'react-icons/bs';
import './HomeDetails.css';

export default function HomeDetails(bookViewing) {
	return (
		<div className="homedetails-container">
			<div className="book-viewing-container">
				<button className="btn-book-viewing-close">X</button>
				<div className="book-viewing-form-container">
					<div>
						<h2 className="book-viewing-form-title">Book a Viewing</h2>
					</div>
					<div>
						<h4 className="book-viewing-form-address">Address</h4>
					</div>
					<form className="book-viewing-form">
						<label>Name</label>
						<br />
						<input></input>
						<br />
						<label>Email Address</label>
						<br />
						<input></input>
						<br />
						<label>Phone Number</label>
						<br />
						<input></input>
					</form>
				</div>
			</div>

			<div className="btn-book-viewing-container">
				<button
					className="btn-book-viewing"
					type="submit"
					onClick={() => bookViewing}
				>
					<BsEnvelope style={{ fill: 'white', marginRight: 10 }} />
					Book Viewing
				</button>
			</div>
		</div>
	);
}
