import axios from 'axios';

import globals from '../globals';

export const createPlayer = data => axios.post(`${globals.url.host}/api/game/createPlayer`, data);

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
