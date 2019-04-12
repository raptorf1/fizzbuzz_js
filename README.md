# Learning objectives from Craft Academy

* Ability to explain concepts
* Practice JS
* Combine both feature and unit test and understand their difference
* Read and understand documentation
* Debug and find errors
* Find and remove unneccesary code and files.


# Problem statement

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
Write the program using JavaScript and deploy it through GitHub pages.


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
* The `eval()` function evaluates JavaScript code represented as a string.

> Question 2: