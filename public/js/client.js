(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/client"],{

/***/ "./resources/assets/js/App.jsx":
/*!*************************************!*\
  !*** ./resources/assets/js/App.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout/Layout */ "./resources/assets/js/components/Layout/Layout.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(App));

/***/ }),

/***/ "./resources/assets/js/Router.js":
/*!***************************************!*\
  !*** ./resources/assets/js/Router.js ***!
  \***************************************/
/*! exports provided: routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _hocs_asyncComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hocs/asyncComponent */ "./resources/assets/js/hocs/asyncComponent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Pages/Home/Home */ "./resources/assets/js/components/Pages/Home/Home.jsx");
/* harmony import */ var _components_Pages_About_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Pages/About/About */ "./resources/assets/js/components/Pages/About/About.jsx");
/* harmony import */ var _components_Pages_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Pages/Contact/Contact */ "./resources/assets/js/components/Pages/Contact/Contact.jsx");
/* harmony import */ var _components_Pages_Game_Game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Pages/Game/Game */ "./resources/assets/js/components/Pages/Game/Game.jsx");
/* harmony import */ var _components_Pages_Play_Play__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Pages/Play/Play */ "./resources/assets/js/components/Pages/Play/Play.jsx");
/* harmony import */ var _components_Pages_Room_Room__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Pages/Room/Room */ "./resources/assets/js/components/Pages/Room/Room.jsx");



 // const HomeAsync = asyncComponent(() => import('./components/Pages/Home/Home'));
// const AboutAsync = asyncComponent(() => import('./components/Pages/About/About'));
// export const routes = [
// 	{
// 		id: '123',
// 		path: '/',
// 		component: HomeAsync,
// 		exact: true
// 	},
// 	{
// 		id: '124',
// 		path: '/about',
// 		component: AboutAsync,
// 		exact: true
// 	}
// ];







var routes = [{
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/',
  component: _components_Pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
  exact: true
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/about',
  component: _components_Pages_About_About__WEBPACK_IMPORTED_MODULE_5__["default"],
  exact: true
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/contact',
  component: _components_Pages_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__["default"],
  exact: true
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/game',
  component: _components_Pages_Game_Game__WEBPACK_IMPORTED_MODULE_7__["default"],
  exact: true
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/play/:roomUUID?',
  component: _components_Pages_Play_Play__WEBPACK_IMPORTED_MODULE_8__["default"],
  exact: true
}, {
  id: Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
  path: '/room',
  component: _components_Pages_Room_Room__WEBPACK_IMPORTED_MODULE_9__["default"],
  exact: true
}];

var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: props.location
  }, routes.map(function (r, id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: id,
      exact: true,
      path: r.path,
      component: r.component
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./resources/assets/js/actions/chatActions.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/actions/chatActions.js ***!
  \****************************************************/
/*! exports provided: subscribeToChatGlobalEvents, unsubscribeToChatGlobalEvents, clearChatData, sendMessageRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToChatGlobalEvents", function() { return subscribeToChatGlobalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeToChatGlobalEvents", function() { return unsubscribeToChatGlobalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChatData", function() { return clearChatData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageRoom", function() { return sendMessageRoom; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var _websocketActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocketActions */ "./resources/assets/js/actions/websocketActions.js");


var globalEvents = [_types__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE_ROOM_SUCCESS"], _types__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE_ROOM_FAILURE"], _types__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_MESSAGE_ROOM"]];
var subscribeToChatGlobalEvents = function subscribeToChatGlobalEvents() {
  return function (dispatch, getState, _ref) {
    var api = _ref.api,
        sockets = _ref.sockets;
    globalEvents.forEach(function (e) {
      return dispatch(Object(_websocketActions__WEBPACK_IMPORTED_MODULE_1__["ws_subscribe"])('game', e));
    });
  };
};
var unsubscribeToChatGlobalEvents = function unsubscribeToChatGlobalEvents() {
  return function (dispatch, getState, _ref2) {
    var api = _ref2.api,
        sockets = _ref2.sockets;
    globalEvents.forEach(function (e) {
      return dispatch(Object(_websocketActions__WEBPACK_IMPORTED_MODULE_1__["ws_unsubscribe"])('game', e));
    });
  };
};
var clearChatData = function clearChatData() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CHAT_DATA"]
  };
};
var sendMessageRoom = function sendMessageRoom(data) {
  return function (dispatch, getState, _ref3) {
    var api = _ref3.api,
        sockets = _ref3.sockets;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SENDING_MESSAGE_ROOM"]
    });

    if (sockets.game.connection.connected) {
      var _getState$player = getState().player,
          id = _getState$player.id,
          username = _getState$player.username,
          password = _getState$player.password;
      var uuid = getState().room.uuid;
      var dataMessage = {
        message: {
          text: data.text
        },
        player: {
          id: id,
          username: username,
          password: password
        },
        room: {
          uuid: uuid
        }
      };
      dispatch(Object(_websocketActions__WEBPACK_IMPORTED_MODULE_1__["ws_emit"])('game', 'SEND_MESSAGE_ROOM', dataMessage));
    }
  };
}; // export const sendMessageRoomSuccessfull = userData => ({
// 	type: CREATE_PLAYER_SUCCESS,
// 	payload: userData
// });
// export const sendMessageRoomFailure = userData => ({
// 	type: CREATE_PLAYER_SUCCESS,
// 	payload: userData
// });

/***/ }),

/***/ "./resources/assets/js/actions/commonActions.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/actions/commonActions.js ***!
  \******************************************************/
/*! exports provided: commonAction, commonThunkAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonAction", function() { return commonAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonThunkAction", function() { return commonThunkAction; });
var commonAction = function commonAction() {
  return {
    type: '',
    payload: ''
  };
};
var commonThunkAction = function commonThunkAction() {
  return function (dispatch, getState) {};
};

/***/ }),

/***/ "./resources/assets/js/actions/gameActions.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/actions/gameActions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import {
// 	CREATING_ROOM,
// 	CREATE_ROOM_SUCCESS,
// 	CREATE_ROOM_FAILURE,
// 	RANDOMING_ROOM,
// 	RANDOM_ROOM_SUCCESS,
// 	RANDOM_ROOM_FAILURE
// } from './types';
// export const createRoom = data => (dispatch, getState, api) => {
// 	dispatch({ type: CREATING_ROOM });
// 	const fData = new FormData();
// 	fData.append('username', data.username);
// 	fData.append('avatar', data.avatar);
// 	return api.game
// 		.createRoom(fData)
// 		.then(response => {
// 			console.log(response);
// 			dispatch(createRoomSuccess(response.data));
// 		})
// 		.catch(error => {
// 			console.log(error.response);
// 			dispatch(createRoomFailure(error.response.data.error));
// 		});
// };
// // export const randomRoom = () => (dispatch, getState, api) => {
// //     RANDOMING_ROOM
// // };
// export const createRoomSuccess = userData => ({ type: CREATE_ROOM_SUCCESS, payload: userData });
// export const createRoomFailure = error => ({ type: CREATE_ROOM_FAILURE, payload: error });
// export const randomRoomSuccess = userData => ({ type: RANDOM_ROOM_SUCCESS, payload: userData });
// export const randomRoomFailure = error => ({ type: RANDOM_ROOM_FAILURE, payload: error });
// export const resetGameStartFormErrors = () => ({ type: GAME_START_FORM_ERROR_RESET });

/***/ }),

/***/ "./resources/assets/js/actions/index.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/actions/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatActions */ "./resources/assets/js/actions/chatActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToChatGlobalEvents", function() { return _chatActions__WEBPACK_IMPORTED_MODULE_0__["subscribeToChatGlobalEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsubscribeToChatGlobalEvents", function() { return _chatActions__WEBPACK_IMPORTED_MODULE_0__["unsubscribeToChatGlobalEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearChatData", function() { return _chatActions__WEBPACK_IMPORTED_MODULE_0__["clearChatData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendMessageRoom", function() { return _chatActions__WEBPACK_IMPORTED_MODULE_0__["sendMessageRoom"]; });

/* harmony import */ var _commonActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonActions */ "./resources/assets/js/actions/commonActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonAction", function() { return _commonActions__WEBPACK_IMPORTED_MODULE_1__["commonAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonThunkAction", function() { return _commonActions__WEBPACK_IMPORTED_MODULE_1__["commonThunkAction"]; });

/* harmony import */ var _gameActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameActions */ "./resources/assets/js/actions/gameActions.js");
/* harmony import */ var _gameActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gameActions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gameActions__WEBPACK_IMPORTED_MODULE_2__) if(["subscribeToChatGlobalEvents","unsubscribeToChatGlobalEvents","clearChatData","sendMessageRoom","commonAction","commonThunkAction","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gameActions__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _playerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerActions */ "./resources/assets/js/actions/playerActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearPlayerData", function() { return _playerActions__WEBPACK_IMPORTED_MODULE_3__["clearPlayerData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return _playerActions__WEBPACK_IMPORTED_MODULE_3__["createPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPlayerSuccess", function() { return _playerActions__WEBPACK_IMPORTED_MODULE_3__["createPlayerSuccess"]; });

/* harmony import */ var _roomActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roomActions */ "./resources/assets/js/actions/roomActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribeToRoomGlobalEvents", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["subscribeToRoomGlobalEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsubscribeToRoomGlobalEvents", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["unsubscribeToRoomGlobalEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearRoomData", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["clearRoomData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["createRoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoomSuccess", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["createRoomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoomFailure", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["createRoomFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinRoom", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["joinRoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinRoomSuccess", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["joinRoomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinRoomFailure", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["joinRoomFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kickPlayer", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["kickPlayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kickPlayerSuccess", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["kickPlayerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kickPlayerFailure", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["kickPlayerFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearDataAfterKick", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["clearDataAfterKick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStateAfterKick", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["clearStateAfterKick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return _roomActions__WEBPACK_IMPORTED_MODULE_4__["clearState"]; });

/* harmony import */ var _websocketActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./websocketActions */ "./resources/assets/js/actions/websocketActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_make_connection", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_make_connection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_connect", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_connect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_disconnect", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_disconnect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_subscribe", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_unsubscribe", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_unsubscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ws_emit", function() { return _websocketActions__WEBPACK_IMPORTED_MODULE_5__["ws_emit"]; });

/* harmony import */ var _modalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modalActions */ "./resources/assets/js/actions/modalActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return _modalActions__WEBPACK_IMPORTED_MODULE_6__["showModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return _modalActions__WEBPACK_IMPORTED_MODULE_6__["hideModal"]; });









/***/ }),

/***/ "./resources/assets/js/actions/modalActions.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/actions/modalActions.js ***!
  \*****************************************************/
/*! exports provided: showModal, hideModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");

var showModal = function showModal(data) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"],
    payload: data
  };
};
var hideModal = function hideModal() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["HIDE_MODAL"]
  };
};

/***/ }),

/***/ "./resources/assets/js/actions/playerActions.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/actions/playerActions.js ***!
  \******************************************************/
/*! exports provided: clearPlayerData, createPlayer, createPlayerSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearPlayerData", function() { return clearPlayerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayer", function() { return createPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerSuccess", function() { return createPlayerSuccess; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");

var clearPlayerData = function clearPlayerData() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PLAYER_DATA"]
  };
};
var createPlayer = function createPlayer(data) {
  return function (dispatch, getState, _ref) {
    var api = _ref.api,
        sockets = _ref.sockets;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATING_PLAYER"]
    });
    var fData = new FormData();
    fData.append('username', data.username);
    fData.append('avatar', data.avatar);
    fData.append('fd', getState().socket.fd);
    return api.player.create(fData).then(function (response) {
      dispatch(createPlayerSuccess(response.data));
      return response;
    });
  };
};
var createPlayerSuccess = function createPlayerSuccess(userData) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_PLAYER_SUCCESS"],
    payload: userData
  };
};

/***/ }),

/***/ "./resources/assets/js/actions/roomActions.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/actions/roomActions.js ***!
  \****************************************************/
/*! exports provided: subscribeToRoomGlobalEvents, unsubscribeToRoomGlobalEvents, clearRoomData, createRoom, createRoomSuccess, createRoomFailure, joinRoom, joinRoomSuccess, joinRoomFailure, kickPlayer, kickPlayerSuccess, kickPlayerFailure, clearDataAfterKick, clearStateAfterKick, clearState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToRoomGlobalEvents", function() { return subscribeToRoomGlobalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeToRoomGlobalEvents", function() { return unsubscribeToRoomGlobalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRoomData", function() { return clearRoomData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoomSuccess", function() { return createRoomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoomFailure", function() { return createRoomFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRoom", function() { return joinRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRoomSuccess", function() { return joinRoomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinRoomFailure", function() { return joinRoomFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kickPlayer", function() { return kickPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kickPlayerSuccess", function() { return kickPlayerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kickPlayerFailure", function() { return kickPlayerFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDataAfterKick", function() { return clearDataAfterKick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStateAfterKick", function() { return clearStateAfterKick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var _websocketActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocketActions */ "./resources/assets/js/actions/websocketActions.js");
/* harmony import */ var _chatActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatActions */ "./resources/assets/js/actions/chatActions.js");
/* harmony import */ var _playerActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerActions */ "./resources/assets/js/actions/playerActions.js");




var globalEvents = [_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_JOINED_ROOM"], _types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_KICKED"], _types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_LEAVED_ROOM"], _types__WEBPACK_IMPORTED_MODULE_0__["REPLACE_ADMIN_ROOM"]];
var subscribeToRoomGlobalEvents = function subscribeToRoomGlobalEvents() {
  return function (dispatch, getState, _ref) {
    var api = _ref.api,
        sockets = _ref.sockets;
    globalEvents.forEach(function (e) {
      return dispatch(Object(_websocketActions__WEBPACK_IMPORTED_MODULE_1__["ws_subscribe"])('game', e));
    });
  };
};
var unsubscribeToRoomGlobalEvents = function unsubscribeToRoomGlobalEvents() {
  return function (dispatch, getState, _ref2) {
    var api = _ref2.api,
        sockets = _ref2.sockets;
    globalEvents.forEach(function (e) {
      return dispatch(Object(_websocketActions__WEBPACK_IMPORTED_MODULE_1__["ws_unsubscribe"])('game', e));
    });
  };
};
var clearRoomData = function clearRoomData() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ROOM_DATA"]
  };
}; //ROOM CREATE

