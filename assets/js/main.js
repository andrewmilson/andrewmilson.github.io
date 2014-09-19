(function() {
  var profilePictures = document.getElementsByClassName("profile"),
      sexyBeast = document.getElementById("sexy-beast"),
      sexyBeastWink
      frames = 10,
      maxScrollTop = 30;

  console.log(profilePictures);

  window.onscroll = function() {
    // $sexyBeast.src = "images/sexy-beast.jpg";
    // $sexyBeast.style.webkitTransform = "scale(" +
    //   Math.max(Math.min(1 + 3.5 / maxScrollTop * window.pageYOffset, 4.5), 1) + ") rotate(" +
    //   Math.max(Math.min(20 / maxScrollTop * window.pageYOffset, 20), 0) + "deg)";
    // $sexyBeast.style.left = Math.max(Math.min(140 / maxScrollTop * window.pageYOffset, 140), 0) + "px";
    // $sexyBeast.style.top = Math.max(Math.min(190 / maxScrollTop * window.pageYOffset, 190), 0) + "px";
    //
    // if (window.pageYOffset > maxScrollTop) {
    //   $sexyBeast.src = "images/sexy-beast-2.jpg";
    // }

    [].forEach.call(profilePictures, function(profilePicture) {
      profilePicture.style.webkitTransform = profilePicture.style.mozTransform = profilePicture.style.oTransform = profilePicture.style.msTransform =
        'scale(' + Math.max(Math.min(1 + 3.5 / maxScrollTop * window.pageYOffset, 4.5), 1) + ') ' +
        'rotate(' + Math.max(Math.min(20 / maxScrollTop * window.pageYOffset, 20), 0) + 'deg)';
      profilePicture.style.left = Math.max(Math.min(140 / maxScrollTop * window.pageYOffset, 140), 0) + "px";
      profilePicture.style.top = Math.max(Math.min(190 / maxScrollTop * window.pageYOffset, 190), 0) + "px";
      profilePicture.style.display = "block";

      if (window.pageYOffset > 30 && profilePicture.id == "gazing") {
        profilePicture.style.display = "none";
      }
    });
  };
})();
