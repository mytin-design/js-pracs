//VARIABLES
//GLOBAL, LOCAL AND BLOCK VARIABLES
//OBJECTS



//we can use the var, const, and let keywords to define variables;
//Variables are storage location for data;
//examples

var username = "Denis King'ori";

let password = 123456;

const oldPassword = 12223455;

//Notice that all variables have a predefined format
//a keyword that says what we are dealing with,
//A custom identifier - name of the storage location of the value
//An assignment operator, =
//And a value,  the value may include a variety of data types - number, string, undefined, null, boolean, 

//Let and const keywords are similar to the var, however have additional capabilities;
//Variables initialized using the var keyword are aceessible globally
//You may redeclare a variable initialized using the var keyword
//You self reassign it
//You may access it and change it from any part of the code base;

//for example

var user = "Denis";

function checkUser() {
    if (user !== "Mary") {
        user = "Mary";
        return user;
    }
}

console.log(checkUser()); //Expected output - "Mary";

//Notice - we access the varible, redeclare it and change the value; 

//THE CONST KEYWORDS
//Used for immutable values - that do not change
//Thus you cannot redeclare the variables 
//We can access the variables from all over the code block, but cannot change their values;
//see below


/*
const passcode = 1234;

function checkPass() {
    if (passcode !== 5555) {
        passcode = 5555;
        return passcode;
    }
}


console.log(checkPass());

*/


//Expected output; TypeError: Assignment to constant variable;
//In the above, we are trying to redeclare an existing variable; which we cannnot

//So, for the const keyword variables;
//The values are immutable - cannot be changed once declared;
//Cannot be redeclared once initialized;
//Can be accessed throughout the code base;

//let pStation = "Kiriko"; When this is run, the preceeding variable throws an error;
//syntaxError: Identifier "Pstation has already been declared";


let pStation = "Kiriko";

function checkPStation() {
    if (pStation !== "Karatina") {
        pStation = "Karatina";
        return pStation;
    }
}

console.log(checkPStation());

//However, notice that we can assign another value to the let variable; Also to to the var, but not the const
//So for the let keyword variables;
//We can redeclare them i.e use the same identifier name to create a similar or different value
//we can re initialize them;



//GLOBAL, LOCAL AND BLOCK VARIABLES
//Variables can be defined as global, local or block, based on their position and accessibility in your code base;
//A variable that is accessible throughout the code is called a global variable
//For example;

const global = ["password", "username"]; //Global level scope variable

function checkGlobal() {
    for (i = 0; i < global.length; i++) {
        let details = ""; //Local level scope variable;
        if(global[i] === "username") {
            let username = "Denis"; //Block level scope variable
            
        } else if(global[i] === "password") {
            let pass = "123";
            return "Name: " + username + " :: " + "Your passsword: " + pass;
        }
        continue;
    }
}

console.log(checkGlobal());

//Notice how we can access the global variable all over the code;
//Here we access and use, but we cannot change its value;


//A local variable - can be accessed throughout a function;
//A block level scope varibale can be accessed throughout the block, such as an if statement, ot loop;


let wifiStatus = true; //global

function connectWifi() {
    let connectionStatus = ""; //local
    while(wifiStatus) {
        let connecting = "Connected";//block
        let wifiName = "Mytin";//block
        connectionStatus = connecting;//block
        return "Wifi Connection to: " + wifiName + ": " + connectionStatus; 
    }
}

console.log(connectWifi());

var isOn = true;

function checkOn() {
    while (isOn) {
        //console.log("Wifi On");//This will loop forever
        return "Wifi On"; //This will run once; 
    }
}

checkOn();



//OBJECTS

const kiriko = [
    {
        voterName: "Denis Kingori",
        voterYearOfBirth: 1996,
        voterId: 33252323,
        voterPcenter: "Kiriko Primary School",
        voterPstation: "01"
}, 

{
        voterName: "Mary Mumbi Mwangi",
        voterYearOfBirth: 1973,
        voterId: 12780987,
        voterPcenter: "Kiriko Primary School",
        voterPstation: "02"
},

{
        voterName: "Winfred Wachinga King'ori",
        voterYearOfBirth: 1997,
        voterId: 34392212,
        voterPcenter: "Kiriko Primary School",
        voterPstation: "03"
}
];

console.log(kiriko[0].voterId);
let enteredIdValue = 33252323;

