function dotsON(){
    document.getElementById('dots1').style.opacity = '1';
    document.getElementById('dots2').style.opacity = '1';
}

function clock(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    document.getElementById('hours').innerHTML = (hours > 9) ? hours : '0' + hours;
    document.getElementById('minutes').innerHTML = (minutes > 9) ? minutes : '0' + minutes;
    document.getElementById('seconds').innerHTML = (seconds > 9) ? seconds : '0' + seconds;
    document.getElementById('dots1').style.opacity = '0';
    document.getElementById('dots2').style.opacity = '0';
    dots = setTimeout(dotsON, 100);
}

function startClock(){
    clock();
    clock = setInterval(clock, 1000);
}