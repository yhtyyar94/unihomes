import React from 'react';
import Search from './Search/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cities from '../City/Cities';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';
import HomeDetails from '../HomeDetails/HomeDetails';
import Shortlist from './Shortlist';
import About from '../StaticPages/About';

export default function App() {
	return (
		<div>
			<Header />

			<Router>
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/city" component={Cities} />
					<Route exact path="/homedetails" component={HomeDetails} />
					<Route exact path="/shortlists" component={Shortlist} />
					<Route exact path="/aboutus" component={About} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}
