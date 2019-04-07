import axios from 'axios';
import globals from '../globals';

export const start = (data = null) => axios.post(`${globals.url.host}/api/game/start`, data);
