//Variables
//Variable -keywords
//Data types
//Data types stored or outputed by variables;
//OPERATORS
//Self assigning variables - Assignment
//Using variables as values;
//ARRAYS
//Functions
//Objects
//LOOPS 
//while loops









//Variables
//What is a variable?

//A variable is a storage location for data
//for example:

//var person = "Denis";

//In the above declaration, we have a var keyword, a custom identifier - person,  an assignment operator, and a string - "Denis";

// keyword var allows global assignment, is mutable and accessible throughout the code base, it is a global variable
//Others that can be used are the let and the const keywords

//let person = "Denis";


//USING CAMEL CASE TO DEFINE CUSTOM IDENTIFIERS
//camel case - lowercaseUppercase

var thisPerson = "this";

const person = "Denis";


console.log(person);// I we run this, we get a syntaxError: Identifier 'person' has already been declared;

//We cannot redeclare an identifier twice, especially with const or let keywords;

//However we can redeclare variables declared using the var keyword; as they are mutable
//Variables declared using const and let keywords are immutable - that is they cannot be changed once declared;

//an example of redeclaring variables using the var keyword;

var boy = "Boy";

var boy = "Boyie";

console.log(boy);

//Notice that the variable takes up the redeclared variable;

//Unlike using const and let; 
 const boyie = "Denis";
 //const boyie = "Her";

 console.log(boyie);
 //A syntaxError; identifier boyie has already been declared, is outputed;

 //Same case to the let keyword;

 let girl = "Girl";
 //let girl = "Girlsss";

 console.log(girl);

 //A syntaxError; girl identifier has already been declared.



//DATA TYPES
//What are they?

//They define data values for js use;

//examples - booleans - define a state that is either true or false; [true, false]; 

var boolea = true;
var boolea = false;

//Strings - A string is any value stored between quotes;

var stringer = "stringed";
var stringer = "stri";
var numString = "45";

//Number - A number is any value that is divisible by another number - an arithmetic value used to represent quantity

var num = 45;
var num = 56;

var add = 45 + 56;

//Undefined - 
//Nul
//NaN - Not a number
//Arrays




//VARIABLES CAN STORE NUMBERS, STRINGS, BOOLEANS or any othe value

const number = 45;

console.log(number); //expected output is 45, a number

const string = "Boy";

console.log(string);

const boo = true;

const booly = false;

console.log(booly);


//WE CAN STORE MORE VALUES IN VARIABLES IN ARRAYS

//Eg 

const array = [56, 67, 78, 23, 12, 45];

//We can have as many numbers as possible stored in a a variable in an array

//an array of strings
const array1 = ["Denis", "Chris", "Eliza", "Winnie"];

//An array of boolys

const array2 = [true, false, false, true];


//An array of arrays

const array4 = [["Names", "Denis", "Eliza"], ["numbers", 34, 64, 56], ["arrays", [1], [2], [3]]];

//We can have a combination of all types of values or data types
const array3 = ["Denis", 56, 67, [67, 34], true];



//OPERATORS

//Addition, Subtraction, Division. modulus, floating numbers (decimal points), concatenation,

//ADDITION
//We can add numbers, strings

//Adding numbers

//Addition is done using the + operator - the addiition operator;

//NOTE: For every calculation, the operation occurs on the right then the result is assigned to the left and thus outputed if defined
var add = 45 + 45;
console.log(add);

//Adding strings
//Adding strings is also called concatenation

var addString = "Book " + "smart" + ".";

//While adding strings, remember to add spaces between, as they are not added automatically
console.log(addString);

//Adding numbers and strings

var numString = 45 + "45";

console.log(numString);







//SUBTRACTION
//Subtraction - difference;

//Number difference

var numDiff = 45 - 34;
console.log(numDiff);

//We cannot only find the difference of numbers



//MULTIPLICATION
//We can only multiply numbers
//Multiplication uses the asterik operator - * 

var numMultiply = 45 * 103;

console.log(numMultiply);


//DIVISION
//Division uses the forward slash - / 
//We can only divide numbers

var numDiv = 4 / 5;

console.log(numDiv);


//USING FLOATING NUMBERS
//Floating numbers are decimal numbers

var floatNum = 3.142;

//We can add, divide, or multiply floating numbers


var addFloat = 4.5667 + 243.5444447;

var divideFloat = 234.535 / 23.312;

var multiFloat = 23.543 * 13.21;

var diffFloat = 323.342 - 3.234;



//MODULUS
//The modulus operator defines whether a number is divisible by 2, and returns the remainder

