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
var now = new Date();
var endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59); // 11 is December
var daysLeft = Math.round((endOfYear - now) / (1000 * 60 * 60 * 24));
var weekendsLeft = Math.floor(daysLeft / 7) * 2; // assuming 2 weekends per week
var remainingDays = daysLeft - weekendsLeft - freeDays;

document.getElementById("countdown-to-free-days").innerHTML = "<div class='countdown'>Countdown of how many free days are left: </div>" + remainingDays + " days (including weekends)";

// Countdown of how many hours left for my work in a year
var workDays = 260; // assuming 52 weeks with 2 days off per week
var workHours = workDays * 9; // 9 hours per work day
var hoursLeft = workHours - ((now.getHours() - 9) + (now.getMinutes() / 60)); // assuming start work at 9 am

document.getElementById("countdown-to-work-hours").innerHTML = "<div class='countdown'>Countdown of how many work hours left: </div>" + hoursLeft.toFixed(2) + " hours";

// Countdown to finishing my job after a year
var endOfJob = new Date("
