//Start button to start timer

//Timer Function
//Timer should be 60 seconds
//Make Timer funciton start when btn is clicked
function timer() {
  var seconds = 60;
  var timer = setInterval(function () {
    document.getElementById(
      "large-font timer-count"
    ).innerHTML = `60${seconds}`;
    seconds--;

    if (seconds <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}
