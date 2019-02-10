import axios from 'axios';

import globals from '../globals';

export const createRoom = data => axios.post(`${globals.url.host}/api/game/createRoom`, data);

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
