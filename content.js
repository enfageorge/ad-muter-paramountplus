function manageAdPlayback() {
  const videoPlayer = document.querySelector('video');
  const adCountdownElement = document.querySelector('.ad-info-manager-circular-loader-copy');

  // If the ad countdown exists and the video player is found
  if (adCountdownElement && videoPlayer) {
    const adTimeLeft = parseInt(adCountdownElement.textContent, 10);

    // If the parsed number is greater than 1, mute; otherwise, unmute
    if (adTimeLeft > 0) {
      if (!videoPlayer.muted) {
        videoPlayer.muted = true;
        console.log('Ad detected, muting...');
      }
    } else if (videoPlayer.muted) {
      // Optionally, unmute when ad is finished or not detected
      videoPlayer.muted = false;
      console.log('Unmuting video...');
    }
  }
}

// Run manageAdPlayback periodically to monitor ad playback.
setInterval(manageAdPlayback, 1000); // Adjust interval as needed
