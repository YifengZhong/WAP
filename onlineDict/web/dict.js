/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

$(document).ready(function() {

    $("#lookUp").click(function(){
        $("#wordTable").empty();
        var word=$("#wordTxt").val();
        $.post("dictServlet", 
        {
            word:word
            
        })
            .done(ajaxDone)
            .fail(ajaxFailure);
    }); 
});

function ajaxFailure( data, textStatus, jqXHR) {
   console.log("in1 ajaxFailure"); 
}
function ajaxDone(data, textStatus, jqXHR) {

    var dataObj=$.parseJSON(data);
    var st=document.getElementById("wordTable");


    var newTr; 
    var newTd0; 
    var newTd1; 
    var newTd2; 
    
    for(var i=0;i<dataObj.wordlist.length;i++){
            var word=dataObj.wordlist[i];
            newTr=st.insertRow();
            newTd0=newTr.insertCell();
            newTd1=newTr.insertCell();
            newTd1.style.width="100px";
            newTd2=newTr.insertCell();
            newTd0.innerHTML=i;
            newTd1.innerHTML="("+word.wordtype+"):: ";
            newTd2.innerHTML=word.definition;
    }   
}



