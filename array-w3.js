const cars = ["Saab", "Volvo", "BMW"];

//The array object is used to store multiple values in a single variable.

//Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.

//JAVASCRIPT ARRAY METHODS AND PROPERTIES

//concat() - Joins arrays and returns an array with the joined arrays;

const arr1 = ["Cecile", "tone"];

const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2);

console.log(children);

//Join more than two arrays;

const arr_1 = ["Cecile", "Lone"];

const arr_2 = ["Emil", "Tobias", "Linus"];

const arr_3 = ["Robin"];

const childs = arr_1.concat(arr_2, arr_3);
console.log(childs);



//The concat() method concatenates (joins) two or more arrays.
//The concat() method returns a new array, containing the joined array
//The concat() method does not change the existing arrays.

//General syntax

//arra1.concat(array2, array3,...,arrx);


//the array constructor

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.constructor;

console.log(text);

//The Constructor property returns the function that created the Array prototype
//For JavaScript arrays the constructor property returns:
//function Array() {[native code]};

//array.constructor

//function Array() {[native code]};

//JAVASCRIPT ARRAY copyWithin();

//Copy the first two array elements to the last two array elements;

const fruit = ["Banana", "Orange", "Apple", "Mango"];
 let copied = fruit.copyWithin(2,0);

 console.log(copied);


 const fru = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
 let copy = fru.copyWithin(2,0,2);

 console.log(copy);

 //The copyWithin() method copies array elements to another position in the array
 //The copyWithin() method overwrites the existing values;
 //The copyWithin method does not add items to the array;

 //array.copyWithin(target,start,end);


 let boys = ["John", "Ken", "Bante", "Arauho", "Kante"];
 let copier = boys.copyWithin(1,3,4);

 console.log(copier);

 












