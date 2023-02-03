
//We first store the wifi on or off status in a variable;
let wifiOn = true;

//We then use a function to check the wifi status;
//In the function, we check the current state of the wifi, as stored in the variable;
//To achieve this, we use an if statement, which allows us to make a decision;
//i.e we can decide what to do if the state of the wifi is on or off;
//Then, if the wifi state is on, we decide to try and connect and return this is  the console
//The function checks the state of the wifi, 5 times;
//if every time the state of the wifi is on, that is true, we try to connect, 
//Notice that we run the test 5 times, if not we stop checking

function checkWifi() {
    if(wifiOn) {
        for(i = 0; i < 5;i ++) {
            console.log("Connecting to wifi...");
        }
    }
}

checkWifi();


//Here we have alist of girls in an array;
//So we want to use a program to help us tell us which girl is ours; basically locate her
//First, we store the girls names in an array;
//then we use a function, to check the girl;
//We use a for loop, that runs through all the girls in the array;
//We use an if statement, to check if the girl we want is in the array, and what happens if we find her;
//If we find girl - "Maggie"; We report, "Here is my girl"; 
//The if statement offers us a choice, in cases where we do not finf the girl; And action for the rest;
//So, we use the value returned using the loop, (the loop runs as many times as the number of girls in the array,);
//this means we go through all the girls,
//Notice, the loop goes on even after we find the girl we want;
// So we use the if statement, to state that if we find the girl we want, we report, if not, we proceed and report otherwise
//This illustrates an understanding of variables, arrays, functions, for loops, and if statements;




var names = ["Linsey", "Maggie", "Other"];

function checkGirl() {
    for (i = 0; i < names.length; i++) {
        if(names[i] === "Maggie") {
            console.log(names[i] + " :Here is my girl...");
        }else {
            console.log(names[i] + " :Not selected");
        }
    }
}

checkGirl();


//The function below registers Hotels;
//The function is set to take up three requirements necessary for registration;
//The user therefore must pass these three for a successful hotel registration;
//what happens if we do not have an id? //we get an undefined
//The function elicits a program that can be used to register anything we want; products, students, services,;
//basically items that are limited;





function registerHotel(hname, howner,hid) {
    let hotelName = hname;
    let hotelOwner = howner;
    let hotelId = hid;

    console.log("Hotel name: " + hotelName);
    console.log("Hotel Owner: " + hotelOwner);
    console.log("Hotel Id: " + hotelId);
}

registerHotel("Paradise", "Kimani");


//what if we want to add unlimited items;

function addItem(item) {
    console.log(item + ": Added");
}
//addItem("Kasarani") //This acts as a btn; when clicked, it picks a users value and adds it to the list; enabled by the function;

//What if we want to add many items - say 10;
//But if we use a for loop, we do not have the luxury of inputing many but different items at once;
//
for (i = 0; i < 10; i++) {
    addItem("Nairobi");
}

//Notice with the for loop, we only add one item 10 times;

//To add many items, we have to specify the items we want first and store them in a variable;

//say

let winners = ["John", "Ken", "Hellen", "Komondor", "Coriander", "Maggie", "Human"];

//we can help the user add these items first, then register them;

//assuming we are receiving real-time data- and we add a new winner after he or she is added;

//we will have a button - when clicked, after a value has been inserted, we add to the list of winners

//We have a function 

function addWinner() {
    let newWinner = winners.push("Shiko", "Terry");
    for (i = 0; i < winners.length;i++) {
        console.log(winners[i] + ": " + i);
    }
}

addWinner();









