import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
 
const TopCities = () => { 

    const [cities, setCities] = useState(null)

	const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:5001/api/getcities')
        .then(res => setCities(res.data))
        .catch(err => console.log(err))
		window.scroll(0,0)
    },[])

  
	return (
		<div className="container">
			<div className="banner top-cities">
				<div className="banner-text">
					<h1>Student Accommodation</h1>
				</div>
				<div className="overlay" />
			</div>
			<div className="container-text">
				<p>
					UniHomes have student accommodation available across the UK. Whether you’re looking for a large
					house share or a cosy little studio flat, you'll find it here with us.
                    
					Are you after somewhere close to campus? Or do you already know the top student areas to live in
					your city? Whatever you’re after, we can help you find the right student accommodation for you.
                    
					Plus, every single home you see on UniHomes has all bills included! We'll sort your electricity,
					water, gas, internet and even your TV licence - so you have one less thing to worry about on moving day. So, grab yourself a drink and pick out the best student accommodation for you and your mates
				</p>
			</div>
            <div className="container-header"><h1>Student Property Search By City</h1></div>
            <div className="container-cities">
                {cities && cities.map(city => <div key={city._id} onClick={() => history.push(`/cities/${city.name}/`)}><p>{city.name}</p></div>)}
            </div>
		</div>
	);
};

export default TopCities;
