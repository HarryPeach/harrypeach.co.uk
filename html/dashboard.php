<?php
include("check_login.php");
?>
<!DOCTYPE HTML>
<title>harry peach</title>

<meta charset="UTF-8">
<meta name="author" content="Harry Peach">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
<link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
<link rel="stylesheet" type="text/css" href="assets/css/dashboard.css">
<link rel="stylesheet" id="theme" href="assets/css/overlays/default.css">
<link rel="manifest" href="assets/pwa/manifest.json">

<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

<div id="modal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <h2>settings</h2>
        Theme:
        <select id="theme-select">
            <option value="default">Default</option>
            <option value="retro">Retro Hacker</option>
            <option value="90s">90s Fresh</option>
        </select>
    </div>
</div>

<i class="material-icons" id="modal-settings-icon">settings</i>

<div class="container">
    <div class="row">
        <div class="eight columns" id="root"></div>
    </div>
    <div class="row">
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(0)">Dashboard</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(1)">Paste</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(2)">Mailer</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(3)">Etc</span>
        </div>
        <div class="two columns">
            <span class="white-link"><a href="logout.php">Log out</a></span>
        </div>
    </div>
</div>
<div class="footer">
    <span id="footer-contact-text">contact@harrypeach.co.uk</span>
</div>
<script type="text/babel">
class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">dashboard.</h1>
                <p>Welcome to the preview of my website. Some features may not be functional yet, but feel free to look around.</p>
            </div>
        )
    }
}
class Paste extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">paste.</h1>
                <form id="login-form" action="login.php" method="post">
                    <input type="text" placeholder="Username" name="user" class="login-input-text" required />
                    <br />
                    <input type="password" placeholder="Password" name="pass" class="login-input-text" required />
                    <br />
                    <button type="submit" class="styled-button">Log in</button>
                </form>
            </div>
        )
    }
}
class Mailer extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">mailer.</h1>
                <p>Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
class Etc extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">something else.</h1>
                <p>Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
function renderRoot(item) {
    var element;
    switch(item){
        case 0:
            element = <Dashboard />;
            break;
        case 1:
            element = <Paste />;
            break;
        case 2:
            element = <Mailer />;
            break;
        case 3:
            element = <Etc />;
            break;

    }
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
</script>
<script type="text/babel">
    window.onload = renderRoot(0);
</script>
<script src="assets/js/postload.js"></script>