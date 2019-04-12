const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require("fs");
let fizzBuzz = fs.readFileSync("./src/js/fizz-buzz.js");
eval(fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
