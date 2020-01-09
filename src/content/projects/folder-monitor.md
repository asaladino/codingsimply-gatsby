---
layout: project
title: 'Folder Monitor'
author: 'Adam'
created: '2019-03-09 22:38:20'
tags: ["java"]
slug: 'folder-monitor'
git_url: 'http://github.com/asaladino/folder-monitor'
icon_url: 'https://codingsimply.com/wp-content/uploads/2019/02/icon_512x512.png'
readme_md: 'https://raw.githubusercontent.com/asaladino/folder-monitor/master/README.md'
screenshots: [{"title":"Folder Monitor Main Window","url":"https://codingsimply.com/wp-content/uploads/2019/02/main-1.png"},{"title":"Folder Monitor Add Command","url":"https://codingsimply.com/wp-content/uploads/2019/02/add-folder-command.png"},{"title":"Folder Monitor Watch Options","url":"https://codingsimply.com/wp-content/uploads/2019/02/add-folder-options.png"},{"title":"Folder Monitor Menu","url":"https://codingsimply.com/wp-content/uploads/2019/02/menu.png"}]
---


Folder Monitor is an open source java application that monitors a folderfor a specified file type and runs a command on that file.

This project had 2 major goals:

### Java Integration with OSX

I wanted to see how tightly integrated a java application could be with OSX.The OSX theme swing theme that comes with java it pretty close to looking native.The menus integrated without issue and the app bundled nicely in a .app package.

### Run Command Based on File

I wanted an app that could watch a dropbox or a sync service folder, see a file and do something with it.For example:

*  Perhaps I dropped an image into a folder on dropbox, once that image is sync'd, folder monitor would importthat image into my photo library.
*  May a file with the extension, .restart gets dropped into a folder, then a command to restart the computer would run.

### Support

This app is gifted as is. Won't be making any updates.
