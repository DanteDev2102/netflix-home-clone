import React from 'react';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

import request from './axios/request';

const App = () => {
	return (
		<>
			<Header />
			<Banner endParam={request['Netflix Originals']} />
		</>
	);
};

export default App;
