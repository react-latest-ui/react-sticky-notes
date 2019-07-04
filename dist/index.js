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
exports.push([module.i, "@keyframes shadowanim {\n  0% {\n    box-shadow: 0px 0px 0px 25px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 15px inset rgba(0, 0, 0, 0.15), 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; }\n  20% {\n    opacity: 0.9; }\n  50% {\n    opacity: 1; }\n  70% {\n    opacity: 0.9; }\n  100% {\n    box-shadow: 0px 0px 0px 0px inset rgba(0, 0, 0, 0.15);\n    opacity: 0.2; } }\n\n.rs-notes {\n  color: #ffffff;\n  text-align: left; }\n  .rs-notes *, .rs-notes *::before, .rs-notes *::after {\n    box-sizing: border-box; }\n  .rs-notes--note {\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); }\n    .rs-notes--note__selected {\n      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); }\n  .rs-notes--navbar {\n    white-space: nowrap; }\n    .rs-notes--navbar__item {\n      display: inline-block;\n      position: relative;\n      vertical-align: middle;\n      opacity: .8;\n      padding-right: 32px; }\n      .rs-notes--navbar__item--select, .rs-notes--navbar__item--delete {\n        cursor: pointer;\n        border: none;\n        outline: none;\n        color: #fff; }\n      .rs-notes--navbar__item--select {\n        text-align: left;\n        width: 80px;\n        height: 22px;\n        padding: 0px 5px;\n        white-space: nowrap;\n        background: none;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        font-size: 12px; }\n      .rs-notes--navbar__item--delete {\n        text-align: center;\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        padding: 0;\n        width: 18px;\n        height: 18px;\n        border-radius: 50%;\n        background-color: rgba(0, 0, 0, 0.25); }\n        .rs-notes--navbar__item--delete:hover, .rs-notes--navbar__item--delete:focus {\n          background-color: rgba(0, 0, 0, 0.5); }\n      .rs-notes--navbar__item--add {\n        text-align: center;\n        width: 24px;\n        height: 24px;\n        opacity: 0.8;\n        cursor: pointer;\n        border: none;\n        background: #333;\n        color: #fff;\n        padding: 0;\n        vertical-align: middle; }\n        .rs-notes--navbar__item--add:hover, .rs-notes--navbar__item--add:focus {\n          opacity: 1; }\n      .rs-notes--navbar__item:hover, .rs-notes--navbar__item:focus {\n        opacity: 1; }\n  .rs-notes--header {\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.25);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n    opacity: 0;\n    transition: all .3s linear; }\n    .rs-notes--header__selected {\n      opacity: 1; }\n    .rs-notes--header svg {\n      line-height: 1;\n      vertical-align: middle; }\n    .rs-notes--header__button--title {\n      flex-grow: 1;\n      line-height: 30px;\n      text-align: left;\n      user-select: none; }\n    .rs-notes--header__button--title, .rs-notes--header__button--add, .rs-notes--header__button--menu, .rs-notes--header__button--trash {\n      line-height: 30px;\n      background: none;\n      border: none;\n      cursor: pointer;\n      transition: all .2s linear;\n      padding: 5px;\n      color: rgba(255, 255, 255, 0.75);\n      outline: none; }\n      .rs-notes--header__button--title:hover, .rs-notes--header__button--title:focus, .rs-notes--header__button--add:hover, .rs-notes--header__button--add:focus, .rs-notes--header__button--menu:hover, .rs-notes--header__button--menu:focus, .rs-notes--header__button--trash:hover, .rs-notes--header__button--trash:focus {\n        background-color: rgba(0, 0, 0, 0.25);\n        outline: none; }\n      .rs-notes--header__button--title:disabled, .rs-notes--header__button--add:disabled, .rs-notes--header__button--menu:disabled, .rs-notes--header__button--trash:disabled {\n        cursor: not-allowed; }\n    .rs-notes--header__button--add, .rs-notes--header__button--menu, .rs-notes--header__button--trash {\n      width: 32px; }\n  .rs-notes--text {\n    padding: 10px;\n    font-size: 12px;\n    width: 100%; }\n    .rs-notes--text:empty::before {\n      color: rgba(255, 255, 255, 0.75);\n      content: 'Add your notes...'; }\n  .rs-notes--colors {\n    flex-grow: 1; }\n    .rs-notes--colors__color {\n      text-indent: -99999px;\n      cursor: pointer;\n      margin: 1px;\n      width: 3.6em;\n      height: 3.6em;\n      border-radius: 50%;\n      border: none;\n      outline: none;\n      transition: all 0.4s linear;\n      box-shadow: 0px 0px 0px 5px inset rgba(0, 0, 0, 0.15); }\n      .rs-notes--colors__color:hover, .rs-notes--colors__color:focus {\n        box-shadow: 0px 0px 0px 10px inset rgba(0, 0, 0, 0.15); }\n      .rs-notes--colors__color--selected {\n        animation-name: shadowanim;\n        animation-duration: 2s;\n        animation-iteration-count: 100;\n        opacity: .75; }\n", ""]);

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
/* harmony import */ var _partials_notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/notes */ "./src/components/react-sticky-notes/partials/notes.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ "./src/components/react-sticky-notes/navbar/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/react-sticky-notes/utils/index.js");
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

    _defineProperty(_assertThisInitialized(_this), "addItem", function (options) {
      var newProps = {
        index: options ? options.index + 1 : _this.state.items.length,
        color: _this.getColor(),
        text: '',
        selected: true,
        position: {
          x: 0,
          y: 0
        }
      };

      _this.dispatch({
        type: 'add',
        payload: _objectSpread({}, newProps)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateItem", function (index, newProps) {
      _this.dispatch({
        type: 'update',
        payload: _objectSpread({
          index: index
        }, newProps)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (index, newProps) {
      _this.dispatch({
        type: 'select',
        payload: _objectSpread({
          index: index
        }, newProps)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteItem", function (index) {
      _this.dispatch({
        type: 'delete',
        payload: {
          index: index
        }
      });
    });

    _this.state = {
      items: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getNotes"])(props.colorCodes, props.notes)
    };
    return _this;
  }

  _createClass(ReactStickyNotes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.useCSS) {
        __webpack_require__(/*! ./index.scss */ "./src/components/react-sticky-notes/index.scss");
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
      var items = this.state.items;
      var _this$props = this.props,
          noteWidth = _this$props.noteWidth,
          noteHeight = _this$props.noteHeight,
          containerWidth = _this$props.containerWidth,
          containerHeight = _this$props.containerHeight,
          backgroundColor = _this$props.backgroundColor,
          icons = _this$props.icons,
          prefix = _this$props.prefix,
          navbar = _this$props.navbar;
      return [Object(_utils__WEBPACK_IMPORTED_MODULE_4__["h"])(_partials_notes__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: "".concat(prefix, "--notes"),
        navbar: navbar,
        items: items,
        noteWidth: noteWidth,
        noteHeight: noteHeight,
        containerWidth: containerWidth,
        containerHeight: containerHeight,
        backgroundColor: backgroundColor,
        icons: icons,
        prefix: prefix,
        colorCodes: _utils__WEBPACK_IMPORTED_MODULE_4__["colorCodes"],
        addItem: this.addItem,
        updateItem: this.updateItem,
        selectItem: this.selectItem,
        deleteItem: this.deleteItem
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["h"])(_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
        key: "".concat(prefix, "--navbar")
      }, this.props, {
        items: items,
        colorCodes: _utils__WEBPACK_IMPORTED_MODULE_4__["colorCodes"],
        addItem: this.addItem,
        updateItem: this.updateItem,
        selectItem: this.selectItem,
        deleteItem: this.deleteItem
      }))];
    }
  }]);

  return ReactStickyNotes;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ReactStickyNotes, "defaultProps", {
  useCSS: true,
  prefix: 'rs-notes',
  colorCodes: _utils__WEBPACK_IMPORTED_MODULE_4__["colorCodes"],
  navbar: true,
  sessionKey: 'react-sticky-notes',
  noteWidth: 220,
  noteHeight: 220,
  containerWidth: '100%',
  containerHeight: '100%',
  icons: {
    add: _utils__WEBPACK_IMPORTED_MODULE_4__["iconAdd"],
    menu: _utils__WEBPACK_IMPORTED_MODULE_4__["iconMenu"],
    trash: _utils__WEBPACK_IMPORTED_MODULE_4__["iconTrash"]
  }
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

/***/ "./src/components/react-sticky-notes/navbar/index.js":
/*!***********************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
/* harmony import */ var _navbar_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-item */ "./src/components/react-sticky-notes/navbar/navbar-item.js");
/* harmony import */ var _navbar_item_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-item-add */ "./src/components/react-sticky-notes/navbar/navbar-item-add.js");




