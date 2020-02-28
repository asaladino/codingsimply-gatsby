---
layout: project
title: 'Site Index'
author: 'Adam'
created: '2019-03-09 11:02:26'
tags: ['javascript', 'nodejs']
slug: 'site-index'
git_url: 'https://github.com/asaladino/site-index'
icon_url: 'undefined'
readme_md: ''
screenshots: []
---

Site Index is a nodejs utility that will crawl a domain and index any reachable html urls then output to a urls.json file.

```bash

./site-index --help

Site Index

  Will crawl a site and generate the json file for all the urls found. Also
  converts a sitemap to a json file.

Options

  --domain www.domain.com       (Required) Domain to crawl.
  --output file                 (Required) Folder to output the information to.
  --uri /path/to/file.html      You might want to add just one more path to index.
  --html                        Save the raw html to file.
  --type sitemap|crawl|single   Use the sitemap or crawl to index a site for links.
  --verbose                     Output progress information on the index.
  --help                        Print this usage guide.
```