function checkVoter() {
    for(i = 0; i < kiriko.length;i++) {
        if(kiriko[i].voterId === enteredIdValue) {
            return kiriko[0];
        }
        continue;
    }
}


console.log(checkVoter());



//The object above has voter properties: name, year of birth, voterid, voter polling center, and polling station;
//Basically a small database;
//thr code below loops through the database, checks if the current selected value is similar to an entered value, and if so, returns
//that user's information


//an improved version would use the id ; as an access code for user information

console.log("Access data using Id");

//userdbase[0]["id"]; -Cannot access usedbase before initialization error

let userdbase = [
   
   
   { userid: 252323,
    useryob: 1996,
       voterInfo: {
        votername: "Denis King'ori",
        voterid: 252323,
        voterpcenter: "Kiriko Primary School",
        voterpstation: "01",
        yearofbirth: 1996
    }

   },

   {
    userid: 23352623,
    useryob: 1956,
    voterInfo: {
        votername: "Kinyua King'ori",
        voterid: 23352623,
        voterpcenter: "Ngandu Primary School",
        voterpstation: "01",
        yearofbirth: 1956
    }
},

  {  userid: 13573864,
    useryob: 1995,
      33573864: {
        votername: "Mary Wangari",
        voterid: 13573864,
        voterpcenter: "Kiriko Primary School",
        voterpstation: "03",
        yearofbirth: 1995
    }

},

   { userid: 36884215,
    useryob: 2001,
       36884215: {
        votername: "Karen Njeri",
        voterid: 36884215,
        voterpcenter: "Kiriko Primary School",
        voterpstation: "02",
        yearofbirth: 2001
    }

}
]


//If the entered value is similar to any registered id, show user pertaining that user;

//console.log(userdbase[33252323]);
//console.log(userdbase[0].userid);

//we want to target the id, and use it to access containing data;

let enValue = 13573864;


function checkId() {
    for (i = 0; i < userdbase.length; i++) {
        
        if (userdbase[i].userid === enValue){
        console.log(userdbase[i]);
            
        }
        //Testing component: console.log(userdbase[i].userid);
        console.log("The voter id: " + enValue + " was not found");
        //return "The voter id: " + enValue + " was not found";
        //continue;

        
    }

    

    
    
}


//console.log(checkId());
console.log(checkId());
//The function checks for user data using their id;
//If the id entered matches that in the records, the respective user data is displayed;
//BUG - The function has no option for users whose id is not found;
//At this instance the function assumes every id entered will be found




//GOING ON TO  SIMPLER EXAMPLE

//Objective
//Object with student names
//Go through all the names in our records; - using a for loop
//check if the name you want exists in the records - using an if statement
//access student name
//house all this code and provide user with options using a function 
//if name does not exist in the records - indicate

const stNames = [
    {
        stdName: "Joy Muthegi"
    },

    {
        stdName: "Denis Mytin"
    },

    {
        stdName: "Maina Steve"
    }
]

let sname = 'Maina Steve';
function dispName() {
 for (i=0; i < stNames.length;i++) {
     //return stNames[i]; -Notice that when you use the return keyword, the loop runs once and displays only the first item
    if (stNames[i].stdName === sname) {
        console.log(stNames[i].stdName + " Found");
    }

    console.log(stNames[i].stdName + " Not Found");

    }
}

dispName();

//The above object and function work together to display student names;

//Notice, if we use return, we stop the loop after the first loop
//A bug appears with the use of console.log() - the loop runs and returns a value for every item in the array;



//WHILE LOOPS
//A while loop checks if a condition is true and runs a specified code;
//For example,

//1 - while wifi is on, request user to connect to available wifi
//2- while connected to charger, reduce brightness
//3 - while brightness is over 90% - warn user of eye stuff
//4 - while batteryLevel < 10%, connect to the charger.
//4 - while p is pressed, innerHTML = "p" - an example of an infinite loop, that stops when the button is unpressed;
//5 - while inLove - give; - 
//For as long as the condition remains true, a certain code block will always run unless the condition changes;
//that is:

let inLove = true;

while(inLove) {
    console.log("Love thy neighbor as you love thyself");
    break;
}


let taste = "sweet";

while (taste === "sweet") {
    console.log("Hmmm, this is sweet!");
    taste = "salty";
}


