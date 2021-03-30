import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search/Search';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Cities from '../City/Cities';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';
import HomeDetails from '../HomeDetails/HomeDetails';
import Shortlist from './Shortlist';
import About from '../StaticPages/About';
import Terms from '../StaticPages/Terms';
import Policies from '../StaticPages/Policies';
import LoginPop from '../App/Header/LoginPop';
import RegisterPop from '../App/Header/RegisterPop';
import TopCities from './TopCities';
import isAuthenticated from './Agency/Authentication';
import WelcomePage from './Agency/Welcome/WelcomePage';
import AddProperty from './Agency/AddProperty/AddProperty';
import MyProfile from './Agency/MyProfile/MyProfile';
import ContactUs from '../StaticPages/ContactUs';
import Properties from './Agency/Properties/Properties';
import NotAuth from './Agency/NotAuth';

export default function App() {
	const [cities, setCities] = useState([]);
	const [homes, setHomes] = useState([]);
	const [currentCity, setCurrentCity] = useState('');
	const [roomCount, setRoomCount] = useState([]);
	const [login, setLog] = useState(false);
	const [signup, setSignUp] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);	
	const [shortlist ,setShortlist] = useState([])
	const [jwt, setJwt] = useState()
	const [userInfo, setUserInfo] = useState()

	const changeShortlist = () => {
		setShortlist(JSON.parse(localStorage.getItem('shortlist')));
	};

	useEffect(() => {
		if(window.location.pathname === '/agency/welcomepage' || window.location.pathname === '/agency/properties' || window.location.pathname === '/agency/addproperty' || window.location.pathname === '/agency/myprofile' || window.location.pathname.startsWith === '/agency') {
			setIsLoggedIn(true)
			document.querySelector("#header").className = "scroll";
		}
		setUserInfo(JSON.parse(sessionStorage.getItem('userInfo')))
	
	}, [])

	useEffect(() => {
		if(localStorage.getItem('shortlist')===null){
			localStorage.setItem('shortlist','[]')
		}
		setShortlist(JSON.parse(localStorage.getItem('shortlist')));
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:5001/api/getproperties')
			.then((res) => {
				setHomes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:5001/api/getcities')
			.then((res) => {
				setCities(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		if (localStorage.getItem('shortlist') === null) {
			localStorage.setItem('shortlist', '[]');
		}
		setShortlist(JSON.parse(localStorage.getItem('shortlist')));
	}, []);

	const toggleLogin = () => {
		if (signup === true) {
			setSignUp(false);
			setLog(false);
		} else {
			setLog(!login);
		}
	};
	const register = () => {
		setLog(false);
		setSignUp(true);
	};
	const backtoLogin = () => {
		setSignUp(false);
		setLog(true);
	};

	const handleSubmit = (cityName, roomNum) => {
		setCurrentCity(cityName);
		setRoomCount(roomNum);
	};
	const filterBedrooms = (bedroom) => {
		let filteredHomes = homes.filter((home) => home.bedroom === bedroom);
		setHomes(filteredHomes);
	};
	
	return (
		<div>
<Router>
			<Header
				toggleLogin={toggleLogin}
				isLoggedIn={isLoggedIn}
				shortlist={shortlist}
				setUserInfo={setUserInfo}
				setIsLoggedIn={setIsLoggedIn}
			/>
			{login === true ? (
				<LoginPop  setSignUp={setSignUp} register={register} setLog={setLog} setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>
			) : null}
			{signup === true ? (
				<RegisterPop setUserInfo={setUserInfo} register={register} backtoLogin={backtoLogin} setSignUp={setSignUp} setIsLoggedIn={setIsLoggedIn}/>
			) : null}
			
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Search cities={cities} />}
					/>
					<Route
						path={`/cities/:cityname/:bedroom?`}
						render={() => (
							<Cities
								homes={homes}
								cities={cities}
								shortlist={shortlist}
								setShortlist={setShortlist}
								changeShortlist={changeShortlist}
							/>
						)}
					/>
					<Route
						exact
						path="/homedetails/:id"
						render={() => (
							<HomeDetails
								changeShortlist={changeShortlist}
								shortlist={shortlist}
								setShortlist={setShortlist}
							/>
						)}
					/>
					<Route
						exact
						path="/shortlists"
						render={() => (
							<Shortlist
								homes={homes}
								shortlist={shortlist}
								setShortlist={setShortlist}
								changeShortlist={changeShortlist}
							/>
						)}
					/>
					{/* <Route exact path="/shortlists" component={Shortlist} /> */}
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/terms" component={Terms} />
					<Route exact path="/policies" component={Policies} />
					<Route exact path="/contact" component={ContactUs} />

					<Route
						exact
						path="/student-accommodation"
						component={TopCities}
					/>
					<Route
						exact
						path="/agency/welcomepage"
						render={(props) => {
							const token = isAuthenticated();
							token
								.then((res) => {
									setJwt(res);
								})
								.catch((err) => err);
							if (jwt) {
								return <WelcomePage userInfo={userInfo}/>;
							} else {
								return <NotAuth />;
							}
						}}
					/>
					<Route
						exact
						path="/agency/addproperty"
						render={(props) => {
							const token = isAuthenticated();
							token
								.then((res) => {
									setJwt(res);
								})
								.catch((err) => err);
							if (jwt) {
								return <AddProperty userInfo={userInfo}/>;
							} else {
								return <NotAuth />;
							}
						}}
					/>

					<Route
						exact
						path="/agency/addproperty/:id"
						render={(props) => {
							const token = isAuthenticated();
							token
								.then((res) => {
									setJwt(res);
								})
								.catch((err) => err);
							if (jwt) {
								return <AddProperty userInfo={userInfo}/>;
							} else {
								return <NotAuth />;
							}
						}}
					/>

					<Route
						exact
						path="/agency/myprofile"
						render={(props) => {
							const token = isAuthenticated();
							token
								.then((res) => {
									setJwt(res);
								})
								.catch((err) => err);
							if (jwt) {
								return <MyProfile userInfo={userInfo}/>;
							} else {
								return <NotAuth />;
							}
						}}
					/>

					<Route
						exact
						path="/agency/properties"
						render={(props) => {
							const token = isAuthenticated();
							token
								.then((res) => {
									setJwt(res);
								})
								.catch((err) => err);
							if (jwt) {
								return <Properties userInfo={userInfo}/>;
							} else {
								return <NotAuth />;
							}
						}}
					/>
					{/* {Authentication() ? <Route exact path='/welcomepage' component={WelcomePage}  />: null} */}
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}
