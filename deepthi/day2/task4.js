let a = 10;
let b = 3;

console.log("Arithmetic Operators:");
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);
console.log("------------");

console.log("Assignment Operators:");
let x = 5;
x += 2;
console.log("x += 2:", x);
x -= 1;
console.log("x -= 1:", x);
x *= 2;
console.log("x *= 2:", x);
x /= 3;
console.log("x /= 3:", x);
x %= 2;
console.log("x %= 2:", x);
console.log("------------");


console.log("Relational Operators:");
console.log("Equal (==):", a == b);
console.log("Strict Equal (===):", a === b);
console.log("Not Equal (!=):", a != b);
console.log("Strict Not Equal (!==):", a !== b);
console.log("Greater Than (>):", a > b);
console.log("Less Than (<):", a < b);
console.log("Greater Than or Equal (>=):", a >= b);
console.log("Less Than or Equal (<=):", a <= b);
console.log("------------");


console.log("Logical Operators:");
console.log("AND (&&):", a > 5 && b < 5);
console.log("OR (||):", a > 10 || b < 5);
console.log("NOT (!):", !(a < b));
console.log("------------");


console.log("Conditional (Ternary) Operator:");
let result = a > b ? "a is greater" : "b is greater or equal";
console.log("Result:", result);
console.log("------------");

console.log("Bitwise Operators:");
console.log("AND (&):", a & b);
console.log("OR (|):", a | b);
console.log("XOR (^):", a ^ b);
console.log("NOT (~a):", ~a);
console.log("Left Shift (a << 1):", a << 1);
console.log("Right Shift (a >> 1):", a >> 1);
console.log("------------");


console.log("Increment and Decrement Operators:");
let y = 7;
console.log("Initial y:", y);
console.log("Post-increment (y++):", y++);
console.log("After post-increment:", y);
console.log("Pre-increment (++y):", ++y);
console.log("Post-decrement (y--):", y--);
console.log("After post-decrement:", y);
console.log("Pre-decrement (--y):", --y);