function NavBar(_ref) {
  var prefix = _ref.prefix,
      items = _ref.items,
      addItem = _ref.addItem,
      selectItem = _ref.selectItem,
      deleteItem = _ref.deleteItem,
      icons = _ref.icons,
      navbar = _ref.navbar;
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])('div', {
    className: "".concat(prefix, "--navbar")
  }, [navbar && items ? items.map(function (item, index) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["h"])(_navbar_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "navbar-item__".concat(index),
      navbar: navbar,
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

/***/ "./src/components/react-sticky-notes/navbar/navbar-item-add.js":
/*!*********************************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar/navbar-item-add.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");


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

/***/ "./src/components/react-sticky-notes/navbar/navbar-item.js":
/*!*****************************************************************!*\
  !*** ./src/components/react-sticky-notes/navbar/navbar-item.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");


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

/***/ "./src/components/react-sticky-notes/partials/note-menu.js":
/*!*****************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/note-menu.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");


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
/* harmony import */ var _note_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note-header */ "./src/components/react-sticky-notes/partials/note-header.js");
/* harmony import */ var _note_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-text */ "./src/components/react-sticky-notes/partials/note-text.js");
/* harmony import */ var _note_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-menu */ "./src/components/react-sticky-notes/partials/note-menu.js");
/* harmony import */ var _note_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-draggable */ "./src/components/react-sticky-notes/partials/note-draggable.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
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

