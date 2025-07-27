function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 4));


const multiplyExp = function(x, y) {
    return x * y;
};
console.log(multiplyExp(3, 4));


const multiplyArrow = (x, y) => x * y;
console.log(multiplyArrow(3, 4));


const greet = name => console.log(Hello,$(name));
greet("Thiru");


const person = {
    name: "Santhiya",
    greet: function() {
        console.log("Hi, I'm " + this.name);
    },
    greetArrow: () => {
        console.log("Hi, I'm " + this.name);
    }
};

person.greet();       
person.greetArrow(); 
