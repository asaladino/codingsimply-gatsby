---
layout: post
title: 'Sync Prod to Local Dev'
author: 'Adam'
created: '2019-02-06T14:42:29'
excerpt: '
Syncing with a production environment is something every developer should do regularly. These scripts will do the hard work so you can keep on developing, by syncing your MySQL database and files locally. SSH Private Key These scripts work best when you have your ssh keys setup on the server you want to sync. This [&hellip;]
'
---


Syncing with a production environment is something every developer should do regularly. These scripts will do the hard work so you can keep on developing, by syncing your MySQL database and files locally.

## SSH Private Key

These scripts work best when you have your ssh keys setup on the server you want to sync. This will help you avoid manually entering passwords and help you avoid your password ending up in your shell history.

## .my.cnf

In a similar thought to your ssh key, you don&#8217;t want to continually enter your database password. To get around this, you need create a file in your home directory call &#8220;.my.cnf&#8221;, with the following information:
<script></script>

## Sync MySQL Database

Before running the script, be sure to update your server information.
<script></script>

## Copying a Folder

This script will copy a folder from your prod server locally. I prefer this over rsync because I don&#8217;t want any local file changes moved to production.
<script></script>
