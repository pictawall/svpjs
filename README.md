# svpjs
Social Video Player Abstraction layer

The purpose of this project is to create a new HTML Element, `<x-svp-player>` that will abstract the interfaces of non-standard video players (e.g. youtube videos, vines, etc...) to make them behave like an HTMLVideoElement.

## Usage

Registering the element is simple. You will however need a **shadow DOM** and **Custom elements** polyfill if your targeted browser doesn't support these.

```
// svpjs is a function that will handle registering the element
const svpjs = require('svpjs');

// You can specify the name of the element to pass to `document.registerElement` by passing it as a parameter. If none is provided, the name will default to `x-svp-player`.
// SVPElement is the class of the registered element.
svpjs('x-svp-player');
```

You can then use that element like the `video` element

```
<!-- Directly in the document -->
<x-svp-player src="https://www.youtube.com/watch?v=HMziHuTVoNk" autoplay></x-svp-player>
```

```
// Via JavaScript
const player = document.createElement('x-svp-player');
player.src = 'https://www.youtube.com/watch?v=HMziHuTVoNk';
player.autoplay = true;
document.body.appendChild(player);
```

## Disabling unneeded

The `svpjs` module takes care of registering all of our built-in adapters. This can result in a quite large bundle.

If you want to reduce it, you can use the following script to only register the adapters you need.

```
const svpjs = require('svpjs/lib/SVPElement');
const playerFactory = require('svpjs/lib/VideoPlayerFactory');

// Register the Youtube Adapter.
const YoutubeAdapter = require('svpjs/lib/adapter/YoutubeAdapter');
playerFactory.registerPlayerAdapter(YoutubeAdapter.matcher);

svpjs('x-svp-player');
```

## Registering custom video player adapters

If you need integration with a video player we do not support, you can write and register your own adapter for that player.

```
const playerFactory = require('svpjs/lib/VideoPlayerFactory');

// register an instance of src/interfaces/IVideoMatcher.js
playerFactory.registerPlayerAdapter({
    match(url) {
        if (url.indexOf('video.mycustomvideos.net') !== -1) {
            // if the adapter is able to handle this video type, return an instance of src/interfaces/IVideoAdapter.js
            return new CustomVideoPlayerAdapter();
        } else {
            // return null otherwise.
            return null;
        }
    }
});
```

Examples of matchers and adapters are available under `src/lib/adapters`.

Feel free to do a pull request if you wish to publish your adapter.