/***/ "./src/components/react-sticky-notes/partials/notes.js":
/*!*************************************************************!*\
  !*** ./src/components/react-sticky-notes/partials/notes.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ "./src/components/react-sticky-notes/partials/note.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils */ "./src/components/react-sticky-notes/utils/index.js");
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
      toggle: false
    };
    return _this;
  }

  _createClass(Notes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefix = _this$props.prefix,
          items = _this$props.items;
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["h"])('div', {
        key: prefix,
        className: prefix,
        style: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getElementStyle"])('container', this.props)
      }, items ? items.map(function (item, index) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["h"])(_note__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread({
          index: index,
          key: "note-".concat(index)
        }, item, _this2.state, _this2.props, {
          toggle: _this2.state.toggle,
          setToggle: _this2.setToggle,
          setColor: _this2.setColor
        }), null);
      }) : null);
    }
  }]);

  return Notes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Notes);

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
  var items = state.items;

  switch (action.type) {
    case 'add':
      items = items.map(function (item, index) {
        item.selected = false;
        return item;
      });
      items.splice(action.payload.index, 0, action.payload);
      break;

    case 'update':
      items = items.map(function (item, index) {
        return index === action.payload.index ? _objectSpread({}, item, action.payload) : item;
      });
      break;

    case 'delete':
      items.splice(action.payload.index, 1);
      break;

    case 'select':
      items = items.map(function (item, index) {
        item.selected = index === action.payload.index ? true : false;
        return item;
      });
      break;

    default:
      items = state.items;
      break;
  }

  return {
    items: items
  };
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/color-codes.js":
/*!****************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/color-codes.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getColorCodes = function getColorCodes() {
  var codes = [];

  for (var i = 0; i < 360; i += 18) {
    codes.push("hsl(".concat(i, ",50%, 50%)"));
  }

  return codes;
};

/* harmony default export */ __webpack_exports__["default"] = (getColorCodes());

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

    _defineProperty(this, "currentX", 0);

    _defineProperty(this, "currentY", 0);

    _defineProperty(this, "onMouseMove", function (e) {
      e.preventDefault();
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

      _this.setTranslate(_this.currentX, _this.currentY);
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
          y: _this.currentY
        });
      }

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
        this.options.element.style.left = "".concat(x, "px");
        this.options.element.style.top = "".concat(y, "px");
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

