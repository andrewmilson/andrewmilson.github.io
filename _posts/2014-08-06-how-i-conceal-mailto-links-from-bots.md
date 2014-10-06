---
layout: post
title: How I Conceal Mailto Email Links From Bots
---

Back in the early days of making websites, I was naive to evil bots on the internet, scouring through my innocent webpages and finding my plain text email adress in malito links. To follow I would get spam emails with the subject header (no kidding) "SAFE AND EASY ~P·E·N·I·S~ ~E·N·L·A·R·G·E·M·E·N·T~". I new this had to stop because lets face the fact that it would have been more relevant if it said  "... ~R·E·D·U·C·T·I·O·N~".

So After reading several Stackoverflow threads related to the topic I learnt peoples ways and for one reason or another I did not like their method's. In the end I came up with a method of my own that did exactly what I wanted it to do on a range of internet browsers.

### Javascript ###
{% highlight javascript %}
(function(window) {
  window.malitoManager = function(local, domain) {
    var link = document.createElement('a');
    link.href = 'mailto:truck@thebots.com'
      .replace('truck', local)
      .replace('thebots.com', domain);
    link.target = '_blank';
    link.click();
  }
})(window);
{% endhighlight %}

Once you have added this to a page of your choice a use case in you HTML follows below.

### Usage ###
{% highlight html %}
<a href="javascript:malitoManager('example', 'example.com')">Contact</a>
{% endhighlight %}

This method makes it extremely difficult for those darn bots to find your email adress and would result in a mailto link opening in a new tab with guaranteed reliability in all browsers providing they had javascript enabled. Beautiful!
