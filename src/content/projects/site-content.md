---
layout: project
title: 'Site Content'
author: 'Adam'
created: '2019-03-15 13:45:43'
tags: ["javascript","nodejs","tools"]
slug: 'site-content'
git_url: 'https://github.com/asaladino/site-content'
icon_url: 'undefined'
readme_md: ''
screenshots: []
---


Extracts content from a bunch saved html documents. Should be used with [site-index](https://codingsimply.com/projects/site-index/).

To start the content extraction, run:

```
./site-index --domain "codingsimply.com" --verbose --html --type crawl --output "/some/reports"
./site-content --domain "codingsimply.com" --verbose --output "/some/reports"
```

Domain and output folder are required parameters. To see a list of parameters, run

```
./site-content --help

Site Content

  Extracts content from a bunch of urls. 

Options

  --domain www.domain.com   (Required) Domain to extract contents.       
  --output file             (Required) Folder to output the contents to. 
  --verbose                 Output information on the reporting.         
  --help                    Print this usage guide. 
```
