import { useState, useEffect } from 'react';
import axios from '../../axios/create';
import Movies from '../Movies/Movies';

import './Row.css';

const Row = ({ title, endParam }) => {
	const [movies, setMovies] = useState([]);
	const [translate, setTranslate] = useState(0);

	const getMovies = async () => {
		const response = await axios.get(endParam);
		setMovies(response.data.results);
		return response;
	};

	const handleTranslate = (value) => {
		if (value > 0 && translate === 0) {
			return null;
		}
		if (value < 0 && translate <= -360) {
			return null;
		}
		setTranslate(translate + value);
		console.log(translate);
	};

	useEffect(() => {
		getMovies();
	}, [endParam]);

	return (
		<article className="row">
			<h3>{title}</h3>

			<section className="movie-row">
				<div className="left-arrow">
					<button onClick={() => handleTranslate(20)}>
						<i
							className="fa fa-arrow-left"
							aria-hidden="true"
						></i>
					</button>
				</div>
				<div className="movies-container">
					<article
						className="movies"
						style={{
							transform: `translateX(${translate}%)`
						}}
					>
						{movies.map((movie) => (
							<Movies {...movie} />
						))}
					</article>
				</div>
				<div className="right-arrow">
					<button onClick={() => handleTranslate(-20)}>
						<i
							className="fa fa-arrow-right"
							aria-hidden="true"
						></i>
					</button>
				</div>
			</section>
		</article>
	);
};

export default Row;
