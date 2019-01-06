import axios from 'axios';
// import fetch from 'isomorphic-fetch';

const self = 'http://drawthing.com';

// export const get = () => axios.get(`${self}/api/blog`);
// export const get = () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json());
export const get = () => axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
