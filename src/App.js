import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className="App">
				<div className="gradiant__bg">
					<Navbar />
					<Header />
					<WhatGPT3 />
					<Features />
					<Possibility />
					<CTA />
					<Blog />
					<Footer />
				</div>
				{/* <Brand /> */}
			</div>
		</Router>
	);
};

export default App;
