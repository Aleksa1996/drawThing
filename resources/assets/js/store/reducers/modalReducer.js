import { SHOW_MODAL, HIDE_MODAL } from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	modalType: null,
	modalProps: {}
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SHOW_MODAL: {
			return updateModal(state, { modalType: payload.modalType, modalProps: payload.modalProps });
		}

		case HIDE_MODAL: {
			return updateModal(state, { modalType: null, modalProps: {} });
		}

		default:
			return { ...state };
	}
};

export default reducer;

// selectors
export const selector = state => {};

// utility reducer functions
export const updateModal = (state, player) => {
	return _fp_assign(state, player);
};
