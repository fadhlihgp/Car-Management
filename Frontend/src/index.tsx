import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterApp from "./routes";
import {GoogleOAuthProvider} from "@react-oauth/google";

const valueId: string = '835537749245-m9r433pveluph35jl2erb0vbckqj2u7q.apps.googleusercontent.com'
// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <GoogleOAuthProvider clientId={valueId}>
                {/*<App />*/}
                <RouterApp />
            </GoogleOAuthProvider>
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
