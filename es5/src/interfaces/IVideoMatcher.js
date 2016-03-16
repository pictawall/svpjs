/**
 * @interface VideoMatcher
 */

/**
 * Checks if the video player associated with the matcher is able to handle the url.
 *
 * @function
 * @name VideoMatcher#match
 * @param {!String} url The url to match.
 * @returns {VideoAdapter} The video player that will handle the video at the given url, or null if the matcher can't handle this video format.
 */

/**
 * Called when the matcher is added to the factory so it can prepare what the player might need to load.
 *
 * @function
 * @name VideoMatcher#onAdded
 * @return {Promise|*}
 */
"use strict";