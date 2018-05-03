class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>hey.</h1>
                <p>Voluptate eu reprehenderit deserunt laborum non aute occaecat incididunt.</p>
            </div>
        )
    }
}
class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>login.</h1>
                <p>Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
class Projects extends React.Component {
    render() {
        return (
            <div style="overflow-x: auto">
                <h1>projects.</h1>
                <table style="width:100%">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>
            </div>
        )
    }
}
class Research extends React.Component {
    render() {
        return (
            <div>
                <h1>research.</h1>
                <p>Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco. Ipsum qui consectetur esse ullamco.</p>
            </div>
        )
    }
}
function renderLogin(item) {
    ReactDOM.render(
        <Login />,
        document.getElementById('root')
    );
}
function renderHome(item) {
    ReactDOM.render(
        <Home />,
        document.getElementById('root')
    );
}
function renderProjects(item) {
    ReactDOM.render(
        <Projects />,
        document.getElementById('root')
    );
}
function renderResearch(item) {
    ReactDOM.render(
        <Research />,
        document.getElementById('root')
    );
}