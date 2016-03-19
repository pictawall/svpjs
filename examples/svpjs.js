/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _app = __webpack_require__(2);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _app2.default)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*! (C) WebReflection Mit Style License */
	(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VideoPlayerFactory = __webpack_require__(3);
	
	var _VideoPlayerFactory2 = _interopRequireDefault(_VideoPlayerFactory);
	
	var _SVPElement = __webpack_require__(4);
	
	var _SVPElement2 = _interopRequireDefault(_SVPElement);
	
	var _YoutubeAdapter = __webpack_require__(5);
	
	var _YoutubeAdapter2 = _interopRequireDefault(_YoutubeAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_VideoPlayerFactory2.default.registerPlayerAdapter(_YoutubeAdapter2.default.matcher);
	
	exports.default = _SVPElement2.default;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @class VideoPlayerFactory
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var VideoPlayerFactory = function () {
	  function VideoPlayerFactory() {
	    _classCallCheck(this, VideoPlayerFactory);
	
	    /**
	     * @type {!VideoMatcher[]}
	     * @private
	     */
	    this._playerTypes = [];
	    this._loadingPromises = [];
	  }
	
	  /**
	   *
	   * @returns {!Promise.<VideoPlayerFactory>}
	   */
	
	
	  _createClass(VideoPlayerFactory, [{
	    key: 'ready',
	    value: function ready() {
	      var _this = this;
	
	      return Promise.all(this._loadingPromises).then(function () {
	        return _this;
	      });
	    }
	
	    /**
	     *
	     * @param {!VideoMatcher} type
	     */
	
	  }, {
	    key: 'registerPlayerAdapter',
	    value: function registerPlayerAdapter(type) {
	
	      if (type.onAdded) {
	        var result = type.onAdded();
	        if (result instanceof Promise) {
	          this._loadingPromises.push(result);
	        }
	      }
	
	      this._playerTypes.push(type);
	    }
	
	    /**
	     * @param {!String} url
	     * @param {Object} [initialState = {}] Initial values for the various properties of the adapter.
	     */
	
	  }, {
	    key: 'getAdapterFor',
	    value: function getAdapterFor(url) {
	      var initialState = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	
	      var _iteratorError = void 0;
	
	      try {
	        for (var _iterator = this._playerTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var playerType = _step.value;
	
	
	          /**
	           * @type {VideoAdapter}
	           */
	          var result = playerType.match(url, initialState);
	
	          if (result != null) {
	            return result;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return null;
	    }
	  }]);
	
	  return VideoPlayerFactory;
	}();
	
	exports.default = new VideoPlayerFactory();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = function () {
	  var elementName = arguments.length <= 0 || arguments[0] === void 0 ? 'x-svp-player' : arguments[0];
	
	
	  _VideoPlayerFactory2.default.ready().then(function () {
	    return document.registerElement(elementName, {
	      prototype: SVPElement.prototype
	    });
	  });
	};
	
	var _VideoPlayerFactory = __webpack_require__(3);
	
	var _VideoPlayerFactory2 = _interopRequireDefault(_VideoPlayerFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//function hasSetter(instance, setterName) {
	//
	//  const instanceClass = Object.getPrototypeOf(instance);
	//  const descriptor = Object.getOwnPropertyDescriptor(instanceClass, setterName);
	//
	//  if (!descriptor || !descriptor.set) {
	//    return false;
	//  }
	//}
	
	function compose(composedClass) {
	
	  var proto = composedClass.prototype;
	
	  var attributeChangedCallbacks = {};
	  proto.attributeChangedCallback = function (attrName, oldValue, newValue) {
	    if (attributeChangedCallbacks[attrName]) {
	      attributeChangedCallbacks[attrName].call(this, newValue, oldValue);
	    }
	  };
	
	  return {
	    addBooleanAttribute: function addBooleanAttribute(name) {
	      var onAttributeChange = arguments.length <= 1 || arguments[1] === void 0 ? void 0 : arguments[1];
	
	
	      if (typeof onAttributeChange === 'function') {
	        attributeChangedCallbacks[name] = function (newValue, oldValue) {
	          onAttributeChange.call(this, newValue !== null, oldValue !== null);
	        };
	      }
	
	      Object.defineProperty(proto, name, {
	        get: function get() {
	          return this.hasAttribute(name);
	        },
	
	        set: function set(booleanValue) {
	          if (booleanValue) {
	            this.setAttribute(name, name);
	          } else {
	            this.removeAttribute(name);
	          }
	
	          return this;
	        }
	      });
	
	      return this;
	    },
	    addStringAttribute: function addStringAttribute(name) {
	      var onAttributeChange = arguments.length <= 1 || arguments[1] === void 0 ? void 0 : arguments[1];
	
	
	      if (typeof onAttributeChange === 'function') {
	        attributeChangedCallbacks[name] = onAttributeChange;
	      }
	
	      Object.defineProperty(proto, name, {
	        get: function get() {
	          return this.getAttribute(name);
	        },
	
	        set: function set(value) {
	          this.setAttribute(name, value);
	          return this;
	        }
	      });
	
	      return this;
	    },
	    build: function build() {
	      return composedClass;
	    }
	  };
	}
	
	function _updateAdapter(name) {
	  return function (newValue, oldValue) {
	    if (this._adapter) {
	      this._adapter[name] = newValue;
	    }
	  };
	}
	
	var SVPElement = compose(function (_HTMLElement) {
	  _inherits(_class, _HTMLElement);
	
	  function _class() {
	    _classCallCheck(this, _class);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	  }
	
	  _createClass(_class, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this.createShadowRoot();
	    }
	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      this._createAdapter();
	    }
	  }, {
	    key: '_createAdapter',
	    value: function _createAdapter() {
	      if (this._adapter) {
	        this.shadowRoot.removeChild(this._adapter.playerElement);
	      }
	
	      var url = this.src;
	      if (!url) {
	        this._adapter = null;
	        return;
	      }
	
	      /**
	       * @type {VideoAdapter}
	       * @private
	       */
	      this._adapter = _VideoPlayerFactory2.default.getAdapterFor(url, {
	        autoplay: this.autoplay,
	        controls: this.controls
	      });
	
	      this.shadowRoot.appendChild(this._adapter.playerElement);
	    }
	  }]);
	
	  return _class;
	}(HTMLElement)).addBooleanAttribute('controls', _updateAdapter('controls')).addBooleanAttribute('autoplay').addStringAttribute('src', function () {
	  this._createAdapter();
	}).build();
	
	;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var youtubeIframeLoader = __webpack_require__(6);
	
	var HEIGHT = 390;
	var WIDTH = 640;
	
	var playerNum = 0;
	
	/**
	 * @implements VideoAdapter
	 */
	
	var YoutubePlayerAdapter = function () {
	  function YoutubePlayerAdapter(id, initialState) {
	    _classCallCheck(this, YoutubePlayerAdapter);
	
	    this._state = initialState;
	    this._state.id = id;
	
	    this._playerContainer = document.createElement('div');
	    this._resetPlayer();
	  }
	
	  _createClass(YoutubePlayerAdapter, [{
	    key: '_resetPlayer',
	    value: function _resetPlayer() {
	      var _this = this;
	
	      var containerIdentifier = 'svp-social-video-player-youtube-player-number-' + playerNum++ + '-potato';
	
	      var div = document.createElement('div');
	      div.id = containerIdentifier;
	
	      document.body.appendChild(div);
	
	      var localState = null;
	      if (this._player != null) {
	        console.log(this._player.getPlayerState());
	
	        localState = {
	          currentTime: this._player.getCurrentTime(),
	          playing: this._player.getPlayerState() === YoutubePlayerAdapter.YT.PlayerState.PLAYING
	        };
	      }
	
	      /**
	       * @type YT.Player
	       */
	      this._player = new YoutubePlayerAdapter.YT.Player(containerIdentifier, {
	        height: HEIGHT,
	        width: WIDTH,
	        videoId: this._state.id,
	        playerVars: {
	          autoplay: this._state.autoplay ? 1 : 0,
	          controls: this._state.controls ? 1 : 0,
	          showinfo: this._state.controls ? 1 : 0,
	          fs: this._state.controls ? 1 : 0,
	          //enablejsapi: 1,
	          modestbranding: 1
	        },
	        events: {
	          onReady: function onReady() {
	            if (!localState) {
	              return;
	            }
	
	            _this._player.seekTo(localState.currentTime, false);
	            if (!localState.playing) {
	              _this._player.pauseVideo();
	            } else {
	              _this._player.playVideo();
	            }
	          }
	        }
	      });
	
	      var iframe = document.getElementById(containerIdentifier);
	      document.body.removeChild(iframe);
	      iframe.id = '';
	
	      this._playerContainer.innerHTML = '';
	      this._playerContainer.appendChild(iframe);
	    }
	
	    // READONLY
	
	  }, {
	    key: 'playerElement',
	    get: function get() {
	      return this._playerContainer;
	    }
	
	    // MUTABLE
	
	  }, {
	    key: 'height',
	    set: function set(height) {
	      this._height = height;
	
	      this._player.setSize(this._width, this._height);
	    }
	  }, {
	    key: 'width',
	    set: function set(width) {
	      this._width = width;
	
	      this._player.setSize(this._width, this._height);
	    }
	  }, {
	    key: 'controls',
	    set: function set(controls) {
	      this._state.controls = controls;
	      this._resetPlayer();
	    }
	  }]);
	
	  return YoutubePlayerAdapter;
	}();
	
	/**
	 * @implements VideoMatcher
	 */
	
	
	YoutubePlayerAdapter.matcher = {
	
	  /**
	   * @inheritDoc
	   */
	
	  match: function match(url, initialState) {
	    var matches = url.match(/^(?:https?:\/\/)?(?:(?:www|m)\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/mi);
	
	    if (matches) {
	      var id = matches[1];
	      return new YoutubePlayerAdapter(id, initialState);
	    }
	
	    return null;
	  },
	  onAdded: function onAdded() {
	    if (YoutubePlayerAdapter.YT) {
	      return;
	    }
	
	    return new Promise(function (resolve) {
	      youtubeIframeLoader.load(function (youtube) {
	        YoutubePlayerAdapter.YT = youtube;
	        resolve(youtube);
	      });
	    });
	  }
	};
	
	exports.default = YoutubePlayerAdapter;

/***/ },
/* 6 */
/***/ function(module, exports) {

	(function(window) {
		var YouTubeIframeLoader = {
			src: 'https://www.youtube.com/iframe_api',
			loading: false,
			loaded: false,
			listeners: [],
	
			load: function(callback) {
				var _this = this;
				this.listeners.push(callback);
	
				if(this.loaded) {
					setTimeout(function() {
						_this.done();
					});
					return;
				}
	
				if(this.loading) {
					return;
				}
	
				this.loading = true;
	
				window.onYouTubeIframeAPIReady = function() {
					_this.loaded = true;
					_this.done();
				};
	
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = this.src;
				document.body.appendChild(script);
			},
	
			done: function() {
				delete window.onYouTubeIframeAPIReady;
	
				while(this.listeners.length) {
					this.listeners.pop()(window.YT);
				}
			}
		};
	
		if(typeof module !== 'undefined' && module.exports) {
			module.exports = YouTubeIframeLoader;
		} else {
			window.YouTubeIframeLoader = YouTubeIframeLoader;
		}
	}(window));


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjI2OTQwYWM1OTczYzhlYWM5ZTYiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQvYnVpbGQvZG9jdW1lbnQtcmVnaXN0ZXItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVmlkZW9QbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU1ZQRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2FkYXB0ZXIvWW91dHViZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi95b3V0dWJlLWlmcmFtZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsc0I7Ozs7OztBQ0xBO0FBQ0Esb0JBQW1CLGFBQWEsaUJBQWlCLHVCQUF1QixJQUFJLGVBQWUsZUFBZSx5QkFBeUIsSUFBSSwwQkFBMEIsZUFBZSxtQkFBbUIsNkNBQTZDLGVBQWUsMEZBQTBGLDhCQUE4QixpQkFBaUIscUNBQXFDLGVBQWUsNkRBQTZELG9LQUFvSyxlQUFlLFlBQVksbUJBQW1CLG9CQUFvQixlQUFlLG1IQUFtSCxpQkFBaUIsV0FBVyx3QkFBd0IsU0FBUyxFQUFFLGlCQUFpQixvTEFBb0wsY0FBYyx5QkFBeUIsSUFBSSx3REFBd0QsZUFBZSxzREFBc0QsaUJBQWlCLGNBQWMsNEpBQTRKLGlCQUFpQixxYUFBcWEsc0JB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RGtDO0FBRWxDLGlCQUFRLE9BQVIsRUFGa0M7UUFBWCxDQUF6QixDQUQ0QjtNQUFYLENBQW5CLENBTFE7SUFoQm1CO0VBQS9COzttQkE4QmUscUI7Ozs7OztBQzFJZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoic3ZwanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDYyNjk0MGFjNTk3M2M4ZWFjOWU2XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJ2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQnO1xuaW1wb3J0IHN2cGpzIGZyb20gJy4uL3NyYy9hcHAnO1xuXG5zdnBqcygpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9tYWluLmpzXG4gKiovIiwiLyohIChDKSBXZWJSZWZsZWN0aW9uIE1pdCBTdHlsZSBMaWNlbnNlICovXG4oZnVuY3Rpb24oZSx0LG4scil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcnQoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspdnQoZVtuXSx0KX1mdW5jdGlvbiBpdChlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI7dDxuO3QrKylyPWVbdF0sbnQocixiW290KHIpXSl9ZnVuY3Rpb24gc3QoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2oodCkmJih2dCh0LGUpLHJ0KHQucXVlcnlTZWxlY3RvckFsbCh3KSxlKSl9fWZ1bmN0aW9uIG90KGUpe3ZhciB0PWUuZ2V0QXR0cmlidXRlKFwiaXNcIiksbj1lLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkscj1TLmNhbGwoeSx0P3YrdC50b1VwcGVyQ2FzZSgpOmQrbik7cmV0dXJuIHQmJi0xPHImJiF1dChuLHQpPy0xOnJ9ZnVuY3Rpb24gdXQoZSx0KXtyZXR1cm4tMTx3LmluZGV4T2YoZSsnW2lzPVwiJyt0KydcIl0nKX1mdW5jdGlvbiBhdChlKXt2YXIgdD1lLmN1cnJlbnRUYXJnZXQsbj1lLmF0dHJDaGFuZ2Uscj1lLmF0dHJOYW1lLGk9ZS50YXJnZXQ7USYmKCFpfHxpPT09dCkmJnQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiZyIT09XCJzdHlsZVwiJiZlLnByZXZWYWx1ZSE9PWUubmV3VmFsdWUmJnQuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHIsbj09PWVbYV0/bnVsbDplLnByZXZWYWx1ZSxuPT09ZVtsXT9udWxsOmUubmV3VmFsdWUpfWZ1bmN0aW9uIGZ0KGUpe3ZhciB0PXN0KGUpO3JldHVybiBmdW5jdGlvbihlKXtYLnB1c2godCxlLnRhcmdldCl9fWZ1bmN0aW9uIGx0KGUpe0smJihLPSExLGUuY3VycmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGgsbHQpKSxydCgoZS50YXJnZXR8fHQpLnF1ZXJ5U2VsZWN0b3JBbGwodyksZS5kZXRhaWw9PT1vP286cyksQiYmcHQoKX1mdW5jdGlvbiBjdChlLHQpe3ZhciBuPXRoaXM7cS5jYWxsKG4sZSx0KSxHLmNhbGwobix7dGFyZ2V0Om59KX1mdW5jdGlvbiBodChlLHQpe0QoZSx0KSxldD9ldC5vYnNlcnZlKGUseik6KEomJihlLnNldEF0dHJpYnV0ZT1jdCxlW2ldPVooZSksZS5hZGRFdmVudExpc3RlbmVyKHAsRykpLGUuYWRkRXZlbnRMaXN0ZW5lcihjLGF0KSksZS5jcmVhdGVkQ2FsbGJhY2smJlEmJihlLmNyZWF0ZWQ9ITAsZS5jcmVhdGVkQ2FsbGJhY2soKSxlLmNyZWF0ZWQ9ITEpfWZ1bmN0aW9uIHB0KCl7Zm9yKHZhciBlLHQ9MCxuPUYubGVuZ3RoO3Q8bjt0KyspZT1GW3RdLEUuY29udGFpbnMoZSl8fChuLS0sRi5zcGxpY2UodC0tLDEpLHZ0KGUsbykpfWZ1bmN0aW9uIGR0KGUpe3Rocm93IG5ldyBFcnJvcihcIkEgXCIrZStcIiB0eXBlIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKX1mdW5jdGlvbiB2dChlLHQpe3ZhciBuLHI9b3QoZSk7LTE8ciYmKHR0KGUsYltyXSkscj0wLHQ9PT1zJiYhZVtzXT8oZVtvXT0hMSxlW3NdPSEwLHI9MSxCJiZTLmNhbGwoRixlKTwwJiZGLnB1c2goZSkpOnQ9PT1vJiYhZVtvXSYmKGVbc109ITEsZVtvXT0hMCxyPTEpLHImJihuPWVbdCtcIkNhbGxiYWNrXCJdKSYmbi5jYWxsKGUpKX1pZihyIGluIHQpcmV0dXJuO3ZhciBpPVwiX19cIityKyhNYXRoLnJhbmRvbSgpKjFlNT4+MCkscz1cImF0dGFjaGVkXCIsbz1cImRldGFjaGVkXCIsdT1cImV4dGVuZHNcIixhPVwiQURESVRJT05cIixmPVwiTU9ESUZJQ0FUSU9OXCIsbD1cIlJFTU9WQUxcIixjPVwiRE9NQXR0ck1vZGlmaWVkXCIsaD1cIkRPTUNvbnRlbnRMb2FkZWRcIixwPVwiRE9NU3VidHJlZU1vZGlmaWVkXCIsZD1cIjxcIix2PVwiPVwiLG09L15bQS1aXVtBLVowLTldKig/Oi1bQS1aMC05XSspKyQvLGc9W1wiQU5OT1RBVElPTi1YTUxcIixcIkNPTE9SLVBST0ZJTEVcIixcIkZPTlQtRkFDRVwiLFwiRk9OVC1GQUNFLVNSQ1wiLFwiRk9OVC1GQUNFLVVSSVwiLFwiRk9OVC1GQUNFLUZPUk1BVFwiLFwiRk9OVC1GQUNFLU5BTUVcIixcIk1JU1NJTkctR0xZUEhcIl0seT1bXSxiPVtdLHc9XCJcIixFPXQuZG9jdW1lbnRFbGVtZW50LFM9eS5pbmRleE9mfHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy5sZW5ndGg7dC0tJiZ0aGlzW3RdIT09ZTspO3JldHVybiB0fSx4PW4ucHJvdG90eXBlLFQ9eC5oYXNPd25Qcm9wZXJ0eSxOPXguaXNQcm90b3R5cGVPZixDPW4uZGVmaW5lUHJvcGVydHksaz1uLmdldE93blByb3BlcnR5RGVzY3JpcHRvcixMPW4uZ2V0T3duUHJvcGVydHlOYW1lcyxBPW4uZ2V0UHJvdG90eXBlT2YsTz1uLnNldFByb3RvdHlwZU9mLE09ISFuLl9fcHJvdG9fXyxfPW4uY3JlYXRlfHxmdW5jdGlvbiBtdChlKXtyZXR1cm4gZT8obXQucHJvdG90eXBlPWUsbmV3IG10KTp0aGlzfSxEPU98fChNP2Z1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX06TCYmaz9mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG4scj1MKHQpLGk9MCxzPXIubGVuZ3RoO2k8cztpKyspbj1yW2ldLFQuY2FsbChlLG4pfHxDKGUsbixrKHQsbikpfXJldHVybiBmdW5jdGlvbih0LG4pe2RvIGUodCxuKTt3aGlsZSgobj1BKG4pKSYmIU4uY2FsbChuLHQpKTtyZXR1cm4gdH19KCk6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4gaW4gdCllW25dPXRbbl07cmV0dXJuIGV9KSxQPWUuTXV0YXRpb25PYnNlcnZlcnx8ZS5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLEg9KGUuSFRNTEVsZW1lbnR8fGUuRWxlbWVudHx8ZS5Ob2RlKS5wcm90b3R5cGUsQj0hTi5jYWxsKEgsRSksaj1CP2Z1bmN0aW9uKGUpe3JldHVybiBlLm5vZGVUeXBlPT09MX06ZnVuY3Rpb24oZSl7cmV0dXJuIE4uY2FsbChILGUpfSxGPUImJltdLEk9SC5jbG9uZU5vZGUscT1ILnNldEF0dHJpYnV0ZSxSPUgucmVtb3ZlQXR0cmlidXRlLFU9dC5jcmVhdGVFbGVtZW50LHo9UCYme2F0dHJpYnV0ZXM6ITAsY2hhcmFjdGVyRGF0YTohMCxhdHRyaWJ1dGVPbGRWYWx1ZTohMH0sVz1QfHxmdW5jdGlvbihlKXtKPSExLEUucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLFcpfSxYLFY9ZS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGUud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlLm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZS5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24oZSl7c2V0VGltZW91dChlLDEwKX0sJD0hMSxKPSEwLEs9ITAsUT0hMCxHLFksWixldCx0dCxudDtPfHxNPyh0dD1mdW5jdGlvbihlLHQpe04uY2FsbCh0LGUpfHxodChlLHQpfSxudD1odCk6KHR0PWZ1bmN0aW9uKGUsdCl7ZVtpXXx8KGVbaV09bighMCksaHQoZSx0KSl9LG50PXR0KSxCPyhKPSExLGZ1bmN0aW9uKCl7dmFyIGU9ayhILFwiYWRkRXZlbnRMaXN0ZW5lclwiKSx0PWUudmFsdWUsbj1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQ3VzdG9tRXZlbnQoYyx7YnViYmxlczohMH0pO3QuYXR0ck5hbWU9ZSx0LnByZXZWYWx1ZT10aGlzLmdldEF0dHJpYnV0ZShlKSx0Lm5ld1ZhbHVlPW51bGwsdFtsXT10LmF0dHJDaGFuZ2U9MixSLmNhbGwodGhpcyxlKSx0aGlzLmRpc3BhdGNoRXZlbnQodCl9LHI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmhhc0F0dHJpYnV0ZShlKSxyPW4mJnRoaXMuZ2V0QXR0cmlidXRlKGUpLGk9bmV3IEN1c3RvbUV2ZW50KGMse2J1YmJsZXM6ITB9KTtxLmNhbGwodGhpcyxlLHQpLGkuYXR0ck5hbWU9ZSxpLnByZXZWYWx1ZT1uP3I6bnVsbCxpLm5ld1ZhbHVlPXQsbj9pW2ZdPWkuYXR0ckNoYW5nZT0xOmlbYV09aS5hdHRyQ2hhbmdlPTAsdGhpcy5kaXNwYXRjaEV2ZW50KGkpfSxzPWZ1bmN0aW9uKGUpe3ZhciB0PWUuY3VycmVudFRhcmdldCxuPXRbaV0scj1lLnByb3BlcnR5TmFtZSxzO24uaGFzT3duUHJvcGVydHkocikmJihuPW5bcl0scz1uZXcgQ3VzdG9tRXZlbnQoYyx7YnViYmxlczohMH0pLHMuYXR0ck5hbWU9bi5uYW1lLHMucHJldlZhbHVlPW4udmFsdWV8fG51bGwscy5uZXdWYWx1ZT1uLnZhbHVlPXRbcl18fG51bGwscy5wcmV2VmFsdWU9PW51bGw/c1thXT1zLmF0dHJDaGFuZ2U9MDpzW2ZdPXMuYXR0ckNoYW5nZT0xLHQuZGlzcGF0Y2hFdmVudChzKSl9O2UudmFsdWU9ZnVuY3Rpb24oZSxvLHUpe2U9PT1jJiZ0aGlzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmdGhpcy5zZXRBdHRyaWJ1dGUhPT1yJiYodGhpc1tpXT17Y2xhc3NOYW1lOntuYW1lOlwiY2xhc3NcIix2YWx1ZTp0aGlzLmNsYXNzTmFtZX19LHRoaXMuc2V0QXR0cmlidXRlPXIsdGhpcy5yZW1vdmVBdHRyaWJ1dGU9bix0LmNhbGwodGhpcyxcInByb3BlcnR5Y2hhbmdlXCIscykpLHQuY2FsbCh0aGlzLGUsbyx1KX0sQyhILFwiYWRkRXZlbnRMaXN0ZW5lclwiLGUpfSgpKTpQfHwoRS5hZGRFdmVudExpc3RlbmVyKGMsVyksRS5zZXRBdHRyaWJ1dGUoaSwxKSxFLnJlbW92ZUF0dHJpYnV0ZShpKSxKJiYoRz1mdW5jdGlvbihlKXt2YXIgdD10aGlzLG4scixzO2lmKHQ9PT1lLnRhcmdldCl7bj10W2ldLHRbaV09cj1aKHQpO2ZvcihzIGluIHIpe2lmKCEocyBpbiBuKSlyZXR1cm4gWSgwLHQscyxuW3NdLHJbc10sYSk7aWYocltzXSE9PW5bc10pcmV0dXJuIFkoMSx0LHMsbltzXSxyW3NdLGYpfWZvcihzIGluIG4paWYoIShzIGluIHIpKXJldHVybiBZKDIsdCxzLG5bc10scltzXSxsKX19LFk9ZnVuY3Rpb24oZSx0LG4scixpLHMpe3ZhciBvPXthdHRyQ2hhbmdlOmUsY3VycmVudFRhcmdldDp0LGF0dHJOYW1lOm4scHJldlZhbHVlOnIsbmV3VmFsdWU6aX07b1tzXT1lLGF0KG8pfSxaPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHI9e30saT1lLmF0dHJpYnV0ZXMscz0wLG89aS5sZW5ndGg7czxvO3MrKyl0PWlbc10sbj10Lm5hbWUsbiE9PVwic2V0QXR0cmlidXRlXCImJihyW25dPXQudmFsdWUpO3JldHVybiByfSkpLHRbcl09ZnVuY3Rpb24obixyKXtjPW4udG9VcHBlckNhc2UoKSwkfHwoJD0hMCxQPyhldD1mdW5jdGlvbihlLHQpe2Z1bmN0aW9uIG4oZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjt0KGVbbisrXSkpO31yZXR1cm4gbmV3IFAoZnVuY3Rpb24ocil7Zm9yKHZhciBpLHMsbyx1PTAsYT1yLmxlbmd0aDt1PGE7dSsrKWk9clt1XSxpLnR5cGU9PT1cImNoaWxkTGlzdFwiPyhuKGkuYWRkZWROb2RlcyxlKSxuKGkucmVtb3ZlZE5vZGVzLHQpKToocz1pLnRhcmdldCxRJiZzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmaS5hdHRyaWJ1dGVOYW1lIT09XCJzdHlsZVwiJiYobz1zLmdldEF0dHJpYnV0ZShpLmF0dHJpYnV0ZU5hbWUpLG8hPT1pLm9sZFZhbHVlJiZzLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhpLmF0dHJpYnV0ZU5hbWUsaS5vbGRWYWx1ZSxvKSkpfSl9KHN0KHMpLHN0KG8pKSxldC5vYnNlcnZlKHQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpOihYPVtdLFYoZnVuY3Rpb24gRSgpe3doaWxlKFgubGVuZ3RoKVguc2hpZnQoKS5jYWxsKG51bGwsWC5zaGlmdCgpKTtWKEUpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiRE9NTm9kZUluc2VydGVkXCIsZnQocykpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVSZW1vdmVkXCIsZnQobykpKSx0LmFkZEV2ZW50TGlzdGVuZXIoaCxsdCksdC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGx0KSx0LmNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSxuKXt2YXIgcj1VLmFwcGx5KHQsYXJndW1lbnRzKSxpPVwiXCIrZSxzPVMuY2FsbCh5LChuP3Y6ZCkrKG58fGkpLnRvVXBwZXJDYXNlKCkpLG89LTE8cztyZXR1cm4gbiYmKHIuc2V0QXR0cmlidXRlKFwiaXNcIixuPW4udG9Mb3dlckNhc2UoKSksbyYmKG89dXQoaS50b1VwcGVyQ2FzZSgpLG4pKSksUT0hdC5jcmVhdGVFbGVtZW50LmlubmVySFRNTEhlbHBlcixvJiZudChyLGJbc10pLHJ9LEguY2xvbmVOb2RlPWZ1bmN0aW9uKGUpe3ZhciB0PUkuY2FsbCh0aGlzLCEhZSksbj1vdCh0KTtyZXR1cm4tMTxuJiZudCh0LGJbbl0pLGUmJml0KHQucXVlcnlTZWxlY3RvckFsbCh3KSksdH0pLC0yPFMuY2FsbCh5LHYrYykrUy5jYWxsKHksZCtjKSYmZHQobik7aWYoIW0udGVzdChjKXx8LTE8Uy5jYWxsKGcsYykpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHR5cGUgXCIrbitcIiBpcyBpbnZhbGlkXCIpO3ZhciBpPWZ1bmN0aW9uKCl7cmV0dXJuIGY/dC5jcmVhdGVFbGVtZW50KGwsYyk6dC5jcmVhdGVFbGVtZW50KGwpfSxhPXJ8fHgsZj1ULmNhbGwoYSx1KSxsPWY/clt1XS50b1VwcGVyQ2FzZSgpOmMsYyxwO3JldHVybiBmJiYtMTxTLmNhbGwoeSxkK2wpJiZkdChsKSxwPXkucHVzaCgoZj92OmQpK2MpLTEsdz13LmNvbmNhdCh3Lmxlbmd0aD9cIixcIjpcIlwiLGY/bCsnW2lzPVwiJytuLnRvTG93ZXJDYXNlKCkrJ1wiXSc6bCksaS5wcm90b3R5cGU9YltwXT1ULmNhbGwoYSxcInByb3RvdHlwZVwiKT9hLnByb3RvdHlwZTpfKEgpLHJ0KHQucXVlcnlTZWxlY3RvckFsbCh3KSxzKSxpfX0pKHdpbmRvdyxkb2N1bWVudCxPYmplY3QsXCJyZWdpc3RlckVsZW1lbnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZG9jdW1lbnQtcmVnaXN0ZXItZWxlbWVudC9idWlsZC9kb2N1bWVudC1yZWdpc3Rlci1lbGVtZW50LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tICcuL2xpYi9WaWRlb1BsYXllckZhY3RvcnknO1xuaW1wb3J0IFNWUEVsZW1lbnQgZnJvbSAnLi9saWIvU1ZQRWxlbWVudCc7XG5cbmltcG9ydCBZb3V0dWJlQWRhcHRlciBmcm9tICcuL2xpYi9hZGFwdGVyL1lvdXR1YmVBZGFwdGVyJztcblxucGxheWVyRmFjdG9yeS5yZWdpc3RlclBsYXllckFkYXB0ZXIoWW91dHViZUFkYXB0ZXIubWF0Y2hlcik7XG5cbmV4cG9ydCBkZWZhdWx0IFNWUEVsZW1lbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQGNsYXNzIFZpZGVvUGxheWVyRmFjdG9yeVxuICovXG5jbGFzcyBWaWRlb1BsYXllckZhY3Rvcnkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIEB0eXBlIHshVmlkZW9NYXRjaGVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wbGF5ZXJUeXBlcyA9IFtdO1xuICAgIHRoaXMuX2xvYWRpbmdQcm9taXNlcyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHshUHJvbWlzZS48VmlkZW9QbGF5ZXJGYWN0b3J5Pn1cbiAgICovXG4gIHJlYWR5KCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLl9sb2FkaW5nUHJvbWlzZXMpLnRoZW4oKCkgPT4gdGhpcyk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHshVmlkZW9NYXRjaGVyfSB0eXBlXG4gICAqL1xuICByZWdpc3RlclBsYXllckFkYXB0ZXIodHlwZSkge1xuXG4gICAgaWYgKHR5cGUub25BZGRlZCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdHlwZS5vbkFkZGVkKCk7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB0aGlzLl9sb2FkaW5nUHJvbWlzZXMucHVzaChyZXN1bHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BsYXllclR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHshU3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtPYmplY3R9IFtpbml0aWFsU3RhdGUgPSB7fV0gSW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSB2YXJpb3VzIHByb3BlcnRpZXMgb2YgdGhlIGFkYXB0ZXIuXG4gICAqL1xuICBnZXRBZGFwdGVyRm9yKHVybCwgaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgICBmb3IgKGxldCBwbGF5ZXJUeXBlIG9mIHRoaXMuX3BsYXllclR5cGVzKSB7XG5cbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUge1ZpZGVvQWRhcHRlcn1cbiAgICAgICAqL1xuICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyVHlwZS5tYXRjaCh1cmwsIGluaXRpYWxTdGF0ZSk7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWaWRlb1BsYXllckZhY3RvcnkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xpYi9WaWRlb1BsYXllckZhY3RvcnkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBmYWN0b3J5IGZyb20gJy4vVmlkZW9QbGF5ZXJGYWN0b3J5JztcblxuLy9mdW5jdGlvbiBoYXNTZXR0ZXIoaW5zdGFuY2UsIHNldHRlck5hbWUpIHtcbi8vXG4vLyAgY29uc3QgaW5zdGFuY2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihpbnN0YW5jZSk7XG4vLyAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaW5zdGFuY2VDbGFzcywgc2V0dGVyTmFtZSk7XG4vL1xuLy8gIGlmICghZGVzY3JpcHRvciB8fCAhZGVzY3JpcHRvci5zZXQpIHtcbi8vICAgIHJldHVybiBmYWxzZTtcbi8vICB9XG4vL31cblxuZnVuY3Rpb24gY29tcG9zZShjb21wb3NlZENsYXNzKSB7XG5cbiAgY29uc3QgcHJvdG8gPSBjb21wb3NlZENsYXNzLnByb3RvdHlwZTtcblxuICBjb25zdCBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tzID0ge307XG4gIHByb3RvLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgaWYgKGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja3NbYXR0ck5hbWVdKSB7XG4gICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tzW2F0dHJOYW1lXS5jYWxsKHRoaXMsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkQm9vbGVhbkF0dHJpYnV0ZShuYW1lLCBvbkF0dHJpYnV0ZUNoYW5nZSA9IHZvaWQgMCkge1xuXG4gICAgICBpZiAodHlwZW9mIG9uQXR0cmlidXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja3NbbmFtZV0gPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgb25BdHRyaWJ1dGVDaGFuZ2UuY2FsbCh0aGlzLCBuZXdWYWx1ZSAhPT0gbnVsbCwgb2xkVmFsdWUgIT09IG51bGwpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2xlYW5WYWx1ZSkge1xuICAgICAgICAgIGlmIChib29sZWFuVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhZGRTdHJpbmdBdHRyaWJ1dGUobmFtZSwgb25BdHRyaWJ1dGVDaGFuZ2UgPSB2b2lkIDApIHtcblxuICAgICAgaWYgKHR5cGVvZiBvbkF0dHJpYnV0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tzW25hbWVdID0gb25BdHRyaWJ1dGVDaGFuZ2U7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYnVpbGQoKSB7XG4gICAgICByZXR1cm4gY29tcG9zZWRDbGFzcztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVBZGFwdGVyKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAodGhpcy5fYWRhcHRlcikge1xuICAgICAgdGhpcy5fYWRhcHRlcltuYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBTVlBFbGVtZW50ID0gY29tcG9zZShjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY3JlYXRlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuY3JlYXRlU2hhZG93Um9vdCgpO1xuICB9XG5cbiAgYXR0YWNoZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9jcmVhdGVBZGFwdGVyKCk7XG4gIH1cblxuICBfY3JlYXRlQWRhcHRlcigpIHtcbiAgICBpZiAodGhpcy5fYWRhcHRlcikge1xuICAgICAgdGhpcy5zaGFkb3dSb290LnJlbW92ZUNoaWxkKHRoaXMuX2FkYXB0ZXIucGxheWVyRWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5zcmM7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHRoaXMuX2FkYXB0ZXIgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtWaWRlb0FkYXB0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hZGFwdGVyID0gZmFjdG9yeS5nZXRBZGFwdGVyRm9yKHVybCwge1xuICAgICAgYXV0b3BsYXk6IHRoaXMuYXV0b3BsYXksXG4gICAgICBjb250cm9sczogdGhpcy5jb250cm9sc1xuICAgIH0pO1xuXG4gICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX2FkYXB0ZXIucGxheWVyRWxlbWVudCk7XG4gIH1cbn0pXG4gIC5hZGRCb29sZWFuQXR0cmlidXRlKCdjb250cm9scycsIF91cGRhdGVBZGFwdGVyKCdjb250cm9scycpKVxuICAuYWRkQm9vbGVhbkF0dHJpYnV0ZSgnYXV0b3BsYXknKVxuICAuYWRkU3RyaW5nQXR0cmlidXRlKCdzcmMnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY3JlYXRlQWRhcHRlcigpO1xuICB9KVxuICAuYnVpbGQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnROYW1lID0gJ3gtc3ZwLXBsYXllcicpIHtcblxuICBmYWN0b3J5LnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChlbGVtZW50TmFtZSwge1xuICAgICAgcHJvdG90eXBlOiBTVlBFbGVtZW50LnByb3RvdHlwZVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvU1ZQRWxlbWVudC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeW91dHViZUlmcmFtZUxvYWRlciA9IHJlcXVpcmUoJ3lvdXR1YmUtaWZyYW1lJyk7XG5cbmNvbnN0IEhFSUdIVCA9IDM5MDtcbmNvbnN0IFdJRFRIID0gNjQwO1xuXG5sZXQgcGxheWVyTnVtID0gMDtcblxuLyoqXG4gKiBAaW1wbGVtZW50cyBWaWRlb0FkYXB0ZXJcbiAqL1xuY2xhc3MgWW91dHViZVBsYXllckFkYXB0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBpbml0aWFsU3RhdGUpIHtcblxuICAgIHRoaXMuX3N0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuX3N0YXRlLmlkID0gaWQ7XG5cbiAgICB0aGlzLl9wbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9yZXNldFBsYXllcigpO1xuICB9XG5cbiAgX3Jlc2V0UGxheWVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lcklkZW50aWZpZXIgPSBgc3ZwLXNvY2lhbC12aWRlby1wbGF5ZXIteW91dHViZS1wbGF5ZXItbnVtYmVyLSR7cGxheWVyTnVtKyt9LXBvdGF0b2A7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSBjb250YWluZXJJZGVudGlmaWVyO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgbGV0IGxvY2FsU3RhdGUgPSBudWxsO1xuICAgIGlmICh0aGlzLl9wbGF5ZXIgIT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5fcGxheWVyLmdldFBsYXllclN0YXRlKCkpO1xuXG4gICAgICBsb2NhbFN0YXRlID0ge1xuICAgICAgICBjdXJyZW50VGltZTogdGhpcy5fcGxheWVyLmdldEN1cnJlbnRUaW1lKCksXG4gICAgICAgIHBsYXlpbmc6IHRoaXMuX3BsYXllci5nZXRQbGF5ZXJTdGF0ZSgpID09PSBZb3V0dWJlUGxheWVyQWRhcHRlci5ZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEB0eXBlIFlULlBsYXllclxuICAgICAqL1xuICAgIHRoaXMuX3BsYXllciA9IG5ldyBZb3V0dWJlUGxheWVyQWRhcHRlci5ZVC5QbGF5ZXIoY29udGFpbmVySWRlbnRpZmllciwge1xuICAgICAgaGVpZ2h0OiBIRUlHSFQsXG4gICAgICB3aWR0aDogV0lEVEgsXG4gICAgICB2aWRlb0lkOiB0aGlzLl9zdGF0ZS5pZCxcbiAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgYXV0b3BsYXk6IHRoaXMuX3N0YXRlLmF1dG9wbGF5ID8gMSA6IDAsXG4gICAgICAgIGNvbnRyb2xzOiB0aGlzLl9zdGF0ZS5jb250cm9scyA/IDEgOiAwLFxuICAgICAgICBzaG93aW5mbzogdGhpcy5fc3RhdGUuY29udHJvbHMgPyAxIDogMCxcbiAgICAgICAgZnM6IHRoaXMuX3N0YXRlLmNvbnRyb2xzID8gMSA6IDAsXG4gICAgICAgIC8vZW5hYmxlanNhcGk6IDEsXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uUmVhZHk6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIWxvY2FsU3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9wbGF5ZXIuc2Vla1RvKGxvY2FsU3RhdGUuY3VycmVudFRpbWUsIGZhbHNlKTtcbiAgICAgICAgICBpZiAoIWxvY2FsU3RhdGUucGxheWluZykge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBhdXNlVmlkZW8oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWRlbnRpZmllcik7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZS5pZCA9ICcnO1xuXG4gICAgdGhpcy5fcGxheWVyQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuX3BsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICB9XG5cbiAgLy8gUkVBRE9OTFlcblxuICBnZXQgcGxheWVyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVyQ29udGFpbmVyO1xuICB9XG5cbiAgLy8gTVVUQUJMRVxuICBzZXQgaGVpZ2h0KGhlaWdodCkge1xuICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcblxuICAgIHRoaXMuX3BsYXllci5zZXRTaXplKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICB9XG5cbiAgc2V0IHdpZHRoKHdpZHRoKSB7XG4gICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcblxuICAgIHRoaXMuX3BsYXllci5zZXRTaXplKHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICB9XG5cbiAgc2V0IGNvbnRyb2xzKGNvbnRyb2xzKSB7XG4gICAgdGhpcy5fc3RhdGUuY29udHJvbHMgPSBjb250cm9scztcbiAgICB0aGlzLl9yZXNldFBsYXllcigpO1xuICB9XG59XG5cbi8qKlxuICogQGltcGxlbWVudHMgVmlkZW9NYXRjaGVyXG4gKi9cbllvdXR1YmVQbGF5ZXJBZGFwdGVyLm1hdGNoZXIgPSB7XG5cbiAgLyoqXG4gICAqIEBpbmhlcml0RG9jXG4gICAqL1xuICBtYXRjaCh1cmwsIGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goL14oPzpodHRwcz86XFwvXFwvKT8oPzooPzp3d3d8bSlcXC4pPyg/OnlvdXR1XFwuYmVcXC98eW91dHViZSg/Oi1ub2Nvb2tpZSk/XFwuY29tXFwvKD86ZW1iZWRcXC98dlxcL3x3YXRjaFxcP3Y9fHdhdGNoXFw/Lismdj0pKSgoXFx3fC0pezExfSkoPzpcXFMrKT8kL21pKTtcblxuICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICBjb25zdCBpZCA9IG1hdGNoZXNbMV07XG4gICAgICByZXR1cm4gbmV3IFlvdXR1YmVQbGF5ZXJBZGFwdGVyKGlkLCBpbml0aWFsU3RhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9LFxuXG4gIG9uQWRkZWQoKSB7XG4gICAgaWYgKFlvdXR1YmVQbGF5ZXJBZGFwdGVyLllUKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgeW91dHViZUlmcmFtZUxvYWRlci5sb2FkKHlvdXR1YmUgPT4ge1xuICAgICAgICBZb3V0dWJlUGxheWVyQWRhcHRlci5ZVCA9IHlvdXR1YmU7XG4gICAgICAgIHJlc29sdmUoeW91dHViZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgWW91dHViZVBsYXllckFkYXB0ZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvYWRhcHRlci9Zb3V0dWJlQWRhcHRlci5qc1xuICoqLyIsIihmdW5jdGlvbih3aW5kb3cpIHtcblx0dmFyIFlvdVR1YmVJZnJhbWVMb2FkZXIgPSB7XG5cdFx0c3JjOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaScsXG5cdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRsaXN0ZW5lcnM6IFtdLFxuXG5cdFx0bG9hZDogZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0XHR0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblxuXHRcdFx0aWYodGhpcy5sb2FkZWQpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfdGhpcy5kb25lKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMubG9hZGluZykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XG5cblx0XHRcdHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdGhpcy5sb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRfdGhpcy5kb25lKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuXHRcdFx0c2NyaXB0LnNyYyA9IHRoaXMuc3JjO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHRcdH0sXG5cblx0XHRkb25lOiBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHk7XG5cblx0XHRcdHdoaWxlKHRoaXMubGlzdGVuZXJzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3RlbmVycy5wb3AoKSh3aW5kb3cuWVQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRpZih0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gWW91VHViZUlmcmFtZUxvYWRlcjtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuWW91VHViZUlmcmFtZUxvYWRlciA9IFlvdVR1YmVJZnJhbWVMb2FkZXI7XG5cdH1cbn0od2luZG93KSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi95b3V0dWJlLWlmcmFtZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=