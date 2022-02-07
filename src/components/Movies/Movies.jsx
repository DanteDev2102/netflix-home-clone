import React from 'react';
import './Movies.css';
const base_url = 'https://image.tmdb.org/t/p/original/';
const Movies = ({ name, id, backdrop_path, title }) => {
	return (
		<div className="named-row" key={id}>
			<img
				className="movie-img"
				src={`${base_url}${backdrop_path}`}
				alt={title}
			/>

			<p>{name || title}</p>
		</div>
	);
};

export default Movies;
