import React, { useState, useEffect } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import './HomeDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaBath, FaRegBuilding } from 'react-icons/fa';

export default function HomeDetails() {
	const [bookViewing, setBookViewing] = useState(false);
	const { id } = useParams();
	const [home, setHome] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/homes/${id}`)
			.then((res) => setHome(res.data))
			.catch((err) => console.log(err));
	}, []);

	const showBookViewing = () => {
		setBookViewing(!bookViewing);
	};

	const closeBookViewing = () => {
		setBookViewing(false);
	};
	return (
		<div className="homedetails-container">
			<div className="homedetails-container-main"></div>
			<div className="homedetails-sidebar-container">
				<div className="btn-book-viewing-container">
					<h3>
						{home.address.street}, {home.address.district}
					</h3>
					<br />
					<h3>
						{home.address.city}, {home.address.postcode}
					</h3>
					<div className="homedetails-rooms-count-type-container">
						<div className="homedetails-rooms-count-bedroom">
							<p>Bedrooms</p>
							<FaBed /> {home.bedroom}
						</div>
						<div className="homedetails-rooms-count-bathroom">
							<p>Bathrooms</p>
							<FaBath />
							{home.bathroom}
						</div>
						<div className="homedetails-rooms-type">
							<p>Type</p>
							<FaRegBuilding />
							{home.type}
						</div>
					</div>

					<button
						className="btn-book-viewing"
						type="submit"
						onClick={showBookViewing}
					>
						<BsEnvelope style={{ fill: 'white', marginRight: 10 }} />
						Book Viewing
					</button>
				</div>
			</div>

			{bookViewing ? (
				<div className="book-viewing-container">
					<button
						className="btn-book-viewing-page-close"
						onClick={closeBookViewing}
					>
						X
					</button>
					<div className="book-viewing-form-container">
						<div>
							<h2 className="book-viewing-form-title">Book a Viewing</h2>
						</div>
						<div>
							<h4 className="book-viewing-form-address">Address</h4>
						</div>
						<div>
							<form className="book-viewing-form">
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
								<label>Phone Number</label>
								<br />
								<input placeholder="Phone number" required />
								<br />
								<label>Message</label>
								<br />
								<textarea
									style={{
										height: '72px',
										border: 'none',
										borderRadius: '3px',
									}}
									placeholder="Text message..."
									required
								/>
								<div className="book-viewing-check-box">
									<input type="checkbox" />
									<label>
										Tick here if you want to hear about university
										life, student accommodation and much more! See our{' '}
										<a
											href="/policies"
											style={{
												textDecoration: 'underline',
												color: 'white',
											}}
										>
											Privacy Policy
										</a>
									</label>
								</div>
								<button className="btn-book-viewing-page-form-submit">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}
