import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = data => ({ type: SHOW_MODAL, payload: data });

export const hideModal = () => ({ type: HIDE_MODAL });