var createRoom = function createRoom() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch, getState, _ref3) {
    var api = _ref3.api,
        sockets = _ref3.sockets;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATING_ROOM"]
    });
    var _getState$player = getState().player,
        id = _getState$player.id,
        username = _getState$player.username,
        password = _getState$player.password;
    var fData = new FormData();
    fData.append('id', id);
    fData.append('username', username);
    fData.append('password', password);
    return api.room.create(fData).then(function (response) {
      dispatch(createRoomSuccess(response.data));
      return response;
    }).catch(function (error) {
      console.log(error.response);
      console.log(error.response.data);
      dispatch(createRoomFailure(error.response.data));
    });
  };
};
var createRoomSuccess = function createRoomSuccess(room) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_SUCCESS"],
    payload: room
  };
};
var createRoomFailure = function createRoomFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_FAILURE"],
    payload: error
  };
};
var joinRoom = function joinRoom() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch, getState, _ref4) {
    var api = _ref4.api,
        sockets = _ref4.sockets;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["JOINING_ROOM"]
    });
    var _getState$player2 = getState().player,
        id = _getState$player2.id,
        username = _getState$player2.username,
        password = _getState$player2.password;
    var fdata = {
      player: {
        id: id,
        username: username,
        password: password
      },
      room: {
        uuid: data.room.uuid
      }
    };
    return api.room.join(fdata).then(function (response) {
      dispatch(joinRoomSuccess(response.data));
      return response;
    }).catch(function (error) {
      console.log(error.response);
      console.log(error.response.data);
      dispatch(joinRoomFailure(error.response.data));
    });
  };
};
var joinRoomSuccess = function joinRoomSuccess(room) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["JOIN_ROOM_SUCCESS"],
    payload: room
  };
};
var joinRoomFailure = function joinRoomFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["JOIN_ROOM_FAILURE"],
    payload: error
  };
};
var kickPlayer = function kickPlayer(playerId) {
  return function (dispatch, getState, _ref5) {
    var api = _ref5.api,
        sockets = _ref5.sockets;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["KICKING_PLAYER"]
    });
    var _getState$player3 = getState().player,
        id = _getState$player3.id,
        username = _getState$player3.username,
        password = _getState$player3.password;
    var uuid = getState().room.uuid;
    var fdata = {
      player: {
        id: id,
        username: username,
        password: password
      },
      room: {
        uuid: uuid
      },
      player_to_kick: {
        id: playerId
      }
    };
    return api.room.kick(fdata).then(function (response) {
      dispatch(kickPlayerSuccess(response.data));
      return response;
    }).catch(function (error) {
      console.log(error.response);
      console.log(error.response.data);
      dispatch(kickPlayerFailure(error.response.data));
    });
  };
};
var kickPlayerSuccess = function kickPlayerSuccess(room) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_KICK_SUCCESS"],
    payload: room
  };
};
var kickPlayerFailure = function kickPlayerFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_KICK_FAILURE"],
    payload: error
  };
};
var clearDataAfterKick = function clearDataAfterKick() {
  return function (dispatch, getState, _ref6) {
    var api = _ref6.api,
        sockets = _ref6.sockets;
    // clear reducer state
    dispatch(clearRoomData());
    dispatch(Object(_chatActions__WEBPACK_IMPORTED_MODULE_2__["clearChatData"])());
    dispatch(Object(_playerActions__WEBPACK_IMPORTED_MODULE_3__["clearPlayerData"])()); //unsubscribe chat and room events

    dispatch(unsubscribeToRoomGlobalEvents());
    dispatch(Object(_chatActions__WEBPACK_IMPORTED_MODULE_2__["unsubscribeToChatGlobalEvents"])());
  };
};
var clearStateAfterKick = function clearStateAfterKick() {
  return function (dispatch, getState, _ref7) {
    var api = _ref7.api,
        sockets = _ref7.sockets;
    dispatch(clearState());
  };
};
var clearState = function clearState() {
  return function (dispatch, getState, _ref8) {
    var api = _ref8.api,
        sockets = _ref8.sockets;
    // clear reducer state
    dispatch(clearRoomData());
    dispatch(Object(_chatActions__WEBPACK_IMPORTED_MODULE_2__["clearChatData"])());
    dispatch(Object(_playerActions__WEBPACK_IMPORTED_MODULE_3__["clearPlayerData"])()); //unsubscribe chat and room events

    dispatch(unsubscribeToRoomGlobalEvents());
    dispatch(Object(_chatActions__WEBPACK_IMPORTED_MODULE_2__["unsubscribeToChatGlobalEvents"])());
  };
};

/***/ }),

/***/ "./resources/assets/js/actions/types.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/actions/types.js ***!
  \**********************************************/
/*! exports provided: CONNECT_WS, DISCONNECT_WS, SUBSCRIBE_WS, UNSUBSCRIBE_WS, EMIT_WS, CONNECTING_SOCKET, CONNECT_SOCKET_SUCCESS, CONNECT_SOCKET_FAILURE, CONNECT_SOCKET_DATA, CREATING_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE, CLEAR_PLAYER_DATA, CREATING_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE, CLEAR_ROOM_DATA, JOINING_ROOM, JOIN_ROOM_SUCCESS, JOIN_ROOM_FAILURE, PLAYER_JOINED_ROOM, PLAYER_LEAVED_ROOM, KICKING_PLAYER, PLAYER_KICK_SUCCESS, PLAYER_KICK_FAILURE, PLAYER_KICKED, REPLACE_ADMIN_ROOM, SENDING_MESSAGE_ROOM, SEND_MESSAGE_ROOM_SUCCESS, SEND_MESSAGE_ROOM_FAILURE, RECEIVE_MESSAGE_ROOM, CLEAR_CHAT_DATA, SHOW_MODAL, HIDE_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECT_WS", function() { return CONNECT_WS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCONNECT_WS", function() { return DISCONNECT_WS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSCRIBE_WS", function() { return SUBSCRIBE_WS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSUBSCRIBE_WS", function() { return UNSUBSCRIBE_WS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMIT_WS", function() { return EMIT_WS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECTING_SOCKET", function() { return CONNECTING_SOCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECT_SOCKET_SUCCESS", function() { return CONNECT_SOCKET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECT_SOCKET_FAILURE", function() { return CONNECT_SOCKET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONNECT_SOCKET_DATA", function() { return CONNECT_SOCKET_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATING_PLAYER", function() { return CREATING_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PLAYER_SUCCESS", function() { return CREATE_PLAYER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PLAYER_FAILURE", function() { return CREATE_PLAYER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PLAYER_DATA", function() { return CLEAR_PLAYER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATING_ROOM", function() { return CREATING_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ROOM_SUCCESS", function() { return CREATE_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ROOM_FAILURE", function() { return CREATE_ROOM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ROOM_DATA", function() { return CLEAR_ROOM_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOINING_ROOM", function() { return JOINING_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_ROOM_SUCCESS", function() { return JOIN_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_ROOM_FAILURE", function() { return JOIN_ROOM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_JOINED_ROOM", function() { return PLAYER_JOINED_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_LEAVED_ROOM", function() { return PLAYER_LEAVED_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KICKING_PLAYER", function() { return KICKING_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_KICK_SUCCESS", function() { return PLAYER_KICK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_KICK_FAILURE", function() { return PLAYER_KICK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_KICKED", function() { return PLAYER_KICKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLACE_ADMIN_ROOM", function() { return REPLACE_ADMIN_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENDING_MESSAGE_ROOM", function() { return SENDING_MESSAGE_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE_ROOM_SUCCESS", function() { return SEND_MESSAGE_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE_ROOM_FAILURE", function() { return SEND_MESSAGE_ROOM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_MESSAGE_ROOM", function() { return RECEIVE_MESSAGE_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CHAT_DATA", function() { return CLEAR_CHAT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MODAL", function() { return HIDE_MODAL; });
var CONNECT_WS = 'CONNECT_WS';
var DISCONNECT_WS = 'DISCONNECT_WS';
var SUBSCRIBE_WS = 'SUBSCRIBE_WS';
var UNSUBSCRIBE_WS = 'UNSUBSCRIBE_WS';
var EMIT_WS = 'EMIT_WS'; //

var CONNECTING_SOCKET = 'CONNECTING_SOCKET';
var CONNECT_SOCKET_SUCCESS = 'CONNECT_SOCKET_SUCCESS';
var CONNECT_SOCKET_FAILURE = 'CONNECT_SOCKET_FAILURE';
var CONNECT_SOCKET_DATA = 'CONNECT_SOCKET_DATA'; //

var CREATING_PLAYER = 'CREATING_PLAYER';
var CREATE_PLAYER_SUCCESS = 'CREATE_PLAYER_SUCCESS';
var CREATE_PLAYER_FAILURE = 'CREATE_PLAYER_FAILURE';
var CLEAR_PLAYER_DATA = 'CLEAR_PLAYER_DATA'; //

var CREATING_ROOM = 'CREATING_ROOM';
var CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS';
var CREATE_ROOM_FAILURE = 'CREATE_ROOM_FAILURE';
var CLEAR_ROOM_DATA = 'CLEAR_ROOM_DATA'; //
// export const RANDOMING_ROOM = 'RANDOMING_ROOM';
// export const RANDOM_ROOM_SUCCESS = 'RANDOM_ROOM_SUCCESS';
// export const RANDOM_ROOM_FAILURE = 'RANDOM_ROOM_FAILURE';
//

var JOINING_ROOM = 'JOINING_ROOM';
var JOIN_ROOM_SUCCESS = 'JOIN_ROOM_SUCCESS';
var JOIN_ROOM_FAILURE = 'JOIN_ROOM_FAILURE'; //

var PLAYER_JOINED_ROOM = 'PLAYER_JOINED_ROOM';
var PLAYER_LEAVED_ROOM = 'PLAYER_LEAVED_ROOM'; //

var KICKING_PLAYER = 'KICKING_PLAYER';
var PLAYER_KICK_SUCCESS = 'PLAYER_KICK_SUCCESS';
var PLAYER_KICK_FAILURE = 'PLAYER_KICK_FAILURE';
var PLAYER_KICKED = 'PLAYER_KICKED';
var REPLACE_ADMIN_ROOM = 'REPLACE_ADMIN_ROOM'; //

var SENDING_MESSAGE_ROOM = 'SENDING_MESSAGE_ROOM';
var SEND_MESSAGE_ROOM_SUCCESS = 'SEND_MESSAGE_ROOM_SUCCESS';
var SEND_MESSAGE_ROOM_FAILURE = 'SEND_MESSAGE_ROOM_FAILURE';
var RECEIVE_MESSAGE_ROOM = 'RECEIVE_MESSAGE_ROOM';
var CLEAR_CHAT_DATA = 'CLEAR_CHAT_DATA'; //

var SHOW_MODAL = 'SHOW_MODAL';
var HIDE_MODAL = 'HIDE_MODAL';

/***/ }),

/***/ "./resources/assets/js/actions/websocketActions.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/actions/websocketActions.js ***!
  \*********************************************************/
/*! exports provided: ws_make_connection, ws_connect, ws_disconnect, ws_subscribe, ws_unsubscribe, ws_emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_make_connection", function() { return ws_make_connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_connect", function() { return ws_connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_disconnect", function() { return ws_disconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_subscribe", function() { return ws_subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_unsubscribe", function() { return ws_unsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ws_emit", function() { return ws_emit; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");

var globalEvents = [{
  eType: 'connect',
  action: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_SUCCESS"]
}, {
  eType: 'CONNECT_SOCKET_DATA',
  action: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_DATA"]
}, {
  eType: 'connect_error',
  action: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_FAILURE"]
}, {
  eType: 'error',
  action: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_FAILURE"]
}, {
  eType: 'disconnect',
  action: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_FAILURE"]
}];
var ws_make_connection = function ws_make_connection(socket) {
  return function (dispatch, getState, _ref) {
    var api = _ref.api,
        sockets = _ref.sockets;
    dispatch(ws_connect(socket));
    globalEvents.forEach(function (e) {
      return dispatch(ws_subscribe(socket, e.eType, e.action));
    });
  };
};
var ws_connect = function ws_connect(socketID) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_WS"],
    socketID: socketID
  };
};
var ws_disconnect = function ws_disconnect(socketID) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DISCONNECT_WS"],
    socketID: socketID
  };
};
var ws_subscribe = function ws_subscribe(socketID, event) {
  var customActionType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIBE_WS"],
    socketID: socketID,
    event: event,
    customActionType: customActionType
  };
};
var ws_unsubscribe = function ws_unsubscribe(socketID) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UNSUBSCRIBE_WS"],
    socketID: socketID,
    event: event
  };
};
var ws_emit = function ws_emit(socketID, event) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["EMIT_WS"],
    socketID: socketID,
    event: event,
    data: data
  };
};

/***/ }),

/***/ "./resources/assets/js/api/index.js":
/*!******************************************!*\
  !*** ./resources/assets/js/api/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./resources/assets/js/api/player.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room */ "./resources/assets/js/api/room.js");


var api = {
  player: _player__WEBPACK_IMPORTED_MODULE_0__,
  room: _room__WEBPACK_IMPORTED_MODULE_1__
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/assets/js/api/player.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/api/player.js ***!
  \*******************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./resources/assets/js/globals.js");


var create = function create(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host, "/api/players"), data);
}; // export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);

/***/ }),

/***/ "./resources/assets/js/api/room.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/api/room.js ***!
  \*****************************************/
/*! exports provided: create, join, kick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kick", function() { return kick; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./resources/assets/js/globals.js");


var create = function create() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host, "/api/rooms"), data);
};
var join = function join() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host, "/api/rooms/join"), data);
};
var kick = function kick() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host, "/api/rooms/kick"), data);
}; // export const find = () => axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  window.io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
} catch (e) {}

/***/ }),

/***/ "./resources/assets/js/client.js":
/*!***************************************!*\
  !*** ./resources/assets/js/client.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./resources/assets/js/store/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./resources/assets/js/App.jsx");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");







var app = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_3__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["ConnectedRouter"], {
  history: _store_store__WEBPACK_IMPORTED_MODULE_3__["history"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.hydrate(app, document.getElementById('react-app'));

/***/ }),

/***/ "./resources/assets/js/components/Common/Dropdown/Dropdown.jsx":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/components/Common/Dropdown/Dropdown.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);




var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      actions = _ref.actions,
      id = _ref.id,
      className = _ref.className,
      classNameMenu = _ref.classNameMenu,
      classNameContainer = _ref.classNameContainer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown ".concat(classNameContainer || '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-secondary dropdown-toggle ".concat(className || ''),
    href: "javascript:void(0)",
    role: "button",
    id: id,
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu ".concat(classNameMenu || ''),
    "aria-labelledby": id
  }, actions.map(function (a) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      className: "dropdown-item",
      to: a.to,
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])()
    }, a.title);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./resources/assets/js/components/Common/InfoTooltip/InfoTooltip.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Common/InfoTooltip/InfoTooltip.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var InfoTooltip = function InfoTooltip(_ref) {
  var children = _ref.children,
      placement = _ref.placement,
      info = _ref.info,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn info-tooltip ".concat(className || ''),
    "data-toggle": "tooltip",
    "data-html": "true",
    "data-placement": placement || 'top',
    title: info
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (InfoTooltip);

/***/ }),

/***/ "./resources/assets/js/components/Common/Modal/InfoModal.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/Common/Modal/InfoModal.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./resources/assets/js/components/Common/Modal/Modal.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./resources/assets/js/actions/index.js");





