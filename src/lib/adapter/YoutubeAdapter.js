'use strict';

const youtubeIframeLoader = require('youtube-iframe');

const HEIGHT = 390;
const WIDTH = 640;

let playerNum = 0;

/**
 * @implements VideoAdapter
 */
class YoutubePlayerAdapter {

  constructor(id, initialState) {

    const containerIdentifier = `svp-social-video-player-youtube-player-number-${playerNum++}-potato`;

    const div = document.createElement('div');
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

  get playerElement() {
    return this._iframe;
  }

  // MUTABLE
  set height(height) {
    this._height = height;

    this._player.setSize(this._width, this._height);
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;

    this._player.setSize(this._width, this._height);
  }

  set autoplay(autoplay) {
  }
}

/**
 * @implements VideoMatcher
 */
YoutubePlayerAdapter.matcher = {

  /**
   * @inheritDoc
   */
  match(url, initialState) {
    const matches = url.match(/^(?:https?:\/\/)?(?:(?:www|m)\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/mi);

    if (matches) {
      const id = matches[1];
      return new YoutubePlayerAdapter(id, initialState);
    }

    return null;
  },

  onAdded() {
    if (YoutubePlayerAdapter.YT) {
      return;
    }

    return new Promise(resolve => {
      youtubeIframeLoader.load(youtube => {
        YoutubePlayerAdapter.YT = youtube;
        resolve(youtube);
      });
    });
  }
};

export default YoutubePlayerAdapter;
