webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tags_cloud_tags_cloud__ = __webpack_require__(96);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MyGenres = function (_Component) {
  _inherits(MyGenres, _Component);

  function MyGenres() {
    _classCallCheck(this, MyGenres);

    var _this = _possibleConstructorReturn(this, (MyGenres.__proto__ || Object.getPrototypeOf(MyGenres)).call(this));

    _this.tags = new Map();
    _this.tags.set('Rock', { name: 'Rock', selected: false });
    _this.tags.set('Jazz', { name: 'Jazz', selected: false });
    _this.tags.set('Blues', { name: 'Blues', selected: false });

    _this.state = {
      tags: _this.tags
    };
    return _this;
  }

  _createClass(MyGenres, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      tag.selected = !tag.selected;
      this.setState({
        tags: this.tags
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-genres-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.state.tags, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyGenres;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyGenres);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tags_cloud_tags_cloud__ = __webpack_require__(96);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MyInstruments = function (_Component) {
  _inherits(MyInstruments, _Component);

  function MyInstruments(props) {
    _classCallCheck(this, MyInstruments);

    var _this = _possibleConstructorReturn(this, (MyInstruments.__proto__ || Object.getPrototypeOf(MyInstruments)).call(this, props));

    _this.tags = new Map();
    _this.tags.set('Guitar', { name: 'Guitar', selected: false });
    _this.tags.set('Banjo', { name: 'Banjo', selected: false });
    _this.tags.set('Drums', { name: 'Drums', selected: false });

    _this.state = {
      tags: _this.tags
    };
    return _this;
  }

  _createClass(MyInstruments, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      tag.selected = !tag.selected;
      this.setState({
        tags: this.tags
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-instruments-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.state.tags, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyInstruments;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyInstruments);

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(92)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./profile.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./profile.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(91)(undefined);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0; }\n\nhtml, body {\n  height: 100%; }\n\nul {\n  list-style: none; }\n\na {\n  color: inherit; }\n\n.profile-component {\n  padding: 2%; }\n  .profile-component .profile-box img.profile-img {\n    min-width: 200px;\n    min-height: 200px;\n    background-color: black; }\n  .profile-component .profile-content {\n    display: flex;\n    flex-direction: row; }\n    .profile-component .profile-content .profile-nav {\n      padding: 2% 0;\n      flex-wrap: nowrap; }\n    .profile-component .profile-content .profile-body {\n      padding: 2% 0;\n      margin-left: 10px; }\n", ""]);

// exports


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_bands__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_genres__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_instruments__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_scss__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__profile_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'profile-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'profile-box' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'profile-img' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'stage-name' },
            'Stage name'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bio' },
            'Bio...'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'profile-content' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'profile-nav' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mybands' },
                  'My bands'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mygenres' },
                  'My Genres'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/myinstruments' },
                  'My Instruments'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'profile-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mybands', component: __WEBPACK_IMPORTED_MODULE_2__my_bands__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mygenres', component: __WEBPACK_IMPORTED_MODULE_3__my_genres__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/myinstruments', component: __WEBPACK_IMPORTED_MODULE_4__my_instruments__["a" /* default */] })
          )
        )
      );
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TagsCloud = function (_Component) {
  _inherits(TagsCloud, _Component);

  function TagsCloud(props) {
    _classCallCheck(this, TagsCloud);

    return _possibleConstructorReturn(this, (TagsCloud.__proto__ || Object.getPrototypeOf(TagsCloud)).call(this, props));
  }

  _createClass(TagsCloud, [{
    key: 'onClick',
    value: function onClick(tag) {
      if (this.props.onTagClick) {
        this.props.onTagClick(tag);
      }
    }
  }, {
    key: 'renderTags',
    value: function renderTags() {
      var _this2 = this;

      var list = [];

      this.props.tags.forEach(function (value, key) {
        list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: key, style: { border: value.selected ? '1px solid black' : '' }, onClick: function onClick(event) {
              return _this2.onClick(value);
            } },
          value.name
        ));
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        null,
        list
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'tags-cloud-component' },
        this.renderTags()
      );
    }
  }]);

  return TagsCloud;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TagsCloud);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MyBands = function (_Component) {
  _inherits(MyBands, _Component);

  function MyBands() {
    _classCallCheck(this, MyBands);

    return _possibleConstructorReturn(this, (MyBands.__proto__ || Object.getPrototypeOf(MyBands)).apply(this, arguments));
  }

  _createClass(MyBands, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "my-bands-component" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            null,
            "Band 1..."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            null,
            "Band 2..."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            null,
            "Band 3..."
          )
        )
      );
    }
  }]);

  return MyBands;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyBands);

/***/ })

});