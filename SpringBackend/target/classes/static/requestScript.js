let startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {
    fetch("/clearBoard");
});