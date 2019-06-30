(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/react-sticky-notes/navbar-item-add.js":
/*!**************************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar-item-add.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");


function NavBarItemAdd(_ref) {
  var prefix = _ref.prefix,
      icons = _ref.icons,
      addItem = _ref.addItem;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--navbar__item--add"),
    type: 'button',
    className: "".concat(prefix, "--navbar__item--add"),
    onClick: function onClick() {
      return addItem();
    }
  }, icons.add);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBarItemAdd);

/***/ }),

/***/ "./src/components/react-sticky-notes/navbar-item.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar-item.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");


function NavBarItem(_ref) {
  var prefix = _ref.prefix,
      icons = _ref.icons,
      index = _ref.index,
      color = _ref.color,
      text = _ref.text,
      selectItem = _ref.selectItem,
      deleteItem = _ref.deleteItem;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('span', {
    className: "".concat(prefix, "--navbar__item"),
    style: {
      backgroundColor: color
    }
  }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "navbar-item__".concat(index, "--select"),
    className: "".concat(prefix, "--navbar__item--select"),
    type: 'button',
    onClick: function onClick() {
      return selectItem(index, {
        selected: true
      });
    }
  }, text ? text : '...'), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "navbar-item__".concat(index, "--delete"),
    type: 'button',
    className: "".concat(prefix, "--navbar__item--delete"),
    onClick: function onClick() {
      return deleteItem(index, {
        selected: true
      });
    }
  }, 'x')]);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBarItem);

/***/ }),

/***/ "./src/components/react-sticky-notes/navbar.js":
/*!*****************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-item */ "./src/components/react-sticky-notes/navbar-item.js");
/* harmony import */ var _navbar_item_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-item-add */ "./src/components/react-sticky-notes/navbar-item-add.js");




function NavBar(_ref) {
  var prefix = _ref.prefix,
      items = _ref.items,
      addItem = _ref.addItem,
      selectItem = _ref.selectItem,
      deleteItem = _ref.deleteItem,
      icons = _ref.icons,
      displayFooter = _ref.displayFooter;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--navbar")
  }, [displayFooter && items ? items.map(function (item, index) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "navbar-item__".concat(index),
      index: index,
      prefix: prefix,
      icons: icons,
      text: item.text,
      color: item.color,
      selectItem: selectItem,
      deleteItem: deleteItem
    }, item.text);
  }) : null, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar_item_add__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: "navbar-item__add",
    prefix: prefix,
    icons: icons,
    addItem: addItem
  })]);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/react-sticky-notes/note-draggable.js":
/*!*************************************************************!*\
  !*** ./src/components/react-sticky-notes/note-draggable.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/draggable */ "./src/components/react-sticky-notes/utils/draggable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var NoteDraggable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoteDraggable, _React$Component);

  function NoteDraggable(props) {
    var _this;

    _classCallCheck(this, NoteDraggable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteDraggable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "draggable", null);

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      if (_this.state.active && e.target === _this.props.target.current) {
        _this.draggable.onMouseDown(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      _this.setState({
        active: true
      }, function () {
        _this.props.onSelect(_this.state.active);
      });
    });

    _this.state = {
      active: props.selected,
      options: {}
    };
    _this.element = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.draggable = new _utils_draggable__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(NoteDraggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var el = this.element ? this.element.current : null;
      var options = {
        element: el,
        position: this.props.position,
        onDragComplete: this.props.onDragComplete,
        onInit: this.props.onInit
      };
      this.setState({
        options: options
      }, function () {
        _this2.draggable.init(options);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["h"])('div', {
        className: this.props.className,
        style: this.props.style,
        ref: this.element,
        onClick: this.onClick,
        onMouseDown: this.onMouseDown
      }, this.props.children);
    }
  }]);

  return NoteDraggable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NoteDraggable);

/***/ }),

/***/ "./src/components/react-sticky-notes/note-header.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/note-header.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");


function NoteHeader(_ref) {
  var index = _ref.index,
      prefix = _ref.prefix,
      selected = _ref.selected,
      addItem = _ref.addItem,
      deleteItem = _ref.deleteItem,
      setToggle = _ref.setToggle,
      position = _ref.position,
      title = _ref.title,
      targetRef = _ref.targetRef,
      icons = _ref.icons;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--header ").concat(selected ? prefix + '--header__selected' : ''),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-header', {
      selected: selected
    })
  }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: 'note-header-button-1',
    className: "".concat(prefix, "--header__button--add"),
    onClick: function onClick() {
      return addItem({
        index: index,
        position: position,
        selected: true
      });
    }
  }, icons.add), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: 'note-header-button-2',
    className: "".concat(prefix, "--header__button--title"),
    ref: targetRef
  }, title ? title : "..."), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: 'note-header-button-3',
    className: "".concat(prefix, "--header__button--menu"),
    onClick: function onClick() {
      return setToggle(index + 1);
    }
  }, icons.menu), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: 'note-header-button-4',
    className: "".concat(prefix, "--header__button--trash"),
    onClick: function onClick() {
      return deleteItem(index);
    }
  }, icons.trash)]);
}

/* harmony default export */ __webpack_exports__["default"] = (NoteHeader);

/***/ }),

/***/ "./src/components/react-sticky-notes/note-menu.js":
/*!********************************************************!*\
  !*** ./src/components/react-sticky-notes/note-menu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");


function NoteMenu(_ref) {
  var index = _ref.index,
      prefix = _ref.prefix,
      color = _ref.color,
      colorCodes = _ref.colorCodes,
      setColor = _ref.setColor;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--colors"),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-menu')
  }, colorCodes.map(function (colorCode) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
      key: colorCode,
      onClick: function onClick() {
        return setColor(index, colorCode);
      },
      className: "".concat(prefix, "--colors__color ").concat(color === colorCode ? prefix + '--colors__color--selected' : ''),
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-color-selector', {
        colorCode: colorCode
      })
    }, colorCode);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NoteMenu);

/***/ }),

/***/ "./src/components/react-sticky-notes/note-text.js":
/*!********************************************************!*\
  !*** ./src/components/react-sticky-notes/note-text.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");


function NoteText(_ref) {
  var index = _ref.index,
      prefix = _ref.prefix,
      text = _ref.text,
      updateItem = _ref.updateItem;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--text"),
    placeholder: "react-hooks",
    contentEditable: "true",
    onBlur: function onBlur(e) {
      return updateItem(index, {
        title: String(e.target.innerText).substr(0, 10),
        text: e.target.innerText
      });
    },
    dangerouslySetInnerHTML: {
      __html: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nlToBr"])(text)
    },
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-input')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (NoteText);

/***/ }),

/***/ "./src/components/react-sticky-notes/note.js":
/*!***************************************************!*\
  !*** ./src/components/react-sticky-notes/note.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-header */ "./src/components/react-sticky-notes/note-header.js");
/* harmony import */ var _note_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-text */ "./src/components/react-sticky-notes/note-text.js");
/* harmony import */ var _note_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-menu */ "./src/components/react-sticky-notes/note-menu.js");
/* harmony import */ var _note_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-draggable */ "./src/components/react-sticky-notes/note-draggable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Note =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    var _this;

    _classCallCheck(this, Note);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Note).call(this, props));
    _this.targetRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Note, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          selected = _this$props.selected,
          width = _this$props.width,
          height = _this$props.height,
          containerHeight = _this$props.containerHeight,
          toggle = _this$props.toggle,
          setToggle = _this$props.setToggle,
          prefix = _this$props.prefix,
          title = _this$props.title,
          text = _this$props.text,
          color = _this$props.color,
          setColor = _this$props.setColor,
          addItem = _this$props.addItem,
          updateItem = _this$props.updateItem,
          selectItem = _this$props.selectItem,
          deleteItem = _this$props.deleteItem,
          colorCodes = _this$props.colorCodes,
          position = _this$props.position,
          icons = _this$props.icons;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["h"])(_note_draggable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "".concat(prefix, "--note ").concat(selected ? prefix + '--note__selected' : ''),
        position: position,
        selected: selected,
        target: this.targetRef,
        onDragComplete: function onDragComplete(position) {
          return updateItem(index, {
            position: position
          });
        },
        onInit: function onInit(options) {
          return updateItem(index, options);
        },
        onSelect: function onSelect(active) {
          return selectItem(index, {
            selected: active
          });
        },
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getElementStyle"])('note', this.props)
      }, [Object(_utils__WEBPACK_IMPORTED_MODULE_5__["h"])(_note_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: 'note-header',
        targetRef: this.targetRef,
        index: index,
        prefix: prefix,
        selected: selected,
        icons: icons,
        addItem: addItem,
        deleteItem: deleteItem,
        setToggle: setToggle,
        position: position,
        title: title
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["h"])('div', {
        key: 'note-body',
        className: "".concat(prefix, "--note__body"),
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getElementStyle"])('note-body', this.props)
      }, toggle === index + 1 && selected && colorCodes ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["h"])(_note_menu__WEBPACK_IMPORTED_MODULE_3__["default"], _defineProperty({
        key: 'note-menu',
        colorCodes: colorCodes,
        updateItem: updateItem,
        index: index,
        prefix: prefix,
        color: color,
        setColor: setColor
      }, "colorCodes", colorCodes)) : Object(_utils__WEBPACK_IMPORTED_MODULE_5__["h"])(_note_text__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: 'note-text',
        index: index,
        prefix: prefix,
        text: text,
        updateItem: updateItem
      }))]);
    }
  }]);

  return Note;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),

/***/ "./src/components/react-sticky-notes/notes-with-style.js":
/*!***************************************************************!*\
  !*** ./src/components/react-sticky-notes/notes-with-style.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes */ "./src/components/react-sticky-notes/notes.js");
 //import './index.scss';

