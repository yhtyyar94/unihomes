import React from 'react'
import './Search.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Search({cities}) {

    return (

        <div className="container">
            <div className="banner">
                <div className="banner-text">
                    <h1 >Find student homes with bills included</h1>
                    <h5 >A simple and faster way to search for student accommodation</h5>
                </div>
                <div className="overlay"></div> 
                <div className='form-container'>
                <form className="form-search">
                    <select className="select-search">
                    <option value="">Search by city</option>
                        {cities.map(city=>
                            <option value={city.name}>{city.name}</option>
                            )}
                          
                    </select> 
                    <select className="select-search">
                            <option value="">Any bedroom</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                    </select>
                   
                    <button className="btn-search" >Find Homes</button>
                </form>
                </div>
                
                
            </div>  
        </div>
    )
}

