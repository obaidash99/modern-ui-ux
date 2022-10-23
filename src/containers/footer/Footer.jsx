import React from 'react';
import './footer.css';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer-parent">
			<div className="footer-1">
				<h1>Do you want to step in to the future before others</h1>
				<button type="button">Request Early Access</button>
			</div>
			<div className="footer-2">
				<div className="navigations">
					<div className="logo">
						<img src={logo} alt="LOGO" />
						<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
					</div>
					<div className="navs">
						<div>
							<ul>
								<span>Links</span>
								<li>
									<Link to="">Overons</Link>
								</li>
								<li>
									<Link to="">Social Media</Link>
								</li>
								<li>
									<Link to="">Counters</Link>
								</li>
								<li>
									<Link to="">Contact</Link>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<span>Company</span>
								<li>
									<Link to="">Terms & Conditions</Link>
								</li>
								<li>
									<Link to="">Privacy Policy</Link>
								</li>
								<li>
									<Link to="">Contact</Link>
								</li>
							</ul>
						</div>
						<div>
							<ul>
								<span>Get in touch</span>
								<li>Crechterwoord K12 182 DK Alknjkcb</li>
								<li>
									<a href="tel:+085-132567">085-132567</a>
								</li>
								<li>
									<a href="mailto:info@test.net">info@test.net</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-3">
				<p>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
