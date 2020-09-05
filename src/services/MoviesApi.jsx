import axios from 'axios';
import { apiUrl, API_KEY } from '../api';

function getMovies() {
	return axios.get(`${apiUrl}/popular?api_key=${API_KEY}&language=en-US`).then((response) => response.data.results);
}

export default {
	getMovies,
};
