//a for loop
//syntax
/*
increment for loop
for(let counter = 0; counter < array.length; counter++) {
    statements;
}

//decrement for loop
for(let counter = 10; counter > array.length; counter--) {
    //statements
}

//a for loop repeats a predefined instruction, for a specified number of times
//it is one of the most commonly used control loop
*/

let i, myarray;
myarray = ["boy","girl","cow"];

for(i = 0; i < myarray.length;i++) {
    console.log(i); //returns 0,1,2 - says array has three items
    //what if we want the values instead of their indexes
    //take array name and return the item of the index position each time
    console.log(myarray[i]); 
}

//Now instead of console, use return
let s = "/////////////////////////////////////////////////"
console.log(s);

let x, arrayy;

arrayy = ["cat","mice","dog"];

for(x = 0; x < arrayy.length;i++) {
    //return console.log(x); //returns the first index position
    return console.log(arrayy[x]); //returns the first item in the array
    //notice, return stops/breaks the loop, once the statement is returned;
    //so the loop does not continue, can we make it continue?
    //bo we can not; every other statement after return cannot be reached, it cant work;
}

//what is role of return keyword?
//I think it is useful - where a specific output is required, - and where only such output is expected and none other

//let myname = (greet) => console.log(`${greet} Martin`);

//myname("hey");

//
//cell organelle
//cell = cell organelle + cell organelle;
//tissue = cell + cell;
//organ = tissue + tissue;
//organ system = organ + organ;
//body = organ system + organ system


//2022/23/12
//for loop use cases
//1. if i want to go through a list of elements
//2. if i want to go through a list and return a specific item
//3. if i want to repeat an action a number of times - objective
//bjame stroustrap - c++ founder says - look at something and ask yourself, why as it done
//why was the for loop created?
//x=y;for x<z x++
let t = 0;
let items = [1,2,3];
if(t < items.length) {
    console.log("Kick her");
 t++;   
}