/* harmony default export */ __webpack_exports__["default"] = (_notes__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/react-sticky-notes/notes.js":
/*!****************************************************!*\
  !*** ./src/components/react-sticky-notes/notes.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/components/react-sticky-notes/note.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/components/react-sticky-notes/navbar.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Notes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notes, _React$Component);

  function Notes(props) {
    var _this;

    _classCallCheck(this, Notes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Notes).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setToggle", function (toggle) {
      _this.setState({
        toggle: _this.state.toggle === toggle ? false : toggle
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setColor", function (index, color) {
      _this.setToggle(false);

      _this.props.updateItem(index, {
        color: color
      });
    });

    _this.state = {
      toggle: false,
      containerWidth: 0,
      containerHeight: 0
    };
    _this.notesContainer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Notes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.notesContainer && this.notesContainer.current) {
        this.setState({
          containerWidth: this.notesContainer.current.offsetWidth,
          containerHeight: this.notesContainer.current.offsetHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefix = _this$props.prefix,
          addItem = _this$props.addItem,
          updateItem = _this$props.updateItem,
          selectItem = _this$props.selectItem,
          deleteItem = _this$props.deleteItem,
          colorCodes = _this$props.colorCodes,
          containerWidth = _this$props.containerWidth,
          containerHeight = _this$props.containerHeight,
          width = _this$props.width,
          height = _this$props.height,
          backgroundColor = _this$props.backgroundColor,
          icons = _this$props.icons,
          items = _this$props.items,
          displayFooter = _this$props.displayFooter;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["h"])('div', {
        key: prefix,
        className: prefix,
        ref: this.notesContainer,
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getElementStyle"])('container', this.props)
      }, [items ? items.map(function (item, index) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["h"])(_note__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, item, _this2.state, {
          count: items.length,
          key: index,
          prefix: prefix,
          index: index,
          icons: icons,
          width: width,
          height: height,
          addItem: addItem,
          updateItem: updateItem,
          selectItem: selectItem,
          deleteItem: deleteItem,
          colorCodes: colorCodes,
          toggle: _this2.state.toggle,
          setToggle: _this2.setToggle,
          setColor: _this2.setColor
        }), null);
      }) : null, Object(_utils__WEBPACK_IMPORTED_MODULE_3__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "".concat(prefix, "--navbar"),
        displayFooter: displayFooter,
        prefix: prefix,
        icons: icons,
        items: items,
        addItem: addItem,
        selectItem: selectItem,
        deleteItem: deleteItem
      })]);
    }
  }]);

  return Notes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Notes);

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/draggable.js":
/*!**************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/draggable.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draggable; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Draggable =
/*#__PURE__*/
function () {
  function Draggable() {
    var _this = this;

    _classCallCheck(this, Draggable);

    _defineProperty(this, "initialX", 0);

    _defineProperty(this, "initialY", 0);

    _defineProperty(this, "currentX", 0);

    _defineProperty(this, "currentY", 0);

    _defineProperty(this, "onMouseMove", function (e) {
      e.preventDefault();
      var el = _this.options.element;

      var position = _this.getPosition(e, _this.initialX, _this.initialY);

      _this.currentX = position.x;
      _this.currentY = position.y;
      var x1 = _this.options.element.parentElement.offsetWidth - _this.options.element.offsetWidth;
      var y1 = _this.options.element.parentElement.offsetHeight - _this.options.element.offsetHeight;

      if (_this.currentX < 0) {
        _this.currentX = 0;
      }

      if (_this.currentY < 0) {
        _this.currentY = 0;
      }

      if (_this.currentX > x1) {
        _this.currentX = x1;
      }

      if (_this.currentY > y1) {
        _this.currentY = y1;

        if (el.parentElement.offsetHeight < el.offsetHeight) {
          _this.currentY = 0;
        }
      }

      _this.setTranslate(_this.currentX, _this.currentY);
    });

    _defineProperty(this, "onMouseDown", function (e) {
      var el = _this.options.element;
      var rect = el.getBoundingClientRect();

      var position = _this.getPosition(e, rect.x, rect.y);

      _this.initialX = position.x;
      _this.initialY = position.y;
      document.addEventListener('mousemove', _this.onMouseMove, null);
      document.addEventListener('mouseup', _this.onMouseUp, null);
    });

    _defineProperty(this, "onMouseUp", function (e) {
      if (_this.options.onDragComplete) {
        _this.options.onDragComplete.call(_this, {
          x: _this.currentX,
          y: _this.currentY
        });
      }

      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onMouseUp, null);
    });
  }

  _createClass(Draggable, [{
    key: "init",
    value: function init(options) {
      this.options = options;
      /*if(options.position){
          this.xOffset = options.position.x;
          this.yOffset = options.position.y;
          this.setTranslate(options.position.x,options.position.y);
      }*/
    }
  }, {
    key: "setTranslate",
    value: function setTranslate(x, y) {
      if (this.options.element) {
        this.options.element.style.transform = "translate3d(".concat(x, "px,").concat(y, "px,0)");
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(e, dx, dy) {
      if (/touch/.test(e.type)) {
        return {
          x: e.touches[0].clientX - dx,
          y: e.touches[0].clientY - dy
        };
      } else {
        return {
          x: e.clientX - dx,
          y: e.clientY - dy
        };
      }
    }
  }]);

  return Draggable;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbmF2YmFyLWl0ZW0tYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9uYXZiYXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3RlLWRyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbm90ZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVhY3Qtc3RpY2t5LW5vdGVzL25vdGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbm90ZS10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3Rlcy13aXRoLXN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvdXRpbHMvZHJhZ2dhYmxlLmpzIl0sIm5hbWVzIjpbIk5hdkJhckl0ZW1BZGQiLCJwcmVmaXgiLCJpY29ucyIsImFkZEl0ZW0iLCJoIiwia2V5IiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhZGQiLCJOYXZCYXJJdGVtIiwiaW5kZXgiLCJjb2xvciIsInRleHQiLCJzZWxlY3RJdGVtIiwiZGVsZXRlSXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWQiLCJOYXZCYXIiLCJpdGVtcyIsImRpc3BsYXlGb290ZXIiLCJtYXAiLCJpdGVtIiwiTm90ZURyYWdnYWJsZSIsInByb3BzIiwiZSIsInN0YXRlIiwiYWN0aXZlIiwidGFyZ2V0IiwiY3VycmVudCIsImRyYWdnYWJsZSIsIm9uTW91c2VEb3duIiwic2V0U3RhdGUiLCJvblNlbGVjdCIsIm9wdGlvbnMiLCJlbGVtZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJEcmFnZ2FibGUiLCJlbCIsInBvc2l0aW9uIiwib25EcmFnQ29tcGxldGUiLCJvbkluaXQiLCJpbml0IiwicmVmIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJOb3RlSGVhZGVyIiwic2V0VG9nZ2xlIiwidGl0bGUiLCJ0YXJnZXRSZWYiLCJnZXRFbGVtZW50U3R5bGUiLCJtZW51IiwidHJhc2giLCJOb3RlTWVudSIsImNvbG9yQ29kZXMiLCJzZXRDb2xvciIsImNvbG9yQ29kZSIsIk5vdGVUZXh0IiwidXBkYXRlSXRlbSIsInBsYWNlaG9sZGVyIiwiY29udGVudEVkaXRhYmxlIiwib25CbHVyIiwiU3RyaW5nIiwiaW5uZXJUZXh0Iiwic3Vic3RyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJubFRvQnIiLCJOb3RlIiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJ0b2dnbGUiLCJOb3RlcyIsImNvbnRhaW5lcldpZHRoIiwibm90ZXNDb250YWluZXIiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImNvdW50IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJnZXRQb3NpdGlvbiIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJjdXJyZW50WCIsIngiLCJjdXJyZW50WSIsInkiLCJ4MSIsInBhcmVudEVsZW1lbnQiLCJ5MSIsInNldFRyYW5zbGF0ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImNhbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNmb3JtIiwiZHgiLCJkeSIsInRlc3QiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7O0FBQ0EsU0FBU0EsYUFBVCxPQUFnRDtBQUFBLE1BQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVEMsT0FBUyxRQUFUQSxPQUFTO0FBQzVDLFNBQU9DLGdEQUFDLENBQUMsUUFBRCxFQUFVO0FBQ2RDLE9BQUcsWUFBS0osTUFBTCx3QkFEVztBQUVkSyxRQUFJLEVBQUUsUUFGUTtBQUdkQyxhQUFTLFlBQUlOLE1BQUosd0JBSEs7QUFJZE8sV0FBTyxFQUFFO0FBQUEsYUFBSUwsT0FBTyxFQUFYO0FBQUE7QUFKSyxHQUFWLEVBS0xELEtBQUssQ0FBQ08sR0FMRCxDQUFSO0FBTUg7O0FBQ2NULDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTs7QUFDQSxTQUFTVSxVQUFULE9BQStFO0FBQUEsTUFBMURULE1BQTBELFFBQTFEQSxNQUEwRDtBQUFBLE1BQWxEQyxLQUFrRCxRQUFsREEsS0FBa0Q7QUFBQSxNQUE1Q1MsS0FBNEMsUUFBNUNBLEtBQTRDO0FBQUEsTUFBckNDLEtBQXFDLFFBQXJDQSxLQUFxQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsVUFBWSxRQUFaQSxVQUFZO0FBQzNFLFNBQU9YLGdEQUFDLENBQUMsTUFBRCxFQUFRO0FBQ1pHLGFBQVMsWUFBSU4sTUFBSixtQkFERztBQUVaZSxTQUFLLEVBQUM7QUFDRkMscUJBQWUsRUFBRUw7QUFEZjtBQUZNLEdBQVIsRUFLTixDQUNFUixnREFBQyxDQUFDLFFBQUQsRUFBVTtBQUNQQyxPQUFHLHlCQUFrQk0sS0FBbEIsYUFESTtBQUVQSixhQUFTLFlBQUlOLE1BQUosMkJBRkY7QUFHUEssUUFBSSxFQUFFLFFBSEM7QUFJUEUsV0FBTyxFQUFFO0FBQUEsYUFBSU0sVUFBVSxDQUFDSCxLQUFELEVBQVE7QUFBQ08sZ0JBQVEsRUFBQztBQUFWLE9BQVIsQ0FBZDtBQUFBO0FBSkYsR0FBVixFQUtFTCxJQUFJLEdBQUNBLElBQUQsR0FBTSxLQUxaLENBREgsRUFPRVQsZ0RBQUMsQ0FBQyxRQUFELEVBQVU7QUFDUEMsT0FBRyx5QkFBa0JNLEtBQWxCLGFBREk7QUFFUEwsUUFBSSxFQUFFLFFBRkM7QUFHUEMsYUFBUyxZQUFJTixNQUFKLDJCQUhGO0FBSVBPLFdBQU8sRUFBRTtBQUFBLGFBQUlPLFVBQVUsQ0FBQ0osS0FBRCxFQUFRO0FBQUNPLGdCQUFRLEVBQUM7QUFBVixPQUFSLENBQWQ7QUFBQTtBQUpGLEdBQVYsRUFLRSxHQUxGLENBUEgsQ0FMTSxDQUFSO0FBbUJIOztBQUNjUix5RUFBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU1MsTUFBVCxPQUF1RjtBQUFBLE1BQXRFbEIsTUFBc0UsUUFBdEVBLE1BQXNFO0FBQUEsTUFBOURtQixLQUE4RCxRQUE5REEsS0FBOEQ7QUFBQSxNQUF2RGpCLE9BQXVELFFBQXZEQSxPQUF1RDtBQUFBLE1BQTlDVyxVQUE4QyxRQUE5Q0EsVUFBOEM7QUFBQSxNQUFsQ0MsVUFBa0MsUUFBbENBLFVBQWtDO0FBQUEsTUFBdEJiLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZtQixhQUFlLFFBQWZBLGFBQWU7QUFDbkYsU0FBT2pCLGdEQUFDLENBQUMsS0FBRCxFQUFPO0FBQ1hHLGFBQVMsWUFBSU4sTUFBSjtBQURFLEdBQVAsRUFFTixDQUNFb0IsYUFBYSxJQUFFRCxLQUFmLEdBQXFCQSxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9aLEtBQVA7QUFBQSxXQUMzQlAsZ0RBQUMsQ0FBQ00sb0RBQUQsRUFBWTtBQUNUTCxTQUFHLHlCQUFrQk0sS0FBbEIsQ0FETTtBQUVUQSxXQUFLLEVBQUxBLEtBRlM7QUFHVFYsWUFBTSxFQUFOQSxNQUhTO0FBSVRDLFdBQUssRUFBTEEsS0FKUztBQUtUVyxVQUFJLEVBQUNVLElBQUksQ0FBQ1YsSUFMRDtBQU1URCxXQUFLLEVBQUNXLElBQUksQ0FBQ1gsS0FORjtBQU9URSxnQkFBVSxFQUFWQSxVQVBTO0FBUVRDLGdCQUFVLEVBQVZBO0FBUlMsS0FBWixFQVNDUSxJQUFJLENBQUNWLElBVE4sQ0FEMEI7QUFBQSxHQUFWLENBQXJCLEdBV0UsSUFaSixFQWFFVCxnREFBQyxDQUFDSix3REFBRCxFQUFlO0FBQ1pLLE9BQUcsb0JBRFM7QUFFWkosVUFBTSxFQUFOQSxNQUZZO0FBR1pDLFNBQUssRUFBTEEsS0FIWTtBQUlaQyxXQUFPLEVBQVBBO0FBSlksR0FBZixDQWJILENBRk0sQ0FBUjtBQXNCSDs7QUFDY2dCLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOztJQUNNSyxhOzs7OztBQUVMLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLHVGQUFNQSxLQUFOOztBQURrQixnRUFEUCxJQUNPOztBQUFBLGtFQXFCTCxVQUFDQyxDQUFELEVBQU87QUFDcEIsVUFBRyxNQUFLQyxLQUFMLENBQVdDLE1BQVgsSUFBbUJGLENBQUMsQ0FBQ0csTUFBRixLQUFXLE1BQUtKLEtBQUwsQ0FBV0ksTUFBWCxDQUFrQkMsT0FBbkQsRUFBMkQ7QUFDMUQsY0FBS0MsU0FBTCxDQUFlQyxXQUFmLENBQTJCTixDQUEzQjtBQUNBO0FBQ0QsS0F6QmtCOztBQUFBLDhEQTBCVCxVQUFDQSxDQUFELEVBQU87QUFDaEIsWUFBS08sUUFBTCxDQUFjO0FBQ2JMLGNBQU0sRUFBRTtBQURLLE9BQWQsRUFFRyxZQUFJO0FBQ04sY0FBS0gsS0FBTCxDQUFXUyxRQUFYLENBQW9CLE1BQUtQLEtBQUwsQ0FBV0MsTUFBL0I7QUFDQSxPQUpEO0FBS0EsS0FoQ2tCOztBQUVsQixVQUFLRCxLQUFMLEdBQVk7QUFDWEMsWUFBTSxFQUFFSCxLQUFLLENBQUNQLFFBREg7QUFFWGlCLGFBQU8sRUFBRTtBQUZFLEtBQVo7QUFJQSxVQUFLQyxPQUFMLEdBQWVDLDRDQUFLLENBQUNDLFNBQU4sRUFBZjtBQUNBLFVBQUtQLFNBQUwsR0FBaUIsSUFBSVEsd0RBQUosRUFBakI7QUFQa0I7QUFRbEI7Ozs7d0NBQ21CO0FBQUE7O0FBQ25CLFVBQU1DLEVBQUUsR0FBRyxLQUFLSixPQUFMLEdBQWEsS0FBS0EsT0FBTCxDQUFhTixPQUExQixHQUFrQyxJQUE3QztBQUNBLFVBQU1LLE9BQU8sR0FBRztBQUNmQyxlQUFPLEVBQUVJLEVBRE07QUFFZkMsZ0JBQVEsRUFBRSxLQUFLaEIsS0FBTCxDQUFXZ0IsUUFGTjtBQUdmQyxzQkFBYyxFQUFDLEtBQUtqQixLQUFMLENBQVdpQixjQUhYO0FBSWZDLGNBQU0sRUFBQyxLQUFLbEIsS0FBTCxDQUFXa0I7QUFKSCxPQUFoQjtBQU1BLFdBQUtWLFFBQUwsQ0FBYztBQUFDRSxlQUFPLEVBQVBBO0FBQUQsT0FBZCxFQUF5QixZQUFLO0FBQzdCLGNBQUksQ0FBQ0osU0FBTCxDQUFlYSxJQUFmLENBQW9CVCxPQUFwQjtBQUNBLE9BRkQ7QUFHQTs7OzZCQWFRO0FBQ1IsYUFDQy9CLGdEQUFDLENBQUMsS0FBRCxFQUFRO0FBQ1JHLGlCQUFTLEVBQUUsS0FBS2tCLEtBQUwsQ0FBV2xCLFNBRGQ7QUFFUlMsYUFBSyxFQUFFLEtBQUtTLEtBQUwsQ0FBV1QsS0FGVjtBQUdSNkIsV0FBRyxFQUFFLEtBQUtULE9BSEY7QUFJUjVCLGVBQU8sRUFBRSxLQUFLQSxPQUpOO0FBS1J3QixtQkFBVyxFQUFDLEtBQUtBO0FBTFQsT0FBUixFQU9BLEtBQUtQLEtBQUwsQ0FBV3FCLFFBUFgsQ0FERjtBQVdBOzs7O0VBL0MwQlQsNENBQUssQ0FBQ1UsUzs7QUFpRG5CdkIsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTs7QUFDQSxTQUFTd0IsVUFBVCxPQUFvSDtBQUFBLE1BQTlGckMsS0FBOEYsUUFBOUZBLEtBQThGO0FBQUEsTUFBdkZWLE1BQXVGLFFBQXZGQSxNQUF1RjtBQUFBLE1BQS9FaUIsUUFBK0UsUUFBL0VBLFFBQStFO0FBQUEsTUFBckVmLE9BQXFFLFFBQXJFQSxPQUFxRTtBQUFBLE1BQTVEWSxVQUE0RCxRQUE1REEsVUFBNEQ7QUFBQSxNQUFoRGtDLFNBQWdELFFBQWhEQSxTQUFnRDtBQUFBLE1BQXJDUixRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQlMsS0FBMkIsUUFBM0JBLEtBQTJCO0FBQUEsTUFBcEJDLFNBQW9CLFFBQXBCQSxTQUFvQjtBQUFBLE1BQVRqRCxLQUFTLFFBQVRBLEtBQVM7QUFDaEgsU0FBT0UsZ0RBQUMsQ0FBQyxLQUFELEVBQU87QUFDWEcsYUFBUyxZQUFJTixNQUFKLHNCQUFzQmlCLFFBQVEsR0FBQ2pCLE1BQU0sR0FBQyxvQkFBUixHQUE2QixFQUEzRCxDQURFO0FBRVhlLFNBQUssRUFBRW9DLDhEQUFlLENBQUMsYUFBRCxFQUFlO0FBQUNsQyxjQUFRLEVBQVJBO0FBQUQsS0FBZjtBQUZYLEdBQVAsRUFHTixDQUNFZCxnREFBQyxDQUFDLFFBQUQsRUFBVTtBQUNQQyxPQUFHLEVBQUUsc0JBREU7QUFFUEUsYUFBUyxZQUFJTixNQUFKLDBCQUZGO0FBR1BPLFdBQU8sRUFBQztBQUFBLGFBQUlMLE9BQU8sQ0FBQztBQUFDUSxhQUFLLEVBQUxBLEtBQUQ7QUFBUThCLGdCQUFRLEVBQVJBLFFBQVI7QUFBa0J2QixnQkFBUSxFQUFFO0FBQTVCLE9BQUQsQ0FBWDtBQUFBO0FBSEQsR0FBVixFQUtHaEIsS0FBSyxDQUFDTyxHQUxULENBREgsRUFRRUwsZ0RBQUMsQ0FBQyxRQUFELEVBQVU7QUFDUEMsT0FBRyxFQUFFLHNCQURFO0FBRVBFLGFBQVMsWUFBSU4sTUFBSiw0QkFGRjtBQUdQNEMsT0FBRyxFQUFFTTtBQUhFLEdBQVYsRUFLR0QsS0FBSyxHQUFDQSxLQUFELEdBQU8sS0FMZixDQVJILEVBZUU5QyxnREFBQyxDQUFDLFFBQUQsRUFBVTtBQUNQQyxPQUFHLEVBQUUsc0JBREU7QUFFUEUsYUFBUyxZQUFJTixNQUFKLDJCQUZGO0FBR1BPLFdBQU8sRUFBQztBQUFBLGFBQUl5QyxTQUFTLENBQUN0QyxLQUFLLEdBQUMsQ0FBUCxDQUFiO0FBQUE7QUFIRCxHQUFWLEVBS0dULEtBQUssQ0FBQ21ELElBTFQsQ0FmSCxFQXNCRWpELGdEQUFDLENBQUMsUUFBRCxFQUFVO0FBQ1BDLE9BQUcsRUFBRSxzQkFERTtBQUVQRSxhQUFTLFlBQUlOLE1BQUosNEJBRkY7QUFHUE8sV0FBTyxFQUFDO0FBQUEsYUFBSU8sVUFBVSxDQUFDSixLQUFELENBQWQ7QUFBQTtBQUhELEdBQVYsRUFLR1QsS0FBSyxDQUFDb0QsS0FMVCxDQXRCSCxDQUhNLENBQVI7QUFpQ0g7O0FBQ2NOLHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7O0FBQ0EsU0FBU08sUUFBVCxPQUFrRTtBQUFBLE1BQTlDNUMsS0FBOEMsUUFBOUNBLEtBQThDO0FBQUEsTUFBdkNWLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLE1BQS9CVyxLQUErQixRQUEvQkEsS0FBK0I7QUFBQSxNQUF4QjRDLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM5RCxTQUFPckQsZ0RBQUMsQ0FBQyxLQUFELEVBQVE7QUFDWkcsYUFBUyxZQUFLTixNQUFMLGFBREc7QUFFWmUsU0FBSyxFQUFFb0MsOERBQWUsQ0FBQyxXQUFEO0FBRlYsR0FBUixFQUlKSSxVQUFVLENBQUNsQyxHQUFYLENBQWUsVUFBQ29DLFNBQUQ7QUFBQSxXQUFnQnRELGdEQUFDLENBQUMsUUFBRCxFQUFXO0FBQ3ZDQyxTQUFHLEVBQUVxRCxTQURrQztBQUV2Q2xELGFBQU8sRUFBRTtBQUFBLGVBQU1pRCxRQUFRLENBQUM5QyxLQUFELEVBQVErQyxTQUFSLENBQWQ7QUFBQSxPQUY4QjtBQUd2Q25ELGVBQVMsWUFBS04sTUFBTCw2QkFBOEJXLEtBQUssS0FBSzhDLFNBQVYsR0FBc0J6RCxNQUFNLEdBQUcsMkJBQS9CLEdBQTZELEVBQTNGLENBSDhCO0FBSXZDZSxXQUFLLEVBQUVvQyw4REFBZSxDQUFDLHFCQUFELEVBQXdCO0FBQUNNLGlCQUFTLEVBQVRBO0FBQUQsT0FBeEI7QUFKaUIsS0FBWCxFQUs3QkEsU0FMNkIsQ0FBakI7QUFBQSxHQUFmLENBSkksQ0FBUjtBQVdIOztBQUNjSCx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7O0FBQ0EsU0FBU0ksUUFBVCxPQUF1RDtBQUFBLE1BQW5DaEQsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEsTUFBNUJWLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLE1BQXBCWSxJQUFvQixRQUFwQkEsSUFBb0I7QUFBQSxNQUFkK0MsVUFBYyxRQUFkQSxVQUFjO0FBQ25ELFNBQU94RCxnREFBQyxDQUFDLEtBQUQsRUFBTztBQUNYRyxhQUFTLFlBQUlOLE1BQUosV0FERTtBQUVYNEQsZUFBVyxFQUFDLGFBRkQ7QUFHWEMsbUJBQWUsRUFBQyxNQUhMO0FBSVhDLFVBQU0sRUFBQyxnQkFBQ3JDLENBQUQ7QUFBQSxhQUFLa0MsVUFBVSxDQUFDakQsS0FBRCxFQUFRO0FBQzFCdUMsYUFBSyxFQUFFYyxNQUFNLENBQUN0QyxDQUFDLENBQUNHLE1BQUYsQ0FBU29DLFNBQVYsQ0FBTixDQUEyQkMsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBb0MsRUFBcEMsQ0FEbUI7QUFFMUJyRCxZQUFJLEVBQUVhLENBQUMsQ0FBQ0csTUFBRixDQUFTb0M7QUFGVyxPQUFSLENBQWY7QUFBQSxLQUpJO0FBUVhFLDJCQUF1QixFQUFDO0FBQUNDLFlBQU0sRUFBQ0MscURBQU0sQ0FBQ3hELElBQUQ7QUFBZCxLQVJiO0FBU1hHLFNBQUssRUFBRW9DLDhEQUFlLENBQUMsWUFBRDtBQVRYLEdBQVAsQ0FBUjtBQVdIOztBQUNjTyx1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNVyxJOzs7OztBQUNGLGdCQUFZN0MsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhFQUFNQSxLQUFOO0FBQ0EsVUFBSzBCLFNBQUwsR0FBaUJkLDRDQUFLLENBQUNDLFNBQU4sRUFBakI7QUFGYztBQUdqQjs7Ozs2QkFDTztBQUFBLHdCQUN3TCxLQUFLYixLQUQ3TDtBQUFBLFVBQ0NkLEtBREQsZUFDQ0EsS0FERDtBQUFBLFVBQ1FPLFFBRFIsZUFDUUEsUUFEUjtBQUFBLFVBQ2tCcUQsS0FEbEIsZUFDa0JBLEtBRGxCO0FBQUEsVUFDeUJDLE1BRHpCLGVBQ3lCQSxNQUR6QjtBQUFBLFVBQ2lDQyxlQURqQyxlQUNpQ0EsZUFEakM7QUFBQSxVQUNrREMsTUFEbEQsZUFDa0RBLE1BRGxEO0FBQUEsVUFDMER6QixTQUQxRCxlQUMwREEsU0FEMUQ7QUFBQSxVQUNxRWhELE1BRHJFLGVBQ3FFQSxNQURyRTtBQUFBLFVBQzZFaUQsS0FEN0UsZUFDNkVBLEtBRDdFO0FBQUEsVUFDb0ZyQyxJQURwRixlQUNvRkEsSUFEcEY7QUFBQSxVQUMwRkQsS0FEMUYsZUFDMEZBLEtBRDFGO0FBQUEsVUFDaUc2QyxRQURqRyxlQUNpR0EsUUFEakc7QUFBQSxVQUMyR3RELE9BRDNHLGVBQzJHQSxPQUQzRztBQUFBLFVBQ29IeUQsVUFEcEgsZUFDb0hBLFVBRHBIO0FBQUEsVUFDZ0k5QyxVQURoSSxlQUNnSUEsVUFEaEk7QUFBQSxVQUM0SUMsVUFENUksZUFDNElBLFVBRDVJO0FBQUEsVUFDd0p5QyxVQUR4SixlQUN3SkEsVUFEeEo7QUFBQSxVQUNvS2YsUUFEcEssZUFDb0tBLFFBRHBLO0FBQUEsVUFDOEt2QyxLQUQ5SyxlQUM4S0EsS0FEOUs7QUFFSixhQUFPRSxnREFBQyxDQUFDb0IsdURBQUQsRUFBZTtBQUNuQmpCLGlCQUFTLFlBQUlOLE1BQUosb0JBQW9CaUIsUUFBUSxHQUFDakIsTUFBTSxHQUFDLGtCQUFSLEdBQTJCLEVBQXZELENBRFU7QUFFbkJ3QyxnQkFBUSxFQUFSQSxRQUZtQjtBQUduQnZCLGdCQUFRLEVBQVJBLFFBSG1CO0FBSW5CVyxjQUFNLEVBQUUsS0FBS3NCLFNBSk07QUFLbkJULHNCQUFjLEVBQUMsd0JBQUNELFFBQUQ7QUFBQSxpQkFBWW1CLFVBQVUsQ0FBQ2pELEtBQUQsRUFBUTtBQUFDOEIsb0JBQVEsRUFBUkE7QUFBRCxXQUFSLENBQXRCO0FBQUEsU0FMSTtBQU1uQkUsY0FBTSxFQUFDLGdCQUFDUixPQUFEO0FBQUEsaUJBQVd5QixVQUFVLENBQUNqRCxLQUFELEVBQVF3QixPQUFSLENBQXJCO0FBQUEsU0FOWTtBQU9uQkQsZ0JBQVEsRUFBQyxrQkFBQ04sTUFBRDtBQUFBLGlCQUFVZCxVQUFVLENBQUNILEtBQUQsRUFBUTtBQUFDTyxvQkFBUSxFQUFDVTtBQUFWLFdBQVIsQ0FBcEI7QUFBQSxTQVBVO0FBUW5CWixhQUFLLEVBQUVvQyw4REFBZSxDQUFDLE1BQUQsRUFBUyxLQUFLM0IsS0FBZDtBQVJILE9BQWYsRUFTTixDQUNFckIsZ0RBQUMsQ0FBQzRDLG9EQUFELEVBQWE7QUFDVjNDLFdBQUcsRUFBQyxhQURNO0FBRVY4QyxpQkFBUyxFQUFFLEtBQUtBLFNBRk47QUFHVnhDLGFBQUssRUFBTEEsS0FIVTtBQUlWVixjQUFNLEVBQU5BLE1BSlU7QUFLVmlCLGdCQUFRLEVBQVJBLFFBTFU7QUFNVmhCLGFBQUssRUFBTEEsS0FOVTtBQU9WQyxlQUFPLEVBQVBBLE9BUFU7QUFRVlksa0JBQVUsRUFBVkEsVUFSVTtBQVNWa0MsaUJBQVMsRUFBVEEsU0FUVTtBQVVWUixnQkFBUSxFQUFSQSxRQVZVO0FBV1ZTLGFBQUssRUFBTEE7QUFYVSxPQUFiLENBREgsRUFjRTlDLGdEQUFDLENBQUMsS0FBRCxFQUFPO0FBQ0pDLFdBQUcsRUFBQyxXQURBO0FBRUpFLGlCQUFTLFlBQUlOLE1BQUosaUJBRkw7QUFHSmUsYUFBSyxFQUFFb0MsOERBQWUsQ0FBQyxXQUFELEVBQWMsS0FBSzNCLEtBQW5CO0FBSGxCLE9BQVAsRUFLR2lELE1BQU0sS0FBRy9ELEtBQUssR0FBQyxDQUFmLElBQWtCTyxRQUFsQixJQUE0QnNDLFVBQTVCLEdBQ0FwRCxnREFBQyxDQUFDbUQsa0RBQUQ7QUFDR2xELFdBQUcsRUFBRSxXQURSO0FBRUdtRCxrQkFBVSxFQUFWQSxVQUZIO0FBR0dJLGtCQUFVLEVBQVZBLFVBSEg7QUFJR2pELGFBQUssRUFBTEEsS0FKSDtBQUtHVixjQUFNLEVBQU5BLE1BTEg7QUFNR1csYUFBSyxFQUFMQSxLQU5IO0FBT0c2QyxnQkFBUSxFQUFSQTtBQVBILHVCQVFHRCxVQVJILEVBREQsR0FXQXBELGdEQUFDLENBQUN1RCxrREFBRCxFQUFXO0FBQ1J0RCxXQUFHLEVBQUUsV0FERztBQUVSTSxhQUFLLEVBQUxBLEtBRlE7QUFHUlYsY0FBTSxFQUFOQSxNQUhRO0FBSVJZLFlBQUksRUFBSkEsSUFKUTtBQUtSK0Msa0JBQVUsRUFBVkE7QUFMUSxPQUFYLENBaEJKLENBZEgsQ0FUTSxDQUFSO0FBaURIOzs7O0VBeERjdkIsNENBQUssQ0FBQ1UsUzs7QUEwRFZ1QixtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtDQUNBOztBQUNlSyw2R0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0lBQ01BLEs7Ozs7O0FBQ0YsaUJBQVlsRCxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsK0VBQU1BLEtBQU47O0FBRGMsZ0VBaUJOLFVBQUNpRCxNQUFELEVBQVk7QUFDcEIsWUFBS3pDLFFBQUwsQ0FBYztBQUNWeUMsY0FBTSxFQUFFLE1BQUsvQyxLQUFMLENBQVcrQyxNQUFYLEtBQW9CQSxNQUFwQixHQUEyQixLQUEzQixHQUFpQ0E7QUFEL0IsT0FBZDtBQUdILEtBckJpQjs7QUFBQSwrREFzQlAsVUFBQy9ELEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUN6QixZQUFLcUMsU0FBTCxDQUFlLEtBQWY7O0FBQ0EsWUFBS3hCLEtBQUwsQ0FBV21DLFVBQVgsQ0FBc0JqRCxLQUF0QixFQUE0QjtBQUFDQyxhQUFLLEVBQUxBO0FBQUQsT0FBNUI7QUFDSCxLQXpCaUI7O0FBRWQsVUFBS2UsS0FBTCxHQUFhO0FBQ1QrQyxZQUFNLEVBQUMsS0FERTtBQUVURSxvQkFBYyxFQUFFLENBRlA7QUFHVEgscUJBQWUsRUFBRTtBQUhSLEtBQWI7QUFLQSxVQUFLSSxjQUFMLEdBQXNCeEMsNENBQUssQ0FBQ0MsU0FBTixFQUF0QjtBQVBjO0FBUWpCOzs7O3dDQUNrQjtBQUNmLFVBQUcsS0FBS3VDLGNBQUwsSUFBdUIsS0FBS0EsY0FBTCxDQUFvQi9DLE9BQTlDLEVBQXNEO0FBQ2xELGFBQUtHLFFBQUwsQ0FBYztBQUNWMkMsd0JBQWMsRUFBRSxLQUFLQyxjQUFMLENBQW9CL0MsT0FBcEIsQ0FBNEJnRCxXQURsQztBQUVWTCx5QkFBZSxFQUFFLEtBQUtJLGNBQUwsQ0FBb0IvQyxPQUFwQixDQUE0QmlEO0FBRm5DLFNBQWQ7QUFJSDtBQUNKOzs7NkJBVU87QUFBQTs7QUFBQSx3QkFDb0ssS0FBS3RELEtBRHpLO0FBQUEsVUFDR3hCLE1BREgsZUFDR0EsTUFESDtBQUFBLFVBQ1dFLE9BRFgsZUFDV0EsT0FEWDtBQUFBLFVBQ29CeUQsVUFEcEIsZUFDb0JBLFVBRHBCO0FBQUEsVUFDZ0M5QyxVQURoQyxlQUNnQ0EsVUFEaEM7QUFBQSxVQUM0Q0MsVUFENUMsZUFDNENBLFVBRDVDO0FBQUEsVUFDd0R5QyxVQUR4RCxlQUN3REEsVUFEeEQ7QUFBQSxVQUNvRW9CLGNBRHBFLGVBQ29FQSxjQURwRTtBQUFBLFVBQ29GSCxlQURwRixlQUNvRkEsZUFEcEY7QUFBQSxVQUNxR0YsS0FEckcsZUFDcUdBLEtBRHJHO0FBQUEsVUFDNEdDLE1BRDVHLGVBQzRHQSxNQUQ1RztBQUFBLFVBQ29IdkQsZUFEcEgsZUFDb0hBLGVBRHBIO0FBQUEsVUFDcUlmLEtBRHJJLGVBQ3FJQSxLQURySTtBQUFBLFVBQzRJa0IsS0FENUksZUFDNElBLEtBRDVJO0FBQUEsVUFDbUpDLGFBRG5KLGVBQ21KQSxhQURuSjtBQUVKLGFBQU9qQixnREFBQyxDQUFDLEtBQUQsRUFBUTtBQUNSQyxXQUFHLEVBQUVKLE1BREc7QUFFUk0saUJBQVMsRUFBRU4sTUFGSDtBQUdSNEMsV0FBRyxFQUFFLEtBQUtnQyxjQUhGO0FBSVI3RCxhQUFLLEVBQUVvQyw4REFBZSxDQUFDLFdBQUQsRUFBYyxLQUFLM0IsS0FBbkI7QUFKZCxPQUFSLEVBTUwsQ0FDS0wsS0FBSyxHQUFDQSxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9aLEtBQVA7QUFBQSxlQUNaUCxnREFBQyxDQUFDa0UsNkNBQUQsb0JBQ00vQyxJQUROLEVBRU0sTUFBSSxDQUFDSSxLQUZYO0FBR0dxRCxlQUFLLEVBQUM1RCxLQUFLLENBQUM2RCxNQUhmO0FBSUc1RSxhQUFHLEVBQUVNLEtBSlI7QUFLR1YsZ0JBQU0sRUFBTkEsTUFMSDtBQU1HVSxlQUFLLEVBQUxBLEtBTkg7QUFPR1QsZUFBSyxFQUFMQSxLQVBIO0FBUUdxRSxlQUFLLEVBQUxBLEtBUkg7QUFTR0MsZ0JBQU0sRUFBTkEsTUFUSDtBQVVHckUsaUJBQU8sRUFBUEEsT0FWSDtBQVdHeUQsb0JBQVUsRUFBVkEsVUFYSDtBQVlHOUMsb0JBQVUsRUFBVkEsVUFaSDtBQWFHQyxvQkFBVSxFQUFWQSxVQWJIO0FBY0d5QyxvQkFBVSxFQUFWQSxVQWRIO0FBZUdrQixnQkFBTSxFQUFDLE1BQUksQ0FBQy9DLEtBQUwsQ0FBVytDLE1BZnJCO0FBZ0JHekIsbUJBQVMsRUFBQyxNQUFJLENBQUNBLFNBaEJsQjtBQWlCR1Esa0JBQVEsRUFBQyxNQUFJLENBQUNBO0FBakJqQixZQWtCQyxJQWxCRCxDQURXO0FBQUEsT0FBVixDQUFELEdBb0JILElBckJQLEVBc0JLckQsZ0RBQUMsQ0FBQ2UsK0NBQUQsRUFBUTtBQUNMZCxXQUFHLFlBQUtKLE1BQUwsYUFERTtBQUVMb0IscUJBQWEsRUFBYkEsYUFGSztBQUdMcEIsY0FBTSxFQUFOQSxNQUhLO0FBSUxDLGFBQUssRUFBTEEsS0FKSztBQUtMa0IsYUFBSyxFQUFMQSxLQUxLO0FBTUxqQixlQUFPLEVBQVBBLE9BTks7QUFPTFcsa0JBQVUsRUFBVkEsVUFQSztBQVFMQyxrQkFBVSxFQUFWQTtBQVJLLE9BQVIsQ0F0Qk4sQ0FOSyxDQUFSO0FBd0NIOzs7O0VBckVlc0IsNENBQUssQ0FBQ1UsUzs7QUF1RVg0QixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0VxQnBDLFM7Ozs7Ozs7O3NDQUNOLEM7O3NDQUNBLEM7O3NDQUNBLEM7O3NDQUNBLEM7O3lDQVNHLFVBQUNiLENBQUQsRUFBTztBQUNqQkEsT0FBQyxDQUFDd0QsY0FBRjtBQUNBLFVBQU0xQyxFQUFFLEdBQUcsS0FBSSxDQUFDTCxPQUFMLENBQWFDLE9BQXhCOztBQUNBLFVBQU1LLFFBQVEsR0FBRyxLQUFJLENBQUMwQyxXQUFMLENBQWlCekQsQ0FBakIsRUFBb0IsS0FBSSxDQUFDMEQsUUFBekIsRUFBbUMsS0FBSSxDQUFDQyxRQUF4QyxDQUFqQjs7QUFDQSxXQUFJLENBQUNDLFFBQUwsR0FBZ0I3QyxRQUFRLENBQUM4QyxDQUF6QjtBQUNBLFdBQUksQ0FBQ0MsUUFBTCxHQUFnQi9DLFFBQVEsQ0FBQ2dELENBQXpCO0FBQ0EsVUFBTUMsRUFBRSxHQUFHLEtBQUksQ0FBQ3ZELE9BQUwsQ0FBYUMsT0FBYixDQUFxQnVELGFBQXJCLENBQW1DYixXQUFuQyxHQUErQyxLQUFJLENBQUMzQyxPQUFMLENBQWFDLE9BQWIsQ0FBcUIwQyxXQUEvRTtBQUNBLFVBQU1jLEVBQUUsR0FBRyxLQUFJLENBQUN6RCxPQUFMLENBQWFDLE9BQWIsQ0FBcUJ1RCxhQUFyQixDQUFtQ1osWUFBbkMsR0FBZ0QsS0FBSSxDQUFDNUMsT0FBTCxDQUFhQyxPQUFiLENBQXFCMkMsWUFBaEY7O0FBQ0EsVUFBSSxLQUFJLENBQUNPLFFBQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNqQixhQUFJLENBQUNBLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSDs7QUFDRCxVQUFJLEtBQUksQ0FBQ0UsUUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGFBQUksQ0FBQ0EsUUFBTCxHQUFnQixDQUFoQjtBQUNIOztBQUNELFVBQUksS0FBSSxDQUFDRixRQUFMLEdBQWNJLEVBQWxCLEVBQXNCO0FBQ2xCLGFBQUksQ0FBQ0osUUFBTCxHQUFnQkksRUFBaEI7QUFDSDs7QUFDRCxVQUFJLEtBQUksQ0FBQ0YsUUFBTCxHQUFjSSxFQUFsQixFQUFzQjtBQUNsQixhQUFJLENBQUNKLFFBQUwsR0FBZ0JJLEVBQWhCOztBQUNBLFlBQUdwRCxFQUFFLENBQUNtRCxhQUFILENBQWlCWixZQUFqQixHQUE4QnZDLEVBQUUsQ0FBQ3VDLFlBQXBDLEVBQWlEO0FBQzdDLGVBQUksQ0FBQ1MsUUFBTCxHQUFnQixDQUFoQjtBQUNIO0FBQ0o7O0FBRUQsV0FBSSxDQUFDSyxZQUFMLENBQWtCLEtBQUksQ0FBQ1AsUUFBdkIsRUFBaUMsS0FBSSxDQUFDRSxRQUF0QztBQUNILEs7O3lDQUNhLFVBQUM5RCxDQUFELEVBQU87QUFDakIsVUFBTWMsRUFBRSxHQUFHLEtBQUksQ0FBQ0wsT0FBTCxDQUFhQyxPQUF4QjtBQUNBLFVBQU0wRCxJQUFJLEdBQUd0RCxFQUFFLENBQUN1RCxxQkFBSCxFQUFiOztBQUNBLFVBQU10RCxRQUFRLEdBQUcsS0FBSSxDQUFDMEMsV0FBTCxDQUFpQnpELENBQWpCLEVBQW9Cb0UsSUFBSSxDQUFDUCxDQUF6QixFQUE0Qk8sSUFBSSxDQUFDTCxDQUFqQyxDQUFqQjs7QUFDQSxXQUFJLENBQUNMLFFBQUwsR0FBZ0IzQyxRQUFRLENBQUM4QyxDQUF6QjtBQUNBLFdBQUksQ0FBQ0YsUUFBTCxHQUFnQjVDLFFBQVEsQ0FBQ2dELENBQXpCO0FBQ0FPLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSSxDQUFDQyxXQUE1QyxFQUF5RCxJQUF6RDtBQUNBRixjQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUksQ0FBQ0UsU0FBMUMsRUFBcUQsSUFBckQ7QUFFSCxLOzt1Q0FDVyxVQUFDekUsQ0FBRCxFQUFPO0FBQ2YsVUFBRyxLQUFJLENBQUNTLE9BQUwsQ0FBYU8sY0FBaEIsRUFBK0I7QUFDM0IsYUFBSSxDQUFDUCxPQUFMLENBQWFPLGNBQWIsQ0FBNEIwRCxJQUE1QixDQUFpQyxLQUFqQyxFQUF1QztBQUNuQ2IsV0FBQyxFQUFDLEtBQUksQ0FBQ0QsUUFENEI7QUFFbkNHLFdBQUMsRUFBQyxLQUFJLENBQUNEO0FBRjRCLFNBQXZDO0FBSUg7O0FBRURRLGNBQVEsQ0FBQ0ssbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBSSxDQUFDSCxXQUEvQztBQUNBRixjQUFRLENBQUNLLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUksQ0FBQ0YsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDSCxLOzs7Ozt5QkF0REloRSxPLEVBQVM7QUFDVixXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQTs7Ozs7QUFLSDs7O2lDQWdEWW9ELEMsRUFBR0UsQyxFQUFHO0FBQ2YsVUFBRyxLQUFLdEQsT0FBTCxDQUFhQyxPQUFoQixFQUF3QjtBQUNwQixhQUFLRCxPQUFMLENBQWFDLE9BQWIsQ0FBcUJwQixLQUFyQixDQUEyQnNGLFNBQTNCLHlCQUFzRGYsQ0FBdEQsZ0JBQTZERSxDQUE3RDtBQUNIO0FBQ0o7OztnQ0FDVy9ELEMsRUFBRzZFLEUsRUFBSUMsRSxFQUFHO0FBQ2xCLFVBQUssT0FBRCxDQUFVQyxJQUFWLENBQWUvRSxDQUFDLENBQUNwQixJQUFqQixDQUFKLEVBQTRCO0FBQ3hCLGVBQU87QUFDSGlGLFdBQUMsRUFBRTdELENBQUMsQ0FBQ2dGLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQWIsR0FBdUJKLEVBRHZCO0FBRUhkLFdBQUMsRUFBRS9ELENBQUMsQ0FBQ2dGLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLE9BQWIsR0FBdUJKO0FBRnZCLFNBQVA7QUFJSCxPQUxELE1BS087QUFDSCxlQUFPO0FBQ0hqQixXQUFDLEVBQUU3RCxDQUFDLENBQUNpRixPQUFGLEdBQVlKLEVBRFo7QUFFSGQsV0FBQyxFQUFFL0QsQ0FBQyxDQUFDa0YsT0FBRixHQUFZSjtBQUZaLFNBQVA7QUFJSDtBQUNKIiwiZmlsZSI6IjAuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgaCB9IGZyb20gJy4vdXRpbHMnO1xyXG5mdW5jdGlvbiBOYXZCYXJJdGVtQWRkKHtwcmVmaXgsIGljb25zLCBhZGRJdGVtfSl7XHJcbiAgICByZXR1cm4gaCgnYnV0dG9uJyx7XHJcbiAgICAgICAga2V5OiBgJHtwcmVmaXh9LS1uYXZiYXJfX2l0ZW0tLWFkZGAsXHJcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLW5hdmJhcl9faXRlbS0tYWRkYCxcclxuICAgICAgICBvbkNsaWNrOiAoKT0+YWRkSXRlbSgpLFxyXG4gICAgfSwgaWNvbnMuYWRkKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJJdGVtQWRkOyIsImltcG9ydCB7IGggfSBmcm9tICcuL3V0aWxzJztcclxuZnVuY3Rpb24gTmF2QmFySXRlbSh7cHJlZml4LCBpY29ucyxpbmRleCwgY29sb3IsIHRleHQsIHNlbGVjdEl0ZW0sIGRlbGV0ZUl0ZW19KXtcclxuICAgIHJldHVybiBoKCdzcGFuJyx7XHJcbiAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLW5hdmJhcl9faXRlbWAsXHJcbiAgICAgICAgc3R5bGU6e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXHJcbiAgICAgICAgaCgnYnV0dG9uJyx7XHJcbiAgICAgICAgICAgIGtleTogYG5hdmJhci1pdGVtX18ke2luZGV4fS0tc2VsZWN0YCxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLW5hdmJhcl9faXRlbS0tc2VsZWN0YCxcclxuICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpPT5zZWxlY3RJdGVtKGluZGV4LCB7c2VsZWN0ZWQ6dHJ1ZX0pXHJcbiAgICAgICAgfSwgdGV4dD90ZXh0OicuLi4nKSxcclxuICAgICAgICBoKCdidXR0b24nLHtcclxuICAgICAgICAgICAga2V5OiBgbmF2YmFyLWl0ZW1fXyR7aW5kZXh9LS1kZWxldGVgLFxyXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLW5hdmJhcl9faXRlbS0tZGVsZXRlYCxcclxuICAgICAgICAgICAgb25DbGljazogKCk9PmRlbGV0ZUl0ZW0oaW5kZXgsIHtzZWxlY3RlZDp0cnVlfSksXHJcbiAgICAgICAgfSwgJ3gnKSxcclxuICAgIF0pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhckl0ZW07IiwiaW1wb3J0IHsgaCB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgTmF2QmFySXRlbSBmcm9tICcuL25hdmJhci1pdGVtJztcclxuaW1wb3J0IE5hdkJhckl0ZW1BZGQgZnJvbSAnLi9uYXZiYXItaXRlbS1hZGQnO1xyXG5mdW5jdGlvbiBOYXZCYXIoe3ByZWZpeCwgaXRlbXMsIGFkZEl0ZW0sIHNlbGVjdEl0ZW0sIGRlbGV0ZUl0ZW0sIGljb25zLCBkaXNwbGF5Rm9vdGVyfSl7XHJcbiAgICByZXR1cm4gaCgnZGl2Jyx7XHJcbiAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLW5hdmJhcmAsXHJcbiAgICB9LFtcclxuICAgICAgICBkaXNwbGF5Rm9vdGVyJiZpdGVtcz9pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KT0+XHJcbiAgICAgICAgICAgIGgoTmF2QmFySXRlbSx7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGBuYXZiYXItaXRlbV9fJHtpbmRleH1gLFxyXG4gICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBpY29ucyxcclxuICAgICAgICAgICAgICAgIHRleHQ6aXRlbS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6aXRlbS5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW0sXHJcbiAgICAgICAgICAgICAgICBkZWxldGVJdGVtXHJcbiAgICAgICAgICAgIH0saXRlbS50ZXh0KVxyXG4gICAgICAgICk6bnVsbCxcclxuICAgICAgICBoKE5hdkJhckl0ZW1BZGQse1xyXG4gICAgICAgICAgICBrZXk6IGBuYXZiYXItaXRlbV9fYWRkYCxcclxuICAgICAgICAgICAgcHJlZml4LFxyXG4gICAgICAgICAgICBpY29ucyxcclxuICAgICAgICAgICAgYWRkSXRlbSxcclxuICAgICAgICB9KVxyXG4gICAgXSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vdXRpbHMvZHJhZ2dhYmxlJztcbmltcG9ydCB7IGggfSBmcm9tICcuL3V0aWxzJztcbmNsYXNzIE5vdGVEcmFnZ2FibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRkcmFnZ2FibGUgPSBudWxsXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGU9IHtcblx0XHRcdGFjdGl2ZTogcHJvcHMuc2VsZWN0ZWQsXG5cdFx0XHRvcHRpb25zOiB7fVxuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblx0XHR0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUoKTtcblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBlbCA9IHRoaXMuZWxlbWVudD90aGlzLmVsZW1lbnQuY3VycmVudDpudWxsO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRlbGVtZW50OiBlbCwgXG5cdFx0XHRwb3NpdGlvbjogdGhpcy5wcm9wcy5wb3NpdGlvbixcblx0XHRcdG9uRHJhZ0NvbXBsZXRlOnRoaXMucHJvcHMub25EcmFnQ29tcGxldGUsXG5cdFx0XHRvbkluaXQ6dGhpcy5wcm9wcy5vbkluaXRcblx0XHR9O1xuXHRcdHRoaXMuc2V0U3RhdGUoe29wdGlvbnN9LCAoKT0+IHtcblx0XHRcdHRoaXMuZHJhZ2dhYmxlLmluaXQob3B0aW9ucyk7XG5cdFx0fSlcblx0fVxuXHRvbk1vdXNlRG93biA9IChlKSA9PiB7XG5cdFx0aWYodGhpcy5zdGF0ZS5hY3RpdmUmJmUudGFyZ2V0PT09dGhpcy5wcm9wcy50YXJnZXQuY3VycmVudCl7XG5cdFx0XHR0aGlzLmRyYWdnYWJsZS5vbk1vdXNlRG93bihlKTtcblx0XHR9XG5cdH1cblx0b25DbGljayA9IChlKSA9PiB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRhY3RpdmU6IHRydWVcblx0XHR9LCAoKT0+e1xuXHRcdFx0dGhpcy5wcm9wcy5vblNlbGVjdCh0aGlzLnN0YXRlLmFjdGl2ZSk7XG5cdFx0fSlcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdGgoJ2RpdicsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcblx0XHRcdFx0c3R5bGU6IHRoaXMucHJvcHMuc3R5bGUsXG5cdFx0XHRcdHJlZjogdGhpcy5lbGVtZW50LFxuXHRcdFx0XHRvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG5cdFx0XHRcdG9uTW91c2VEb3duOnRoaXMub25Nb3VzZURvd25cblx0XHRcdH0sIFxuXHRcdFx0XHR0aGlzLnByb3BzLmNoaWxkcmVuXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgTm90ZURyYWdnYWJsZTtcbiIsImltcG9ydCB7IGgsIGdldEVsZW1lbnRTdHlsZSB9IGZyb20gJy4vdXRpbHMnO1xuZnVuY3Rpb24gTm90ZUhlYWRlcih7IGluZGV4LCBwcmVmaXgsIHNlbGVjdGVkLCBhZGRJdGVtLCBkZWxldGVJdGVtLCBzZXRUb2dnbGUsIHBvc2l0aW9uLCB0aXRsZSwgdGFyZ2V0UmVmLCBpY29ucyB9KSB7XG4gICAgcmV0dXJuIGgoJ2Rpdicse1xuICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0taGVhZGVyICR7c2VsZWN0ZWQ/cHJlZml4KyctLWhlYWRlcl9fc2VsZWN0ZWQnOicnfWAsXG4gICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ25vdGUtaGVhZGVyJyx7c2VsZWN0ZWR9KVxuICAgIH0sW1xuICAgICAgICBoKCdidXR0b24nLHtcbiAgICAgICAgICAgIGtleTogJ25vdGUtaGVhZGVyLWJ1dHRvbi0xJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1oZWFkZXJfX2J1dHRvbi0tYWRkYCxcbiAgICAgICAgICAgIG9uQ2xpY2s6KCk9PmFkZEl0ZW0oe2luZGV4LCBwb3NpdGlvbiwgc2VsZWN0ZWQ6IHRydWV9KVxuICAgICAgICB9LCBcbiAgICAgICAgICAgIGljb25zLmFkZFxuICAgICAgICApLFxuICAgICAgICBoKCdidXR0b24nLHtcbiAgICAgICAgICAgIGtleTogJ25vdGUtaGVhZGVyLWJ1dHRvbi0yJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1oZWFkZXJfX2J1dHRvbi0tdGl0bGVgLFxuICAgICAgICAgICAgcmVmOiB0YXJnZXRSZWZcbiAgICAgICAgfSxcbiAgICAgICAgICAgIHRpdGxlP3RpdGxlOlwiLi4uXCJcbiAgICAgICAgKSxcbiAgICAgICAgaCgnYnV0dG9uJyx7XG4gICAgICAgICAgICBrZXk6ICdub3RlLWhlYWRlci1idXR0b24tMycsXG4gICAgICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0taGVhZGVyX19idXR0b24tLW1lbnVgLFxuICAgICAgICAgICAgb25DbGljazooKT0+c2V0VG9nZ2xlKGluZGV4KzEpXG4gICAgICAgIH0sIFxuICAgICAgICAgICAgaWNvbnMubWVudVxuICAgICAgICApLFxuICAgICAgICBoKCdidXR0b24nLHtcbiAgICAgICAgICAgIGtleTogJ25vdGUtaGVhZGVyLWJ1dHRvbi00JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1oZWFkZXJfX2J1dHRvbi0tdHJhc2hgLFxuICAgICAgICAgICAgb25DbGljazooKT0+ZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgfSwgXG4gICAgICAgICAgICBpY29ucy50cmFzaFxuICAgICAgICApLFxuICAgIF0pXG59XG5leHBvcnQgZGVmYXVsdCBOb3RlSGVhZGVyO1xuIiwiaW1wb3J0IHsgaCwgZ2V0RWxlbWVudFN0eWxlIH0gZnJvbSAnLi91dGlscydcbmZ1bmN0aW9uIE5vdGVNZW51KHsgaW5kZXgsIHByZWZpeCwgY29sb3IsIGNvbG9yQ29kZXMsIHNldENvbG9yIH0pIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tLWNvbG9yc2AsXG4gICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ25vdGUtbWVudScpXG4gICAgfSwgXG4gICAgICAgIGNvbG9yQ29kZXMubWFwKChjb2xvckNvZGUpID0+ICBoKCdidXR0b24nLCB7XG4gICAgICAgICAgICBrZXk6IGNvbG9yQ29kZSxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldENvbG9yKGluZGV4LCBjb2xvckNvZGUpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXh9LS1jb2xvcnNfX2NvbG9yICR7Y29sb3IgPT09IGNvbG9yQ29kZSA/IHByZWZpeCArICctLWNvbG9yc19fY29sb3ItLXNlbGVjdGVkJyA6ICcnfWAsXG4gICAgICAgICAgICBzdHlsZTogZ2V0RWxlbWVudFN0eWxlKCdub3RlLWNvbG9yLXNlbGVjdG9yJywge2NvbG9yQ29kZX0pXG4gICAgICAgIH0sIGNvbG9yQ29kZSApXG4gICAgKSlcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVNZW51OyIsImltcG9ydCB7IGgsIG5sVG9CciwgZ2V0RWxlbWVudFN0eWxlIH0gZnJvbSAnLi91dGlscydcbmZ1bmN0aW9uIE5vdGVUZXh0KHsgaW5kZXgsIHByZWZpeCwgdGV4dCwgdXBkYXRlSXRlbSB9KSB7XG4gICAgcmV0dXJuIGgoJ2Rpdicse1xuICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tdGV4dGAsXG4gICAgICAgIHBsYWNlaG9sZGVyOlwicmVhY3QtaG9va3NcIixcbiAgICAgICAgY29udGVudEVkaXRhYmxlOlwidHJ1ZVwiLFxuICAgICAgICBvbkJsdXI6KGUpPT51cGRhdGVJdGVtKGluZGV4LCB7XG4gICAgICAgICAgICB0aXRsZTogU3RyaW5nKGUudGFyZ2V0LmlubmVyVGV4dCkuc3Vic3RyKDAsMTApLFxuICAgICAgICAgICAgdGV4dDogZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgIH0pLFxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOm5sVG9Ccih0ZXh0KX0sXG4gICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ25vdGUtaW5wdXQnKVxuICAgIH0pXG59XG5leHBvcnQgZGVmYXVsdCBOb3RlVGV4dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5vdGVIZWFkZXIgZnJvbSAnLi9ub3RlLWhlYWRlcic7XG5pbXBvcnQgTm90ZVRleHQgZnJvbSAnLi9ub3RlLXRleHQnO1xuaW1wb3J0IE5vdGVNZW51IGZyb20gJy4vbm90ZS1tZW51JztcbmltcG9ydCBOb3RlRHJhZ2dhYmxlIGZyb20gJy4vbm90ZS1kcmFnZ2FibGUnO1xuaW1wb3J0IHsgaCwgZ2V0RWxlbWVudFN0eWxlIH0gZnJvbSAnLi91dGlscyc7XG5jbGFzcyBOb3RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnRhcmdldFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICBcdGNvbnN0IHsgaW5kZXgsIHNlbGVjdGVkLCB3aWR0aCwgaGVpZ2h0LCBjb250YWluZXJIZWlnaHQsIHRvZ2dsZSwgc2V0VG9nZ2xlLCBwcmVmaXgsIHRpdGxlLCB0ZXh0LCBjb2xvciwgc2V0Q29sb3IsIGFkZEl0ZW0sIHVwZGF0ZUl0ZW0sIHNlbGVjdEl0ZW0sIGRlbGV0ZUl0ZW0sIGNvbG9yQ29kZXMsIHBvc2l0aW9uLCBpY29ucyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIGgoTm90ZURyYWdnYWJsZSx7XG4gICAgICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbm90ZSAke3NlbGVjdGVkP3ByZWZpeCsnLS1ub3RlX19zZWxlY3RlZCc6Jyd9YCxcbiAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0UmVmLFxuICAgICAgICAgICAgb25EcmFnQ29tcGxldGU6KHBvc2l0aW9uKT0+dXBkYXRlSXRlbShpbmRleCwge3Bvc2l0aW9ufSksXG4gICAgICAgICAgICBvbkluaXQ6KG9wdGlvbnMpPT51cGRhdGVJdGVtKGluZGV4LCBvcHRpb25zKSxcbiAgICAgICAgICAgIG9uU2VsZWN0OihhY3RpdmUpPT5zZWxlY3RJdGVtKGluZGV4LCB7c2VsZWN0ZWQ6YWN0aXZlfSksXG4gICAgICAgICAgICBzdHlsZTogZ2V0RWxlbWVudFN0eWxlKCdub3RlJywgdGhpcy5wcm9wcylcbiAgICAgICAgfSxbXG4gICAgICAgICAgICBoKE5vdGVIZWFkZXIsIHtcbiAgICAgICAgICAgICAgICBrZXk6J25vdGUtaGVhZGVyJyxcbiAgICAgICAgICAgICAgICB0YXJnZXRSZWY6IHRoaXMudGFyZ2V0UmVmLFxuICAgICAgICAgICAgICAgIGluZGV4LCBcbiAgICAgICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQsIFxuICAgICAgICAgICAgICAgIGljb25zLFxuICAgICAgICAgICAgICAgIGFkZEl0ZW0sIFxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0sIFxuICAgICAgICAgICAgICAgIHNldFRvZ2dsZSwgXG4gICAgICAgICAgICAgICAgcG9zaXRpb24sIFxuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGgoJ2Rpdicse1xuICAgICAgICAgICAgICAgIGtleTonbm90ZS1ib2R5JyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbm90ZV9fYm9keWAsXG4gICAgICAgICAgICAgICAgc3R5bGU6IGdldEVsZW1lbnRTdHlsZSgnbm90ZS1ib2R5JywgdGhpcy5wcm9wcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9nZ2xlPT09aW5kZXgrMSYmc2VsZWN0ZWQmJmNvbG9yQ29kZXM/XG4gICAgICAgICAgICAgICAgaChOb3RlTWVudSwgeyBcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbm90ZS1tZW51JywgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yQ29kZXMsIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJdGVtLCBcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXgsIFxuICAgICAgICAgICAgICAgICAgICBjb2xvciwgXG4gICAgICAgICAgICAgICAgICAgIHNldENvbG9yLCBcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDb2Rlc1xuICAgICAgICAgICAgICAgIH0pOlxuICAgICAgICAgICAgICAgIGgoTm90ZVRleHQsIHsgXG4gICAgICAgICAgICAgICAgICAgIGtleTogJ25vdGUtdGV4dCcsIFxuICAgICAgICAgICAgICAgICAgICBpbmRleCwgXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCwgXG4gICAgICAgICAgICAgICAgICAgIHRleHQsIFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICBcbiAgICAgICAgXSlcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBOb3RlOyIsImltcG9ydCBOb3RlcyBmcm9tICcuL25vdGVzJztcclxuLy9pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IE5vdGVzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgeyBoLCBnZXRFbGVtZW50U3R5bGUgfSBmcm9tICcuL3V0aWxzJztcbmNsYXNzIE5vdGVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9nZ2xlOmZhbHNlLFxuICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IDAsXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vdGVzQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIGlmKHRoaXMubm90ZXNDb250YWluZXIgJiYgdGhpcy5ub3Rlc0NvbnRhaW5lci5jdXJyZW50KXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiB0aGlzLm5vdGVzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiB0aGlzLm5vdGVzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRUb2dnbGUgPSAodG9nZ2xlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdG9nZ2xlOiB0aGlzLnN0YXRlLnRvZ2dsZT09PXRvZ2dsZT9mYWxzZTp0b2dnbGVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldENvbG9yID0gKGluZGV4LCBjb2xvcikgPT4ge1xuICAgICAgICB0aGlzLnNldFRvZ2dsZShmYWxzZSk7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlSXRlbShpbmRleCx7Y29sb3J9KVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge3ByZWZpeCwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgc2VsZWN0SXRlbSwgZGVsZXRlSXRlbSwgY29sb3JDb2RlcywgY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCwgd2lkdGgsIGhlaWdodCwgYmFja2dyb3VuZENvbG9yLCBpY29ucywgaXRlbXMsIGRpc3BsYXlGb290ZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBrZXk6IHByZWZpeCwgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgcmVmOiB0aGlzLm5vdGVzQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ2NvbnRhaW5lcicsIHRoaXMucHJvcHMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaXRlbXM/aXRlbXMubWFwKChpdGVtLCBpbmRleCk9PlxuICAgICAgICAgICAgICAgICAgICBoKE5vdGUseyBcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6aXRlbXMubGVuZ3RoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJdGVtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JDb2RlcywgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlOnRoaXMuc3RhdGUudG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlOnRoaXMuc2V0VG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3I6dGhpcy5zZXRDb2xvclxuICAgICAgICAgICAgICAgICAgICB9LG51bGwpXG4gICAgICAgICAgICAgICAgKTpudWxsLFxuICAgICAgICAgICAgICAgIGgoTmF2QmFyLHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtwcmVmaXh9LS1uYXZiYXJgLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9vdGVyLFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgIGljb25zLFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgYWRkSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0SXRlbSxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIHtcbiAgICBpbml0aWFsWCA9IDA7XG4gICAgaW5pdGlhbFkgPSAwO1xuICAgIGN1cnJlbnRYID0gMDtcbiAgICBjdXJyZW50WSA9IDA7XG4gICAgaW5pdChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8qaWYob3B0aW9ucy5wb3NpdGlvbil7XG4gICAgICAgICAgICB0aGlzLnhPZmZzZXQgPSBvcHRpb25zLnBvc2l0aW9uLng7XG4gICAgICAgICAgICB0aGlzLnlPZmZzZXQgPSBvcHRpb25zLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZShvcHRpb25zLnBvc2l0aW9uLngsb3B0aW9ucy5wb3NpdGlvbi55KTtcbiAgICAgICAgfSovXG4gICAgfVxuICAgIG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMub3B0aW9ucy5lbGVtZW50O1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZSwgdGhpcy5pbml0aWFsWCwgdGhpcy5pbml0aWFsWSk7XG4gICAgICAgIHRoaXMuY3VycmVudFggPSBwb3NpdGlvbi54O1xuICAgICAgICB0aGlzLmN1cnJlbnRZID0gcG9zaXRpb24ueTtcbiAgICAgICAgY29uc3QgeDEgPSB0aGlzLm9wdGlvbnMuZWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoLXRoaXMub3B0aW9ucy5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBjb25zdCB5MSA9IHRoaXMub3B0aW9ucy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LXRoaXMub3B0aW9ucy5lbGVtZW50Lm9mZnNldEhlaWdodFxuICAgICAgICBpZiggdGhpcy5jdXJyZW50WDwwICl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRYID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiggdGhpcy5jdXJyZW50WTwwICl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiggdGhpcy5jdXJyZW50WD54MSApe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50WCA9IHgxO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRZPnkxICl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRZID0geTE7XG4gICAgICAgICAgICBpZihlbC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDxlbC5vZmZzZXRIZWlnaHQpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5jdXJyZW50WCwgdGhpcy5jdXJyZW50WSk7XG4gICAgfVxuICAgIG9uTW91c2VEb3duID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLm9wdGlvbnMuZWxlbWVudDtcbiAgICAgICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oZSwgcmVjdC54LCByZWN0LnkpO1xuICAgICAgICB0aGlzLmluaXRpYWxYID0gcG9zaXRpb24ueDtcbiAgICAgICAgdGhpcy5pbml0aWFsWSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUsIG51bGwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAsIG51bGwpO1xuICAgICAgICBcbiAgICB9XG4gICAgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLm9uRHJhZ0NvbXBsZXRlKXtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkRyYWdDb21wbGV0ZS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB4OnRoaXMuY3VycmVudFgsXG4gICAgICAgICAgICAgICAgeTp0aGlzLmN1cnJlbnRZXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLCBudWxsKTtcbiAgICB9XG4gICAgc2V0VHJhbnNsYXRlKHgsIHkpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmVsZW1lbnQpe1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eH1weCwke3l9cHgsMClgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFBvc2l0aW9uKGUsIGR4LCBkeSl7XG4gICAgICAgIGlmICgoL3RvdWNoLykudGVzdChlLnR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGUudG91Y2hlc1swXS5jbGllbnRYIC0gZHgsXG4gICAgICAgICAgICAgICAgeTogZS50b3VjaGVzWzBdLmNsaWVudFkgLSBkeVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gZHgsXG4gICAgICAgICAgICAgICAgeTogZS5jbGllbnRZIC0gZHlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9