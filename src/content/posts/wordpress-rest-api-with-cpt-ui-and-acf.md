---
layout: post
title: 'WordPress REST Api with CPT UI and ACF'
author: 'Adam'
created: '2019-03-05T13:21:06'
excerpt: '
By adding a little bit of code, you can make the fields you create with ACF available through the Wordpress API.
'
---


The plugins: Custom Post Types UI (CPT UI) and Advanced Custom Fields (ACF), are used in typical combination on many WordPress site. The combo allows you to create as many custom post types as you want and added as many fields to the post types. CPT UI will also make the post type available through the WordPress REST API. Nice.

However, the one drawback is that you won&#8217;t have access to the fields you created with ACF. You can fix this by adding a little code to your theme&#8217;s functions.php file or by creating a plugin.


Before adding that small amount of code, the rest only returned a fairly bare post type:

[https://codingsimply.com/wp-json/wp/v2/projects](https://codingsimply.com/wp-json/wp/v2/projects)

Now you get as many fields as you need.

[http://codingsimply.com/wp-json/cs/v1/projects](http://codingsimply.com/wp-json/cs/v1/projects)
