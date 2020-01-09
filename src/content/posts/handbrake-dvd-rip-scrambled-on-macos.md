---
layout: post
title: 'Handbrake DVD Rip Scrambled on macOS'
author: 'Adam'
created: '2017-06-03T19:35:49'
excerpt: '
Overview Do you need to record a dvd clip for commentary? Chances are you will use Handbrake since it is free, open source, and actively developed. Installation Since I am using macOS, I like to install HandBrake using brew. brew install handbrake DVD Recording Now that HandBrake is installed, insert your dvd and start recording! However, [&hellip;]
'
---

### Overview

Do you need to [record a dvd clip for commentary](https://arstechnica.com/tech-policy/2015/10/its-still-illegal-to-rip-dvd-and-blu-ray-discs-for-personal-use/)? Chances are you will use [Handbrake](https://github.com/HandBrake/HandBrake) since it is free, open source, and actively developed.

### Installation

Since I am using macOS, I like to install HandBrake using [brew](http://brewformulas.org/Handbrake).

brew install handbrake

### DVD Recording

Now that HandBrake is installed, insert your dvd and start recording! However, you will get a scrambled mess 🙁 because the dvd is encrypted.


[![Scrambled DVD recording.](https://codingsimply.com/wp-content/uploads/2017/02/scramble-300x183.png)](../images/2017/02/scramble.png)
Scrambled DVD recording.

Not a problem. Close HandBrake and install [libdvdcss](http://brewformulas.org/Libdvdcss) library with brew.

brew install libdvdcss

Open Handbrake and your recording will no longer be scrambled.
