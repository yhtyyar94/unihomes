import React from 'react'
import view from './images/view.png'
import './App.css'

export default function Search() {
    return (
     
        <div>
            <div className="container">
                <img src={view} alt="view" className="img"/>
                <div className="titleText">Find student homes with bills included</div>
                <div className="subText">A simple and faster way to search for student accommodation</div>
                <div className="overlay"></div>
            </div>
            <div className="search-container">
                <form className="form">
                    <select className="input-one">
                            <option value="search">Search by city</option>
                            <option value="birmingham">Birmingham</option>
                            <option value="london">London</option>
                            <option value="coventry">Coventry</option>
                    </select>
                    <select className="input-two">
                            <option value="any">Any bedroom</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                    </select>
                   
                    <button className="btn" >Find Homes</button>
                </form>
            </div>
        </div>
    )
}

{/* <input type="text" className="input-one" placeHolder="Search by city"/>
<input className="input-two" placeHolder="Any bedrooms"/> */}