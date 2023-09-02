display = $('#display')
start = $('#start')
pause = $('#pause')
reset = $('#reset')
title = $('title')

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs =0;
let mins = 0;
let secs = 0;
let msecs = 0;

start.click(()=>{
    if(paused){

        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime,10);
    } 
})
pause.click(()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
reset.click(()=>{
    paused = true;
    elapsedTime = 0;
    startTime = 0;
    currentTime = 0;
    hrs=0;
    mins = 0;
    secs = 0;
    msecs = 0;
    clearInterval(intervalId);
    display.html('00:00:00:00');
     title.html('stopWatch');
});


updateTime = ()=>{
    elapsedTime = Date.now() - startTime;

    msecs = Math.floor(elapsedTime%1000)
    secs = Math.floor(elapsedTime/1000 %60);
    mins = Math.floor(elapsedTime/(1000*60) %60);
    hrs = Math.floor(elapsedTime/(1000*3600) %60);

    
    if(('0'+secs).length<3)secs = '0'+secs;
    if(('0'+hrs).length<3)hrs = '0'+hrs;
    if(('0'+mins).length<3)mins = '0'+mins;
    disStr = `${hrs}:${mins}:${secs}:${msecs}`
    titleStr = `${hrs}:${mins}:${secs}`
    title.html(titleStr);

    display.html(disStr)
}