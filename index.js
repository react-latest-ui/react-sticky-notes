module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/react-sticky-notes/index.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/components/react-sticky-notes/index.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes shadowanim {\n  0% {\n    box-shadow: 0px 0px 0px 25px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 15px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; }\n  20% {\n    opacity: 0.9; }\n  50% {\n    opacity: 1; }\n  70% {\n    opacity: 0.9; }\n  100% {\n    box-shadow: 0px 0px 0px 0px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; } }\n\n.rs-notes {\n  color: #ffffff;\n  text-align: left; }\n  .rs-notes *, .rs-notes *::before, .rs-notes *::after {\n    box-sizing: border-box; }\n  .rs-notes--note.draggable {\n    z-index: 9; }\n  .rs-notes--navbar {\n    white-space: nowrap;\n    display: flex;\n    justify-content: space-between;\n    background-color: #999999; }\n    @media screen and (max-width: 800px) {\n      .rs-notes--navbar {\n        flex-direction: column-reverse; } }\n    .rs-notes--navbar__nav {\n      display: flex;\n      flex-wrap: wrap; }\n    .rs-notes--navbar__options {\n      display: flex; }\n    .rs-notes--navbar__item {\n      display: flex;\n      flex-grow: 1;\n      position: relative;\n      vertical-align: middle;\n      overflow: hidden; }\n      .rs-notes--navbar__item:before {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        pointer-events: none;\n        background-color: rgba(0, 0, 0, 0.15); }\n      .rs-notes--navbar__item--button {\n        cursor: pointer;\n        opacity: .8;\n        background: none;\n        border: none;\n        color: #fff;\n        padding: 3px 5px; }\n        .rs-notes--navbar__item--button__title {\n          text-align: left;\n          flex-grow: 1;\n          min-width: 80px; }\n        .rs-notes--navbar__item--button:hover, .rs-notes--navbar__item--button:focus {\n          opacity: 1;\n          background-color: rgba(0, 0, 0, 0.15); }\n  .rs-notes--header {\n    position: relative;\n    display: flex;\n    transition: all .3s linear;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.25); }\n    .rs-notes--header svg {\n      line-height: 1;\n      vertical-align: middle; }\n    .rs-notes--header:before {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      background-color: rgba(0, 0, 0, 0.15); }\n    .rs-notes--header--button {\n      cursor: pointer;\n      line-height: 30px;\n      background: none;\n      border: none;\n      transition: all .2s linear;\n      padding: 5px;\n      color: rgba(255, 255, 255, 0.75);\n      width: 32px; }\n      .rs-notes--header--button__title {\n        flex-grow: 1;\n        line-height: 30px;\n        text-align: left;\n        user-select: none;\n        cursor: move; }\n      .rs-notes--header--button:hover, .rs-notes--header--button:focus {\n        background-color: rgba(0, 0, 0, 0.25);\n        outline: none; }\n      .rs-notes--header--button:disabled {\n        cursor: not-allowed; }\n  .rs-notes--text {\n    padding: 10px;\n    font-size: 12px;\n    width: 100%; }\n    .rs-notes--text:empty::before {\n      color: rgba(255, 255, 255, 0.75);\n      content: 'Add your notes...'; }\n  .rs-notes--colors {\n    flex-grow: 1; }\n    .rs-notes--colors__color {\n      text-indent: -99999px;\n      cursor: pointer;\n      margin: 1px;\n      width: 3.6em;\n      height: 3.6em;\n      border-radius: 50%;\n      border: none;\n      outline: none;\n      transition: all 0.4s linear;\n      box-shadow: 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15); }\n      .rs-notes--colors__color:hover, .rs-notes--colors__color:focus {\n        box-shadow: 0px 0px 0px 10px inset rgba(0, 0, 0, 0.15); }\n      .rs-notes--colors__color--selected {\n        animation-name: shadowanim;\n        animation-duration: 2s;\n        animation-iteration-count: 100;\n        opacity: .75; }\n  .rs-notes--note__bubble {\n    cursor: move;\n    border: none;\n    outline: none;\n    position: relative; }\n    .rs-notes--note__bubble::before {\n      display: block;\n      opacity: 0;\n      content: attr(title);\n      transform: translate(-50%, -50%);\n      transform-origin: 0 0;\n      transition: all linear .4s;\n      overflow: hidden;\n      background-color: var(--background-color);\n      white-space: nowrap;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      padding: 5px 8px;\n      border-radius: 5px;\n      color: rgba(255, 255, 255, 0.75);\n      font-size: .9em; }\n    .rs-notes--note__bubble:hover::before {\n      opacity: 1; }\n    .rs-notes--note__bubble:focus, .rs-notes--note__bubble:active {\n      opacity: .5;\n      z-index: 9999; }\n  .rs-notes--file-upload {\n    position: relative;\n    min-height: 100%;\n    display: flex;\n    flex-direction: column; }\n  .rs-notes p {\n    margin: 5px 0; }\n  .rs-notes--file-preview {\n    text-align: left;\n    overflow: auto;\n    width: 100%;\n    border: none;\n    resize: none;\n    flex-grow: 1;\n    min-height: 150px; }\n  .rs-notes--file-drop {\n    padding: 30px;\n    position: relative;\n    background-color: #eeeeee;\n    color: #999999;\n    outline: 2px dashed #999999;\n    outline-offset: -10px;\n    transition: outline-offset .15s ease-in-out, background-color .15s linear;\n    text-align: center; }\n    .rs-notes--file-drop:hover {\n      outline-offset: -20px;\n      outline-color: #cccccc;\n      background-color: #ffffff; }\n    .rs-notes--file-drop__cover {\n      flex-grow: 1; }\n  .rs-notes--upload-link {\n    font-size: 1.25rem; }\n  .rs-notes--file-input {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 0; }\n  .rs-notes--file-label {\n    position: relative;\n    cursor: pointer;\n    color: #666666; }\n    .rs-notes--file-label:hover {\n      color: #999999; }\n  .rs-notes--upload-actions {\n    padding: 24px; }\n  .rs-notes--form-cancel, .rs-notes--form-save {\n    padding: 8px 15px;\n    border: none;\n    background: #999999;\n    color: #ffffff;\n    cursor: pointer; }\n    .rs-notes--form-cancel:hover, .rs-notes--form-save:hover {\n      background: rgba(0, 0, 0, 0.15); }\n  .rs-notes--upload-error {\n    background-color: #cc0000;\n    font-size: .85em;\n    color: #fff;\n    padding: 3px 5px; }\n  .rs-notes--upload-actions {\n    text-align: center; }\n  .rs-notes--notes-area {\n    position: relative;\n    width: calc(100% - 15px);\n    height: 100%;\n    margin-left: 15px;\n    z-index: 1; }\n  .rs-notes--notes-colors {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 0; }\n    .rs-notes--notes-colors__color {\n      position: relative;\n      opacity: 0.8;\n      width: 100%;\n      height: var(--height);\n      border-bottom: 1px solid var(--background-color); }\n      .rs-notes--notes-colors__color::before {\n        background-color: var(--background-color);\n        width: 15px;\n        height: 100%;\n        display: block;\n        position: absolute;\n        top: 1px;\n        left: 0;\n        content: ''; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/components/react-sticky-notes/buttons/index.js":
/*!************************************************************!*\
  !*** ./src/components/react-sticky-notes/buttons/index.js ***!
  \************************************************************/
/*! exports provided: ButtonAdd, ButtonTitle, ButtonMenu, ButtonHideShow, ButtonTrash, ButtonPageView, ButtonUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAdd", function() { return ButtonAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTitle", function() { return ButtonTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonMenu", function() { return ButtonMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonHideShow", function() { return ButtonHideShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonTrash", function() { return ButtonTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonPageView", function() { return ButtonPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonUpload", function() { return ButtonUpload; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");

function ButtonAdd(_ref) {
  var prefix = _ref.prefix,
      data = _ref.data,
      icons = _ref.icons,
      callbacks = _ref.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__add"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__add"),
    onClick: function onClick(e) {
      return callbacks.addItem(e, {
        id: data ? data.id : null,
        position: data ? data.position : null,
        selected: true
      });
    }
  }, icons.add);
}
function ButtonTitle(_ref2) {
  var prefix = _ref2.prefix,
      data = _ref2.data,
      targetRef = _ref2.targetRef,
      callbacks = _ref2.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__title"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__title"),
    ref: targetRef,
    onClick: function onClick(e) {
      return callbacks.updateItem(e, {
        id: data ? data.id : null,
        menu: false,
        selected: true,
        hidden: false
      });
    }
  }, data.title ? data.title : Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getNoteTitle"])(data));
}
function ButtonMenu(_ref3) {
  var prefix = _ref3.prefix,
      data = _ref3.data,
      icons = _ref3.icons,
      callbacks = _ref3.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__menu"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__menu"),
    onClick: function onClick(e) {
      return callbacks.updateItem(e, {
        id: data ? data.id : null,
        menu: !data.menu,
        selected: true
      });
    }
  }, icons.menu);
}
function ButtonHideShow(_ref4) {
  var prefix = _ref4.prefix,
      data = _ref4.data,
      icons = _ref4.icons,
      callbacks = _ref4.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__hideshow"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__hideshow"),
    onClick: function onClick(e) {
      return callbacks.updateItem(e, {
        id: data ? data.id : null,
        hidden: !data.hidden
      });
    }
  }, data.hidden ? icons.hide : icons.show);
}
function ButtonTrash(_ref5) {
  var prefix = _ref5.prefix,
      data = _ref5.data,
      icons = _ref5.icons,
      callbacks = _ref5.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__trash"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__trash"),
    onClick: function onClick(e) {
      return callbacks.deleteItem(e, {
        id: data ? data.id : null
      });
    }
  }, icons.trash);
}
function ButtonPageView(_ref6) {
  var prefix = _ref6.prefix,
      icons = _ref6.icons,
      callbacks = _ref6.callbacks,
      viewSize = _ref6.viewSize;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__pageview"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__pageview"),
    onClick: function onClick(e) {
      return callbacks.changeView(e);
    }
  }, icons[viewSize] ? icons[viewSize] : "icons.".concat(viewSize));
}
function ButtonUpload(_ref7) {
  var prefix = _ref7.prefix,
      icons = _ref7.icons,
      callbacks = _ref7.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
    key: "".concat(prefix, "--button__upload"),
    className: "".concat(prefix, "--button ").concat(prefix, "--button__upload"),
    onClick: function onClick(e) {
      return callbacks.changeModal(e, 'upload');
    }
  }, icons.upload);
}

/***/ }),

