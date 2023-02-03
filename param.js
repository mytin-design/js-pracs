function checkScore(attempt) {
    var highScore = 97;
    console.log(attempt > highScore);
}

checkScore(55);


function chargingStatus() { //If you use var instead of function, you get a "unidentified token "("; which does not tell you the exact problem
    var power = false;
    console.log("Charging: " + power);
}

chargingStatus();


//Parameters help us to pass specific information to functions

function addTenTo(number) {
    console.log(number + 10);
}

addTenTo(15);



function displayDouble(number) {
    var half = number * 2;
    console.log(half);
}

displayDouble(45);


function checkScore() {
    var attempt = 87;
    var highScore = 97;
    console.log(attempt > highScore);
}

checkScore();


function userStatus(status) { // If you do not input the parameter, an error is thrown: status is not defined;
    console.log("Rachel: " + status);
}

userStatus("Active");


//we use functions when we have a duplicated code doing the same function over and over
//to group reusable code

function removeUser(user) {
    console.log("Removed: " + user);
}

removeUser("Kim");


function makeGreeting(name) {
    console.log("Hi there," + name);
}

makeGreeting("John");


function displayCash() {
    var money = 50;
    var currency = " Dollars";
    console.log(money + currency);
}

displayCash();


function setVolume() {
    var volume = 100;
    console.log("Volume: " + volume);
}

setVolume();


function mostActive(user) {
    console.log("Most active user");
    console.log(user);
}

mostActive("Paul"); //If we do not pass an argument, the output is undefined;


function addUser(user) {
    var text = "Added: ";
    console.log(text + user);
}

function startLogin(username) {
    console.log("Enter username....");
}

startLogin();


//


function makeGreeting(name) {
console.log("Hi there, " + name);
}

makeGreeting("Laureen");


function tripleIt(number) {
    var triple = number * 3;
    console.log(triple);
}

tripleIt(30);


//



function temperatureUpdate(temp) {
    console.log("Current temp: ");
    console.log(temp);
}


temperatureUpdate(35);




function displayWinner(username) {
    var position = "1st: ";
    console.log(position + username);

}

displayWinner("Denis");


//


function totalWeight(amount) {
    var measurement = " grams";
    console.log(amount + measurement);
}

totalWeight(500);



function displayCash() {
    var money = 100;
    var currency = " Dollars";
    console.log(money + currency);
}

displayCash();



//


function makeGerund(word) { // try not inserting a parameter
    var result = word + "ing";
    console.log(result);
}

makeGerund("Jump");

//


function doorBellCamera(enabled) {
    console.log(enabled);
}

doorBellCamera(true);


//


function displayTriple(number) {
    var triple = number * 4;
    console.log(triple);
}

displayTriple(45);


//


function displayCost(cost) {
    console.log("Total cost ");
    console.log(cost);
}


displayCost(4000);



//


//a parameter stores a value that can be passed to the function


function removeUser(user) {
    console.log(user + " Removed");


}

removeUser("John");

//


function userStatus(user) {
    var status = "Active";
    console.log(status + " " + user);
}

userStatus("Rachel");

//


function champions(team) {
    console.log("Champions: " + team);
}

champions("Liverpool");


//

function accomType(type) {
    var rating = "5 star";
    console.log(rating + " " + type);
}

accomType("Luxury");

//


function name(type) {
    console.log(type);
}

name("Impatient");


//


//THURSDAY 21/07/2022
//RETURNING VALUES

//A function can return a value to the code that called it

//return  keyword returns something from the function

//we add the return keyword followed by the value we want to return

function userAge(number) {
    var age = "User age: " + number;
    return age;
}


console.log(userAge(34));

//

// A function can return any type of value; 
//a string, a boolean, or number


function timesTen(number) {
    var result = number * 10;
    return result;
}

console.log(timesTen(10));

//we can only return a single value


function greaterThanTen(number) {
    var isGreater = number > 10;
    return isGreater;

}


console.log(greaterThanTen(45));


//we can use the return value of a function like any value by calling the function.


