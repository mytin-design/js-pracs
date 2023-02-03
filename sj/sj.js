var x = undefined;
const arr = [1, "buy", [34, undefined, "hey"]];
let num = 8;

let y = 20;
 
while(y <= 20) {
    console.log("I am a number below 20");
}

for(y = 20;y <20;y--) {
    console.log(y);
}

var object = {
    "studentName" : "Denis",
    "StudentRegNo": 5591,

    "studentReport" : function () {
        console.log(this.studentName);
        console.log(this.StudentRegNo);
    }
}

//accessing data
object.studentName; //if you know the property 
object[StudentRegNo]; //used if the property name has a space
object.hasOwnProperty("studentName"); //returns true


var objectTemplate = {
    patientName : "name",
    patientId : "id",

    displayPatient : function () {
        this.patientName;
        this.patientId;
    }
}

var newobj = Object.create("Denis", "5559201");
console.log(newobj);

//classes

class Computer {
    constructor(type, rom, ram) {
        this.type = type;
        this.rom = rom;
        this.ram = ram;
    }

    displayComputer() {
        this.type;
        this.rom;
        this.ram;
    }
}

class Laptop extends Computer {
    constructor(type, rom, ram,model) {
        super(type, rom, ram);
        this.model = model;
    }

    displayComputer() {
        super.displayComputer();
    }
}

var instance = new Laptop("Pavillion", "1TB", "16gb", "Latest");
console.error(instance);


//document.getElementById();
//document.querySelector();
//document.querySelectorAll();
//document.getElementsByClassName();
//document.getElementsByTagName();

//,classList.add()
//.classList.remove();
//,classList.toggle();


//.setAttribute("attrName", "atrrValue");
//.appendChild()
//.removeChild();
//.createElement();

//arrow functions
let fname = () => console.log(y + x);
fname();

function myfunction (a,b) {
    console.log("My function");
    let sum = a + b;
    return sum;
}

myfunction(4,5);




if (true) {
    console.log("Its true");
}


if(false) {
    console.log("Its false");
}else if(true){
    console.log("Make it");
}else {
    console.log("Ok")
}


//.pop()
//.push()
//y+x
//y*x
//y-x
//y/x
//y+=x
//y-=x
//y*=x
//y/=x

if (y === x) {
    console.log("strick equality operator true");
}

if(y == x) {
    console.log("equality operator true");
}

if(y !== x) {
    console.log("strict inequality operator true");
}

if(y != x) {
    console.log("inequality operator true");
}

y > x;

x < y;

y = x;

x >= y;

y <= x;


//if you are comparing a value from multiple options, its best to use a switch 

//say we want to check presence of impurity b in five reagents

switch("impurity b") {
    case "reagent 1":
        console.log("Impurity in reagent 1");
    case "reagent 2":
        console.log("Impurity in reagent 1");
    case "reagent 3":
        console.log("Impurity in reagent 1");
    case "reagent 4":
        console.log("Impurity in reagent 1");
    case "reagent 5":
        console.log("Impurity in reagent 1");
    default:
        console.log("Checking for Impurities...");
}


//impurity b is checked against all the 5 reagents;

let value = 2;

switch(value) {
    case 1:
    case 2:
    case 3:
        console.log("Low");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Medium");
        break;
    case 7:
    case 8:
    case 9:
        console.log("High");
        break;
    default:
        console.log("Set value");
}


