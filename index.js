$(document).ready(function () {
  var video = $('#youtube-video')[0]; // Listen for orientation change events

  window.addEventListener('orientationchange', function () {
    if (window.orientation === 90 || window.orientation === -90) {
      // If device is flipped vertically, toggle full screen mode

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      // If device is not flipped vertically, exit full screen mode

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });
});
