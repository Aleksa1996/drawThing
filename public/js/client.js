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

/***/ "./resources/assets/js/actions/gameStartActions.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/actions/gameStartActions.js ***!
  \*********************************************************/
/*! exports provided: createRoom, createRoomSuccess, createRoomFailure, randomRoomSuccess, randomRoomFailure, resetGameStartFormErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoomSuccess", function() { return createRoomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoomFailure", function() { return createRoomFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRoomSuccess", function() { return randomRoomSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomRoomFailure", function() { return randomRoomFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGameStartFormErrors", function() { return resetGameStartFormErrors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");

var createRoom = function createRoom(data) {
  return function (dispatch, getState, api) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATING_ROOM"]
    });
    var fData = new FormData();
    fData.append('username', data.username);
    fData.append('avatar', data.avatar);
    return api.game.createRoom(fData).then(function (response) {
      console.log(response);
      dispatch(createRoomSuccess(response.data));
    }).catch(function (error) {
      console.log(error.response);
      dispatch(createRoomFailure(error.response.data.error));
    });
  };
}; // export const randomRoom = () => (dispatch, getState, api) => {
//     RANDOMING_ROOM
// };

var createRoomSuccess = function createRoomSuccess(userData) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_SUCCESS"],
    payload: userData
  };
};
var createRoomFailure = function createRoomFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_FAILURE"],
    payload: error
  };
};
var randomRoomSuccess = function randomRoomSuccess(userData) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RANDOM_ROOM_SUCCESS"],
    payload: userData
  };
};
var randomRoomFailure = function randomRoomFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["RANDOM_ROOM_FAILURE"],
    payload: error
  };
};
var resetGameStartFormErrors = function resetGameStartFormErrors() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GAME_START_FORM_ERROR_RESET"]
  };
};

/***/ }),

/***/ "./resources/assets/js/actions/index.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/actions/index.js ***!
  \**********************************************/
/*! exports provided: commonAction, commonThunkAction, createRoom, createRoomSuccess, createRoomFailure, randomRoomSuccess, randomRoomFailure, resetGameStartFormErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commonActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commonActions */ "./resources/assets/js/actions/commonActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonAction", function() { return _commonActions__WEBPACK_IMPORTED_MODULE_0__["commonAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonThunkAction", function() { return _commonActions__WEBPACK_IMPORTED_MODULE_0__["commonThunkAction"]; });

/* harmony import */ var _gameStartActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameStartActions */ "./resources/assets/js/actions/gameStartActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["createRoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoomSuccess", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["createRoomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRoomFailure", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["createRoomFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomRoomSuccess", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["randomRoomSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomRoomFailure", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["randomRoomFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetGameStartFormErrors", function() { return _gameStartActions__WEBPACK_IMPORTED_MODULE_1__["resetGameStartFormErrors"]; });




/***/ }),

/***/ "./resources/assets/js/actions/types.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/actions/types.js ***!
  \**********************************************/
/*! exports provided: CREATING_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE, RANDOMING_ROOM, RANDOM_ROOM_SUCCESS, RANDOM_ROOM_FAILURE, GAME_START_FORM_ERROR_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATING_ROOM", function() { return CREATING_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ROOM_SUCCESS", function() { return CREATE_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ROOM_FAILURE", function() { return CREATE_ROOM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOMING_ROOM", function() { return RANDOMING_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM_ROOM_SUCCESS", function() { return RANDOM_ROOM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM_ROOM_FAILURE", function() { return RANDOM_ROOM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_START_FORM_ERROR_RESET", function() { return GAME_START_FORM_ERROR_RESET; });
var CREATING_ROOM = 'CREATING_ROOM';
var CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS';
var CREATE_ROOM_FAILURE = 'CREATE_ROOM_FAILURE';
var RANDOMING_ROOM = 'RANDOMING_ROOM';
var RANDOM_ROOM_SUCCESS = 'RANDOM_ROOM_SUCCESS';
var RANDOM_ROOM_FAILURE = 'RANDOM_ROOM_FAILURE';
var GAME_START_FORM_ERROR_RESET = 'GAME_START_FORM_ERROR_RESET';

/***/ }),

/***/ "./resources/assets/js/api/game.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/api/game.js ***!
  \*****************************************/
