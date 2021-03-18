import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

export default function App() {
	const [cities, setCities] = useState([]);
	const [homes, setHomes] = useState([]);
	// const [currentCity, setCurrentCity] = useState('Liverpool');
	// const [roomCount, setRoomCount] = useState(4);
	const [login, setLog] = useState(false);
	const [signup, setSignUp] = useState();

	useEffect(() => { 
		axios
			.get('http://localhost:5000/cities')
			.then((res) => {
				setCities(res.data);
			}) 
			.catch((err) => {
				console.log(err);
			});
	}, []);

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



	

	const toggleLogin = () => {
		setLog(!login);
	};
	const register = () => {
		setLog(false);
		setSignUp(true);
	};
	const backtoLogin = () => {
		setSignUp(false);
		setLog(true);
	};

	
	return (
		<div>
			<Header toggleLogin={toggleLogin} />
			{login === true ? (
				<div
					style={{ position: 'absolute', marginLeft: '300px', zIndex: 30 }}
				>
					<LoginPop register={register} />
				</div>
			) : null}
			{signup === true ? (
				<div
					style={{ position: 'absolute', marginLeft: '300px', zIndex: 30 }}
				>
					<RegisterPop register={register} backtoLogin={backtoLogin} />
				</div>
			) : null} 
			<Router>
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Search
								cities={cities}
							/>
						)}
					/>
					<Route
						
						path={`/cities/:id/:bedroom`}
						render={() => (
							<Cities
								homes={homes}
								cities={cities}
							/>
						)}
					/>
					<Route exact path="/homedetails" component={HomeDetails} />
					<Route exact path="/shortlists" component={Shortlist} />
					<Route exact path="/aboutus" component={About} />
					<Route exact path="/terms" component={Terms} />
					<Route exact path="/policies" component={Policies} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}
 