var InfoModal = function InfoModal(_ref) {
  var hideModal = _ref.hideModal,
      body = _ref.body;
  var buttons = [{
    btnText: 'Ok',
    btnProps: {
      onClick: hideModal
    }
  }];
  if (!body) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Info",
    body: body,
    buttons: buttons,
    handleClose: hideModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, {
  hideModal: _actions__WEBPACK_IMPORTED_MODULE_3__["hideModal"]
})(InfoModal));

/***/ }),

/***/ "./resources/assets/js/components/Common/Modal/KickPlayerModal.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Common/Modal/KickPlayerModal.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./resources/assets/js/components/Common/Modal/Modal.jsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions */ "./resources/assets/js/actions/index.js");





var KickPlayerModal = function KickPlayerModal(_ref) {
  var player = _ref.player,
      hideModal = _ref.hideModal,
      kickPlayer = _ref.kickPlayer;
  var buttons = [{
    btnText: 'Kick',
    btnProps: {
      onClick: function onClick() {
        kickPlayer(player.id).then(function () {
          hideModal();
        });
      }
    }
  }, {
    btnText: 'No',
    btnProps: {
      onClick: hideModal
    }
  }];
  if (!player) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Kicking player",
    body: "Are you sure you want to kick ".concat(player.username, " from room ?"),
    buttons: buttons,
    data: player,
    handleClose: hideModal
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state, ownProps) {
  return {
    player: state.room.players.find(function (p) {
      return p.id == ownProps.playerId;
    })
  };
}, {
  hideModal: _actions__WEBPACK_IMPORTED_MODULE_3__["hideModal"],
  kickPlayer: _actions__WEBPACK_IMPORTED_MODULE_3__["kickPlayer"]
})(KickPlayerModal));

/***/ }),

/***/ "./resources/assets/js/components/Common/Modal/Modal.jsx":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/Common/Modal/Modal.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Form/Button */ "./resources/assets/js/components/Form/Button.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('#main-content-layout');

var Modal = function Modal(_ref) {
  var title = _ref.title,
      body = _ref.body,
      buttons = _ref.buttons,
      data = _ref.data,
      handleClose = _ref.handleClose,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: true // onAfterOpen={handleAfterOpen}
    ,
    onRequestClose: handleClose,
    contentLabel: "Example Modal",
    overlayClassName: "react-modal-backdrop",
    className: "react-modal modal-dialog",
    shouldCloseOnOverlayClick: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleClose,
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, body), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, buttons.map(function (_ref2) {
    var btnText = _ref2.btnText,
        _ref2$btnProps = _ref2.btnProps,
        onClick = _ref2$btnProps.onClick,
        btnProps = _objectWithoutProperties(_ref2$btnProps, ["onClick"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
      type: "button",
      className: "mybtn2",
      onClick: onClick
    }, btnProps), btnText);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./resources/assets/js/components/Common/Modal/ModalRoot.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/Common/Modal/ModalRoot.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modalTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalTypes */ "./resources/assets/js/components/Common/Modal/modalTypes.jsx");
/* harmony import */ var _KickPlayerModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KickPlayerModal */ "./resources/assets/js/components/Common/Modal/KickPlayerModal.jsx");
/* harmony import */ var _InfoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoModal */ "./resources/assets/js/components/Common/Modal/InfoModal.jsx");
var _MODAL_COMPONENTS;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var MODAL_COMPONENTS = (_MODAL_COMPONENTS = {}, _defineProperty(_MODAL_COMPONENTS, _modalTypes__WEBPACK_IMPORTED_MODULE_2__["KICK_PLAYER_MODAL"], _KickPlayerModal__WEBPACK_IMPORTED_MODULE_3__["default"]), _defineProperty(_MODAL_COMPONENTS, _modalTypes__WEBPACK_IMPORTED_MODULE_2__["INFO_MODAL"], _InfoModal__WEBPACK_IMPORTED_MODULE_4__["default"]), _MODAL_COMPONENTS);

var ModalRoot =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalRoot, _Component);

  function ModalRoot() {
    _classCallCheck(this, ModalRoot);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalRoot).apply(this, arguments));
  }

  _createClass(ModalRoot, [{
    key: "render",
    value: function render() {
      if (!this.props.modalType) {
        return null;
      }

      var SpecificModal = MODAL_COMPONENTS[this.props.modalType];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpecificModal, this.props.modalProps);
    }
  }]);

  return ModalRoot;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return _objectSpread({}, state.modal);
}, {})(ModalRoot));

/***/ }),

/***/ "./resources/assets/js/components/Common/Modal/modalTypes.jsx":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/Common/Modal/modalTypes.jsx ***!
  \********************************************************************/
/*! exports provided: KICK_PLAYER_MODAL, INFO_MODAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KICK_PLAYER_MODAL", function() { return KICK_PLAYER_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INFO_MODAL", function() { return INFO_MODAL; });
var KICK_PLAYER_MODAL = 'KICK_PLAYER_MODAL';
var INFO_MODAL = 'INFO_MODAL';

/***/ }),

/***/ "./resources/assets/js/components/Common/Spinner/Spinner.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/Common/Spinner/Spinner.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Spinner = function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spinner-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-circle spinner-icon",
    "aria-hidden": "true"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./resources/assets/js/components/Footer/Footer.jsx":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/Footer/Footer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "container-fluid main-footer footer py-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 text-left justify-content-center align-items-center d-flex"
      }, "\xA9 2019 \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://aleksajovanovic.com",
        title: "My portfolio"
      }, "Aleksa Jovanovic"), "\xA0 179/15"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 text-right justify-content-center align-items-center d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "main-footer-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mx-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-book",
        "aria-hidden": "true",
        title: "Project documentation"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "mx-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/Aleksa1996"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github",
        "aria-hidden": "true",
        title: "My github profile"
      })))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./resources/assets/js/components/Form/Button.jsx":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/Form/Button.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Spinner/Spinner */ "./resources/assets/js/components/Common/Spinner/Spinner.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["children", "icon", "disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, props, {
    disabled: disabled
  }), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa ".concat(icon, " mr-2"),
    "aria-hidden": "true"
  }), children, disabled && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/assets/js/components/Layout/Layout.jsx":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/Layout/Layout.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Navigation */ "./resources/assets/js/components/Navigation/Navigation.jsx");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer/Footer */ "./resources/assets/js/components/Footer/Footer.jsx");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Router */ "./resources/assets/js/Router.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Common_Modal_ModalRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Modal/ModalRoot */ "./resources/assets/js/components/Common/Modal/ModalRoot.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Layout, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currentKey = this.props.location.pathname.split('/')[1] || '/';
      var timeout = {
        enter: 300,
        exit: 200
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main-content-layout"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        scrollTop: this.state.scrollTop
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Modal_ModalRoot__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/assets/js/components/Navigation/Navigation.jsx":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Navigation/Navigation.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      scrollTop: 0
    }, _this.handleScroll = function (ev) {
      if (_this.props.location.pathname == '/') {
        _this.setState({
          scrollTop: window.pageYOffset
        });
      }
    }, _temp));
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(this.handleScroll, 70));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var isHomePage = this.props.location.pathname == '/';
      var isGamePage = this.props.location.pathname == '/game';
      var isPlayPage = this.props.location.pathname == '/play';
      var isScrolled = this.state.scrollTop >= 20;
      if (isGamePage || isPlayPage) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "main-nav navbar navbar-expand-lg fixed-top ".concat(isHomePage ? isScrolled ? 'main-nav-scrolled' : '' : 'main-nav-scrolled')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "navbar-brand text-uppercase my-3"
      }, "DrawThing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#mainnavbarToggler",
        "aria-controls": "mainnavbarToggler",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon d-flex justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-bars",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-collapse collapse",
        id: "mainnavbarToggler"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item active mx-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "nav-link"
      }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mx-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/about",
        className: "nav-link"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mx-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/contact",
        className: "nav-link"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mx-2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/play",
        className: "nav-link"
      }, "Play now !")))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./resources/assets/js/components/Pages/About/About.jsx":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/Pages/About/About.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _TechCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechCard */ "./resources/assets/js/components/Pages/About/TechCard.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(About)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      technologies: [{
        type: 'Backend',
        items: [{
          heading: "Laravel",
          description: "Main component that connects other components, handles whole game (routing, authentication, restfull API...).\n\t\t\t\t\t\tI chose him because he is much simpler than the other frameworks, code is very intuitive and there is nothing that you can't do with him.",
          img: "/img/laravel.png",
          link: 'https://laravel.com/'
        }, {
          heading: "Swoole",
          description: "Provides HTTP and WebSocket Server. Responds to requests from outside with help of NGINX's reverse proxy.\n\t\t\t\t\t\tPowers up Laravel (giving him huge speed) by keeping his bootstrap in memory,\n\t\t\t\t\t\tgiving PHP possibility to do tasks asynchronously.",
          img: "/img/swoole.png",
          link: 'https://www.swoole.co.uk/'
        }, {
          heading: "Node.js",
          description: "Primarily used for server side rendering. To render HTML from React.js app, so we can solve\n\t\t\t\t\t\tSEO problem by not providing blank page, also i used it alot in dev environment.",
          img: "/img/nodejs.png",
          link: 'https://nodejs.org/'
        }]
      }, {
        type: 'Frontend',
        items: [{
          heading: "React.js",
          description: "This project was imagined to be Single Page Application (SPA) and that wouldn't be possible without React.\n\t\t\t\t\t\tAll HTML elements, all forms, the whole game ui that you see here is rendered by React",
          img: "/img/react.png",
          link: 'https://reactjs.org/'
        }, {
          heading: "Redux.js",
          description: "Used in combination with React. manages application state.\n\t\t\t\t\t\tThanks to redux i have access to data in any React component without (passing props) pain\n\t\t\t\t\t\tthe pattern that it provides is really awesome, it gives you ability to separate your code logic from view.",
          img: "/img/redux.png",
          link: 'https://redux.js.org/'
        }]
      }, {
        type: 'Storage',
        items: [{
          heading: "MySQL",
          description: "Relational Database Management System, really efficient way for manipulating important game data.",
          img: "/img/mysql.png",
          link: 'https://www.mysql.com/'
        }, {
          heading: "Redis",
          description: "Efficcient and fast in-memory key-value database with optional durability. Used to cache data for better application performance.",
          img: "/img/redis.png",
          link: 'https://redis.io/'
        }]
      }]
    }, _temp));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "About - Drawthing",
        className: "page-about"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "impact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "impact-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "page-about-heading"
      }, "About project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "page-about-description"
      }, "The main concept and idea of this project is learning and discovering the ways in which new and modern web technologies work, the way that they cooperate with each other in order to breathe life into today's modern web applications. The main focus in this application is real-time communication between server and clients provided by WebSockets. In the process of creating this web application I have tried to explore all the possibilities and benefits that WebSockets offer. WebSockets are interesting and popular on the web today, also they are relatively new to me and that's the reasons why I chose this kind of project. Large number of guides that I've run into led me to Node.js, but I wanted to do it in PHP, and then I met Swoole (PHP framework). It supports WebSockets along with a bunch of other stuff. Been playing with it for three days, and all I can say is that it's really amazing. I want to point out that these technologies are not randomly selected. Each of them has its own purpose, and task to do (problem to solve). Below you can read more about what they do in this application.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container page-about-tech"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "page-about-tech-heading"
      }, "Technologies that made this project possible:"), this.state.technologies.map(function (t) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "page-about-tech-row",
          key: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          className: "page-about-tech-row-heading"
        }, t.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row"
        }, t.items.map(function (i) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "col-md-4",
            key: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TechCard__WEBPACK_IMPORTED_MODULE_3__["default"], i));
        })));
      })));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./resources/assets/js/components/Pages/About/TechCard.jsx":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Pages/About/TechCard.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var TechCard = function TechCard(_ref) {
  var heading = _ref.heading,
      description = _ref.description,
      img = _ref.img,
      link = _ref.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "page-about-tech-card-wrapper-link",
    target: "_blank",
    href: link
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-about-tech-card rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "page-about-tech-card-heading"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "page-about-tech-card-description"
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    className: "img-fluid page-about-tech-card-image"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TechCard);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Contact/Contact.jsx":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Contact/Contact.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactForm */ "./resources/assets/js/components/Pages/Contact/ContactForm.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _this.handleSubmitContactForm = function (values) {
      console.log(values);
    }, _temp));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Contact me - Drawthing",
        className: "page-contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-padding page-contact-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "page-contact-heading"
      }, "Get in touch !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "page-contact-description"
      }, "If you have any questions about this project, how it works or maybe about technologies that i used, just say hello. Also I am always open to discussing new projects, creative ideas or opportunities."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "page-contact-description"
      }, "Author of this project: \xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://aleksajovanovic.com"
      }, "Aleksa Jovanovic")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-contact-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "mailto:aleksa.j.1996@gmail.com?Subject=Hello",
        className: "mybtn1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-envelope-o",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/Aleksa1996/",
        className: "mybtn1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-github",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.linkedin.com/in/aleksaj",
        className: "mybtn1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-linkedin",
        "aria-hidden": "true"
      })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "page-contact-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white rounded shadow py-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleSubmitContactForm: this.handleSubmitContactForm
      }))))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Contact.serverFetch = fetchTodos;


/* harmony default export */ __webpack_exports__["default"] = (Contact); // export default connect(
// 	state => ({ todos: state.todoReducer.todos }),
// 	{ fetchTodos }
// )(Contact);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Contact/ContactForm.jsx":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Contact/ContactForm.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hocs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hocs */ "./resources/assets/js/hocs/index.js");
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Form/Button */ "./resources/assets/js/components/Form/Button.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./resources/assets/js/utils/index.js");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fields */ "./resources/assets/js/components/Pages/Contact/fields.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var ContactForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ContactForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContactForm)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _this.handleContactForm = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["throttle"])(function (values) {
      _this.props.handleSubmitContactForm(values);
    }, 1000), _temp));
  }

  _createClass(ContactForm, [{
    key: "render",
    value: function render() {
      var handleSubmit = this.props.handleSubmit;
      var name = _fields__WEBPACK_IMPORTED_MODULE_5__["formFields"].name,
          email = _fields__WEBPACK_IMPORTED_MODULE_5__["formFields"].email,
          subject = _fields__WEBPACK_IMPORTED_MODULE_5__["formFields"].subject,
          message = _fields__WEBPACK_IMPORTED_MODULE_5__["formFields"].message;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: handleSubmit(this.handleContactForm)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], _extends({
        name: "name",
        component: _hocs__WEBPACK_IMPORTED_MODULE_2__["RenderInput"]
      }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], _extends({
        name: "email",
        component: _hocs__WEBPACK_IMPORTED_MODULE_2__["RenderInput"]
      }, email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], _extends({
        name: "subject",
        component: _hocs__WEBPACK_IMPORTED_MODULE_2__["RenderInput"]
      }, subject)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], _extends({
        name: "message",
        component: _hocs__WEBPACK_IMPORTED_MODULE_2__["RenderTextarea"]
      }, message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "submit",
        icon: "fa-paper-plane",
        className: "mybtn2"
      }, "Submit")));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: 'contact-form',
  validate: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["validate"])(_fields__WEBPACK_IMPORTED_MODULE_5__["formFields"]),
  enableReinitialize: true
})(ContactForm));

/***/ }),

/***/ "./resources/assets/js/components/Pages/Contact/fields.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Contact/fields.js ***!
  \****************************************************************/
/*! exports provided: formFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formFields", function() { return formFields; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils */ "./resources/assets/js/utils/index.js");

var formFields = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["generateFormFields"])({
  name: {
    type: 'text',
    label: {
      text: 'Name',
      active: true,
      options: {}
    },
    validation: {
      required: true,
      minLength: 2
    },
    materialDesign: true,
    errMessage: 'Name must be min 2 characters!'
  },
  email: {
    type: 'email',
    label: {
      text: 'Email'
    },
    validation: {
      required: true,
      email: true
    },
    materialDesign: true,
    errMessage: 'Email must be valid!'
  },
  subject: {
    type: 'text',
    label: {
      text: 'Subject'
    },
    validation: {
      required: true,
      minLength: 2
    },
    materialDesign: true,
    errMessage: 'subject must be min 2 characters!'
  },
  message: {
    type: 'textarea',
    label: {
      text: 'Message'
    },
    options: {
      rows: '3'
    },
    validation: {
      required: true,
      minLength: 5
    },
    materialDesign: true,
    errMessage: 'Message must be min 5 characters!'
  }
});

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/Game.jsx":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/Game.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _GameLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameLayout */ "./resources/assets/js/components/Pages/Game/GameLayout.jsx");
/* harmony import */ var _GameToolBar_GameToolBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameToolBar/GameToolBar */ "./resources/assets/js/components/Pages/Game/GameToolBar/GameToolBar.jsx");
/* harmony import */ var _GameScore_GameScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameScore/GameScore */ "./resources/assets/js/components/Pages/Game/GameScore/GameScore.jsx");
/* harmony import */ var _GameCanvas_GameCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameCanvas/GameCanvas */ "./resources/assets/js/components/Pages/Game/GameCanvas/GameCanvas.jsx");
/* harmony import */ var _GameChat_GameChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameChat/GameChat */ "./resources/assets/js/components/Pages/Game/GameChat/GameChat.jsx");
/* harmony import */ var _GameCanvas_GameTools_GameTools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GameCanvas/GameTools/GameTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/GameTools/GameTools.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Game =
/*#__PURE__*/
function (_Component) {
  _inherits(Game, _Component);

  function Game() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Game);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Game)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Play game - Drawthing",
        className: "container-fluid page-game"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameToolBar_GameToolBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameScore_GameScore__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_GameCanvas__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameChat_GameChat__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/GameCanvas.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/GameCanvas.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SketchPad/SketchPad */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPad.jsx");
/* harmony import */ var _SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SketchPad/SketchPadTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/index.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GameCanvas =
/*#__PURE__*/
function (_Component) {
  _inherits(GameCanvas, _Component);

  function GameCanvas() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, GameCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameCanvas)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      tool: _SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_2__["TOOL_PENCIL"],
      size: 2,
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: []
    }, _this.handleOnCompleteItem = function (item) {
      console.log(item);
    }, _temp));
  }

  _createClass(GameCanvas, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          tool = _this$state.tool,
          size = _this$state.size,
          color = _this$state.color,
          fill = _this$state.fill,
          fillColor = _this$state.fillColor,
          items = _this$state.items;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-container-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-sketchpad shadow rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__["default"], {
        width: 900,
        height: 700,
        animate: true,
        size: size,
        color: color,
        fillColor: fill ? fillColor : '',
        items: items,
        tool: tool,
        onCompleteItem: this.handleOnCompleteItem,
        canvasClassName: "game-board-sketchpad-canvas"
      }))));
    }
  }]);

  return GameCanvas;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameCanvas);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/GameTools/GameTools.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/GameTools/GameTools.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../GameCanvas/SketchPad/SketchPadTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/index.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GameTools =
/*#__PURE__*/
function (_Component) {
  _inherits(GameTools, _Component);

  function GameTools(props) {
    var _this;

    _classCallCheck(this, GameTools);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameTools).call(this, props));

    _this.handleShow = function (e) {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    };

    _this.handleToolLocally = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      if (name == 'size') value = parseInt(value);

      _this.props.handleTool({
        name: name,
        value: value
      });
    };

    _this.state = {
      show: props.show,
      defaultPosition: props.defaultPosition
    };
    _this.toolsMap = [{
      toolText: [_GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_PENCIL"]],
      tool: _GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Pencil"]
    }, {
      toolText: [_GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_LINE"]],
      tool: _GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Line"]
    }, {
      toolText: [_GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_RECTANGLE"]],
      tool: _GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Rectangle"]
    }, {
      toolText: [_GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_ELLIPSE"]],
      tool: _GameCanvas_SketchPad_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Ellipse"]
    }];
    return _this;
  }

  _createClass(GameTools, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          defaultPosition = _this$state.defaultPosition,
          show = _this$state.show;
      var _this$props = this.props,
          tool = _this$props.tool,
          size = _this$props.size,
          color = _this$props.color,
          fillColor = _this$props.fillColor;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_2___default.a, {
        axis: "both",
        handle: ".game-tools-handle",
        defaultPosition: defaultPosition,
        position: null,
        scale: 1 // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-container shadow rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-handle d-flex justify-content-between align-items-baseline rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-wrench",
        "aria-hidden": "true"
      }), "Available tools"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-header-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-arrows",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        onClick: this.handleShow,
        className: "fa ".concat(show ? 'fa-eye-slash' : 'fa-eye', " "),
        "aria-hidden": "true",
        style: {
          cursor: 'pointer'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        style: {
          display: show ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool"
      }, "Drawing tool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        onChange: this.handleToolLocally,
        value: tool,
        className: "custom-select",
        name: "tool",
        id: "tool"
      }, this.toolsMap.map(function (tm) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: tm.toolText,
          value: tm.toolText
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(tm.toolText));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "size"
      }, "Weight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.handleToolLocally,
        type: "range",
        className: "custom-range",
        name: "size",
        id: "size",
        value: size
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool_color"
      }, "Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.handleToolLocally,
        type: "color",
        value: color,
        className: "form-control",
        name: "color",
        id: "color"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "fillColor"
      }, "Fill color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: this.handleToolLocally,
        type: "color",
        value: fillColor,
        className: "form-control",
        name: "fillColor",
        id: "fillColor"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-buttons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleToolLocally,
        type: "button",
        className: "mybtn2",
        name: "eraser",
        value: "eraser"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-eraser mr-2",
        "aria-hidden": "true"
      }), "Eraser"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleToolLocally,
        type: "button",
        className: "mybtn2",
        name: "clear",
        value: "clear"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-times mr-2",
        "aria-hidden": "true"
      }), "Clear all")))));
    }
  }]);

  return GameTools;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

GameTools.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })
};
GameTools.defaultProps = {
  show: false,
  defaultPosition: {
    x: 0,
    y: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GameTools);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPad.jsx":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPad.jsx ***!
  \**************************************************************************************/
/*! exports provided: toolsMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolsMap", function() { return toolsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SketchPad; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SketchPadTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/index.jsx");
/* harmony import */ var _GameTools_GameTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GameTools/GameTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/GameTools/GameTools.jsx");
var _toolsMap;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var toolsMap = (_toolsMap = {}, _defineProperty(_toolsMap, _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_PENCIL"], _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Pencil"]), _defineProperty(_toolsMap, _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_LINE"], _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Line"]), _defineProperty(_toolsMap, _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_RECTANGLE"], _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Rectangle"]), _defineProperty(_toolsMap, _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_ELLIPSE"], _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["Ellipse"]), _toolsMap);

var SketchPad =
/*#__PURE__*/
function (_Component) {
  _inherits(SketchPad, _Component);

  function SketchPad(props) {
    var _this;

    _classCallCheck(this, SketchPad);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SketchPad).call(this, props));

    _this.initTool = function (tool) {
      _this.toolObj = _this.props.toolsMap[tool](_this.ctx);
    };

    _this.clear = function () {
      _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    };

    _this.onMouseDown = function (e) {
      var _this$toolObj;

      var _this$props = _this.props,
          onItemStart = _this$props.onItemStart,
          onDebouncedItemChange = _this$props.onDebouncedItemChange,
          debounceTime = _this$props.debounceTime;
      var _this$state = _this.state,
          color = _this$state.color,
          size = _this$state.size,
          fillColor = _this$state.fillColor,
          eraser = _this$state.eraser;

      if (eraser) {
        _this.initTool(_SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_PENCIL"]);

        color = '#ffffff';
        size = 20;
      }

      var data = (_this$toolObj = _this.toolObj).onMouseDown.apply(_this$toolObj, _toConsumableArray(_this.getCursorPosition(e)).concat([color, size, fillColor]));

      data && data[0] && onItemStart && onItemStart.apply(null, data);

      if (onDebouncedItemChange) {
        _this.interval = setInterval(_this.onDebouncedMove, debounceTime);
      }
    };

    _this.onDebouncedMove = function () {
      if (typeof _this.toolObj.onDebouncedMouseMove == 'function' && _this.props.onDebouncedItemChange) {
        _this.props.onDebouncedItemChange.apply(null, _this.toolObj.onDebouncedMouseMove());
      }
    };

    _this.onMouseMove = function (e) {
      var _this$toolObj2;

      var data = (_this$toolObj2 = _this.toolObj).onMouseMove.apply(_this$toolObj2, _toConsumableArray(_this.getCursorPosition(e)));

      data && data[0] && _this.props.onEveryItemChange && _this.props.onEveryItemChange.apply(null, data);
    };

    _this.onMouseUp = function (e) {
      var _this$toolObj3;

      var data = (_this$toolObj3 = _this.toolObj).onMouseUp.apply(_this$toolObj3, _toConsumableArray(_this.getCursorPosition(e)));

      data && data[0] && _this.props.onCompleteItem && _this.props.onCompleteItem.apply(null, data);

      if (_this.props.onDebouncedItemChange) {
        clearInterval(_this.interval);
        _this.interval = null;
      }
    };

    _this.getCursorPosition = function (e) {
      var _this$canvas$getBound = _this.canvas.getBoundingClientRect(),
          top = _this$canvas$getBound.top,
          left = _this$canvas$getBound.left;

      return [e.clientX - left, e.clientY - top];
    };

    _this.handleTool = function (_ref) {
      var name = _ref.name,
          value = _ref.value;

      if (name == 'eraser') {
        _this.setState(function (prevState) {
          return {
            eraser: !prevState.eraser
          };
        });
      } else if (name == 'clear') {
        _this.clear();
      } else {
        _this.setState(_defineProperty({}, name, value));
      }
    };

    _this.state = {
      tool: props.tool,
      size: props.size,
      color: props.color,
      fillColor: props.fillColor,
      eraser: false
    };
    _this.toolObj = null;
    _this.nterval = null;
    return _this;
  }

  _createClass(SketchPad, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.canvas = Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(this.canvasRef);
      this.ctx = this.canvas.getContext('2d');
      this.initTool(this.state.tool);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var _this2 = this;

      var tool = _ref2.tool,
          items = _ref2.items;

      if (this.props.items.length !== 0) {
        items.filter(function (item) {
          return _this2.props.items.indexOf(item) === -1;
        }).forEach(function (item) {
          _this2.initTool(item.tool);

          _this2.toolObj.draw(item, _this2.props.animate);
        });
      }

      this.initTool(this.state.tool);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          canvasClassName = _this$props2.canvasClassName,
          children = _this$props2.children,
          gtShow = _this$props2.gtShow,
          gtDefaultPosition = _this$props2.gtDefaultPosition;
      var _this$state2 = this.state,
          tool = _this$state2.tool,
          size = _this$state2.size,
          color = _this$state2.color,
          fillColor = _this$state2.fillColor;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameTools_GameTools__WEBPACK_IMPORTED_MODULE_4__["default"], {
        defaultPosition: gtDefaultPosition,
        show: gtShow,
        handleTool: this.handleTool,
        tool: tool,
        size: size,
        color: color,
        fillColor: fillColor
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
        ref: function ref(canvas) {
          _this3.canvasRef = canvas;
        },
        className: canvasClassName,
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseOut: this.onMouseUp,
        onMouseUp: this.onMouseUp,
        width: width,
        height: height
      }), children);
    }
  }]);

  return SketchPad;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

SketchPad.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  animate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  canvasClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fillColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tool: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toolsMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onItemStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // function(stroke:Stroke) { ... }
  onEveryItemChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // function(idStroke:string, x:number, y:number) { ... }
  onDebouncedItemChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // function(idStroke, points:Point[]) { ... }
  onCompleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // function(stroke:Stroke) { ... }
  debounceTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
SketchPad.defaultProps = {
  width: 500,
  height: 500,
  color: '#000',
  size: 5,
  fillColor: '',
  canvasClassName: 'canvas',
  debounceTime: 1000,
  animate: true,
  tool: _SketchPadTools__WEBPACK_IMPORTED_MODULE_3__["TOOL_PENCIL"],
  toolsMap: toolsMap,
  eraser: false
};


/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Ellipse.jsx":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Ellipse.jsx ***!
  \***************************************************************************************************/
/*! exports provided: TOOL_ELLIPSE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_ELLIPSE", function() { return TOOL_ELLIPSE; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var TOOL_ELLIPSE = 'ellipse';
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var ellipse = null;
  var imageData = null;

  var onMouseDown = function onMouseDown(x, y, color, size, fill) {
    ellipse = {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      tool: TOOL_ELLIPSE,
      color: color,
      size: size,
      fill: fill,
      start: {
        x: x,
        y: y
      },
      end: null
    };
    imageData = context.getImageData(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
    return [ellipse];
  };

  var drawEllipsePolifyll = function drawEllipsePolifyll(centerX, centerY, radiusX, radiusY) {
    var xPos;
    var yPos;
    var i = 0;

    for (i; i < 2 * Math.PI; i += 0.01) {
      xPos = centerX - radiusY * Math.sin(i) * Math.sin(0) + radiusX * Math.cos(i) * Math.cos(0);
      yPos = centerY + radiusX * Math.cos(i) * Math.sin(0) + radiusY * Math.sin(i) * Math.cos(0);

      if (i === 0) {
        context.moveTo(xPos, yPos);
      } else {
        context.lineTo(xPos, yPos);
      }
    }
  };

  var drawEllipse = function drawEllipse(item, mouseX, mouseY) {
    var startX = mouseX < item.start.x ? mouseX : item.start.x;
    var startY = mouseY < item.start.y ? mouseY : item.start.y;
    var endX = mouseX >= item.start.x ? mouseX : item.start.x;
    var endY = mouseY >= item.start.y ? mouseY : item.start.y;
    var radiusX = (endX - startX) * 0.5;
    var radiusY = (endY - startY) * 0.5;
    var centerX = startX + radiusX;
    var centerY = startY + radiusY;
    context.save();
    context.beginPath();
    context.lineWidth = item.size;
    context.strokeStyle = item.color;
    context.fillStyle = item.fill;

    if (typeof context.ellipse === 'function') {
      context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    } else {
      drawEllipsePolifyll(centerX, centerY, radiusX, radiusY);
    }

    context.stroke();
    if (item.fill) context.fill();
    context.closePath();
    context.restore();
  };

  var onMouseMove = function onMouseMove(x, y) {
    if (!ellipse) return;
    context.putImageData(imageData, 0, 0);
    drawEllipse(ellipse, x, y);
  };

  var onMouseUp = function onMouseUp(x, y) {
    if (!ellipse) return;
    onMouseMove(x, y);
    var item = ellipse;
    imageData = null;
    ellipse = null;
    item.end = {
      x: x,
      y: y
    };
    return [item];
  };

  var draw = function draw(item) {
    return drawEllipse(item, item.end.x, item.end.y);
  };

  return {
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    draw: draw
  };
});

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Line.jsx":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Line.jsx ***!
  \************************************************************************************************/
