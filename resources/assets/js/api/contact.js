import axios from 'axios';
import globals from '../globals';

export const submit = data => axios.post(`${globals.url.host}/api/contact/submit`, data);
