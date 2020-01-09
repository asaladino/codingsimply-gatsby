---
layout: post
title: 'Create a Simple Reusable React Code Block'
author: 'Adam'
created: '2019-07-11T20:21:02'
excerpt: '
Code blocks are a nice addition to documentation but they don&#8217;t have to be complex. We can create a simple reusable code block in react. This component will use react hooks and have the following imports: import PropTypes from &#8216;prop-types&#8217;; import React, {useState} from &#8216;react&#8217;; import {CopyToClipboard} from &#8216;react-copy-to-clipboard&#8217;; import IconButton from &#8216;@material-ui/core/IconButton&#8217;; import CopyIcon [&hellip;]
'
---


Code blocks are a nice addition to documentation but they don&#8217;t have to be complex. We can create a simple reusable code block in react.

![](../images/2019/07/code-block-1024x732.png)

<figure><figcaption>React Code component copying a selector.</figcaption></figure>

This component will use react hooks and have the following imports:

```
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import CopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
```

You can add them to your project by:

```
yarn add material-ui
yarn add react-copy-to-clipboard
```

Let&#8217;s add a little style to our code blocks and finally implement our component for reuse.
<script></script>
