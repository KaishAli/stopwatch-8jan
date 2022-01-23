const MyplayButton=document.querySelector(".play");

const MylapButton=document.querySelector(".lap ");

const MyresetButton=document.querySelector(".reset");

const second=document.querySelector(".sec");

const centiSecond=document.querySelector(".msec");

const minute=document.querySelector(".minute");

const laps=document.querySelector(".laps")

const clearButton=document.querySelector(".lap-clear-button")

const  bg=document.querySelector(".outer-circle")

let Playing=false;
let secCounter=0;
let centiSecCounter=0;
let minuteCounter=0;
let centiSec;
let sec;
let min;
let isReset=false;
let lapitem=0;

//Applying Functions Here

const Res_Button=()=>{
    MylapButton.classList.remove("hidden");
    MyresetButton.classList.remove("hidden");
} 
const play=()=>{
    if(!Playing && !isReset){
        bg.classList.add("animation-bg");
        MyplayButton.innerHTML="pause";
            min=setInterval(()=>{
                minute.innerHTML=`${++minuteCounter}:`;
            },60*1000);
            sec=setInterval(()=>{
                if(secCounter===60){
                    secCounter=0;
                }
                second.innerHTML=`&nbsp;${secCounter++}:`;
            },1000);
            centiSec=setInterval(()=>{
                if(centiSecCounter===100){
                    centiSecCounter=0;
                }
                centiSecond.innerHTML=`&nbsp;${++centiSecCounter}`;
            },10);
            Playing=true;
            isReset=true;
    }
    else{
        MyplayButton.innerHTML="play";
        clearInterval(sec);
        clearInterval(centiSec);
        clearInterval(min);
        bg.classList.remove("animation-bg");
        Playing=false;
        isReset=false;
    }
    Res_Button();
}
const reset =()=>{
    isReset=true;
    play();

    MylapButton.classList.add("hidden");
    MyresetButton.classList.add("hidden");
    second.innerHTML="&nbsp;0 :";
    centiSecond.innerHTML="&nbsp;0";
    minute.innerHTML="0 :";
}
const lap=()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timeStamp=document.createElement("span");
    li.setAttribute("class" , "lap-item");
    number.setAttribute("class" , "number");
    timeStamp.setAttribute("class" , "time-stamp");
    number.innerText=`${++lapitem}`
    timeStamp.innerHTML=`${minuteCounter} : ${secCounter} : ${centiSecCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearButton.classList.remove("hidden");
}
const clearAll=()=>{
    laps.innerHTML="";
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapitem=0;
}

MyresetButton.addEventListener("click" ,reset)
MyplayButton.addEventListener("click" , play);
MylapButton.addEventListener("click" , lap );
clearButton.addEventListener("click" , clearAll);