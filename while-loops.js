//Repeating code with while loops

//programs repeat the same lines of code over and over 
console.log("again");
console.log("and again");
console.log("and again");
console.log("and again");
console.log("and again");
console.log("and again");

//but this is a lot of work for huge programs

//to build larger programs and websites we repeat lines of code using a while loop

while(true) {
    console.log("i love you");
    break;
} //this will run until forever


//if we do not break the loop - the loop runs infinitely
//and we call it an infinite loop
//runs infinitely and crashes the program

while (false) {
    console.log("Skip me");
}

while (false) {
    console.log("Searching for Wifi");
}

while (true) {
    console.log("Searching for wifi");
    break;
}


var isOnline = true;

var numberOfFriends = 14;

while (true) {
    console.log("Add element");
    break;
}


while (true) {
    console.log("Cheat code activated");
    break;
}

//the code block runs forever because the condition remains true forever

while(false) {
    console.log("New message");
    console.log("Hi there");
}


var message = "Now playing";

while (false) {
    console.log("Stop playing");
}


// a loop has three parts
//the keyword, the condition, and a code block

console.log("Phone on");

while(false) {
    console.log("Tracking enabled");

}

console.log("Phone off");

while (true) {
    console.log("1");
    console.log("2");
    console.log("3");
    break;
}


var loggedIn = true;

var email = "email@email.com";

while (false) {
    console.log("Searching for a partner");
}


var isOn = false;

while (isOn) {
    console.log("Light on");
}

//isOn is false, therefore the code is skipped


var isOn = true;

while (isOn) {
    console.log("Take over the world");
    break;
}

while (false) {
    console.log("Hello world");
}


var isOn = false;

while (isOn) {
    console.log("Add image");
    console.log("Add text");
}


//How to stop while loops

// we start by creating a variable outside of the loop

var keepGoing = true;

while(true) {
    console.log("and again");
    break;
}


while (keepGoing === true) {
    console.log("and again");
    break;
}

//to stop the infinite loop

while (keepGoing === true) {
    console.log("and again");
    keepGoing = false;
}


var keepGo = true;

while (keepGo === true) {
    console.log("KeepGoing: " + keepGo);

    keepGo = false;

    console.log("keepGoing: " + keepGo);
}


var isLoading = false;

while (true) {
    console.log("Loading game");
    break;
}




var isLoading = false;

while (isLoading === true) {
    console.log("Loading game..");
}

//expected outcome = code is skipped



var keep = true;

while (keep == true) {
    console.log("Just keep swimming");
    keep = false;
}



var wifiOn = true;

while(wifiOn) {
    console.log("Scanning...");
    break;    
}






