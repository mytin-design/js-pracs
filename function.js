//FUNCTIONS

//websites and apps regularly need to perform the same task over and over
//So instead of creating lots of different code, websites use functions to group related code
//and perform the task in one place

//we start with the function keyword 

//function

//followed by the function name - named using the camel case

function greetUser() {};

//curly braces mark out the code block that belongs to the function


function greetUser() {

};


function greetUser() {
    console.log("Good morning Anna");
    console.log("Welcome back");

}


//to run the code we need to call the function

// we call the function using the function name


greetUser();



function weatherUpdate() {
    console.log("Weather update");
    console.log("Sunny skies ahead");
}

weatherUpdate();


console.log("////////End if//////////");


function nightRoutine() {
    console.log("Lights off");
    console.log("Alarm set");
}

nightRoutine();


console.log("////////End if//////////");


function launch() {
    console.log("3");
    console.log("2");
    console.log("1");
    console.log("Launch!");
}

launch(); 


console.log("////////End if//////////");



function greet() {
    console.log("Good evening");
}

greet();



function weeksaYear() {
    console.log(52);
}

weeksaYear();





console.log("////////End if//////////");





function sayGreeting() {
    console.log("Hi there!");
}

sayGreeting();


console.log("////////End if//////////");



function temperatureUpdate() {
    console.log("77 degrees Monday");
    console.log("66 degrees Tuesday");
}


temperatureUpdate();

console.log("////////End if//////////");



var device = "Iphone";

function bluetoothMode() {
    console.log("Bluetooth on");
}

bluetoothMode();


function startLogin() {
    console.log("Enter username ....");
    console.log("Enter password ......");
}

startLogin();



console.log("////////End if//////////");



function makeFullName() {
    var first = "Hannah ";
    var last = "Hunt";
    console.log(first + last);
}

makeFullName();


console.log("////////End if//////////");



//we create functions to group and reuse code


function displayCash() {
    var money = 100;
    var currency = " Euros";
    console.log(money + currency);
}


displayCash();


console.log("////////End if//////////");

function newsUpdate() {
    console.log("Here's your update");
}

newsUpdate();

console.log("////////End if//////////");


//MONDAY 18/07/2022

//when we call a fucntion, the code inside the function runs

function makeFullName() {
    var first = "Hannah ";
    var last = "Hunt";
    console.log(first + last);
}

makeFullName();


//we create functions to group and reuse related code


//Monday 18/7/2022

function newsUpdate() {
    console.log("Here's your update");
}

newsUpdate(); // remember to call a function everytime 


function wrongAnswer() {
    console.log("That's incorrect");
}


wrongAnswer();
function correctAnswer() {
    console.log("That's correct");
}


correctAnswer();





function daysAYear() {
    console.log(365);
}

daysAYear();
console.log("Days a year");


function displayCapacity() {
    var capacity = 600;
    console.log(capacity);
}

displayCapacity();


function tryAgainLater() {
    console.log("No tickets left");
    console.log("Try again later");
}

tryAgainLater();


function powerDown() {
    console.log("Saving state....");
    console.log("Powering down...");
}


//the function above does not run because the function has not been called


function increaseBrightness() {
    console.log("Brightness up");
}

function decreaseBrightness() {
    console.log("Brightness down");
}

increaseBrightness();


function deviceUpdate() {
    console.log("Starting update");
    console.log("Do now power off");
}

deviceUpdate();

//

function displayWinners()  {
    var winners = ["Tom", "Eve"];
    console.log(winners[0]);
    console.log(winners[1]);
}

displayWinners();

//

function displayCapacity() {
    var capacity = 99;
    console.log(capacity);
}

displayCapacity();


//


function checkPoints() {
    var points = 7;
    var required = 10;

    console.log("Requirements reached");
    console.log(points > required);
}

checkPoints();


function movieFinder() {
    var genre = "comedy";
    var text = "Finding " + genre + " movies";
    console.log(text);
}

movieFinder();


//

function temperatureUpdate() {
    console.log("77 degrees");
    console.log("Falling to 60");
}

temperatureUpdate();


function decreaseVolume() {
    console.log("Volume down");
}

decreaseVolume();
decreaseVolume();

//Have you ever seen how when you press a button several times, 

//for example the increase volume btn - the volume increases with each btn press??

//this is it!!!

//when you press the btn several times, you are calling the function again and again
//So that if the volume is set to reduce by 5, then with each btn press, we call the function and 
//it decreases the volume until a certain specified level


