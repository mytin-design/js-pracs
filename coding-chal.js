//Code a function that takes an array of numbers as a paramter and returns the average of them as the result

function average(arraye) {
    return (arraye[0] + arraye[1] + arraye[2] + arraye[3]) / arraye.length;
}


console.log(average([10, 22,3,5]));

//code a function that returns true if the array parameter contains the number parameter
//and otherwise returns false;

const sep = "///////////////////";
console.log(sep);

function contains(array, number) {
   if(array[0] === number || array[1] === number || array[2] === number || array[3] === number) {
       return true;
   }
   return false;
}

console.log(contains([23, 34,45,56], 32));



/*

//This does not work - ammend if possible;

function contains(array, number) {
    for(i = 0; i < array.length; i++) {
        return array[i];
    }
}


console.log(contains([23,45,56,76], 23));
*/


//Code a function that returns the first and last elements of its array parameter in a new array

function firstLast(array) {
    var first = array[0];
    var last = array.pop();
    var newArray = [];
    newArray.push(first, last);
    
    return newArray;
}

console.log(firstLast([2,3,4,5,6,7]));




//Code a function that takes an array of numbers and returns the difference between the biggest and the smallest number as a result

//Main challenge - how do we find the biggest and the smallest number
//we need to find the numbers and store them in a variable;



function differenceMinMax(array) {
    var big = Math.max.apply(null, array);

    //the Math.max() function is used to find the largest number in an array of numbers set in the parenthesis;
    //Such as Math.max(1,2,3,4,5);
    //However, if you want to pass an array through the arguments, and as a parameter, then we have to modify the function to
    //Math.max.apply(null,myArray);
    
    var small = Math.min.apply(null, array);
    //The same case applies for the smallest number;
    var diff = big - small;

    return diff;
}

console.log(differenceMinMax([2,3,4,5,6,7]));


//Code a function that returns the sum of the numbers that make up the parameter.
//for example, if 3 is the argument, the return value should be 6 as 1 + 2 + 3= 6;
//we must know how to disintegrate the parameter into its component parts;


function totalSum(number) {
    var total = 0;
    for (i = 0; i <= number; i++) {
        total +=i;
    }
    return total;
}

console.log(totalSum(5));

//Code a function that returns the smallest number from the array parameter as a result

function smallest(array) {
    var small = Math.min.apply(null, array);
    return small;
}

console.log(smallest([1,2,3,4,5,6]));

console.log(sep);

//Code a function that reverses the contents of the array parameter and returns it as a new array
var n = 8;

for(i = 0; i < n; i++) {
    //so everytime i is less than n, the loop runs, and i adds 1;
    console.log(i);
}


console.log(sep);

var n = 0;
for (i = 9; i > n; i--) {
    //Everytime i is greater than n, i is subtracted by one;
    console.log(i);
}

console.log(sep);

function reverse(array) {
    var reversed = [];
    for(var i = array.length - 1; i > -1; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

console.log(reverse([1,2,3,4,5]));


//Practice on for loops 
//decrement and increment
var x = 0;
for (var i = 4; i > x; i--) {
    console.log(i);
}


var y = 34;

for (var i = 0; i < y; i++) {
    console.log(i);
}
console.log(sep);


//finding the biggest number in an array;

var array = [3,5,6,77,89];

function big() {
    let bigger = Math.max.apply(null,array);
    return bigger;
}

console.log(big()); //returns 89;

console.log(sep);

//Find the average of an array

function av(marks) {
    return (marks[0] + marks[1] + marks[2]) / marks.length;
}

console.log(av([45,56,67]));


//

//Find the smallest -

function smaller() {
    var small = Math.min(2,4,6,88,99,3,2.4,-1);    
    return small;
}

console.log(smaller());


//Reverse the array
//I dont know how this works - it just works; or I have memorized the format

function rev(names) {

    let namesRev = [];
    for(var i = names.length - 1; i > - 1; i--) {
        namesRev.push(names[i]);
    }
    return namesRev;
}

console.log(rev(["alpha", "bento", "cessi", "dental", "killer", "mother"]));














