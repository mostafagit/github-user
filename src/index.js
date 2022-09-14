import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { MdExitToApp } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript



root.render(
  <Auth0Provider
domain="dev-d1z8cssg.us.auth0.com"
clientId="C1J1W0lR9jmSy4PuWlqTUJjVW8cdA0vY"
redirectUri={window.location.origin}
cacheLocation = "localstorage"
>
<BrowserRouter>
    <GithubProvider>
      <App />
    </GithubProvider>
  </BrowserRouter>
  </Auth0Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
