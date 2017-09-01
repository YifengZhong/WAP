/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//"use strict";
var success = true;


$(document).ready(function() {
    alert($("#di").text());
    $(".boundary").hover(function(){

        $(".boundary").addClass("youlose");
        success = false;
    });
    $("#end").mouseenter( function(){
        if(success === true) {
            $("#status").text("you win :)");
        } else {
            $("#status").text("you lose :(");
        }
    });
    $("#maze").mouseleave( function(){
        $(".boundary").addClass("youlose");
        success = false;  
        $("#status").text("you lose :(");
    });
    $("#start").click(function(){

        $(".boundary").removeClass("youlose");
        success = true;
        $("#status").text("restarted");
    });
});


