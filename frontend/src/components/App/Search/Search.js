import React, { useState} from 'react'
import MainContent from '../MainContent/MainContent'
import { useHistory } from "react-router-dom";
import './Search.css'
 

export default function Search({cities}) {

 
    const [cityName,setCityName]=useState('')
    const [roomNum,setRoomNum]=useState([])
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    let history = useHistory();

   const handleSubmit=()=>{
      history.push(`/cities/${cityName}/${roomNum}`)
   }
 
 
    
    return (   
     
        <div className="container">
                <div className="search-container">
                    <div className="search-container-text">
                        <h1>Find student homes with bills included</h1>
                        <h5>A simple and faster way to search for student accommodation</h5>
                     
                    </div>
                    <div className="overlay"></div> 
                    <div className='form-container' id="search">
                            <form className="form-search" >
                                    <select required  className="select-search" onChange={(e)=>setCityName(e.target.value)}  >
                                    <option value="">Search by city</option>
                                        {cities.map((city,index)=>
                                            <option value={city.name} key={index}>{city.name}</option>
                                            )}
                                         
                                    </select>  
                                    <select className="select-search" onChange={(e)=>setRoomNum(e.target.value)}>
                                            <option value="">Any bedroom</option>
                                            {numbers.map((number,index)=><option value={number} key={index}>{number}</option>)}
                                     </select>
                               {cityName===''
                                     ? <button id="search" type="submit" className="btn-search-disabled" >Find Homes</button>
                                     : <button type="submit" className="btn-search" onClick={handleSubmit}>Find Homes</button>
                                     }
                            </form>     
                    </div> 
                </div>  
                <MainContent />
        </div> 
    )
}

