"use strict";
var audio = new Audio("audio/game-audio.mp3");
var audio_fail = new Audio("audio/fail.mp3");
var audio_success = new Audio("audio/success.wav");

Storage.prototype.setObj = [];
console.log(Storage.prototype.setObj);

Storage.prototype.setObj.push("prawin");

$(document).ready( function() {
    
    var score=0;
    $("#score").text("Score "+score);
    $("#score").show();
    $("#gameholder").hide();
    $("#score-popup").hide()

    $("#begin").click(function(){
        audio.play();
        $("#gameholder").show()
        $("#begin").hide();
    });
    var game = $("#gameholder");
    var childDiv = $(".random");
    function shuffle(array) {
        var game = $("#gameholder");
        childDiv = $(".random");
        var currentIndex = childDiv.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = childDiv[currentIndex];
            childDiv[currentIndex] = childDiv[randomIndex];
            childDiv[randomIndex] = temporaryValue;
        }
        game.append(childDiv);
    }
    shuffle(childDiv);
    
    $(".random").click(function(){
       var attr = $(this).attr("id");
        if(attr == "penguin1"){
            $(this).css("background-image","url('images/penguin_1.png')");
            audio_fail.play();
        }
        else if(attr == "penguin2"){
            $(this).css("background-image","url('images/penguin_2.png')");
            audio_fail.play();
        }
        else if(attr == "penguin3"){
            $(this).css("background-image","url('images/penguin_3.png')");
            audio_fail.play();
        }
        else if(attr == "penguin4"){
            $(this).css("background-image","url('images/penguin_4.png')");
            audio_fail.play();
        }
        else if(attr == "penguin5"){
            $(this).css("background-image","url('images/penguin_5.png')");
            audio_fail.play();
        }
        else if(attr == "penguin6"){
            $(this).css("background-image","url('images/penguin_6.png')");
            audio_fail.play();
        }
        else if(attr == "penguin7"){
            $(this).css("background-image","url('images/penguin_7.png')");
            audio_fail.play();
        }
        else if(attr == "penguin8"){
            $(this).css("background-image","url('images/penguin_8.png')");
            audio_fail.play();
        }
        if(attr != "yeti"){
            score++;
            $("#score").text("Score "+score);
        }
    });
    
    $("#yeti").click(function() {
        $(".random").css("background-image","url('images/mound_1.png')");
        audio_success.play();
        $(this).css("background-image","url('images/yeti.png')");
        audio.pause(); 
        $("#high-score").text(" "+ score);
        $("#score-popup").show();
        $("#score").hide();
        $("button").click(function(){
            $("#score-popup").hide();
            $("#score").text("Score");
            audio.play();
            location.reload();
        });
    });
});