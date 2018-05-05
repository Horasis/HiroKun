// var mod = require('./Forecast/forecast');

// const obj = {a: 13, b: ()=> {}};
// const a = obj.a;
// const b = obj.b;
// const { a, b } = obj;
// spreading.

// 
const { forecastAPI } = require('./Forecast/forecast');

var axios = require('axios');
var trash = JSON.stringify({ x: 5, y: 6 });
console.log(trash);
forecastAPI()
    .then(data => {
        //a.json(data)
    })

// const data = await forecastAPI();
// ...