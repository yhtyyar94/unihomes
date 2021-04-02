import React,{useLayoutEffect,useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './City.css'
import {FaBed,FaBath,FaHome} from "react-icons/fa";
import { BsHeart,BsHeartFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

 
export default function City({home, shortlist, setShortlist, changeShortlist}) {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

     
    
      
    const addToShortlist=()=>{     
            let idList = JSON.parse(localStorage.getItem('shortlist'))
            idList.push(home._id)
            localStorage.setItem('shortlist',JSON.stringify(idList))
            setShortlist(idList)
            console.log(home._id)
      } 


    const removeFromShortlist=()=>{

        let newShortlist = shortlist

        for( let i = 0; i < newShortlist.length; i++){ 
    
            if ( newShortlist[i] === home._id) { 
        
                newShortlist.splice(i, 1); 
            }
    }
    localStorage.setItem('shortlist',JSON.stringify(newShortlist));
    setShortlist(newShortlist)
    changeShortlist()

    }
 console.log(shortlist)
    return ( 
        <div className="city">
                <div className="home-img">
                    <img  src={`https://unilive-backend.herokuapp.com/${home.images[0].filePath}`} alt="home" style={{width:"100%",height:"auto",marginBottom:"-4px"}} />
                </div>    
                <div className="rent-area">
                        <div style={{marginLeft:"-5%"}}>
                            <p className="rent-text"><span className="rent-span">£{home.rent} </span>pppw including bills</p>
                        </div>

                        <div style={{fontSize:"22px",marginRight:"10px"}}><FaBed  className="bed-icon" size={22} />  &nbsp; {home.bedroom}</div>
                       
                        <div style={{fontSize:"22px",marginRight:"8px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; {home.bathroom}</div> 
                      
                </div> 
               

                <div className="bedroom-area">
                    <p style={{padding:"7px",marginLeft:"8px"}}> {home.bedroom} Bedroom {home.type}</p>
                </div>

                <div className="address-area">
                    <p style={{padding:"7px",marginLeft:"8px"}}><MdLocationOn fill="#03c5f0" size={20}/>{home.address[0]} Street, {home.address[1]}, {home.address[3]}</p>
                </div>
 
                <div className="buttons"> 
                    <div className="shortlist-btn"> 
                   
                    {shortlist && shortlist.includes(home._id) ? <p onClick={removeFromShortlist}> <BsHeartFill fill="red" /> &nbsp; <span className="remove-btn">Remove</span></p> 
                    : <p onClick={addToShortlist}> <BsHeart className="heart-icon" /> &nbsp; <span className="short-btn">Shortlist</span><span className="add-btn">Add</span></p>}
                    </div>
                   
                    <Link className="view-btn" to={`/homedetails/${home._id}`}><FaHome style={{fill:"white"}}/> <IoHomeOutline/> &nbsp; View Home</Link>
               
                </div>          
        </div>
    ) 
}
 