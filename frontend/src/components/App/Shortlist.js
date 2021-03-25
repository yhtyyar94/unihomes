import React, { useEffect, useState } from 'react'
import {BiEnvelope} from 'react-icons/bi'
import ShortListModal from '../ShortListBook'
import City from '../City/City'
import axios from 'axios'


const Shortlist = ({homes}) => {

    const [shortlist, setShortlist] = useState(null)
    const [homesShortlist, setHomesShortlist] = useState(homes);

    useEffect(() => {
        const lists = JSON.parse(localStorage.getItem('shortlist'))
        setShortlist(lists)
    },[shortlist])
    useEffect(() => {
        axios
          .get("http://localhost:5000/homes")
          .then((res) => {
            setHomesShortlist(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return ( 
        <div className="shortlist">
            <div className="shortlist-header">
                <h1>Shortlist</h1>
            </div>
            <div className="shortlist-counter">
                <h3>{shortlist ? shortlist.length : 0} property shortlisted</h3>
                <p>Book viewings for multiple homes in one quick message. You'll usually hear back from the letting agent or landlord within 24 hours to arrange viewings.</p>
            </div>
     
            <div className="shortlist-body" style={{backgroundColor:"#e5e5e5"}}>
                {homesShortlist.filter(home => shortlist.includes(home.id)).map(item=><City home={item}/>) }
            </div>

            <div className="book-viewings">
                <button> <div className="icon"><BiEnvelope/></div>Book Viewings for All</button>
            </div>
     
        </div>
    )
}

export default Shortlist