/***/ "./src/components/react-sticky-notes/icons/index.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/icons/index.js ***!
  \**********************************************************/
/*! exports provided: add, trash, menu, hide, show, normalview, bubbleview, pageview, upload, fullscreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trash", function() { return trash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalview", function() { return normalview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleview", function() { return bubbleview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullscreen", function() { return fullscreen; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");

var iconsClassName = "material-icons";
var add = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'add');
var trash = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'delete_outlined');
var menu = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'more_horiz');
var hide = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'visibility_off');
var show = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'minimize');
var normalview = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'widgets');
var bubbleview = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'grain');
var pageview = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'fullscreen');
var upload = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'cloud_upload');
var fullscreen = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('i', {
  className: iconsClassName,
  style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('icon')
}, 'fullscreen_exit');

/***/ }),

/***/ "./src/components/react-sticky-notes/index.js":
/*!****************************************************!*\
  !*** ./src/components/react-sticky-notes/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/reducer */ "./src/components/react-sticky-notes/reducers/reducer.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/components/react-sticky-notes/icons/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views */ "./src/components/react-sticky-notes/views/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals */ "./src/components/react-sticky-notes/modals/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var ReactStickyNotes =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactStickyNotes, _Component);

  function ReactStickyNotes(props) {
    var _this;

    _classCallCheck(this, ReactStickyNotes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactStickyNotes).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "dispatch", function (options) {
      var type = options.type,
          payload = options.payload;

      if (_this.props.onBeforeChange) {
        payload = _this.props.onBeforeChange(type, payload, _toConsumableArray(_this.state.items));
      }

      _this.setState(Object(_reducers_reducer__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state, {
        type: type,
        payload: payload
      }), function () {
        if (_this.props.sessionKey) {
          localStorage.setItem(_this.props.sessionKey, JSON.stringify(_this.state.items));
        }

        if (_this.props.onChange) {
          _this.props.onChange(type, payload, _toConsumableArray(_this.state.items));
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addItem", function (e, data) {
      var items = _this.state.items;
      var index = data ? items.findIndex(function (item) {
        return item.id === data.id;
      }) + 1 : items.length;

      _this.dispatch({
        type: 'add',
        payload: {
          index: index,
          data: {
            id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUUID"])(),
            color: _this.getColor(),
            text: '',
            selected: true,
            position: {
              x: 0,
              y: 0
            }
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateItem", function (e, data) {
      _this.dispatch({
        type: 'update',
        payload: {
          data: data
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteItem", function (e, data) {
      _this.dispatch({
        type: 'delete',
        payload: {
          data: data
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeView", function (e) {
      _this.dispatch({
        type: 'changeview'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeModal", function (e, modal) {
      _this.dispatch({
        type: 'changemodal',
        payload: {
          modal: modal
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "saveJSON", function (e, json) {
      _this.dispatch({
        type: 'import',
        payload: {
          items: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getNotes"])(_this.props.colorCodes, json)
        }
      });
    });

    _this.state = {
      modal: null,
      viewSize: 'normalview',
      items: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getNotes"])(props.colorCodes, props.notes)
    };
    return _this;
  }

  _createClass(ReactStickyNotes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.useCSS) {
        __webpack_require__(/*! ./index.scss */ "./src/components/react-sticky-notes/index.scss");
      }

      if (this.props.useMaterialIcons) {
        var stylesheet = document.createElement('link');
        stylesheet.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
        stylesheet.rel = "stylesheet";
        stylesheet.id = "material-icons-css";

        if (!document.getElementById('material-icons-css')) {
          document.head.appendChild(stylesheet);
        }
      }
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.props.colorCodes[Math.floor(Math.random() * this.props.colorCodes.length)];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          viewSize = _this$state.viewSize,
          modal = _this$state.modal;
      var View = null;

      if (modal) {
        switch (modal) {
          case "upload":
            View = _modals__WEBPACK_IMPORTED_MODULE_5__["UploadModal"];
            break;
        }
      } else {
        switch (viewSize) {
          case "pageview":
            View = _views__WEBPACK_IMPORTED_MODULE_4__["PageView"];
            break;

          case "bubbleview":
            View = _views__WEBPACK_IMPORTED_MODULE_4__["BubbleView"];
            break;

          case "fullscreen":
            View = _views__WEBPACK_IMPORTED_MODULE_4__["FullscreenView"];
            break;

          default:
            View = _views__WEBPACK_IMPORTED_MODULE_4__["NormalView"];
            break;
        }
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["h"])(View, _objectSpread({}, this.props, {
        items: items,
        icons: _objectSpread({}, _icons__WEBPACK_IMPORTED_MODULE_2__, this.props.icons),
        viewSize: viewSize,
        callbacks: {
          changeView: this.changeView,
          addItem: this.addItem,
          updateItem: this.updateItem,
          deleteItem: this.deleteItem,
          changeModal: this.changeModal,
          saveJSON: this.saveJSON
        }
      }));
    }
  }]);

  return ReactStickyNotes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ReactStickyNotes, "defaultProps", {
  useCSS: true,
  prefix: 'rs-notes',
  colorCodes: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getColorCodes"])(),
  navbar: true,
  sessionKey: 'react-sticky-notes',
  noteWidth: 220,
  noteHeight: 220,
  containerWidth: '100%',
  containerHeight: '100%',
  icons: _icons__WEBPACK_IMPORTED_MODULE_2__,
  useMaterialIcons: true
});

/* harmony default export */ __webpack_exports__["default"] = (ReactStickyNotes);

/***/ }),

/***/ "./src/components/react-sticky-notes/index.scss":
/*!******************************************************!*\
  !*** ./src/components/react-sticky-notes/index.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/components/react-sticky-notes/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/react-sticky-notes/modals/index.js":
/*!***********************************************************!*\
  !*** ./src/components/react-sticky-notes/modals/index.js ***!
  \***********************************************************/
/*! exports provided: UploadModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-modal */ "./src/components/react-sticky-notes/modals/upload-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadModal", function() { return _upload_modal__WEBPACK_IMPORTED_MODULE_0__["UploadModal"]; });



/***/ }),

/***/ "./src/components/react-sticky-notes/modals/upload-modal.js":
/*!******************************************************************!*\
  !*** ./src/components/react-sticky-notes/modals/upload-modal.js ***!
  \******************************************************************/
/*! exports provided: UploadModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModal", function() { return UploadModal; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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



var UploadModal =
/*#__PURE__*/
function (_Component) {
  _inherits(UploadModal, _Component);

  function UploadModal() {
    var _this;

    _classCallCheck(this, UploadModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UploadModal).call(this));

    _defineProperty(_assertThisInitialized(_this), "uploadFile", function (e) {
      var file = e.target.files[0];

      if (file) {
        if (file.type === 'application/json' || file.type === "application/vnd.ms-excel") {
          var reader = new FileReader();

          reader.onload = function (readerEvent) {
            var response, responseText;

            switch (file.type) {
              case "application/vnd.ms-excel":
                response = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["parseCSV"])(readerEvent.target.result);
                break;

              case "application/json":
                response = JSON.parse(readerEvent.target.result);
                break;
            }

            responseText = JSON.stringify(response, null, 4);

            _this.handleResponse(null, responseText, response);
          };

          reader.onerror = function (readerEvent) {
            this.handleResponse("File could not be read! Code " + readerEvent.target.error.code);
          };

          reader.readAsText(file);
        } else {
          _this.handleResponse("File type is not allowed. Please upload a JSON or CSV file.");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "saveJSON", function (e) {
      var response = _this.state.response;

      if (response) {
        _this.props.callbacks.saveJSON(e, response);
      }
    });

    _this.state = {
      error: '',
      response: null,
      contents: null
    };
    _this.jsonInput = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  _createClass(UploadModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResponse(null, null, null);
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(err, contents, response) {
      var error = err;

      if (response) {
        if (!Array.isArray(response)) {
          error = "Please upload a valid JSON or CSV file.";
          response = null;
          contents = null;
        }
      }

      this.setState({
        error: error,
        contents: contents,
        response: response
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          error = _this$state.error,
          contents = _this$state.contents;
      var props = this.props;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
        key: "".concat(props.prefix),
        className: "".concat(props.prefix, " ").concat(props.prefix, "--file-upload")
      }, [contents ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('textarea', {
        key: 'file-upload--contents',
        className: "".concat(props.prefix, "--file-preview"),
        readOnly: true,
        defaultValue: contents
      }) : null, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
        key: "".concat(props.prefix, "--file-drop"),
        className: "".concat(props.prefix, "--file-drop ").concat(!contents ? props.prefix + '--file-drop__cover' : '')
      }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('input', {
        key: 'upload-button',
        type: 'file',
        id: "".concat(props.prefix, "--file-input"),
        className: "".concat(props.prefix, "--file-input"),
        accept: ".json,.csv",
        onChange: function onChange(e) {
          return _this2.uploadFile(e);
        },
        placeholder: 'upload file'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('p', {
        key: 'upload-link',
        className: "".concat(props.prefix, "--upload-link")
      }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('label', {
        key: "choose-a-file",
        className: "".concat(props.prefix, "--file-label"),
        htmlFor: "".concat(props.prefix, "--file-input")
      }, contents ? "Choose a another file" : "Choose a file"), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('span', {
        key: "drop-a-file"
      }, " or drag it here.")])]), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
        key: 'file-upload--actions',
        className: "".concat(props.prefix, "--upload-actions")
      }, [error ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('p', {
        key: 'upload-error',
        className: "".concat(props.prefix, "--upload-error")
      }, error) : null, contents ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        key: 'file-upload--save-cancel'
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
        key: 'file-upload--cancel',
        className: "".concat(props.prefix, "--form-cancel"),
        onClick: function onClick(e) {
          return props.callbacks.changeModal(e, null);
        }
      }, 'Cancel'), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
        key: 'file-upload--save',
        className: "".concat(props.prefix, "--form-save"),
        onClick: this.saveJSON
      }, 'Save')) : Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
        key: 'file-upload--cancel',
        className: "".concat(props.prefix, "--form-cancel"),
        onClick: function onClick(e) {
          return props.callbacks.changeModal(e, null);
        }
      }, 'Back to notes.')])]);
    }
  }]);

  return UploadModal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "./src/components/react-sticky-notes/navbar/index.js":
