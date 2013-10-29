/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(document).ready(function () {
    "use strict";
    var audio = $("#hover")[0];
    $("#icon1").mouseenter(function () {
        audio.play();
        $("#place1").show("slow");
    });
    $("#place1").mouseleave(function () {
        audio.play();
        $(this).hide("slow");
    });
});