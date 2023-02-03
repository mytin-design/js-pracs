
var currentTime = lessonFourAlarm;


var wakeAlarm = 0500;

var breakfastAlarm = 0640;

var lessonOneAlarm = 0800;

var lessonTwoAlarm = 0840;

var lessonThreeAlarm = 0920;

var lessonFourAlarm = 1000;


if (currentTime === wakeAlarm) {
    console.log("Wake up!; It is: " + wakeAlarm);
} else if (currentTime === breakfastAlarm) {
    console.log("Its time for breakfast!");
} else if (currentTime === lessonOneAlarm) {
    console.log("Lesson One");
} else if (currentTime === lessonTwoAlarm) {
    console.log("Lesson two");
} else if (currentTime === lessonThreeAlarm) {
    console.log("Lesson Three");
} else if (currentTime === lessonFourAlarm) {
    console.log("Lesson Four")
} else {
    console.log("Alarm not set");
}


//var file = "photo";


/*if(file === "song") {
    let file = "mp3 format";
    console.log("File is: " + file);
}else if(file === "video") {
    let file = "mp4 format";
    console.log("File is: " + file);
}else if(file == "photo") {
    let file = "Png format";
    console.log("File is: " + file);
}else {
    let file = undefined;
    console.log("File format: " + file);
}

*/

/*
function check(type) {
    switch(type) {
        case "song":
             return type = "File format: mp3 format";
        case "video":
            return type = "File format: mp4 format";
        case "photo":
           return  file = "File format: Png format";
        default:
           return file = "File format: " + undefined;

    }
}


console.log(check("photo"));
*/


var print = ["docx", "pdf", "xlsx"];

if(print[2] === "") {
    print.push("js");
    console.log(print);
}


var time = "now";

var work = "programming";

var job = "Online Writing";

var girlFriend = "none";

var amount = 845030;

var home = "Kasarani";

var house = "Olive house";

var name = "Denis King";

console.log(name + "'s work is " + work + ".");





var userName = "Denis";

var message = "Welcome to Akkadian, ";


console.log(message + userName);



var genCode = "QWNGHT322R";

var genMessage1 = " Confirmed. " + "Ksh ";

var receivedAmount = 500.00;

var genMessage2 = " from your MPESA has been used to partially pay your outstanding FULIZA M-PESA. Your available Fuliza M-PESA limit is Ksh ";

var fulizaRemaining = 503.72;

var genMessage3 = ". M-PESA balance is Ksh ";

var mpesaBalance = 200.00;


console.log(genCode + genMessage1 + receivedAmount + genMessage2 + 
    fulizaRemaining + genMessage3 + mpesaBalance);



var currentRentDue = 21500;

var monthlyRent = 9000;

var rentDue = currentRentDue + monthlyRent;

var mpesaAmount = 845030;

var payRent = mpesaAmount > rentDue;

if(payRent) {
    let newMpesaAmount = mpesaAmount - rentDue;

    console.log("Rent Paid. New M-PESA amount is Ksh. " + newMpesaAmount);
} else {
    console.log("Ksh. " + mpesaAmount + " is not sufficient for paying your rent balance currently at Ksh. " + rentDue);
}


const regNo = "I20/3871/2015";

const studentName = "Denis King";

let currentSemester = "2nd";

let chemicalThermodynamicsMarks = 10;

let atomicChemistryMarks = 10;

let enzymylogyMarks = 10;

let totalStudentMarks = chemicalThermodynamicsMarks + atomicChemistryMarks + enzymylogyMarks;

let pass = totalStudentMarks > 40;

let retake = totalStudentMarks < 40;


if(pass) {
    console.log(`${studentName},  of REG NO: ${regNo}: Passed.`);
}else if(retake) {
    console.log(`${studentName}, of REG NO: ${regNo}:  Retake.`);
}

//arrays

const cars = ["Saab", "Volvo", "BMW"];

//joining arrays using the concat() method

//general syntax
//array1.concat(array2, array3, ....., arrayX);

const arr1 = ["Cecile", "Lone"];

const arr2 = ["Emil", "Tobias", "Linus"];

const arr3 = ["Robin", "Denis"];

const children = arr1.concat(arr2, arr3);



console.log(children);


//copyWithin();

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const copied = fruits.copyWithin(1,0);

console.log(fruits);


const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2,0,2);

console.log(fruit);




var mood = "healthy";

if(mood === "healthy") {
    console.log("Going to the gym today");
}else {
    console.log("Netflix and pizza tonight");
}


//every()

const ages = [32,33,16,40];

const check = ages.every(checkAge);

function checkAge(age) {
    return age > 20;
}

console.log(checkAge(12));


const survey = [
    {name: "Steve", answer: "Yes"},
    {name: "Jessica", answer: "Yes"},
    {name: "Peter", answer: "Yes"},
    {name: "Elaine", answer: "No"}
];


let result = survey.every(isSameAnswer);

function isSameAnswer(el, index, arr) {
    if(index === 0) {
        return true;
    }else {
        return (el.answer === arr[index - 1].answer);
    }
}

console.log(result);


const houses = ["Olive", "Tamgo", "Blessed", "Coon"];

const checker = houses.fill("Psalms 150", 2, 4);

console.log(houses);


const ager = [32, 33, 16, 40];

const resultOf = ager.filter(checkAdult);

function checkAdult(ageOf) {
    return ageOf >= 18; 
}


console.log(checkAdult(18));


//find() -find the value of the first element with a value over 18;

const nums = [3, 40, 18, 20];

function find(num) {
    return num > 40;
}

console.log(find(18));




const _resolverFilename = "module";






























