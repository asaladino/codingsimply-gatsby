---
layout: project
title: 'CakePHP Oracle Datasource'
author: 'Adam'
created: '2019-03-09 22:36:31'
tags: ['cakephp', 'php']
slug: 'cakephp-oracle-datasource'
git_url: 'http://github.com/asaladino/cakephp_oracle_datasource'
icon_url: 'undefined'
readme_md: ''
screenshots: []
---

Connect CakePHP to an Oracle database using the OCI\* PHP extension.

### Requirements

The master branch has the following requirements:

- CakePHP 2.2.0 or greater.
- PHP 5.4.0 or greater.

### Installation

Install using [Composer.](http://getcomposer.org)

Add the plugin to your project's composer.json:

```json
{
  "require": {
    "asaladino/oracle_datasource": "0.8.*"
  }
}
```

Because this plugin has the type cakephp-plugin set in it's own composer.json, composer knows to install it inside your /Plugin directory, rather than in the usual vendors file.It is recommended that you add /Plugin/OracleDatasource to your .gitignore file. (Why? [Read this](http://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md).)

#### Manual

1. Download the [OracleDatasource archive](http://github.com/asaladino/cakephp_oracle_datasource/zipball/master).
2. Unzip that download.
3. Rename the resulting folder to OracleDatasource
4. Then copy this folder into app/Plugin/

#### Enable

Add CakePlugin::loadAll(); to bootstrap.php then implement in database.php and a model.

### database.php

```php
class DATABASE_CONFIG {
    public $oracle = array(
        'datasource' => 'OracleDatasource.Oci',
        'persistent' => false,
        'host' => '127.0.0.1',
        'port' => '1521',
        'login' => 'user',
        'password' => 'oracle',
        'schema' => 'USER_SCHEMA',
        'sid' => 'orcl', // or service name
        'prefix' => ''
    );
}
```

### Your Model

```php
App::uses('AppModel', 'Model');

class DemoState extends AppModel {
    public $primaryKey = 'st';
    public $displayField = 'state_name';
    public $useDbConfig = 'oracle';
}
```
