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
       </div>
       <div className="banner-bottom">
                    {/* <img src={view} alt="view" className="img"/> */}
                    <h1 >Find student homes with bills included</h1>
                    <h5 >A simple and faster way to search for student accommodation</h5>
        </div>
            
    </div>
    )
}
