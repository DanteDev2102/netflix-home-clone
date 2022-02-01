import React from 'react';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';

import { requests, titles } from './axios/request';

const App = () => {
	return (
		<>
			<Header />
			<Banner endParam={requests[0]} />
			{requests.map((request, i) => (
				<Row endParam={request} title={titles[i]} />
			))}
		</>
	);
};

export default App;
