import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "font-awesome/css/font-awesome.min.css"
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import {initializeApp} from "firebase/app";
import {getDatabase, ref} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDIl33sNYA3-YQDuEAaZMmcKTL-VjLq3z8",
    authDomain: "the-raven-test.firebaseapp.com",
    databaseURL: "https://the-raven-test-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "the-raven-test",
    storageBucket: "the-raven-test.appspot.com",
    messagingSenderId: "1051252909875",
    appId: "1:1051252909875:web:919edfc8c0a327bfce8046",
    measurementId: "G-5GELMK7946"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// export const databaseRef = ref(database, "products")

// get(databaseRef).then(response => console.log(response.val()))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
