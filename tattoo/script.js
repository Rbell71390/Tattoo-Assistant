a$(document).ready(function () {
  $("#projects").tabs();
  $("ul").sortable({ axis: "x", containment: "#projects" });
  $("ol").sortable({ axis: "x", containment: "#projects" });
});

$(function () {
  $("#datepicker").datepicker();
});

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
