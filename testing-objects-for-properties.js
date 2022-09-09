function checkObj(obj, checkProp) {
  // Only change code below this line
  const hasProp = obj.hasOwnProperty(checkProp);

  if(hasProp){
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
  // Only change code above this line
}