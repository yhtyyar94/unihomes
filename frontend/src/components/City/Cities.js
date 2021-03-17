import React,{useLayoutEffect,useState} from 'react'
import City from './City'
import {useParams} from 'react-router-dom'
import './Cities.css'

export default function Cities({homes,filterBedrooms,currentCity,cities}) {
    
    const{id}=useParams()
    const{bedroom}=useParams()
   
    
    
   const numbers = [1,2,3,4,5,6,7,8,9,10]
   const maxPrice=['£65','£80','£100','£120','£140','£160','£180','£200']

   useLayoutEffect(() => {
    window.scrollTo(0, 0);
   }, [])
   
    return ( 
    <div>
                <div className="filter">
                 
                {cities.map(city=>city.id===id*1 ? <h3 className="title-text">Student accomodation in {city.name} </h3> : null) }
     
                        <form style={{display:"flex"}}>
                                    <div className="form-select">
                                            <label>Bedroom</label>
                                            <select className="form-option" onChange={(e)=>filterBedrooms(e.target.value)} >
                                                <option>Any</option>   
                                                {numbers.map(number=><option value={number}>{number}</option>)}
                                            </select>
                                    </div>
                                    <div className="form-select">
                                            <label>Bathroom</label>
                                            <select className="form-option">
                                                <option>Any</option>
                                                {numbers.map(number=><option>{number}</option>)}
                                            </select>
                                    </div>
                                    <div className="form-select">
                                            <label>Max Price</label>
                                            <select className="form-option">
                                                <option>Any</option>
                                                {maxPrice.map(price=><option>{price}</option>)}
                                            </select>
                                    </div>
                                    <div className="form-select">
                                            <label>Home Type</label>
                                            <select className="form-option">
                                                <option>House</option>
                                                <option>Apartment</option>
                                            </select>
                                    </div>
                            </form>          
                    </div> 
                <div >
                    
                        <div style={{backgroundColor:"#e5e5e5", padding:"20px"}}>
                            <h3>{homes.filter(home=>
                                home.city_id===id*1 && home.bedroom===bedroom*1).length} homes in {cities.map(city=>city.id===id*1 ? <span>{city.name}</span>:null)}</h3>
                        </div>
                        <div className="homes">
                            
                            {homes.filter(item=>item.city_id===id*1 && item.bedroom===bedroom*1).map(home=> 
                            <City home={home}/>       
                            )}
                        </div> 
                        <button>View More</button>
                </div>
            
                <div className="banner-bottom">
                        <div className="text">
                                    <h1 >Being a student in Liverpool</h1>
                                    <h5 >An abundance of shops, bars, restaurants, and nightclubs have collectively put Liverpool well and truly on the student map. The city is known for being a party destination (made famous by Geordie Shore), and there’s plenty of this on offer for students. With a diverse mix of places to eat, drink and party, there's no wonder it's such a popular city to study in.</h5>
                        </div>                       
                </div>     
            
    </div>
    )
}
