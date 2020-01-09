---
layout: post
title: 'Using CakePHP Cache with Paginate'
author: 'Adam'
created: '2019-03-06T21:25:40'
excerpt: '
Overview I have a controller for rendering a sitemap.xml and in the case of this domain, itmight actually breach the 10MB size limit set by google. To gracefully handle the size limits for a sitemap, using paging seemed like the correct course of action. However, the sitemap was mostly static, changed infrequently and probably wasn&#8217;t [&hellip;]
'
---


### Overview

I have a controller for rendering a sitemap.xml and in the case of this domain, itmight actually breach the [10MB size limit set by google](https://support.google.com/webmasters/answer/183668?hlen). To gracefully handle the size limits for a sitemap, using paging seemed like the correct course of action. However, the sitemap was mostly static, changed infrequently and probably wasn&#8217;t crawled that often; so caching the sitemap seemed like a good option.

### Paginate

Let&#8217;s begin by setting up a controller for the sitemap and configure the paging options. I decided to configure the pagination with a pagelimit set to 25,000 resultsandthe slug isthe only field needed to build the sitemap urls.The CakePHP pagination component is powerful and easy to configure so there won&#8217;t be much code in the controller.

```
namespace App\Controller;

class SitemapController extends AppController
{
    public function index()
    {
        $this->paginate = [
            'limit' => 25000,
            'maxLimit' => 25000,
            'sort' => 'Sites.slug',
            'fields' => ['Sites.slug']
        ];
        $sites = $this->paginate('Sites');
        $this->set(compact('sites'));
    }
}
```

### Cache

Anissue arrises sincethe paginate method doesn&#8217;t return a Query object, which means we can&#8217;t add query caching used by the ORM. As a fallback, we will need to use the Cache utility class and handle caching with a key/value. To implement the caching utility, weneed to take into account what page of the sitemap is being viewed, so the same results don&#8217;t keeping getting returned.

```
namespace App\Controller;

use Cake\Cache\Cache;

class SitemapController extends AppController
{
    public function index()
    {
        $this->paginate = [
            'limit' => 25000,
            'maxLimit' => 25000,
            'sort' => 'Sites.slug',
            'fields' => ['Sites.slug']
        ];
        $page = $this->request->query('page');
        if (($sites = Cache::read('sitemap_index' . $page, 'day')) === false) {
            $sites = $this->paginate('Sites');
            Cache::write('sitemap_index' . $page, $sites, 'day');
        }
        $this->set(compact('sites'));
    }
}
```

First we will need find out whatpage is being viewed, which can be extracted from the page query parameter as a number or blank.

```
$page = $this->request->query('page');
```

Now what we have the page, we can use the Cache utility to create a key for the results based on the sitemap page. The cache key can now be used to check if the cache is still available or needs refreshing. If the cache is old, the paginate method will generate a new result set and so it can be saved with the cache key for later use.

```
if (($sites = Cache::read('sitemap_index' . $page, 'day')) === false) {
    $sites = $this->paginate('Sites');
    Cache::write('sitemap_index' . $page, $sites, 'day');
}
```

### Thoughts

The performance gains for caching the sitemap are probably small but since implementing it with CakePHP is so easy, you should just do it anyway.
