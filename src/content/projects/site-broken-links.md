---
layout: project
title: 'Site Broken Links'
author: 'Adam'
created: '2019-03-28 18:17:06'
tags: ["javascript","nodejs"]
slug: 'site-broken-links'
git_url: ''
icon_url: 'undefined'
readme_md: ''
screenshots: []
---


Checks a site for broken links. Should be used with [site-index](https://codingsimply.com/projects/site-index/).

To start the broken link checking, run:

```
./site-index --domain "codingsimply.com" --verbose --html --type crawl --output "/some/reports"
./site-broken-links --domain "codingsimply.com" --verbose --output "/some/reports"
```

Domain and output folder are required parameters. To see a list of parameters, run

```
./site-content --help

Site Broken Links

  Check a site for broken links.

Options

  --domain www.domain.com   (Required) Domain to run broken links reports on.
  --output file             (Required) Folder to output the reports to.
  --verbose                 Output information on the reporting. 
  --help                    Print this usage guide.
```
