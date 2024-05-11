$(document).ready(function () {
  $("#box").mouseenter(function () {
    $("#box").css("background-color", "blue");
  });
  $("#box").mouseleave(function () {
    $("#box").css("background-color", "red");
  });
});
