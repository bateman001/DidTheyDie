import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Searched } from "./context/SearchedContext";

ReactDOM.render(
    <React.StrictMode>
        <Searched>
            <App />
        </Searched>
    </React.StrictMode>,
    document.getElementById("root")
);
