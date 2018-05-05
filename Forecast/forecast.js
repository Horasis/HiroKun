var axios = require('axios');

function forecastAPI() {
    return axios
        .get('https://api.darksky.net/forecast/01bba726a7bc5e033eb5da10e538f6be/37.8267,-122.4233')
        .then(response => {
            return response.data;
        });
}

module.exports = {
    forecastAPI
};

// TODO: 1. Whehre package.json? DId you do 
// npm init
// npm i axios --save

// 2. lowercase for folder names, file names
// frontend, super-test

// 3. lint - check code,
// 4. beautify - Ctrl+S (html, ts, js)
