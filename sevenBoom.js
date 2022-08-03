/*Seven Boom!
Create a function that takes an array of numbers and returns "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples
<code>sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array" // None of the items contain 7 within them.
sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.</code
*/

function sevenBoom (boomArray){
    let boomString = boomArray.toString();

    if(boomString.includes(7)){
        return 'Boom!';
    } else{
        return 'there is no 7 in the array.';
    }
}


let boom = [1, 2, 3, 4, 5, 6, 7];
console.log(sevenBoom(boom));

boom = [8, 6, 33, 100];
console.log(sevenBoom(boom));

boom = [2, 55, 60, 97, 86];
console.log(sevenBoom(boom));
