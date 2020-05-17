# tempconv
Simple temperature unit converter. Converts between °C, °F and K easily.


### Installation
``npm i tempconv``


### Usage
```js
const { Convert } = require('../lib/index.js');
console.log(Convert({ from: 'C', to: 'F', value: 1 }); // Returns 33.8.
```


### Parameters
``from`` - Unit to convert from, see units below. No default value.
``to`` - Unit to convert to, see units below. No default value.
``value`` - What numeric value to convert. No default value.
``float`` - How many decimals to output in end result. Defailt is 1.


### Units
°C, C, °F, F, K, Celsius, Fahrenheit, Kelvin

**NOTE:** The units are not case sensitive.
