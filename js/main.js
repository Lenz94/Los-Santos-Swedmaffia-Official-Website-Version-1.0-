/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(document).ready(function () {
    "use strict";
    var audio = $("#hover")[0];
    $("#icon1").mouseenter(function () {
        audio.play();
        return false;
    });
    $("#icon1").click(function () {
        $("#place1").show("slow", function () {
            $(this).click(function () {
                $(this).hide("slow");
                audio.play();
                return false;
            });
        });
    });
});