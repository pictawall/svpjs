'use strict';

/**
 * @class VideoPlayerFactory
 */
class VideoPlayerFactory {

  constructor() {
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
  ready() {
    return Promise.all(this._loadingPromises).then(() => this);
  }

  /**
   *
   * @param {!VideoMatcher} type
   */
  registerPlayerAdapter(type) {

    if (type.onAdded) {
      const result = type.onAdded();
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
  getAdapterFor(url, initialState = {}) {
    for (let playerType of this._playerTypes) {

      /**
       * @type {VideoAdapter}
       */
      const result = playerType.match(url, initialState);

      if (result != null) {
        return result;
      }
    }

    return null;
  }
}

export default new VideoPlayerFactory();
