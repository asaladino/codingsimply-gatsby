---
layout: project
title: 'CakePHP CAS Authentication'
author: 'Adam'
created: '2019-03-09 22:32:29'
tags: ["cakephp","php"]
slug: 'cakephp-cas-authentication'
git_url: 'http://github.com/asaladino/cakephp_cas_authentication'
icon_url: 'undefined'
readme_md: ''
screenshots: []
---


Provides CAS authentication component for CakePHP applications.

### Requirements

The master branch has the following requirements:

*  CakePHP 2.2.0 or greater.
*  PHP 5.4.0 or greater.
*  Jasig phpCAS 1.3.0 or greater.

### Installation

[Using [Composer](http://getcomposer.org/)]

Add the plugin to your project's composer.json:

```
{
    "require": {
        "asaladino/cas_authentication": "1.0.*"
    }
}
```

Because this plugin has the type cakephp-plugin set in it's own composer.json, composer knows to install it inside your /Plugin directory, rather than in the usual vendors file. It is recommended that you add /Plugin/CasAuthentication to your .gitignore file. (Why? [Read this](http://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md).)

#### Manual

1. Download the [CasAuthentication archive](http://github.com/asaladino/cakephp_cas_authentication/zipball/master).
2. Unzip that download.
3. Rename the resulting folder to CasAuthentication
4. Then copy this folder into app/Plugin/

#### Enable

Add CakePlugin::loadAll(); to bootstrap.php then implement it in the controller.

```
class UsersController extends AppController {
	public $components = [
		'Auth' => [
			'authenticate' => [
				'CasAuthentication.Cas' => [
					'hostname' => 'cas.server.com',
					'uri' => '/cas/',
					'debug' => LOGS . 'log-file.log',
					'disbled' => false
				]
			]
		]
	];
}
```
