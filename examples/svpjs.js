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
	          onAttributeChange.call(this, !!newValue, !!oldValue);
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
	}(HTMLElement)).addBooleanAttribute('controls').addBooleanAttribute('autoplay').addStringAttribute('src', function () {
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
	
	    var containerIdentifier = 'svp-social-video-player-youtube-player-number-' + playerNum++ + '-potato';
	
	    var div = document.createElement('div');
	    div.id = containerIdentifier;
	
	    document.body.appendChild(div);
	
	    /**
	     * @type YT.Player
	     */
	    this._player = new YoutubePlayerAdapter.YT.Player(containerIdentifier, {
	      height: HEIGHT,
	      width: WIDTH,
	      videoId: id,
	      playerVars: {
	        autoplay: initialState.autoplay || false,
	        controls: initialState.controls || false
	      }
	    });
	
	    this._height = HEIGHT;
	    this._width = WIDTH;
	
	    this._iframe = document.getElementById(containerIdentifier);
	    document.body.removeChild(this._iframe);
	    this._iframe.id = '';
	  }
	
	  // READONLY
	
	  _createClass(YoutubePlayerAdapter, [{
	    key: 'playerElement',
	    get: function get() {
	      return this._iframe;
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
	    get: function get() {
	      return this._width;
	    },
	    set: function set(width) {
	      this._width = width;
	
	      this._player.setSize(this._width, this._height);
	    }
	  }, {
	    key: 'autoplay',
	    set: function set(autoplay) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGVhY2UzNGYwMWUzMjViMDc4MjgiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQvYnVpbGQvZG9jdW1lbnQtcmVnaXN0ZXItZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvVmlkZW9QbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvU1ZQRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2FkYXB0ZXIvWW91dHViZUFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi95b3V0dWJlLWlmcmFtZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsc0I7Ozs7OztBQ0xBO0FBQ0Esb0JBQW1CLGFBQWEsaUJBQWlCLHVCQUF1QixJQUFJLGVBQWUsZUFBZSx5QkFBeUIsSUFBSSwwQkFBMEIsZUFBZSxtQkFBbUIsNkNBQTZDLGVBQWUsMEZBQTBGLDhCQUE4QixpQkFBaUIscUNBQXFDLGVBQWUsNkRBQTZELG9LQUFvSyxlQUFlLFlBQVksbUJBQW1CLG9CQUFvQixlQUFlLG1IQUFtSCxpQkFBaUIsV0FBVyx3QkFBd0IsU0FBUyxFQUFFLGlCQUFpQixvTEFBb0wsY0FBYyx5QkFBeUIsSUFBSSx3REFBd0QsZUFBZSxzREFBc0QsaUJBQWlCLGNBQWMsNEpBQTRKLGlCQUFpQixxYUFBcWEsc0JB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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxFQUFDIiwiZmlsZSI6InN2cGpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZWFjZTM0ZjAxZTMyNWIwNzgyOFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICdkb2N1bWVudC1yZWdpc3Rlci1lbGVtZW50JztcbmltcG9ydCBzdnBqcyBmcm9tICcuLi9zcmMvYXBwJztcblxuc3ZwanMoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvbWFpbi5qc1xuICoqLyIsIi8qISAoQykgV2ViUmVmbGVjdGlvbiBNaXQgU3R5bGUgTGljZW5zZSAqL1xuKGZ1bmN0aW9uKGUsdCxuLHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHJ0KGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKXZ0KGVbbl0sdCl9ZnVuY3Rpb24gaXQoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyO3Q8bjt0Kyspcj1lW3RdLG50KHIsYltvdChyKV0pfWZ1bmN0aW9uIHN0KGUpe3JldHVybiBmdW5jdGlvbih0KXtqKHQpJiYodnQodCxlKSxydCh0LnF1ZXJ5U2VsZWN0b3JBbGwodyksZSkpfX1mdW5jdGlvbiBvdChlKXt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImlzXCIpLG49ZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpLHI9Uy5jYWxsKHksdD92K3QudG9VcHBlckNhc2UoKTpkK24pO3JldHVybiB0JiYtMTxyJiYhdXQobix0KT8tMTpyfWZ1bmN0aW9uIHV0KGUsdCl7cmV0dXJuLTE8dy5pbmRleE9mKGUrJ1tpcz1cIicrdCsnXCJdJyl9ZnVuY3Rpb24gYXQoZSl7dmFyIHQ9ZS5jdXJyZW50VGFyZ2V0LG49ZS5hdHRyQ2hhbmdlLHI9ZS5hdHRyTmFtZSxpPWUudGFyZ2V0O1EmJighaXx8aT09PXQpJiZ0LmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayYmciE9PVwic3R5bGVcIiYmZS5wcmV2VmFsdWUhPT1lLm5ld1ZhbHVlJiZ0LmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhyLG49PT1lW2FdP251bGw6ZS5wcmV2VmFsdWUsbj09PWVbbF0/bnVsbDplLm5ld1ZhbHVlKX1mdW5jdGlvbiBmdChlKXt2YXIgdD1zdChlKTtyZXR1cm4gZnVuY3Rpb24oZSl7WC5wdXNoKHQsZS50YXJnZXQpfX1mdW5jdGlvbiBsdChlKXtLJiYoSz0hMSxlLmN1cnJlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoLGx0KSkscnQoKGUudGFyZ2V0fHx0KS5xdWVyeVNlbGVjdG9yQWxsKHcpLGUuZGV0YWlsPT09bz9vOnMpLEImJnB0KCl9ZnVuY3Rpb24gY3QoZSx0KXt2YXIgbj10aGlzO3EuY2FsbChuLGUsdCksRy5jYWxsKG4se3RhcmdldDpufSl9ZnVuY3Rpb24gaHQoZSx0KXtEKGUsdCksZXQ/ZXQub2JzZXJ2ZShlLHopOihKJiYoZS5zZXRBdHRyaWJ1dGU9Y3QsZVtpXT1aKGUpLGUuYWRkRXZlbnRMaXN0ZW5lcihwLEcpKSxlLmFkZEV2ZW50TGlzdGVuZXIoYyxhdCkpLGUuY3JlYXRlZENhbGxiYWNrJiZRJiYoZS5jcmVhdGVkPSEwLGUuY3JlYXRlZENhbGxiYWNrKCksZS5jcmVhdGVkPSExKX1mdW5jdGlvbiBwdCgpe2Zvcih2YXIgZSx0PTAsbj1GLmxlbmd0aDt0PG47dCsrKWU9Rlt0XSxFLmNvbnRhaW5zKGUpfHwobi0tLEYuc3BsaWNlKHQtLSwxKSx2dChlLG8pKX1mdW5jdGlvbiBkdChlKXt0aHJvdyBuZXcgRXJyb3IoXCJBIFwiK2UrXCIgdHlwZSBpcyBhbHJlYWR5IHJlZ2lzdGVyZWRcIil9ZnVuY3Rpb24gdnQoZSx0KXt2YXIgbixyPW90KGUpOy0xPHImJih0dChlLGJbcl0pLHI9MCx0PT09cyYmIWVbc10/KGVbb109ITEsZVtzXT0hMCxyPTEsQiYmUy5jYWxsKEYsZSk8MCYmRi5wdXNoKGUpKTp0PT09byYmIWVbb10mJihlW3NdPSExLGVbb109ITAscj0xKSxyJiYobj1lW3QrXCJDYWxsYmFja1wiXSkmJm4uY2FsbChlKSl9aWYociBpbiB0KXJldHVybjt2YXIgaT1cIl9fXCIrcisoTWF0aC5yYW5kb20oKSoxZTU+PjApLHM9XCJhdHRhY2hlZFwiLG89XCJkZXRhY2hlZFwiLHU9XCJleHRlbmRzXCIsYT1cIkFERElUSU9OXCIsZj1cIk1PRElGSUNBVElPTlwiLGw9XCJSRU1PVkFMXCIsYz1cIkRPTUF0dHJNb2RpZmllZFwiLGg9XCJET01Db250ZW50TG9hZGVkXCIscD1cIkRPTVN1YnRyZWVNb2RpZmllZFwiLGQ9XCI8XCIsdj1cIj1cIixtPS9eW0EtWl1bQS1aMC05XSooPzotW0EtWjAtOV0rKSskLyxnPVtcIkFOTk9UQVRJT04tWE1MXCIsXCJDT0xPUi1QUk9GSUxFXCIsXCJGT05ULUZBQ0VcIixcIkZPTlQtRkFDRS1TUkNcIixcIkZPTlQtRkFDRS1VUklcIixcIkZPTlQtRkFDRS1GT1JNQVRcIixcIkZPTlQtRkFDRS1OQU1FXCIsXCJNSVNTSU5HLUdMWVBIXCJdLHk9W10sYj1bXSx3PVwiXCIsRT10LmRvY3VtZW50RWxlbWVudCxTPXkuaW5kZXhPZnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXRoaXMubGVuZ3RoO3QtLSYmdGhpc1t0XSE9PWU7KTtyZXR1cm4gdH0seD1uLnByb3RvdHlwZSxUPXguaGFzT3duUHJvcGVydHksTj14LmlzUHJvdG90eXBlT2YsQz1uLmRlZmluZVByb3BlcnR5LGs9bi5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsTD1uLmdldE93blByb3BlcnR5TmFtZXMsQT1uLmdldFByb3RvdHlwZU9mLE89bi5zZXRQcm90b3R5cGVPZixNPSEhbi5fX3Byb3RvX18sXz1uLmNyZWF0ZXx8ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIGU/KG10LnByb3RvdHlwZT1lLG5ldyBtdCk6dGhpc30sRD1PfHwoTT9mdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9OkwmJms/ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuLHI9TCh0KSxpPTAscz1yLmxlbmd0aDtpPHM7aSsrKW49cltpXSxULmNhbGwoZSxuKXx8QyhlLG4sayh0LG4pKX1yZXR1cm4gZnVuY3Rpb24odCxuKXtkbyBlKHQsbik7d2hpbGUoKG49QShuKSkmJiFOLmNhbGwobix0KSk7cmV0dXJuIHR9fSgpOmZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuIGluIHQpZVtuXT10W25dO3JldHVybiBlfSksUD1lLk11dGF0aW9uT2JzZXJ2ZXJ8fGUuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixIPShlLkhUTUxFbGVtZW50fHxlLkVsZW1lbnR8fGUuTm9kZSkucHJvdG90eXBlLEI9IU4uY2FsbChILEUpLGo9Qj9mdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlVHlwZT09PTF9OmZ1bmN0aW9uKGUpe3JldHVybiBOLmNhbGwoSCxlKX0sRj1CJiZbXSxJPUguY2xvbmVOb2RlLHE9SC5zZXRBdHRyaWJ1dGUsUj1ILnJlbW92ZUF0dHJpYnV0ZSxVPXQuY3JlYXRlRWxlbWVudCx6PVAmJnthdHRyaWJ1dGVzOiEwLGNoYXJhY3RlckRhdGE6ITAsYXR0cmlidXRlT2xkVmFsdWU6ITB9LFc9UHx8ZnVuY3Rpb24oZSl7Sj0hMSxFLnJlbW92ZUV2ZW50TGlzdGVuZXIoYyxXKX0sWCxWPWUucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxlLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZS5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGUubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGUpe3NldFRpbWVvdXQoZSwxMCl9LCQ9ITEsSj0hMCxLPSEwLFE9ITAsRyxZLFosZXQsdHQsbnQ7T3x8TT8odHQ9ZnVuY3Rpb24oZSx0KXtOLmNhbGwodCxlKXx8aHQoZSx0KX0sbnQ9aHQpOih0dD1mdW5jdGlvbihlLHQpe2VbaV18fChlW2ldPW4oITApLGh0KGUsdCkpfSxudD10dCksQj8oSj0hMSxmdW5jdGlvbigpe3ZhciBlPWsoSCxcImFkZEV2ZW50TGlzdGVuZXJcIiksdD1lLnZhbHVlLG49ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEN1c3RvbUV2ZW50KGMse2J1YmJsZXM6ITB9KTt0LmF0dHJOYW1lPWUsdC5wcmV2VmFsdWU9dGhpcy5nZXRBdHRyaWJ1dGUoZSksdC5uZXdWYWx1ZT1udWxsLHRbbF09dC5hdHRyQ2hhbmdlPTIsUi5jYWxsKHRoaXMsZSksdGhpcy5kaXNwYXRjaEV2ZW50KHQpfSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5oYXNBdHRyaWJ1dGUoZSkscj1uJiZ0aGlzLmdldEF0dHJpYnV0ZShlKSxpPW5ldyBDdXN0b21FdmVudChjLHtidWJibGVzOiEwfSk7cS5jYWxsKHRoaXMsZSx0KSxpLmF0dHJOYW1lPWUsaS5wcmV2VmFsdWU9bj9yOm51bGwsaS5uZXdWYWx1ZT10LG4/aVtmXT1pLmF0dHJDaGFuZ2U9MTppW2FdPWkuYXR0ckNoYW5nZT0wLHRoaXMuZGlzcGF0Y2hFdmVudChpKX0scz1mdW5jdGlvbihlKXt2YXIgdD1lLmN1cnJlbnRUYXJnZXQsbj10W2ldLHI9ZS5wcm9wZXJ0eU5hbWUscztuLmhhc093blByb3BlcnR5KHIpJiYobj1uW3JdLHM9bmV3IEN1c3RvbUV2ZW50KGMse2J1YmJsZXM6ITB9KSxzLmF0dHJOYW1lPW4ubmFtZSxzLnByZXZWYWx1ZT1uLnZhbHVlfHxudWxsLHMubmV3VmFsdWU9bi52YWx1ZT10W3JdfHxudWxsLHMucHJldlZhbHVlPT1udWxsP3NbYV09cy5hdHRyQ2hhbmdlPTA6c1tmXT1zLmF0dHJDaGFuZ2U9MSx0LmRpc3BhdGNoRXZlbnQocykpfTtlLnZhbHVlPWZ1bmN0aW9uKGUsbyx1KXtlPT09YyYmdGhpcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJnRoaXMuc2V0QXR0cmlidXRlIT09ciYmKHRoaXNbaV09e2NsYXNzTmFtZTp7bmFtZTpcImNsYXNzXCIsdmFsdWU6dGhpcy5jbGFzc05hbWV9fSx0aGlzLnNldEF0dHJpYnV0ZT1yLHRoaXMucmVtb3ZlQXR0cmlidXRlPW4sdC5jYWxsKHRoaXMsXCJwcm9wZXJ0eWNoYW5nZVwiLHMpKSx0LmNhbGwodGhpcyxlLG8sdSl9LEMoSCxcImFkZEV2ZW50TGlzdGVuZXJcIixlKX0oKSk6UHx8KEUuYWRkRXZlbnRMaXN0ZW5lcihjLFcpLEUuc2V0QXR0cmlidXRlKGksMSksRS5yZW1vdmVBdHRyaWJ1dGUoaSksSiYmKEc9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxuLHIscztpZih0PT09ZS50YXJnZXQpe249dFtpXSx0W2ldPXI9Wih0KTtmb3IocyBpbiByKXtpZighKHMgaW4gbikpcmV0dXJuIFkoMCx0LHMsbltzXSxyW3NdLGEpO2lmKHJbc10hPT1uW3NdKXJldHVybiBZKDEsdCxzLG5bc10scltzXSxmKX1mb3IocyBpbiBuKWlmKCEocyBpbiByKSlyZXR1cm4gWSgyLHQscyxuW3NdLHJbc10sbCl9fSxZPWZ1bmN0aW9uKGUsdCxuLHIsaSxzKXt2YXIgbz17YXR0ckNoYW5nZTplLGN1cnJlbnRUYXJnZXQ6dCxhdHRyTmFtZTpuLHByZXZWYWx1ZTpyLG5ld1ZhbHVlOml9O29bc109ZSxhdChvKX0sWj1mdW5jdGlvbihlKXtmb3IodmFyIHQsbixyPXt9LGk9ZS5hdHRyaWJ1dGVzLHM9MCxvPWkubGVuZ3RoO3M8bztzKyspdD1pW3NdLG49dC5uYW1lLG4hPT1cInNldEF0dHJpYnV0ZVwiJiYocltuXT10LnZhbHVlKTtyZXR1cm4gcn0pKSx0W3JdPWZ1bmN0aW9uKG4scil7Yz1uLnRvVXBwZXJDYXNlKCksJHx8KCQ9ITAsUD8oZXQ9ZnVuY3Rpb24oZSx0KXtmdW5jdGlvbiBuKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7dChlW24rK10pKTt9cmV0dXJuIG5ldyBQKGZ1bmN0aW9uKHIpe2Zvcih2YXIgaSxzLG8sdT0wLGE9ci5sZW5ndGg7dTxhO3UrKylpPXJbdV0saS50eXBlPT09XCJjaGlsZExpc3RcIj8obihpLmFkZGVkTm9kZXMsZSksbihpLnJlbW92ZWROb2Rlcyx0KSk6KHM9aS50YXJnZXQsUSYmcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2smJmkuYXR0cmlidXRlTmFtZSE9PVwic3R5bGVcIiYmKG89cy5nZXRBdHRyaWJ1dGUoaS5hdHRyaWJ1dGVOYW1lKSxvIT09aS5vbGRWYWx1ZSYmcy5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soaS5hdHRyaWJ1dGVOYW1lLGkub2xkVmFsdWUsbykpKX0pfShzdChzKSxzdChvKSksZXQub2JzZXJ2ZSh0LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pKTooWD1bXSxWKGZ1bmN0aW9uIEUoKXt3aGlsZShYLmxlbmd0aClYLnNoaWZ0KCkuY2FsbChudWxsLFguc2hpZnQoKSk7VihFKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTU5vZGVJbnNlcnRlZFwiLGZ0KHMpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Ob2RlUmVtb3ZlZFwiLGZ0KG8pKSksdC5hZGRFdmVudExpc3RlbmVyKGgsbHQpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixsdCksdC5jcmVhdGVFbGVtZW50PWZ1bmN0aW9uKGUsbil7dmFyIHI9VS5hcHBseSh0LGFyZ3VtZW50cyksaT1cIlwiK2Uscz1TLmNhbGwoeSwobj92OmQpKyhufHxpKS50b1VwcGVyQ2FzZSgpKSxvPS0xPHM7cmV0dXJuIG4mJihyLnNldEF0dHJpYnV0ZShcImlzXCIsbj1uLnRvTG93ZXJDYXNlKCkpLG8mJihvPXV0KGkudG9VcHBlckNhc2UoKSxuKSkpLFE9IXQuY3JlYXRlRWxlbWVudC5pbm5lckhUTUxIZWxwZXIsbyYmbnQocixiW3NdKSxyfSxILmNsb25lTm9kZT1mdW5jdGlvbihlKXt2YXIgdD1JLmNhbGwodGhpcywhIWUpLG49b3QodCk7cmV0dXJuLTE8biYmbnQodCxiW25dKSxlJiZpdCh0LnF1ZXJ5U2VsZWN0b3JBbGwodykpLHR9KSwtMjxTLmNhbGwoeSx2K2MpK1MuY2FsbCh5LGQrYykmJmR0KG4pO2lmKCFtLnRlc3QoYyl8fC0xPFMuY2FsbChnLGMpKXRocm93IG5ldyBFcnJvcihcIlRoZSB0eXBlIFwiK24rXCIgaXMgaW52YWxpZFwiKTt2YXIgaT1mdW5jdGlvbigpe3JldHVybiBmP3QuY3JlYXRlRWxlbWVudChsLGMpOnQuY3JlYXRlRWxlbWVudChsKX0sYT1yfHx4LGY9VC5jYWxsKGEsdSksbD1mP3JbdV0udG9VcHBlckNhc2UoKTpjLGMscDtyZXR1cm4gZiYmLTE8Uy5jYWxsKHksZCtsKSYmZHQobCkscD15LnB1c2goKGY/djpkKStjKS0xLHc9dy5jb25jYXQody5sZW5ndGg/XCIsXCI6XCJcIixmP2wrJ1tpcz1cIicrbi50b0xvd2VyQ2FzZSgpKydcIl0nOmwpLGkucHJvdG90eXBlPWJbcF09VC5jYWxsKGEsXCJwcm90b3R5cGVcIik/YS5wcm90b3R5cGU6XyhIKSxydCh0LnF1ZXJ5U2VsZWN0b3JBbGwodykscyksaX19KSh3aW5kb3csZG9jdW1lbnQsT2JqZWN0LFwicmVnaXN0ZXJFbGVtZW50XCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RvY3VtZW50LXJlZ2lzdGVyLWVsZW1lbnQvYnVpbGQvZG9jdW1lbnQtcmVnaXN0ZXItZWxlbWVudC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSAnLi9saWIvVmlkZW9QbGF5ZXJGYWN0b3J5JztcbmltcG9ydCBTVlBFbGVtZW50IGZyb20gJy4vbGliL1NWUEVsZW1lbnQnO1xuXG5pbXBvcnQgWW91dHViZUFkYXB0ZXIgZnJvbSAnLi9saWIvYWRhcHRlci9Zb3V0dWJlQWRhcHRlcic7XG5cbnBsYXllckZhY3RvcnkucmVnaXN0ZXJQbGF5ZXJBZGFwdGVyKFlvdXR1YmVBZGFwdGVyLm1hdGNoZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBTVlBFbGVtZW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBjbGFzcyBWaWRlb1BsYXllckZhY3RvcnlcbiAqL1xuY2xhc3MgVmlkZW9QbGF5ZXJGYWN0b3J5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IVZpZGVvTWF0Y2hlcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGxheWVyVHlwZXMgPSBbXTtcbiAgICB0aGlzLl9sb2FkaW5nUHJvbWlzZXMgPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7IVByb21pc2UuPFZpZGVvUGxheWVyRmFjdG9yeT59XG4gICAqL1xuICByZWFkeSgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5fbG9hZGluZ1Byb21pc2VzKS50aGVuKCgpID0+IHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7IVZpZGVvTWF0Y2hlcn0gdHlwZVxuICAgKi9cbiAgcmVnaXN0ZXJQbGF5ZXJBZGFwdGVyKHR5cGUpIHtcblxuICAgIGlmICh0eXBlLm9uQWRkZWQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHR5cGUub25BZGRlZCgpO1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZ1Byb21pc2VzLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9wbGF5ZXJUeXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IVN0cmluZ30gdXJsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbaW5pdGlhbFN0YXRlID0ge31dIEluaXRpYWwgdmFsdWVzIGZvciB0aGUgdmFyaW91cyBwcm9wZXJ0aWVzIG9mIHRoZSBhZGFwdGVyLlxuICAgKi9cbiAgZ2V0QWRhcHRlckZvcih1cmwsIGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gICAgZm9yIChsZXQgcGxheWVyVHlwZSBvZiB0aGlzLl9wbGF5ZXJUeXBlcykge1xuXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIHtWaWRlb0FkYXB0ZXJ9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllclR5cGUubWF0Y2godXJsLCBpbml0aWFsU3RhdGUpO1xuXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVmlkZW9QbGF5ZXJGYWN0b3J5KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvVmlkZW9QbGF5ZXJGYWN0b3J5LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuL1ZpZGVvUGxheWVyRmFjdG9yeSc7XG5cbi8vZnVuY3Rpb24gaGFzU2V0dGVyKGluc3RhbmNlLCBzZXR0ZXJOYW1lKSB7XG4vL1xuLy8gIGNvbnN0IGluc3RhbmNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoaW5zdGFuY2UpO1xuLy8gIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGluc3RhbmNlQ2xhc3MsIHNldHRlck5hbWUpO1xuLy9cbi8vICBpZiAoIWRlc2NyaXB0b3IgfHwgIWRlc2NyaXB0b3Iuc2V0KSB7XG4vLyAgICByZXR1cm4gZmFsc2U7XG4vLyAgfVxuLy99XG5cbmZ1bmN0aW9uIGNvbXBvc2UoY29tcG9zZWRDbGFzcykge1xuXG4gIGNvbnN0IHByb3RvID0gY29tcG9zZWRDbGFzcy5wcm90b3R5cGU7XG5cbiAgY29uc3QgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrcyA9IHt9O1xuICBwcm90by5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tzW2F0dHJOYW1lXSkge1xuICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrc1thdHRyTmFtZV0uY2FsbCh0aGlzLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEJvb2xlYW5BdHRyaWJ1dGUobmFtZSwgb25BdHRyaWJ1dGVDaGFuZ2UgPSB2b2lkIDApIHtcblxuICAgICAgaWYgKHR5cGVvZiBvbkF0dHJpYnV0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tzW25hbWVdID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgIG9uQXR0cmlidXRlQ2hhbmdlLmNhbGwodGhpcywgISFuZXdWYWx1ZSwgISFvbGRWYWx1ZSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgbmFtZSwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbGVhblZhbHVlKSB7XG4gICAgICAgICAgaWYgKGJvb2xlYW5WYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFkZFN0cmluZ0F0dHJpYnV0ZShuYW1lLCBvbkF0dHJpYnV0ZUNoYW5nZSA9IHZvaWQgMCkge1xuXG4gICAgICBpZiAodHlwZW9mIG9uQXR0cmlidXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja3NbbmFtZV0gPSBvbkF0dHJpYnV0ZUNoYW5nZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBuYW1lLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBidWlsZCgpIHtcbiAgICAgIHJldHVybiBjb21wb3NlZENsYXNzO1xuICAgIH1cbiAgfTtcbn1cblxuY29uc3QgU1ZQRWxlbWVudCA9IGNvbXBvc2UoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNyZWF0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmNyZWF0ZVNoYWRvd1Jvb3QoKTtcbiAgfVxuXG4gIGF0dGFjaGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fY3JlYXRlQWRhcHRlcigpO1xuICB9XG5cbiAgX2NyZWF0ZUFkYXB0ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2FkYXB0ZXIpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdC5yZW1vdmVDaGlsZCh0aGlzLl9hZGFwdGVyLnBsYXllckVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IHVybCA9IHRoaXMuc3JjO1xuICAgIGlmICghdXJsKSB7XG4gICAgICB0aGlzLl9hZGFwdGVyID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7VmlkZW9BZGFwdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYWRhcHRlciA9IGZhY3RvcnkuZ2V0QWRhcHRlckZvcih1cmwsIHtcbiAgICAgIGF1dG9wbGF5OiB0aGlzLmF1dG9wbGF5LFxuICAgICAgY29udHJvbHM6IHRoaXMuY29udHJvbHNcbiAgICB9KTtcblxuICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLl9hZGFwdGVyLnBsYXllckVsZW1lbnQpO1xuICB9XG59KVxuICAuYWRkQm9vbGVhbkF0dHJpYnV0ZSgnY29udHJvbHMnKVxuICAuYWRkQm9vbGVhbkF0dHJpYnV0ZSgnYXV0b3BsYXknKVxuICAuYWRkU3RyaW5nQXR0cmlidXRlKCdzcmMnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fY3JlYXRlQWRhcHRlcigpO1xuICB9KVxuICAuYnVpbGQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGVsZW1lbnROYW1lID0gJ3gtc3ZwLXBsYXllcicpIHtcblxuICBmYWN0b3J5LnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudChlbGVtZW50TmFtZSwge1xuICAgICAgcHJvdG90eXBlOiBTVlBFbGVtZW50LnByb3RvdHlwZVxuICAgIH0pO1xuICB9KTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvU1ZQRWxlbWVudC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgeW91dHViZUlmcmFtZUxvYWRlciA9IHJlcXVpcmUoJ3lvdXR1YmUtaWZyYW1lJyk7XG5cbmNvbnN0IEhFSUdIVCA9IDM5MDtcbmNvbnN0IFdJRFRIID0gNjQwO1xuXG5sZXQgcGxheWVyTnVtID0gMDtcblxuLyoqXG4gKiBAaW1wbGVtZW50cyBWaWRlb0FkYXB0ZXJcbiAqL1xuY2xhc3MgWW91dHViZVBsYXllckFkYXB0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBpbml0aWFsU3RhdGUpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lcklkZW50aWZpZXIgPSBgc3ZwLXNvY2lhbC12aWRlby1wbGF5ZXIteW91dHViZS1wbGF5ZXItbnVtYmVyLSR7cGxheWVyTnVtKyt9LXBvdGF0b2A7XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaWQgPSBjb250YWluZXJJZGVudGlmaWVyO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgLyoqXG4gICAgICogQHR5cGUgWVQuUGxheWVyXG4gICAgICovXG4gICAgdGhpcy5fcGxheWVyID0gbmV3IFlvdXR1YmVQbGF5ZXJBZGFwdGVyLllULlBsYXllcihjb250YWluZXJJZGVudGlmaWVyLCB7XG4gICAgICBoZWlnaHQ6IEhFSUdIVCxcbiAgICAgIHdpZHRoOiBXSURUSCxcbiAgICAgIHZpZGVvSWQ6IGlkLFxuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICBhdXRvcGxheTogaW5pdGlhbFN0YXRlLmF1dG9wbGF5IHx8IGZhbHNlLFxuICAgICAgICBjb250cm9sczogaW5pdGlhbFN0YXRlLmNvbnRyb2xzIHx8IGZhbHNlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9oZWlnaHQgPSBIRUlHSFQ7XG4gICAgdGhpcy5fd2lkdGggPSBXSURUSDtcblxuICAgIHRoaXMuX2lmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkZW50aWZpZXIpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5faWZyYW1lKTtcbiAgICB0aGlzLl9pZnJhbWUuaWQgPSAnJztcbiAgfVxuXG4gIC8vIFJFQURPTkxZXG5cbiAgZ2V0IHBsYXllckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lmcmFtZTtcbiAgfVxuXG4gIC8vIE1VVEFCTEVcbiAgc2V0IGhlaWdodChoZWlnaHQpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLl9wbGF5ZXIuc2V0U2l6ZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBzZXQgd2lkdGgod2lkdGgpIHtcbiAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xuXG4gICAgdGhpcy5fcGxheWVyLnNldFNpemUodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gIH1cblxuICBzZXQgYXV0b3BsYXkoYXV0b3BsYXkpIHtcbiAgfVxufVxuXG4vKipcbiAqIEBpbXBsZW1lbnRzIFZpZGVvTWF0Y2hlclxuICovXG5Zb3V0dWJlUGxheWVyQWRhcHRlci5tYXRjaGVyID0ge1xuXG4gIC8qKlxuICAgKiBAaW5oZXJpdERvY1xuICAgKi9cbiAgbWF0Y2godXJsLCBpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC9eKD86aHR0cHM/OlxcL1xcLyk/KD86KD86d3d3fG0pXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmUoPzotbm9jb29raWUpP1xcLmNvbVxcLyg/OmVtYmVkXFwvfHZcXC98d2F0Y2hcXD92PXx3YXRjaFxcPy4rJnY9KSkoKFxcd3wtKXsxMX0pKD86XFxTKyk/JC9taSk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgY29uc3QgaWQgPSBtYXRjaGVzWzFdO1xuICAgICAgcmV0dXJuIG5ldyBZb3V0dWJlUGxheWVyQWRhcHRlcihpZCwgaW5pdGlhbFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICBvbkFkZGVkKCkge1xuICAgIGlmIChZb3V0dWJlUGxheWVyQWRhcHRlci5ZVCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHlvdXR1YmVJZnJhbWVMb2FkZXIubG9hZCh5b3V0dWJlID0+IHtcbiAgICAgICAgWW91dHViZVBsYXllckFkYXB0ZXIuWVQgPSB5b3V0dWJlO1xuICAgICAgICByZXNvbHZlKHlvdXR1YmUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFlvdXR1YmVQbGF5ZXJBZGFwdGVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGliL2FkYXB0ZXIvWW91dHViZUFkYXB0ZXIuanNcbiAqKi8iLCIoZnVuY3Rpb24od2luZG93KSB7XG5cdHZhciBZb3VUdWJlSWZyYW1lTG9hZGVyID0ge1xuXHRcdHNyYzogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknLFxuXHRcdGxvYWRpbmc6IGZhbHNlLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0bGlzdGVuZXJzOiBbXSxcblxuXHRcdGxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRcdFx0dGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cblx0XHRcdGlmKHRoaXMubG9hZGVkKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0X3RoaXMuZG9uZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG5cdFx0XHR3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RoaXMubG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0X3RoaXMuZG9uZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRcdHNjcmlwdC5zcmMgPSB0aGlzLnNyYztcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblx0XHR9LFxuXG5cdFx0ZG9uZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5O1xuXG5cdFx0XHR3aGlsZSh0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMucG9wKCkod2luZG93LllUKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0aWYodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IFlvdVR1YmVJZnJhbWVMb2FkZXI7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LllvdVR1YmVJZnJhbWVMb2FkZXIgPSBZb3VUdWJlSWZyYW1lTG9hZGVyO1xuXHR9XG59KHdpbmRvdykpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34veW91dHViZS1pZnJhbWUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9