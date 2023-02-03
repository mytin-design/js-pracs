
/*
let man = "Superior";
let mac = "inferior";

if(man = "Superior") {
    mac = "inferior";
    console.log(mac);
}else {
    mac = "Superior";
    console.log(mac);
}

console.warn("Stop !");
console.error("Error !");

process.stderr;

var v = x;
var a = boy;
var  s = small;
var e = elo;
var q = qwerty;
var z = zippy;
var w = wiper;
var d = door;
var x = xray;

let u = us;
let t = toil;
let r = root;
let p = poise;
let b = buy;
let c = call;
let m = minion;
let i = index;
let o = olive;
let x = xray;

const f = foo;
const a = alice;
const e = elctro;
const j = jojo;
const k = kei;
const l = el;
const a = ae;
const v = vii;
const _6 = 88;
const _i = mumu;
const inSide = 'internal';
const n_p = 56;
const n-p = 89;
const loco = 9;
const batteryLow = c < 10;




var item = cup;
var item1 = plate;
var item2 = spoon;
var item3 = water;
var item4 = leche;
*/



let spanishWords = ['aqua', 'leche', 'bebo', 'nino', 'nina', 'come', 'tu', 'erres'];

function match() {
    for(i = 0; i < spanishWords.length; i++) {
        switch (spanishWords[i]) {
            case 'aqua':
                console.log("water");
            case 'leche':
                console.log('milk');
            case 'bebo':
                console.log('drinks');
            case 'nino':
                console.log('boy');
            case 'nina':
                console.log('girl');
            case 'come':
                console.log('eats');
            case 'tu':
                console.log('you');
            case 'erres':
                console.log('are');
            default:
                console.log('Word not found');
        }
    }
}

match();


let names = ['Karis Magic','Pesh', 'Victor O', 'Deno', 'Jeff', 'Ken'];

function matchJob() {
    for(i = 0; i < names.length; i++) {
        switch (names[i]) {
            case 'Deno':
                console.log(names[i] + ' is a UI/UX Designer');
                break;
            case 'Karis Magic':
                console.log(names[i] + ' is a Computer Engineer');
                break;
            case 'Pesh':
                console.log(names[i] + ' is a Chef');
                break;
            case 'Victor O':
                console.log(names[i] + ' is an Operations Manager');
                break;
            case 'Jeff':
                console.log(names[i] + ' is a Computer Operations Expert');
                break;
            case 'Ken':
                console.log(names[i] + ' is an IT expert');
                break;
            default:
                console.log("User not found.");
        }
    }
}

matchJob();


//The above functions takes a name and matches it to a specific job role

let key = ['1', '2','3','4','5','6', '7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function keyPressed() {
    for(i = 0; i < key.length; i++) {
        switch (key[i]) {
            case '1':
                console.log('1');
                break;
            case '2':
                console.log('2');
                break;
            case '3':
                console.log('3');
                break;
            case '4': 
                console.log('4');
                break;
            case '5':
                console.log('5');
                break;
            case '6':
                console.log('6');
                break;
            case '7':
                console.log('7');
                break;
            case '8':
                console.log('8');
                break;
            case '9':
                console.log('9');
                break;
            case '0':
                console.log('0');
                break;
            case 'a':
                console.log('a');
                break;
            case 'b':
                console.log('b');
                break;
            case 'c':
                console .log('c');
                break;
            case 'd':
                console.log('d');
                break;
            case 'e':
                console.log('e');
                break;
            case 'f':
                console.log('f');
                break;
            case 'g':
                console.log('g');
                break;
            case 'h':
                console.log('h');
                break;
            case 'i':
                console.log('i');
                break;
            case 'j':
                console.log('j');
                break;
            case 'k':
                console.log('k');
                break;
            case 'l':
                console.log('l');
                break;
            case 'm':
                console.log('m');
                break;
            case 'n':
                console.log('n');
                break;
            case 'o':
                console.log('o');
                break;
            case 'p':
                console.log('p');
                break;
            case 'q':
                console.log('q');
                break;
            case 'r':
                console.log('r');
                break;
            case 's':
                console.log('s');
                break;
            case 'u':
                console.log('u');
                break;
            case 'v':
                console.log('v');
                break;
            case 'w':
                console.log('w');
                break;
            case 'x':
                console.log('x');
                break;
            case 'y':
                console.log('y');
                break;
            case 'z':
                console.log('z');
                break;
            default:
                console.log("Character not found!");
        }
    }
}

keyPressed();

//Notice the character t has not been declared;
//So, the default display statement is outputed;



/*
function  find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; //smaller than all other numbers
    for(let num of nums) {
        if(num > max_num) {
            //(Fill in the missing line here:);
            max_num += num;
        }
    }
    return max_num;
}

find_max(6);
*/
//create a program that replaces the names of employees with new names

//AFTER, CREATE A Pogram that adds a second name to employee names;


let employees = ['Mary', 'John', 'Ken', 'Martin', 'Karen', 'Jeff', 'Monicah'];

function replaceName() {
    for(i = 0; i < employees.length; i++) {
         //console.log(employees[i]); //progrram picks values by index position and returns value
         switch (employees[i]) {
            case 'Mary':
                 employees[i] = employees[i] + " Wangari";
                 //console.log(employees);
                 break;
            case 'John':
                employees[i] = employees[i] + " Githee";
               // console.log(employees);
                break;
            case 'Ken':
                employees[i] = employees[i] + " Kinyua";
               // console.log(employees);
                break;
            case 'Martin':
                employees[i] = employees[i] + " Njuki";
                break;
                //console.log(employees);
            case 'Karen':
                employees[i] = employees[i] + ' Njeri';
                //console.log(employees);
                break;
            case 'Jeff':
                employees[i] =  employees[i] + ' Kuria';
                //console.log(employees);
                break;
            case 'Monicah':
                employees[i] = employees[i] + ' Wanjiru';
                console.log(employees);
                break;
            default:
                console.log("Name not found!");
         }
         
     }
}



replaceName();


/*
//let username = 'denismytin';
//let password = 1234567890;

function checkDetails(username, password) {
    if(username === 'denismytin') {
        `
    } else if(password  === 123456789) {
        while (password.length < 10) {
            return "weak password";
        }
        
    }
    return "Recheck details";
}


console.log(checkDetails('denismytin', 1234567890));


*/

