import React, { useState, useEffect } from "react";
import "./MainContent.css";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import home from "./icon/home.png";
import heart from "./icon/heart.png";
import man from "./icon/man.png";

const MainContent = () => {
  const [images, setImages] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://unilive-backend.herokuapp.com/api/getcities/`)
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="mainContent">
      <div className="main-title">
        <p>Student accommodation in our top cities</p>
      </div>

      <div className="main-image">
        {images.length !== 0 &&
          images.slice(0, 9).map((image) => (
            <Link to={`/cities/${image.name}`} className="main-image-all">
              <img src={image.url} alt=""></img>
              <div className="top-text">
                <h3>{image.name}</h3>
                {image.properties && image.properties.length <= 1 ? (
                  <p>{image.properties.length} property</p>
                ) : (
                  <p>{image.properties.length} properties </p>
                )}
              </div>
            </Link>
          ))}
      </div>

      <div className="main-allCities">
        <button
          className="btn"
          onClick={() => history.push("/student-accommodation")}
        >
          See all cities
        </button>
      </div>

      <div className="main-search">
        <p className="p">Compare all inclusive student homes.</p>
        <div className="box-cont">
          <div className="box">
            <img
              src={process.env.PUBLIC_URL + "/MainContent/img/img1.png"}
              alt=""
            />
            <br />
            <h2>Search</h2>
            <p>
              Find your dream home in the perfect area near your university.
            </p>
          </div>
          <div className="box">
            <img
              src={process.env.PUBLIC_URL + "/MainContent/img/img2.png"}
              alt=""
            />
            <br /> <h2>Compare</h2>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="box">
            <img
              src={process.env.PUBLIC_URL + "/MainContent/img/img3.png"}
              alt=""
            />
            <br />
            <h2>Bills Included</h2>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
        <div className="orange">
          <a onClick={() => window.scroll(0, 100)} href="/#" alt="">
            <button className="box-btn">Search and Compare</button>
          </a>
        </div>
      </div>

      <div className="main-con">
        <div className="img-box">
          <img src={home} alt="" />
          <br />
          <h3>1000s of Homes</h3>
          <p>
            With the best selection of student accommodation, find a home that’s
            right for you.
          </p>
        </div>
        <div className="img-box1">
          <img src={man} alt="" />
        </div>
        <div className="img-box">
          <img src={heart} alt="" />
          <h3>Save Shortlists</h3>
          <p>
            Shortlist your favourite properties and send enquiries in one click.
          </p>
        </div>
      </div>

      <div className="main-empty"></div>
    </div>
  );
};

export default MainContent;