function displayfirstCurrency() {
    var currencies = ["Euro", "Yen"];

    console.log(currencies[0]);
}

displayfirstCurrency();

//this can be used in payment platforms, where you sepcify a currecny based on location
//for example


let location = ["Kenya", "USA"];


function returnCurrency() {
    
    if (location === location[1]) {
    console.log("Us dollars");
    }
}

returnCurrency();


//CREATING PARAMETERS

//Sometimes functions need specific information to help them perform their tasks
//e.g a function that adds a player's name to a team

//we can use variables inside functions

function greetRon() {
    var name = "Ron";
    console.log("Hello, " + name);
}

greetRon();


function greetLeslie() {
    var name = "Leslie";
    console.log("Hello, " + name);
}

greetLeslie();

//instead of writing tow functions we can pass specific information to just one function without repeating code

function greet(name) { //name - is called a parameter
    console.log("Hello, " + name);
}

greet("April"); // this is called an argument
greet("Leslie"); 



//to pass a value to a function, we first add a varibale inside the parenthesis of the function

function  greet(name) {
    console.log("Hello, " + name);
}

//to pass a value for the variable, we place it between the parenthesis when we call the function, like :

function greet(name) {
    console.log("Hello, " + name);
}

greet("Anna"); // we pass the value here as an argument


//so the argument - value is passed to as the parameter and used in the function

//a parameter acts as a special variable that stores a value for the function to use


//to pass the value to the parameter, we store it in the call function


function lampStatus() {
    var power = true;

    console.log("Powered on: " + power);
}

lampStatus();

//

function userStatus() {
    var active = "Active";
    var inactive = "Inactive";
    console.log("Bob: " + inactive);
}

userStatus();


function userStatus(status) {
    console.log("Bob: " + status);
}

userStatus("Active");

//Notice,, "Active"  a argument  or value is passed as a parameter and used in the function's code  block



//



function displayHalf(number) {
    var half = number / 2;
    console.log(half);
}

displayHalf(10); //Notice how the parameter takes up the value 10 and uses it in the function;;


//

function doubleNumber(number) {
    var result = number * 2;
    console.log(result);
}


doubleNumber(5);

//When function is called, it takes up the value and passes it to the parameter and uses it in the function


function greet(name) {
    console.log("Hello, " + name);
}

greet("Maggie");


//add attempt as a parameter

function checkScore(attempt) {
    var highScore = 97;
    console.log(attempt > highScore);
}

checkScore(55);

//so we pass a value to the function and use it in the function to evaluate

function chargeStatus() {
    var power = false;
    console.log("Charging: " + power);

}

chargeStatus();


//

//parameters helps us to pass specific information to functions


function addTenTo(number) {
    console.log(number + 10);
}

addTenTo(15);


function checkScore() {
    var attempt = 87;

    var highScore = 97;

    console.log(attempt > highScore);
}

checkScore();


//so when we have same code doing the same thing, we store it in a function

//for example, reducing volume


//code below

//for example, a delete btn with the following code behind it

//says - onclick - remove/ delete/ contact/ or  user

function removedUser(user) {
    console.log("Removed: " + user);
}

removedUser("Lisa");



function makeGreeting(name) {
    console.log("Hi there, " + name);
}

makeGreeting("Tom");


///


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
    console.log("Most active user: ");
    console.log(user);
}

mostActive("Paul");



function addUser(user) {
    var text = "Added: ";
    console.log(text + user);
}

addUser("maggie");


function startLogin(username)  {
    console.log("Enter username...");
}

//


function makeGreeting(name) {
    console.log("Hi there, " + name);
}

makeGreeting("Lauren");


function trippleIt(number) {
    var tripple = number * 3;
    console.log(tripple);
}

trippleIt(30);



//expected output - 90;



function temperatureUpdate(temp) {
    console.log("Current temp:");
    console.log(temp);
}

temperatureUpdate(60);


function displayWinner(username) {
    var position = "1st: ";
    console.log(position + username);
}

displayWinner("Henry");



function totalWeight(amount) {
    var measurement = " grams";
    console.log(amount + measurement);
}

totalWeight(250);



//if we have thousands of words that we want to turn into adjectives - 
//we use the following script

//we pass a word as an argument and add ing in the code block

function makeGerund(word) {
    var result = word + "ing";
    console.log(result);
}

makeGerund("Jump");



function doorBellCamera(enabled) {
    console.log(enabled);
}

doorBellCamera(true);


//so we pass specific information to a function through parameters


function displayTriple(number) {
    var triple = number * 3;
    console.log(triple);
}

displayTriple(5);


function displayCost(cost) {
    console.log("Total cost: " + cost);
}

displayCost(60);


//a aprameter acts as a special variable that stores a value to pass to a function



function userStatus(user) {
    var status = "Active";

    console.log(user + ": " + status);
}

userStatus("Rachael");


function champions(team) {
    console.log("Champions: " + team);
}

champions("Liverpool");


function accomType(type) {
    var rating = "5 star";

    console.log(rating + " " + type);
}

accomType("High");



//a function can return a value to the code that called it; 

//to return sth from a function we add the return keyword followed by the value to return
//e.g return age

function userAge(number) {
    var age = "User age: " + number;
    return console.log(age);

}

userAge(45);
//a function can return any type of value. like a string, number, or boolean

function timesTen(number) {
    var result = number * 10;

return  console.log(result);

}

timesTen(2);


//

//we can only return a single value

function greaterThanTen(number) {
    var isGreater = number > 10;
    //return isGreater;//this will run in a code, but for us to see a result in the console we can use the console.log();
    return console.log(isGreater);
}

//remember you have to call the function

greaterThanTen(20);

//or


//we can use the return value of a function like any value by calling the function.

function userAge(number) {
    var age = "User age: " + number;
    return age;
} 

console.log(userAge(34));

//


//we can store the return value in a variable too, use it or display it

var result = userAge(34);
console.log(result);


//if we do not include a return statement, the function returns the value undefined instead;

function userName(name) {
    var username = "User Name: " + name;
    
}

var result = userName(29);
console.log(result);

//expected output - undefined


//return returns a single value only


//To store the return value in a variable - we call the function and store it in a variable - 


function addGreeting(user) {
    var greeting = "Greetings: " + user;
    return greeting;
}

var result = addGreeting("Saoirse");
console.log(result);


function lessThanFive(number) {
    var lessThan = number < 5;
    return lessThan;
}

var result = lessThanFive(10);
console.log(result);

function addTen(number) {
    var addedTen = 10 + number;
    return addedTen;
}

console.log(addTen(20));


function signUp(user) {
    var status = user + ": Signed up";
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



function scanResult(result) {
    var status = "Positive: " + result;
    return status;
}

console.log(scanResult(false));


//



function retrieveVolume() {
    return 100 + 100; // 
}

console.log(retrieveVolume());


//



function makeAdverb(word) {
    var result = word + "ly";
    return result;
}

console.log(makeAdverb("slow"));



//

function timesTwenty(number) {
    return number * 20;
}

var result = timesTwenty(54);

console.log(result);



///


//if we call the function, after we have returned a value in the function, the we can get a result;

//i.e if we call the function in a console.log() operator


//



function accessDenied() {
    return "Access is Denied";
}

//the above code block will not display anything as it has not been called and furthermore, has not been called in a console.



function accomType() {
    var type = "luxury";
    return type;
}


console.log(accomType); // this is new


console.log(accomType());


//return values allows us to return a value from a function to the code that called it;


function weatherReport(day) {
    var conditions = day + ": Sunny";
    return conditions;
}

console.log(weatherReport("Tue"));


function displayAirDate(year) {
    return "TV show aired in: " + year;
}

var text = displayAirDate(1990);
console.log(text);


//undefined illustrates that we might have forgotten to add a return 


function submitRequest(request) {
    return request + ":Approved";
}

console.log(submitRequest("Hotel"));


function displayTheNumber(number) {
    return "The number is: " + number;
}

console.log(displayTheNumber(50));



function champions(team) {
    return "Champions:" + team;
}

champions("Manchester");

//will not display because we have not displayed the call in a console


function addGreeting(user) {
    var greeting = "Greetings: " + user;
    return greeting;
}

var result = addGreeting("Alex");

console.log(result);


//


function lessThanFive(number) {
    var lessThan = number < 5;
    return lessThan;
}

lessThanFive(5);

//will not be displayed in the console for obvious reasons


function displayCash(amount) {
    return amount + " Dollars";
}

console.log(displayCash(100));


//


function displayCash(amount) {
    return amount + " Rubles";
     
}

console.log(displayCash(500));



function displayTotalCost(cost) {
    return "Total is: " + cost;
}

var result = displayTotalCost(500);
console.log(result);


function signOut(user) {
    var signedOut = user + " Signed out";
    return signedOut;
}

var result = signOut("Michonne");

//will not display in the console for obvious reasons


function reject(user) {
    var choice = "No Emails: " + user;
    return choice;
}

var result = reject("Audrey");
console.log(result);































































