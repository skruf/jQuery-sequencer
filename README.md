# jQuery-sequencer
Lightweight jQuery plugin that allows you to create a scroll-scrubbing "video" clip from an image sequence.

# Requirements
To use this you first need an image sequence. An image sequence is basically just a video clip split into many still images. (Many video editors allow you to export your clip like this). This plugin expects images in a given folder to be named `<nr>.<ext> (ie. 0.jpg)`, and start at 0. Furthermore, you would want to position your container element as fixed, with a set height. This means you can easily decide how far you would like the user to scroll, in order to navigate the clip.

̃ You would also most likely want to use a preloader for this (unless you're running your site inside a super fast internal network environment), as the browser will send GET requests for each image the plugin pulls in. I've used this one: https://github.com/htmlhero/jQuery.preload and it works quite well.~

The plugin now does its own preloading.

# Usage
## Include it
```
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="jquery-sequencer.min.js"></script>
```

## Slap it on a container of choice
```
$("#elem").sequencer([options], [callback]);
```

## Create an image tag
The plugin expects this tag to have a class called "sequencer". The image you show here will be your first frame.
```
<img class="sequencer" src="./images/0.jpg">
```

## Parameters (all required)
- `options.count` The amount of images you want to show
- `options.path` The path to your images
- `options.ext` The file extension of your images
- `callback` Callback function will be called once the preloader is done fetching images
