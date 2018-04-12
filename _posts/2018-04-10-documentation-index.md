---
layout: documentation
title: Índice
description: 
categories:
comments: false
permalink: docs
---

{% for category in site.categories %}
<ul>
  <li>{{ category | first }}</li>
  <ul>
  {% for posts in category %}
    {% for post in posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  {% endfor %}
  </ul>
</ul>
{% endfor %}
