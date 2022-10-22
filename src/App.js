import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
					<Blog />
					<Footer />
				</div>
				{/* <Brand />
			<CTA /> */}
			</div>
		</Router>
	);
};

export default App;
