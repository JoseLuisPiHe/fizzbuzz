var output=[];
  var x=0;
function fizzBuzz(){
   var y=x++;
    if (y % 3 === 0 && y % 5 === 0) {
       output.push("FizzBuzz")
       console.log(output);
   } else if (y % 3 === 0) {
      output.push("Fizz")
       console.log(output);
   } else if (y % 5 === 0) {
      output.push("Buzz")
       console.log(output);
   } else {
       output.push(y)
      console.log(output);
   }
}