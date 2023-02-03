//learn how while loops control the number of times it repeats its code

//to control the times a while loop repeats, we start with a variable set to a number.

//we call this variable a counter varibale


var counter = 1;


//then we use a comparison in the condition to compare the counter variable to a number

while (counter < 4) {
    console.log(counter);

    //we make the condition return false and stop the loop by incremeting the counter variable 
    counter++;
}

//changing the condition tells the loop when to stop. for example

//use counter < 10;


while(counter < 10) {
    console.log(counter);
    counter++;
}


//changing the value of counter variable changes when the loop starts

//eg counter = 5;
console.log("Separator");


var counter = 5;

while (counter < 10) {
    console.log(counter);

    counter++;
}


console.log("Separator");

//the order of your code determines the result

while (counter < 10) {
    counter++;

    console.log(counter);
}

console.log("Separator");
 
/*

check this code out - 
var speed = 2;

while (speed < 5) {
    console.log(counter);
    counter++;
}

*/


var speed = 2;

while (speed < 5) {
    console.log(speed);
    speed++;
}

console.log("Separator");


speed = 1;

while (speed < 10) {
    console.log(speed);
    speed++;
}

console.log("Separator");


var listNumber = 1;

while (listNumber < 11) {
    console.log(listNumber + ". Camera");
    listNumber++;
}


console.log("Separator");


var number = 1;

while (number < 6) {
    console.log(number);
    number++;
}


console.log("Separator");


var number = 1;

while (number <= 3) {
    console.log(number);
    number++;
}


console.log("Separator");


var i = 1;

while (i < 5) {
    console.log(i);
    i++;
}

console.log("Separator");


var dollars = 1;

while(dollars < 10) {
    dollars++;
}

console.log(dollars);



console.log("Separator");



var acceleration = 0;

while (acceleration < 3) {
    acceleration++;
    console.log(acceleration);
}


console.log("Separator");


var counter = 1;

while (counter <= 3) {
    console.log("Before: " + counter);
    counter++;
    console.log("After: " + counter);
}

console.log("Separator");


//this loop stops running when number is 6 or greater
var number = 1;

while(number < 6 ){
    console.log(number);
    number++;
}


console.log("Separator");


//repeat the following loop twice - 
//this is determined by the value in counter, the condition operator, and the value compared with


var counter = 2;

while (counter <= 3) { //the operator used is less than or equal to
    console.log(counter);
    counter++;
}


console.log("Separator");



var likes = 20;

while (likes < 100) {
    console.log("Video liked");
    likes++;
}

var username = "Denis";
var jobsinProgress = 1;

while (jobsinProgress < 10) {
    console.log( username + ", You have a new job!")
    jobsinProgress++;
}


var username = "denisking@mail";

var notifications = 1;

while (notifications <= 10) {
    console.log("Hi, " + username + ", you have a new notification!");
    notifications++;
}



var pinTries = 3;

while (pinTries < 4) {
    console.log("You have one more tries left...");
    pinTries++;
}


var amount = 10;

while (amount < 2000) {
    amount += 500;
    console.log("New amount: " + amount);
}


var dirnavCommand = "cd";

var dirCreate = "mkdir";

var fileCreate = "type nul>";

var delFile = "del";

var colorChange = "color";

var commandValue = ""; //user value 

var separator = "/";

if (dirnavCommand) {
    commandValue = "desktop";
    console.log(dirnavCommand + " " + commandValue);
}


var number = 1;

while(number <= 3) {
    console.log(number);
    number++;
}

console.log(separator);

var i = 1;

while (i < 5) {
    console.log(i); //expected output - 1,2,3,4
    i++;
}

console.log(separator);


var dollars = 1;

while (dollars < 10) {
    dollars++;
}

console.log(dollars);


console.log(separator);


var acceleration = 0;

while (acceleration < 3) {
    acceleration++;
    console.log(acceleration);
}


console.log(separator);

var counter = 1;

