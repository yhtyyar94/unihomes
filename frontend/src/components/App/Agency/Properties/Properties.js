import React, { useState, useEffect } from "react";
import {FaBed,FaBath} from "react-icons/fa";
import { AiFillEdit,AiOutlineDelete  } from "react-icons/ai";
import './Properties.css'
import axios from "axios";
import { useHistory  } from "react-router-dom";



const Properties = ({userInfo}) => {

    const [properties,setProperties] = useState([]);
 
    const history=useHistory();
    useEffect(() => {
        axios
          .get(`https://unilive-backend.herokuapp.com/api/getpropertiesbyuser/${userInfo.data._id}`)
          .then((res) => setProperties(res.data))
          .catch((err) => console.log(err));
          window.scroll(0,0)
      }, []);

const deleteProperty = (id) =>{
    axios.delete(`https://unilive-backend.herokuapp.com/api/deleteproperty/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
    window.location.reload();

}

useEffect(() => {
    window.scroll(0, 0);
}, []);
    return (

     <div id="properties">

<div className="property-title"><h1>All Properties <span style={{fontSize:"20px"}}>(Total: {properties.length})</span> </h1></div>
{properties.length !==0 && properties.map((property,index)=>(


  <div className="properties">
  <div className="properties-img"><img src={`https://unilive-backend.herokuapp.com/${property.images[0].filePath}`} alt=""/></div>
      <div className="property-content">
      <div  className="bill" style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£{property.rent} </span>pppw including bills</p></div>
       <div className="bed" style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"2px",marginLeft:"20px"}}/>  &nbsp; {property.bedroom}</div>
      <div className="bath" style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; {property.bathroom}</div> 
  </div>
  <div className="property-btn">
      <button className="property-btn-edit" onClick={()=>history.push(`/agency/addproperty/${property._id}`)} ><AiFillEdit/>&nbsp; Edit</button>
      <button className="property-btn-del" onClick={()=>deleteProperty(property._id)}><AiOutlineDelete  /> &nbsp; Delete</button>

  </div>
  </div>
)

 
)}


        </div>
    )
}

export default Properties
