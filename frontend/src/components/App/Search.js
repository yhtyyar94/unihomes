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
        </div>
    )
}
