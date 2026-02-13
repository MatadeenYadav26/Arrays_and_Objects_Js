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


// Day-2 : 

// 5: Given an array of numbers , use map() to create a new array where each number is squared: 

// let arr = [2,3,4,6,8];

// let newarr = arr.map(function(val){
//     return val*val;

// })

// console.log(newarr);

// 6: Use filter() to get only even numbers from array 

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newarr = arr.filter(function(val){
//     return val%2 === 0;
// })
// console.log(newarr);

// 7: Use reduce() to find the total salary from an array of numbers [1000,2000,3000]:

// let array = [1000,2000,3000];
// let newarray = array.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(newarray);

//  8: Create an array of names and use some() and every() to test a codition (eg:    all names longer than 3 characters.)

// let names = ["aman","naman","amay","ammmm","mannnnn"];

// let ans = names.some(function(val){
//     return val.length > 4;
// })

// console.log(ans);

// let ans = names.every(function(val){
//     return val.length > 4;
// })

// console.log(ans);

// 9: create an object user and test the behaviour of object. freeze()  and Object.seal() by adding/changing keys: 

// let user = {
//     name : "Aman",
//     age : 21,
//     email : "matadeeen@gmail.com",
// };
// //  user.age = 25;
// //  user.social = "Instagram";
// //  user.age = 22;
// //  Object.freeze(user);
// //  console.log(user);
// //  user.age = 23;
// //  console.log(user);

// user.age = 25;
// console.log(user);

// user.age = 22;
// console.log(user);
// Object.seal(user);
// user.name = "Amandeen";
// user.social = "facebook";
// user.age = 23;
// console.log(user);

// 10: create a nested object (user-> address -> city) and access the city name inside it:

// let obj = {
//     user: {
//         name : "Aman",
//             address : {
//                 city: "Surat",
//             }
//     }
// }

//  To access the citt name : 
// console.log(obj.user.address.city);
// OR
// let {city} = obj.user.address;
// console.log(city);

