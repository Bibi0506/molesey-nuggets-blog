import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./src/App.jsx"
import Greeting from "./Greeting.jsx";
import "./src/index.css" 

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Greeting />
    </StrictMode>
);