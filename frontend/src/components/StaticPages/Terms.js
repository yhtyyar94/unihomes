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
				1.1. What these terms cover. These are the terms and conditions on
				which we supply goods and services to you in relation to your
				utility package. <br />
				<br />
				1.2. Why you should read them. Please read these terms carefully
				before you submit your order to us. These terms tell you who we are,
				how we will provide goods and services to you, how you and we may
				change or end the contract, what to do if there is a problem and
				other important information.
			</p>
			<h2 className="terms-content-subtitle">
				2. INFORMATION ABOUT US AND HOW TO CONTACT US
			</h2>
			<p className="terms-content-text">
				2.1. Who we are. We are UniHomes and Bills Limited, a company
				registered in England and Wales. Our company registration number is
				09618272 and our registered office is at Daisy Spring Works, 3 Dun
				Street, Sheffield, South Yorkshire, S3 8DW. Our registered VAT
				number is 218500925.
				<br />
				<br /> 2.2. How to contact us. You can contact us by telephoning our
				consumer service team at 0330 822 0266 or by writing to us at
				hello@unihomes.co.uk or at our registered office address (as set out
				above).
				<br />
				<br /> 2.3. How we may contact you. If we need to contact you, we
				will do so by telephone or by writing to you at the email address or
				postal address you provided to us in your order.
				<br />
				<br />
				2.4. "Writing" includes emails. When we use the words "writing" or
				"written" in these terms, this includes emails.
			</p>
			<h2 className="terms-content-subtitle">3. OUR CONTRACT WITH YOU</h2>
			<p className="terms-content-text">
				3.1. How we will accept your order. Our acceptance of your order
				will take place when we email you to accept it.
				<br />
				<br /> 3.2. If we cannot accept your order. If we are unable to
				accept your order, we will inform you of this in writing and will
				not charge you for the goods and services. This might be because of
				unexpected limits on our resources which we could not reasonably
				plan for, because we have identified an error in the price or
				description of the goods and/or services or because we are unable to
				meet a delivery deadline you have specified.
				<br />
				<br /> 3.3. We only sell to the UK. Our website is solely for the
				promotion of goods and services to addresses in the UK.
			</p>

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

export default Terms;