/*! exports provided: TOOL_LINE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_LINE", function() { return TOOL_LINE; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var TOOL_LINE = 'line';
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var line = null;
  var imageData = null;

  var onMouseDown = function onMouseDown(x, y, color, size) {
    line = {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      tool: TOOL_LINE,
      color: color,
      size: size,
      start: {
        x: x,
        y: y
      },
      end: null
    };
    imageData = context.getImageData(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
    return [line];
  };

  var drawLine = function drawLine(item, x, y) {
    context.save();
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.beginPath();
    context.lineWidth = item.size;
    context.strokeStyle = item.color;
    context.globalCompositeOperation = 'source-over';
    context.moveTo(item.start.x, item.start.y);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.restore();
  };

  var onMouseMove = function onMouseMove(x, y) {
    if (!line) return;
    context.putImageData(imageData, 0, 0);
    drawLine(line, x, y);
  };

  var onMouseUp = function onMouseUp(x, y) {
    if (!line) return;
    onMouseMove(x, y);
    var item = line;
    imageData = null;
    line = null;
    item.end = {
      x: x,
      y: y
    };
    return [item];
  };

  var draw = function draw(item) {
    return drawLine(item, item.end.x, item.end.y);
  };

  return {
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    draw: draw
  };
});

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Pencil.jsx":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Pencil.jsx ***!
  \**************************************************************************************************/
/*! exports provided: TOOL_PENCIL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_PENCIL", function() { return TOOL_PENCIL; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var TOOL_PENCIL = 'pencil';
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var stroke = null;
  var points = [];

  var onMouseDown = function onMouseDown(x, y, color, size) {
    stroke = {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      tool: TOOL_PENCIL,
      color: color,
      size: size,
      points: [{
        x: x,
        y: y
      }]
    };
    return [stroke];
  };

  var drawLine = function drawLine(item, start, _ref) {
    var x = _ref.x,
        y = _ref.y;
    context.save();
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.beginPath();
    context.lineWidth = item.size;
    context.strokeStyle = item.color;
    context.globalCompositeOperation = 'source-over';
    context.moveTo(start.x, start.y);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.restore();
  };

  var onMouseMove = function onMouseMove(x, y) {
    if (!stroke) return [];
    var newPoint = {
      x: x,
      y: y
    };
    var start = stroke.points.slice(-1)[0];
    drawLine(stroke, start, newPoint);
    stroke.points.push(newPoint);
    points.push(newPoint);
    return [stroke];
  };

  var onDebouncedMouseMove = function onDebouncedMouseMove() {
    var debouncedPoints = points;
    points = [];
    return [stroke, debouncedPoints];
  };

  var onMouseUp = function onMouseUp(x, y) {
    if (!stroke) return;
    onMouseMove(x, y);
    points = [];
    var item = stroke;
    stroke = null;
    return [item];
  };

  var draw = function draw(item, animate) {
    var time = 0;
    var i = 0;
    var j = item.points.length;

    for (i, j; i < j; i++) {
      if (!item.points[i - 1]) continue;

      if (animate) {
        setTimeout(drawLine.bind(null, item, item.points[i - 1], item.points[i]), time);
        time += 10;
      } else {
        drawLine(item, item.points[i - 1], item.points[i]);
      }
    }
  };

  return {
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onDebouncedMouseMove: onDebouncedMouseMove,
    onMouseUp: onMouseUp,
    draw: draw
  };
});

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Rectangle.jsx":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Rectangle.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: TOOL_RECTANGLE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_RECTANGLE", function() { return TOOL_RECTANGLE; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var TOOL_RECTANGLE = 'rectangle';
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var rectangle = null;
  var imageData = null;

  var onMouseDown = function onMouseDown(x, y, color, size, fill) {
    rectangle = {
      id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      tool: TOOL_RECTANGLE,
      color: color,
      size: size,
      fill: fill,
      start: {
        x: x,
        y: y
      },
      end: null
    };
    imageData = context.getImageData(0, 0, context.canvas.clientWidth, context.canvas.clientHeight);
    return [rectangle];
  };

  var drawRectangle = function drawRectangle(item, mouseX, mouseY) {
    var startX = mouseX < item.start.x ? mouseX : item.start.x;
    var startY = mouseY < item.start.y ? mouseY : item.start.y;
    var widthX = Math.abs(item.start.x - mouseX);
    var widthY = Math.abs(item.start.y - mouseY);
    context.beginPath();
    context.lineWidth = item.size;
    context.strokeStyle = item.color;
    context.fillStyle = item.fill;
    context.rect(startX, startY, widthX, widthY);
    context.stroke();
    if (item.fill) context.fill();
  };

  var onMouseMove = function onMouseMove(x, y) {
    if (!rectangle) return;
    context.putImageData(imageData, 0, 0);
    context.save();
    drawRectangle(rectangle, x, y);
    context.restore();
  };

  var onMouseUp = function onMouseUp(x, y) {
    if (!rectangle) return;
    onMouseMove(x, y);
    var item = rectangle;
    imageData = null;
    rectangle = null;
    item.end = {
      x: x,
      y: y
    };
    return [item];
  };

  var draw = function draw(item) {
    return drawRectangle(item, item.end.x, item.end.y);
  };

  return {
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    draw: draw
  };
});

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/index.jsx":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/index.jsx ***!
  \*************************************************************************************************/
/*! exports provided: Pencil, TOOL_PENCIL, Line, TOOL_LINE, Ellipse, TOOL_ELLIPSE, Rectangle, TOOL_RECTANGLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pencil */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Pencil.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return _Pencil__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOL_PENCIL", function() { return _Pencil__WEBPACK_IMPORTED_MODULE_0__["TOOL_PENCIL"]; });

/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Line.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOL_LINE", function() { return _Line__WEBPACK_IMPORTED_MODULE_1__["TOOL_LINE"]; });

/* harmony import */ var _Ellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ellipse */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Ellipse.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return _Ellipse__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOL_ELLIPSE", function() { return _Ellipse__WEBPACK_IMPORTED_MODULE_2__["TOOL_ELLIPSE"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rectangle */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPadTools/Rectangle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOL_RECTANGLE", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_3__["TOOL_RECTANGLE"]; });






/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameChat/GameChat.jsx":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameChat/GameChat.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common/Dropdown/Dropdown */ "./resources/assets/js/components/Common/Dropdown/Dropdown.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var GameChat =
/*#__PURE__*/
function (_Component) {
  _inherits(GameChat, _Component);

  function GameChat() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, GameChat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameChat)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      messages: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }, _temp));
  }

  _createClass(GameChat, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-container-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat shadow rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat-header rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-comment",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Chat")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat-body"
      }, this.state.messages.map(function (m) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: m,
          className: "game-board-chat-message"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex justify-content-start align-items-baseline flex-row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "game-board-chat-user mr-3"
        }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "game-board-chat-text rounded"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "m-0"
        }, "Hellooo to alll"))));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat-footer rounded-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "game-board-chat-input",
        placeholder: "Type word..."
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat-emojis"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown dropup"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-secondary dropdown-toggle",
        href: "javascript:void(0)",
        role: "button",
        id: "game-board-chat-emojis-dropdown",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-smile-o",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-smile-o",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-meh-o",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-frown-o",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-hand-peace-o",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-thumbs-o-up",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-thumbs-o-down",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-heart-o",
        "aria-hidden": "true"
      }))))))))));
    }
  }]);

  return GameChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameChat);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameLayout.jsx":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameLayout.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var GameLayout = function GameLayout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-container"
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (GameLayout);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameScore/GameScore.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameScore/GameScore.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GameScore =
/*#__PURE__*/
function (_Component) {
  _inherits(GameScore, _Component);

  function GameScore() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, GameScore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameScore)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }, _temp));
  }

  _createClass(GameScore, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-container-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-score shadow rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-score-header rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-trophy",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Scoreboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "game-board-score-list"
      }, this.state.users.map(function (u) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: u,
          className: "game-board-score-row rounded"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-avatar-container"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-drawing"
        }, u == 4 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fa fa-paint-brush",
          "aria-hidden": "true"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-avatar"
        }, "Avatar", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-position"
        }, u))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-username"
        }, "Username", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "game-board-score-points"
        }, "(", Math.floor(Math.random() * 10) * u, ") point/s")));
      })))));
    }
  }]);

  return GameScore;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameScore);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameToolBar/GameToolBar.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameToolBar/GameToolBar.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_InfoTooltip_InfoTooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Common/InfoTooltip/InfoTooltip */ "./resources/assets/js/components/Common/InfoTooltip/InfoTooltip.jsx");
/* harmony import */ var _Common_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Common/Dropdown/Dropdown */ "./resources/assets/js/components/Common/Dropdown/Dropdown.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GameToolBar =
/*#__PURE__*/
function (_Component) {
  _inherits(GameToolBar, _Component);

  function GameToolBar() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, GameToolBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameToolBar)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(GameToolBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-toolbar-container container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2 d-flex justify-content-around align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "game-board-rounds m-1"
      }, "Round: 1 of 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "game-board-clock m-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-clock-o",
        "aria-hidden": "true"
      }), " \xA0 2:55")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-8 game-board-guessing-word-container d-flex justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "game-board-guessing-word"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "L"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "T"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "T"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "E"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "game-board-guessing-word-letter"
      }, "R"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ml-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_InfoTooltip_InfoTooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
        info: "Guessing word",
        className: "m-1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-question",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-2 d-flex justify-content-center align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "game-board-toolbar-menu",
        actions: [{
          to: '/',
          title: 'Leave room'
        }],
        classNameMenu: "dropdown-menu-right"
      }, "Menu"))));
    }
  }]);

  return GameToolBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameToolBar);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Home/Home.jsx":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Home/Home.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Home - Drawthing",
        className: "page-home"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-home-banner text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/game",
        className: "mybtn1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-play mr-2",
        "aria-hidden": "true"
      }), "Play now !"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "text-center rules-button"
      }, "Rules", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-chevron-down",
        "aria-hidden": "true"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-home-rules container-fluid"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-home-rules-map"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row page-home-rules-item-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Some heading 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse, beatae et animi error itaque atque deserunt? Esse qui harum laudantium fugiat. Perferendis, at obcaecati voluptates eius aliquam necessitatibus autem!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "page-home-rules-pulse page-home-rules-pulse-right rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-question",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/placeholder.png",
        className: "img-fluid shadow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/placeholder.png",
        className: "img-fluid shadow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Maybe next heading over here!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto modi unde minima asperiores eum nesciunt voluptatem itaque iste sequi voluptates, laborum deleniti maiores inventore laudantium quis tempora esse."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "page-home-rules-pulse page-home-rules-pulse-left rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-exclamation",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "And here is our last heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto modi unde minima asperiores eum nesciunt voluptatem itaque iste sequi voluptates, laborum deleniti maiores inventore laudantium quis tempora esse."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "page-home-rules-pulse page-home-rules-pulse-right rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paint-brush",
        "aria-hidden": "true"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 page-home-rules-item-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/img/placeholder.png",
        className: "img-fluid shadow"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 text-center bg-white"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/game",
        className: "mybtn2 mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-play mr-2",
        "aria-hidden": "true"
      }), "Play now !")))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Page.jsx":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/Pages/Page.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Page)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.className || ''
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, this.props.title || 'Drawthing')), this.props.children);
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Play/Play.jsx":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Play/Play.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions */ "./resources/assets/js/actions/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_classes_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/classes/Room */ "./resources/assets/js/utils/classes/Room.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _PlayAvatarForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlayAvatarForm */ "./resources/assets/js/components/Pages/Play/PlayAvatarForm.jsx");
/* harmony import */ var _PlayUsernameForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PlayUsernameForm */ "./resources/assets/js/components/Pages/Play/PlayUsernameForm.jsx");
/* harmony import */ var _PlayRules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlayRules */ "./resources/assets/js/components/Pages/Play/PlayRules.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Play =
/*#__PURE__*/
function (_Component) {
  _inherits(Play, _Component);

  function Play(props) {
    var _this;

    _classCallCheck(this, Play);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Play).call(this, props));

    _this.handleSubmit =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this$state$usernameF, username, usernameFormValid, avatarFormValid, startType, avatar, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$state$usernameF = _this.state.usernameForm, username = _this$state$usernameF.username, usernameFormValid = _this$state$usernameF.valid;
                avatarFormValid = _this.state.avatarForm.valid;
                startType = e.currentTarget.value;
                e.preventDefault();

                if (usernameFormValid) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", _this.setState(function (_ref2) {
                  var usernameForm = _ref2.usernameForm;
                  return {
                    usernameForm: _objectSpread({}, usernameForm, {
                      pristine: false
                    })
                  };
                }));

              case 8:
                if (avatarFormValid) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                _context.next = 12;
                return _this.createAvatarImage();

              case 12:
                avatar = _context.sent;
                data = {
                  username: username,
                  avatar: avatar
                };
                return _context.abrupt("return", _this.props.createPlayer(data).then(function (response) {
                  switch (startType) {
                    case 'create_room':
                      {
                        _this.props.createRoom();

                        break;
                      }

                    case 'random_room':
                      {
                        break;
                      }

                    case 'join_room':
                      {
                        _this.props.joinRoom({
                          room: {
                            uuid: _this.props.match.params.roomUUID
                          }
                        });

                        break;
                      }

                    default:
                      break;
                  }
                }).catch(function (error) {
                  console.log(error);
                  console.log(error.response);

                  _this.setState(function (prevState) {
                    return {
                      errors: _objectSpread({}, Object(lodash__WEBPACK_IMPORTED_MODULE_11__["mapValues"])(error.response.data.error, function (v) {
                        return v[0] || null;
                      }))
                    };
                  });
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.createAvatarImage = function () {
      return new Promise(function (resolve, reject) {
        _this.sketchpadRef.current.canvas.toBlob(function (blob) {
          resolve(blob);
        });
      });
    };

    _this.onCompleteDrawing = function (item) {
      _this.setState(function (_ref3) {
        var avatarForm = _ref3.avatarForm;
        return {
          avatarForm: _objectSpread({}, avatarForm, {
            items: [].concat(_toConsumableArray(avatarForm.items), [item]),
            valid: true
          }),
          errors: {
            avatar: null
          }
        };
      });
    };

    _this.handleChangeUsername = function (e) {
      var username = e.target.value;

      _this.setState(function (_ref4) {
        var usernameForm = _ref4.usernameForm;
        return {
          usernameForm: _objectSpread({}, usernameForm, {
            username: username,
            valid: username.length >= 3
          }),
          errors: {
            username: null
          }
        };
      });
    };

    _this.handleFocusUsername = function (e) {
      var type = e.type;

      _this.setState(function (_ref5) {
        var usernameForm = _ref5.usernameForm;
        return {
          usernameForm: _objectSpread({}, usernameForm, {
            focused: type === 'focus',
            pristine: type === 'blur' ? false : usernameForm.pristine
          })
        };
      });
    };

    _this.sketchpadRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.roomUUID = _this.props.match.params.roomUUID;
    _this.hasRoomUUID = typeof _this.roomUUID !== 'undefined' && _this.roomUUID;
    _this.queryString = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.parse(props.location.search);
    _this.state = {
      avatarForm: {
        width: 300,
        height: 300,
        tool: 'pencil',
        size: 5,
        color: '#151515',
        fillColor: '#fdffff',
        items: [],
        animate: false,
        eraser: false,
        gtDefaultPosition: {
          x: -24,
          y: -155
        },
        gtShow: false,
        valid: false
      },
      usernameForm: {
        username: '',
        focused: false,
        valid: false,
        pristine: true
      },
      errors: {
        avatar: null,
        username: null,
        general: null
      }
    };
    return _this;
  }

  _createClass(Play, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.socket.fd && !this.props.socket.connected) {
        this.props.ws_make_connection('game');
      } // if connected to room clear state and do disconnect from room
      // TODO: DISCONNECT SA ROOM-A KAD SE IDE NA BACK U BROWSER-U


      this.props.clearState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.room.id != this.props.room.id) {
        var roomModel = new _utils_classes_Room__WEBPACK_IMPORTED_MODULE_6__["default"](this.props.room);

        if (roomModel.isReady()) {
          this.props.push('/room');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          avatarForm = _this$state.avatarForm,
          usernameForm = _this$state.usernameForm,
          errors = _this$state.errors;
      var _this$props = this.props,
          player = _this$props.player,
          room = _this$props.room; // room.creating || room.joining || player.creating

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Play game - Drawthing",
        className: "container-fluid page-start-game"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "game-start-container container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "game-start-card rounded shadow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "game-start-heading"
      }, "Start new game"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayAvatarForm__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, avatarForm, {
        sketchpadRef: this.sketchpadRef,
        onCompleteDrawing: this.onCompleteDrawing,
        errors: errors
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayUsernameForm__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, usernameForm, {
        handleSubmit: this.handleSubmit,
        handleChangeUsername: this.handleChangeUsername,
        handleFocusUsername: this.handleFocusUsername,
        errors: errors,
        hasRoomUUID: this.hasRoomUUID,
        buttonStatus: room.creating || room.joining || player.creating
      })), errors.general && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        class: "help-text d-block text-center text-danger"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        class: "fa fa-exclamation-circle mr-2",
        "aria-hidden": "true"
      }), errors.general)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PlayRules__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
    }
  }]);

  return Play;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (state) {
  return {
    player: state.player,
    room: state.room,
    socket: state.socket
  };
}, {
  ws_make_connection: _actions__WEBPACK_IMPORTED_MODULE_4__["ws_make_connection"],
  createPlayer: _actions__WEBPACK_IMPORTED_MODULE_4__["createPlayer"],
  createRoom: _actions__WEBPACK_IMPORTED_MODULE_4__["createRoom"],
  joinRoom: _actions__WEBPACK_IMPORTED_MODULE_4__["joinRoom"],
  push: connected_react_router__WEBPACK_IMPORTED_MODULE_5__["push"],
  clearState: _actions__WEBPACK_IMPORTED_MODULE_4__["clearState"]
})(Play));

