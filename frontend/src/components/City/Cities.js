import React,{useState} from 'react'
import data from './Data'
import City from './City'
import './Cities.css'

export default function Cities({homes,currentCity,roomCount}) {
    
   const numbers = [1,2,3,4,5,6,7,8,9,'10+']
   const maxPrice=['£65','£80','£100','£120','£140','£160','£180','£200']
  
    return (
    <div>
                <div className="filter">
                        <h3>Student accomodation in {currentCity} {roomCount}</h3>
                        
                        <form>
                                <label>Bedroom</label>
                                <select>
                                    <option>Any</option>   
                                    {numbers.map(number=><option>{number}</option>)}
                                </select>
                                <label>Bathroom</label>
                                <select>
                                    <option>Any</option>
                                    {numbers.map(number=><option>{number}</option>)}
                                </select>
                                <label>Max Price</label>
                                <select>
                                    <option>Any</option>
                                    {maxPrice.map(price=><option>{price}</option>)}
                                </select>
                                <label>Home Type</label>
                                <select>
                                    <option>House</option>
                                    <option>Apartment</option>
                                </select>
                        </form>
                </div> 
                <div >
                        
                        <div className="homes">
                            {homes.map(home=> 
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
