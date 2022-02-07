import { useState, useEffect } from 'react';
import axios from '../../axios/create';

import './Row.css';

const Row = ({ title, endParam, topRow }) => {
	const base_url = 'https://image.tmdb.org/t/p/original/';
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
		} else {
			setTranslate(translate + value);
		}
	};

	useEffect(() => {
		getMovies();
	}, [endParam]);

	return (
		<article className="row">
			<h3>{title}</h3>

			<section className="movie-row">
				<div className="left-arrow">
					<button onClick={() => handleTranslate(500)}>
						<i
							className="fa fa-arrow-left"
							aria-hidden="true"
						></i>
					</button>
				</div>
				<div className="movies-container">
					<div
						className="movies"
						style={{
							transform: `translateX(${translate}px)`
						}}
					>
						{topRow &&
							movies.map((movie) => (
								<img
									key={movie.id}
									className={`movie-img ${
										topRow && 'top-row'
									}`}
									src={`${base_url}${movie.poster_path}`}
									alt={movie.title}
								/>
							))}

						{!topRow &&
							movies.map((movie) => (
								<div
									className="named-row"
									key={movie.id}
								>
									<img
										className={`movie-img ${
											topRow && 'top-row'
										}`}
										src={`${base_url}${movie.backdrop_path}`}
										alt={movie.title}
									/>

									<p>
										{movie
											? movie.title ||
											  movie.name ||
											  movie.original_name
											: null}
									</p>
								</div>
							))}
					</div>
				</div>
				<div className="right-arrow">
					<button onClick={() => handleTranslate(-500)}>
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
