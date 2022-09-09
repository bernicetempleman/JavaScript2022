// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  let results ={
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot":"Frank"
  }
  
  // Only change code above this line
   result = results[val];
  return result;
}

phoneticLookup("charlie");