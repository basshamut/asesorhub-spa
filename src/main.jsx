import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-7z72cbvm1xnup3l1.us.auth0.com"
            clientId="3DKXwrVw7p9o1k5UffvnCEWlWxwKXd5K"
            authorizationParams={{
                redirect_uri: window.location.origin + "/asesorhub/dashboard",
                audience: "http://localhost:8080/api/"
            }}
            cacheLocation="localstorage">
            <App/>
        </Auth0Provider>
    </React.StrictMode>
);

