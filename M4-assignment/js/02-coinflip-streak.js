let coinFlip;
let num_of_Heads=0;
do{
let randomNum1 = Math.round(Math.random())
console.log(randomNum1);

   if(randomNum1 === 0){
    coinFlip='Heads' ;
    num_of_Heads++;
    console.log(randomNum1);
    console.log(coinFlip);
    console.log(`num_of_Heads: ${num_of_Heads}`);
   }else if(randomNum1 === 1){
    coinFlip='Tails' ;
    console.log(randomNum1);
    console.log(coinFlip);
  }
}while(coinFlip !=='Tails')

console.log(`this game has been terminated`)
