import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './AddProperty.css';
import SuccessMessageaAddProp from './SuccessMessageaAddProp';

const AddProperty = ({userInfo}) => {
	const [ cities, setCities ] = useState(null);
	const [ cityId, setCityId ] = useState(null);
	const [ rent, setRent ] = useState();
	const [	cityName, setCityName ] = useState('');
	const [ bedrooms, setBedrooms ] = useState();
	const [ bathrooms, setBathrooms ] = useState();
	const [ street, setStreet ] = useState('');
	const [ district, setDistrict ] = useState('');
	const [ town, setTown ] = useState('');
	const [ postcode, setPostcode ] = useState('');
	const [ type, setType ] = useState('');
	const [ deposit, setDeposit ] = useState();
	const [ from, setFrom ] = useState('');
	const [ to, setTo ] = useState('');
	const [ keys, setKeys ] = useState('');
	const [ description, setDescription ] = useState('');
	const [multipleFiles, setMultipleFiles ] = useState([]);
	const [successSubmit, setSuccessSubmit] = useState()
	const [successSubmitSpinner, setSuccessSubmitSpinner] = useState()
	const random = Math.floor(Math.random() * 2)
	const accounts = [['aaesgzrz', 'blackeagle4894'], ['jkcpsjeg', 'dlx4axtyg']]

	const {id} = useParams()

	useEffect(() => {
		if(!id) {
			setRent('')
		setBedrooms('')
		setBathrooms('')
		setStreet('')
		setDistrict('')
		setTown('')
		setPostcode('')
		setType('')
		setDeposit('')
		setFrom('')
		setTo('')
		setKeys('')
		setDescription('')
		setCityName('Select City')
		}
		axios
			.get('https://unilive-backend.herokuapp.com/api/getcities')
			.then((res) => setCities(res.data))
			.catch((err) => console.log(err));
		
		if(id) {
			axios.get(`https://unilive-backend.herokuapp.com/api/getproperties/${id}`)
			.then((res => {
					const {data} = res
					setRent(data.rent)
					setCityName(data.cityName)
					setBathrooms(data.bathroom)
					setBedrooms(data.bedroom)
					setStreet(data.address[0])
					setDistrict(data.address[1])
					setTown(data.address[2])
					setPostcode(data.address[3])
					setType(data.type)
					setDeposit(data.deposit)
					setFrom(data.availability[0])
					setTo(data.availability[1])
					setKeys(data.keyFeatures.join(', '))
					setDescription(data.home_description)
					setCityId(data._id)
				})).catch(err => console.log(err));
			}

	}, [id]);
	const multipleFileChange = e => {
		setMultipleFiles(e.target.files)
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		window.scroll(0, 0)
		setSuccessSubmitSpinner(true)
		const formData = new FormData()
		if(multipleFiles.length !==0) {
			for (let i = 0; i < multipleFiles.length; i++) {
				const formsData = new FormData()
				formsData.append('file', multipleFiles[i])
				formsData.append('upload_preset', accounts[random][0])
				await axios.post(`https://api.cloudinary.com/v1_1/${accounts[random][1]}/image/upload`, formsData).then(res => {
					formData.append('images', res.data.url)
				}).catch(err => console.log(err))
			}
		}
		const keyFeatures = keys.split(',')
		for (let i = 0; i < keyFeatures.length; i++) {
			formData.append('keyFeatures', keyFeatures[i])
		}
		formData.append('cityId', cityId)
		formData.append('cityName', cityName)
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
		formData.append('user', userInfo.data._id)
		if (id) {
			await axios.put(`https://unilive-backend.herokuapp.com/api/properties/update/${id}`, formData).then(res => {
				setSuccessSubmitSpinner(false)
				res.data.message && setSuccessSubmit(true);
			}).catch(err => console.log(err))
		} else {
			await axios.post('https://unilive-backend.herokuapp.com/api/createproperty', formData).then(res => {
				setSuccessSubmitSpinner(false)
				res.data.message && setSuccessSubmit(true);
			}).catch(err => console.log(err))
		}
	if(!id) { 
		setRent('')
		setBedrooms('')
		setBathrooms('')
		setStreet('')
		setDistrict('')
		setTown('')
		setPostcode('')
		setType('')
		setDeposit('')
		setFrom('')
		setTo('')
		setKeys('')
		setDescription('')
		setCityName('Select City')
	}
	setTimeout(() => {
		setSuccessSubmit(false)
	}, 2000)
	}

	return (
		<div className="AddProperty">
			{successSubmit && <div className="addproperty-succes-message">
				Your property {id ? 'added' : 'updated'} successfully
			</div>}
			{
				successSubmitSpinner && <SuccessMessageaAddProp />
			}
			<form className="add-form" onSubmit={onSubmit}>
				<div className="row row1">
					<div>
						<label htmlFor="cities">City Name</label>
						<select id="cities" name="cities" value={cityName} onChange={(e) => {
							setCityName(e.target.value); 
							const values = e.target.children
							for(let i = 0; i < values.length; i++) {
								if(values[i].label === e.target.value) {
									setCityId(values[i].id)
									break;
								}
							}
						}} required>
						<option  disabled selected>Select City</option>
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
					<div>
						<label htmlFor="bedrooms">Number of Bedrooms</label>
						<input type="number" id="bedrooms" value={bedrooms} placeholder="Number of Bedrooms" onChange={(e)=> setBedrooms(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="bathrooms">Number of Bathrooms</label>
						<input type="number" id="bathrooms" value={bathrooms} placeholder="Number of Bathrooms" onChange={(e)=> setBathrooms(e.target.value)} required/>
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
						<select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
							<option value="" disabled selected required>
								Select Property Type
							</option>
							<option value="Home">House</option>
							<option value="Apartment">Apartment</option>
						</select>
					</div>
					<div>
						<label htmlFor="deposit">Deposit</label>
						<input type="number" id="deposit" placeholder="Deposit" value={deposit} onChange={(e) => setDeposit(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="from">Available from</label>
						<input type="date" id="from" value={from} onChange={(e) => setFrom(e.target.value)} required/>
					</div>
					<div>
						<label htmlFor="to">to</label>
						<input type="date" id="to" value={to} onChange={(e) => setTo(e.target.value)} required/>
					</div>
				</div>
				<div className="row row7">
					<label htmlFor="keys">Key Features(Please separate features with commas)</label>
					<input type="text" id="keys" placeholder="Key Features" value={keys} onChange={(e) => setKeys(e.target.value)} required/>
				</div>
				<div className="row row8">
					<label htmlFor="description">Home Description</label>
					<textarea name="description" type="text" id="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required/>
				</div>
				<div className="row row2">
					<label htmlFor="images">Upload Images {id && '(If you upload image(s) your old images will be removed)'}</label>
					{id ? <input type="file" multiple onChange={e => multipleFileChange(e)} /> : <input type="file" multiple onChange={e => multipleFileChange(e)} required />}
				</div>
				<div className="row row9">
					<input type="submit" value={id ? 'Update' : 'Submit'} />
				</div>
			</form>
		</div>
	);
};

export default AddProperty;
