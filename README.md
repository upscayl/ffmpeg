# `ffmpeg-static-electron`

The module returns a file path to the binary for the target operating system. 

It is a modified version from the original [ffmpeg-static](https://github.com/pietrop/ffmpeg-static) to use [`electron-builder` file macros  in `package.json`, where OS name are `mac`, `linux` or `win`](https://www.electron.build/file-patterns/#file-macros)

In `ffmpeg-static`, recognising the target OS is done with [`os.platform()`](https://nodejs.org/api/os.html#os_os_platform) where mac os x is  recognised as`darwin` rather then `mac`.

The need to tailor ffmpeg-static to use with `electron-builder` came from a use cases such as that of [autoEdit.io](http://autoEdit.io). 

<!-- I've also added `browser`, as a platform option, for use case when module is use client side, eg bundled using browserify.-->

See here for more info on [How to package ffmpeg with the fluent-ffmpeg node library in electron, so that you only ship the binaries for the target operating system](https://pietropassarelli.com/ffmpeg-electron.html)

There is also [`ffprobe-static-electron`](https://github.com/pietrop/ffprobe-static-electron)

---

ffmpeg static binaries for Mac OSX and Linux and Windows

## Installation

This module is installed via npm:

``` bash
$ npm install ffmpeg-static-electron
```

## Example Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

``` js
var ffmpeg = require('ffmpeg-static-electron');
console.log(ffmpeg.path);
// /Users/eugeneware/Dropbox/work/ffmpeg-static/bin/darwin/x64/ffmpeg
```

Currently supports Mac OS X (64-bit), Linux (32 and 64-bit) and Windows
(32 and 64-bit).

Currently version `3.1` is installed for Mac and Linux, and `3.0.1` for
Windows.

I pulled the versions from the ffmpeg static build pages linked from the
official ffmpeg site. Namely:

* [64 bit Mac OSX](https://evermeet.cx/ffmpeg/)
* [64 bit Linux](http://johnvansickle.com/ffmpeg/)
* [32 bit Linux](http://johnvansickle.com/ffmpeg/)
* [64 bit Windows](http://ffmpeg.zeranoe.com/builds/win64/static/)
* [32 bit Windows](http://ffmpeg.zeranoe.com/builds/win32/static/)

NB: Open to pull requests to update this module with the latest versions.

Ideally I'd like to dynamically pull the latest version down, but this requires
access to 7-zip which and being able to untar `xz` files.

And I couldn't find a good js-only decoders for these files either.

So, for now it's just embedded binaries.
