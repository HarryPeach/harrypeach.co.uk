var modal = document.getElementById('modal');
var btn = document.getElementById("modal-settings-icon");
var span = document.getElementsByClassName("close")[0];
var theme_selector = document.getElementById("theme-select");

btn.onclick = function () {
    modal.className = "modal show";
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.className = "modal hide";
    }
}

theme_selector.onchange = function () {
    document.getElementById('theme').href='assets/css/overlays/' + theme_selector.value + '.css'
}