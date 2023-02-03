var day = "friday";

//simple conditional statement
if(day === "friday") {
    console.log("Happy Birthday");
}else {
    console.log("Siku ya kawaida");
}

//the function of the if else statement above is
//check if the day passed, clicked, highlighted, of whatever user input
//is friday - 
//that is the main objective,
//but we provide an alternate result if the day is not what we expected

var shoePrice = 3500;

if(shoePrice <= 3500) {
    console.log("Buy shoe");
}else if(shoePrice > 3500 && shoePrice < 4000) {
    console.log("Bargain");
}else {
    console.log("Ignore");
}


//this reminds me about AI;
//Or how our brains work - while making decisions;
//applications make decisions all the time just like humans do
//infact, I want to make applications that help me and other people make daily decisions
//--kinda think for them


var onStatus = true;
var switchOff = true;

if(onStatus && switchOff) {
    console.log("Closing Apps...");
}else {
    console.log(undefined);
}


//alarm

var time = "04:00";

if(time === "04:00") {
    console.log("Ring + song name");
}else {
    console.log(undefined)
}

//
var button = "On";

if(!button) {
    console.log(button);
}else {
    console.log(!button);
}


var x = 4;

if(typeof x === Number) {
    console.log(x + " is a number");
}else {
    console.log(x + " is unknown");

}


var time = "day";

if(time === "day") {
    console.log("Sun");
}else {
    console.log("Night");
}


//In decision making, most situations are a yes/no, true or false conditions
//it is either is or isn't

//such as day and night, on and off, alive and dead, healthy/unhealthy, right/wrong
//there can never be any other

var patient = "sick";

if(patient === "sick") {
    console.log("Diagnose");
}else {
    console.log("Go home");
}


//another case may have multiple options
//e.g colors, red, blue, green, etc

var s = "rainy";
if(s === "rainy") {
    console.log("Carry an umbrella");
}else if(s === "sunny") {
    console.log("Wear light clothes");
}else if(s === "cold") {
    console.log("Wear heavy clothes");

}else {
    console.log("Normal wear");

}

//where AI comes in - 
//to know whether it is rainy, cold or sunny, more data is needed;
//e.g like temperature, humidity, etc


