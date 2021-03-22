import React, { useLayoutEffect, useState, useEffect } from "react";
import City from "./City";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "./Cities.css";
import { FaBed } from "react-icons/fa";

export default function Cities({ homes, cities }) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const history = useHistory();
  const { cityname } = useParams();
  const { bedroom } = useParams();
  const [homesCity, setHomesCity] = useState(homes);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const maxPrice = [65, 80, 100, 120, 140, 160, 180, 200];

  const filterHomeTypes = (homeType) => {
    if (homeType === "Any") {
      setHomesCity(homes);
    } else {
      setHomesCity(homes.filter((home) => home.type === homeType));
    }
  };

  const filterBedrooms = (bedroom) => {
    history.push(`/cities/${cityname}/${bedroom}`);
  };

  const filterBathroom = (bathroom) => {
    if (bathroom === "Any") {
      setHomesCity(homes);
    } else {
      setHomesCity(homes.filter((home) => home.bathroom === bathroom * 1));
    }
  };

  const filterRent = (rent) => {
    if (rent === "Any") {
      setHomesCity(homes);
    } else {
      setHomesCity(homes.filter((home) => home.rent <= rent * 1));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/homes")
      .then((res) => {
        setHomesCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="filter">
      

        {cities.map((city) =>
          city.name === cityname ? (
            <h3 className="title-text">Student accomodation in {city.name} </h3>
          ) : null
        )}

        <form style={{ display: "flex" }}>
          <div className="form-select">
            <label>Bedroom</label>
            <select
              className="form-option"
              onChange={(e) => filterBedrooms(e.target.value)}
            >
              <option value={"allbedrooms"}>Any</option>
              {numbers.map((number) => (
                <option value={number}>{number}</option>
              ))}
            </select>
          </div>
          <div className="form-select">
            <label>Bathroom</label>
            <select
              className="form-option"
              onChange={(e) => filterBathroom(e.target.value)}
            >
              <option value="Any">Any</option>
              {numbers.map((number) => (
                <option value={number}>{number}</option>
              ))}
            </select>
          </div>
          <div className="form-select">
            <label>Max Price</label>
            <select
              className="form-option"
              onChange={(e) => filterRent(e.target.value)}
            >
              <option value="Any">Any</option>
              {maxPrice.map((number) => (
                <option value={number}>£{number}</option>
              ))}
            </select>
          </div>
          <div className="form-select">
            <label>Home Type</label>
            <select
              className="form-option"
              onChange={(e) => filterHomeTypes(e.target.value)}
            >
              <option value="Any">Any</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>
        </form>
      </div>
      <div>
        <div style={{ backgroundColor: "#e5e5e5", padding: "20px" }}>
          {bedroom === "allbedrooms" || !bedroom ? (
            <h3>
              {
                homesCity.filter((home) => home.address.city === cityname)
                  .length
              }{" "}
              homes in{" "}
              {cities.map((city) =>
                city.name === cityname ? <span>{city.name}</span> : null
              )}
            </h3>
          ) : (
            <h3>
              {
                homesCity.filter(
                  (home) =>
                    home.address.city === cityname &&
                    home.bedroom === bedroom * 1
                ).length
              }{" "}
              homes in{" "}
              {cities.map((city) =>
                city.name === cityname ? <span>{city.name}</span> : null
              )}
            </h3>
          )}
        </div>
        <div className="homes">
          {bedroom === "allbedrooms" || !bedroom
            ? homesCity
                .filter((item) => item.address.city === cityname)
                .map((home) => <City home={home} />)
            : homesCity
                .filter(
                  (item) =>
                    item.address.city === cityname &&
                    item.bedroom === bedroom * 1
                )
                .map((home) => <City home={home} />)}
        </div>
      </div>

      <div className="banner-bottom">
        <div className="text">
          {cities.map((city) =>
            city.name === cityname ? (
              <h1>Being a student in {city.name} </h1>
            ) : null
          )}
          {cities.map((city) =>
            city.name === cityname ? <h5>{city.city_description} </h5> : null
          )}
        </div>
      </div>
    </div>
  );
}
