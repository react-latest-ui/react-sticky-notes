(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbmF2YmFyLWl0ZW0tYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9uYXZiYXItaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbmF2YmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3RlLWRyYWdnYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbm90ZS1oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmVhY3Qtc3RpY2t5LW5vdGVzL25vdGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvbm90ZS10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3RlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlYWN0LXN0aWNreS1ub3Rlcy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWFjdC1zdGlja3ktbm90ZXMvdXRpbHMvZHJhZ2dhYmxlLmpzIl0sIm5hbWVzIjpbIk5hdkJhckl0ZW1BZGQiLCJwcmVmaXgiLCJpY29ucyIsImFkZEl0ZW0iLCJoIiwia2V5IiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJhZGQiLCJOYXZCYXJJdGVtIiwiaW5kZXgiLCJjb2xvciIsInRleHQiLCJzZWxlY3RJdGVtIiwiZGVsZXRlSXRlbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWQiLCJOYXZCYXIiLCJpdGVtcyIsImRpc3BsYXlGb290ZXIiLCJtYXAiLCJpdGVtIiwiTm90ZURyYWdnYWJsZSIsInByb3BzIiwiZSIsInN0YXRlIiwiYWN0aXZlIiwidGFyZ2V0IiwiY3VycmVudCIsImRyYWdnYWJsZSIsIm9uTW91c2VEb3duIiwic2V0U3RhdGUiLCJvblNlbGVjdCIsIm9wdGlvbnMiLCJlbGVtZW50IiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJEcmFnZ2FibGUiLCJlbCIsInBvc2l0aW9uIiwib25EcmFnQ29tcGxldGUiLCJvbkluaXQiLCJpbml0IiwicmVmIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJOb3RlSGVhZGVyIiwic2V0VG9nZ2xlIiwidGl0bGUiLCJ0YXJnZXRSZWYiLCJnZXRFbGVtZW50U3R5bGUiLCJtZW51IiwidHJhc2giLCJOb3RlTWVudSIsImNvbG9yQ29kZXMiLCJzZXRDb2xvciIsImNvbG9yQ29kZSIsIk5vdGVUZXh0IiwidXBkYXRlSXRlbSIsInBsYWNlaG9sZGVyIiwiY29udGVudEVkaXRhYmxlIiwib25CbHVyIiwiU3RyaW5nIiwiaW5uZXJUZXh0Iiwic3Vic3RyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJubFRvQnIiLCJOb3RlIiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXJIZWlnaHQiLCJ0b2dnbGUiLCJOb3RlcyIsImNvbnRhaW5lcldpZHRoIiwibm90ZXNDb250YWluZXIiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsImNvdW50IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJnZXRQb3NpdGlvbiIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJjdXJyZW50WCIsIngiLCJjdXJyZW50WSIsInkiLCJ4MSIsInBhcmVudEVsZW1lbnQiLCJ5MSIsInNldFRyYW5zbGF0ZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImNhbGwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNmb3JtIiwiZHgiLCJk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QUY0QixTQUF2QztBQUlIOztBQUVEUSxjQUFRLENBQUNLLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUksQ0FBQ0gsV0FBL0M7QUFDQUYsY0FBUSxDQUFDSyxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFJLENBQUNGLFNBQTdDLEVBQXdELElBQXhEO0FBQ0gsSzs7Ozs7eUJBdERJaEUsTyxFQUFTO0FBQ1YsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0E7Ozs7O0FBS0g7OztpQ0FnRFlvRCxDLEVBQUdFLEMsRUFBRztBQUNmLFVBQUcsS0FBS3RELE9BQUwsQ0FBYUMsT0FBaEIsRUFBd0I7QUFDcEIsYUFBS0QsT0FBTCxDQUFhQyxPQUFiLENBQXFCcEIsS0FBckIsQ0FBMkJzRixTQUEzQix5QkFBc0RmLENBQXRELGdCQUE2REUsQ0FBN0Q7QUFDSDtBQUNKOzs7Z0NBQ1cvRCxDLEVBQUc2RSxFLEVBQUlDLEUsRUFBRztBQUNsQixVQUFLLE9BQUQsQ0FBVUMsSUFBVixDQUFlL0UsQ0FBQyxDQUFDcEIsSUFBakIsQ0FBSixFQUE0QjtBQUN4QixlQUFPO0FBQ0hpRixXQUFDLEVBQUU3RCxDQUFDLENBQUNnRixPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUFiLEdBQXVCSixFQUR2QjtBQUVIZCxXQUFDLEVBQUUvRCxDQUFDLENBQUNnRixPQUFGLENBQVUsQ0FBVixFQUFhRSxPQUFiLEdBQXVCSjtBQUZ2QixTQUFQO0FBSUgsT0FMRCxNQUtPO0FBQ0gsZUFBTztBQUNIakIsV0FBQyxFQUFFN0QsQ0FBQyxDQUFDaUYsT0FBRixHQUFZSixFQURaO0FBRUhkLFdBQUMsRUFBRS9ELENBQUMsQ0FBQ2tGLE9BQUYsR0FBWUo7QUFGWixTQUFQO0FBSUg7QUFDSiIsImZpbGUiOiJub3Rlcy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi91dGlscyc7XHJcbmZ1bmN0aW9uIE5hdkJhckl0ZW1BZGQoe3ByZWZpeCwgaWNvbnMsIGFkZEl0ZW19KXtcclxuICAgIHJldHVybiBoKCdidXR0b24nLHtcclxuICAgICAgICBrZXk6IGAke3ByZWZpeH0tLW5hdmJhcl9faXRlbS0tYWRkYCxcclxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbmF2YmFyX19pdGVtLS1hZGRgLFxyXG4gICAgICAgIG9uQ2xpY2s6ICgpPT5hZGRJdGVtKCksXHJcbiAgICB9LCBpY29ucy5hZGQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhckl0ZW1BZGQ7IiwiaW1wb3J0IHsgaCB9IGZyb20gJy4vdXRpbHMnO1xyXG5mdW5jdGlvbiBOYXZCYXJJdGVtKHtwcmVmaXgsIGljb25zLGluZGV4LCBjb2xvciwgdGV4dCwgc2VsZWN0SXRlbSwgZGVsZXRlSXRlbX0pe1xyXG4gICAgcmV0dXJuIGgoJ3NwYW4nLHtcclxuICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbmF2YmFyX19pdGVtYCxcclxuICAgICAgICBzdHlsZTp7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JcclxuICAgICAgICB9XHJcbiAgICB9LFtcclxuICAgICAgICBoKCdidXR0b24nLHtcclxuICAgICAgICAgICAga2V5OiBgbmF2YmFyLWl0ZW1fXyR7aW5kZXh9LS1zZWxlY3RgLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbmF2YmFyX19pdGVtLS1zZWxlY3RgLFxyXG4gICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgICAgICAgICAgb25DbGljazogKCk9PnNlbGVjdEl0ZW0oaW5kZXgsIHtzZWxlY3RlZDp0cnVlfSlcclxuICAgICAgICB9LCB0ZXh0P3RleHQ6Jy4uLicpLFxyXG4gICAgICAgIGgoJ2J1dHRvbicse1xyXG4gICAgICAgICAgICBrZXk6IGBuYXZiYXItaXRlbV9fJHtpbmRleH0tLWRlbGV0ZWAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbmF2YmFyX19pdGVtLS1kZWxldGVgLFxyXG4gICAgICAgICAgICBvbkNsaWNrOiAoKT0+ZGVsZXRlSXRlbShpbmRleCwge3NlbGVjdGVkOnRydWV9KSxcclxuICAgICAgICB9LCAneCcpLFxyXG4gICAgXSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFySXRlbTsiLCJpbXBvcnQgeyBoIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCBOYXZCYXJJdGVtIGZyb20gJy4vbmF2YmFyLWl0ZW0nO1xyXG5pbXBvcnQgTmF2QmFySXRlbUFkZCBmcm9tICcuL25hdmJhci1pdGVtLWFkZCc7XHJcbmZ1bmN0aW9uIE5hdkJhcih7cHJlZml4LCBpdGVtcywgYWRkSXRlbSwgc2VsZWN0SXRlbSwgZGVsZXRlSXRlbSwgaWNvbnMsIGRpc3BsYXlGb290ZXJ9KXtcclxuICAgIHJldHVybiBoKCdkaXYnLHtcclxuICAgICAgICBjbGFzc05hbWU6YCR7cHJlZml4fS0tbmF2YmFyYCxcclxuICAgIH0sW1xyXG4gICAgICAgIGRpc3BsYXlGb290ZXImJml0ZW1zP2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpPT5cclxuICAgICAgICAgICAgaChOYXZCYXJJdGVtLHtcclxuICAgICAgICAgICAgICAgIGtleTogYG5hdmJhci1pdGVtX18ke2luZGV4fWAsXHJcbiAgICAgICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgICAgIHByZWZpeCxcclxuICAgICAgICAgICAgICAgIGljb25zLFxyXG4gICAgICAgICAgICAgICAgdGV4dDppdGVtLnRleHQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjppdGVtLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0SXRlbSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW1cclxuICAgICAgICAgICAgfSxpdGVtLnRleHQpXHJcbiAgICAgICAgKTpudWxsLFxyXG4gICAgICAgIGgoTmF2QmFySXRlbUFkZCx7XHJcbiAgICAgICAgICAgIGtleTogYG5hdmJhci1pdGVtX19hZGRgLFxyXG4gICAgICAgICAgICBwcmVmaXgsXHJcbiAgICAgICAgICAgIGljb25zLFxyXG4gICAgICAgICAgICBhZGRJdGVtLFxyXG4gICAgICAgIH0pXHJcbiAgICBdKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi91dGlscy9kcmFnZ2FibGUnO1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vdXRpbHMnO1xuY2xhc3MgTm90ZURyYWdnYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGRyYWdnYWJsZSA9IG51bGxcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZT0ge1xuXHRcdFx0YWN0aXZlOiBwcm9wcy5zZWxlY3RlZCxcblx0XHRcdG9wdGlvbnM6IHt9XG5cdFx0fVxuXHRcdHRoaXMuZWxlbWVudCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXHRcdHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSgpO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGVsID0gdGhpcy5lbGVtZW50P3RoaXMuZWxlbWVudC5jdXJyZW50Om51bGw7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRcdGVsZW1lbnQ6IGVsLCBcblx0XHRcdHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uLFxuXHRcdFx0b25EcmFnQ29tcGxldGU6dGhpcy5wcm9wcy5vbkRyYWdDb21wbGV0ZSxcblx0XHRcdG9uSW5pdDp0aGlzLnByb3BzLm9uSW5pdFxuXHRcdH07XG5cdFx0dGhpcy5zZXRTdGF0ZSh7b3B0aW9uc30sICgpPT4ge1xuXHRcdFx0dGhpcy5kcmFnZ2FibGUuaW5pdChvcHRpb25zKTtcblx0XHR9KVxuXHR9XG5cdG9uTW91c2VEb3duID0gKGUpID0+IHtcblx0XHRpZih0aGlzLnN0YXRlLmFjdGl2ZSYmZS50YXJnZXQ9PT10aGlzLnByb3BzLnRhcmdldC5jdXJyZW50KXtcblx0XHRcdHRoaXMuZHJhZ2dhYmxlLm9uTW91c2VEb3duKGUpO1xuXHRcdH1cblx0fVxuXHRvbkNsaWNrID0gKGUpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFjdGl2ZTogdHJ1ZVxuXHRcdH0sICgpPT57XG5cdFx0XHR0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMuc3RhdGUuYWN0aXZlKTtcblx0XHR9KVxuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0aCgnZGl2Jywge1xuXHRcdFx0XHRjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuXHRcdFx0XHRzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSxcblx0XHRcdFx0cmVmOiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdG9uQ2xpY2s6IHRoaXMub25DbGljayxcblx0XHRcdFx0b25Nb3VzZURvd246dGhpcy5vbk1vdXNlRG93blxuXHRcdFx0fSwgXG5cdFx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHRcdClcblx0XHQpO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBOb3RlRHJhZ2dhYmxlO1xuIiwiaW1wb3J0IHsgaCwgZ2V0RWxlbWVudFN0eWxlIH0gZnJvbSAnLi91dGlscyc7XG5mdW5jdGlvbiBOb3RlSGVhZGVyKHsgaW5kZXgsIHByZWZpeCwgc2VsZWN0ZWQsIGFkZEl0ZW0sIGRlbGV0ZUl0ZW0sIHNldFRvZ2dsZSwgcG9zaXRpb24sIHRpdGxlLCB0YXJnZXRSZWYsIGljb25zIH0pIHtcbiAgICByZXR1cm4gaCgnZGl2Jyx7XG4gICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1oZWFkZXIgJHtzZWxlY3RlZD9wcmVmaXgrJy0taGVhZGVyX19zZWxlY3RlZCc6Jyd9YCxcbiAgICAgICAgc3R5bGU6IGdldEVsZW1lbnRTdHlsZSgnbm90ZS1oZWFkZXInLHtzZWxlY3RlZH0pXG4gICAgfSxbXG4gICAgICAgIGgoJ2J1dHRvbicse1xuICAgICAgICAgICAga2V5OiAnbm90ZS1oZWFkZXItYnV0dG9uLTEnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLWhlYWRlcl9fYnV0dG9uLS1hZGRgLFxuICAgICAgICAgICAgb25DbGljazooKT0+YWRkSXRlbSh7aW5kZXgsIHBvc2l0aW9uLCBzZWxlY3RlZDogdHJ1ZX0pXG4gICAgICAgIH0sIFxuICAgICAgICAgICAgaWNvbnMuYWRkXG4gICAgICAgICksXG4gICAgICAgIGgoJ2J1dHRvbicse1xuICAgICAgICAgICAga2V5OiAnbm90ZS1oZWFkZXItYnV0dG9uLTInLFxuICAgICAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLWhlYWRlcl9fYnV0dG9uLS10aXRsZWAsXG4gICAgICAgICAgICByZWY6IHRhcmdldFJlZlxuICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU/dGl0bGU6XCIuLi5cIlxuICAgICAgICApLFxuICAgICAgICBoKCdidXR0b24nLHtcbiAgICAgICAgICAgIGtleTogJ25vdGUtaGVhZGVyLWJ1dHRvbi0zJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1oZWFkZXJfX2J1dHRvbi0tbWVudWAsXG4gICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRUb2dnbGUoaW5kZXgrMSlcbiAgICAgICAgfSwgXG4gICAgICAgICAgICBpY29ucy5tZW51XG4gICAgICAgICksXG4gICAgICAgIGgoJ2J1dHRvbicse1xuICAgICAgICAgICAga2V5OiAnbm90ZS1oZWFkZXItYnV0dG9uLTQnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOmAke3ByZWZpeH0tLWhlYWRlcl9fYnV0dG9uLS10cmFzaGAsXG4gICAgICAgICAgICBvbkNsaWNrOigpPT5kZWxldGVJdGVtKGluZGV4KVxuICAgICAgICB9LCBcbiAgICAgICAgICAgIGljb25zLnRyYXNoXG4gICAgICAgICksXG4gICAgXSlcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVIZWFkZXI7XG4iLCJpbXBvcnQgeyBoLCBnZXRFbGVtZW50U3R5bGUgfSBmcm9tICcuL3V0aWxzJ1xuZnVuY3Rpb24gTm90ZU1lbnUoeyBpbmRleCwgcHJlZml4LCBjb2xvciwgY29sb3JDb2Rlcywgc2V0Q29sb3IgfSkge1xuICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7cHJlZml4fS0tY29sb3JzYCxcbiAgICAgICAgc3R5bGU6IGdldEVsZW1lbnRTdHlsZSgnbm90ZS1tZW51JylcbiAgICB9LCBcbiAgICAgICAgY29sb3JDb2Rlcy5tYXAoKGNvbG9yQ29kZSkgPT4gIGgoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGtleTogY29sb3JDb2RlLFxuICAgICAgICAgICAgb25DbGljazogKCkgPT4gc2V0Q29sb3IoaW5kZXgsIGNvbG9yQ29kZSksXG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke3ByZWZpeH0tLWNvbG9yc19fY29sb3IgJHtjb2xvciA9PT0gY29sb3JDb2RlID8gcHJlZml4ICsgJy0tY29sb3JzX19jb2xvci0tc2VsZWN0ZWQnIDogJyd9YCxcbiAgICAgICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ25vdGUtY29sb3Itc2VsZWN0b3InLCB7Y29sb3JDb2RlfSlcbiAgICAgICAgfSwgY29sb3JDb2RlIClcbiAgICApKVxufVxuZXhwb3J0IGRlZmF1bHQgTm90ZU1lbnU7IiwiaW1wb3J0IHsgaCwgbmxUb0JyLCBnZXRFbGVtZW50U3R5bGUgfSBmcm9tICcuL3V0aWxzJ1xuZnVuY3Rpb24gTm90ZVRleHQoeyBpbmRleCwgcHJlZml4LCB0ZXh0LCB1cGRhdGVJdGVtIH0pIHtcbiAgICByZXR1cm4gaCgnZGl2Jyx7XG4gICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS10ZXh0YCxcbiAgICAgICAgcGxhY2Vob2xkZXI6XCJyZWFjdC1ob29rc1wiLFxuICAgICAgICBjb250ZW50RWRpdGFibGU6XCJ0cnVlXCIsXG4gICAgICAgIG9uQmx1cjooZSk9PnVwZGF0ZUl0ZW0oaW5kZXgsIHtcbiAgICAgICAgICAgIHRpdGxlOiBTdHJpbmcoZS50YXJnZXQuaW5uZXJUZXh0KS5zdWJzdHIoMCwxMCksXG4gICAgICAgICAgICB0ZXh0OiBlLnRhcmdldC5pbm5lclRleHRcbiAgICAgICAgfSksXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6bmxUb0JyKHRleHQpfSxcbiAgICAgICAgc3R5bGU6IGdldEVsZW1lbnRTdHlsZSgnbm90ZS1pbnB1dCcpXG4gICAgfSlcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVUZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm90ZUhlYWRlciBmcm9tICcuL25vdGUtaGVhZGVyJztcbmltcG9ydCBOb3RlVGV4dCBmcm9tICcuL25vdGUtdGV4dCc7XG5pbXBvcnQgTm90ZU1lbnUgZnJvbSAnLi9ub3RlLW1lbnUnO1xuaW1wb3J0IE5vdGVEcmFnZ2FibGUgZnJvbSAnLi9ub3RlLWRyYWdnYWJsZSc7XG5pbXBvcnQgeyBoLCBnZXRFbGVtZW50U3R5bGUgfSBmcm9tICcuL3V0aWxzJztcbmNsYXNzIE5vdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudGFyZ2V0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgIFx0Y29uc3QgeyBpbmRleCwgc2VsZWN0ZWQsIHdpZHRoLCBoZWlnaHQsIGNvbnRhaW5lckhlaWdodCwgdG9nZ2xlLCBzZXRUb2dnbGUsIHByZWZpeCwgdGl0bGUsIHRleHQsIGNvbG9yLCBzZXRDb2xvciwgYWRkSXRlbSwgdXBkYXRlSXRlbSwgc2VsZWN0SXRlbSwgZGVsZXRlSXRlbSwgY29sb3JDb2RlcywgcG9zaXRpb24sIGljb25zIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gaChOb3RlRHJhZ2dhYmxlLHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1ub3RlICR7c2VsZWN0ZWQ/cHJlZml4KyctLW5vdGVfX3NlbGVjdGVkJzonJ31gLFxuICAgICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy50YXJnZXRSZWYsXG4gICAgICAgICAgICBvbkRyYWdDb21wbGV0ZToocG9zaXRpb24pPT51cGRhdGVJdGVtKGluZGV4LCB7cG9zaXRpb259KSxcbiAgICAgICAgICAgIG9uSW5pdDoob3B0aW9ucyk9PnVwZGF0ZUl0ZW0oaW5kZXgsIG9wdGlvbnMpLFxuICAgICAgICAgICAgb25TZWxlY3Q6KGFjdGl2ZSk9PnNlbGVjdEl0ZW0oaW5kZXgsIHtzZWxlY3RlZDphY3RpdmV9KSxcbiAgICAgICAgICAgIHN0eWxlOiBnZXRFbGVtZW50U3R5bGUoJ25vdGUnLCB0aGlzLnByb3BzKVxuICAgICAgICB9LFtcbiAgICAgICAgICAgIGgoTm90ZUhlYWRlciwge1xuICAgICAgICAgICAgICAgIGtleTonbm90ZS1oZWFkZXInLFxuICAgICAgICAgICAgICAgIHRhcmdldFJlZjogdGhpcy50YXJnZXRSZWYsXG4gICAgICAgICAgICAgICAgaW5kZXgsIFxuICAgICAgICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCwgXG4gICAgICAgICAgICAgICAgaWNvbnMsXG4gICAgICAgICAgICAgICAgYWRkSXRlbSwgXG4gICAgICAgICAgICAgICAgZGVsZXRlSXRlbSwgXG4gICAgICAgICAgICAgICAgc2V0VG9nZ2xlLCBcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiwgXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaCgnZGl2Jyx7XG4gICAgICAgICAgICAgICAga2V5Oidub3RlLWJvZHknLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTpgJHtwcmVmaXh9LS1ub3RlX19ib2R5YCxcbiAgICAgICAgICAgICAgICBzdHlsZTogZ2V0RWxlbWVudFN0eWxlKCdub3RlLWJvZHknLCB0aGlzLnByb3BzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0b2dnbGU9PT1pbmRleCsxJiZzZWxlY3RlZCYmY29sb3JDb2Rlcz9cbiAgICAgICAgICAgICAgICBoKE5vdGVNZW51LCB7IFxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdub3RlLW1lbnUnLCBcbiAgICAgICAgICAgICAgICAgICAgY29sb3JDb2RlcywgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW0sIFxuICAgICAgICAgICAgICAgICAgICBpbmRleCwgXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCwgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yLCBcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3IsIFxuICAgICAgICAgICAgICAgICAgICBjb2xvckNvZGVzXG4gICAgICAgICAgICAgICAgfSk6XG4gICAgICAgICAgICAgICAgaChOb3RlVGV4dCwgeyBcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbm90ZS10ZXh0JywgXG4gICAgICAgICAgICAgICAgICAgIGluZGV4LCBcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4LCBcbiAgICAgICAgICAgICAgICAgICAgdGV4dCwgXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgIFxuICAgICAgICBdKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOb3RlIGZyb20gJy4vbm90ZSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7IGgsIGdldEVsZW1lbnRTdHlsZSB9IGZyb20gJy4vdXRpbHMnO1xuY2xhc3MgTm90ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2dnbGU6ZmFsc2UsXG4gICAgICAgICAgICBjb250YWluZXJXaWR0aDogMCxcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodDogMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90ZXNDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgaWYodGhpcy5ub3Rlc0NvbnRhaW5lciAmJiB0aGlzLm5vdGVzQ29udGFpbmVyLmN1cnJlbnQpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGg6IHRoaXMubm90ZXNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgICAgICBjb250YWluZXJIZWlnaHQ6IHRoaXMubm90ZXNDb250YWluZXIuY3VycmVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNldFRvZ2dsZSA9ICh0b2dnbGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0b2dnbGU6IHRoaXMuc3RhdGUudG9nZ2xlPT09dG9nZ2xlP2ZhbHNlOnRvZ2dsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0Q29sb3IgPSAoaW5kZXgsIGNvbG9yKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVJdGVtKGluZGV4LHtjb2xvcn0pXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7cHJlZml4LCBhZGRJdGVtLCB1cGRhdGVJdGVtLCBzZWxlY3RJdGVtLCBkZWxldGVJdGVtLCBjb2xvckNvZGVzLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0LCB3aWR0aCwgaGVpZ2h0LCBiYWNrZ3JvdW5kQ29sb3IsIGljb25zLCBpdGVtcywgZGlzcGxheUZvb3Rlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGtleTogcHJlZml4LCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeCxcbiAgICAgICAgICAgICAgICByZWY6IHRoaXMubm90ZXNDb250YWluZXIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IGdldEVsZW1lbnRTdHlsZSgnY29udGFpbmVyJywgdGhpcy5wcm9wcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBpdGVtcz9pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KT0+XG4gICAgICAgICAgICAgICAgICAgIGgoTm90ZSx7IFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDppdGVtcy5sZW5ndGgsIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCwgXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEl0ZW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlSXRlbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvckNvZGVzLCAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU6dGhpcy5zdGF0ZS50b2dnbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGU6dGhpcy5zZXRUb2dnbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvcjp0aGlzLnNldENvbG9yXG4gICAgICAgICAgICAgICAgICAgIH0sbnVsbClcbiAgICAgICAgICAgICAgICApOm51bGwsXG4gICAgICAgICAgICAgICAgaChOYXZCYXIse1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke3ByZWZpeH0tLW5hdmJhcmAsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGb290ZXIsXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBhZGRJdGVtLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICBkZWxldGVJdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgXVxuICAgICAgICApXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUge1xuICAgIGluaXRpYWxYID0gMDtcbiAgICBpbml0aWFsWSA9IDA7XG4gICAgY3VycmVudFggPSAwO1xuICAgIGN1cnJlbnRZID0gMDtcbiAgICBpbml0KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLyppZihvcHRpb25zLnBvc2l0aW9uKXtcbiAgICAgICAgICAgIHRoaXMueE9mZnNldCA9IG9wdGlvbnMucG9zaXRpb24ueDtcbiAgICAgICAgICAgIHRoaXMueU9mZnNldCA9IG9wdGlvbnMucG9zaXRpb24ueTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKG9wdGlvbnMucG9zaXRpb24ueCxvcHRpb25zLnBvc2l0aW9uLnkpO1xuICAgICAgICB9Ki9cbiAgICB9XG4gICAgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5vcHRpb25zLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlLCB0aGlzLmluaXRpYWxYLCB0aGlzLmluaXRpYWxZKTtcbiAgICAgICAgdGhpcy5jdXJyZW50WCA9IHBvc2l0aW9uLng7XG4gICAgICAgIHRoaXMuY3VycmVudFkgPSBwb3NpdGlvbi55O1xuICAgICAgICBjb25zdCB4MSA9IHRoaXMub3B0aW9ucy5lbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgtdGhpcy5vcHRpb25zLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IHkxID0gdGhpcy5vcHRpb25zLmVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQtdGhpcy5vcHRpb25zLmVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYPDAgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRZPDAgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmKCB0aGlzLmN1cnJlbnRYPngxICl7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRYID0geDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIHRoaXMuY3VycmVudFk+eTEgKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFkgPSB5MTtcbiAgICAgICAgICAgIGlmKGVsLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0PGVsLm9mZnNldEhlaWdodCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50WSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmN1cnJlbnRYLCB0aGlzLmN1cnJlbnRZKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24gPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMub3B0aW9ucy5lbGVtZW50O1xuICAgICAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbihlLCByZWN0LngsIHJlY3QueSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFggPSBwb3NpdGlvbi54O1xuICAgICAgICB0aGlzLmluaXRpYWxZID0gcG9zaXRpb24ueTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSwgbnVsbCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcCwgbnVsbCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMub25EcmFnQ29tcGxldGUpe1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uRHJhZ0NvbXBsZXRlLmNhbGwodGhpcywge1xuICAgICAgICAgICAgICAgIHg6dGhpcy5jdXJyZW50WCxcbiAgICAgICAgICAgICAgICB5OnRoaXMuY3VycmVudFlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAsIG51bGwpO1xuICAgIH1cbiAgICBzZXRUcmFuc2xhdGUoeCwgeSkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMuZWxlbWVudCl7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCR7eX1weCwwKWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UG9zaXRpb24oZSwgZHgsIGR5KXtcbiAgICAgICAgaWYgKCgvdG91Y2gvKS50ZXN0KGUudHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogZS50b3VjaGVzWzBdLmNsaWVudFggLSBkeCxcbiAgICAgICAgICAgICAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGR5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFggLSBkeCxcbiAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFkgLSBkeVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=