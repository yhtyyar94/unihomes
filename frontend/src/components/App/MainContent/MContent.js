import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MainContent.css';

const MContent = () => {
	const [ cities, setCities ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/getcities')
			.then((res) => setCities(res.data))
			.catch((err) => console.error(err));
	}, []);
	console.log(cities);
	return (
        <div className="mcontent-container">
            <h1>Student accommodation in our top cities</h1>
		<div className="main-content-container">
			{cities.length !== 0 && cities.slice(18, 27).map(city => <div className="image" role="img" aria-label="Image description">
					<div className="inner" style={{ backgroundImage: `url(${city.image})` }} ><h3>{city.name}</h3> <p>23 properties</p></div>
				</div>)}
		</div>
        </div>
	);
};

export default MContent;
