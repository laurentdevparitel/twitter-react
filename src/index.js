import React from 'react';
import ReactDOM from 'react-dom';

import BootstrapProvider from '@bootstrap-styled/provider';

import './styles/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const myTheme = {
    //'$btn-primary-bg': 'blue',
    //'$btn-primary-color': 'white',
};

ReactDOM.render(
    <BootstrapProvider theme={myTheme}>
        {/*<React.StrictMode>*/}
            <App/>
        {/*</React.StrictMode>*/}
    </BootstrapProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