var remainder = 5 % 3; //the remainder is 2

var rem = 24 % 2; //No return expected;

console.log("Modulus");

console.log(remainder);



//SELF ASSIGNING VARIABLES

//Self assigning refers to giving the initial variable a second value, thus changing its state or value

//Example:

var self = "Boy";
self = "Girl";

//Notice that the value of the self variable changes to girl, from the string boy


console.log(self);

//Notice that self assigning is made using the self-assignment operator;

//Also, means addind another value to the original value in  the initial variable;

var selfie = 2;
selfie = selfie + selfie;

console.log(selfie); //expected output ; 4; selfie is 2, then we add 2, which results to 4;


//To shorten the assignment; we can use the addition assignment complimentary operator;

var bought = 4;
bought += bought;
bought += 3;

console.log("Bought: " + bought);

//Note you can only use the self assignment capabilities using the var keyword;

/*

const likes = 1;
likes += 3;

console.log("Likes " + likes);
*/

//Expected output - typeError: Assignment to constant variable;

//Assignment capabilities are important for values that increment or decrement;
//Such as number of likes after each click, or number of items added into a cart in an e-commerce website


var love = 3;
love -= 4;

console.log("Love: " + love);

//Expected output is -1;; 
//The love identifier origianal value is 3, after assignment and decrement by 4, becomes 4



//USING VARIBALES AS VALUES


//We can store the values we need in variables and then use the variables instead

var username = "Denis";
var itemsBought = 5;
var password = 1234;

var amount = 2000;
var amountPerItem = 400;

//We can use varibales to calculate the amount to pay

var amounttoPay = amountPerItem * itemsBought;

console.log(amounttoPay);

//To get the users balance;

var userBalance = amount - amounttoPay;

console.log(userBalance);

//So that, we can display the user's name, items bought and balance;

console.log("Hi, " + username + ". Your balance is Ksh:" + userBalance );





//ARRAYS

//Arrays are basically grouoed data - 
//An array may contain numbers, strings, booleans, or any other data type;

var arr = [];

//The above is an empty array;

var arr = [45];

//An array with a number;

var arr = ["Hey"];

//An array with a string;

var arr = [45.231];

//An array with a floating number

var arr = [true, false];

//An array with booleans


var arr = [[1], ["string"], [username], [true]];

//An array with a number of data types;


//ACCESSING DATA IN ARRAYS

//Values in an array are positioned using an indexing algorithm;
//Such that the first digit is 0 and the last nth ;

//To access the values;we use the identifier's name, the index position of the value we need, in square brackets
//array[3];

var arrayValue = arr[3];

//Expected output - true;

//We can also add values into an array using the .push() 

var newArray = [];

//We can any data type;
newArray.push(67, 56,77,8888);

console.log(newArray);

newArray.push("Hey", "You", [34,455,66, "3221"]);

console.log(newArray);



//REMOVING VALUES FROM AN ARRAY using the .pop()

var remover = ["rental", "apartment", "home", 546,545.54,53,["names", "456"] ];

//.pop() removes and returns the removed value;

var removed = remover.pop(remover[7]);

console.log(removed);

//RELEARN HOW TO ACCESS VALUES INSIDE ARRAYS IN AN ARRAY - MULTI-DIMENSIONAL ARRAYS


//EXAMPLES of multi-dimensional arrays;

var m_arr = ["this", ["names", "denis", "king", "muthee", ["personal-info", 26, 00100, "Mother"]] ];

//The array has several arrays;
//How do we access the arrays in the array?


console.log(m_arr[1][2]);  //Outputs King


//REMOVING the first item of an array using the .shift() method;
//The .shift removes the first value in an array and returns it
console.log(m_arr.shift());

//Adding a new value at the start of the array using the .unshift() method and returning the new length of the array;

var unshift = ["hey", "you", "pow"];
var unshifted = unshift.unshift(2300000);

console.log(unshifted);

//There are so many methods that increase the usability of arrays, this is just basic understanind



//FUNCTIONS
//Functions are grouped pieces of related code. Usually code that performs the same function

//The basic structure of a function includes several pieces - 
//function keyword
//function name - custom - camelCase
// parenthesis - usually to hold parameters
//curly braces - holds code statements to be executed;

//function callback

function functionName() {
    console.log("This is a function");
}

//We need to call the function - else the code block will not be executed

functionName();

//a higher level function with parameters and arguments
//Parameters - are passed to the function name' parenthesis
//Arguments are passed into the function callback

//You can add as many parameters or arguments as possible, as far as you separate them using a comma

