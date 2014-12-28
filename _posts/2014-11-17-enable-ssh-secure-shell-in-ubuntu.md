---
layout: post
title: "Enable SSH (Secure Shell) in Ubuntu"
category: 
- ubuntu
- guide
permalink: enable-ssh-secure-shell-in-ubuntu
meta_description: See how to enable ssh in ubuntu step by step guide
browser_title: Enable SSH (Secure Shell) in Ubuntu
---

This is a simple guide to show you how to enable Secure Shell **(SSH)** service in 
[Ubuntu][ubuntu]. 

SSH is a secure communication protocol that lets you remotely access network 
computers. Withing this secure data communication you can do lot of things like 
remote command-line login, remote command execution etc.

You could easily enable this service via OpenSSH, which is a free version 
of the SSH connectivity tools developed by the OpenBSD Project. 

To to do that, press **Ctrl + Alt + T** on your keyboard to open the terminal.
When it opens, issue the following commands below to install `openssh-server`.

{% highlight sh %}
  sudo apt-get update && apt-get install openssh-server
{% endhighlight %}

Once you installed, use your SSH client to connect to your computer 
using the default port 22.

Example attempt: 

{% highlight sh %}
ssh gayan@192.168.0.102
{% endhighlight %}

## Configure ssh server settings

You can also configure ssh-server settings by editing the sshd_config 
file in the /etc/ssh directory.

> sshd_config is the configuration file for the OpenSSH server. ssh_config is the configuration file for the OpenSSH client. Make sure not to get them mixed up.

If you are about to change the settings, make a backup of your **sshd_config** file 
by copying it to your home directory, 
or by making a read-only copy in /etc/ssh by doing:

{% highlight sh %}
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.factory-defaults
sudo chmod a-w /etc/ssh/sshd_config.factory-defaults
{% endhighlight %}

Once you've backed up your sshd_config file, you can make changes with any text 
editor, for example; 

{% highlight sh %}
sudo gedit /etc/ssh/sshd_config
{% endhighlight %}

For example if you wish to change the connection port, then change the port 
# shown to whatever you want and save the file. But remember to use the 
new port number every time you want to connect to your system via SSH. 

You can apply the changes by saving the file then doing:

{% highlight sh %}
sudo restart ssh
{% endhighlight %}

More references:

- [SSH/OpenSSH/Configuring][ref-ssh]
- [Askubuntu - How to accept ssh connections?][asku] 

[ubuntu]: http://www.ubuntu.com
[ref-ssh]: https://help.ubuntu.com/community/SSH/OpenSSH/Configuring
[asku]:http://askubuntu.com/questions/51925/how-do-i-configure-a-new-ubuntu-installation-to-accept-ssh-connections