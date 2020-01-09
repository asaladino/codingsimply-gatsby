---
layout: post
title: 'Two Solutions to SFTP with PHP'
author: 'Adam'
created: '2019-03-06T21:26:47'
excerpt: '
Overview Recently I needed to syncfiles over sftpfor a Drupal plugin.I found two solutionsthat transferred the files as promised. SSH2 Since I was testing different methods, my installation notes are only for macOS. The PHP library needs libssh2, which can be install with brew. brew install libssh2 Now that the libssh2 library is available we [&hellip;]
'
---


### Overview

Recently I needed to syncfiles over sftpfor a Drupal plugin.I found two solutionsthat transferred the files as promised.

### SSH2

Since I was testing different methods, my installation notes are only for macOS. The PHP library needs libssh2, which can be install with [brew](http://brewformulas.org/Libssh2).

```
brew install libssh2
```

Now that the libssh2 library is available we can install the ssh2 with [pecl](http://pecl.php.net/package/ssh2). Since I am using PHP 7.1, I needed to install the alpha 1.0 version of SSH2.

```
pecl install ssh2-1.0
```

The method we will be using after the connection is, the very familiar [scp command](http://php.net/manual/en/function.ssh2-scp-recv.php).

```
$file = 'screenshot.png';
$remotePath = '/path/to/file/';
$localPath = '/path/to/file';

$host = 'your.happy.domain';
$port = 22;
$username = 'username';
$password = 'password';

$connection = ssh2_connect($host, $port);
ssh2_auth_password($connection, $username, $password);
ssh2_scp_recv($connection, $remotePath . $file, $localPath . $file);
```

### Curl

Using the ssh2 library is nice and compact, only requiring three lines of code to move the file. However, I had to install twolibraries. Since I was creating a Drupal module, I could not expect that library to be available on every server. The helpful support at Pantheon suggested I use curl, which I thought was only useful for http requests. After some duckduckgo&#8217;ng, I discovered some stack overflowthreads the discuss this solution and which gave me this code.

```
$file = 'screenshot.png';
$remotePath = '/path/to/file/';
$localPath = '/path/to/file';

$host = 'your.happy.domain';
$port = 22;
$username = 'username';
$password = 'password';

$ch = curl_init("sftp://$username:$password@$host$path$file");
curl_setopt($ch, CURLOPT_PROTOCOLS, CURLPROTO_SFTP);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

$fp = fopen ($localPath . $file, 'w+');
fwrite($fp, $response);
fclose($fp);
```

### Final Thoughts

While curl may not be as clean as the ssh2 library, I&#8217;ve never had an issue where curl was not available for me to use.