/*!***********************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _partials_note_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../partials/note-header */ "./src/components/react-sticky-notes/partials/note-header.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../buttons */ "./src/components/react-sticky-notes/buttons/index.js");




function NavBar(_ref) {
  var viewSize = _ref.viewSize,
      prefix = _ref.prefix,
      items = _ref.items,
      callbacks = _ref.callbacks,
      icons = _ref.icons;
  var buttons = [_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonTitle"], _buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonTrash"]];

  if (viewSize === 'pageview' || viewSize === 'fullscreen') {
    buttons.splice(1, 0, _buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonMenu"]);
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--navbar"),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('navbar')
  }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: "".concat(prefix, "--navbar__nav"),
    className: "".concat(prefix, "--navbar__nav"),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('navbar-nav', null, {
      flexGrow: 1
    })
  }, items ? items.map(function (data) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "navbar-item__".concat(data.id),
      data: data,
      prefix: "".concat(prefix, "--navbar__item"),
      icons: icons,
      callbacks: callbacks,
      buttons: buttons
    });
  }) : null), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: "navbar-item__options",
    className: "".concat(prefix, "--navbar__nav")
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    prefix: "".concat(prefix, "--navbar__item"),
    viewSize: viewSize,
    icons: icons,
    callbacks: callbacks,
    buttons: [_buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonAdd"], _buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonPageView"], _buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonUpload"], _buttons__WEBPACK_IMPORTED_MODULE_2__["ButtonTrash"]]
  }))]);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-body.js":
