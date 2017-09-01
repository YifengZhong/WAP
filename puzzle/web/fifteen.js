"use strict";
var blankX = 3;
var blankY = 3;
( function($) {
    $(document).ready(function() {
        $("#puzzlearea div").each(function(index){
            var y = ((index % 4) * 100);
            var x = (Math.floor(index/4) * 100);
            $(this).addClass("puzzlepiece");
            $(this).css("left",x+"px");
            $(this).css("top",y+"px");
            $(this).css("background-image","./background.jpg");
            $(this).css("background-position",(-x) + "px " + (-y) + "px");
            $(this).attr("x",x/100);
            $(this).attr("y",y/100);
            $(this).attr('id', x/100 + "_" + y/100);
        });
        $(".puzzlepiece").hover(function() {
            var x = parseInt($(this).attr('x'));
            var y = parseInt($(this).attr('y'));
            if((x-1) >= 0) {
                if ($("#"+(x-1)+"_"+y).length == 0) {
                    $(this).addClass("movablepiece");
                    $(this).attr("movable","true");
                    blankX=x-1;
                    blankY=y;
                }
            }
            if((y-1)>= 0) {
                if ($("#"+(x)+"_"+(y-1)).length == 0) {
                    $(this).addClass("movablepiece");
                    $(this).attr("movable","true");
                    blankX=x;
                    blankY=y-1;
                }
            }
            if((x+1) <=3) {
                if ($("#"+(x+1)+"_"+y).length == 0) {
                    $(this).addClass("movablepiece");
                    $(this).attr("movable","true");
                    blankX=x+1;
                    blankY=y;
                }
            }
            if((y+1) <= 3) {
                if ($("#"+x+"_"+(y+1)).length == 0) {
                    $(this).addClass("movablepiece");
                    $(this).attr("movable","true");
                    blankX=x;
                    blankY=y+1;
                }
            }
        });
        $(".puzzlepiece").click(function() {
                var movable = $(this).attr("movable");
                if (movable === "true") {
                    $(this).animate({
                        left: blankX*100 + "px",
                        top: blankY*100 + "px"
                    }, 1000 );
                $(this).attr("id",blankX + "_" + blankY);
                $(this).attr("x",blankX);
                $(this).attr("y",blankY);
                update();
            }
        });
        $("#shufflebutton").click(function(){
            var count = 0;
            while(count < 100) {
                var num = Math.floor(Math.random()*4);
                if(num === 3 ) {
                    if((blankX-1)>=0) {
                        $("#"+(blankX-1) + "_" + blankY).animate({
                            left: blankX*100 + "px",
                            top: blankY*100 + "px"
                        },150);
                        $("#"+(blankX-1) + "_" + blankY).attr("x",blankX);
                        $("#"+(blankX-1) + "_" + blankY).attr("y",blankY);                        
                        $("#"+(blankX-1) + "_" + blankY).attr("id",blankX + "_" + blankY);
                        blankX=blankX-1;
                        count ++;
                        console.log(num + "blankX: " + blankX + "blankY: " + blankY);
                    }
                }
                if(num === 2 ) {
                    if((blankY+1)<=3) {
                        $("#"+(blankX) + "_" + (blankY+1)).animate({
                            left: blankX*100 + "px",
                            top: blankY*100 + "px"
                        },150);
                        $("#"+(blankX) + "_" + (blankY+1)).attr("x",blankX);
                        $("#"+(blankX) + "_" + (blankY+1)).attr("y",blankY);                        
                        $("#"+(blankX) + "_" + (blankY+1)).attr("id",blankX + "_" + blankY);
                        blankY=blankY+1;
                        count ++;
                        console.log(num + "blankX: " + blankX + "blankY: " + blankY);
                    }                
                }
                if(num === 1 ) {
                    if((blankX+1)<=3) {
                        $("#"+(blankX+1) + "_" + blankY).animate({
                            left: blankX*100 + "px",
                            top: blankY*100 + "px"
                        },150);
                        $("#"+(blankX+1) + "_" + blankY).attr("x",blankX);
                        $("#"+(blankX+1) + "_" + blankY).attr("y",blankY);                        
                        $("#"+(blankX+1) + "_" + blankY).attr("id",blankX + "_" + blankY);
                        blankX=blankX+1;
                        count ++;
                        console.log(num + "blankX: " + blankX + "blankY: " + blankY);
                    }
                }
                if(num === 0 ) {
                    if((blankY-1)>=0) {
                        $("#"+(blankX) + "_" + (blankY-1)).animate({
                            left: blankX*100 + "px",
                            top: blankY*100 + "px"
                        },150);
                        $("#"+(blankX) + "_" + (blankY-1)).attr("x",blankX);
                        $("#"+(blankX) + "_" + (blankY-1)).attr("y",blankY);                        
                        $("#"+(blankX) + "_" + (blankY-1)).attr("id",blankX + "_" + blankY);
                        console.log(num + "blankX: " + blankX + "blankY: " + blankY);
                        blankY=blankY-1;
                        count ++;
                    }                
                }
            }
        });
    });
} ) ( jQuery );

function update() {
       $(".puzzlepiece").attr("movable","false");
       $(".puzzlepiece").removeClass("movablepiece");
}