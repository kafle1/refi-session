//user sanga magne
import prompt  from "prompt-sync";
const input = prompt();
const bill = Number(input("What is the total amount?"));
const tip = Number(input("What percent u gib tip?"));
const finalBill = bill + ((tip/100)*bill);
console.log(finalBill);

// "what the f*ck is module"