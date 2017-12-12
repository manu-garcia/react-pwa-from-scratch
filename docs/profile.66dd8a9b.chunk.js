webpackJsonp([0],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bands__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__genres__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instruments__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_scss__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__profile_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var Profile = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (store) {
  return {
    profile: store.profile
  };
}), _dec(_class = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions_profile_actions__["a" /* fetchProfile */])());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            this.props.profile.stageName
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'bio' },
            this.props.profile.bio
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
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mybands' },
                  'My bands'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/mygenres' },
                  'My Genres'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["b" /* Link */],
                  { to: this.props.match.url + '/myinstruments' },
                  'My Instruments'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'profile-body' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mybands', component: __WEBPACK_IMPORTED_MODULE_3__bands__["a" /* default */] }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/mygenres', render: function render(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__genres__["a" /* default */], { genres: _this2.props.profile.genres });
              } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["c" /* Route */], { path: this.props.match.url + '/myinstruments', render: function render(props) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__instruments__["a" /* default */], { instruments: _this2.props.profile.instruments });
              } })
          )
        )
      );
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);


/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchProfile;
/* unused harmony export setInstruments */
/* unused harmony export setGenre */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_db__ = __webpack_require__(305);




function fetchProfile() {

  // Offline first method to read the profile
  return __WEBPACK_IMPORTED_MODULE_1__services_db__["a" /* default */].fetchFromDB({
    eventType: "FETCH_PROFILE",
    name: 'profiles',
    id: __WEBPACK_IMPORTED_MODULE_0__services_session__["a" /* default */].getUserId()
  });
};

function setInstruments(instruments) {
  return {
    type: "SET_INSTRUMENTS",
    data: instruments
  };
};

