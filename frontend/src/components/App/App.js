import React, { useState, useEffect} from 'react';
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


export default function App() {
	const [cities, setCities] = useState([]);
	const [homes, setHomes] = useState([]);
	const [currentCity, setCurrentCity] = useState('');
	const [roomCount, setRoomCount] = useState([]);
	const [login, setLog] = useState(false);
	const [signup, setSignUp] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [shortlist ,setShortlist] = useState([])

	const changeShortlist = () => {
		setShortlist(JSON.parse(localStorage.getItem('shortlist')))
	}

	useEffect(() => {
		if(localStorage.getItem('shortlist')===null){
			localStorage.setItem('shortlist','[]')
		}
		setShortlist(JSON.parse(localStorage.getItem('shortlist')))
	},[])

 
	useEffect(() => {
		axios
			.get('http://localhost:5000/homes')
			.then((res) => {
				setHomes(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		axios
			.get('http://localhost:5000/cities')
			.then((res) => {
				setCities(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
			if(localStorage.getItem('shortlist')===null){
                localStorage.setItem('shortlist','[]')
            }
			setShortlist(JSON.parse(localStorage.getItem('shortlist')))
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
			<Header toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} shortlist={shortlist}/>
			{login === true ? <LoginPop register={register} setLog={setLog}/> : null}
			{signup === true ? (
				<RegisterPop register={register} backtoLogin={backtoLogin} />
			) : null}
			<Router>
				<Switch>
					<Route    
						exact
						path="/"
						render={() => <Search cities={cities} />}
					/>
					<Route
						path={`/cities/:cityname/:bedroom?`}
						render={() => <Cities homes={homes} cities={cities} shortlist={shortlist} setShortlist={setShortlist} changeShortlist={changeShortlist}/>}
					/>
					<Route
						exact
						path="/homedetails/:id"
						render={() => <HomeDetails changeShortlist={changeShortlist} shortlist={shortlist} setShortlist={setShortlist}/>}
					/>
					<Route
						exact
						path="/shortlists"
						render={() => <Shortlist homes={homes} shortlist={shortlist} setShortlist={setShortlist} changeShortlist={changeShortlist}/>}
					/>
					{/* <Route exact path="/shortlists" component={Shortlist} /> */}
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/terms" component={Terms} />
					<Route exact path="/policies" component={Policies} />
					<Route exact path="/student-accommodation" component={TopCities} />
					<Route exact path="/agency/welcomepage"  render={(props) => {
						const token = isAuthenticated()
						if(token) {
							return <WelcomePage /> 
						} else {
							return <Redirect to='/'/>
						}
					}}/>
					<Route exact path="/agency/addproperty"  render={(props) => {
						const token = isAuthenticated()
						if(token) {
							return <AddProperty /> 
						} else {
							return <Redirect to='/'/>
						}
					}}/>

					<Route exact path="/agency/addproperty/:id"  render={(props) => {
						const token = isAuthenticated()
						if(token) {
							return <AddProperty /> 
						} else {
							return <Redirect to='/'/>
						}
					}}/>

					<Route
						exact
						path="/agency/myprofile"
						render={(props) => {
							const token = isAuthenticated();
							if (token) {
								return <MyProfile />;
							} else {
								return <Redirect to="/" />;
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
