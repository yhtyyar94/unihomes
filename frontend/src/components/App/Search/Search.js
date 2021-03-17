import React, { useState } from 'react'
import {Link} from 'react-router-dom'

// import {Link} from 'react'
import './Search.css'


export default function Search({cities,currentCity,roomCount,handleSubmit}) {


    const [cityId,setCityId]=useState([])
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
                            <form className="form-search" onSubmit={(e)=>{ e.preventDefault(); handleSubmit(cityId,roomNum)} }>
                                    <select className="select-search" onChange={(e)=>setCityId(e.target.value)}>
                                    <option value="">Search by city</option>
                                        {cities.map(city=>
                                            <option value={city.id}>{city.name}</option>
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

                                   <Link to={`/cities/${cityId}`} className="btn-search">Find Homes </Link> 
                            </form>
                    </div> 
                </div>  
        </div> 
    )
}

