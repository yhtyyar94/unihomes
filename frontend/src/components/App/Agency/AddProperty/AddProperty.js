import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddProperty.css';

const AddProperty = () => {
	const [ cities, setCities ] = useState(null);
	const [ cityName, setCityName ] = useState('Leeds');
	const [ rent, setRent ] = useState(null);
	const [ images, setImages ] = useState(null);
	const [ bedrooms, setBedrooms ] = useState(null);
	const [ bathrooms, setBathrooms ] = useState(null);
	const [ street, setStreet ] = useState(null);
	const [ locality, setLocality ] = useState(null);
	const [ town, setTown ] = useState(null);
	const [ postcode, setPostcode ] = useState(null);
	const [ type, setType ] = useState(null);
	const [ deposit, setDeposit ] = useState(null);
	const [ from, setFrom ] = useState(null);
	const [ to, setTo ] = useState(null);
	const [ keys, setKeys ] = useState(null);
	const [ description, setDescription ] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:5001/api/getcities')
			.then((res) => setCities(res.data))
			.catch((err) => console.log(err));
	}, []);
console.log(cityName);
	return (
		<div className="AddProperty">
			<form className="add-form">
				<div>
					<div>
						<label htmlFor="cities">City Name</label>
						<select id="cities" name="cities" onChange={(e) => setCityName(e.target.value)}>
							{cities &&
								cities.map((city) => (
									<option value={city.name} id={city._id} key={city.name}>
										{city.name}
									</option>
								))}
						</select>
					</div>
					<div>
						<label htmlFor="rent">Weekly Rent</label>
						<input type="number" id="rent" />
					</div>
				</div>
				<div>
					<label htmlFor="images">Uploaded Images</label>
					<input type="file" multiple />
				</div>
				<div>
					<div>
						<label htmlFor="bedrooms">Number of Bedrooms</label>
						<input type="number" id="bedrooms" />
					</div>
					<div>
						<label htmlFor="bathrooms">Number of Bathrooms</label>
						<input type="number" id="bathrooms" />
					</div>
					<div>
						<div>
							<label htmlFor="street">Number and Street Name</label>
							<input type="text" id="street" />
						</div>
						<div>
							<label htmlFor="locality">Locality Name</label>
							<input type="text" id="locality" />
						</div>
						<div>
							<label htmlFor="town">Post Town</label>
							<input type="text" id="town" />
						</div>
						<div>
							<label htmlFor="postcode">Postcode</label>
							<input type="text" id="postcode" />
						</div>
					</div>
				</div>
                <div>
                    <div>
                        <label htmlFor="type">Type of Property</label>
                        <select id="type" name="type">
                            <option value="" disabled selected>Select Property Type</option>
                            <option value="Home">Home</option>
                            <option value="Apartment">Apartment</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="deposit">Deposit</label>
						<input type="number" id="deposit" />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="from">Available from</label>
                        <input type="date" id="from" />
                    </div>
                    <div>
                        <label htmlFor="to">to</label>
                        <input type="date" id="to" />
                    </div>
                </div>
                <div>
                    <label htmlFor="keys">Key Features</label>
                    <input type="text" id="keys" />
                </div>
                <div>
                    <label htmlFor="description">Home Description</label>
                    <input type="text" id="description" />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
			</form>
		</div>
	);
};

export default AddProperty;
