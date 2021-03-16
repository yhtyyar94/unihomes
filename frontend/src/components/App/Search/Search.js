import React, { useState } from 'react'
import './Search.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Search({cities,currentCity,roomCount,handleSubmit}) {


    const [cityName,setCityName]=useState([])
    const [roomNum,setRoomNum]=useState([])

    return (
    
        <div className="container">
                <div className="banner">
                    <div className="banner-text">
                        <h1 >Find student homes with bills included</h1>
                        <h5 >A simple and faster way to search for student accommodation</h5>
                        <h5>{currentCity}</h5>
                        <h5>{roomCount}</h5>
                    </div>
                    <div className="overlay"></div> 
                    <div className='form-container'>
                            <form className="form-search" onSubmit={(e)=>{ e.preventDefault(); handleSubmit(cityName,roomNum)} }>
                                    <select className="select-search" onChange={(e)=>setCityName(e.target.value)}>
                                    <option value="">Search by city</option>
                                        {cities.map(city=>
                                            <option value={city.name}>{city.name}</option>
                                            )}
                                        
                                    </select> 
                                    <select className="select-search" onChange={(e)=>setRoomNum(e.target.value)}>
                                            <option value="">Any bedroom</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                    </select>

                                    <button className="btn-search" >Find Homes </button>
                            </form>
                    </div> 
                </div>  
        </div>
    )
}

