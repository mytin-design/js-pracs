//First class Functions
//A function is considered a first class function, 
//if it can be created as a variable and used as such in the code

const foo = () => {
    return "Spoofy";
}

foo();

var myHi = function sayHello() {
    return "Hi";
}

myHi();

function greetings(sayHello, names) {
    return sayHello + names;
}

console.log(greetings(myHi(), ": Martin"));

//a function used as an argument in another function is called a call-back function
//A function that uses a call-back function is called a high-level function



var nameChanger = () => {
    return "Changing Computer Name...";
}

nameChanger();

var nameValue = () => "Devs";

nameValue();

var changedName = (nameChanger, nameValue) => nameChanger + " to " + nameValue;

console.log(changedName(nameChanger(), nameValue()));


//functions are created just like normal semaphores / variables  -
//and can be used throughout the code if they are global


 reg=()=>{
    class Student {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }

        //low level methods
        changeId(newId) {
            this.id = newId;
        }

        changeName(newName) {
            this.name = newName;
        }
//abstraction

//how are parameters dealt with in abstraction?
        changeStudent() {
            this.changeId(); //is the parameter passed or not, and if passed, a referenceError occurs, 
            this.changeId();
        }
    }

    class Teacher extends Student {
        constructor(id, name) {
            super(id, name);
        }
    }

const std = new Student("5591", "Denis M.K");
const t = new Teacher("301222", "Mrs Mwangi WM");

std.changeId(4482);
std.changeName("Mary MW");
//let newstd = std.changeStudent("4482", "Mary MK");
//et newstd = std.changeStudent();
//let all = std + t;
//can we display two objects at a time?
return t;

//return newstd; //returns undefined - why - my guess is - the changeId and changeName are called twice;


}

reg();
console.log(reg());



var a = "No matter how many variables you store me in, Im still letter A";

var b = a;

var c = b;

var d = c;

var e = d;

console.log(e);

//

var label = "Artist";

var impatient = label;

var angerIssues = impatient;

var crazy = angerIssues;

var inconsistent = crazy;

var timid = inconsistent;

console.log(inconsistent);


