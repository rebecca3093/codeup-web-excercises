"use strict";

$(document).ready(function () {


    $("li").click(function () {
        $(this).css('background-color', 'blue');
    });

    $('p').cick(function () {
        console.log($(this).css('background-color'));
        if ($(this).css('background-color') === "rgba(0,0,0,0)") {
            $(this).css('background-color', 'yellow');
        } else {
            $(this).css('background-color', 'white');
        }
    });

    $('h1').dbclick(function () {
        $(this).css('color', 'teal');
    })

    $('.sec-intro').hover(function () {
        $(this).css('font-style', 'italic');
    },
        function (){
        $(this), css ('font-style', 'normal');
        });

    //Keyboard Events

    $(#search).keyup(function(e){
        console.log(e.key);
    })

    $(document).keyup(function(e){
        console.log(e.key);
    })

    $(#search).keydown(function(e){
        console.log(e.key);
    })

})

