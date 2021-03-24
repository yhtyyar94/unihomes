import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddProperty.css';

const AddProperty = () => {
	const [ cities, setCities ] = useState(null);
	const [ cityId, setCityId ] = useState(null);
	const [ cityName, setCityName ] = useState('Leeds');
	const [ rent, setRent ] = useState(null);
	const [ images, setImages ] = useState([]);
	const [ bedrooms, setBedrooms ] = useState(null);
	const [ bathrooms, setBathrooms ] = useState(null);
	const [ street, setStreet ] = useState(null);
	const [ district, setDistrict ] = useState(null);
	const [ town, setTown ] = useState(null);
	const [ postcode, setPostcode ] = useState(null);
	const [ type, setType ] = useState(null);
	const [ deposit, setDeposit ] = useState(null);
	const [ from, setFrom ] = useState(null);
	const [ to, setTo ] = useState(null);
	const [ keys, setKeys ] = useState('');
	const [ description, setDescription ] = useState(null);
	const [multipleFiles, setMultipleFiles ] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5001/api/getcities')
			.then((res) => setCities(res.data))
			.catch((err) => console.log(err));
	}, []);

	const multipleFileChange = e => {
		setMultipleFiles(e.target.files)
	}



	const onSubmit = async (e) => {
		e.preventDefault()

		const keyFeatures = keys.split(',')
		const formData = new FormData()
		for (let i = 0; i < multipleFiles.length; i++) {
			formData.append('images', multipleFiles[i])
		}
		for (let i = 0; i < keyFeatures.length; i++) {
			formData.append('keyFeatures', keyFeatures[i])
		}
		formData.append('city', cityId)
		formData.append('user', '6046459eeb43bf37ecf5147a')
		formData.append('address', street)
		formData.append('address', district)
		formData.append('address', town)
		formData.append('address', postcode)
		formData.append('home_description', description)
		formData.append('bedroom', bedrooms)
		formData.append('deposit', deposit)
		formData.append('availability', from)
		formData.append('availability', to)
		formData.append('bathroom', bathrooms)
		formData.append('type', type)
		formData.append('rent', rent)
		axios.post('http://localhost:5001/api/createproperty', formData).then(res => console.log(res.data)).catch(err => console.log(err))
	}
	return (
		<div className="AddProperty">
			<form className="add-form" onSubmit={onSubmit}>
				<div className="row row1">
					<div>
						<label htmlFor="cities">City Name</label>
						<select id="cities" name="cities" onChange={(e) => {
							setCityName(e.target.value); 
							const values = e.target.children
							for(let i = 0; i < values.length; i++) {
								if(values[i].label === e.target.value) {
									setCityId(values[i].id)
									break;
								}
							}
						}} required>
						<option selected disabled>Select City</option>
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
						<input type="number" id="rent" placeholder="Please enter weekly price" value={rent} onChange={(e) => setRent(e.target.value)} required/>
					</div>
				</div>
				<div className="row row2">
					<label htmlFor="images">Upload Images</label>
					<input type="file" multiple onChange={e => multipleFileChange(e)} required/>
				</div>
				<div className="row row3">
					<div>
						<label htmlFor="bedrooms">Number of Bedrooms</label>
						<input type="number" id="bedrooms" placeholder="Number of Bedrooms" onChange={(e)=> setBedrooms(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="bathrooms">Number of Bathrooms</label>
						<input type="number" id="bathrooms" placeholder="Number of Bathrooms" onChange={(e)=> setBathrooms(e.target.value)} required/>
					</div>
				</div>
				<div className="row row4">
					<div>
						<label htmlFor="street">Street Name</label>
						<input type="text" id="street" placeholder="Street name" value={street} onChange={(e)=> setStreet(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="locality">District</label>
						<input type="text" id="locality" placeholder="District" value={district} onChange={(e) => setDistrict(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="town">Post Town</label>
						<input type="text" id="town" placeholder="Post Town" value={town} onChange={(e) => setTown(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="postcode">Postcode</label>
						<input type="text" id="postcode" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} required/>
					</div>
				</div>
				<div className="row row5">
					<div>
						<label htmlFor="type">Type of Property</label>
						<select id="type" name="type" onChange={(e) => setType(e.target.value)}>
							<option value="" disabled selected required>
								Select Property Type
							</option>
							<option value="Home">Home</option>
							<option value="Apartment">Apartment</option>
						</select>
					</div>
					<div>
						<label htmlFor="deposit">Deposit</label>
						<input type="number" id="deposit" placeholder="Deposit" value={deposit} onChange={(e) => setDeposit(e.target.value)} required/>
					</div>
				</div>
				<div className="row row6">
					<div>
						<label htmlFor="from">Available from</label>
						<input type="date" id="from" onChange={(e) => setFrom(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="to">to</label>
						<input type="date" id="to" onChange={(e) => setTo(e.target.value)} required/>
					</div>
				</div>
				<div className="row row7">
					<label htmlFor="keys">Key Features(Please separate features with commas)</label>
					<input type="text" id="keys" placeholder="Key Features" value={keys} onChange={(e) => setKeys(e.target.value)} required/>
				</div>
				<div className="row row8">
					<label htmlFor="description">Home Description</label>
					<textarea name="description"type="text" id="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required/>
				</div>
				<div className="row row9">
					<input type="submit" value="Submit" />
				</div>
			</form>
		</div>
	);
};

export default AddProperty;
