import React from 'react';
import "./Header.css";
import { MdHome } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Login from "./LoginPop.js";





export default function Header({toggleLogin}) {
    return (
        <div id="header">

            <div>


            </div>
        
        
        <div className = "unihomes-h">
            <ul>
                
            </ul>
            <section className="headernavbar" style={{height: 75, fontSize: 17}}>
                <li >
                <h2 a href="/" id="unihomes" style={{fontSize: 35}}><MdHome />Unihomes</h2>
                </li>

                <button style={{background:"#00bfff"}} href ="/LoginPop" className="navbar-item" onClick={toggleLogin}><MdPerson /> Login</button>               
                <a href ="/shortlists" className="navbar-item"> Shortlist</a>

              <a href ="/contact" className="navbar-item"><MdMail /> Contant Us</a> 
               <a href ="/" className="navbar-item"><MdSearch /> Search</a>
      
            </section>
        </div>
        </div>

    
        

     
    )
}
