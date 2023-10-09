let num = parseInt(prompt("Enter a number to count from:"));
if (!isNaN(num)) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
}
else {
    console.log('Invalid input. Please enter a valid numer')
}