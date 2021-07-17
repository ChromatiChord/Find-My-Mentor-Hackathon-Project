var value = 100;
var button = document.createElement("button");
button.innerHTML = value;
button.className = "big_button";
button.addEventListener("click", function () {
    button.innerHTML = button.innerHTML - 1;
});

document.body.appendChild(button);

var message = document.createElement("h1");
message.innerHTML = "I seriously told you not to press it";
message.className = "mystery_message";
message.addEventListener("click", function () {
    message.innerHTML = "Really, you thought clicking me would do something?";
});

document.body.appendChild(message);
