function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const interval = setInterval(function() {
    var date = new Date();
    var h = addZero(date.getHours()); // 0 - 23
    var m = addZero(date.getMinutes()); // 0 - 59
    var s = addZero(date.getSeconds()); // 0 - 59
        
    
    var time = h + ":" + m ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
 }, 5000);

