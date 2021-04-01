import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			<div className="about-header">
				<span className="aboutus-title">About Us</span>
			</div>
			<div className="aboutus-content">
				<div>
					<h2 className="aboutus-content-title">
						We help finding your dream student home.
					</h2>
				</div>
				<div className="aboutus-content-text-container">
					<p className="aboutus-content-text">
						UniLive lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Fusce id odio quis sem euismod eleifend quis eu lacus.
						Quisque quis lacinia magna. Vivamus ornare libero magna, eget
						sodales sem sagittis at. Morbi justo orci, fermentum vitae
						blandit ac, efficitur sit amet augue. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Suspendisse ac nisi sem. Etiam congue massa a ipsum
						iaculis vestibulum. Suspendisse sodales, elit quis imperdiet
						ullamcorper, velit nisi suscipit augue, eget faucibus massa
						lacus vitae mi. Vestibulum condimentum, justo nec tempus
						viverra, neque metus laoreet elit, a consequat risus velit ut
						erat.
					</p>
					<p className="aboutus-content-text">
						Nunc in auctor ligula. Sed eget suscipit arcu. Mauris nec
						lorem est. Phasellus a dapibus mi. Suspendisse ultricies urna
						vitae orci volutpat, eu consequat nibh condimentum. In hac
						habitasse platea dictumst. Quisque ultricies nibh eu nulla
						interdum finibus. Fusce euismod odio vitae eros dignissim, vel
						bibendum ante lacinia. Duis imperdiet eget enim quis
						vestibulum. Suspendisse rutrum, odio id dignissim semper, odio
						risus varius augue, eu mollis quam libero nec purus. Integer
						pellentesque id elit condimentum commodo. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Quisque aliquam blandit elit a venenatis.
					</p>
				</div>
			</div>
			<div className="btn-search-compare-container">
				<a href="/">
					<button
						className="btn-search-compare"
						onClick={() => window.scroll(0, 0)}
					>
						Search and Compare
					</button>
				</a>
			</div>
		</div>
	);
};

export default About;
