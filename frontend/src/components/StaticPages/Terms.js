import React from 'react';
import './Terms.css';

const Terms = () => {
	return (
		<div className="terms-content-container">
			<div className="terms-header">
				<span className="terms-title">Terms & Conditions</span>
			</div>

			<h2 className="terms-content-subtitle">
				1. THESE TERMS AND CONDITIONS
			</h2>
			<p className="terms-content-text">
				1.1. Vivamus non feugiat nunc. Proin laoreet egestas purus, in
				finibus purus dapibus vitae. Nulla quis purus vel arcu porta
				ultrices. Nullam semper varius tortor vel condimentum. Aenean
				placerat interdum pretium. <br />
				<br />
				1.2. Vestibulum porttitor ex condimentum, viverra felis sed, euismod
				tellus. Vestibulum accumsan pellentesque venenatis. Vivamus diam
				augue, lacinia at tellus sed, fringilla vulputate leo. Ut sit amet
				dui rutrum diam lacinia congue.
			</p>
			<h2 className="terms-content-subtitle">
				2. INFORMATION ABOUT US AND HOW TO CONTACT US
			</h2>
			<p className="terms-content-text">
				2.1. Who we are. We are UniLive Limited, Pellentesque sollicitudin
				lectus libero, finibus euismod ex vulputate id. Pellentesque
				habitant morbi tristique senectus et netus et malesuada fames ac
				turpis egestas. Vivamus pharetra facilisis tempus. Ut sodales magna
				non eros cursus, quis dapibus erat condimentum. Quisque neque orci,
				consectetur nec tortor ut, mattis semper risus.
				<br />
				<br /> 2.2. How to contact us. You can contact us by telephoning
				Maecenas eget diam ac elit sagittis rhoncus sit amet ac risus.
				Vestibulum mollis quam id augue tincidunt, rutrum pharetra risus
				aliquam. Nunc pellentesque elementum risus, sit amet finibus odio
				vulputate sed..
				<br />
				<br /> 2.3. In volutpat, neque et volutpat lobortis, lectus sapien
				posuere ipsum, a commodo dui justo in mauris. Ut imperdiet metus sed
				urna sagittis sagittis. Interdum et malesuada fames ac ante ipsum
				primis in faucibus.
				<br />
				<br />
				2.4. Praesent aliquet facilisis sapien tempus auctor. Maecenas
				lacinia nisl sed sapien bibendum, ut vestibulum dolor lacinia. Nulla
				vulputate nulla ut rhoncus egestas.
			</p>
			<h2 className="terms-content-subtitle">3. OUR CONTRACT WITH YOU</h2>
			<p className="terms-content-text">
				3.1. Morbi viverra condimentum massa, finibus tristique arcu
				tincidunt in. Cras diam justo, aliquam vitae sapien tincidunt,
				venenatis eleifend orci.
				<br />
				<br /> 3.2. Vivamus pharetra facilisis tempus. Ut sodales magna non
				eros cursus, quis dapibus erat condimentum. Quisque neque orci,
				consectetur nec tortor ut, mattis semper risus. Suspendisse potenti.
				Nunc dignissim orci at enim malesuada, suscipit aliquam nibh tempus.
				Morbi faucibus rhoncus elit ut eleifend.
				<br />
				<br /> 3.3. Praesent aliquet facilisis sapien tempus auctor.
				Maecenas lacinia nisl sed sapien bibendum, ut vestibulum dolor
				lacinia. Nulla vulputate nulla ut rhoncus egestas. Nullam mollis
				quis nulla eu scelerisque.
			</p>

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

export default Terms;
