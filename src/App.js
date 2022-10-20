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
				<WhatGPT3 />
				<Features />
				<Possibility />
				<Blog />
			</div>
			<Brand />
			<CTA />
			<Footer />
		</div>
	);
};

export default App;
