import API_KEY from './config';

const requests = [
	`/discover/tv?api_key=${API_KEY}&with_networks=213`,
	`/trending/all/week?api_key=${API_KEY}&language=en-US`,
	`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	`/discover/movie?api_key=${API_KEY}&with_genres=28`,
	`/discover/movie?api_key=${API_KEY}&with_genres=35`,
	`/discover/movie?api_key=${API_KEY}&with_genres=27`,
	`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	`/discover/movie?api_key=${API_KEY}&with_genres=99`
];

const titles = [
	'Netflix Originals',
	'Trending',
	'TopRated',
	'Action Movies',
	'Comedy Movies',
	'Horror Movies',
	'Romance Movies',
	'Documentaries'
];

export { requests, titles };
