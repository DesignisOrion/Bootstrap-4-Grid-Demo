$(".font-sizes a").click(function () {
  $("html").css("font-size", $(this).data("size"));
  return false;
});
