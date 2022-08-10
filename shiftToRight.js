/* JavaScript:
	
The right shift operation is similar to floor division by powers of two.
Sample calculation using the right shift operator ( >> ):
80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3


Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10
shiftToRight(-24, 2) ➞ -6
shiftToRight(-5, 1) ➞ -3
shiftToRight(4666, 6) ➞ 72
shiftToRight(3777, 6) ➞ 59
shiftToRight(-512, 10) ➞ -1


Notes
There will be no negative values for the second parameter y.
This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
Alternatively, you can solve this challenge via recursion.
*/

function shiftToRight (x,y)
{
    let shifted = Math.floor(x/(2**y));
    return shifted;
}

console.log(80>>3);
console.log(shiftToRight(80, 3)); //➞ 10

console.log(-24 >> 2);
console.log(shiftToRight(-24, 2)); //➞ -6

console.log(-5 >> 1);
console.log(shiftToRight(-5, 1));//➞ -3

console.log(4666 >> 6);
console.log(shiftToRight(4666, 6));// ➞ 72

console.log(3777 >> 6);//➞ 59
console.log(shiftToRight(3777, 6));//➞ 59

console.log(-512 >> 10);//➞ -1
console.log(shiftToRight(-512, 10));//➞ -1