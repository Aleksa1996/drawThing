import axios from 'axios';

const self = 'http://drawthing.com';

export const get = () => axios.get(`${self}/api/blog`);

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
