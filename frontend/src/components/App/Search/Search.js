import React, { useState } from 'react'
import {Link} from 'react-router-dom'

// import {Link} from 'react'
import './Search.css'


export default function Search({cities,currentCity,roomCount,handleSubmit}) {


    const [cityId,setCityId]=useState([])
    const [roomNum,setRoomNum]=useState([])
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    return (
     
        <div className="container">
                <div className="banner">
                    <div className="banner-text">
                        <h1 >Find student homes with bills included</h1>
                        <h5 >A simple and faster way to search for student accommodation</h5>
                     
                    </div>
                    <div className="overlay"></div> 
                    <div className='form-container'>
                            <form className="form-search" >
                                    <select className="select-search" onChange={(e)=>setCityId(e.target.value)}>
                                    <option value="">Search by city</option>
                                        {cities.map(city=>
                                            <option value={city.id}>{city.name}</option>
                                            )}
                                        
                                    </select> 
                                    <select className="select-search" onChange={(e)=>setRoomNum(e.target.value)}>
                                            <option value="">Any bedroom</option>
                                            {numbers.map(number=><option value={number}>{number}</option>)}
                                     </select>

                                   <Link to={`/cities/${cityId}/${roomNum}`} ><span className="btn-search">Find Homes</span></Link> 
                            </form>
                    </div> 
                </div>  
        </div> 
    )
}

