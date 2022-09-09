// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const myArray = countdown( n-1);
    myArray.unshift(n);
    return myArray;
  }
  
}
console.log(countdown(10));
// Only change code above this line