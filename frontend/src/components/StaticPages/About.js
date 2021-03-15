import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			<div className="about-header">
				<span className="aboutus-title">About</span>
			</div>
			<div className="aboutus-content">
				<div>
					<h2 className="aboutus-content-title">
						We make finding your perfect student home a whole lot simpler.
					</h2>
				</div>
				<div>
					<p className="aboutus-content-text">
						Founded in 2015, UniHomes is a trusted platform where students
						can find university accommodation with one unique,
						all-important twist: the price of every property on the
						UniHomes website includes utility bills. Our transparent
						approach to advertising accommodation means students can
						budget effectively and are safe in the knowledge that there
						are no additional or hidden costs within the rental price.
					</p>
					<p className="aboutus-content-text">
						Born in Sheffield, UniHomes was created by industry
						professionals and ex-students as a platform to help students
						easily identify their ideal accommodation, while Letting
						Agents are also able to use the service to advertise their
						properties effectively. Whether you’re a student in search of
						your perfect university home or an agent looking for a simple
						property marketing solution, UniHomes provides a practical and
						straightforward system for all.
					</p>
				</div>
			</div>
			<div className="btn-search-compare-container">
				<a href="/">
					<button className="btn-search-compare">
						Search and Compare
					</button>
				</a>
			</div>
		</div>
	);
};

export default About;
