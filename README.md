# Learning objectives from Craft Academy

* Ability to explain concepts
* Practice JS
* Combine both feature and unit test and understand their difference
* Read and understand documentation
* Debug and find errors
* Find and remove unneccesary code and files.


# Problem statement

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both 3 & 5 print “FizzBuzz”. Write the program using JavaScript and deploy it through GitHub pages.


# Project deployment

The project is deployed using GitHub pages. You can visit the website by clicking [here]().

# Prerequisites for testing

You will need `Node.js` and `npm` installed on your system. You can find instructions on how to do so [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).


# Installing Requirements for Testing

**Make sure you are in the project folder.**

Run in your Terminal:
* `npm init` to initialize npm and download the latest versions of all dependencies
* `npm i e2e_training_wheels --save-dev` to download the testing package
* `node ./node_modules/e2e_training_wheels/dist/install.js` to auto configure the testing package
* `npm link` to bundle everything together

# Running the tests

* The command `npm run features` will start a local webserver, launch Chrome and run your acceptance tests.
* The command `npm run specs` will run your unit tests.
* If you execute `npm test` in your terminal, both your acceptance tests and unit tests will be run.

# Built with

* HTML
* CSS
* JavaScript

# Tested with

* [npm](https://www.npmjs.com/) - 
Build amazing things
* [e2e-Training-Wheels](https://www.npmjs.com/package/e2e_training_wheels) - End-To-End Testing

# Authors

* **George Tomaras** - [raptorf1](https://github.com/raptorf1)


# License

This project utilizes the [MIT](https://opensource.org/licenses/MIT) open-source license.

# Acknowledgments

* Kudos to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template
* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) - A utility-first CSS framework for rapidly building custom user interfaces

# Craft Academy Questions

> <u> Question 1: To the best of your knowledge, please explain what the following lines of code do.</u>

``` javascript
const fs = require('fs');
let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
* The fs module of Node.js provides useful functions to interact with the file system. There is no need to install it. Being part of the Node core, it can be used by requiring it. And we do that with the `const fs` line.
* After requiring the fs module we can call on its functions. One of these is `.readFileSync` function which reads the content of a file. In our case the file that will host the JavaScript code of our FizzBuzz challenge.
* The `eval()` function evaluates JavaScript code represented as a string. At least that's what the Mozilla site says. As to why do we need it here, I am anaware to be honest.

> <u> Question 2: To the best of your knowledge please explain why we are placing the `let fizzBuzz = new FizzBuzz` outside the it block?</u>

* This line of code creates a new `FizzBuzz` object. Probably, the way we will implement the code further down, will create a new instance of the object (`fizzBuzz`), every time the user types in a number. For testng purposes ne need it present before each test, until we implement it in the JavaScript file.
* Of course after 10 minutes of error messages, I found out that we must declare it in each test. So maybe we do not need it at all outside the `it` block? Cause tests are passing (at this stage) even without the whole `describe` block.

> <u> Question 3: To the best of your knowledge please explain the difference between using `===` and `==` in JavaScript.</u>

* The difference between `==` and `===` operators, is that `==` compares operands by making type correction, whereas `===` not only checks the value, but also `typeof` of the two operands. If two operands are not of the same type, `===` returns false, while `==` returns true.

* Examples:
1. 2 == "2"  -> true, auto type coercion, string converted into number
2. 2 === "2"  -> false, since both operands are not of same type

* In our case, it's also a good way to implement a sad path in our code. That way, if the user input is anything else BUT a number, the function will return an error message.

> <u> Question 4: To the best of your knowledge, please explain why we are moving (number % 5 === 0) to the top?</u>

* Because the function runs the code from top to bottom and from left to right. This means that if the `number % 3 === 0` statement was first and the input was 15, the output would be "Fizz" cause 15 % 3 also equals 0. And we do not want that, cause it breaks the rules of the challenge. So we first check `number % 5 === 0 && number % 3 === 0` and then `number % 5 === 0` and last `number % 3 === 0`. That way, we get the desired output.

> <u> Question 5: To the best of your knowledge please explain the difference between feature and unit test.</u>

* Unit testing only checks a single component of the system. In our case, it checks that the FizzBuzz function produces the desired output in a console environment.
* Feature testing checks if an application is working as a whole, as described in the system requirement specifications. In our case, since we want to make a website that any user can visit we must check that there is an input field, an output field to diplay the result, etc.

> <u> Question 6: To the best of your knowledge, please explain what this following code does.</u>
```javascript
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
* Open up the Chromium browser and visit the server's root path.
* Reload the page before each test.
* Browser closes after the test is finished.

> <u>Question 7: To the best of your knowledge, please explain what the expectations in the context of testing are.</u>
```javascript
it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with:  "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
})
```
* When the browser opens, it will scan the page for a <i>Check</i> button.
* The browser will fill in number 3 to an input filed with id <i>value</i>.
* The browser will click the <i>check</i> button that has an attribute value of <i>Check</i>.
* The browser will scan the page for an element with id attribute <i>dislpay_answer</i> and that element must display the word <i>Fizz</i>.

> <u>Question 8: To the best of your knowledge, please write a line to line explanation of what is happening in the code below.</u>
```javascript
<script src="./js/fizz-buzz.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```
* We are loading the fizz-buzz.js file so that we can be able to run the number calculations.
* We are listening to the whole DOM as soon as it loads.
* We are assigning the variable <i>button</i> to the element that has the same id attribute. That is what the user clicks on to see the result of the number he inputed.
* We are assigning the variable <i>displayDiv</i> to the empty div element we have in our index.html file with the same id and which houses the result of the user input.
* We listen for the element with id <i>button</i> and when the user clicks on it the following things happen:
1. We get the user input (the value) from the element with id <i>value</i>. We assign a variable to that for easier use further down.
2. We create a new fizzBuzz object/function from the FizzBuzz class.
3. We run the function with arrgument the value from step 1. We assign another variable to that called <i>result</i>.
4. We populate the empty so far div element, with the result from step 3.

> <u> Question 9: To the best of your knowledge, please explain what a CDN (Content Delivery Network) is.</u>

A content delivery network (CDN) is a system of distributed servers (network) that deliver pages and other Web content to a user, based on the geographic locations of the user, the origin of the webpage and the content delivery server.
In plain English, it's what Tailwind does. It gives you access to styling attributes and all you have to do is put a simple link in the head of your index.html file and a coded class name to the elements you want to style.

123