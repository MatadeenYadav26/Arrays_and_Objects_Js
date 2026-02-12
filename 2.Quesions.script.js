// 1: Write a higher order function runTwice(fn) that takes another function and executes it two Times:

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function(){
//     console.log("Hello");
// });

// 2: Create one pure function that always returns the same output for given input, and one impure function using a global variable: 

// pure : ek fnc jo ki same argument milne pe same answer de and koi side effect na kare

// function pure(a,b){
//     console.log(a+b);
// }
// pure(1,2)
// pure(1,2)

// global = 0;
// function impure (a){
//     global++;
//     console.log(a+global);
// }

// impure(2)
// impure(2)
// impure(2)
// impure(2)


// 3: Write a function that uses object destructing inside parameters to extract and print name and age:

// function abcd(obj){
//     console.log(obj);
//     console.log(obj.Name);
//     console.log(obj.Age);
// }

// abcd({Name:"Aman",Age:21})

// M2:

// function abcd({name,age}){
//     console.log(name,age)
// }

// abcd({name:"Aman",age:21})

//4: Demonstrate the diffrence between normal function and arrow function when used as object methods:

// let obj = {
//     name : "Aman",
//     fnc : function(){
//         console.log(this);
//     },
//     fnc2 :() => {
//         console.log(this);
//     }
// };
// obj.fnc();
// obj.fnc2();

// let obj = {
//     name : "Aman",
//     fnc : function(){
//         let fnc2 = ()=>{
//             console.log(this);
//         }
//         fnc2();
//     }
// };
// this gives o/p as object bcoz here parent of this keyword is a function not a Object , so it dont gives a window as output , instead gives an Object.
    
// obj.fnc();

// let obj = {
//     name : "Aman",
//     fnc : function(){
//         function fnc2() {
//             console.log(this);
//         }
//         fnc2();
//     }
// };

// obj.fnc();

// Gives window as an output , normal-function inside an object case.

// isiliye humesha if , kisi object k andar agar function banaoge , make arrow functon , so that aapke this ki value hold rahe naaki , window ho jaye.
