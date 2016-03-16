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
    key: 'registerPlayerType',
    value: function registerPlayerType(type) {

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
     */

  }, {
    key: 'getPlayer',
    value: function getPlayer(url) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;

      var _iteratorError = void 0;

      try {
        for (var _iterator = this._playerTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var playerType = _step.value;

          /**
           * @type {VideoAdapter}
           */
          var result = playerType.match(url);

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