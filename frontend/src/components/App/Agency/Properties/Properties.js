import React, { useState, useEffect } from "react";
import {FaBed,FaBath} from "react-icons/fa";
import { AiFillEdit,AiOutlineDelete  } from "react-icons/ai";
import './Properties.css'
import axios from "axios";
import { useHistory } from "react-router";


const Properties = () => {

    const [properties,setProperties] = useState([]);
    
    const history=useHistory();
    useEffect(() => {
        axios
          .get(`http://localhost:5001/api/getproperties`)
          .then((res) => setProperties(res.data))
          .catch((err) => console.log(err));
      }, []);

const deleteProperty =(index)=>{
    alert(index)
    var newProperty =properties;
    newProperty.splice(index,1);
    setProperties([...newProperty]);
}

    return (

     <div id="properties">

<div className="property-title"><h1>All Properties (Total: {properties.length}) </h1></div>
{properties.length !==0 && properties.slice(0,6).map((property,index)=>(


  <div className="properties">
  <div className="properties-img"><img src={property.images[1]}/></div>
      <div className="property-content">
      <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£{property.rent} </span>pppw including bills</p></div>
       <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"2px",marginLeft:"20px"}}/>  &nbsp; {property.bedroom}</div>
      <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; {property.bathroom}</div> 
  </div>
  <div className="property-btn">
      <button className="property-btn-edit" onClick={()=>history.push(`/agency/addproperty/${property._id}`)} ><AiFillEdit/>&nbsp; Edit</button>
      <button className="property-btn-del" onClick={()=>deleteProperty(index)}><AiOutlineDelete  /> &nbsp; Delete</button>

  </div>
  </div>
)

 
)}

         
     {/* <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>
        <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>   <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>   <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>   <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>   <div className="properties">
        <div className="properties-img">img</div>
            <div className="property-content">
            <div style={{marginLeft:"-5%"}}><p style={{fontSize:"18px",padding:0,paddingLeft:20}}><span style={{fontSize:"20px"}}>£70 </span>pppw including bills</p></div>
             <div style={{fontSize:"22px"}}><FaBed size={22}  style={{fill:"white",paddingTop:"4px",marginLeft:"20px"}}/>  &nbsp; 3</div>
            <div style={{fontSize:"22px"}}><FaBath size={17}  style={{fill:"white",paddingBottom:"1px"}}/>  &nbsp; 2</div> 
        </div>
        <div className="property-btn">
            <button>Edit</button>
            <button>Delete</button>

        </div>
        </div>
 */}


        </div>
    )
}

export default Properties
