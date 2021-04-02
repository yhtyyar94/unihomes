import React, { useState, useEffect } from "react";
import "./MyProfile.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const MyProfile = ({ userInfo }) => {
 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

console.log(userInfo)
 

 

  const onSubmit = e =>{
    e.preventDefault()
    axios
    .put(`https://unilive-backend.herokuapp.com/api/agents/${userInfo.data._id}`,{
      firstName:firstName,
      lastName:lastName,
      company:company
    })
    .then(res => {console.log(res.data);
      alert('Successfully updated!!!')
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    setEmail(userInfo.data.email);
    setFirstName(userInfo.data.firstName);
    setLastName(userInfo.data.lastName);
    setCompany(userInfo.data.company);
  }, []);

 

  return (
    <div id="myprofile">
      <div className="myprofile">
        <div className="myprofile-left">
          <h1>My Profile</h1>
          <div className="profile-img">
            <img src={process.env.PUBLIC_URL + "/MainContent/profile.png"} />
          </div>
          <p>
            change your photo <button>change</button>
          </p>
        </div>
        <div>
        <form onSubmit={onSubmit} id="profile-right">
          <div className="profile-right">
            <p>
              <label for="firstName">First Name :</label>
              <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" id="firstName" name="firstName"
              />
            </p>
            <p>
              <label for="lastName">Last Name :</label>
              <input value={lastName} onChange={(e)=>setLastName(e.target.value)} type="text" id="lastName" name="lastName" />
            </p>
            <p>
              <label for="company">Company :</label>
              <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" id="company" name="company" />
            </p>
            <p>
              <label for="email">Email :</label>
              <input value={email} type="email" id="email" name="email" />
            </p>
            <p>
              <label for="password">Existing Password :</label>
              <input  type="password"  id="password"  name="password" />
            </p>
            <p>
              <label for="newpassword">New Password :</label>
              <input  type="password" id="newpassword"  name="newpassword" />
            </p>
            <p>
              <label for="confirmpassword">Confirm New Password :</label>
              <input   type="password"  id="confirmpassword"    name="confirmpassword" />
            </p>
            <button >Update</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
