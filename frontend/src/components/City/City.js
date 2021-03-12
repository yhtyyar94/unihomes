import React from 'react'
import './City.css'
import homes from './Data'

export default function City({home}) {
    return (
        <div className="city">
            <div className="home-img">
                <img src={home.image} alt="home" width="100%" height="300px"/>
            </div>
            <div className="info-one">
                <p>£{home.rent} pppw including bills</p>
            </div>
            <div className="info-two">
                <p>{home.bedroom} Bedroom House</p>
            </div>
            <div className="address">
                 <p>{home.address.street} Street, {home.address.district}, {home.address.postcode}</p>
            </div>
            <div className="buttons">
                <div className="short">
                    <p>Shortlist</p>
                </div>
                <div className="view">
                   <p>View Home</p>
                </div>
            </div>
            
            
        </div>
    ) 
}
