let num = 100;                      
let str = "123";                    
let bool = false;                   
let notDefined;                   
let obj = { key: "value" };         
let sym = Symbol("id");             

console.log(typeof num);           
console.log(typeof str);           
console.log(typeof bool);          
console.log(typeof notDefined);    
console.log(typeof obj);           
console.log(typeof sym);           


console.log(Number("456"));        
console.log(String(789));          

let implicitNum = "5" * 2;         
console.log("Implicit:", implicitNum);

let backToString = 55 + "";        
console.log("To string:", backToString);