function userAge(number) {
    var age = "User age: " + number;
    return age;
}

console.log(userAge(34));

//we can store the resturn value in a variable too

function userAge(num) {
    var age = "User age: " + num;
    return age;
}

var result = userAge(34);
console.log(result);

//if we dont include a return statement, the function returns the value undefined instead

function userAge(num) {
    var age = "User age: " + num;
}

var result = userAge(34);
console.log(result);

//to store a return value in a variable, we call the function and store it in a variable


function giveMeTen() {
    return 10;
}

console.log(giveMeTen()); // here, we call the function and store it in a display statement


function addGreeting(user) {
    var greeting = "Greetings " + user;
    return greeting;
}

var result = addGreeting("Ni hao");
console.log(result);

//


function lessThanFive(n) {
    var lessThan = n < 5;
    return lessThan;
}

var result = lessThanFive(45);
console.log(result);


//


function addTen(n) {
    var addedTen = 10 + n;
    return addedTen;
}

console.log(addTen(20));

//



function signUp(user) {
    var status = user + " Signed Up";
    return status;
}

var result = signUp("Desmond");
console.log(result);


//


function reject(user) {
    var choice = "No Emails: " + user;
}

var result = reject("Ann");
console.log(result);

//


function moreThanTen(n) {
    return n > 10;
}

var result = moreThanTen(14);
console.log(result);


//
function getBrightness() {
    var brightness = 67;
    return brightness;
}

console.log(getBrightness());

//


function makeJokeName() {
var first = "Kitty ";
var last = "Perry";
return first + last;
}

var joke = makeJokeName();
console.log(joke);


//

function getArea(height) {
    var width = 35;
    return width * height + " metres";
}

console.log(getArea(34));

//


function retrieveScore() {
    return 100 + 100;
}

console.log(retrieveScore());

//


function wrongAnswer() {
    return "That's incorrect!";
}


console.log(wrongAnswer());

//


function addTen(x) {
    var addedTen = 10 + x;
    return addedTen;
}

console.log(addTen(20));


//


function rejectCookies(user) {
    return user + ": No Cookies";
}

console.log(rejectCookies("Erica"));

//


function scanResult(result) {
    var status = "Positive: " + result;
    return status;
}

console.log(scanResult(false));


//

function retrieveVolume() {
    return 100 + 100;
}

console.log(retrieveVolume());

//

function makeAdverb(word) {
    var result = word + "ly";
    return result;
}

console.log(makeAdverb("slow"));

//

function timesTwenty(n) {
    return n * 20;
}

var result = timesTwenty(45);
console.log(result);



function accessDenied() {
    return "Access is denied";
}

//


function accomType() {
    var type = "luxury";
    return type;
}

console.log(accomType());

//

function weatherReport(day) {
    var conditions = day + " :Sunny";
    return conditions;
}

console.log(weatherReport("Tue"));



//


function displayAirDate(year) {
    return "Tv show aired in: " + year;
}

var text = displayAirDate(2990);
console.log(text);


//



//so if you find the result undefined, you should think, of the return keyword


function submitRequest(request) {
    return request + " : Approved";

}

console.log(submitRequest("Hotel"));


//

function displayTheNumber(num) {
    return "The number is " + num;
}

console.log(displayTheNumber(50));


//

function champions(team) {
    return "champions: " + team;
}

console.log(champions("Machester"));


//


function logoutString(user) {
    var text = user + " logged out";
}

console.log(logoutString("Akira"));


//

function addGreeting(user) {
    var greeting = "Greetings " + user;
    return greeting;
}

var result = addGreeting("Alex");
console.log(result);

//

function lessThanFive(n) {
    var lessThan = n < 5;
    return lessThan;
}

console.log(lessThanFive(45));

//


function displayCash(am) {
    return am + " Dollars";
}

console.log(displayCash(100));

//


function displayCashy(ama) {
    return ama + " Rubles";
}

console.log(displayCashy(500));

//

function displayTotalCost(cost) {
    return "Total is: " + cost;

}

