---
layout: project
title: 'Classy Json Schema'
author: 'Adam'
created: '2019-03-28 18:18:31'
tags: ["c++"]
slug: 'classy-json-schema'
git_url: 'https://github.com/asaladino/classy-json-schema'
icon_url: 'undefined'
readme_md: ''
screenshots: [{"title":"Classy Main Window","url":"https://codingsimply.com/wp-content/uploads/2019/03/Classy-Main-Window.png"}]
---


Generate PO<T>O's for any language using a template file. This  project is done. I created a kotlin version ([Klassy Json Schema](https://codingsimply.com/projects/klassy-json-schema/)) that is much faster and has better cross platform support.

## Requirements

*  Hunter
*  Qt
*  cmake

## Build

```
git clone https://github.com/asaladino/classy-json-schema.git
cd classy-json-schema
cmake .
make
./classy_json_schema
```

## Parameters

```
./classy_json_schema

--templateFile
"/path/to/classy-json-schema/tests/templates/DataModel.java"
--schemaFolder
"/path/to/schema/"
--outputFolder
"/path/to/classy-json-schema/tests/output/java/"
--outputType
"java"
--cli
```
