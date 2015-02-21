(function() {
  var profilePictures = document.getElementsByClassName("profile"),
      maxScrollTop = 30;

  window.onscroll = function() {
    [].forEach.call(profilePictures, function(profilePicture) {
      profilePicture.style.webkitTransform = profilePicture.style.MozTransform = profilePicture.style.OTransform = profilePicture.style.msTransform =
        'scale(' + Math.max(Math.min((1 + 3.5 / maxScrollTop * window.pageYOffset).toFixed(4), 4.5), 1) + ') ' +
        'rotate(' + Math.max(Math.min((20 / maxScrollTop * window.pageYOffset).toFixed(4), 20), 0) + 'deg)';
      profilePicture.style.left = Math.max(Math.min((140 / maxScrollTop * window.pageYOffset).toFixed(0), 140), 0) + "px";
      profilePicture.style.top = Math.max(Math.min((190 / maxScrollTop * window.pageYOffset).toFixed(0), 190), 0) + "px";
      profilePicture.style.display = "block";
      if (window.pageYOffset > maxScrollTop && profilePicture.id == "gazing") profilePicture.style.display = "none";
    });
  };
})();
