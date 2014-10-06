---
layout: post
title: Simple Javascript Image Downloader With Callback
---

Recently I created a native Javascript game called Protect Paigridge. I needed to load the characters images so I could use them in the game. So I came up with a nifty image downloading function with a callback that I thought the community might like.


### image-downloader.js ###
This is the code for the downloading function. As you can see it is native Javascript, light weight and simple.

{% highlight javascript %}
function imageDownloader(args, callback) {
  var downloadStatus = 0;
  var imgObj = {};

  for (var imageName in args) {
    imgObj[imageName] = new Image();
    imgObj[imageName].src = args[imageName];

    imgObj[imageName].onload = imgObj[imageName].onerror = function() {
      if (downloadStatus++ + 1 == Object.keys(imgObj).length) callback(imgObj);
    };
  }
}
{% endhighlight %}

### Usage ###
In my example I am only downloading 2 images but you are able to download as many as you like.
{% highlight javascript %}
imageDownloader({
  ship: "images/ship.png",
  enemy: "images/enemy.png"
}, function(imgObj) {
  console.log(imgObj); // {ship: img, enemy: img}
});
{% endhighlight %}
