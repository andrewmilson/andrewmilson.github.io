---
layout: post
title: How I Conceal Mailto Email Links From Spam Bots
---

Back in the early days of making websites, I was naive to evil bots on the internet, scouring through my innocent webpages and finding my plain text email adress in mailto links. To follow I would get spam emails with the subject header (no kidding) "SAFE AND EASY ~P·E·N·I·S~ ~E·N·L·A·R·G·E·M·E·N·T~". I new this had to stop because lets face the fact that it would have been more relevant if it said  "... ~R·E·D·U·C·T·I·O·N~".

So After reading several Stackoverflow threads related to the topic I learnt peoples ways and for one reason or another I did not like their method's. In the end I came up with a method of my own that did exactly what I wanted it to do on a range of internet browsers.

### Javascript ###
{% highlight javascript %}
(function(window) {
  var link = document.createElement('a');
  link.target = '_blank';

  window.mailtoManager = function(local, domain) {
    link.href = 'mailto:truck@thebots.com'
      .replace('truck', local)
      .replace('thebots.com', domain);
    link.click();
  }
})(window);
{% endhighlight %}

### Usage ###
{% highlight html %}
<a href="javascript:mailtoManager('example', 'example.com')">Contact</a>
{% endhighlight %}

This method makes it extremely difficult for those darn bots to find your email adressgit status. Beautiful!