var result = displayTotalCost(500);

console.log(result);

//


function signOut(user) {
    var signedOut = user + " Signed Out";
    return signedOut;
}

var result = signOut("Michome");


//USING MULTIPLE PARAMETERS

//Functions need multiple parameters to work with two or more pieces of data like first and last name

//submit your first and last names to see functions take two parameters, add them to a string and display them on the website

//we first used one parameter
function display(firstName) {
    console.log(firstName);
}

display("Alex");

//we separate parameters using commas

function display(firstName, lastName) {
    console.log(firstName, lastName);
}

display("Alex", "Morgan");


//values are passed to a function in the same order parameters do

function displayWinners(first, second) {
    console.log("1st: " + first);
    console.log("2nd: " + second);
}

displayWinners("Sam", "Amy");

//


//we can add as many parameters as we like, as long as we separate them with commas

function display(first, second, third) {
    console.log(first + " " + second + " " + third);
}

display("duck", "duck", "goose");


//

function showWinners(first, second) {
    console.log("1st: " + first);
    console.log("2nd: " + second);
}

showWinners("Hellen", "Joe");

function mix(first, second, third) {
    return first + second + third;
}
var result = mix("big", "bad", "wolf");
console.log(result);

//


function createID(name, year) {
    return name + year + "@hutmail.com";
}

var email = createID("jo", "1998");
console.log(email);


//Akkadian mails

function createUser(fname, year) {
    return fname + year + "@akkadian.com";
}

var mail = createUser("Denis", "1996");
console.log(mail);


//


function addPrefix(prefix, word) {
    return prefix + word;
}

var newWord = addPrefix("re", "do");
console.log(newWord);


//


function showWinners(first, second) {
    console.log("1st: " + first);
    console.log("2nd: " + second);
}

showWinners("Joe", "Hellen");


//


function mix(first, second, third) {
    console.log(first + second + third);
}
var result = mix("Peter", "Piper", "Picked");

mix(); //returns NaN;

//Order matters alot

function mashWords(first, second, third) {
    return first + second + third;
}

var result = mashWords("big", "bad", "wolf");
console.log(result);


//


//UNDERSTANDING FUNCTIONS

//Function names should be descriptive and let us know the main thing the function does.
//eg to display

function display(word) {
    console.log(word);
}

display("Hi");
display("Bye");

//

//functions are actions, so their names should contain at least one verb.
//When using multiple words, the verb is a prefix like sumTotal 

function sumTotal(price, tax) {
    console.log(price + tax);
}

sumTotal(1000, 250);

//

//functions that maily return a value without changing it in any way start with verbs like- get

function getName(fullName) {
    return fullName[0];
}

var fullName = ["Don", "Juan"];
var firstName = getName(fullName);

console.log(firstName);


//

//as a special case, functions that return boolean values often start with - is

function isFreezing(temperature) {
    return temperature < 0;
}

var freezing = isFreezing(-3);
console.log(freezing);


//

//function names should be consistent.
//If one function is called - calculateDifference -, a similar function should have the same verb prefix


function calculateSum(a,b) {
    return a + b;
}

function calculateDifference(a,b) {
    return a - b;
}

var sum = calculateSum(30, 11);
var difference = calculateDifference(30, 11);

console.log(sum);
console.log(difference);


//

function displayUserID(user) {
    console.log(user[1]);
}

var user = ["Don Quixote", 992];
displayUserID(user);


//

function getTotal(price, tax) {
    return price + tax;
}

//

function isEqual(num) {
    return num === 10;
}


console.log(isEqual(45));

//

function displayName(name) {
    console.log(name);
}

function displayAlias(name) {
    console.log(name[1]);
}

var fullName = ["Clark Kent", "Superman"];

displayAlias(fullName);

//


//A function is like a black box because with a great name we can call a function without reading the code defined inside it;


var author = "J.D. Salinger";

function displayAuthor() {
console.log(author);
}
displayAuthor(author);



//


//while we do not have to remember the code of every function in a program, we do have to pass the right input to get the right output

