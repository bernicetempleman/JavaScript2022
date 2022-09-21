function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line

  //loop through objects
  for (let obj of collection) {
    //if source kv pairs are presentin object collection'\
//loop through props in source, match 

//declar var dor object matching
let matching = true;
    for (let prop in source){
      // if source[prop] is not equals to obj[prop], set matching to false
      if (obj[prop] !== source[prop]){
        matching = false;
      }
    }

     //add object to arr

    if (matching){
      arr.push(obj);
    }
  }

  

 


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });