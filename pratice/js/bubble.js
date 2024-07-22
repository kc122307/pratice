var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
score+=10;
document.querySelector("#scoreval").textContent=score;
}
function gethit(){
hitrn = Math.floor(Math.random()*69);
document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
var clutter="";
for(var i=1;i<70;i++){
var rn = Math.floor(Math.random()*69);
clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
var timeint = setInterval(function(){
if(timer>0){
timer--;
document.querySelector("#timerval").textContent = timer;
}
else{
clearInterval(timeint);
document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
}
},1000);
}
document.querySelector("#pbtm").
addEventListener("click",function(dets){
var clickednum = Number(dets.target.textContent);
if(hitrn === clickednum){
increaseScore();
gethit();
makeBubble();
}
gethit();
makeBubble();
});
gethit();
makeBubble();
runTimer();