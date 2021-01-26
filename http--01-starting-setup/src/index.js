import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(request => {
    console.log(request);

    //Edit request

    return request;
}, error => { // Works when request sending fails.
    console.log(error)
    return Promise.reject(error)
});

const responseInterceptor = axios.interceptors.response.use(request => {
    console.log(request);

    //Edit request

    return request;
}, error => { // Works when request receiving fails.
    console.log(error)
    return Promise.reject(error)
});

//axios.interceptors.request.eject(requestInterceptor);
//axios.interceptors.response.eject(responseInterceptor);

    ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
