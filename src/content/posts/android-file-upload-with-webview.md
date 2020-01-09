---
layout: post
title: 'Android File Upload with WebView'
author: 'Adam'
created: '2019-03-26T15:20:55'
excerpt: '
I was working on a project called Neighbors Social Network, where the project called for for a progressive web app (PWA) to be integrated into an existing native iOS and Android app. Integration was as expected on both platforms: Create native web view for each platform. Direct the web views to the PWA&#8217;s url. An [&hellip;]
'
---


I was working on a project called [Neighbors Social Network](https://codingsimply.com/projects/neighbors/), where the project called for for a progressive web app (PWA) to be integrated into an existing native iOS and Android app. Integration was as expected on both platforms:

1. Create native web view for each platform.
2. Direct the web views to the PWA&#8217;s url.

An additional requirement was to have the ability to upload images saved on the device. The iOS web view just worked and did not need any addition coding. Android on the other hand was not so cooperative. 

After a few days of duckduckgo&#8217;ng I came across a Stack Overflow question that described a straightforward implementation that didn&#8217;t have any &#8220;hidden&#8221; api&#8217;s.

[https://stackoverflow.com/questions/36410012/android-cant-upload-images-using-webview](https://stackoverflow.com/questions/36410012/android-cant-upload-images-using-webview)

From this discussion I distilled a minimum coding example that worked in my project and will hopefully help someone else.


<script src="https://gist.github.com/asaladino/6d13cd788f0d7eb895bfea15b683c514.js"></script>
