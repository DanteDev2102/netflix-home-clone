import API_KEY from './config';

const requests = {
	'Netflix Originals': `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	'Action Movies': `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	'Comedy Movies': `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	'Horror Movies': `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	'Romance Movies': `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
