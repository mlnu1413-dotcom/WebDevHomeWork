function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }

  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  var gmtHr = d.getUTCHours();

  var gmtAmpm;
  if (gmtHr == 12) {
    gmtAmpm = "PM";
  } else if (gmtHr > 12) {
    gmtHr -= 12;
    gmtAmpm = "PM";
  } else {
    gmtAmpm = "AM";
  }

  var timeDiff = d.getUTCHours() - d.getHours();

  if (timeDiff < 0) {
    timeDiff = timeDiff * -1;
  }

  var timeZone;
  if (timeDiff == 8) {
    timeZone = "PT";
  } else if (timeDiff == 7) {
    timeZone = "MT";
  } else if (timeDiff == 6) {
    timeZone = "CT";
  } else if (timeDiff == 5) {
    timeZone = "ET";
  }

  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  document.getElementById("clock").innerText = time;
}

currentTime();

setInterval(currentTime, 1000);
