import React, { useState, useEffect } from "react";
import './WelcomePage.css'



const WelcomePage = ({userInfo}) => {
    const [company, setCompany] = useState("");
    useEffect(() => {
       userInfo && setCompany(userInfo.data.company);
      }, []);
      
    console.log(userInfo)
	useEffect(() => {
		window.scroll(0, 0);
	}, []);


    return (
        <div className="welcomePage">
            <div className="welpage">
            <h1>Welcome</h1>
            <h2>{company}</h2>
            </div>
        </div>
    )
}

export default WelcomePage