/*

var author = "John Steinbeck";
var title = "Tortilla Flat";
var date = 1935;

displayAuthor(author);
displayTitle(title);
displayYear(date);

*/

//The right input depends on what types of values we pass to a function. Pass the first string, followed by the number


function displayScore(name, points) {
    console.log(name + ": " + points);
}

displayScore("Johnny", 350);


//The value types matter when functions perform operations
//For example, when adding two numbers, the values we pass have to be numbers

function sumScore(score, bonus) {
    console.log(score + bonus);
}

sumScore(100, 50);


//The function's output does not have to be the same type as the input;
//This function has a number as input and a boolean as output


function isRentingAge(age) {
    console.log(age >= 25);
}

isRentingAge(25);


//


//When we think about a function's output, 
//we can think about what it displays or what it returns to be used somewhere else in the code

function isRentingAge(age) {
    return age >= 25;
}

var canRent = isRentingAge(25);
console.log(canRent);

//So note that a function's output can be used in another code, such as a function, variable or loop

//e.g

function isSunday(day) {
    return day === "Sunday";
}

var goToChurch = isSunday("Sunday");

console.log(goToChurch);


if (goToChurch) {
    console.log("Happy Sabbath!");
}

//Notice how the output of the function is used as a metric for the running of the second if statement

//so, based on the output we want, we can decide the input we will use


//Pass the right input to get the right output

function snooze(time, snooze) {
    return time + snooze;
}

var newAlarmTime = snooze(1300, 15);
console.log(newAlarmTime);



//


function isSameWord(word) {
    console.log(word === "dexterous");
}

isSameWord("dexter");


//


//LETS LEARN ABOUT FUNCTIONS WITH ARRAYS AS PARAMETERS

function displayNames(names) {
    console.log(names);
}

var students = ["Laurel", "Yanni"];

displayNames(students);

//


//When we pass arrays to functions, we can choose among a number of results based on the array.
function displayNumberOfNames(names) {
    console.log(names.length);
}

var students = ["Laurel", "Yanni"];

displayNumberOfNames(students);

//



//Using a single element of the array


function displayFirstName(names) {
    console.log(names[0]);
}

var students = ["Laurel", "Yaani"];
displayFirstName(students);


//

//often times we pass an array to a function because we want to return a part of it

function getFirstName(names) {
    return names[1];
}

var students = ["Laurel", "Yanni"];
var firstMember = getFirstName(students);
console.log(firstMember);


//


function getListOfNames(names) {
    return names[0] + " " + names[1];
}

var students = ["Vera", "Rubin"];
var list = getListOfNames(students);
console.log(list);

//


function displayGroup(name) {
    console.log(name);
}

var name = ["Daniel", "Jim"];
displayGroup(name);

//

function displayGroupInfo(array) {
    console.log(group.length);
    console.log(group[1]);
}

var group = ["Lorenzo", "Yanni"];
displayGroupInfo(group);

//

function displaySecondMember(group) {
    console.log(group[1]);
}

var group = ["Laurel", "Yanni"];
displaySecondMember(group);


//


function getFullName(group) {
    return group[1] + " " + group[0];
}

var scientist = ["Vera", "Rubin"];
var name = getFullName(scientist);
console.log(name);

//


function displayName(name) {
    console.log(name);
}

var name = ["Ada", "Lovelace"];
displayName(name);

//


function displayName(name) {
    console.log(name.length);
}

var name = ["Salvador", "Felipe", "Jacinto", "Dali", "Y", "dOMENE"];
displayName(name);

//


function displayFirstValue(values) {
    console.log(values[0]);
}

var temperatures = ["60F", "83F"];

displayFirstValue(temperatures);

//


function getSecondName(name) {
    return name[1];
}

var name = ["Flossie", "Wong-Staal"];
var name = getSecondName(name);

console.log(name);


//


function getAverage(grades) {
    return (grades[0] + grades[1] + grades[2]) / 3 ;
    
}

var grades = [10, 5, 8];
var average = getAverage(grades);
console.log(average);

//

































































