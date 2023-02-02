// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  //     let numRegEx = /[0-9]/g;
  //    if(numbers === numRegEx){
  //     const average = numbers.reduce((a, b) => a + b) / numbers.length;
  //     return average;

  let numRegEx = numbers.filter((value) => typeof value === "number");
  let average = numRegEx.reduce((acc, n) => acc + n);
  return average / numRegEx.length;
}

module.exports = average;

// return numbers from an array of numbers and strings
