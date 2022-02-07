import { useState, useEffect } from 'react';
import axios from '../../axios/create';

import './Banner.css';

const Banner = ({ endParam }) => {
	const [movie, setMovie] = useState([]);
	const backgroundImg = {
		backgroundImage: `
        url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})
        `
	};

	useEffect(() => {
		const getMovie = async () => {
			const response = await axios.get(endParam);
			setMovie(
				response.data.results[
					Math.floor(
						Math.random() * response.data.results.length -
							1
					)
				]
			);
		};

		getMovie();
	}, [endParam]);

	return (
		<section className="banner" style={backgroundImg}>
			<section className="banner-info">
				<h1>
					{movie
						? movie.title ||
						  movie.name ||
						  movie.original_name
						: null}
				</h1>
				<div className="banner-buttons">
					<button>Play</button>
					<button>My List</button>
				</div>
				<div className="banner-desc">
					<p>
						{movie && movie.overview
							? movie.overview.length > 200
								? movie.overview.substring(0, 150) +
								  '...'
								: movie.overview
							: null}
					</p>
				</div>
			</section>
			<div className="fade" />
		</section>
	);
};

export default Banner;
