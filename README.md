# Learning objectives from Craft Academy

* Ability to explain concepts
* Practice JS
* Combine both feature and unit test and understand their difference
* Read and understand documentation
* Debug and find errors
* Find and remove unneccesary code and files.


# Problem statement

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of fifteen print “FizzBuzz”. Write the program using JavaScript and deploy it through GitHub pages.


# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on your Interactive Ruby Shell (IRB) system.

# Prerequisites

* You will need Ruby installed on your system.
* You will need Bundler installed on your system.
* You will need IRB installed on your system.


# Installing

Make sure you are in the project folder.

Run IRB in your Terminal:

`irb`
 

Load the visitor.rb file or library.rb file depending on what type of access you want to have.

`load './lib/visitor.rb'`

`load './lib/library.rb'`

You are good to go!

# Running the tests

After you fork the repository, run `bundle install` in your Terminal and make sure you are in the project folder. That should install RSPEC on your computer.

Then, from your Terminal go to the project folder and run `rspec`.

# Deployment
#### FROM THE VISITOR'S POINT OF VIEW

To create a library visitor, run

```
visitor = Visitor.new("name")
```

To view the list of books library has, run
```
visitor.view_books
```
To search a book by title, run
```
visitor.search_by_title("Book title or a part of it")
```

To search a book by author, run
```
visitor.search_by_author("Author's name and/or surname")
```

To checkout the book, run
```
visitor.checkout_book(book index number)
```
To see if you are currently borrowing any books, run

```
visitor.my_books
```

#### FROM THE LIBRARY'S POINT OF VIEW

To initialize a library run

```
library = Library.new
```

To search a book by title, run
```
library.search_by_title("Book title or a part of it")
```

To search a book by author, run
```
library.search_by_author("Author's name and/or surname")
```

To checkout the book, run
```
library.checkout_book(book index number, visitor's name)
```
To add a new book to your database, run
```
library.add_new_book(title, author)
```

To return a book, run
```
library.return_book(book index number)
```

# Built with

[Ruby](https://www.ruby-lang.org/en/) - The worlds best programming language.

# Tested with

[RSPEC](http://rspec.info) - Making TDD Productive and Fun.


# Authors

* **George Tomaras** - [raptorf1](https://github.com/raptorf1)


# License

This project utilizes the MIT open-source license. https://opensource.org/licenses/MIT

# Acknowledgments

Kudos to [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the README template 

# Craft Academy Questions

> Question 1: To the best of your knowledge, please explain what the following lines of code do:

``` javascript
const fs = require('fs');
let fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
* The fs module of Node.js provides useful functions to interact with the file system. There is no need to install it. Being part of the Node core, it can be used by requiring it. And we do that with the `const fs` line.
* After requiring the fs module we can call on its functions. One of these is `.readFileSync` function which reads the content of a file. In our case the file that will host the JavaScript code of our FizzBuzz challenge.
* The `eval()` function evaluates JavaScript code represented as a string. At least that's what the Mozilla site says. As to why do we need it here, I am anaware to be honest.

> Question 2: To the best of your knowledge please explain why we are placing the `let fizzBuzz = new FizzBuzz` outside the it block?

* This line of code creates a new `FizzBuzz` object. Probably, the way we will implement the code further down, will create a new instance of the object (`fizzBuzz`), every time the user types in a number. For testng purposes ne need it present before each test, until we implement it in the JavaScript file.
* Of course after 10 minutes of error messages, I found out that we must declare it in each test. So maybe we do not need it at all outside the `it` block? Cause tests are passing (at this stage) even without the whole `describe` block.

> Question 3: To the best of your knowledge please explain the difference between using `===` and `==` in JavaScript.

* The difference between `==` and `===` operators, is that `==` compares operands by making type correction, whereas `===` not only checks the value, but also `typeof` of the two operands. If two operands are not of the same type, `===` returns false, while `==` returns true.

* Examples:
1. 2 == "2"  -> true, auto type coercion, string converted into number
2. 2 === "2"  -> false, since both operands are not of same type

* In our case, it's also a good way to implement a sad path in our code. That way, if the user input is anything else BUT a number, the function will return an error message.

> Question 4: To the best of your knowledge, please explain why we are moving (number % 5 === 0) to the top?

* Because the function runs the code from top to bottom and from left to right. This means that if the `number % 3 === 0` statement was first and the input was 15, the output would be "Fizz" cause 15 % 3 also equals 0. And we do not want that, cause it breaks the rules of the challenge. So we first check `number % 15 === 0` and then `number % 5 === 0` and last `number % 3 === 0`. That way, we get the desired output.

> Question 5: 

