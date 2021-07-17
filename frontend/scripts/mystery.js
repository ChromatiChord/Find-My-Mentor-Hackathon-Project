function main() {
    var message = document.createElement("h1");
    document.getElementById("spooky_sound").volume = 0.2;
    message.innerHTML = "I told you not to click the link";
    message.className = "mystery_message";
    message.style = "color: white;";
    var value = 100;
    var button = document.createElement("button");
    button.innerHTML = value;
    button.className = "big_button";
    button.addEventListener("click", function () {
        value -= 1;
        button.innerHTML = value;
        if (value === 99) {
            document.body.appendChild(message);
        }
        if (value < 0) {
            document.body.style = "background-color: coral";
            document.getElementById("spooky_sound").volume = 0;
        }
    });
    document.body.appendChild(button);

    var message = document.createElement("h1");
    message.innerHTML = "I told you not to click the link";
    message.className = "mystery_message";
}

main();
