---
layout: project
title: 'Person Webservice with CAS'
author: 'Adam'
created: '2019-03-23 12:12:23'
tags: ['cas', 'java', 'reactjs']
slug: 'person-webservice-with-cas'
git_url: ''
icon_url: 'undefined'
readme_md: ''
screenshots: [{ 'title': 'Sample Person Web Form', 'url': '/images/projects/person-webservice-with-cas/iperson.png' }]
---

## Overview

A client is trying to limit direct access to a database but needs access to user information on various forms and parts of their infrastructure. That information should only be displayed for a logged in user on their SSO network.

## Solution

I created a webservice in spring (using java) that will authenticate the user with their CAS server to provide information about the user where needed. The anticipated usage would be to use javascript to populate form on a web page. I created 2 sample forms for the client, the first form was done in reactjs and the second was a clone created with jquery.
