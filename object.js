//OBJECTS
//Complex Data Type - Stores data in key-pair values
//Common in Object Oriented Programming - use of objects to store data

const denis = {
    "K.C.P.E": {
        Math : "B",
        English : "B",
        Kiswahili : "B+",
        Science : "B",
        "Social Studies" : "B",
        "C.R.E": "B"
    },

    "K.C.S.E": {
        Mathematics : "B",
        "English": "B",
        Kiswahili: "B",
        Biology: "B+",
        Chemistry: "B",
        Physics: "B+",
        History: "B+",
        "Computer Studies" : "A-"
    },

    University: {
        Grade: "Second Class Lower Division"
    },

    "Online Learning": {
        Grade: "Passed" 
    },

    displayDenis: function (){
        console.log(this["K.C.P.E"]);//when property is in quotes - brackets notation is used;
        console.log(this["K.C.S.E"]);
        console.log(this.University);
        console.log(this["Online Learning"]);
    }
}

console.log("Original Object Notation");
denis.displayDenis();

//create the above object using a class

class Student {
    constructor(kcpe, kcse, university, ol) {
        this.kcpe = kcpe;
        this.kcse = kcse;
        this.university = university;
        this.ol = ol;
    }

    //low level methods
    displayKCPE() {
        console.log(this.kcpe);
    }

    displayKCSE() {
        console.log(this.kcse);
    }

    displayUniversity() {
        console.log(this.university);
    }

    displayOl() {
        console.log(this.ol);
    }

    //super method

    displayAll() {
        this.displayKCPE();
        this.displayKCSE();
        this.displayUniversity();
        this.displayOl();
    }




    displayStudent() {
        console.log(this.kcpe);
        console.log(this.kcse);
        console.log(this.university);
        console.log(this.ol);
    }
}

//create object
//denis has already been declared;
let kcpe = [["Math", "B"], ["English", "B"], ["Kiswahili","B+"], ["Science", "B"],["Social Studies","B"],["C.R.E", "B"]];
let kcse = [["Mathematics", "B"],["English","B"],["Kiswahili","B"],["Biology","B+"],["Chemistry","B"],["Physics","B+"],["History","B+"],["Computer Studies","A-"]];
let university = ["Grade", "Second Class Lower Division"];
let ol = ["Grade","Passed"];
let deniss = new Student(kcpe, kcse, university, ol);

console.log("Class Instance/Object Notation");
deniss.displayStudent();


//These are two ways of creating objects;

//At this level, both consume the same amount of time to create;
//However it is important to note that objects (instances) created
//using classes have more functionality
//why?
//because classes have more functionality - assisted by the paradigms of
//1. Inheritance, 2. Polymorphism, 3. Abstraction, 4. Encapsulation

//illustrate each of the above paradigms

//1. Inheritance
//In Inheritance, objects inherit the data and methods in the class template;
//Inheritance is well illsutrated, if we have several instances/objects
//so that each object,though different, inherits (uses) the class's data/methods

//illustrate inheritance
//create a new object that has its own data, but inherits the class method;
let stevenPrimary = ["Grade, A"];
let stevenHigh = ["Grade", "A-"];
let stevenUniversity = ["Grade", "Second Class Upper"];
let steven = new Student(stevenPrimary, stevenHigh, stevenUniversity);

console.log("Steven's Records");
steven.displayStudent();

//Notice
//The Denis class is used as template for the creation of steven's object
//Thus, the instance created INHERITS all the components of the template;

//the class uses Denis, e.g displayDenis - This is not apt
//Consider using general terms, e.g student, patient, employees, instead of their names;
//so that instances names are the specific names of each student;


//class name was Denis, method name, displayDenis();
//change - class name Student, method name, displayStudent();

//2. Polymorphism
//morphism means change
//poly - means many

//thus - many changes

//polymorphism - same methods but different outputs

//in the above, we may decide to output something different for steven;
//that is instead of what is passed in the constructor

steven.displayStudent = function () {
    console.log(this.kcpe = "Excellent");
    console.log(this.kcse = "Good");
    console.log(this.university = "Wow");
    console.log(this.ol = "Nice");
}

console.log("New steven - polymorphism");
steven.displayStudent();

//In polymorphism - objects use the same method calls to elicit different behaviors;

//the displayStudent method displays marks and also comments

//3. Abstraction
//In abstraction, low level methods are combined and called under one super method;

//add low level methods;
//for example - a user may need specific grades per level at a time. and all of them at once
//so  - add a displayKCPE(), etc for each
//and a super method - displayAll();

console.log("Abstraction for steven's data");
//with abstraction, you can view specific level marks/operations
//eg

steven.displayKCPE();
//expected out put "Excelent";

//or we can generate an entire report
steven.displayAll();
//general report produced;

//4. Encapsulation

//Encapsulation is holding, storing, or compiling data and functions together;

//an object is a clear illustration of encapsulation - why
//an object has data and functions (methods) compiled under same curly braces;


//and thats it

//NB:
//Objects created using classes have more functionality;