/*!*****************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-body.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteBody; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _note_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-text */ "./src/components/react-sticky-notes/partials/note-text.js");
/* harmony import */ var _note_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-menu */ "./src/components/react-sticky-notes/partials/note-menu.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function NoteBody(props) {
  var data = props.data,
      prefix = props.prefix,
      callbacks = props.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--note__body"),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-body', props)
  }, data.menu ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_note_menu__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
    key: 'note-menu'
  }, props)) : Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_note_text__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({
    key: 'note-text'
  }, props)));
}

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-bubble.js":
/*!*******************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-bubble.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteBubble; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _note_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-draggable */ "./src/components/react-sticky-notes/partials/note-draggable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var NoteBubble =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoteBubble, _React$Component);

  function NoteBubble(props) {
    var _this;

    _classCallCheck(this, NoteBubble);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteBubble).call(this, props));
    _this.targetRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(NoteBubble, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])(_note_draggable__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "".concat(props.prefix, "--note ").concat(props.data.selected ? props.prefix + '--note__selected' : ''),
        position: props.data.position,
        selected: props.data.selected,
        target: this.targetRef,
        onDragComplete: function onDragComplete(pos) {
          return props.callbacks.updateItem(null, {
            id: props.data.id,
            position: pos
          });
        },
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElementStyle"])('note', props)
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])('button', {
        className: "".concat(props.prefix, "--note__bubble"),
        ref: this.targetRef,
        title: props.data.title ? props.data.title : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNoteTitle"])(props.data),
        onClick: function onClick() {
          return props.callbacks.updateItem(null, {
            id: props.data.id,
            hidden: false
          });
        },
        style: {
          "--background-color": props.data.color,
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: props.data.color,
          boxShadow: '1px 1px 2px rgba(0,0,0,.15)'
        }
      }));
    }
  }]);

  return NoteBubble;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-dot.js":
/*!****************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-dot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteDot; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _note_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-draggable */ "./src/components/react-sticky-notes/partials/note-draggable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var NoteDot =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoteDot, _React$Component);

  function NoteDot(props) {
    var _this;

    _classCallCheck(this, NoteDot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoteDot).call(this, props));
    _this.targetRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(NoteDot, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])(_note_draggable__WEBPACK_IMPORTED_MODULE_2__["default"], {
        unit: "%",
        useBoundaries: true,
        disabledAxisX: true,
        className: "".concat(props.prefix, "--note ").concat(props.data.selected ? props.prefix + '--note__selected' : ''),
        position: props.data.position,
        selected: props.data.selected,
        target: this.targetRef,
        onDragComplete: function onDragComplete(pos) {
          var index = Math.floor(pos.py * props.colorCodes.length / 100);
          var color = props.colorCodes[index];
          props.callbacks.updateItem(null, {
            id: props.data.id,
            color: color
          });
        },
        style: {
          position: 'absolute',
          left: props.data.position.x,
          top: props.data.position.y
        }
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])('button', {
        className: "".concat(props.prefix, "--note__bubble"),
        ref: this.targetRef,
        title: props.data.title ? props.data.title : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getNoteTitle"])(props.data),
        onClick: function onClick() {
          return props.callbacks.updateItem(null, {
            id: props.data.id,
            hidden: false
          });
        },
        style: {
          "--background-color": props.data.color,
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: props.data.color,
          boxShadow: '1px 1px 2px rgba(0,0,0,.15)'
        }
      }));
    }
  }]);

  return NoteDot;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-draggable.js":
