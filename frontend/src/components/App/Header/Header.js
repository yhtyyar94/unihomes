import React from 'react';
import "./Header.css";
import { MdHome } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { MdBookmark } from "react-icons/md";





export default function Header() {
    return (
        <div id="header">
        
        
        <div className = "unihomes-h">
            <ul>
                
            </ul>
            <section className="headernavbar" style={{height: 75, fontSize: 17}}>
                <li >
                <h2 a href="/" id="unihomes" style={{fontSize: 35}}><MdHome />Unihomes</h2>
                </li>
                <a href ="/LoginPop" className="navbar-item"><MdPerson /> Login</a>               
                <a href ="/shortlists" className="navbar-item"><MdBookmark /> Shortlist</a>
              <a href ="/contact" className="navbar-item"><MdMail /> Contant Us</a> 
               <a href ="/" className="navbar-item"><MdSearch /> Search</a>
      
            </section>
        </div>

        </div>

     
    )
}
