'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var youtubeIframeLoader = require('youtube-iframe');

var HEIGHT = 390;
var WIDTH = 640;

/**
 * @implements VideoAdapter
 */

var YoutubePlayerAdapter = function () {
  function YoutubePlayerAdapter(id) {
    _classCallCheck(this, YoutubePlayerAdapter);

    /**
     * @type YT.Player
     */
    this._player = new YoutubePlayerAdapter.YT.Player('player2', {
      height: HEIGHT,
      width: WIDTH,
      videoId: id
    });

    this._height = HEIGHT;
    this._width = WIDTH;
  }

  // READONLY

  _createClass(YoutubePlayerAdapter, [{
    key: 'playerElement',
    get: function get() {
      return this._player;
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

    /*
     * TODO if at-all possible
     *
     * // properties
     * - audioTracks
     * - (read-only) buffered
     * - controller
     * - crossOrigin
     * - (read-only) currentSrc
     * - defaultMuted
     * - defaultPlaybackRate
     * - disableRemotePlayback
     * - duration (ro)
     * - ended (ro)
     * - error (ro)
     * - loop
     * - mediaGroup
     * - mediaKeys
     * - muted
     * - (ro) networkState
     * - paused (ro)
     * - playbackRate
     * - played (ro)
     * - preload
     * - preservePitch
     * - readyState (ro)
     * - seeking (ro)
     * - seekable (ro)
     * - sinkId (ro)
     * - srcObject
     * - textTracks (ro)
     * - videoTracks (ro)
     * - getVideoPlaybackQuality
     *
     * // events
     * - onencrypted
     * abort
     autocomplete
     autocompleteerror
     DOMContentLoaded
     afterprint
     afterscriptexecute
     beforeprint
     beforescriptexecute
     beforeunload
     blur
     cancel
     change
     click
     close
     connect
     contextmenu
     error
     focus
     hashchange
     input
     invalid
     languagechange
     load
     loadend
     loadstart
     message
     offline
     online
     open
     pagehide
     pageshow
     popstate
     progress
     readystatechange
     reset
     select
     show
     sort
     storage
     submit
     toggle
     unload
     loadeddata
     loadedmetadata
     canplay
     playing
     play
     canplaythrough
     seeked
     seeking
     stalled
     suspend
     timeupdate
     volumechange
     waiting
     durationchange
     emptied
     *
     * // methods
     * - addTextTrack
     * - canPlayType
     * - fastSeek
     * - load
     * - pause
     * - play
     * - setMediaKeys
     * - setSinkId
     */

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

  match: function match(url) {
    var matches = url.match(/^(?:https?:\/\/)?(?:(?:www|m)\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/mi);

    if (matches) {
      var id = matches[1];
      return new YoutubePlayerAdapter(id);
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