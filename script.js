display = $('#display')
start = $('#start')
pause = $('#pause')
reset = $('#reset')

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs =0;
let mins = 0;
let secs = 0;

start.click(()=>{
    if(paused) paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime,75);
})



updateTime = ()=>{
    elapsedTime = Date.now() - startTime;

    secs = Math.floor(elapsedTime/1000 %60);
    mins = Math.floor(elapsedTime/(1000*60) %60);
    hrs = Math.floor(elapsedTime/(1000*3600) %60);

    disStr = `${hrs} :${mins} :${secs}`

    display.html(disStr)
}