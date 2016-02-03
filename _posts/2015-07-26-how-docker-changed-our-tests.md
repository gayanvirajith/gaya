---
layout: post
title:  "How Docker changed the way we do tests?"
date: 2015-07-26 12:12:00
comments: true
excerpt: How Docker changed the way we do tests?
---
My name's [Mauricio Klein][mauricio-klein-website] and I'm a former VAS developer at [Zenvia Mobile Results][zenvia], brazilian leader in corporate SMS.

Our team is responsable for evolving, fixing and maintaining many application, most of them with a huge load and many transactions per second.

To keep everything running well, we do a lot (I mean, A LOT) of tests in our platform. Well, that's useless to say, since testing software nowadays isn't an option, but mandatory.

However, even after many tests, we still have bugs happening in production, sometimes things our tests should cover, but they don't.

### The question is: **why?**

Why do we still have bugs happening in production after such an effort in testing our applications? The problem is: we're testing our applications isolated, and assuming that, once each unit is running well, together they will also run harmoniously. This is a huge mistake. It's like saying that a music band will be a huge success just because all band members are great musicians.

So, we figured out that we've had a lack in **integration tests**.

Ok, we faced the problem and we know where to improve. But how?
Integrated tests used to be slow and hard, since each subsystem has its own requirements.

One solution is to simply mock neighbor systems responses and check the system's under tests behavior with those responses. That can improve our tests, but we aren't testing the system under real situations. We all know that mocked tests is dangerous.

Ok, mocked tests aren't a solution. So we need a way to test our applications _as prodution_, something that's not easy.

Here is where Docker shows up.

With Docker, we're able to tests our applications in an integrated way. And by integrated I mean: something really close to production behavior.
We can now lift the whole system and prepare them to process a request completely, a real end to end test.

After such improvement in our mode of doing tests, we're now discovering bugs and misbehaviors we can't even imagine we had up to a month ago.
And that's great! Every software, even the most tested one, has bugs. It's our duty to find them and fix.

![][find-you-kill-you]

Now that we have a fully integrated test environment, it's time to **automate**.

![][automate-all]

This automation can be achieved with **Docker clients**.

To understand it, we first need to understand how Docker works.

Basically, Docker works in a **client-server architecture**. Docker's server is responsable for controlling all images, containers, etc.
The client will simply do server requests, asking to perform actions, like download a new image, start a container, execute a command in a running container, etc.

So, every _docker_ command you run in your host, you're actually making a client request to a Docker server. Generally, this server resides in your host, but it can be located somewhere else, like a friend's machine or even a server running [**Jenkins**][jenkins], and here's how we will automate our tests.

There are many Docker client implementations for many languages. A quick search on [Github][docker-client-github-search] shows you many possibilities. Zenvia itself has a Docker client for Groovy under development. You can check it out [here][docker-komposer]. Also, a Docker Compose tool is available for Ruby [here][docker-compose-api-ruby].

So, with a client, you can write your tests in any language and enjoy the power Docker gives you.

For example, you can write your tests in JUnit, starting and stoping your containers "programmatically" and doing assertions like any regular test. The possibilities are endless.

Once the tests are written, you can easily create triggers on Jenkins (or any other continuous integration server) server, asking it to run the tests after each commit in develop, for example.
We now have real tests, running a more similar production scenario, integrated to our pipeline.
Of course, those tests are not 100% production like, since we don't have the same load we do in production, but it's a huge improvement compared to our old tests.

To finish, Docker is just one of the available solutions. Many other approaches can be adopted, using containers, virtualization or even lifting your whole system in your host machine. The fact is: there aren't excuses anymore to assume that a well unit tested system is bug free or that you should to test your application in production.

> Those dark days are gone.
> A new age of self contained tests has arised.
> Bug's life is doomed.
> You have the weapon on your hand: just aim and pull the trigger.

[zenvia]: http://www.zenvia.com.br/en/
[mauricio-klein-website]: http://mauricioklein.com
[find-you-kill-you]: {{site.url}}/assets/images/find_you_kill_you.jpg
[automate-all]: {{site.url}}/assets/images/automate_all_the_things.jpg
[jenkins]: https://jenkins-ci.org/
[docker-client-github-search]: https://github.com/search?utf8=%E2%9C%93&q=docker+client
[docker-komposer]: https://github.com/zenvia-mobile/docker-komposer
[docker-compose-api-ruby]: https://github.com/mauricioklein/docker-compose-api
