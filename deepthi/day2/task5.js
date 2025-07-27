let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

let input;
do{
    input = prompt("Enter a number 1 and 10: ");
}while(isNaN(input) || input > 10);
console.log("You entered: " + input);

let n = 10;
let sum = 0;
for (let i = 1; i <= N; i++){
    sum += i;
}
console.log("Sum of first" + N + "natural numbers: " +sum );

let N = 10;
for (let i = 1; i <= N; i++){
    let row ="";
    for (let j = 1; j <= 10; j++){
        row += (i * j)+ "\t";
    }
    console.log(row);
}
