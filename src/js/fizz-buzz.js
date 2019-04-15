function FizzBuzz() {
    this.check = (number) => {
        if (Number(number) == 0){
            return "Please type in a valid number";
        }
        else if (number % 5 === 0 && number % 3 === 0){
            return "FizzBuzz";
        }
        else if (number % 5 === 0){
            return "Buzz";
        }
        else if (number % 3 === 0) {
            return "Fizz";
        }
        else {
            return number;
            }
        }
}

function reload() {
    window.location.reload(true)
}

 function calculate () {
     let displayDiv = document.getElementById("display_answer");
     let value = document.getElementById("value").value;
     let fizzBuzz = new FizzBuzz;
     let result = fizzBuzz.check(value);
     displayDiv.innerHTML = result;
}
