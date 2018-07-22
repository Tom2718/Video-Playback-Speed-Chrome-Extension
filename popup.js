document.addEventListener('DOMContentLoaded', function() {
  var increaseSpeedButton = document.getElementById('increaseSpeedP');
  var decreaseSpeedButton = document.getElementById('decreaseSpeedP');
  var speedValInput = document.getElementById('speedVal');

  increaseSpeedButton.addEventListener('click', function() {
    speedValInput.value = (Number(speedValInput.value) + 0.1).toFixed(1);
    speedValInput.dispatchEvent(new Event("change"));
  }, false);

  decreaseSpeedButton.addEventListener('click', function() {
    speedValInput.value = (Number(speedValInput.value) - 0.1).toFixed(1);
    speedValInput.dispatchEvent(new Event("change"));
  }, false);

  function changeSpeed(e) {
    chrome.tabs.executeScript({
      code: 'console.log("\'Because videos should be played faster\' - Tom2718");document.querySelector("video").playbackRate = ' + e.target.value,
    });
  }

  speedValInput.addEventListener('change', changeSpeed);

}, false);
