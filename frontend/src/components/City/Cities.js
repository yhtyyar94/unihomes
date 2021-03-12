import React,{useState} from 'react'
import data from './Data'
import City from './City'
import './Cities.css'

export default function Cities() {

const [homes,setHomes]=useState(data)

// const change=()=>{

// }
    return (
    <div>
        <div className="filter">
            <h3>Student accomodation in {homes[0].city}</h3>
            <form>
                <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
                <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
                <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
                <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
                <select>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
            </form>
        </div> 
        <div >
                <p> {homes.filter(item=>item.city==='Liverpool').length} homes in {homes[0].city}</p>
                <div className="homes">
                    {homes.map(home=> 
                    <City home={home}/>       
                    )}
                </div>
                {/* <button>View More</button> */}
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