/***/ "./src/components/react-sticky-notes/utils/get-element-style.js":
/*!**********************************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/get-element-style.js ***!
  \**********************************************************************/
/*! exports provided: getElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementStyle", function() { return getElementStyle; });
var getElementStyle = function getElementStyle(nodeName, props) {
  var defaultStyle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var style = defaultStyle;

  switch (nodeName) {
    case "container":
      style = {
        position: 'relative',
        width: props.containerWidth,
        height: props.containerHeight,
        backgroundColor: props.backgroundColor
      };
      break;

    case "note":
      style = {
        position: 'absolute',
        left: "".concat(props.position.x, "px"),
        top: "".concat(props.position.y, "px"),
        backgroundColor: props.color,
        zIndex: props.selected ? 1 : 0
      };
      break;

    case "note-body":
      style = {
        width: props.noteWidth,
        height: props.noteHeight,
        minWidth: props.noteWidth,
        backgroundColor: props.toggle === props.index + 1 && props.selected ? "#ffffff" : "",
        resize: "both",
        overflow: "auto"
      };
      break;

    case "note-input":
      style = {
        height: "100%"
      };
      break;

    case "note-header":
      style = {
        visibility: props.selected ? "visible" : "hidden"
      };
      break;

    case "menu":
      style = {
        height: "100%"
      };
      break;

    case "note-color-selector":
      style = {
        backgroundColor: props.colorCode
      };
      break;
  }

  return style;
};

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
var getNotes = function getNotes(colorCodes, notes) {
  var _notes = localStorage.getItem('react-sticky-notes') ? JSON.parse(localStorage.getItem('react-sticky-notes')) : notes ? notes : [{
    text: '',
    position: {
      x: 0,
      y: 0
    },
    color: colorCodes[Math.floor(Math.random() * colorCodes.length)],
    selected: true
  }];

  return _notes;
};

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

/***/ "./src/components/react-sticky-notes/utils/icons.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/icons.js ***!
  \**********************************************************/
/*! exports provided: iconAdd, iconTrash, iconMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconAdd", function() { return iconAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconTrash", function() { return iconTrash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconMenu", function() { return iconMenu; });
var iconAdd = '+';
var iconTrash = 'x';
var iconMenu = '•••';

/***/ }),

/***/ "./src/components/react-sticky-notes/utils/index.js":
/*!**********************************************************!*\
  !*** ./src/components/react-sticky-notes/utils/index.js ***!
  \**********************************************************/
/*! exports provided: h, colorCodes, nlToBr, getNotes, getElementStyle, iconAdd, iconMenu, iconTrash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ "./src/components/react-sticky-notes/utils/h.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _h__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony import */ var _color_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-codes */ "./src/components/react-sticky-notes/utils/color-codes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colorCodes", function() { return _color_codes__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _nl_to_br__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nl-to-br */ "./src/components/react-sticky-notes/utils/nl-to-br.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlToBr", function() { return _nl_to_br__WEBPACK_IMPORTED_MODULE_2__["nlToBr"]; });

/* harmony import */ var _get_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-notes */ "./src/components/react-sticky-notes/utils/get-notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNotes", function() { return _get_notes__WEBPACK_IMPORTED_MODULE_3__["getNotes"]; });

/* harmony import */ var _get_element_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-element-style */ "./src/components/react-sticky-notes/utils/get-element-style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementStyle", function() { return _get_element_style__WEBPACK_IMPORTED_MODULE_4__["getElementStyle"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/components/react-sticky-notes/utils/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconAdd", function() { return _icons__WEBPACK_IMPORTED_MODULE_5__["iconAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconMenu", function() { return _icons__WEBPACK_IMPORTED_MODULE_5__["iconMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iconTrash", function() { return _icons__WEBPACK_IMPORTED_MODULE_5__["iconTrash"]; });









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
var nlToBr = function nlToBr(str) {
  return str ? str.replace(/(?:\r\n|\r|\n)/g, '<br>') : '';
};

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