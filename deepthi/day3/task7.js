function greet(name, age) {
    console.log(Hello (name), your (age));
}
greet("Madhumitha", 18);


function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("Sum:", total);
}
sumAll(1, 2, 3, 4, 5);


function showArguments() {S
    for (let i = 0; i < arguments.length; i++) {
        console.log(Argument (i + 1), arguments[i]);
    }
}
showArguments("apple", "banana", "cherry");