/***/ }),

/***/ "./resources/assets/js/components/Pages/Play/PlayAvatarForm.jsx":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Play/PlayAvatarForm.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game_GameCanvas_SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game/GameCanvas/SketchPad/SketchPad */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPad.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var PlayAvatarForm = function PlayAvatarForm(_ref) {
  var onCompleteDrawing = _ref.onCompleteDrawing,
      sketchpadRef = _ref.sketchpadRef,
      valid = _ref.valid,
      errors = _ref.errors,
      avatarForm = _objectWithoutProperties(_ref, ["onCompleteDrawing", "sketchpadRef", "valid", "errors"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-canvas-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_GameCanvas_SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, avatarForm, {
    onCompleteItem: onCompleteDrawing,
    canvasClassName: "game-start-canvas rounded",
    ref: sketchpadRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "help-text d-block text-center ".concat(!errors.avatar && valid ? '' : 'text-danger')
  }, !errors.avatar && valid ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle mr-2",
    "aria-hidden": "true"
  }), errors.avatar && valid ? errors.avatar : 'Draw your avatar')));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayAvatarForm);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Play/PlayRules.jsx":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Play/PlayRules.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var PlayRules = function PlayRules(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-rules-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "game-start-rules-heading"
  }, "Game Rules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "game-start-rules-text"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 5")));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayRules);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Play/PlayUsernameForm.jsx":
/*!************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Play/PlayUsernameForm.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Form/Button */ "./resources/assets/js/components/Form/Button.jsx");




var PlayUsernameForm = function PlayUsernameForm(_ref) {
  var username = _ref.username,
      focused = _ref.focused,
      valid = _ref.valid,
      pristine = _ref.pristine,
      handleChangeUsername = _ref.handleChangeUsername,
      handleSubmit = _ref.handleSubmit,
      handleFocusUsername = _ref.handleFocusUsername,
      errors = _ref.errors,
      hasRoomUUID = _ref.hasRoomUUID,
      buttonStatus = _ref.buttonStatus;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-username-form-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group-wrapper input-material-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: focused || username ? 'input-focused' : '',
    htmlFor: "game_start_username"
  }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onFocus: handleFocusUsername,
    onBlur: handleFocusUsername,
    onChange: handleChangeUsername,
    type: "text",
    id: "game_start_username",
    name: "game_start_username",
    className: "form-control",
    value: username
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback text-left ".concat(valid || pristine ? '' : 'd-block')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle",
    "aria-hidden": "true"
  }), " \xA0 Username must be min 3 characters!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback text-left ".concat(errors.username && valid ? 'd-block' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle",
    "aria-hidden": "true"
  }), " \xA0", errors.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "mybtn2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-arrow-left mr-2",
    "aria-hidden": "true"
  }), "Go back"), hasRoomUUID ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleSubmit,
    type: "submit",
    name: "join_room",
    value: "join_room",
    icon: "fa-rocket",
    className: "mybtn2",
    disabled: buttonStatus
  }, "Join room") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleSubmit,
    type: "submit",
    className: "mybtn2",
    name: "create_room",
    value: "create_room",
    icon: "fa-users",
    disabled: buttonStatus
  }, "Create room"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleSubmit,
    type: "button",
    className: "mybtn2",
    name: "random_room",
    value: "random_room",
    icon: "fa-random",
    disabled: buttonStatus
  }, "Random room")))));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayUsernameForm);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Room/Room.jsx":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Room/Room.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions */ "./resources/assets/js/actions/index.js");
/* harmony import */ var _Common_Modal_modalTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Common/Modal/modalTypes */ "./resources/assets/js/components/Common/Modal/modalTypes.jsx");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_classes_Room__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/classes/Room */ "./resources/assets/js/utils/classes/Room.js");
/* harmony import */ var _utils_classes_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/classes/Chat */ "./resources/assets/js/utils/classes/Chat.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _Play_PlayRules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Play/PlayRules */ "./resources/assets/js/components/Pages/Play/PlayRules.jsx");
/* harmony import */ var _RoomChat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RoomChat */ "./resources/assets/js/components/Pages/Room/RoomChat.jsx");
/* harmony import */ var _RoomPlayers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RoomPlayers */ "./resources/assets/js/components/Pages/Room/RoomPlayers.jsx");
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Form/Button */ "./resources/assets/js/components/Form/Button.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Room =
/*#__PURE__*/
function (_Component) {
  _inherits(Room, _Component);

  function Room(props) {
    var _this;

    _classCallCheck(this, Room);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Room).call(this, props));

    _this.handleChatSend = function (e) {
      var additionalData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      e.preventDefault();
      var message = ''; // Message comes from text input

      if (e.type == 'submit') {
        message = e.target.elements['game-board-chat-input'].value;
        if (message && message.length <= 0) return;
        e.target.reset();
      } // Message comes from emoji dropdown
      else if (e.type == 'click' && additionalData) {
          message = additionalData;
        }

      _this.props.sendMessageRoom({
        text: message
      });
    };

    _this.scrollToBottom = function () {
      var el = _this.chatBodyRef.current;

      if (typeof el !== 'undefined' && typeof el.scrollTop !== 'undefined' && typeof el.scrollHeight !== 'undefined') {
        el.scrollTop = el.scrollHeight;
      }
    };

    _this.handleCopyToClipboard = function (e) {
      // copy to clipboard share link
      _this.joinLinkInputRef.current.select();

      document.execCommand('copy');
      e.target.focus();
    };

    _this.handleKick = function (playerId) {
      //kick player from room by admin
      _this.props.showModal({
        modalType: _Common_Modal_modalTypes__WEBPACK_IMPORTED_MODULE_3__["KICK_PLAYER_MODAL"],
        modalProps: {
          playerId: playerId
        }
      });
    };

    _this.chatBodyRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.joinLinkInputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.subscribedToRoomChat = false;
    return _this;
  }

  _createClass(Room, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          room = _this$props.room,
          push = _this$props.push,
          socket = _this$props.socket,
          subscribeToChatGlobalEvents = _this$props.subscribeToChatGlobalEvents,
          subscribeToRoomGlobalEvents = _this$props.subscribeToRoomGlobalEvents;
      var roomModel = new _utils_classes_Room__WEBPACK_IMPORTED_MODULE_5__["default"](room);

      try {
        // redirect if socket is not connected
        if (!socket.connected) throw new Error('Socket not connected'); // listen for chat and room events when room is created or joined

        if (roomModel.isReady() && !this.subscribedToRoomChat) {
          subscribeToChatGlobalEvents();
          subscribeToRoomGlobalEvents();
          this.subscribedToRoomChat = true;
        }
      } catch (e) {
        console.log(e);
        push('/play');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // redirect player to play page and clear data if he is kicked by admin
      if (this.props.room.lastKickedPlayer.id == this.props.player.id) {
        this.props.clearStateAfterKick();
        this.props.showModal({
          modalType: _Common_Modal_modalTypes__WEBPACK_IMPORTED_MODULE_3__["INFO_MODAL"],
          modalProps: {
            body: 'You were kicked from the room by admin'
          }
        });
        this.props.push('/play');
        return;
      } // chat always scroll on new message to see the latest one


      if (this.props.chat.messages.length != prevProps.chat.messages.length && this.props.chat.messages.length > 0) {
        this.scrollToBottom();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          player = _this$props2.player,
          room = _this$props2.room,
          chat = _this$props2.chat;
      var roomModel = new _utils_classes_Room__WEBPACK_IMPORTED_MODULE_5__["default"](room);
      var chatModel = new _utils_classes_Chat__WEBPACK_IMPORTED_MODULE_6__["default"](chat);
      var isPlayerAdmin = roomModel.isPlayerAdmin(player);

      if (!roomModel.isCreated() && !roomModel.isJoined()) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Play game - Drawthing",
        className: "container-fluid page-start-game"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-start-container container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-start-card rounded shadow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-created-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "game-created-title"
      }, roomModel.isCreated() && 'Successfully created room', roomModel.isJoined() && 'Successfully joined room'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomPlayers__WEBPACK_IMPORTED_MODULE_10__["default"], {
        room: roomModel,
        isPlayerAdmin: isPlayerAdmin,
        player: player,
        handleCopyToClipboard: this.handleCopyToClipboard,
        handleKick: this.handleKick,
        ref: this.joinLinkInputRef
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-created-chat-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomChat__WEBPACK_IMPORTED_MODULE_9__["default"], {
        room: roomModel,
        chat: chatModel,
        handleChatSend: this.handleChatSend,
        ref: this.chatBodyRef
      })), isPlayerAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        icon: "fa-rocket",
        className: "mybtn2 my-auto"
      }, "Start game")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Play_PlayRules__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
    }
  }]);

  return Room;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    player: state.player,
    room: state.room,
    chat: state.chat,
    socket: state.socket
  };
}, {
  sendMessageRoom: _actions__WEBPACK_IMPORTED_MODULE_2__["sendMessageRoom"],
  push: connected_react_router__WEBPACK_IMPORTED_MODULE_4__["push"],
  subscribeToChatGlobalEvents: _actions__WEBPACK_IMPORTED_MODULE_2__["subscribeToChatGlobalEvents"],
  kickPlayer: _actions__WEBPACK_IMPORTED_MODULE_2__["kickPlayer"],
  subscribeToRoomGlobalEvents: _actions__WEBPACK_IMPORTED_MODULE_2__["subscribeToRoomGlobalEvents"],
  clearStateAfterKick: _actions__WEBPACK_IMPORTED_MODULE_2__["clearStateAfterKick"],
  showModal: _actions__WEBPACK_IMPORTED_MODULE_2__["showModal"]
})(Room));

/***/ }),

/***/ "./resources/assets/js/components/Pages/Room/RoomChat.jsx":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Room/RoomChat.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RoomChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RoomChatMessage */ "./resources/assets/js/components/Pages/Room/RoomChatMessage.jsx");




var RoomChat = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, chatBodyRef) {
  var room = _ref.room,
      chat = _ref.chat,
      handleChatSend = _ref.handleChatSend;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-container-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "game-created-title"
  }, "Room Chat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-body",
    ref: chatBodyRef
  }, chat.messages.map(function (m) {
    var player = room.getPlayer(m.player_id);
    if (!player && m.player_id != '#playerActionMessage') return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoomChatMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: m.id,
      chat: chat,
      message: m.text,
      username: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(player, 'username', '')
    });
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-footer rounded-bottom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleChatSend
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "game-board-chat-input",
    className: "form-control",
    id: "game-board-chat-input",
    placeholder: "Type word..."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-emojis"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown dropup"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn btn-secondary dropdown-toggle",
    href: "javascript:void(0)",
    role: "button",
    id: "game-board-chat-emojis-dropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-smile-o",
    "aria-hidden": "true"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-menu dropdown-menu-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, chat.emojis.map(function (emoji) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
      onClick: function onClick(e) {
        return handleChatSend(e, emoji.text);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa ".concat(emoji.class),
      "aria-hidden": "true"
    }));
  }))))))));
});
/* harmony default export */ __webpack_exports__["default"] = (RoomChat);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Room/RoomChatMessage.jsx":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Room/RoomChatMessage.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);



