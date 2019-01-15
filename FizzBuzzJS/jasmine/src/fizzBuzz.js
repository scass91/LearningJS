function fizzBuzz(number) {
if(number % 3 === 0) {
  return "fizz"
} else {
  return number
}
}

for(i=1;i<101;i++) {
console.log(fizzBuzz(i))
}
