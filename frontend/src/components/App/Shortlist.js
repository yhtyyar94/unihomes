import React, { useEffect, useState } from 'react'
import City from '../City/City'
import data from '../City/Data'

const Shortlist = () => {

    const [shortlists, setShortlist] = useState([])

    useEffect(() => {
        const lists = JSON.parse(localStorage.getItem('lists'))
        setShortlist(lists)
    },[])

    return (
        <div className="shortlist">
            <div className="shortlist-header">
                <h1>Shortlist</h1>
            </div>
            <div className="shortlist-counter">
                <h3>{shortlists ? shortlists.length : 0} property shortlisted</h3>
                <p>Book viewings for multiple homes in one quick message. You'll usually hear back from the letting agent or landlord within 24 hours to arrange viewings.</p>
            </div>
            <div className="shortlist-body">
                {data.map(city => <City home={city}/>)}
            </div>
        </div>
    )
}

export default Shortlist


