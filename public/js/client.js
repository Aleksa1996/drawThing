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

/***/ "./resources/assets/js/actions/todoActions.js":
/*!****************************************************!*\
  !*** ./resources/assets/js/actions/todoActions.js ***!
  \****************************************************/
/*! exports provided: fetchTodos, fetchTodosSuccess, fetchTodosFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodos", function() { return fetchTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodosSuccess", function() { return fetchTodosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTodosFailure", function() { return fetchTodosFailure; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/assets/js/actions/types.js");

var fetchTodos = function fetchTodos() {
  return function (dispatch, getState, api) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCHING_TODOS"]
    });
    return api.todo.get().then(function (response) {
      dispatch(fetchTodosSuccess(response.data));
    }).catch(function (error) {
      dispatch(fetchTodosFailure(error));
    });
  };
};
var fetchTodosSuccess = function fetchTodosSuccess(todos) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_TODOS_SUCCESS"],
    payload: todos
  };
};
var fetchTodosFailure = function fetchTodosFailure(error) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_TODOS_FAILURE"],
    payload: error
  };
};

/***/ }),

/***/ "./resources/assets/js/actions/types.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/actions/types.js ***!
  \**********************************************/
/*! exports provided: FETCHING_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHING_TODOS", function() { return FETCHING_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TODOS_SUCCESS", function() { return FETCH_TODOS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TODOS_FAILURE", function() { return FETCH_TODOS_FAILURE; });
var FETCHING_TODOS = 'FETCHING_TODOS';
var FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
var FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

/***/ }),

/***/ "./resources/assets/js/api/index.js":
/*!******************************************!*\
  !*** ./resources/assets/js/api/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./resources/assets/js/api/todo.js");

var api = {
  todo: _todo__WEBPACK_IMPORTED_MODULE_0__
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/assets/js/api/todo.js":
/*!*****************************************!*\
  !*** ./resources/assets/js/api/todo.js ***!
  \*****************************************/
/*! exports provided: get, find */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import fetch from 'isomorphic-fetch';

var self = 'http://drawthing.com'; // export const get = () => axios.get(`${self}/api/blog`);
// export const get = () => fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => res.json());

var get = function get() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
};
var find = function find() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://jsonplaceholder.typicode.com/albums/1/photos");
};

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
      classNameMenu = _ref.classNameMenu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown"
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
        className: "container-fluid main-footer footer py-4"
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
          description: "Efficcient and fast in-memory key-value database with optional durability. Used to cache data for better application performances.",
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
/* harmony import */ var _actions_todoActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/todoActions */ "./resources/assets/js/actions/todoActions.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Page */ "./resources/assets/js/components/Pages/Page.jsx");
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactForm */ "./resources/assets/js/components/Pages/Contact/ContactForm.jsx");
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleSubmitContactForm: this.handleSubmitContactForm
      }))))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // Contact.serverFetch = fetchTodos;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    todos: state.todoReducer.todos
  };
}, {
  fetchTodos: _actions_todoActions__WEBPACK_IMPORTED_MODULE_2__["fetchTodos"]
})(Contact));

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
/* harmony import */ var _GameToolBar_GameToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameToolBar/GameToolBar */ "./resources/assets/js/components/Pages/Game/GameToolBar/GameToolBar.jsx");
/* harmony import */ var _GameLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameLayout */ "./resources/assets/js/components/Pages/Game/GameLayout.jsx");
/* harmony import */ var _GameScore_GameScore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameScore/GameScore */ "./resources/assets/js/components/Pages/Game/GameScore/GameScore.jsx");
/* harmony import */ var _GameCanvas_GameCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameCanvas/GameCanvas */ "./resources/assets/js/components/Pages/Game/GameCanvas/GameCanvas.jsx");
/* harmony import */ var _GameChat_GameChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameChat/GameChat */ "./resources/assets/js/components/Pages/Game/GameChat/GameChat.jsx");
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameToolBar_GameToolBar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameScore_GameScore__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_GameCanvas__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameChat_GameChat__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameCanvas)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(GameCanvas, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-container-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-sketchpad"
      }, "Canvas")));
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
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/dist/react-draggable.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
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

  function GameTools() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, GameTools);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameTools)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      show: false
    }, _this.handleShow = function (e) {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    }, _temp));
  }

  _createClass(GameTools, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
        axis: "both",
        handle: ".game-tools-handle",
        defaultPosition: {
          x: -1,
          y: -9
        },
        position: null,
        scale: 1 // onStart={this.handleStart}
        // onDrag={this.handleDrag}
        // onStop={this.handleStop}

      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-container shadow rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-handle d-flex justify-content-between align-items-baseline rounded"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Available tools"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-tools-header-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-arrows",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        onClick: this.handleShow,
        className: "fa ".concat(this.state.show ? 'fa-eye-slash' : 'fa-eye', " "),
        "aria-hidden": "true",
        style: {
          cursor: 'pointer'
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        style: {
          display: this.state.show ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool_pencil"
      }, "Drawing tool"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "custom-select",
        id: "tool_pencil"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Pencil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Rectangle"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Circle"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool_weight"
      }, "Weight"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "range",
        className: "custom-range",
        id: "tool_weight"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool_color"
      }, "Color"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "color",
        className: "form-control",
        id: "tool_color"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "tool_background"
      }, "Background"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "color",
        className: "form-control",
        id: "tool_background"
      })))));
    }
  }]);

  return GameTools;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameTools);

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

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameChat)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {}, _temp));
  }

  _createClass(GameChat, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-container-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-chat"
      }, "Chat")));
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
/* harmony import */ var _GameCanvas_GameTools_GameTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameCanvas/GameTools/GameTools */ "./resources/assets/js/components/Pages/Game/GameCanvas/GameTools/GameTools.jsx");



var GameLayout = function GameLayout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "game-board-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GameCanvas_GameTools_GameTools__WEBPACK_IMPORTED_MODULE_1__["default"], null));
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
      users: [1, 2, 3, 4, 5, 6]
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
        }, "Username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "game-board-score-points"
        }, "Points"));
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
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "game-board-toolbar-container"
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
      }, "Menu")))));
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

/***/ "./resources/assets/js/store/reducers/todoReducer.js":
/*!***********************************************************!*\
  !*** ./resources/assets/js/store/reducers/todoReducer.js ***!
  \***********************************************************/
/*! exports provided: default, selector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/types */ "./resources/assets/js/actions/types.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  todos: [],
  fetched: 0
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FETCHING_TODOS"]:
      {
        return _objectSpread({}, state, {
          fetched: state.fetched + 1
        });
      }

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_TODOS_SUCCESS"]:
      {
        return _objectSpread({}, state, {
          todos: action.payload
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
/* harmony import */ var _reducers_todoReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/todoReducer */ "./resources/assets/js/store/reducers/todoReducer.js");






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
  todoReducer: _reducers_todoReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
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


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=client.js.map