---
layout: project
title: 'React Wordpress Theme'
author: 'Adam'
created: '2019-03-10 11:08:05'
tags: ['javascript', 'nodejs', 'reactjs', 'wordpress']
slug: 'react-wordpress-theme'
git_url: 'https://github.com/asaladino/codingsimply-react'
screenshots:
  [
    {
      'title': 'Coding Simply React Wordpress Theme',
      'url': '/images/projects/react-wordpress-theme/Coding-Simply-React-Wordpress-Theme.png',
    },
  ]
---

This is a study, and prototype build, to determine the benefits or drawbacks of implementing a headless Wordpress theme. The lessons learned carry over to any site that is running a single page web app.

## Benefits

There were a lot of benefits to this approach, but these stand out.

- Rapid building and deployment.
- Majority of code is in one place and one language.
- A lot of existing libraries and support.
- Quick page loads.

## Drawbacks

The only major drawback is the requirement of duplicate routing. The single page app (reactjs) needs to accommodate routes that the server-side code handles. An initial request by the browser will go to the server first, the server will then need to check if that is a valid route, report any errors (40x's) and render the web app. The web app will read that route and render the appropriate material. Wordpress already handles much of this process so very little PHP is required and the web app routing (react-router) only needs to match the server routes it would like to support.

Checkout the github repo for more info.
