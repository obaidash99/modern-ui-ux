import React from 'react';
import './possibility.css';

import woman from '../../assets/possibility.png';

const Possibility = () => {
	return (
		<div>
			<div className="gpt3__possibility" id="possibility">
				<div className="gpt3__possibility-image">
					<img src={woman} alt="woman" />
				</div>
				<div className="gpt3__possibility-info">
					<p>Request Early Access to Get Started</p>
					<div className="gpt3__possibility-info_content">
						<h2>The possibilities are beyond your imagination</h2>
						<p>
							Yet bed any for travelling assistance indulgence unpleasing. Not thoughts
							all exercise blessing. Indulgence way everything joy alteration boisterous
							the attachment. Party we years to order allow asked of.
						</p>
					</div>
					<button type="button">Request Early Access to Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Possibility;
