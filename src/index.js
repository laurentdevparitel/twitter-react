import React from 'react';
import ReactDOM from 'react-dom';

// -- Redux
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store/store'

// -- Bootstrap
import BootstrapProvider from '@bootstrap-styled/provider';

import './styles/index.css';

import App from './App';
//import reportWebVitals from './reportWebVitals';

const myTheme = {
    //'$btn-primary-bg': 'blue',
    //'$btn-primary-color': 'white',
};

// Redux Store Log
window.store = store;

// NB: Get store state :
//store.getState()

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BootstrapProvider theme={myTheme}>
                {/*<React.StrictMode>*/}
                <App/>
                {/*</React.StrictMode>*/}
            </BootstrapProvider>
        </PersistGate>
    </Provider>,
    rootElement
);

//console.log('ENV', process.env);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
