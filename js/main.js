/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(document).ready(function () {
    "use strict";
    var audio = $("#hover")[0];
    $("#icon1").mouseenter(function () {
        audio.play();
        $("#place1").fadeIn();
    });
    $("#iconplace1").mouseenter(function () {
        audio.play();
        $("#place1").fadeIn();
    });
    $("#place1").mouseleave(function () {
        audio.play();
        $(this).fadeOut();
    });
    $("#icon2").mouseenter(function () {
        audio.play();
        $("#place2").fadeIn();
    });
    $("#iconplace2").mouseenter(function () {
        audio.play();
        $("#place2").fadeIn();
    });
    $("#place2").mouseleave(function () {
        audio.play();
        $(this).fadeOut();
    });
    $("#icon3").mouseenter(function () {
        audio.play();
        $("#place3").fadeIn();
    });
    $("#iconplace3").mouseenter(function () {
        audio.play();
        $("#place3").fadeIn();
    });
    $("#place3").mouseleave(function () {
        audio.play();
        $(this).fadeOut();
    });
    $("#icon4").mouseenter(function () {
        audio.play();
        $("#place4").fadeIn();
    });
    $("#iconplace4").mouseenter(function () {
        audio.play();
        $("#place4").fadeIn();
    });
    $("#place4").mouseleave(function () {
        audio.play();
        $(this).fadeOut();
    });
    $("#icon5").mouseenter(function () {
        audio.play();
        $("#place5").fadeIn();
    });
    $("#iconplace5").mouseenter(function () {
        audio.play();
        $("#place5").fadeIn();
    });
    $("#place5").mouseleave(function () {
        audio.play();
        $(this).fadeOut();
    });
});