function funName(a,b) {
    console.log(a + b);
}
funName(3,5);

//Notice: 3 + 5 is 8;

// to perform the same operation, in a longer version

var a = 4;

var b = 5;

var result = a + b;

console.log(result);

//The same adds our values, only that this process is longer
//Hence the use of functions


//Passing strings to the function

function fName(param1, param2) {//The parameters have no meaning at this point;
    console.log(param1 + " " + param2); //The parameters get meaning at this point; Output
}

fName("Denis", "King");//Input

//Functions can be used to perform specific operations
//for example; check a user's username if it is correct
//Function names are verbs, doing words that describe what the function does

function checkName(userName) {
    if (userName === "Denis King") {
        console.log("Enter Password...");
    } else {
        console.log("Re-enter username");
    }

}

checkName("Denis Muthee");

//The function checks whether the username is similar to "Denis King";
//if true, user gets a message - "Enter password..."
//If false - user gets a message - "Re-enter username";

//Notice that the input is passed through the arguments
//Code is processed in the function and output produced 


//With the use of various js items - such as loops, if statements, objects etc

//We wiil use several items in the function 
//We use an item based on what we need to achieve

function repeatList() {
    let list = ["List 1", "List 2", "List 3", "List 4", "List 5"];
    for (i = 1; i < list.length; i++) {
        console.log("List: " + [i]);
    }
}

repeatList();

//The function lists a list of items held in an array;
//To lists the lists, we need an array with the lists,
//We also need a for loop to run through the list and check the lists and number of items in the length
//We then use the console.log to list the items in order of how they are indexed
//

//Notice that there are several pieces of code inside the function, (loop, var, array, console.log(), strings) despite different, they are all working towards the same goal
//Thus they are grouped together



//Using the return keyword in the console
//We will pass an array and pick X 
function returnX(array) {
for (i = 0; i < array.length; i++) {
    if(array[i] === "3") {
        console.log("This is X");
    } else {
        console.log("Not found;");
        break;
    }
}    
}
let ar = ["a", "b", "c", "d", "x"];

returnX(ar);

//Explanation;

//The function's objective is to check for X in an array and return it, if it is found.
//The function's name is returnX;
//Parameter is array;
//A for loop is used to check through the passed array while for each loop, checks for the specified item;
//An if statement checks if the value selected matches a specified value
//A display statement is given when the value matches, and if it doesnt 



//OBJECTS
//An object is a storage location for related data
//Syntax - 
//variable keyword - var. const, or let 
//object name - custom - camelCase
//assignment operator - 
//Curly braces
//Name key pairs in single or double quotes - also called properties
//name and value are separated using a full-colon;
//The name-key pairs can take up as many values as possible,
//as far as they are separated with comma,s; 
//name: value; values can be any data type - booleans, numbers, strings, arrays, functions etc


var object = {
    name : "value",
    name1 : "value1",
    name2 : "value2"
}

console.log(object);

//To output a specific property's value, we use the object.property method

console.log(object.name2);


//Different data types as values for object properties

 var ob = {
     boo : true,
     num : 34,
     string : "stringify",
     undefined : undefined,
     arr_obj : ["arr", 34, false], 
     functionName : function fName() {
         console.log(this);
     }
 }

 //A function in an object is called a method - defined using the this keyword

 //We access any property same way

 console.log(ob.boo);
 console.log(ob.num);
 console.log(ob.string);
 console.log(ob.undefined);
 console.log(ob.arr_obj);
 console.log(ob.functionName()); //NOTICE THE USE OF PARENTHESIS AFTER METHOD NAME



//We can use the method to access object properties

var obje = {
    username : "Denis",
    tel : "0719444041",
    home : "Kasarani, Seasons",
    age : 26,
    familyMembers : [["Mother", "Mary Mwangi"], ["Sister", "Winfred Wachinga"]],
    work : "Web Developer",
    displayUser : function displayData() {
        //return this; //This will return all the data of the user in the object
        //let change = this.username = "Denis King";
        //return this; //The output has the username changed;
        delete this.username; //we have removed the username from the object in display
        return this;
    }
}


console.log(obje.displayUser());

//we can add, change or remove specific data using the method




//LOOPS
//WHILE LOOPS
//A while loops, runs as long as a certain condition is true;
//THis means that if the condition is always true the loop runs forever - an infinite loop; runs until it crashes the program
//To make the loop stop we use the break, keyword or make the condition false at some point;
//Syntax - A while keyword, parenthesis that hold the condition, and curly braces that hold the code block to be executed

while (true) {
    console.log("While loop running...");
}
