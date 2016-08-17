// countdown from 10
var N = 10;
var timer;

function tick() {
  if (N<=0) {
    console.log('Time\'s up!');
    clearInterval(timer);
  } else {
    console.log(N); N--;
  }
}

// this starts the timer
timer = setInterval(tick, 1000);