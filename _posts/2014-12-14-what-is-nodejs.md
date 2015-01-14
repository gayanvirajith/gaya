---
layout: post
title:  "What is Node.js"
date:   2014-12-14 04:07:49
categories: NodeJS Guides
banner_video: '<iframe width="560" height="315" src="//www.youtube.com/embed/pU9Q6oiQNd0" frameborder="0" allowfullscreen></iframe>'
comments: true
---

Node.js is an open source, cross-platform runtime environment for server-side 
and networking applications. Node.js applications are written in JavaScript, 
and can be run within the Node.js runtime on OS X, Microsoft Windows, 
Linux and FreeBSD.

> Node.js is a platform built on Chrome's JavaScript runtime for easily building 
fast, scalable network applications. Node.js uses an event-driven, 
non-blocking I/O model that makes it lightweight and efficient, 
perfect for data-intensive real-time applications that run across distributed 
devices. 

## Example web server

This simple web server written in Node responds with "Hello World" for every 
request.

{% highlight js %}
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
{% endhighlight %}

To run the server, put the code into a file example.js and execute it with the 
node program from the command line:
{% highlight sh %}
$ node example.js
{% endhighlight %}

Node official website: [nodejs.org][nodejs]

[nodejs]: http://nodejs.org/