let coinFlip;
let n = parseInt(prompt('How many times do you want to flip the coin??'));
if(!isNaN(n)){
for (let i = 0; i < n; i++) {
    let randomNum1 = Math.round(Math.random())
    console.log(randomNum1);

    if (randomNum1 === 0) {
        coinFlip = 'Heads';
        console.log(`${coinFlip}`);
    } else if (randomNum1 === 1) {
        coinFlip = 'tails';
        console.log(`${coinFlip}`);
    }
 } }else{
    console.log(`Invalid input. Please enter a valid number of flips.`)
 }



