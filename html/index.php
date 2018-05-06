<!DOCTYPE HTML>
<title>harry peach</title>

<meta charset="UTF-8">
<meta name="author" content="Harry Peach">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="assets/css/normalize.css">
<link rel="stylesheet" type="text/css" href="assets/css/skeleton.css">
<link rel="stylesheet" type="text/css" href="assets/css/core.css">
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
        <hr>
        <h3>debug options</h3>
        <strong>Version: </strong><span>harrypeach.co.uk v2 - 20180505_1044</span><br>
    </div>
</div>

<i class="material-icons" id="modal-settings-icon">settings</i>

<!-- <div class="container error-message">
    ERROR: This is a generic error message
</div> -->

<div class="container center-vertical">
    <div class="row">
        <div class="eight columns" id="root"></div>
    </div>
    <div class="row">
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(0)">Home</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(1)">Projects</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(2)">Research</span>
        </div>
        <div class="two columns">
            <span class="white-link" onClick="renderRoot(3)">Login</span>
        </div>
    </div>
</div>
<div class="footer">
    <span id="footer-contact-text">contact@harrypeach.co.uk</span>
</div>
<script type="text/babel">
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">hey.</h1>
                <p>Welcome to the preview of my website. Some features may not be functional yet, but feel free to look around.</p>
            </div>
        )
    }
}
class Login extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">login.</h1>
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
class Projects extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">projects.</h1>
                <p>Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
class Research extends React.Component {
    render() {
        return (
            <div>
                <h1 id="title">research.</h1>
                <p>Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
function renderRoot(item) {
    var element;
    switch(item){
        case 0:
            element = <Home />;
            break;
        case 1:
            element = <Projects />;
            break;
        case 2:
            element = <Research />;
            break;
        case 3:
            element = <Login />;
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