import axios from 'axios';
import globals from '../globals';

export const create = (data = null) => axios.post(`${globals.url.host}/api/rooms`, data);
export const join = (data = null) => axios.post(`${globals.url.host}/api/rooms/join`, data);
export const kick = (data = null) => axios.post(`${globals.url.host}/api/rooms/kick`, data);
