import axios from 'axios';

import globals from '../globals';

export const validateUser = data => axios.post(`${globals.url.host}/api/game/validateUser`, data);

export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
