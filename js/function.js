var WorkTime = 25*60;
var RecreationTime = 5*60;

var savWork = WorkTime, savRec = RecreationTime;
var workText = document.getElementById('TimeWork');
var recreationText = document.getElementById('TimeReclear');

var delayTime = 30;
var TimerStartWork = false;
var TimerRecreation = false;

var a = new Audio();

setInterval(() => {
    if(TimerStartWork == true){
        if ((parseInt(WorkTime/60) == 0) && (WorkTime % 60 == 0) ){
            document.getElementById('start').innerHTML = 'Start';
            TimerStartWork = false;
            TimerRecreation = true
            WorkTime = savWork;
            RecreationTime = savRec;
            
        }
        else WorkTime--;
        document.getElementById('TimeWork').innerHTML = parseInt(WorkTime/60) + ' : ' + WorkTime % 60;
        if((parseInt(WorkTime/60) == 0) && (WorkTime % 60 == 1)){
            a.src = "/../audio/attractive.mp3";
            a.play();
        }
        
    } 
    if(TimerRecreation == true){
        if((parseInt(RecreationTime/60) == 0) && (RecreationTime % 60 == 0)){
            TimerRecreation = false;
            TimerStartWork = true;
            WorkTime = savWork;
            RecreationTime = savRec;
        }
        else RecreationTime--;
        if((parseInt(RecreationTime/60) == 0) && (RecreationTime % 60 == 1)){
            a.src = "/../audio/Sound_11204.wav";
            a.play();
        }
        document.getElementById('TimeReclear').innerHTML = parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60;
    }
}, 1000);

window.document.onclick = function(){
    //раюота
    document.getElementById('PlusWork').onclick = function(){
        WorkTime += delayTime;
        savWork = WorkTime;
        console.log(parseInt(WorkTime/60) + ' : ' + WorkTime % 60);  
        document.getElementById('TimeWork').innerHTML = parseInt(WorkTime/60) + ' : ' + WorkTime % 60;
    }
    document.getElementById('MinusWork').onclick = function(){
        
        if(WorkTime - delayTime > 0 ){
            WorkTime -= delayTime;
            savWork = WorkTime;
        }
        console.log(parseInt(WorkTime/60) + ' : ' + WorkTime % 60); 
        document.getElementById('TimeWork').innerHTML = parseInt(WorkTime/60) + ' : ' + WorkTime % 60;
    }
    //одых
    document.getElementById('PlusReclear').onclick = function(){
        RecreationTime += delayTime;
        savRec = RecreationTime;
        console.log(parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60);  
        document.getElementById('TimeReclear').innerHTML = parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60;
    }
    document.getElementById('MinusReclear').onclick = function(){
        
        if(RecreationTime - delayTime > 0){
            RecreationTime -= delayTime;
            savRec = RecreationTime;
        }
        console.log(parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60); 
        document.getElementById('TimeReclear').innerHTML = parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60;
    }


   //сброс
    document.getElementById('sbros').onclick = function(){
        TimerStartWork = false;
        TimeRanges = false;
        WorkTime = 25*60;
        RecreationTime = 5*60;
        document.getElementById('start').innerHTML = 'Start';
        document.getElementById('TimeWork').innerHTML = parseInt(WorkTime/60) + ' : ' + WorkTime % 60;
        document.getElementById('TimeReclear').innerHTML = parseInt(RecreationTime/60) + ' : ' + RecreationTime % 60;
    }
}
//Старт таймера
function start(){
    if (TimerStartWork == true) {
        document.getElementById('start').innerHTML = 'Start';
        TimerStartWork = false;
    }
    else{
        document.getElementById('start').innerHTML = 'Stop';
        TimerStartWork = true;
    }
}

var t = false;
function openMenu(op){
    t = !t;
    if(t == true){
        document.getElementById('menuPomo').style.left = 0;
        document.getElementById('menuPomo').style.transition = 1 + "s";
        op.style.right = 15 + 'px';
        op.style.transition = 1 + 's';
    }
   else{
        document.getElementById('menuPomo').style.left = -400 + 'px';
        document.getElementById('menuPomo').style.transition = 1 + "s";
        op.style.right = '-'+ 40 + 'px';
        op.style.transition = 1 + 's';
   }
}