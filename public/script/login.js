const signUpButton = $("#register");
const signInButton = $("#login");
const container = $("#container");

signUpButton.on("click", function () {
  container.addClass("right-panel-active");
});

signInButton.on("click", function () {
  container.removeClass("right-panel-active");
});