import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import './HomeDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaBath, FaRegBuilding, FaRegHeart } from 'react-icons/fa';
import { TiTickOutline } from 'react-icons/ti';
import bill from './bills.png';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

export default function HomeDetails() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let history = useHistory();

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
		<div>
			<div className="homedetails-back-to-search">
				<form>
					<button
						className="homedetails-back-to-search-btn"
						onClick={(e) => {
							e.preventDefault();
							history.goBack();
						}}
					>
						<IoIosArrowBack size={12} />
						Back to Search
					</button>
				</form>
			</div>

			<div className="homedetails-container">
				<div className="homedetails-container-main">
					<div className="homedetails-main-img">
						<img src={home.url} alt="" />
					</div>

					<div className="homedetails-main-key-features">
						<h3>Key Features</h3>
						{home.length !== 0 &&
							home.keyFeatures.map((keyFeature) => (
								<ul>
									<li>
										<TiTickOutline fill="#03c5f0" size={22} />
										{keyFeature}
									</li>
								</ul>
							))}
						{console.log(home.keyFeatures)}
					</div>
					<div className="homedetails-main-bedroom-prices">
						<h3>Bedroom Prices</h3>
					</div>
					<div className="homedetails-main-availability">
						<h3>Availability</h3>
						Till {home.availability}
					</div>
				</div>
				<div className="homedetails-sidebar-container">
					<div className="btn-book-viewing-container">
						<h3>
							{console.log(home)}
							{home.length !== 0 && home.address.street},{' '}
							{home.length !== 0 && home.address.district}
						</h3>
						<br />
						<h3>
							{home.length !== 0 && home.address.city},{' '}
							{home.length !== 0 && home.address.postcode}
						</h3>
						<div className="homedetails-rooms-count-type-container">
							<div className="homedetails-rooms-count-bedroom">
								<p>Bedrooms</p>
								<div style={{ textAlign: 'center' }}>
									<FaBed
										style={{
											fill: '#03c5f0',
											marginRight: 8,
											marginLeft: 8,
										}}
									/>
									{home.length !== 0 && home.bedroom}
								</div>
							</div>
							<div className="homedetails-rooms-count-bathroom">
								<p>Bathrooms</p>
								<div style={{ textAlign: 'center' }}>
									<FaBath
										style={{
											fill: '#03c5f0',
											marginRight: 8,
											marginLeft: 8,
										}}
									/>
									{home.length !== 0 && home.bathroom}
								</div>
							</div>
							<div className="homedetails-rooms-type">
								<p>Type</p>
								<div style={{ textAlign: 'center' }}>
									<FaRegBuilding
										style={{
											fill: '#03c5f0',
											marginRight: 5,
											marginLeft: 8,
										}}
									/>
									<span style={{ fontSize: 12 }}>
										{home.length !== 0 && home.type}
									</span>
								</div>
							</div>
						</div>
						<br />
						<hr />
						<h4
							style={{
								textAlign: 'center',
								paddingTop: 8,
								paddingBottom: 8,
							}}
						>
							{home.rent} pppw including bills
						</h4>
						<hr />
						<br />
						<button
							className="btn-book-viewing"
							type="submit"
							onClick={showBookViewing}
						>
							<BsEnvelope style={{ fill: 'white', marginRight: 10 }} />
							Book Viewing
						</button>
						<div style={{ textAlign: 'center', marginBottom: 20 }}>
							<button className="homedetails-sidebar-btn-shortlist">
								<FaRegHeart style={{ fill: '#03c5f0' }} />
							</button>
						</div>
						<div style={{ textAlign: 'center' }}>
							<img
								src={bill}
								alt="bills"
								style={{ width: '75%', height: 'auto' }}
							/>
						</div>
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
								<h2 className="book-viewing-form-title">
									Book a Viewing
								</h2>
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
											life, student accommodation and much more! See
											our{' '}
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
		</div>
	);
}
