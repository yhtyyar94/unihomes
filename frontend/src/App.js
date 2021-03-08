import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/getcities')
    .then(res => res.json())
    .then(data => setCities(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    <ul>
    {cities && cities.map(city => <div key={city._id} className="cities">
    <img src={city.image} alt={city.name}/>
    <p>{city.name}</p>
    </div>)}
    </ul>
    </div>
  );

}

export default App;
