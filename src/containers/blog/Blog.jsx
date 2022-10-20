import React from 'react';
import './blog.css';

import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';
import blog5 from '../../assets/blog5.png';

const Blog = () => {
	return (
		<div className="gpt3__blog">
			<h1>
				A lot is happening, <br /> We are blogging about it.
			</h1>
			<div className="gpt3__blog-cards">
				<div className="gpt3__blog-cards_one">
					<img src={blog1} alt="blog1" />
					<div className="info">
						<p className="date">Sep 26, 2021</p>
						<h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
						<p className="more">Read Full Article</p>
					</div>
				</div>
				<div className="gpt3__blog-cards_two">
					<img src={blog2} alt="blog2" />
					<div className="info">
						<p className="date">Sep 26, 2021</p>
						<h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
						<p className="more">Read Full Article</p>
					</div>
				</div>
				<div className="gpt3__blog-cards_three">
					<img src={blog3} alt="blog3" />
					<div className="info">
						<p className="date">Sep 26, 2021</p>
						<h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
						<p className="more">Read Full Article</p>
					</div>
				</div>
				<div className="gpt3__blog-cards_four">
					<img src={blog4} alt="blog4" />
					<div className="info">
						<p className="date">Sep 26, 2021</p>
						<h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
						<p className="more">Read Full Article</p>
					</div>
				</div>
				<div className="gpt3__blog-cards_five">
					<img src={blog5} alt="blog5" />
					<div className="info">
						<p className="date">Sep 26, 2021</p>
						<h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
						<p className="more">Read Full Article</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