function setGenre(genre) {
  return {
    type: "SET_GENRE",
    data: genre
  };
};

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
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
    key: "onClick",
    value: function onClick(tag) {
      if (this.props.onTagClick) {
        this.props.onTagClick(tag);
      }
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      var _this2 = this;

      var list = [];

      if (this.props.tags) {
        Object.keys(this.props.tags).forEach(function (value, key) {
          list.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { key: key, onClick: function onClick(event) {
                return _this2.onClick(value);
              } },
            value
          ));
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        null,
        list
      );
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "tags-cloud-component" },
        this.renderTags()
      );
    }
  }]);

  return TagsCloud;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TagsCloud);

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
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
          )
        )
      );
    }
  }]);

  return MyBands;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyBands);

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyGenres = function (_Component) {
  _inherits(MyGenres, _Component);

  function MyGenres() {
    _classCallCheck(this, MyGenres);

    return _possibleConstructorReturn(this, (MyGenres.__proto__ || Object.getPrototypeOf(MyGenres)).apply(this, arguments));
  }

  _createClass(MyGenres, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      // tag.selected = !tag.selected;
      // this.props.dispatch(setGenres(this.selectGenre(tag)));
      // this.setState({
      //   tags: this.tags
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-genres-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.props.genres, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyGenres;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyGenres);

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * The session service would keep data related to the current user session, abstracting 
 * the app from the real session manager.
 * 
 */

var Session = function () {
  function Session() {
    _classCallCheck(this, Session);
  }

  _createClass(Session, [{
    key: 'getUserId',


    /**
     * Gets the current user internal and db autogenerated id.
     * 
     */
    value: function getUserId() {
      return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser.uid;
    }
  }]);

  return Session;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Session());

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DB_NAME */
/* unused harmony export DB_VERSION */
/* unused harmony export storeNames */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_idb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_idb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Pomise-like warapper over IndexedDB



// Current database name and version
var DB_NAME = 'react-pwa';
var DB_VERSION = 1;
var storeNames = ['profiles'];

/**
 * DB service will encapsulate access to both offline and online databases.
 * 
 * Offline database is the browser IndexedDB, used through a lightweight
 * promise-like wrapper called idb.
 * 
 * Online database is Firebase Realtime DB. Implements observers over data
 * changes a well as promises.
 * 
 */

var DB = function () {
  function DB() {
    _classCallCheck(this, DB);
  }

  _createClass(DB, [{
    key: 'openDatabase',


    /**
     * Opens offline databse conection and creates all necesary data stores.
     * 
     * TODO: should not be firebase initialised here too!?
     * 
     */
    value: function openDatabase() {

      // If there is no support for service workers, we wont use DB for offline first techniques
      if (!navigator.serviceWorker) {
        return Promise.resolve();
      }

      // Open a connection and initialise all stores
      this._dbPromise = __WEBPACK_IMPORTED_MODULE_0_idb___default.a.open(DB_NAME, DB_VERSION, function (upgradeDb) {

        // Initialise all stores.
        storeNames.forEach(function (storeName) {
          upgradeDb.createObjectStore(storeName);
        });
      });
    }

    /**
     * Return a promise which will resolve on data loaded from the offline database.
     * 
     * @param {string} name: name of the object store to be read.
     * @param {string/number} id: id as index in a key/value pair to be read
     * 
     */

  }, {
    key: 'getOfflineData',
    value: function getOfflineData(name, id) {

      return this._dbPromise.then(function (db) {

        if (!db) return;

        return db.transaction(name).objectStore(name).get(id);
      });
    }

    /**
     * Return a promise that will resolve in data saved to the offline database.
     * 
     * @param {string} name: name of the object store to be written.
     * @param {string/number} id: id as index in a key/value pair to be written.
     * @param {any} data: any data type as value in a key/value pair to be written.
     * 
     */

  }, {
    key: 'setOfflineData',
    value: function setOfflineData(name, id, data) {

      return this._dbPromise.then(function (db) {

        if (!db) return;

        var tx = db.transaction(name, 'readwrite');
        tx.objectStore(name).put(data, id);

        return tx.complete;
      });
    }

    /**
     * An Offline first implementation of fecth.
     * 
     * Return a promise that will reolve in data read first from the offline database and,
     * a dispatch even will be trigger with the offline-data. Only after that data will 
     * be read from the online database and a second dispatch event will be trigger with
     * the online-read data.
     * 
     * @param {object} param0, where:
     * 
     */

  }, {
    key: 'fetchFromDB',
    value: function fetchFromDB(_ref) {
      var _this = this;

      var _ref$name = _ref.name,
          name = _ref$name === undefined ? null : _ref$name,
          _ref$id = _ref.id,
          id = _ref$id === undefined ? null : _ref$id,
          _ref$eventType = _ref.eventType,
          eventType = _ref$eventType === undefined ? null : _ref$eventType,
          _ref$dispatchCB = _ref.dispatchCB,
          dispatchCB = _ref$dispatchCB === undefined ? null : _ref$dispatchCB;


      return function (dispatch) {

        // Get first the offline data if any
        _this.getOfflineData(name, id).then(function (offlineData) {

          // Tell the application we have the offline data.
          dispatch({
            type: eventType,
            data: offlineData
          });

          // If there is an id, compose the url
          var resourceURL = name;
          if (id) {
            resourceURL += '/' + id;
          }

          // Get now the online data if there is connectivity. That is actually a subscription.
          // So every time there is a change on the data, we will get notified here.
          __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.database().ref().child(resourceURL).on('value', function (snapshot) {

            // Save the new data in the offline database
            _this.setOfflineData(name, id, snapshot.val()).then(function () {

              // Tell the application we have the online new fresh data.
              dispatch({
                type: eventType,
                data: snapshot.val()
              });
            });
          });
        });
      };
    }
  }]);

  return DB;
}();

;

// TODO: DB Initialisation to be relocated

// Instanciate the DB
var theDB = new DB();

// Open cnonection and create stores
theDB.openDatabase();

/* harmony default export */ __webpack_exports__["a"] = (theDB);

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (true) {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_profile_actions__ = __webpack_require__(298);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyInstruments = function (_Component) {
  _inherits(MyInstruments, _Component);

  function MyInstruments() {
    _classCallCheck(this, MyInstruments);

    return _possibleConstructorReturn(this, (MyInstruments.__proto__ || Object.getPrototypeOf(MyInstruments)).apply(this, arguments));
  }

  _createClass(MyInstruments, [{
    key: 'onTagClick',
    value: function onTagClick(tag) {
      // tag.selected = !tag.selected;
      // this.setState({
      //   tags: this.tags
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'my-instruments-component' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_tags_cloud_tags_cloud__["a" /* default */], { tags: this.props.instruments, onTagClick: function onTagClick(tag) {
            return _this2.onTagClick(tag);
          } })
      );
    }
  }]);

  return MyInstruments;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyInstruments);

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(294)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./profile.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--1-2!../../node_modules/sass-loader/lib/loader.js!./profile.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(293)(undefined);
// imports


// module
exports.push([module.i, "*{padding:0;margin:0}body,html{height:100%}ul{list-style:none}a{color:inherit}.profile-component{padding:2%}.profile-component .profile-box img.profile-img{min-width:200px;min-height:200px;background-color:#000}.profile-component .profile-content{display:flex;flex-direction:row}.profile-component .profile-content .profile-nav{padding:2% 0;flex-wrap:nowrap}.profile-component .profile-content .profile-body{padding:2% 0;margin-left:10px}", ""]);

// exports


/***/ })

});