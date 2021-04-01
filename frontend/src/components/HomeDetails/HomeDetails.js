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

	const [bookViewing, setBookViewing] = useState(false);
	const { id } = useParams();
	const [home, setHome] = useState([]);
	const [firstImg, setFirstImg] = useState(null);
	const [secondImg, setSecondImg] = useState(null);
	const [thirdImg, setThirdImg] = useState(null);
	const [fourthImg, setFourthImg] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [rowsOfBedroomPrices, setRowsOfBedroomPrices] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5001/api/getproperties/${id}`)
			.then((res) => {
				// setFirstImg(`http://localhost:5001/${home.images[0].filePath}`);
				setSecondImg(res.data.images[1]);
				setThirdImg(res.data.images[2]);
				setFourthImg(res.data.images[3]);
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

	const handleSecondImg = () => {
		setFirstImg(secondImg);
		setFourthImg(firstImg);
		setSecondImg(thirdImg);
		setThirdImg(fourthImg);
	};
	const handleThirdImg = () => {
		setFirstImg(thirdImg);
		setFourthImg(firstImg);
		setSecondImg(secondImg);
		setThirdImg(fourthImg);
	};
	const handleFourthImg = () => {
		setFirstImg(fourthImg);
		setFourthImg(firstImg);
		setSecondImg(secondImg);
		setThirdImg(thirdImg);
	};
	const handleRightSwipe = () => {
		setFirstImg(secondImg);
		setFourthImg(firstImg);
		setSecondImg(thirdImg);
		setThirdImg(fourthImg);
	};
	const handleLeftSwipe = () => {
		setFirstImg(fourthImg);
		setFourthImg(thirdImg);
		setSecondImg(firstImg);
		setThirdImg(secondImg);
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
				{/* <button onClick={()=>setModalIsOpen(false)}>X</button> */}
				<img
					src={firstImg && firstImg}
					style={{
						borderRadius: '3px',
						height: '99%',
						width: 'auto',
						marginLeft: '17%',
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
								src={
									home.length !== 0 &&
									`http://localhost:5001/${home.images[0].filePath}`
								}
								style={{ borderRadius: '3px' }}
								alt=""
							/>
						</div>

						<div
							style={{ display: 'flex', justifyContent: 'space-around' }}
						>
							<img
								onClick={handleSecondImg}
								src={home.length !== 0 &&
									`http://localhost:5001/${home.images[1].filePath}`}
								alt=""
								style={{
									height: 'auto',
									width: '30%',
									margin: '1%',
									flex: 4,
									borderRadius: '3px',
								}}
							/>
							<img
								onClick={handleThirdImg}
								src={thirdImg}
								alt=""
								style={{
									height: 'auto',
									width: '30%',
									margin: '1%',
									flex: 4,
									borderRadius: '3px',
								}}
							/>
							<img
								onClick={handleFourthImg}
								src={fourthImg}
								alt=""
								style={{
									height: 'auto',
									width: '30%',
									margin: '1%',
									flex: 4,
									borderRadius: '3px',
								}}
							/>
						</div>
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
					</div>
					<div className="homedetails-main-bedroom-prices">
						<h3 style={{ marginBottom: '20px' }}>Bedroom Prices</h3>
						{rowsOfBedroomPrices.length !== 0 &&
							rowsOfBedroomPrices.map((room, index) => (
								<div
									className="homedetails-main-bedroom-prices-table"
									key={index}
								>
									<span
										style={{ marginLeft: '20px' }}
									>{`Bedroom ${room}`}</span>
									<span style={{ marginRight: '20px' }}>
										{home.rent} per week
									</span>
								</div>
							))}
						<div className="homedetails-main-bedroom-prices-deposit">
							Deposit: {home.deposit}
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
							{home.length !== 0 && home.address[1]}
						</h3>
						<br />
						<h3 className="homedetails-sidebar-address">
							{home.length !== 0 && home.cityName},{' '}
							{home.length !== 0 && home.address[3]}
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
							<div className="shortlist-btn">
								{shortlist.includes(home._id) ? (
									<p onClick={removeFromShortlist}>
										{' '}
										<BsHeartFill fill="red" /> &nbsp;{' '}
										<span className="remove-btn">Remove</span>
									</p>
								) : (
									<p onClick={addToShortlist}>
										{' '}
										<BsHeart className="heart-icon" /> &nbsp;
										<span className="short-btn">Shortlist</span>
										<span className="add-btn">Add</span>
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
								<h4 className="book-viewing-form-address">
									{home.length !== 0 && home.address[0]},{' '}
									{home.length !== 0 && home.address[1]},
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
