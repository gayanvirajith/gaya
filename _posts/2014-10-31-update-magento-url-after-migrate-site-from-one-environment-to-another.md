---
layout: post
title: "Update magento URL after migrate your site from one environment to another"
category: 
- magento
- guide
permalink: update-magento-url-after-migrate-site-from-one-environment-to-another
meta_description: 'How to update/edit magento base URL after migrate your site from one environment to another'
browser_title: Update magento URL after migrate site from one environment to another
---

This is a little stepping guide to update `baseurl` after migrate your 
Magento website/web-store from one environment to another.

### Why you need to update Magento baseurl

The reason because Magento keep your site base-url in the database. So once you
moved your site from one environment to another you probably need to change it.

#### Example

If you have your website on your local environment (Local computer) 
and now you want to publish it. You will need to change your URL to reflect 
this.

### How to change the base url

For that you will need to access your MySQL database using any MySQL management 
tool like *phpMyAdmin*. There are multiple options to update your domain/baseurl
in the database. But personally I prefer to do this in following way.

**PlEASE ALWAYS REMEMBER TO BACKUP YOUR DATABASE BEFORE DOING ANY UPDATES**

Here are the steps, execute following queries from your MySQL management tool.

#### Find unsecure url

{% highlight sql %}
select * from core_config_data where path = 'web/unsecure/base_url';
{% endhighlight %}

#### Find secure one:

{% highlight sql %}
select * from core_config_data where path = 'web/secure/base_url';
{% endhighlight %}

#### Optional if you are using table prefixes 

{% highlight sql %}
select * from core_config_data where path = 'admin/url/custom';
{% endhighlight %}


> If you have multiple stores PLEASE BE CAREFUL and note the config_id numbers 
for each row.

Each query will return something like this:

{% highlight sql %}
select * from core_config_data where path = 'web/unsecure/base_url';
{% endhighlight %}

| config_id | scope | scope_id | path | value |
| 6 | default | 0 | web/unsecure/base_url | http://magento.localhost/  |

You need to note the first column which is your **config_id**, each id is 
unique and we can use that to update just the row we want to update. 
This will ensure you do not update a wrong row or more rows than you wanted.

### Updating rows

Next thing is to take each of the rows you want to change and updating 
them with your New URL.

**Important thing to remember**

> When you add your new row, remember to add your trailing `/`. If you do not do 
this your site will be completely messed up and your *CSS* and *JS* will not work!

Let's update

{% highlight sql %}
update core_config_data
set value = 'http://new-domain.com/'
where config_id = 6;
{% endhighlight %}

> **Remember**: I got my config_id from my original queries and I need to use that to update my rows. If you are not sure of you config_id you can double check by selecting the row with that config_id (this is like double check)

{% highlight sql %}
select * from core_config_data where config_id = 6
{% endhighlight %}

You can repeat the update steps for each of your config_id(s) and then you are 
all done!

