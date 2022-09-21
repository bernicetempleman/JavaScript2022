const LOOKUP = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
// store var with amnt of change due
const changeDue = cash - price;
let changeDueCents = changeDue * 100;

//sum all money in drawer
const available = cid.reduce((acc,  billType) => {
  return acc + billType[1] * 100//cents
}, 0);

if (available === changeDueCents){
  return {status: "CLOSED", change: cid};

}

const change = cid.reverse().map(([name, amount]) => {
  // loop while change due is more than value on billType and amnt is sufficient for billTYpe
  let total = 0;

  const nameValue = LOOKUP[name];
  let amountCents = amount * 100;

  while(nameValue <= changeDueCents && amountCents > 0){
    total += nameValue;
    changeDueCents -= nameValue;
    amountCents -= nameValue;
  }
  return  [name, total/100];
}).filter(([, amount])=> amount > 0 );

const changeTotal = change.reduce((acc, [, amount]) => {
  //return {status: "OPEN", change: acc + amount};
  return acc + amount;
}, 0.00)

if (changeTotal < changeDue){
  return {status: "INSUFFICIENT_FUNDS", change: []};
}

 return {status: "OPEN", change: change};

/*
if (available < changeDueCents){
  return {status: "INSUFFICIENT_FUNDS", change: []};
}
  */

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);