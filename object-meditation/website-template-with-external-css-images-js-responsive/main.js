$(document).ready(function() {

  $("#English").mouseenter(function() {
    $("#myVideo").css({
      "filter": "invert(100%)"
    });
    $("a").css({
      "color":"#FFFFFF"
    });
    $("body").css({
      "text-shadow": "0px 3px 5px black"
    });
  });

  $("#English").mouseleave(function() {
    $("#myVideo").css({
      "filter": "invert(0%)"
    });
    $("a").css({
      "color":"#000000"
    });
    $("body").css({
      "text-shadow": "0px 3px 5px white"
    });
  });
});
