function digitalClock(time) {
    let hr = 0;
    let min= 0;
    let sec = 0;
    let totaltime = "";
    if (Math.floor(time / 60 / 60) > 0 && Math.floor(time / 60 / 60) < 24){
        hr = Math.floor(time / 60 / 60);
        time = time / 60 / 60 - hr;
    }else if (Math.floor(time / 60 / 60) > 23){
        hr = Math.floor(time / 60 / 60) - 24;
        time = time / 60 / 60 - 24 - hr;
    }
    if (time * 60 > 0 && time * 60 < 61) {
      min = Math.floor(time * 60);
      time = time * 60 - min;
    }
    if (time * 60 > 0 && time * 60 < 61) {
        sec = Math.round(time * 60);
    }
    if (hr < 10) {
        totaltime = "0" + hr + ":";
    } else totaltime = hr + ":";
    if (min < 10) {
        totaltime += "0" + min + ":";
    } else totaltime += min + ":";
    if (sec < 10) {
        totaltime += "0" + sec;
    } else totaltime += sec ;
  
    return totaltime;
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));