/*!**********************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-draggable.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/draggable */ "./src/components/react-sticky-notes/utils/draggable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
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
      if (_this.props.target && e.target === _this.props.target.current) {
        _this.draggable.onMouseDown(e);
      }
    });

    _this.state = {
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
        unit: this.props.unit,
        useBoundaries: this.props.useBoundaries,
        disabledAxisX: this.props.disabledAxisX,
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
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onMouseDown
      }, this.props.children);
    }
  }]);

  return NoteDraggable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NoteDraggable);

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-header.js":
/*!*******************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-header.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function NoteHeader(props) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: props.prefix,
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-header', {
      data: props.data
    })
  }, props.buttons ? props.buttons.map(function (Button, i) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(Button, _objectSpread({
      key: "".concat(props.prefix).concat(props.data ? props.data.id : 'all', "__note-button__").concat(i)
    }, props));
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (NoteHeader);

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-menu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");


function NoteMenu(props) {
  var data = props.data,
      index = props.index,
      prefix = props.prefix,
      colorCodes = props.colorCodes,
      callbacks = props.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--colors"),
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-menu', props)
  }, colorCodes.map(function (colorCode) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('button', {
      key: colorCode,
      onClick: function onClick(e) {
        return callbacks.updateItem(e, {
          id: data.id,
          color: colorCode,
          menu: false
        });
      },
      className: "".concat(prefix, "--colors__color ").concat(data.color === colorCode ? prefix + '--colors__color--selected' : ''),
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-color-selector', {
        colorCode: colorCode
      })
    }, colorCode);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (NoteMenu);

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note-text.js":
/*!*****************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-text.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");


function NoteText(_ref) {
  var data = _ref.data,
      index = _ref.index,
      prefix = _ref.prefix,
      callbacks = _ref.callbacks;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--text"),
    placeholder: "react-hooks",
    contentEditable: "true",
    onBlur: function onBlur(e) {
      return callbacks.updateItem(index, {
        id: data.id,
        text: e.target.innerText
      });
    },
    onFocus: function onFocus(e) {
      return callbacks.updateItem(e, {
        id: data.id,
        selected: true,
        datetime: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentDateTime"])()
      });
    },
    dangerouslySetInnerHTML: {
      __html: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nlToBr"])(data.text)
    },
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note-input')
  });
}

/* harmony default export */ __webpack_exports__["default"] = (NoteText);

/***/ }),

/***/ "./src/components/react-sticky-notes/partials/note.js":
/*!************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _note_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-draggable */ "./src/components/react-sticky-notes/partials/note-draggable.js");
/* harmony import */ var _note_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-header */ "./src/components/react-sticky-notes/partials/note-header.js");
/* harmony import */ var _note_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-body */ "./src/components/react-sticky-notes/partials/note-body.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../buttons */ "./src/components/react-sticky-notes/buttons/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
      var props = this.props;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])(_note_draggable__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "".concat(props.prefix, "--note ").concat(props.data.selected ? props.prefix + '--note__selected' : ''),
        position: props.data.position,
        selected: props.data.selected,
        target: this.targetRef,
        onDragComplete: function onDragComplete(pos) {
          return props.callbacks.updateItem(null, {
            id: props.data.id,
            position: pos
          });
        },
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getElementStyle"])('note', props, {
          boxShadow: '1px 1px 2px rgba(0,0,0,.15)'
        })
      }, [Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])(_note_header__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, props, {
        key: 'note-header',
        targetRef: this.targetRef,
        prefix: "".concat(props.prefix, "--header"),
        buttons: [_buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonAdd"], _buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonTitle"], _buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonMenu"], _buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonHideShow"], _buttons__WEBPACK_IMPORTED_MODULE_5__["ButtonTrash"]]
      })), Object(_utils__WEBPACK_IMPORTED_MODULE_1__["h"])(_note_body__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
        key: 'note-body'
      }, props))]);
    }
  }]);

  return Note;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),

/***/ "./src/components/react-sticky-notes/reducers/reducer.js":
/*!***************************************************************!*\
  !*** ./src/components/react-sticky-notes/reducers/reducer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer(state, action) {
  var viewSizes = ['bubbleview', 'normalview', 'pageview', 'fullscreen'];
  var params = action.payload && action.payload.data ? Object.keys(action.payload.data) : [];
  var items = state.items,
      viewSize = state.viewSize,
      modal = state.modal;

  switch (action.type) {
    case 'changemodal':
      modal = action.payload.modal;
      break;

    case 'import':
      modal = null;
      items = action.payload.items;
      break;

    case 'changeview':
      modal = null;
      var currentViewSize = viewSizes.indexOf(viewSize);
      viewSize = currentViewSize > -1 && currentViewSize < viewSizes.length - 1 ? viewSizes[currentViewSize + 1] : viewSizes[0];
      break;

    case 'add':
      items = items.map(function (item) {
        item.selected = false;
        return item;
      });
      items.splice(action.payload.index, 0, action.payload.data);
      break;

    case 'update':
      items = items.map(function (item) {
        if (item.id === action.payload.data.id) {
          item = _objectSpread({}, item, action.payload.data);
        }

        if (params.indexOf('selected') !== -1) {
          item.selected = item.id === action.payload.data.id ? action.payload.data.selected : false;
        }

        if (params.indexOf('menu') !== -1) {
          item.menu = item.id === action.payload.data.id ? action.payload.data.menu : false;
        }

        return item;
      });
      break;

    case 'delete':
      var index = items.findIndex(function (item) {
        return action.payload.data.id === item.id;
      });

      if (index !== -1) {
        items.splice(index, 1);
      } else {
        items.splice(0, items.length);
      }

      break;

    default:
      items = state.items;
      break;
  }

  return {
    items: items,
    viewSize: viewSize,
    modal: modal
  };
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/color-codes.js":
/*!****************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/color-codes.js ***!
  \****************************************************************/
