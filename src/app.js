import React from "react";
import ReactDOM from "react-dom";
import ReactStickyNotes from './components/react-sticky-notes';
import logo from './logo.svg';
import './app.scss';
function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
            </header>
            <div className="app-body">
                <ReactStickyNotes
                    backgroundColor="#fefefe"
                    useCSS={true}
                    containerHeight={"400px"}
                />
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
