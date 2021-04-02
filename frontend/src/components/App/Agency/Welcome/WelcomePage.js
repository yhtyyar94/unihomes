import React, { useState, useEffect } from "react";
import './WelcomePage.css'



const WelcomePage = () => {
    const [company, setCompany] = useState();
   
	useEffect(() => {
        setCompany(JSON.parse(sessionStorage.getItem('userInfo')).data.company);
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
