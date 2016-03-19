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

    this._state = initialState;
    this._state.id = id;

    this._playerContainer = document.createElement('div');
    this._resetPlayer();
  }

  _resetPlayer() {
    const containerIdentifier = `svp-social-video-player-youtube-player-number-${playerNum++}-potato`;

    const div = document.createElement('div');
    div.id = containerIdentifier;

    document.body.appendChild(div);

    let localState = null;
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
        onReady: () => {
          if (!localState) {
            return;
          }

          this._player.seekTo(localState.currentTime, false);
          if (!localState.playing) {
            this._player.pauseVideo();
          } else {
            this._player.playVideo();
          }
        }
      }
    });

    const iframe = document.getElementById(containerIdentifier);
    document.body.removeChild(iframe);
    iframe.id = '';

    this._playerContainer.innerHTML = '';
    this._playerContainer.appendChild(iframe);
  }

  // READONLY

  get playerElement() {
    return this._playerContainer;
  }

  // MUTABLE
  set height(height) {
    this._height = height;

    this._player.setSize(this._width, this._height);
  }

  set width(width) {
    this._width = width;

    this._player.setSize(this._width, this._height);
  }

  set controls(controls) {
    this._state.controls = controls;
    this._resetPlayer();
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
