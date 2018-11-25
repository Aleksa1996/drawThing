// import axios from 'axios';
import fetch from 'isomorphic-fetch';

const self = 'http://drawthing.com';

// export const get = () => axios.get(`${self}/api/blog`);
export const get = () =>
	fetch('http://drawthing.com/api/blog')
		.then(res => res.json())
		.then(res => res.blogs);

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
