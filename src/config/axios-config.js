import axios from 'axios';

function checkAuthTokenExclusion(arr, url) {
    return (arr.indexOf(url) != -1);
}

const defaultOptions = {
    baseURL: "http://php.demo4work.com/mts/backend_api/api/",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
};

// Create instance
var instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {

    if (!checkAuthTokenExclusion(config.url)) {
        const token = localStorage.getItem('user');
        config.headers.accessToken = token ? token : '';
        config.headers.apiId = 1;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;