// Countdown to starting on April 17th, 2023
var countDownDate = new Date("Apr 17, 2023 09:00:00 GMT+0530").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-to-start").innerHTML = "<div class='countdown'>Countdown to starting: </div>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-to-start").innerHTML = "EXPIRED";
  }
}, 1000);

// Countdown of how many free days are left for me in the year
var freeDays = 13 + 12; // 13 public holidays + 12 one day leaves
var now = new