var RoomChatMessage = function RoomChatMessage(_ref) {
  var chat = _ref.chat,
      message = _ref.message,
      username = _ref.username;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-start align-items-baseline flex-row"
  }, username && username.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-user mr-2 text-nowrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-nowrap"
  }, username, ":")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-chat-text rounded"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "m-0"
  }, chat.parseEmojis(message, function (emoji, word) {
    return emoji ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
      className: "fa ".concat(emoji.class, " mx-1")
    }) : " ".concat(word, " ");
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoomChatMessage);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Room/RoomPlayers.jsx":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Room/RoomPlayers.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globals */ "./resources/assets/js/globals.js");


var RoomPlayers = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, joinLinkInputRef) {
  var room = _ref.room,
      handleCopyToClipboard = _ref.handleCopyToClipboard,
      isPlayerAdmin = _ref.isPlayerAdmin,
      player = _ref.player,
      handleKick = _ref.handleKick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-created-join-link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-created-join-link-input"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control",
    type: "text",
    value: _globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host + '/play/' + room.uuid,
    ref: joinLinkInputRef,
    readOnly: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "helper-text"
  }, "Share this link to your friends to join you!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleCopyToClipboard,
    type: "button",
    className: "mybtn2",
    title: "Copy link"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-files-o",
    "aria-hidden": "true"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "game-created-user-list"
  }, room.getActivePlayers().map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: p.id,
      className: "game-created-user-list-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "game-created-user-avatar shadow mx-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: p.avatar,
      alt: p.username,
      className: "rounded"
    }), room.isPlayerAdmin(p) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-star game-creater-user-leader",
      "aria-hidden": "true",
      title: "Room leader"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "game-created-user-username mx-3"
    }, p.username, " ", player.id == p.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, " (you)") : null), isPlayerAdmin && !room.isPlayerAdmin(p) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: function onClick(e) {
        return handleKick(p.id);
      },
      className: "game-created-user-kick ml-auto"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "mybtn2",
      title: "Kick"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-times",
      "aria-hidden": "true"
    }))));
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (RoomPlayers);

/***/ }),

/***/ "./resources/assets/js/globals.js":
/*!****************************************!*\
  !*** ./resources/assets/js/globals.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var globals = _objectSpread({}, context.__global__);

if (typeof window !== 'undefined') {
  delete window.context;
}

/* harmony default export */ __webpack_exports__["default"] = (globals);

/***/ }),

/***/ "./resources/assets/js/hocs/asyncComponent.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/hocs/asyncComponent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var asyncComponent = function asyncComponent(importComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _getPrototypeOf2;

        var _temp, _this;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
          component: null
        }, _temp));
      }

      _createClass(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          importComponent().then(function (cmp) {
            _this2.setState({
              component: cmp.default
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var C = this.state.component;
          return C ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, this.props) : null;
        }
      }]);

      return _class2;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
};

/* harmony default export */ __webpack_exports__["default"] = (asyncComponent);

/***/ }),

/***/ "./resources/assets/js/hocs/formFieldsRenderer.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/hocs/formFieldsRenderer.js ***!
  \********************************************************/
/*! exports provided: createRenderer, RenderInput, RenderTextarea, RenderSelect, RenderFile, RenderCheckbox, FieldRadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return createRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderInput", function() { return RenderInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTextarea", function() { return RenderTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderSelect", function() { return RenderSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderFile", function() { return RenderFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderCheckbox", function() { return RenderCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldRadioGroup", function() { return FieldRadioGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var createRenderer = function createRenderer(render) {
  return function (_ref) {
    var input = _ref.input,
        meta = _ref.meta,
        label = _ref.label,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ["input", "meta", "label", "className"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group-wrapper ".concat(rest.materialDesign ? 'input-material-wrapper' : '', " ").concat(className || 'col-md-12')
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, rest.type != 'checkbox' && label.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: [meta.active ? 'input-focused' : '', input.value.length > 0 ? 'input-filled' : ''].join(' '),
      htmlFor: input.name
    }, label.text), render(input, label, rest)), meta.error && meta.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback d-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-exclamation-circle",
      "aria-hidden": "true"
    }), " \xA0", meta.error));
  };
};
var RenderInput = createRenderer(function (input, label, _ref2) {
  var type = _ref2.type,
      disabled = _ref2.disabled,
      placeholder = _ref2.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: type || 'text',
    id: input.name,
    disabled: disabled || false,
    placeholder: placeholder.active ? placeholder.text : '',
    className: "form-control"
  }));
});
var RenderTextarea = createRenderer(function (input, label, _ref3) {
  var disabled = _ref3.disabled,
      options = _ref3.options,
      placeholder = _ref3.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({}, input, {
    id: input.name,
    disabled: disabled || false,
    placeholder: placeholder.active ? placeholder.text : '',
    className: "form-control"
  }, options));
});
var RenderSelect = createRenderer(function (input, label, _ref4) {
  var disabled = _ref4.disabled,
      rest = _objectWithoutProperties(_ref4, ["disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", _extends({}, input, {
    id: input.name,
    disabled: disabled || false,
    className: "form-control"
  }), rest.children);
});

var adaptFileEventToValue = function adaptFileEventToValue(delegate) {
  return function (e) {
    return delegate(e.target.files[0]);
  };
};

var RenderFile = createRenderer(function (_ref6, label, _ref5) {
  var value = _ref6.value,
      onChange = _ref6.onChange,
      onBlur = _ref6.onBlur,
      input = _objectWithoutProperties(_ref6, ["value", "onChange", "onBlur"]);

  var disabled = _ref5.disabled,
      rest = _objectWithoutProperties(_ref5, ["disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "file-input-field"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: "file",
    id: input.name,
    disabled: disabled || false,
    onChange: adaptFileEventToValue(onChange),
    onBlur: adaptFileEventToValue(onBlur)
  })), value && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _.get(value, 'type', false) ? URL.createObjectURL(value) : value,
    className: "img-rounded img-responsive"
  }));
});
var RenderCheckbox = createRenderer(function (input, label, _ref7) {
  var disabled = _ref7.disabled,
      rest = _objectWithoutProperties(_ref7, ["disabled"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: "checkbox",
    id: input.name,
    disabled: disabled || false,
    className: "form-check-input"
  })), label.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: input.name
  }, label.text));
});

var RenderRadio = function RenderRadio(_ref8) {
  var input = _ref8.input,
      label = _ref8.label,
      rest = _objectWithoutProperties(_ref8, ["input", "label"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-check"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, input, {
    type: "radio",
    id: input.name + input.value,
    className: "form-check-input"
  })), label.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "form-check-label",
    htmlFor: input.name + input.value
  }, label.text));
};

var FieldRadioGroup = function FieldRadioGroup(_ref9) {
  var label = _ref9.label,
      options = _ref9.options,
      cssClasses = _ref9.cssClasses,
      rest = _objectWithoutProperties(_ref9, ["label", "options", "cssClasses"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group-wrapper ".concat(cssClasses || 'col-md-12')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, label.active && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, label.text), Object.entries(options).map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        value = _ref11[0],
        text = _ref11[1];

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], _extends({
      key: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
      label: text,
      value: value,
      component: RenderRadio
    }, rest));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: rest.name,
    component: function component(_ref12) {
      var meta = _ref12.meta;
      return meta.error ? meta.touched && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invalid-feedback d-block"
      }, meta.error) : null;
    }
  })));
};

/***/ }),

/***/ "./resources/assets/js/hocs/index.js":
/*!*******************************************!*\
  !*** ./resources/assets/js/hocs/index.js ***!
  \*******************************************/
/*! exports provided: createRenderer, RenderInput, RenderTextarea, RenderSelect, RenderFile, RenderCheckbox, FieldRadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _asyncComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncComponent */ "./resources/assets/js/hocs/asyncComponent.js");
/* empty/unused harmony star reexport *//* harmony import */ var _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formFieldsRenderer */ "./resources/assets/js/hocs/formFieldsRenderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRenderer", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["createRenderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderInput", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTextarea", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderTextarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderSelect", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderFile", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderCheckbox", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["RenderCheckbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldRadioGroup", function() { return _formFieldsRenderer__WEBPACK_IMPORTED_MODULE_1__["FieldRadioGroup"]; });




/***/ }),

/***/ "./resources/assets/js/store/middlewares/crashReporterMiddleware.js":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/store/middlewares/crashReporterMiddleware.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var crashReporterMiddleware = function crashReporterMiddleware(store) {
  return function (next) {
    return function (action) {
      try {
        return next(action);
      } catch (err) {
        console.error('Caught an exception!', err); //   Raven.captureException(err, {
        //     extra: {
        //       action,
        //       state: store.getState()
        //     }
        //   })

        throw err;
      }
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (crashReporterMiddleware);

/***/ }),

/***/ "./resources/assets/js/store/middlewares/websocketMiddleware.js":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/store/middlewares/websocketMiddleware.js ***!
  \**********************************************************************/
/*! exports provided: sockets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sockets", function() { return sockets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWSMiddleware; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");

var config = {};
var sockets = {};

function connect(url, socketID) {
  sockets[socketID] = {
    connection: io(url, {
      transports: ['websocket']
    })
  };
}

function disconnect(socketID) {
  sockets[socketID].connection.disconnect();
  sockets[socketID] = undefined;
}

function subscribe(socketID, event, customActionType, dispatch) {
  var actionType = typeof customActionType == 'undefined' || !customActionType ? event : customActionType;

  var listener = function listener(data) {
    return dispatch({
      type: actionType,
      payload: data
    });
  };

  sockets[socketID].connection.on(event, listener);
}

function unsubscribe(socketID, event) {
  if (!Array.isArray(event)) {
    event = [event];
  }

  event.forEach(function (e) {
    sockets[socketID].connection.removeAllListeners(e);
  });
}

function emit(socketID, event, data) {
  sockets[socketID].connection.emit(event, data);
}

function createWSMiddleware(wsConfig) {
  config = wsConfig;
  return function (store) {
    return function (next) {
      return function (action) {
        var type = action.type,
            socketID = action.socketID,
            event = action.event,
            data = action.data,
            customActionType = action.customActionType;

        if (type === _actions_types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_WS"]) {
          connect(config[socketID], socketID);
        }

        if (type === _actions_types__WEBPACK_IMPORTED_MODULE_0__["DISCONNECT_WS"]) {
          disconnect(socketID);
        }

        if (type === _actions_types__WEBPACK_IMPORTED_MODULE_0__["SUBSCRIBE_WS"]) {
          subscribe(socketID, event, customActionType, store.dispatch);
        }

        if (type === _actions_types__WEBPACK_IMPORTED_MODULE_0__["UNSUBSCRIBE_WS"]) {
          unsubscribe(socketID, event);
        }

        if (type === _actions_types__WEBPACK_IMPORTED_MODULE_0__["EMIT_WS"]) {
          emit(socketID, event, data);
        }

        return next(action);
      };
    };
  };
}

/***/ }),

/***/ "./resources/assets/js/store/reducers/chatReducer.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/store/reducers/chatReducer.js ***!
  \***********************************************************/
/*! exports provided: default, selector, updateChat, addMessage, generatePlayerActionMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateChat", function() { return updateChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePlayerActionMessage", function() { return generatePlayerActionMessage; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  // {id, text, player_id}
  messages: [],
  sending: false,
  //
  chatError: null,
  //
  emojis: [{
    text: '@emoji:fa-smile-o',
    class: 'fa-smile-o'
  }, {
    text: '@emoji:fa-meh-o',
    class: 'fa-meh-o'
  }, {
    text: '@emoji:fa-frown-o',
    class: 'fa-frown-o'
  }, {
    text: '@emoji:fa-hand-peace-o',
    class: 'fa-hand-peace-o'
  }, {
    text: '@emoji:fa-thumbs-o-up',
    class: 'fa-thumbs-o-up'
  }, {
    text: '@emoji:fa-thumbs-o-down',
    class: 'fa-thumbs-o-down'
  }, {
    text: '@emoji:fa-heart-o',
    class: 'fa-heart-o'
  }]
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SENDING_MESSAGE_ROOM"]:
      {
        return updateChat(state, {
          sending: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE_ROOM_SUCCESS"]:
      {
        var newMessages = addMessage(state.messages, payload.message);
        return updateChat(state, {
          sending: false,
          messages: newMessages
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE_ROOM_FAILURE"]:
      {
        return updateChat(state, {
          sending: false,
          chatError: payload.message
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_MESSAGE_ROOM"]:
      {
        var _newMessages = addMessage(state.messages, payload.message);

        return updateChat(state, {
          messages: _newMessages
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_JOINED_ROOM"]:
      {
        var _newMessages2 = addMessage(state.messages, generatePlayerActionMessage(payload.player, ':player has joined room.'));

        return updateChat(state, {
          messages: _newMessages2
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_LEAVED_ROOM"]:
      {
        var _newMessages3 = addMessage(state.messages, generatePlayerActionMessage(payload.player, ':player has leaved room.'));

        return updateChat(state, {
          messages: _newMessages3
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_KICKED"]:
      {
        var _newMessages4 = addMessage(state.messages, generatePlayerActionMessage(payload.player, ':player has been kicked from room by admin.'));

        return updateChat(state, {
          messages: _newMessages4
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REPLACE_ADMIN_ROOM"]:
      {
        var _newMessages5 = addMessage(state.messages, generatePlayerActionMessage(payload.player, ':player is now room admin.'));

        return updateChat(state, {
          messages: _newMessages5
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CHAT_DATA"]:
      {
        return _objectSpread({}, initialState);
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

var selector = function selector(state) {}; // utility reducer functions

var updateChat = function updateChat(state, room) {
  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["assign"])(state, room);
};
var addMessage = function addMessage(messages, message) {
  return messages.concat([message]);
};
var generatePlayerActionMessage = function generatePlayerActionMessage(player, text) {
  return {
    id: player.id + '_' + player.username + Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
    text: text.replace(/:player/gi, player.username),
    player_id: '#playerActionMessage'
  };
};

/***/ }),

/***/ "./resources/assets/js/store/reducers/commonReducer.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/store/reducers/commonReducer.js ***!
  \*************************************************************/
/*! exports provided: default, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);
var selector = function selector(state) {};

/***/ }),

/***/ "./resources/assets/js/store/reducers/gameReducer.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/store/reducers/gameReducer.js ***!
  \***********************************************************/
/*! exports provided: default, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);
var selector = function selector(state) {};

/***/ }),

/***/ "./resources/assets/js/store/reducers/modalReducer.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/store/reducers/modalReducer.js ***!
  \************************************************************/
/*! exports provided: default, selector, updateModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModal", function() { return updateModal; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  modalType: null,
  modalProps: {}
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_MODAL"]:
      {
        return updateModal(state, {
          modalType: payload.modalType,
          modalProps: payload.modalProps
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["HIDE_MODAL"]:
      {
        return updateModal(state, {
          modalType: null,
          modalProps: {}
        });
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

var selector = function selector(state) {}; // utility reducer functions

var updateModal = function updateModal(state, player) {
  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["assign"])(state, player);
};

/***/ }),

