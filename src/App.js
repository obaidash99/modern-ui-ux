import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<div className="gradiant__bg">
				<Navbar />
				<Header />
			</div>
			<WhatGPT3 />
			<Brand />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
