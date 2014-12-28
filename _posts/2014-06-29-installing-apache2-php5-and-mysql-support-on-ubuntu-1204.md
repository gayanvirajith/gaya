---
layout: post
title: "Installing apache2, php5 and MySQL support on Ubuntu 12.04"
category: 
- ubuntu
- guide
permalink: installing-apache2-php5-and-mysql-support-on-ubuntu-12-04
meta_description: 'Installing apache2, php5 and MySQL support on Ubuntu 12.04'
browser_title: 'Installing apache2, php5 and MySQL support on Ubuntu 12.04'
---

Here are some quick step by step guide to follow, when you about to setup php5, MySQL web environment on ubuntu 12.04
(Precise Pangolin). This guide would help you to install Apache2 web server on an Ubuntu 12.04 with php5
support (mod_php) and MySQL.

### Step 1 - Go to terminal

In ubuntu 12.04 there is a shortcut key to open a terminal window. Try [ctrl+alt+t] to open terminal window.

<pre>
Shortcut key for open a new terminal - [ctrl+alt+t] 
</pre>

### Step 2 - Gain root privileges

Before you start execute any commands, make sure you logged-in as root. Try following command to have root access.
The command will ask your root password, hit enter after input your root password.

<pre class="terminal">
#login as super user
<code>sudo su</code>
</pre>

### Step 3 - Installing MySQL 5

Use following command to install MySQL. 

<pre class="terminal">
# install mysql server along with the client
apt-get install mysql-server mysql-client
</pre>

Install would ask you to provide a password for the MySQL root user. 

> New password for the MySQL "root" user: < yournewpassword
Repeat password for the MySQL "root" user: < yournewpassword

### Step 4 - Installing Apache2

Try following command to install apache2.

<pre class="terminal">
# install apache2
apt-get install apache2
</pre>

Double check by typing the `localhost` or 'http://127.0.0.1' on your browser. You should be able to see the Apache2 page.

On Ubuntu Apache2 default document root is under `/var/www` and the configuration file is
 under `/etc/apache2/apache2.conf`.

Extra configurations are located in child directories of the `/etc/apach2` such as `/etc/apache2/mods-enabled`
 (for Apache modules) and `/etc/apache2/sites-enabled` (for virtual hosts)

### Step 5 - Installing php5

Install PHP5 and the Apache PHP5 module as follows:

<pre class="terminal">
# install php5 and apache2 php module
apt-get install php5 libapache2-mod-php5
</pre>

You should restart Apache afterwards:

<pre class="terminal">
# restart apache2 server
/etc/init.d/apache2 restart
</pre>

### Step 6 - Get MySQL support in php5

To get MySQL support you can install `php5-mysql` package. But it is always better to install some other php5 modules
as well. Here are some basic modules:

<pre class="terminal">
# install multiple modules at ones
apt-get install php5-mysql php5-curl php5-gd php5-intl php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-snmp php5-sqlite php5-tidy php5-xmlrpc php5-xsl
</pre>

Restart you apache after install above modules.

<pre class="terminal">
# restart apache2
/etc/init.d/apache2 restart
</pre>

### Step 7 - Finaly test your php 

The document root of the default web site is `/var/www`. Create a small PHP file `info.php` in that directory
 and call it in a browser. The file will display lots of useful details about our PHP installation, such as the
 installed PHP version, modules, etc.

<pre class="terminal">
gedit /var/www/info.php
</pre>

`<?php phpinfo(); // place this in /var/www/info.php ?>`

Now try to view this file from your browser. `http://127.0.0.1/info.php`. You would see lots of information about LAMP
(Linux+Apache2+MySQL+php) settings.

Here are some external links for more reference.

 - [php](http://www.php.net/)
 - [Apache](http://httpd.apache.org/)
 - [MySQL](http://www.mysql.com/)

Hope this is useful to you. 
