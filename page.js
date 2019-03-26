
function checkAllowed() {
  var x = document.referrer;    

  if (x == "https://svt-design-project--rabgreenup1.repl.co/login.html") {
  } else {
    window.location.href = "index.html";
  };
}
