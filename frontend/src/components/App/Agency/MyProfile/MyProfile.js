import React from "react";
import "./MyProfile.css";

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
            <label for="fname">First name :</label>
            <input type="text" id="fname" name="fname"/></p>
            <p>
            <label for="lname">Last Name :</label>
            <input type="text" id="lname" name="lname"/></p>
            <p>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email"/></p>
            <p>
            <label for="company">Company :</label>
            <input type="text" id="company" name="company"/></p>
            <p>
            <label for="epassword">Existing Password :</label>
            <input type="password" id="epassword" name="epassword"/></p>
            <p>
            <label for="npassword">New Password :</label>
            <input type="password" id="npassword" name="npassword"/></p>
            <p>
            <label for="cpassword">Confrim New Password :</label>
            <input type="password" id="cpassword" name="cpassword"/></p>

            <button>Update</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
