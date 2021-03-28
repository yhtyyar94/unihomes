import React, { useState, useEffect } from "react";
import './MainContent.css'
import axios from "axios";
import { useHistory } from "react-router";


  const MainContent = () => {
    const [images, setImages] = useState("");
    const history=useHistory();
    useEffect(() => {
      axios 
        .get(`http://localhost:5001/api/getcities/`)
        .then((res) => setImages(res.data))
        .catch((err) => console.log(err));
    }, []);
  
  
    return (
        <div className="mainContent">
    <div className="main-title">
    <p>Student accommodation in our top cities</p>
    </div>
   
   
    <div className="main-image">
    {images.length !== 0 && images.slice(0, 9).map((image) => (
            <div className="main-image-all">
              {/*} role="image" aria-label="image description"
              style={{ 
                backgroundImage: `url(${image.image})`,
                backgroundRepeat: 'no-repeat',  
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }} >  */}   

           <img src={image.url}></img>
           <div  className="top-text">
              <h3>{image.name}</h3>
              <p > 26 properties</p>
              </div>
              </div>
            ))}

    </div>

    <div className="main-allCities">
    <button className="btn" onClick={()=>history.push('/student-accommodation')}>See all cities</button>
    </div>

    <div className="main-search">
    <p className="p">Compare all inclusive student homes.</p>
    <div className="box-cont">
        <div className="box">
        <img src={process.env.PUBLIC_URL + '/MainContent/img/img1.png'}/>
        <br/><h2>Search</h2>
        <p>Find your dream home in the perfect area near your university.</p>
        </div>
        <div className="box">
        <img src={process.env.PUBLIC_URL + '/MainContent/img/img2.png'}/>  
        <br/> <h2>Compare</h2>
        <p>Compare student accommodation to find the right home for you.</p>
        </div>
        <div className="box">
        <img src={process.env.PUBLIC_URL + '/MainContent/img/img3.png'}/>
        <br/><h2>Bills Included</h2>
        <p>Bills are included in all rent prices. No hidden fees.</p>
        </div>
    </div>
    <div><a href="#search"><button className="box-btn" >Search and Compare</button></a></div>

    </div>
   
    <div className="main-con">
        <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/MainContent/icon/vector.png'}  />
          <br />
          <h3>1000s of Homes</h3>
          <p>
            With the best selection of student accommodation, find a home that’s
            right for you.
          </p>
        </div>
        <div className="img-box1">
        <img  src={process.env.PUBLIC_URL + '/MainContent/icon/malte.png'}  />

        </div>
        <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/MainContent/icon/vector1.png'}  />
        <h3>Save Shortlists</h3>
          <p>
            Shortlist your favourite properties and send enquiries in one click.
          </p>
        </div>


    </div>

    <div className="main-empty"></div>







            
        </div>
    )
}

export default MainContent