console.log("Besplanes of 1903: ");

for (i = 0; i < 4; i++) {
    console.log(i + ".");
}



for (i = 3; i <= 4; i++) {
    console.log("Hey you");
}



for (users = 0; users < 10; users++) {
    console.log("New user...");
}

for (c = 0; c < 10; c++) {
    console.log("cccccc");
    
}


var x = 0;

function check(y) {
    for (x = 0; x < 6; x++) {
        console.log(y);
    }
}

console.log(check(5));


let separator = "/";

console.log(separator);


function checkTime(time) {
    for (t = 1; t < 12; t++) {
        console.log(t);
    }
}

console.log(checkTime(3));


console.log(separator);



while (true) {
    console.log("On it");
    break;
}

console.log(separator);


var text = "Counter: ";
for (let i = 0; i < 5; i++) {
    
    console.log(text += "The number is " + i + " <br>");
}


//define - noSuccess;

//define - tryAgain() function;

//define - dead;


/*
while (noSuccess) { //the script throws an error at this point, noSuccess is not defined and the program cannot proceed;
    tryAgain();
    if(dead);
    break;
}

*/

console.log(separator);

console.log("Best cars of 1885");

for(var i = 1; i <= 3; i++) {
    console.log(i + ".");
}

console.log(separator);

for (var i = 0; i <= 3; i++) {
    console.log(i);
}

console.log(separator);


for (var i = -5; i < 0; i++) {
    console.log(i);
}

console.log(separator);

console.log("Fastest runners");

for (var index = 1; index < 4; index++) {
    console.log(index + ".");
}

console.log(separator);


for (var i = 1; i < 5; i++) {
    console.log(i);
}


console.log(separator);


for (var i = 0; i < 3; i++) {
    console.log(i);
}


for (var i = 0; i < 3; i++) {
    console.log("Polly wants a cracker");
}

console.log(separator);


console.log("Best Planes of 1903");

for (var i = 1; i < 4; i++) {
    console.log(i + ".");
}


console.log(separator);


console.log("+");

var line = " ";

for (var i = 1; i <= 5; i++ ) {
    line += "~";
    console.log(line);
}

console.log(separator);

var dollar = "";

for (var i = 0; i <= 6; i++) {
    dollar += "$";
    console.log(dollar);
}

console.log(separator);


var title = "Numbers";

var line = "";

for (var i = 1; i < 6; i++) {
    line += 1;

}

console.log(line);


console.log(separator);

for (var i = 0; i < 4; i++) {
    console.log(i);
}

console.log(i);

console.log(separator);

var lyric = "I want to hold your h";

for (var i = 0; i < 5; i++) {

    //here the lyric var runs from 0 to 4 - 
    //consider these as instances - the first instance is at 0
    //second instance, if value of counter /index is still less as specified in the condition,
    //the next instance runs and so on and so forth 
    lyric += "a";

    //for every instance -  the var lyric is incremented to the specified value below;
}

//once the loop ends the below value is incremented to the result of the loop;
lyric += "nd!";

console.log(lyric);



console.log(separator);


//this is new - we can use variables in conditions

var messages = 2;

for (var i = 0; i < messages; i++) {
    console.log("New messages");
}

if (messages === 0) {
    console.log("No new messages");
}


console.log(separator);


//my example;

var fruits = 6;

for (var i = 0; i < fruits; i++) {

    //notice that fruits is just a reference point for our condition
    //thus we cannot output it as is;
    console.log(i + ". Cow");
}


console.log(separator);


var notifications = 4;

for (var i = 0; i < notifications; i++) {
    console.log("You've got mail");
}


console.log(separator);


var songs = 3; 

var message = "Play next song";

for (var i = 1; i < songs; i++) {

    //this means that the number of songs available determines how many songs can be played - looped through

    console.log(message);
}


var guest = 3; 

//remember that the guest variable is used as a reference point in our condition

for (var i = 0; i < guest; i++) {
    console.log(i);
}


console.log(separator);


console.log("+");

var line = "";

for (var i = 0; i < 4; i++) {
    line += "~";
    console.log(line);
}

console.log(separator);

console.log("- -");
console.log(". .");

var nose = " >";

for (var i = 0; i < 3; i++) {
    nose +="-";
}
console.log(nose);
console.log(" 0 ");


console.log(separator);


var songs = 3;

for (var i = 0; i < songs; i++) {
    console.log("Play next song");
}

console.log(separator);


var line = "Hello";

for (var i = 0; i < 6; i++) {
    line += "o";
}

console.log(line);


console.log(separator);


for (var i = 0; i < 4; i++) {
    console.log("Display Element");
}


console.log(separator);


//it is easier to use a for loop as compared to a while loop, 
//as the number of times a for loop repears is easy to find inside the parenthesis;



console.log(separator);


for (var i = 0; i < 4; i++ ){
    console.log("Loop this code block");
}


console.log(separator);


var slide = 3;

for (var i = 1; i < slide; i++) {
    console.log(i);
}


console.log(separator);


//a for loop has three statements
//a variable, a condition, and a increment/decrementing operator


console.log(separator);


console.log("Top trends");

for ( var i = 1; i < 4; i++) {
    console.log(i + '.');
}


console.log(separator);


console.log("+");

var line = "";

for (var i = 1; i <= 5; i++) {
    line += "!";
    console.log(line);
}


console.log(separator);


var line = "";

for (var i = 0; i < 8; i++) {
    line += "Na ";
}

console.log(line);
console.log("Napman!");

//
/*

GENERAL FOR LOOP SYNTAX 

for (var i = 0; i < array.length; i++) {

}

*/

console.log(separator);

var line = "";

for (var i = 0; i < 11; i++) {
    line +="Na";
}


console.log(line);
console.log("Napman!");


console.log(separator);

//an example of a difficult to figure out number of times the code loops
var timesToRepeat = 3;
var message = "New comment!";
var counter = 0;


while (counter < timesToRepeat) {
    console.log(message);
    counter++;
    console.log("Monday, 11 am");
}

console.log(separator);



