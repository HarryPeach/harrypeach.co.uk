var modal = document.getElementById('modal');
var btn = document.getElementById("modal-settings-icon");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.className = "modal show";
    modal.style.display = "block";
}

// span.onclick = function () {
//     modal.className = "modal hide";
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.className = "modal hide";
    }
}