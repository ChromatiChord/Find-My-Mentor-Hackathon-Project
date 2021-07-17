function loadPage(page) {
  window.location(`${page}.html`)
}

// SIGN UP AS STUDENT form button
document.getElementById("menSignUp").addEventListener("click", function() {
  window.location.href = "../html/men_sign_up.html";
}, false);

document.getElementById("stuSignUp").addEventListener("click", function() {
  window.location.href = "../html/stu_sign_up.html";
}, false);

document.getElementById("signin").addEventListener("click", function() {
  window.location.href = "../html/sign_in.html";
}, false);

document.getElementById("aboutUs").addEventListener("click", function() {
  window.location.href = "../html/about_us.html";
}, false);