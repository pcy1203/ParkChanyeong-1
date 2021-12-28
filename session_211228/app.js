let clock = document.querySelector('.clock');
let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset')

let num = 1;
let clockInterval = 0;

start.addEventListener('click', function() {
  if (clockInterval != 0) {
    return;
  }
  clockInterval = setInterval(function() {
    clock.innerHTML = num;
    num++;
  }, 1000)
  clock.style.color = "white";
  clock.style.backgroundColor = "dodgerblue";
})

stop.addEventListener('click', function() {
  clearInterval(clockInterval);
  clockInterval = 0;
  clock.style.color = "dodgerblue";
  clock.style.backgroundColor = "white";
})

reset.addEventListener('click', function() {
  clock.innerHTML = 0;
  num = 1;
})