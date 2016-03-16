'use strict';

import playerFactory from './lib/VideoPlayerFactory';
import SVPElement from './lib/SVPElement';

import YoutubeAdapter from './lib/adapter/YoutubeAdapter';

playerFactory.registerPlayerAdapter(YoutubeAdapter.matcher);

export default SVPElement;
