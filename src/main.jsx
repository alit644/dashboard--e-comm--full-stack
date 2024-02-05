import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MenuProvidar from "./Context/Menuu";
import Window from "./Context/WindowSize.jsx";
import CurrentUser from "./Context/CurrentUser.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Window>
          <MenuProvidar>
            <CurrentUser>
              <App />
            </CurrentUser>
          </MenuProvidar>
        </Window>
      </BrowserRouter>
  </React.StrictMode>
);