/*! exports provided: createRoom, find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoom", function() { return createRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./resources/assets/js/globals.js");


var createRoom = function createRoom(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["default"].url.host, "/api/game/createRoom"), data);
};
var find = function find() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://jsonplaceholder.typicode.com/albums/1/photos");
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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./resources/assets/js/api/game.js");

var api = {
  game: _game__WEBPACK_IMPORTED_MODULE_0__
};
/* harmony default export */ __webpack_exports__["default"] = (api);

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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Button = function Button(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "icon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", props, icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa ".concat(icon, " mr-2"),
    "aria-hidden": "true"
  }), children);
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        scrollTop: this.state.scrollTop
      }, this.props)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "main-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["TransitionGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["CSSTransition"], {
        key: currentKey,
        classNames: "fade",
        timeout: timeout,
        appear: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_3__["default"], this.props)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
      var isScrolled = this.state.scrollTop >= 20;
      if (isGamePage) return null;
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
        to: "/game",
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
/* harmony import */ var _GameStart_GameStart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GameStart/GameStart */ "./resources/assets/js/components/Pages/Game/GameStart/GameStart.jsx");
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
      var isLogged = false;

      if (!isLogged) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
          title: "Play game - Drawthing",
          className: "container-fluid page-start-game"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameStart_GameStart__WEBPACK_IMPORTED_MODULE_8__["default"], null));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: "Play game - Drawthing",
        className: "container-fluid page-game"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameToolBar_GameToolBar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameScore_GameScore__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_GameCanvas__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameChat_GameChat__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_GameTools_GameTools__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
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

/***/ "./resources/assets/js/components/Pages/Game/GameStart/GameStart.jsx":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameStart/GameStart.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../actions */ "./resources/assets/js/actions/index.js");
/* harmony import */ var _GameStartUsername__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameStartUsername */ "./resources/assets/js/components/Pages/Game/GameStart/GameStartUsername.jsx");
/* harmony import */ var _GameStartAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameStartAvatar */ "./resources/assets/js/components/Pages/Game/GameStart/GameStartAvatar.jsx");
/* harmony import */ var _GameStartRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameStartRules */ "./resources/assets/js/components/Pages/Game/GameStart/GameStartRules.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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









var GameStart =
/*#__PURE__*/
function (_Component) {
  _inherits(GameStart, _Component);

  function GameStart(props) {
    var _this;

    _classCallCheck(this, GameStart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameStart).call(this, props));

    _this.createAvatarImage = function () {
      return new Promise(function (resolve, reject) {
        _this.sketchpadRef.current.canvas.toBlob(function (blob) {
          resolve(blob);
        });
      });
    };

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
                e.preventDefault();
                _this$state$usernameF = _this.state.usernameForm, username = _this$state$usernameF.username, usernameFormValid = _this$state$usernameF.valid;
                avatarFormValid = _this.state.avatarForm.valid;
                startType = e.target.value;

                if (usernameFormValid) {
                  _context.next = 9;
                  break;
                }

                _this.setState(function (prevState) {
                  return {
                    usernameForm: _objectSpread({}, prevState.usernameForm, {
                      pristine: false
                    })
                  };
                });

                return _context.abrupt("return");

              case 9:
                if (avatarFormValid) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                _context.next = 13;
                return _this.createAvatarImage();

              case 13:
                avatar = _context.sent;
                data = {
                  username: username,
                  avatar: avatar,
                  startType: startType
                };

                _this.props.createRoom(data);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onCompleteDrawing = function (item) {
      _this.setState(function (prevState) {
        return {
          avatarForm: _objectSpread({}, prevState.avatarForm, {
            items: prevState.avatarForm.items.concat([item]),
            valid: true
          })
        };
      }, _this.props.resetGameStartFormErrors);
    };

    _this.handleChangeUsername = function (e) {
      var username = e.target.value;

      _this.setState(function (prevState) {
        return {
          usernameForm: _objectSpread({}, prevState.usernameForm, {
            username: username,
            valid: username.length > 3
          })
        };
      }, _this.props.resetGameStartFormErrors);
    };

    _this.handleFocusUsername = function (e) {
      var type = e.type;

      _this.setState(function (prevState) {
        return {
          usernameForm: _objectSpread({}, prevState.usernameForm, {
            focused: type === 'focus',
            pristine: type === 'blur' ? false : prevState.usernameForm.pristine
          })
        };
      });
    };

    _this.sketchpadRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
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
      }
    };
    return _this;
  }

  _createClass(GameStart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // const socket = io('http://drawthing.com/', { transports: ['websocket'] });
      // socket.on('error', error => {
      // 	console.log(error);
      // });
      // socket.on('hello', data => {
      // 	console.log(data);
      // });
      // socket.emit('hello', 'world');
      // console.log(this.sketchpadRef.current.canvas);
      console.log(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          avatarForm = _this$state.avatarForm,
          usernameForm = _this$state.usernameForm;
      var formErrors = this.props.gameStart.formErrors;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "game-start-container container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "game-start-card rounded shadow"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "game-start-heading"
      }, "Start new game"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GameStartAvatar__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, avatarForm, {
        sketchpadRef: this.sketchpadRef,
        onCompleteDrawing: this.onCompleteDrawing,
        formErrors: formErrors
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GameStartUsername__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, usernameForm, {
        handleSubmit: this.handleSubmit,
        handleChangeUsername: this.handleChangeUsername,
        handleFocusUsername: this.handleFocusUsername,
        formErrors: formErrors
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GameStartRules__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return GameStart;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return {
    gameStart: state.gameStartReducer
  };
}, {
  createRoom: _actions__WEBPACK_IMPORTED_MODULE_3__["createRoom"],
  resetGameStartFormErrors: _actions__WEBPACK_IMPORTED_MODULE_3__["resetGameStartFormErrors"]
})(GameStart));

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameStart/GameStartAvatar.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameStart/GameStartAvatar.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameCanvas_SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameCanvas/SketchPad/SketchPad */ "./resources/assets/js/components/Pages/Game/GameCanvas/SketchPad/SketchPad.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var GameStartAvatar = function GameStartAvatar(_ref) {
  var onCompleteDrawing = _ref.onCompleteDrawing,
      sketchpadRef = _ref.sketchpadRef,
      valid = _ref.valid,
      formErrors = _ref.formErrors,
      avatarForm = _objectWithoutProperties(_ref, ["onCompleteDrawing", "sketchpadRef", "valid", "formErrors"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-canvas-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_SketchPad_SketchPad__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, avatarForm, {
    onCompleteItem: onCompleteDrawing,
    canvasClassName: "game-start-canvas rounded",
    ref: sketchpadRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "help-text d-block text-center ".concat(!formErrors.avatar && valid ? '' : 'text-danger')
  }, !formErrors.avatar && valid ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle mr-2",
    "aria-hidden": "true"
  }), formErrors.avatar && valid ? formErrors.avatar : 'Draw your avatar')));
};

