import axios from 'axios';
import globals from '../globals';

export const create = data => axios.post(`${globals.url.host}/api/players`, data);

// export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
