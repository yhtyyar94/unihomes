import React, { useEffect, useState } from 'react'
import {BiEnvelope} from 'react-icons/bi'
import ShortListModal from '../ShortListBook'
import City from '../City/City'
import axios from 'axios'


const Shortlist = ({shortlist, setShortlist, changeShortlist}) => {

    const [shortlistLocal, setShortlistLocal] = useState([])
    const [homesShortlist, setHomesShortlist] = useState([]);



    useEffect(() => {
        setShortlistLocal(JSON.parse(localStorage.getItem('shortlist')))
       
        let array =[]
        for(let i = 0; i < JSON.parse(localStorage.getItem('shortlist')).length; i++) {
            axios.get(`https://unilive-backend.herokuapp.com/api/getproperties/${JSON.parse(localStorage.getItem('shortlist'))[i]}`)
          .then((res) => {
            array.push(res.data)
          })
          .catch((err) => {
            console.log(err);
          });
        }
        setHomesShortlist(array)
        window.scroll(0,0)
      }, []);

    return ( 
        <div className="shortlist">
            <div className="shortlist-header">
                <h1>Shortlist</h1>
            </div>
            <div className="shortlist-counter">

                {shortlistLocal && shortlistLocal.length<=1
                ? <h3> {shortlistLocal.length} property shortlisted</h3>
                : <h3> {shortlistLocal.length} properties shortlisted</h3>}
                
         
            </div>
     
            <div className="shortlist-body" style={{backgroundColor:"#e5e5e5"}}>
                {homesShortlist && homesShortlist.map(item => <City home={item} shortlist={shortlist} setShortlist={setShortlist} changeShortlist={changeShortlist}/>)}
            </div>
        </div>
    )
}

export default Shortlist


