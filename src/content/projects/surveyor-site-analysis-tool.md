---
layout: project
title: 'Surveyor - Site Analysis Tool'
author: 'Adam'
created: '2019-03-12 21:06:41'
tags: ["javascript","nodejs","php","reactjs","scss","wordpress"]
slug: 'surveyor-site-analysis-tool'
git_url: ''
icon_url: 'undefined'
readme_md: ''
screenshots: [{"title":"Surveyor Domain Selection Menu","url":"https://codingsimply.com/wp-content/uploads/2019/03/Surveyor-Domain-Selection-Menu.png"},{"title":"Surveyor Domain Dashboard","url":"https://codingsimply.com/wp-content/uploads/2019/03/Surveyor-Domain-Dashboard.png"},{"title":"Surveyor Accessibility Reports and Filtering","url":"https://codingsimply.com/wp-content/uploads/2019/03/Surveyor-Accessibility-Reports-and-Filtering.png"}]
---


The Surveyor is a combination of software packages I created to analyze any site domain and generate reports. The Surveyor begins by:

*  Crawling and indexing the site.
*  Extracts and saves all the html content.
*  Checks every link to determine if it is broken.
*  Performs an accessibility scan on every page indexed.
*  Generates google lighthouse reports on every page indexed.
*  Generates reports viewable from a reactjs web interface.

There are three different parts that make up the surveyor:

1. The backend is a nodejs console app that scans and collects data on various sites.
2. The middleware is a wordpress site that is controlling authentication to the scanning data.
3. The frontend is a single page reactjs PWA for viewing and searching report data.

Currently, the Surveyor is scanning dozens of domains on a regular bases. Each domain typically generates 2 GB of reports to help site managers assess the current state of the sites they manage.
