function divisibleByThree(number) {
  if(number % 3 == 0) return true
}

function divisibleByFive(number) {
	if(number % 5 == 0) return true
}

var fizzBuzz = function(){
  for(var number = 1; number <= 100; number++) {
    if(divisibleByThree(number) && divisibleByFive(number) ) {
      console.log("FizzBuzz")
    } 
      else if(divisibleByThree(number) ) {
      console.log("Fizz");
    } 
      else if(divisibleByFive(number) ) {
      console.log("Buzz");
    } 
      else {
      console.log(number);
    }
  }
}

console.log(fizzBuzz());


