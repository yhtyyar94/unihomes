import React, { useState, useEffect } from "react";
import "./MainContent.css";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import vector from "./icon/Vector.png";
import malte from "./icon/malte.png";
import stroke from "./icon/Vector (Stroke).png";
import axios from "axios";

const MainContent = () => {
  const [images, setImages] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getcities/`)
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main_content">
      <section id="main_content">
        <section className="main_cont_header">
          <p>Student accommodation in our top cities</p>
        </section>
        <section id="main_cont_img">
          {images.length !== 0 && images.slice(0, 9).map((image) => (
              <div
                className="main_cont_img_box">
                <img src={image.image} />
               
                  <h3>{image.name}</h3>
                  <p> 26 properties</p>
              
              </div>
            ))}
        </section>
        <section className="main_cont_btn">
          <button className="btn">See all cities</button>
        </section>
      </section>

      <section id="main_cont_search">
        <div className="mcs_header">
          <p>Compare all inclusive student homes.</p>
        </div>
        <div className="mcs_content">
          <div className="mcs_box1">
            {/* <img src={process.env.PUBLIC_URL + '/1.jpg'} /> */}
            <img src={img1} />

            <h2>Search</h2>
            <p>
              Find your dream home in the perfect area near your university.
            </p>
          </div>
          <div className="mcs_box2">
            <img src={img2} />
            <h2>Compare</h2>
            <p>Compare student accommodation to find the right home for you.</p>
          </div>
          <div className="mcs_box3">
            <img src={img3} />
            <h2>Bills Included</h2>
            <p>Bills are included in all rent prices. No hidden fees.</p>
          </div>
        </div>
        <div>
          <button className="mcs_btn">Search and Compare</button>
        </div>
      </section>
      <section id="using_grid">
        <div className="using_blog1">
          <img src={vector} />
          <br />
          <h3>1000s of Homes</h3>
          <p>
            With the best selection of student accommodation, find a home that’s
            right for you.
          </p>
        </div>
        <div className="using_blog2">
          <img src={malte} />

          <img />
        </div>
        <div className="using_blog3">
          <img src={stroke} />
          <br />
          <h3>Save Shortlists</h3>
          <p>
            Shortlist your favourite properties and send enquiries in one click.
          </p>
        </div>
      </section>
      <section className="book_demo"></section>
    </div>
  );
};

export default MainContent;
