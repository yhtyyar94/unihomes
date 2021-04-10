import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import './HomeDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaBed, FaBath, FaRegBuilding } from 'react-icons/fa';
import { TiTickOutline } from 'react-icons/ti';
import bill from './bills.png';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function HomeDetails({
	changeShortlist,
	shortlist,
	setShortlist,
}) {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let history = useHistory();

	const [imageIndex, setImageindex] = useState(0);
	const [bookViewing, setBookViewing] = useState(false);
	const { id } = useParams();
	const [home, setHome] = useState([]);
	// const [firstImg, setFirstImg] = useState(
	// 	home.length !== 0 &&
	// 		`https://unilive-backend.herokuapp.com/${home.images[imageIndex].filePath}`,
	// );
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [rowsOfBedroomPrices, setRowsOfBedroomPrices] = useState([]);

	useEffect(() => {
		axios
			.get(`https://unilive-backend.herokuapp.com/api/getproperties/${id}`)
			.then((res) => {
				setHome(res.data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const showBookViewing = () => {
		setBookViewing(!bookViewing);
	};

	const closeBookViewing = () => {
		setBookViewing(false);
	};
	const addToShortlist = () => {
		if (localStorage.getItem('shortlist') === null) {
			localStorage.setItem('shortlist', '[]');
		}
		let idList = JSON.parse(localStorage.getItem('shortlist'));
		idList.push(home._id);
		localStorage.setItem('shortlist', JSON.stringify(idList));
		setShortlist(idList);
	};

	const removeFromShortlist = () => {
		let newShortlist = shortlist;

		for (let i = 0; i < newShortlist.length; i++) {
			if (newShortlist[i] === home._id) {
				newShortlist.splice(i, 1);
			}
		}
		localStorage.setItem('shortlist', JSON.stringify(newShortlist));
		setShortlist(newShortlist);
		changeShortlist();
	};

	useEffect(() => {
		let rooms = [];
		for (let i = 1; i <= home.bedroom; i++) {
			rooms.push(i);
		}
		setRowsOfBedroomPrices([...rooms]);
	}, [home.bedroom]);

	const handleRightSwipe = () => {
		imageIndex < home.images.length - 1
			? setImageindex(imageIndex + 1)
			: setImageindex(0);
	};
	const handleLeftSwipe = () => {
		imageIndex <= 0
			? setImageindex(home.images.length - 1)
			: setImageindex(imageIndex - 1);
	};

	const changeImage = (index) => {
		setImageindex(index);
	};

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: {
						top: 35,
						backgroundColor: 'rgba(211, 211, 211, 0.60)',
					},
					content: {
						padding: 2,
						height: 700,
					},
				}}
			>
				<img
					src={home.length !== 0 && home.images[imageIndex]}
					style={{
						borderRadius: '3px',
						height: '100%',
						width: '100%',
					}}
					alt=""
				/>

				<BiRightArrow
					className="arrow-right"
					onClick={handleRightSwipe}
					fill="#03c5f0"
				/>

				<BiLeftArrow
					className="arrow-left"
					onClick={handleLeftSwipe}
					fill="#03c5f0"
				/>
			</Modal>
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
						<div style={{ position: 'relative' }}>
							<BiRightArrow
								className="arrow-right"
								onClick={handleRightSwipe}
								fill="white"
							/>
							<BiLeftArrow
								className="arrow-left"
								onClick={handleLeftSwipe}
								fill="white"
							/>

							<img
								onDoubleClick={() => setModalIsOpen(true)}
								src={home.length !== 0 && home.images[imageIndex]}
								style={{ borderRadius: '3px' }}
								alt=""
							/>
						</div>

						<div
							style={{ display: 'flex', justifyContent: 'space-around' }}
						>
							{home.length !== 0 &&
								home.images.map((image, index) =>
									index !== 0 ? (
										<img
											onClick={() => changeImage(index)}
											src={home.length !== 0 && image}
											alt=""
											style={{
												height: 'auto',
												width: '30%',
												margin: '1%',
												flex: 4,
												borderRadius: '3px',
											}}
										/>
									) : null,
								)}
						</div>
					</div>

					<div className="homedetails-sidebar-container-small-size">
						<div className="btn-book-viewing-container">
							<h3 className="homedetails-sidebar-address">
								{home.length !== 0 && home.address[0]},{' '}
								{home.length !== 0 && home.address[1]},{' '}
								{home.length !== 0 && home.cityName},{' '}
								{home.length !== 0 && home.address[3]}
							</h3>
							<div className="homedetails-rooms-count-type-container">
								<div className="homedetails-rooms-count-bedroom">
									<p>Bedrooms</p>
									<div className="homedetails-rooms-count-bedroom-icon">
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
									<div className="homedetails-rooms-count-bathroom-icon">
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
									<div className="homedetails-rooms-type-icon">
										<FaRegBuilding
											style={{
												fill: '#03c5f0',
												marginRight: 5,
												marginLeft: 8,
											}}
										/>
										<span className="homedetails-rooms-type-type">
											{home.length !== 0 && home.type}
										</span>
									</div>
								</div>
							</div>
							<br />
							<hr />
							<h4
								className="homedetails-sidebar-pppw"
								style={{
									textAlign: 'center',
									paddingTop: 8,
									paddingBottom: 8,
								}}
							>
								£{home.rent} pppw including bills
							</h4>
							<hr />
							<br />
							<button
								className="btn-book-viewing"
								type="submit"
								onClick={showBookViewing}
							>
								<BsEnvelope
									style={{ fill: 'white', marginRight: 10 }}
								/>
								Book Viewing
							</button>
							<div className="shortlist-btn-container">
								<div className="shortlist-btn">
									{shortlist && shortlist.includes(home._id) ? (
										<p onClick={removeFromShortlist}>
											{' '}
											<BsHeartFill fill="red" /> &nbsp;{' '}
											<span className="rem-btn">Remove</span>
										</p>
									) : (
										<p onClick={addToShortlist}>
											{' '}
											<BsHeart className="heart-icon" /> &nbsp;{' '}
											<span className="s-btn">Shortlist</span>
											<span className="a-btn">Add</span>
										</p>
									)}
								</div>
							</div>
							<div
								className="homedetails-sidebar-bills"
								style={{ textAlign: 'center' }}
							>
								<img
									src={bill}
									alt="bills"
									style={{ width: '75%', height: 'auto' }}
								/>
							</div>
						</div>
					</div>

					<div className="homedetails-main-key-features">
						<h3>Key Features</h3>
						{home.length !== 0 &&
							home.keyFeatures.map((keyFeature) => (
								<ul className="homedetails-main-key-features-links">
									<li>
										<TiTickOutline className="homedetails-main-key-features-links-icon" />
										{keyFeature}
									</li>
								</ul>
							))}
					</div>

					<div className="homedetails-main-description">
						<h3>Description</h3>
						<p>{home.home_description}</p>
					</div>

					<div className="homedetails-main-bedroom-prices">
						<h3 style={{ marginBottom: '20px' }}>Bedroom Prices</h3>
						{rowsOfBedroomPrices.length !== 0 &&
							rowsOfBedroomPrices.map((room, index) => (
								<div
									className="homedetails-main-bedroom-prices-table"
									key={index}
								>
									<span className="homedetails-main-bedroom-prices-table-text">{`Bedroom ${room}`}</span>
									<span className="homedetails-main-bedroom-prices-table-text">
										£{home.rent} per week
									</span>
								</div>
							))}
						<div className="homedetails-main-bedroom-prices-deposit">
							Deposit: £{home.deposit}
						</div>
					</div>
					<div className="homedetails-main-availability">
						<h3 style={{ marginBottom: '20px' }}>Availability</h3>
						<span className="homedetails-main-availability-date">
							From {home.length !== 0 && home.availability[0]} {'     '}
							to {home.length !== 0 && home.availability[1]}
						</span>
					</div>
				</div>
				<div className="homedetails-sidebar-container">
					<div className="btn-book-viewing-container">
						<h3 className="homedetails-sidebar-address">
							{home.length !== 0 && home.address[0]},{' '}
							{home.length !== 0 && home.address[1]},{' '}
						</h3>
						<h3 className="homedetails-sidebar-address">
							{home.length !== 0 && home.cityName},{' '}
							{home.length !== 0 && home.address[3]}
						</h3>
						<div className="homedetails-rooms-count-type-container">
							<div className="homedetails-rooms-count-bedroom">
								<p>Bedrooms</p>
								<div className="homedetails-rooms-count-bedroom-icon">
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
								<div className="homedetails-rooms-count-bathroom-icon">
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
								<div className="homedetails-rooms-type-icon">
									<FaRegBuilding
										style={{
											fill: '#03c5f0',
											marginRight: 5,
											marginLeft: 8,
										}}
									/>
									<span className="homedetails-rooms-type-type">
										{home.length !== 0 && home.type}
									</span>
								</div>
							</div>
						</div>
						<br />
						<hr />
						<h4
							className="homedetails-sidebar-pppw"
							style={{
								textAlign: 'center',
								paddingTop: 8,
								paddingBottom: 8,
							}}
						>
							£{home.rent} pppw including bills
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
						<div className="shortlist-btn-container">
							<div className="shortlist-btn">
								{shortlist && shortlist.includes(home._id) ? (
									<p onClick={removeFromShortlist}>
										{' '}
										<BsHeartFill fill="red" /> &nbsp;{' '}
										<span className="rem-btn">Remove</span>
									</p>
								) : (
									<p onClick={addToShortlist}>
										{' '}
										<BsHeart className="heart-icon" /> &nbsp;{' '}
										<span className="s-btn">Shortlist</span>
										<span className="a-btn">Add</span>
									</p>
								)}
							</div>
						</div>
						<div
							className="homedetails-sidebar-bills"
							style={{ textAlign: 'center' }}
						>
							<img
								src={bill}
								alt="bills"
								style={{ width: '75%', height: 'auto' }}
							/>
						</div>
					</div>
				</div>

				<Modal
					isOpen={bookViewing}
					onRequestClose={() => setModalIsOpen(false)}
					className="book-viewing-modal"
				>
					<div className="book-viewing-container">
						<div className="btn-book-viewing-page-close-container">
							<button
								className="btn-book-viewing-page-close"
								onClick={closeBookViewing}
							>
								X
							</button>
						</div>
						<div className="book-viewing-form-container">
							<div>
								<h2 className="book-viewing-form-title">
									Book a Viewing
								</h2>
							</div>
							<div>
								<h4 className="book-viewing-form-address">
									{home.length !== 0 && home.address[0]},{' '}
									{home.length !== 0 && home.address[1]},{' '}
									{home.length !== 0 && home.address[2]}
									<br />
									{home.length !== 0 && home.cityName},{' '}
									{home.length !== 0 && home.address[3]}
								</h4>
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
									<textarea placeholder="Text message..." required />
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
					</div>{' '}
				</Modal>
			</div>
		</div>
	);
}