/* harmony default export */ __webpack_exports__["default"] = (GameStartAvatar);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameStart/GameStartRules.jsx":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameStart/GameStartRules.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var GameStartRules = function GameStartRules(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-rules-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "game-start-rules-heading"
  }, "Game Rules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "game-start-rules-text"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 4"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Rule 5")));
};

/* harmony default export */ __webpack_exports__["default"] = (GameStartRules);

/***/ }),

/***/ "./resources/assets/js/components/Pages/Game/GameStart/GameStartUsername.jsx":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/Pages/Game/GameStart/GameStartUsername.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");



var GameStartUsername = function GameStartUsername(_ref) {
  var username = _ref.username,
      focused = _ref.focused,
      valid = _ref.valid,
      pristine = _ref.pristine,
      handleChangeUsername = _ref.handleChangeUsername,
      handleSubmit = _ref.handleSubmit,
      handleFocusUsername = _ref.handleFocusUsername,
      formErrors = _ref.formErrors;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-username-form-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
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
    className: "invalid-feedback text-left ".concat(formErrors.username && valid ? 'd-block' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-exclamation-circle",
    "aria-hidden": "true"
  }), " \xA0", formErrors.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-start-buttons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: "mybtn2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-arrow-left mr-2",
    "aria-hidden": "true"
  }), "Go back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleSubmit,
    type: "button",
    className: "mybtn2",
    name: "create_room",
    value: "create_room"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-users mr-2",
    "aria-hidden": "true"
  }), "Create room"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handleSubmit,
    type: "button",
    className: "mybtn2",
    name: "random_room",
    value: "random_room"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-random mr-2",
    "aria-hidden": "true"
  }), "Random room"))));
};

/* harmony default export */ __webpack_exports__["default"] = (GameStartUsername);

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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

var global = _objectSpread({}, context.__global__);

if (typeof window !== 'undefined') {
  delete window.context;
}

/* harmony default export */ __webpack_exports__["default"] = (global);

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

/***/ "./resources/assets/js/store/reducers/gameStartReducer.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/store/reducers/gameStartReducer.js ***!
  \****************************************************************/
/*! exports provided: default, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  formErrors: {
    avatar: null,
    username: null
  },
  valid: true,
  creatingRoom: false,
  userData: {
    username: '',
    avatar: ''
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATING_ROOM"]:
      {
        return _objectSpread({}, state, {
          creatingRoom: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_SUCCESS"]:
      {
        return _objectSpread({}, state, {
          userData: action.payload,
          valid: true
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CREATE_ROOM_FAILURE"]:
      {
        return _objectSpread({}, state, {
          formErrors: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["mapValues"])(action.payload, function (v) {
            return v[0] || null;
          }),
          valid: false
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["GAME_START_FORM_ERROR_RESET"]:
      {
        return _objectSpread({}, state, {
          formErrors: {
            avatar: null,
            username: null
          },
          valid: true
        });
      }

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);
var selector = function selector(state) {};

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
/* harmony import */ var _reducers_commonReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/commonReducer */ "./resources/assets/js/store/reducers/commonReducer.js");
/* harmony import */ var _reducers_gameStartReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/gameStartReducer */ "./resources/assets/js/store/reducers/gameStartReducer.js");






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
  commonReducer: _reducers_commonReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  gameStartReducer: _reducers_gameStartReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
var serverState = {};

if (!isServer) {
  // Grab the state from a global variable injected into the server-generated HTML
  serverState = window.__PRELOADED_STATE__; // Allow the passed state to be garbage-collected

  delete window.__PRELOADED_STATE__;
}

var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(_api__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, serverState, composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)));


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