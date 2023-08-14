let spotOne = document.getElementById("one");
function clickImage() {
    fetch('/receiveMove', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }}
    ).then(response => response.text()).then(data => {
        spotOne.src = data;
    });
}