/*! exports provided: getColorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorCodes", function() { return getColorCodes; });
function getColorCodes() {
  var codes = [];

  for (var i = 0; i < 360; i += 18) {
    codes.push("hsl(".concat(i, ",50%, 50%)"));
  }

  return codes;
}
;

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

    _defineProperty(this, "dx", 0);

    _defineProperty(this, "dy", 0);

    _defineProperty(this, "percentX", 0);

    _defineProperty(this, "percentY", 0);

    _defineProperty(this, "currentX", 0);

    _defineProperty(this, "currentY", 0);

    _defineProperty(this, "onMouseMove", function (e) {
      if (e.cancelable) {
        e.preventDefault();
      }

      var el = _this.options.element;
      var parentElement = el.parentElement;
      var pRect = parentElement ? parentElement.getBoundingClientRect() : {
        left: 0,
        top: 0
      };

      var position = _this.getPosition(e, _this.dx, _this.dy);

      var x = position.left - pRect.left;
      var y = position.top - pRect.top;
      _this.currentX = x > 0 ? x : 0;
      _this.currentY = y > 0 ? y : 0;

      if (_this.options.useBoundaries) {
        var maxX = pRect.width - el.offsetWidth;
        var maxY = pRect.height - el.offsetHeight;

        if (_this.currentX >= maxX) {
          _this.currentX = maxX;
        }

        if (_this.currentY >= maxY) {
          _this.currentY = maxY;
        }
      }

      if (_this.options.unit === "%") {
        _this.percentX = _this.currentX * 100 / pRect.width;
        _this.percentY = _this.currentY * 100 / pRect.height;

        _this.setTranslate("".concat(_this.percentX, "%"), "".concat(_this.percentY, "%"));
      } else {
        _this.setTranslate("".concat(_this.currentX, "px"), "".concat(_this.currentY, "px"));
      }
    });

    _defineProperty(this, "onMouseDown", function (e) {
      var el = _this.options.element;
      var parentElement = el.parentElement;
      var rect = el.getBoundingClientRect();
      var pRect = parentElement ? parentElement.getBoundingClientRect() : {
        left: 0,
        top: 0
      };
      _this.currentX = -pRect.left + rect.left;
      _this.currentY = -pRect.top + rect.top;

      var position = _this.getPosition(e);

      _this.dx = position.left - rect.left;
      _this.dy = position.top - rect.top;
      el.classList.add('draggable');
      document.addEventListener('mousemove', _this.onMouseMove, null);
      document.addEventListener('mouseup', _this.onMouseUp, null);
      document.addEventListener('touchmove', _this.onMouseMove, {
        passive: false
      });
      document.addEventListener('touchend', _this.onMouseUp, {
        passive: false
      });
    });

    _defineProperty(this, "onMouseUp", function (e) {
      if (_this.options.onDragComplete) {
        _this.options.onDragComplete.call(_this, {
          x: _this.currentX,
          y: _this.currentY,
          px: _this.percentX,
          py: _this.percentY
        });
      }

      _this.options.element.classList.remove('draggable');

      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onMouseUp);
      document.removeEventListener('touchmove', _this.onMouseMove);
      document.removeEventListener('touchend', _this.onMouseUp);
    });
  }

  _createClass(Draggable, [{
    key: "init",
    value: function init(options) {
      this.options = options;
    }
  }, {
    key: "setTranslate",
    value: function setTranslate(x, y) {
      if (this.options.element) {
        if (!this.options.disabledAxisX) {
          this.options.element.style.left = x;
        }

        if (!this.options.disabledAxisY) {
          this.options.element.style.top = y;
        }
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(e) {
      var dx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var dy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (/touch/.test(e.type)) {
        return {
          left: e.touches[0].clientX - dx,
          top: e.touches[0].clientY - dy,
          x: e.touches[0].clientX - dx,
          y: e.touches[0].clientY - dy
        };
      } else {
        return {
          left: e.clientX - dx,
          top: e.clientY - dy,
          x: e.clientX - dx,
          y: e.clientY - dy
        };
      }
    }
  }]);

  return Draggable;
}();



/***/ }),

/***/ "./src/components/react-sticky-notes/utils/get-current-datetime.js":
/*!*************************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-current-datetime.js ***!
  \*************************************************************************/
/*! exports provided: getCurrentDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateTime", function() { return getCurrentDateTime; });
function getCurrentDateTime() {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/get-element-style.js":
/*!**********************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-element-style.js ***!
  \**********************************************************************/
/*! exports provided: getElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementStyle", function() { return getElementStyle; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getElementStyle(nodeName, props) {
  var defaultStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var style = defaultStyle;

  switch (nodeName) {
    case "container":
      style = _objectSpread({}, defaultStyle, {
        position: 'relative',
        width: props.containerWidth,
        height: props.containerHeight,
        backgroundColor: props.backgroundColor
      });
      break;

    case "note":
      style = _objectSpread({}, defaultStyle, {
        position: 'absolute',
        left: props.viewSize === "pageview" || props.viewSize === "fullscreen" ? 0 : props.data.position ? "".concat(props.data.position.x, "px") : 0,
        top: props.viewSize === "pageview" || props.viewSize === "fullscreen" ? 0 : props.data.position ? "".concat(props.data.position.y, "px") : 0,
        width: props.viewSize === "pageview" || props.viewSize === "fullscreen" ? "100%" : null,
        height: props.viewSize === "pageview" || props.viewSize === "fullscreen" ? "100%" : null
      });

      if (props.data.selected) {
        style.zIndex = 1;
      }

      break;

    case "note-body":
      style.width = props.viewSize === "pageview" || props.viewSize === "fullscreen" ? "100%" : props.noteWidth, style.height = props.viewSize === "pageview" || props.viewSize === "fullscreen" ? "100%" : props.noteHeight, style.backgroundColor = props.data.color, style.overflow = "auto";

      if (props.data.selected) {
        style.minWidth = props.noteWidth, style.resize = "both";
      }

      break;

    case "note-input":
      style.height = "100%";
      break;

    case "note-header":
      style.backgroundColor = props.data ? props.data.color : '';
      break;

    case "note-minimized":
      style = _objectSpread({}, defaultStyle, {
        backgroundColor: props.data.color,
        position: 'absolute',
        left: props.data.position ? "".concat(props.data.position.x, "px") : 0,
        top: props.data.position ? "".concat(props.data.position.y, "px") : 0,
        width: '10px',
        height: '10px'
      });
      break;

    case "note-maximized":
      style = _objectSpread({}, defaultStyle, {
        backgroundColor: props.data.color,
        position: 'absolute',
        left: props.data.position ? "".concat(props.data.position.x, "px") : 0,
        top: props.data.position ? "".concat(props.data.position.y, "px") : 0,
        width: '10px',
        height: '10px'
      });
      break;

    case "note-menu":
      style.backgroundColor = "#ffffff";
      style.minHeight = '100%';
      break;

    case "note-color-selector":
      style = _objectSpread({}, defaultStyle, {
        backgroundColor: props.colorCode
      });
      break;

    case "icon":
      style = _objectSpread({}, defaultStyle, {
        verticalAlign: 'middle',
        width: '1em'
      });
      break;
  }

  return style;
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/get-note-title.js":
/*!*******************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-note-title.js ***!
  \*******************************************************************/
