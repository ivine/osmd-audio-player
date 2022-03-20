# 🎵 OSMD Audio player yyin
Thanks to: https://github.com/jimutt/osmd-audio-player


Unoffical audio playback engine for [OpenSheetMusicDisplay](https://github.com/opensheetmusicdisplay/opensheetmusicdisplay). Successor meant to replace my previous proof of concept player.

This player is still in a very early state and lots of breaking and non-breaking changes will most likely be introduced before the first major release. Use at your own risk!

## Install

```
npm install @ivine/osmd-audio-player
```

## Demos / usage

### Basic

Basic no-framework demo with only play, pause & stop functionality.
### Vue JS + Vuetify

A more full-featured demo featuring configurable instruments, level control, switching scores & changing tempo.

You might notice that there's currently a quite large delay when switching instruments. It's due to the in-advance scheduling to prevent interruptions & timing issues in the audio playback, and there's currently no clearing/reset of the buffer when an instrument change takes place. Some improvements in that area are planned.


### Basic (React)

React example

### Basic (UMD build)

Same functionality as the basic demo but without any Node.js requirements. Uses the UMD build of OSMD and the audio player for simple plug and play functionality in any web page.

## Features

- Framework agnostic, not tied to a specific front end Framework
- Multi-instrument support
- Individual level controls
- Automatic tempo detection from score
- Automatic instrument assignment

## Roadmap

- Repeat support
- Dynamics support
- Grace note support
- Click to set playback position
- Updated & properly structured Vue demo
- Quickstart guide & more extensive Readme
- Custom audio stack for playing soundfonts
- Stricter typing
- Unit tests

## Credits

<div style="max-width: 340px;">

[![Browserstack](https://s3.eu-central-1.amazonaws.com/ju-media/Browserstack-logo%402x.png)](http://browserstack.com/)

</div>

Thank you Browserstack for offering me your Open Source license for cross browser testing.