while (counter <= 3) {
    console.log("Before: " + counter);
    counter++;
    console.log("After: " + counter);
}


console.log(separator);


var number = 1;

while (number < 6) {
    console.log(number);
    number++;
}

console.log(separator);


var counter = 2;


while (counter <= 3) {
    console.log("Counter: " + counter);
    counter++;
}


var counter = 1;

while (counter < 2) {
    counter++;

}

console.log(counter);



console.log(separator);


var counter = 10;

while (counter < 11) {
    console.log(counter + ".");
    counter++;
}



var tracker = 1;

while (tracker <= 2) {
    tracker++;
}

console.log(tracker);

console.log(separator);


var counter = 0;

while (counter < 3) {
    console.log(counter);
    counter++;
}
console.log(separator);


var counter = 0;

while (counter < 4) {
    counter++;
    console.log(counter);
}

console.log(separator);


var number = -5;

while (number < 5) {
    console.log(number);
    number++;
}


console.log(separator);


var speed = 0;

var car = "Buggy";

while (speed < 50) {
    speed += 50;
    console.log("speed: " + speed);
}

console.log(separator);


var number = 0;

while (number >= 0) {
    console.log(number);
    number++;

    if(number === 100) {
        break;
    }
}


var cash = 0;

while (cash >= 0){

    let amount = "Ksh. " + cash;
    console.log(amount);
    cash += 100;

    if (cash === 5000 ) {
        console.log("send " + amount +  " to xxx");
        break;
    }

}


console.log(separator);



var tracker = 15;

while (tracker <= 20) {
    console.log(tracker);
    tracker++;
}

console.log(separator);


var counter = 10;

while (counter <= 40) {
    console.log(counter);
    counter += 10;
}


console.log(separator);


var counter = 0;

while (counter < 25) {
    console.log(counter);
    counter += 5;
}

console.log(separator);


var counter = 5;

while (counter < 10) {
    console.log(counter);
    counter++;
}


console.log(separator);


var counter = -3;

while (counter < 0) {
    console.log(counter);
    counter += 1;
}

console.log(separator);


var speed = 1;

while(speed < 6) {
    console.log(speed);
    speed++;
}


console.log(separator);



//fuel moderator

var fuel = 100;

while (fuel < 150) {
    console.log("Check fuel");
    fuel += 10;
}


console.log(separator);


var counter = 2;

while (counter < 8) {
    counter++;
    console.log(counter);
}

console.log(separator);


var speed = -2;

while (speed < 1) {
    console.log(speed);
    speed++;
}


console.log(separator);


var counter = 50;

while (counter < 100) {
    console.log(counter);
    counter++;
}


console.log(separator);


var number = 1;

while (number < 5) {
    number++;
}

console.log(number);


console.log(separator);


var counter = 1;

while (counter <= 10) {
    console.log(counter);
    counter++;
}


console.log(separator);

var counter = 10;

while (counter > 0) {
    console.log(counter);
    counter--;

    if(counter === 1) {
        console.log("Go!");
    }
}


console.log(separator);

var counter = 1;

while(counter < 5) {
    counter++;
    console.log(counter);
}




console.log(separator);


var counter = 10;

while (counter > 0) {
    if(counter === 1) {
        console.log("Go!");
        break;
    }
    console.log(counter);
    counter--;
}

console.log(separator);

var counter = 20;

while (counter <= 25) {
    console.log(counter);
    counter++;
}


console.log(separator);


var speed = 0;

while (speed < 100) {
    speed += 10;
}

console.log(speed);

console.log(separator);


var number = 0;

while (number < 200) {
    number += 200;
}

console.log(number);

console.log(separator);


var counter = 10;

while (counter > 0) {
    console.log(counter);
    counter--;
}


console.log(separator);


var counter = 4;

while (counter < 6) {
    console.log(counter + ". Camera");
    counter++;
}



console.log(separator);


var counter = 20;

while (counter < 25) {
    console.log(counter);
    counter++;
}



console.log(separator);






