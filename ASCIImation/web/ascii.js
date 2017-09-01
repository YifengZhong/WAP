/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function () {

    document.getElementById("start").onclick = onStart;
    document.getElementById("stop").onclick = onStop;
    document.getElementById("case").onchange = onCaseChange;
    document.getElementById("sizeFont").onchange = onSizeChange;
    document.getElementById("turbo").onclick = checkClick;
    document.getElementById("stop").disabled = true;
}
var i = 0;
timer = null;

function animation(splited){
    var editArea = document.getElementById("textEd");
    editArea.value = splited[i++];
    if(i == splited.length) {
        i = 0;
    }    
}
function onStart() {

    timerStart(250);
}
function timerStart(time) {
    var selected = document.getElementById("case").value;
    if (selected == "Blank" ) {
        var editArea = document.getElementById("textEd");
        editArea.value = null;
        return;
    }

    if (selected == "Custom") {
        var context =  "  <>\n" +
    " /#\\\n" +
    " _|_\n" +
    "=====\n" +
    " --<>--\n" +
    "  #\n" +
    "_|| ||_|n";
    } else {
        context =  ANIMATIONS[selected];
    }
    var splited = context.split("=====\n");
    if(0 == splited.length) {
        var editArea = document.getElementById("textEd");
        editArea.value = "";
    }
    if (timer == null) {
        timer = setInterval(function() {animation(splited);}, time);
    }
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
        document.getElementById("case").disabled = true;
}
function onStopTimer() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
}
function onStop() {
    onStopTimer();
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("case").disabled = false;
}

function onCaseChange() {
//    onStopTimer();  
//    timerStart(250);
}

function onSizeChange() {
    var selected = document.getElementById("sizeFont").value;
    var editArea = document.getElementById("textEd");

    editArea.style.fontSize = selected + "pt";
    
}
function checkClick() {
    if (this.checked) {
        onStopTimer();
        timerStart(50);
    } else {
        onStopTimer();
        timerStart(250);
    }
}
