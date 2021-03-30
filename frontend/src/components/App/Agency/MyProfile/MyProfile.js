import React, { useState, useEffect } from "react";
import "./MyProfile.css";
import axios from "axios";



const MyProfile = () => {
 
  
  return (
    <div id="myprofile">
      <div className="myprofile">
        <div className="myprofile-left">
            <h1>My Profile</h1>
            <div className="profile-img"> 
            <img src={process.env.PUBLIC_URL + '/MainContent/profile.png'}/>
            </div>
           <p>change your photo  <button>change</button></p>
        </div>
        <form id="profile-right">

  <div className="profile-right">
  <p>
   <label for="firstName">First Name :</label>
   <input type="text" id="firstName" name="firstName"/></p>
   <p>
   <label for="lastName">Last Name :</label>
   <input type="text" id="lastName" name="lastName"/></p>
   <p>
   <label for="company">Company :</label>
   <input type="text" id="company" name="company"/></p>
   <p>
   <label for="email">Email :</label>
   <input type="email" id="email" name="email"  /></p>
   <p>
  
   <label for="password">Existing Password :</label>
   <input type="password" id="password" name="password"/></p>
   <p>
   <label for="newpassword">New Password :</label>
   <input type="password" id="newpassword" name="newpassword"/></p>
   <p>
   <label for="confirmpassword">Confirm New Password :</label>
   <input type="password" id="confirmpassword" name="confirmpassword"/></p>
   <button>Update</button>
   </div>


        </form>
      </div>
    </div>
  );
};

export default MyProfile;
