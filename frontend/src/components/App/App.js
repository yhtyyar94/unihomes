import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios'
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

export default function App() {


    const[cities,setCities]=useState([])
	const[homes,setHomes]=useState([])
	const[currentCity,setCurrentCity]=useState('Liverpool')
	const[roomCount,setRoomCount]=useState(4)
	


    useEffect(()=>{
        axios.get('http://localhost:5000/cities')
        .then(res=>{ 
            setCities(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

	useEffect(()=>{
        axios.get('http://localhost:5000/homes')
        .then(res=>{
            setHomes(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

	 const handleSubmit =(cityName,roomNum)=>{
		 setCurrentCity(cityName)
		 setRoomCount(roomNum)
	 }
	 const filterBedrooms=(bedroom)=>{
		let filteredHomes=homes.filter(home=>home.bedroom===bedroom)
		setHomes(filteredHomes)
	
	 }
    
	
	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/" render={()=><Search cities={cities} currentCity={currentCity} 
					handleSubmit={handleSubmit} roomCount={roomCount}/>} />
					<Route exact path="/city" render={()=><Cities homes={homes} 
					currentCity={currentCity} 
					roomCount={roomCount}
					filterBedrooms={filterBedrooms}
					/>} />
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
