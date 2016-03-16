'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var elementName = arguments.length <= 0 || arguments[0] === void 0 ? 'x-svp-player' : arguments[0];


  /*
   * TODO implement
   * // properties
   * - poster (rw)
   * - autoplay
   * - src (create an adapter depending on that src)
   */

  var SVPPrototype = Object.create(HTMLVideoElement.prototype, {
    createdCallback: function createdCallback() {},
    attributeChangedCallback: function attributeChangedCallback(attrName, oldVal, newVal) {}
  });

  return document.registerElement('x-svp-player', {
    prototype: SVPPrototype,
    extends: 'video'
  });
};

var _VideoPlayerFactory = require('./VideoPlayerFactory');

var _VideoPlayerFactory2 = _interopRequireDefault(_VideoPlayerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;