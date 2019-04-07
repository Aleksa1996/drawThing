import { clearPlayerData } from './playerActions';
import { clearRoomData, unsubscribeToRoomGlobalEvents } from './roomActions';
import { clearChatData, unsubscribeToChatGlobalEvents } from './chatActions';
import { clearGameData, unsubscribeToGameGlobalEvents } from './gameActions';
import { clearRoundData, unsubscribeToRoundGlobalEvents } from './roundActions';

export const clearState = (whatToClear = []) => (dispatch, getState, { api, sockets }) => {
	if (whatToClear && whatToClear.length == 0) {
		whatToClear = ['player', 'room', 'chat', 'game', 'round'];
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
		} else if (wtc == 'round') {
			dispatch(clearRoundData());
		}
	});
};

export const clearSubscriptions = (whatToClear = []) => (dispatch, getState, { api, sockets }) => {
	//unsubscribe chat and room events
	if (whatToClear && whatToClear.length == 0) {
		whatToClear = ['room', 'chat', 'game', 'round'];
	}
	// clear reducer state
	whatToClear.forEach(wtc => {
		if (wtc == 'room') {
			dispatch(unsubscribeToRoomGlobalEvents());
		} else if (wtc == 'chat') {
			dispatch(unsubscribeToChatGlobalEvents());
		} else if (wtc == 'game') {
			dispatch(unsubscribeToGameGlobalEvents());
		} else if ((wtc = 'round')) {
			dispatch(unsubscribeToRoundGlobalEvents());
		}
	});
};
