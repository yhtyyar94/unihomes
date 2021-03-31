import React, { useState, useEffect } from "react";
import "./MyProfile.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const MyProfile = ({ userInfo }) => {
  const { register, handleSubmit } = useForm();
  const [fullname, setFullName] = useState("");
  const [lastname, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  useEffect(() => {
    setEmail(userInfo.data.email);
  }, []);

  useEffect(() => {
    setFullName(userInfo.data.fullname);
  }, []);

  useEffect(() => {
    setLastName(userInfo.data.lastname);
  }, []);
  useEffect(() => {
    setCompany(userInfo.data.company);
  }, []);

  useEffect(() => {
    setPassword(userInfo.data.password);
  }, []);
  useEffect(() => {
    setNewpassword(userInfo.data.password);
  }, []);

  useEffect(() => {
    setConfirmpassword(userInfo.data.password);
  }, []);
  const onSubmit = (data) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)} id="profile-right">
          <div className="profile-right">
            <p>
              <label for="firstName">First Name :</label>
              <input ref={register}type="text" id="firstName" name="firstName"
              />
            </p>
            <p>
              <label for="lastName">Last Name :</label>
              <input ref={register} type="text" id="lastName" name="lastName" />
            </p>
            <p>
              <label for="company">Company :</label>
              <input value={company} type="text" id="company" name="company" />
            </p>
            <p>
              <label for="email">Email :</label>
              <input value={email} type="email" id="email" name="email" />
            </p>
            <p>
              <label for="password">Existing Password :</label>
              <input value={password} type="password"  id="password"  name="password" />
            </p>
            <p>
              <label for="newpassword">New Password :</label>
              <input  value={newpassword} type="password" id="newpassword"  name="newpassword" />
            </p>
            <p>
              <label for="confirmpassword">Confirm New Password :</label>
              <input   value={confirmpassword}   type="password"  id="confirmpassword"    name="confirmpassword" />
            </p>
            <button>Update</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