/*! exports provided: getNoteTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoteTitle", function() { return getNoteTitle; });
function getNoteTitle(_ref) {
  var title = _ref.title,
      text = _ref.text,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 10 : _ref$limit,
      _ref$delimiter = _ref.delimiter,
      delimiter = _ref$delimiter === void 0 ? null : _ref$delimiter;

  var _title;

  if (title) {
    _title = String(title);
  } else if (delimiter) {
    _title = String(text).split(delimiter)[0];
  } else {
    _title = String(text).substr(0, limit);
  }

  return _title.substr(0, 1).toUpperCase() + _title.substr(1, _title.length);
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/get-notes.js":
/*!**************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-notes.js ***!
  \**************************************************************/
/*! exports provided: getNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return getNotes; });
/* harmony import */ var _get_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-uuid */ "./src/components/react-sticky-notes/utils/get-uuid.js");

function getNotes(colorCodes, notes) {
  var _notes = [];

  if (notes) {
    _notes = notes.map(function (note) {
      note.id = note.id ? note.id : Object(_get_uuid__WEBPACK_IMPORTED_MODULE_0__["getUUID"])();
      note.position = note.position ? note.position : {
        x: 0,
        y: 0
      };
      note.color = note.color ? note.color : colorCodes[Math.floor(Math.random() * colorCodes.length)];
      return note;
    });
  } else if (localStorage.getItem('react-sticky-notes')) {
    _notes = JSON.parse(localStorage.getItem('react-sticky-notes'));
  } else {
    _notes = [{
      id: Object(_get_uuid__WEBPACK_IMPORTED_MODULE_0__["getUUID"])(),
      text: '',
      position: {
        x: 0,
        y: 0
      },
      color: colorCodes[Math.floor(Math.random() * colorCodes.length)],
      selected: true
    }];
  }

  return _notes;
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/get-uuid.js":
/*!*************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-uuid.js ***!
  \*************************************************************/
/*! exports provided: getUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return getUUID; });
function getUUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/h.js":
/*!******************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/h.js ***!
  \******************************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var h = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/index.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/index.js ***!
  \**********************************************************/
/*! exports provided: h, getColorCodes, getUUID, nlToBr, getNotes, getElementStyle, getCurrentDateTime, getNoteTitle, parseCSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./src/components/react-sticky-notes/utils/h.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _h__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony import */ var _color_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-codes */ "./src/components/react-sticky-notes/utils/color-codes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColorCodes", function() { return _color_codes__WEBPACK_IMPORTED_MODULE_1__["getColorCodes"]; });

/* harmony import */ var _get_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-uuid */ "./src/components/react-sticky-notes/utils/get-uuid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return _get_uuid__WEBPACK_IMPORTED_MODULE_2__["getUUID"]; });

/* harmony import */ var _nl_to_br__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nl-to-br */ "./src/components/react-sticky-notes/utils/nl-to-br.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlToBr", function() { return _nl_to_br__WEBPACK_IMPORTED_MODULE_3__["nlToBr"]; });

/* harmony import */ var _get_notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-notes */ "./src/components/react-sticky-notes/utils/get-notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return _get_notes__WEBPACK_IMPORTED_MODULE_4__["getNotes"]; });

/* harmony import */ var _get_element_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-element-style */ "./src/components/react-sticky-notes/utils/get-element-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementStyle", function() { return _get_element_style__WEBPACK_IMPORTED_MODULE_5__["getElementStyle"]; });

/* harmony import */ var _get_current_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-current-datetime */ "./src/components/react-sticky-notes/utils/get-current-datetime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateTime", function() { return _get_current_datetime__WEBPACK_IMPORTED_MODULE_6__["getCurrentDateTime"]; });

/* harmony import */ var _get_note_title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-note-title */ "./src/components/react-sticky-notes/utils/get-note-title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNoteTitle", function() { return _get_note_title__WEBPACK_IMPORTED_MODULE_7__["getNoteTitle"]; });

/* harmony import */ var _parse_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse-csv */ "./src/components/react-sticky-notes/utils/parse-csv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCSV", function() { return _parse_csv__WEBPACK_IMPORTED_MODULE_8__["parseCSV"]; });











/***/ }),

/***/ "./src/components/react-sticky-notes/utils/nl-to-br.js":
/*!*************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/nl-to-br.js ***!
  \*************************************************************/
/*! exports provided: nlToBr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlToBr", function() { return nlToBr; });
function nlToBr(str) {
  return str ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : '';
}

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/parse-csv.js":
/*!**************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/parse-csv.js ***!
  \**************************************************************/
