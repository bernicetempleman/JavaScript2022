function stringAlphaNum(str){
  return str.replace(/[\W_]/gi, "");
 
}


function stringLowercase(str){
  return str.toLowerCase();
}

const stringReversed = (str) => {
  let result = "";
  for (let i=str.length-1; i>= 0; i--){
    result += str[i];
  }
  return result;
}

function palindrome(str) {
  const cleanedUpStr = stringAlphaNum(str);
  const lowercaseStr = stringLowercase(cleanedUpStr);
  const reversedStr =  stringReversed(lowercaseStr);

  return lowercaseStr == reversedStr;
}

palindrome("eye");
console.log(stringAlphaNum("_eye"));
console.log(stringLowercase("eye"));
console.log(stringReversed("eye"));
console.log(palindrome("never odd or even"));