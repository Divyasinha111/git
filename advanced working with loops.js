//1. for loop

/*for(let i=0;i<5;i++){
    console.log(i);

}*/


//2. while loop / entry control loop

/*let count=0;
while(count<5){
    console.log(count);
    count++;
}*/


//3. do while loop / exit control loop

/*let count=0;
do{
    console.log(count);
    count++;
    
}
while(count < 5);*/



//4. for...in loop: iterates over the properties of an object.

/*let person = { name: "john",age: 30, occupation: "Developer"};
for(let Key in person){
    console.log(Key+":"+person[Key]);
}*/

//5. How to define objects?
//object literal notation (it is an anonomus function)

/*let car={
    make: "Toyota",
    model: "Camry",
    year:2022,
    isElectric: false,
    start: function(){
        console.log("Engine started!");
        
    }
};
console.log(car.make);
        console.log(car.year);
        car.start();*/



//6. object constructor
// object  constructor function

/*function Book(title,author,year){
this.title=title;
this.author=author;
this.year=year;
}
// creating instances of the object
let book1= new Book ("The Catcher in the Rye", "J.D. Salinger", 1951);
let book2= new Book ("To Kill a Mockingbird", "Harpeer Lee", 1960);*/

//7. Working with Arrays:
//Creating an array

/*let fruits=["apple", "banana", "orange","grape"];
//Accessing elements
console.log(fruits[0]);//output apple
console.log(fruits[2]);//output orange
//Adding elements to the end
fruits.push("Kiwi");
console.log(fruits);
//Adding elemets to the beginning
fruits.unshift("mango");
console.log(fruits);
//Removing the last element
let removedLast = fruits.pop();
// Removing the first element
let removedFirst = fruits.shift();
//Finding index of an element
let indexOfOrange = fruits.indexOf("orange");
//Iterating using a for loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);

}
// Slicing an array
let citrus = fruits.slice(1,3);
console.log(citrus);
//Splicing an array(modifying original array)
let removed=fruits.splice(1,2,"pear", "melon");
//Concatenating arrays
let moreFruits = ["grapefruit", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits)*/

//8. Function Expresion

/*const multiply = function (a,b){
    return a*b;

};
//Invocation
const product = multiply(4,6);
console.log('Function Expression - Product:',  product);*/
//normal function is hoisted but not this function .(hoisting is happing but it is not beacause of const keyword.)

//9.Arrow Function 

const subtract = (a,b) => a-b;
//Invocationconst difference=subtract(8,3);
console.log('Arrow Function - Difference:', difference);
//how to do code shorter with the help of arrow function. 













