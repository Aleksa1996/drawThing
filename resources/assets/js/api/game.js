import axios from 'axios';

import globals from '../globals';

export const start = (data = null) => axios.post(`${globals.url.host}/api/game/start`, data);

// export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