/***/ "./resources/assets/js/store/reducers/playerReducer.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/store/reducers/playerReducer.js ***!
  \*************************************************************/
/*! exports provided: default, selector, updatePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayer", function() { return updatePlayer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var _utils_classes_LocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/classes/LocalStorage */ "./resources/assets/js/utils/classes/LocalStorage.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var initialState = {
  id: null,
  username: null,
  avatar: null,
  password: null,
  //
  creating: false,
  created: false
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    // case '@@INIT': {
    // 	return updatePlayer(state, LocalStorage.get('player'));
    // }
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATING_PLAYER"]:
      {
        return updatePlayer(state, {
          creating: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_PLAYER_SUCCESS"]:
      {
        var newPlayer = _objectSpread({}, state.player, payload.player, {
          creating: false,
          created: true,
          password: payload.player.username.toLowerCase().replace(/\s+/g, '') + '_' + payload.player.id
        }); // save player in localstorage
        // LocalStorage.save('player', newPlayer);


        return updatePlayer(state, newPlayer);
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_PLAYER_DATA"]:
      {
        return _objectSpread({}, initialState);
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

var selector = function selector(state) {}; // utility reducer functions

var updatePlayer = function updatePlayer(state, player) {
  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_2__["assign"])(state, player);
};

/***/ }),

/***/ "./resources/assets/js/store/reducers/roomReducer.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/store/reducers/roomReducer.js ***!
  \***********************************************************/
/*! exports provided: default, selector, updateRoom, addPlayer, removePlayer, editPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRoom", function() { return updateRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlayer", function() { return addPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePlayer", function() { return removePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPlayer", function() { return editPlayer; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  id: null,
  uuid: null,
  active: false,
  number_of_games: 3,
  current_game: 0,
  created_by: null,
  administered_by: null,
  created_at: null,
  //
  creating: false,
  created: false,
  createError: null,
  //
  joining: false,
  joined: false,
  joinError: null,
  //
  lastKickedPlayer: {
    // zero is because of componentDidUpdate : Room Maximum update depth exceeded
    id: 0
  },
  //
  players: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATING_ROOM"]:
      {
        return updateRoom(state, {
          creating: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_SUCCESS"]:
      {
        return updateRoom(state, _objectSpread({
          creating: false,
          created: true,
          createError: null
        }, payload.room));
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_FAILURE"]:
      {
        return updateRoom(state, {
          creating: false,
          created: false,
          createError: payload.message
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["JOINING_ROOM"]:
      {
        return updateRoom(state, {
          joining: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["JOIN_ROOM_SUCCESS"]:
      {
        return updateRoom(state, _objectSpread({
          joining: false,
          joined: true,
          joinError: null
        }, payload.room));
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["JOIN_ROOM_FAILURE"]:
      {
        return updateRoom(state, {
          joining: false,
          joined: false,
          joinError: payload.message
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_JOINED_ROOM"]:
      {
        var newPlayers = addPlayer(state.players, payload.player);
        return updateRoom(state, {
          players: newPlayers
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_LEAVED_ROOM"]:
      {
        var _newPlayers = editPlayer(state.players, payload.player.id, {
          active: false
        });

        return updateRoom(state, {
          players: _newPlayers
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["PLAYER_KICKED"]:
      {
        var _newPlayers2 = editPlayer(state.players, payload.player.id, {
          active: false
        });

        return updateRoom(state, {
          players: _newPlayers2,
          lastKickedPlayer: payload.player
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REPLACE_ADMIN_ROOM"]:
      {
        return updateRoom(state, {
          administered_by: payload.player.id
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ROOM_DATA"]:
      {
        return _objectSpread({}, initialState);
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

var selector = function selector(state) {}; // utility reducer functions

var updateRoom = function updateRoom(state, room) {
  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["assign"])(state, room);
};
var addPlayer = function addPlayer(players, player) {
  return players.concat([player]);
};
var removePlayer = function removePlayer(players, player) {
  return players.filter(function (p) {
    return p.id != player.id;
  });
};
var editPlayer = function editPlayer(players, id, player) {
  return players.map(function (p) {
    if (p.id == id) return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["assign"])(p, player);
    return p;
  });
};

/***/ }),

/***/ "./resources/assets/js/store/reducers/socketReducer.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/store/reducers/socketReducer.js ***!
  \*************************************************************/
/*! exports provided: default, selector, updateSocketState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSocketState", function() { return updateSocketState; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  socket: null,
  fd: null,
  created_at: null,
  //
  connecting: false,
  connected: false,
  connectionError: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CONNECTING_SOCKET"]:
      {
        return updateSocketState(state, {
          connecting: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_SUCCESS"]:
      {
        return updateSocketState(state, {
          connecting: false,
          connected: true,
          created_at: new Date()
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_FAILURE"]:
      {
        return updateSocketState(state, {
          connecting: false,
          connected: false,
          connectionError: payload.message
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CONNECT_SOCKET_DATA"]:
      {
        return updateSocketState(state, {
          fd: payload.fd
        });
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer); // selectors

var selector = function selector(state) {}; // utility reducer functions

var updateSocketState = function updateSocketState(state, socket) {
  return Object(lodash_fp__WEBPACK_IMPORTED_MODULE_1__["assign"])(state, socket);
};

/***/ }),

/***/ "./resources/assets/js/store/store.js":
/*!********************************************!*\
  !*** ./resources/assets/js/store/store.js ***!
  \********************************************/
/*! exports provided: store, history */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./resources/assets/js/api/index.js");
/* harmony import */ var _middlewares_websocketMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/websocketMiddleware */ "./resources/assets/js/store/middlewares/websocketMiddleware.js");
/* harmony import */ var _middlewares_crashReporterMiddleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/crashReporterMiddleware */ "./resources/assets/js/store/middlewares/crashReporterMiddleware.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globals */ "./resources/assets/js/globals.js");
/* harmony import */ var _reducers_socketReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/socketReducer */ "./resources/assets/js/store/reducers/socketReducer.js");
/* harmony import */ var _reducers_commonReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers/commonReducer */ "./resources/assets/js/store/reducers/commonReducer.js");
/* harmony import */ var _reducers_playerReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers/playerReducer */ "./resources/assets/js/store/reducers/playerReducer.js");
/* harmony import */ var _reducers_roomReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reducers/roomReducer */ "./resources/assets/js/store/reducers/roomReducer.js");
/* harmony import */ var _reducers_chatReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reducers/chatReducer */ "./resources/assets/js/store/reducers/chatReducer.js");
/* harmony import */ var _reducers_gameReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reducers/gameReducer */ "./resources/assets/js/store/reducers/gameReducer.js");
/* harmony import */ var _reducers_modalReducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reducers/modalReducer */ "./resources/assets/js/store/reducers/modalReducer.js");










/*Do not remove comments below or modify them... it may break cli */
//Reducer imports







 //Reducer imports end

var isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var composeEnhancers =  false ? undefined : typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var history = isServer ? Object(history__WEBPACK_IMPORTED_MODULE_4__["createMemoryHistory"])({
  initialEntries: ['/']
}) : Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])();
var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  router: Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["connectRouter"])(history),
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"],
  common: _reducers_commonReducer__WEBPACK_IMPORTED_MODULE_10__["default"],
  socket: _reducers_socketReducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  player: _reducers_playerReducer__WEBPACK_IMPORTED_MODULE_11__["default"],
  room: _reducers_roomReducer__WEBPACK_IMPORTED_MODULE_12__["default"],
  chat: _reducers_chatReducer__WEBPACK_IMPORTED_MODULE_13__["default"],
  game: _reducers_gameReducer__WEBPACK_IMPORTED_MODULE_14__["default"],
  modal: _reducers_modalReducer__WEBPACK_IMPORTED_MODULE_15__["default"]
});
var serverState = {};

if (!isServer) {
  // Grab the state from a global variable injected into the server-generated HTML
  serverState = window.__PRELOADED_STATE__; // Allow the passed state to be garbage-collected

  delete window.__PRELOADED_STATE__;
}

var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument({
  api: _api__WEBPACK_IMPORTED_MODULE_5__["default"],
  sockets: _middlewares_websocketMiddleware__WEBPACK_IMPORTED_MODULE_6__["sockets"]
}), Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history), Object(_middlewares_websocketMiddleware__WEBPACK_IMPORTED_MODULE_6__["default"])({
  game: _globals__WEBPACK_IMPORTED_MODULE_8__["default"].url.host
}), _middlewares_crashReporterMiddleware__WEBPACK_IMPORTED_MODULE_7__["default"] //ALWAYS KEEP IT ON END TO REPORT ALL
];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, serverState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)));


/***/ }),

/***/ "./resources/assets/js/utils/classes/Chat.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/utils/classes/Chat.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./resources/assets/js/utils/classes/Model.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Chat =
/*#__PURE__*/
function (_Model) {
  _inherits(Chat, _Model);

  function Chat() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Chat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chat)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.parseMessage = function () {
      _this.emojis.reduce;
    }, _this.parseEmojis = function (message, callback) {
      return _this.splitWordsFromMessage(message).map(function (word) {
        var emoji = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["find"])(_this.emojis, function (e) {
          return e.text == word.trim();
        });

        return callback(emoji, word);
      });
    }, _this.splitWordsFromMessage = function (message) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["split"])(_this.emojis.reduce(function (accumulator, currentValue) {
        return accumulator.replace(currentValue.text, " ".concat(currentValue.text, " "));
      }, message), /\s+/g);
    }, _temp));
  }

  return Chat;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/utils/classes/FormFields.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/utils/classes/FormFields.js ***!
  \*********************************************************/
/*! exports provided: generateFormFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFormFields", function() { return generateFormFields; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FormFields =
/*#__PURE__*/
function () {
  function FormFields(f) {
    var _this = this;

    _classCallCheck(this, FormFields);

    this.field = function (name) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.fields, name, null);
    };

    this.mergeWithDefaults = function (fields) {
      var mergedFields = {};
      Object.entries(fields).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            field = _ref2[1];

        mergedFields[name] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(defaults), field);
      });
      return mergedFields;
    };

    this.originalFields = f;
    this.fields = this.mergeWithDefaults(f);
  }

  _createClass(FormFields, [{
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }
  }]);

  return FormFields;
}();

var generateFormFields = function generateFormFields(fields) {
  return new FormFields(fields).getFields();
};
var defaults = {
  type: 'text',
  label: {
    text: '',
    active: true,
    options: {
      class: ''
    }
  },
  placeholder: {
    text: '',
    active: false
  },
  validation: {
    required: true
  },
  materialDesign: false,
  errMessage: 'required!'
};

/***/ }),

/***/ "./resources/assets/js/utils/classes/LocalStorage.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/utils/classes/LocalStorage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocalStorage; });
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/fp */ "./node_modules/lodash/fp.js");
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { merge as _merge, get as _get, cloneDeep as _cloneDeep } from 'lodash';


var LocalStorage =
/*#__PURE__*/
function () {
  function LocalStorage() {
    _classCallCheck(this, LocalStorage);
  }

  _createClass(LocalStorage, null, [{
    key: "save",
    value: function save(key, value) {
      return LocalStorage.isBrowser ? localStorage.setItem(key, JSON.stringify(value)) : false;
    }
  }, {
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!LocalStorage.isBrowser) return defaultValue;
      var value = defaultValue;

      try {
        value = JSON.parse(localStorage.getItem(key));
      } catch (e) {}

      return value;
    }
  }]);

  return LocalStorage;
}();

LocalStorage.isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;


/***/ }),

/***/ "./resources/assets/js/utils/classes/Model.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/utils/classes/Model.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Model = function Model(data) {
  var _this = this;

  _classCallCheck(this, Model);

  Object(lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"])(data, function (value, key) {
    _this[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(value);
  });
};



/***/ }),

/***/ "./resources/assets/js/utils/classes/Room.js":
/*!***************************************************!*\
  !*** ./resources/assets/js/utils/classes/Room.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Room; });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model */ "./resources/assets/js/utils/classes/Model.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Room =
/*#__PURE__*/
function (_Model) {
  _inherits(Room, _Model);

  function Room() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Room);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Room)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.isCreated = function () {
      return _this.created && _this.createError == null;
    }, _this.isJoined = function () {
      return _this.joined && _this.joinError == null;
    }, _this.isReady = function () {
      return _this.isCreated() || _this.isJoined();
    }, _this.isPlayerAdmin = function (player) {
      return _this.administered_by == player.id;
    }, _this.getPlayer = function (id) {
      return _this.players.find(function (p) {
        return p.id == id;
      });
    }, _this.isPlayerActive = function (id) {
      var player = _this.getPlayer(id);

      return player && Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(player, 'active', true);
    }, _this.getActivePlayers = function () {
      return _this.players.filter(function (p) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["get"])(p, 'active', true);
      });
    }, _temp));
  }

  return Room;
}(_Model__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./resources/assets/js/utils/index.js":
/*!********************************************!*\
  !*** ./resources/assets/js/utils/index.js ***!
  \********************************************/
/*! exports provided: checkValidity, validate, generateFormFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./resources/assets/js/utils/validator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkValidity", function() { return _validator__WEBPACK_IMPORTED_MODULE_0__["checkValidity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validator__WEBPACK_IMPORTED_MODULE_0__["validate"]; });

/* harmony import */ var _classes_FormFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormFields */ "./resources/assets/js/utils/classes/FormFields.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateFormFields", function() { return _classes_FormFields__WEBPACK_IMPORTED_MODULE_1__["generateFormFields"]; });




/***/ }),

/***/ "./resources/assets/js/utils/validator.js":
/*!************************************************!*\
  !*** ./resources/assets/js/utils/validator.js ***!
  \************************************************/
/*! exports provided: checkValidity, validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkValidity", function() { return checkValidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var checkValidity = function checkValidity(value, rules) {
  var isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    switch (_typeof(value)) {
      case 'string':
        {
          isValid = value.trim() !== '' && isValid;
          break;
        }

      case 'boolean':
        {
          isValid = value && isValid;
          break;
        }

      case 'object':
        {
          isValid = value && isValid;
          break;
        }
    }
  }

  if (rules.requiredSelect) {
    isValid = value.trim() !== '' && value.trim() !== '0' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  return isValid;
};
var validate = function validate(formFields) {
  return function (values, props) {
    var errors = {};
    var formFieldsMap = new Map(Object.entries(formFields));
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = formFieldsMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2),
            name = _step$value[0],
            _step$value$ = _step$value[1],
            validation = _step$value$.validation,
            errMessage = _step$value$.errMessage;

        if (!checkValidity(_.get(values, name, ''), validation)) errors[name] = errMessage;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return errors;
  };
};

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./resources/assets/sass/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************!*\
  !*** multi ./resources/assets/js/client.js ./resources/assets/sass/app.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Desktop-D\ZAVRSNI_RAD\drawThing\resources\assets\js\client.js */"./resources/assets/js/client.js");
module.exports = __webpack_require__(/*! D:\Desktop-D\ZAVRSNI_RAD\drawThing\resources\assets\sass\app.scss */"./resources/assets/sass/app.scss");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=client.js.map