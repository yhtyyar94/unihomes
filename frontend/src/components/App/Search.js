import React from 'react'
import view from './images/view.png'
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
     
        <div className="container">
            <div className="banner">
                <div className="banner-text">
                    {/* <img src={view} alt="view" className="img"/> */}
                    <h1 >Find student homes with bills included</h1>
                    <h5 >A simple and faster way to search for student accommodation</h5>
                </div>
                <div className="overlay"></div> 
                <form className="form">
                    <select className="input-one">
                            <option value="">Search by city</option>
                            <option value="birmingham">Birmingham</option>
                            <option value="london">London</option>
                            <option value="coventry">Coventry</option>
                    </select> 
                    <select className="input-two">
                            <option value="">Any bedroom</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                    </select>
                   
                    <button className="btn" >Find Homes</button>
                </form>
            </div>
            
            {/* <div className="search-container"> */}
               
            {/* </div> */}
   
        </div>
    )
}

