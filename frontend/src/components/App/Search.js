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
                    <input type="text" className="input-one" placeHolder="Search by city"/>
                    <input className="input-two" placeHolder="Any bedrooms"/>
                    <button className="btn" >Find Homes</button>
                </form>
            </div>
        </div>
    )
}
