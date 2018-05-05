var modal = document.getElementById('modal');
var btn = document.getElementById("modal-settings-icon");
var span = document.getElementsByClassName("close")[0];
var theme_selector = document.getElementById("theme-select");

//
// Events

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
    changeTheme(theme_selector.value);
    setCookie("theme", theme_selector.value, 365);
}

function changeTheme(newtheme){
    document.getElementById('theme').href='assets/css/overlays/' + newtheme + '.css'
}

//
// Cookies

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name + '=; Max-Age=-99999999;';  
}

if(getCookie("theme") != null){
    changeTheme(getCookie("theme"));
    theme_selector.value = getCookie("theme");
}