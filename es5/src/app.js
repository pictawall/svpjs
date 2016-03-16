'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VideoPlayerFactory = require('./lib/VideoPlayerFactory');

var _VideoPlayerFactory2 = _interopRequireDefault(_VideoPlayerFactory);

var _SVPElement = require('./lib/SVPElement');

var _SVPElement2 = _interopRequireDefault(_SVPElement);

var _YoutubeAdapter = require('./lib/adapter/YoutubeAdapter');

var _YoutubeAdapter2 = _interopRequireDefault(_YoutubeAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_VideoPlayerFactory2.default.registerPlayerType(_YoutubeAdapter2.default.matcher);

exports.default = _SVPElement2.default;