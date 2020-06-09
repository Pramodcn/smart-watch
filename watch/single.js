var watch = document.getElementById('watch');
var black = document.getElementById('black');
var red = document.getElementById('red');
var purple = document.getElementById('purple');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var time = document.getElementById('time');
var heart = document.getElementById('heart');
var clock = document.getElementById('clock');
var heartrate = document.getElementById('heartrate');
var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

black.addEventListener('click', function(){
     watch.src="image/black.png";
})
red.addEventListener('click', function(){
    watch.src="image/red.png";
})
purple.addEventListener('click',function(){
    watch.src="image/purple.png";
})
blue.addEventListener('click',function(){
    watch.src="image/blue.png";
})
pink.addEventListener('click',function(){
    watch.src="image/pink.png";
})

time.addEventListener('click',function(){
     clock.style.display='block';
     heartrate.style.display='none';
})
heart.addEventListener('click',function(){
      clock.style.display='none';
      heartrate.style.display='block';
})

function settime(){
   var hour = new Date().getHours();
   var minute = new Date().getMinutes();
    var second= new Date().getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minute < 10) min = '0' + minute;
    if (second < 10) sec = '0' + second;
    document.getElementById('hour').innerText = hour + ' ' + ':';
    document.getElementById('minute').innerText = minute + ' ' + ':';
    document.getElementById('second').innerText = second ;
}
setInterval(settime,500);