import { clearPlayerData } from './playerActions';
import { clearRoomData, unsubscribeToRoomGlobalEvents } from './roomActions';
import { clearChatData, unsubscribeToChatGlobalEvents } from './chatActions';
import { clearGameData, unsubscribeToGameGlobalEvents } from './gameActions';

export const clearState = (whatToClear = []) => (dispatch, getState, { api, sockets }) => {
	if (whatToClear && whatToClear.length == 0) {
		whatToClear = ['room', 'chat', 'player', 'game'];
	}
	// clear reducer state
	whatToClear.forEach(wtc => {
		if (wtc == 'room') {
			dispatch(clearRoomData());
		} else if (wtc == 'chat') {
			dispatch(clearChatData());
		} else if (wtc == 'player') {
			dispatch(clearPlayerData());
		} else if (wtc == 'game') {
			dispatch(clearGameData());
		}
	});
};

export const clearSubscriptions = (whatToClear = []) => (dispatch, getState, { api, sockets }) => {
	//unsubscribe chat and room events
	if (whatToClear && whatToClear.length == 0) {
		whatToClear = ['room', 'chat', 'game'];
	}
	// clear reducer state
	whatToClear.forEach(wtc => {
		if (wtc == 'room') {
			dispatch(unsubscribeToRoomGlobalEvents());
		} else if (wtc == 'chat') {
			dispatch(unsubscribeToChatGlobalEvents());
		} else if (wtc == 'game') {
			dispatch(unsubscribeToGameGlobalEvents());
		}
	});
};
