$(document).ready(function () {
  var video = $('#youtube-video')[0]; // Listen for orientation change events

  window.addEventListener('orientationchange', function () {
    if (window.orientation === 90 || window.orientation === -90) {
      // If device is flipped vertically, toggle full screen mode
      console.log('orientation', window.orientation, video);
      if (video.requestFullscreen) {
        console.log('video.requestFullscreen');
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        console.log('video.webkitRequestFullscreen');
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        console.log('video.msRequestFullscreen');
        video.msRequestFullscreen();
      }
    } else {
      // If device is not flipped vertically, exit full screen mode

      if (document.exitFullscreen) {
        console.log('document.exitFullscreen');
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        console.log('document.webkitExitFullscreen');
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        console.log('document.msExitFullscreen');
        document.msExitFullscreen();
      }
    }
  });
});