/*! exports provided: parseCSV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCSV", function() { return parseCSV; });
function parseCSV(str) {
  var arr = [];
  var quote = false;

  for (var row = 0, col = 0, c = 0; c < str.length; c++) {
    var currentCharacter = str[c],
        nextCharacter = str[c + 1];
    arr[row] = arr[row] || [];
    arr[row][col] = arr[row][col] || '';

    if (currentCharacter == '"' && quote && nextCharacter == '"') {
      arr[row][col] += currentCharacter;
      ++c;
      continue;
    }

    if (currentCharacter == '"') {
      quote = !quote;
      continue;
    }

    if (currentCharacter == ',' && !quote) {
      ++col;
      continue;
    }

    if (currentCharacter == '\r' && nextCharacter == '\n' && !quote) {
      col = 0;
      ++row;
      ++c;
      continue;
    }

    if ((currentCharacter == '\r' || currentCharacter == '\n') && !quote) {
      ++row;
      col = 0;
      continue;
    }

    arr[row][col] += currentCharacter;
  }

  var results = [];
  var headers = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var result = {};

    for (var j = 0; j < arr[i].length; j++) {
      result[headers[j]] = arr[i][j];
    }

    results.push(result);
  }

  return results;
}

/***/ }),

/***/ "./src/components/react-sticky-notes/views/bubble-view.js":
/*!****************************************************************!*\
  !*** ./src/components/react-sticky-notes/views/bubble-view.js ***!
  \****************************************************************/
/*! exports provided: BubbleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleView", function() { return BubbleView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../navbar */ "./src/components/react-sticky-notes/navbar/index.js");
/* harmony import */ var _partials_note_dot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/note-dot */ "./src/components/react-sticky-notes/partials/note-dot.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function BubbleView(props) {
  return [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, props, {
    key: 'navbar'
  })), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: props.prefix,
    className: props.prefix,
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('container', props, {
      display: 'flex'
    })
  }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: "".concat(props.prefix, "--notes-colors"),
    className: "".concat(props.prefix, "--notes-colors")
  }, props.colorCodes.map(function (color, i) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
      key: "note--color-".concat(i),
      className: "".concat(props.prefix, "--notes-colors__color"),
      style: {
        "--background-color": color,
        "--height": "".concat(100 / props.colorCodes.length, "%")
      }
    });
  })), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: "".concat(props.prefix, "--notes-area"),
    className: "".concat(props.prefix, "--notes-area")
  }, props.items.map(function (data, index) {
    data.position = {
      x: "".concat(index * 100 / props.items.length, "%"),
      y: "".concat(props.colorCodes.indexOf(data.color) * 100 / props.colorCodes.length, "%")
    };
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_dot__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      key: "note-".concat(data.id)
    }, props, {
      data: data
    }));
  }))])];
}

/***/ }),

/***/ "./src/components/react-sticky-notes/views/fullscreen-view.js":
/*!********************************************************************!*\
  !*** ./src/components/react-sticky-notes/views/fullscreen-view.js ***!
  \********************************************************************/
/*! exports provided: FullscreenView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenView", function() { return FullscreenView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../navbar */ "./src/components/react-sticky-notes/navbar/index.js");
/* harmony import */ var _partials_note_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/note-body */ "./src/components/react-sticky-notes/partials/note-body.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function FullscreenView(props) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh'
    }
  }, [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, props, {
    key: 'navbar'
  })), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: props.prefix,
    className: props.prefix,
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('container', props)
  }, props.items.map(function (data) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
      key: "note-".concat(data.id),
      className: "".concat(props.prefix, "--note"),
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note', _objectSpread({}, props, {
        data: data
      }))
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_body__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      data: data
    }, props)));
  }))]);
}

/***/ }),

/***/ "./src/components/react-sticky-notes/views/index.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/views/index.js ***!
  \**********************************************************/
/*! exports provided: NormalView, BubbleView, PageView, FullscreenView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normal_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normal-view */ "./src/components/react-sticky-notes/views/normal-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalView", function() { return _normal_view__WEBPACK_IMPORTED_MODULE_0__["NormalView"]; });

/* harmony import */ var _bubble_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bubble-view */ "./src/components/react-sticky-notes/views/bubble-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BubbleView", function() { return _bubble_view__WEBPACK_IMPORTED_MODULE_1__["BubbleView"]; });

/* harmony import */ var _page_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view */ "./src/components/react-sticky-notes/views/page-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return _page_view__WEBPACK_IMPORTED_MODULE_2__["PageView"]; });

/* harmony import */ var _fullscreen_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen-view */ "./src/components/react-sticky-notes/views/fullscreen-view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullscreenView", function() { return _fullscreen_view__WEBPACK_IMPORTED_MODULE_3__["FullscreenView"]; });






/***/ }),

/***/ "./src/components/react-sticky-notes/views/normal-view.js":
/*!****************************************************************!*\
  !*** ./src/components/react-sticky-notes/views/normal-view.js ***!
  \****************************************************************/
/*! exports provided: NormalView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalView", function() { return NormalView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../navbar */ "./src/components/react-sticky-notes/navbar/index.js");
/* harmony import */ var _partials_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/note */ "./src/components/react-sticky-notes/partials/note.js");
/* harmony import */ var _partials_note_bubble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/note-bubble */ "./src/components/react-sticky-notes/partials/note-bubble.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function NormalView(props) {
  return [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, props, {
    key: 'navbar'
  })), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: props.prefix,
    className: props.prefix,
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('container', props)
  }, props.items.map(function (data) {
    return !data.hidden ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      key: "note-".concat(data.id)
    }, props, {
      data: data
    })) : Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_bubble__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
      key: "note-".concat(data.id)
    }, props, {
      data: data
    }));
  }))];
}

/***/ }),

/***/ "./src/components/react-sticky-notes/views/page-view.js":
/*!**************************************************************!*\
  !*** ./src/components/react-sticky-notes/views/page-view.js ***!
  \**************************************************************/
/*! exports provided: PageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageView", function() { return PageView; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../navbar */ "./src/components/react-sticky-notes/navbar/index.js");
/* harmony import */ var _partials_note_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/note-body */ "./src/components/react-sticky-notes/partials/note-body.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function PageView(props) {
  return [Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({}, props, {
    key: 'navbar'
  })), Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    key: props.prefix,
    className: props.prefix,
    style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('container', props)
  }, props.items.map(function (data) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
      key: "note-".concat(data.id),
      className: "".concat(props.prefix, "--note"),
      style: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getElementStyle"])('note', _objectSpread({}, props, {
        data: data
      }))
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_partials_note_body__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      data: data
    }, props)));
  }))];
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_react_sticky_notes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/react-sticky-notes */ "./src/components/react-sticky-notes/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_react_sticky_notes__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });