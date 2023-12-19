import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM totalmente carregado e analisado");
});
