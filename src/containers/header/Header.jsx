import React from 'react';
import './header.css';

import illustration from '../../assets/header-Illustration.png';
import stats from '../../assets/stats.png';

const Header = () => {
	return (
		<div className="gpt3__header">
			<div className="gpt3__header-content_container">
				<h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all
					exercise blessing. Indulgence way everything joy alteration boisterous the
					attachment. Party we years to order allow asked of.
				</p>
				<div className="gpt3__header-content_container-input">
					<input type="mail" placeholder="Your Email Adress" />
					<button type="button">Get Started</button>
				</div>
				<div className="gpt3__header-content_container-stats">
					<div className="gpt3__header-content_container-stats_image">
						<img src={stats} alt="stats" />
					</div>
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>
			<div className="gpt3__header-illustration">
				<img src={illustration} alt="illustration" />
			</div>
		</div>
	);
};

export default Header;
