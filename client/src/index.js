import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { store } from './store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor=persistStore(store)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);