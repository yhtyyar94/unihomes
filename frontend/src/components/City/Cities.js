import React,{useEffect,useState} from 'react'
import City from './City'
import './Cities.css'

export default function Cities({homes,roomCount,filterBedrooms}) {
    
   const numbers = [1,2,3,4,5,6,7,8,9,'10+']
   const maxPrice=['£65','£80','£100','£120','£140','£160','£180','£200']
   const [currentCity,setCurrentCity]=useState([])

  useEffect(()=>{
      const data = localStorage.getItem("list");
      if(data){
          setCurrentCity(JSON.parse(data))
      }
  })
   
    return (
    <div>
                <div className="filter">
                        <h3 className="title-text">Student accomodation in {currentCity}</h3>
                   
                        <form style={{display:"flex"}}>
                                    <div className="form-select">
                                            <label>Bedroom</label>
                                            <select className="form-option" onChange={(e)=>filterBedrooms(e.target.value)} >
                                                <option>Any</option>   
                                                {numbers.map(number=><option>{number}</option>)}
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
                                home.city_id===1).length} homes in {currentCity} </h3>
                        </div>
                        <div className="homes">
                            
                            {homes.filter(item=>item.city_id===1).map(home=> 
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
