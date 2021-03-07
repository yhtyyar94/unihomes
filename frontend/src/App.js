import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/getcities')
    .then(res => res.json())
    .then(data => setCities(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    <ul>
    {cities && cities.map(city => <div className="cities">
    <img src={city.image} alt={city.name}/>
    </div>)}
    </ul>
    </div>
  );

}

export default App;
