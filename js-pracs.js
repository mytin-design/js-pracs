/*function main() {
    var girlName = parseInt(readLine, "Karen");
    switch("girlName") {
        case "Karen":
            return "She is afraid of me or wants to revenge";
        case "Linsey":
            return "She fears me. She would want to but she cannot";
        case "Maggie":
            return "She is a kid";
        case "Mumbi":
            return "Easy to get to";
        default:
            return "Stay single, tf!";
    }
}

console.log(main("Linsey"));


var girlType = "Light";
function checkType() {
    var i = 0;
    for(i = 0; i <=10; i++) {
        console.log(girlType);
    }
}

*/

//Money saving app
/*const incomePerDay = 1200;

const noOfDays = 14;

const perDaySpending = 100;

const totalSpent = perDaySpending * noOfDays;

const totalIncome = incomePerDay * noOfDays;

const savings = (30/100) * incomePerDay;

const remainingIncome = totalIncome - (savings + totalSpent) ;

console.log(remainingIncome);
*/

//balanced diet app checker

//if user eats any of : fruit, water, proteins, carbs, vitamins, fats, minerals

/*const proteins = ["meat", "chicken", "mutton", "beans", "peas"];

const vitamins = [["fruits",["mangoes", "avocado", "orange"]], "greens" ];

const carbs = ["rice", "ugali", "sugar", "flour"];

const water = "water";

function check(foodTypes) {
    if(foodTypes === proteins && foodTypes === vitamins && foodTypes === carbs && foodTypes === water) {
        document.write('Balanced diet!');
    }

    document.write('You missed a balanced diet today!');
}

console.log(foodTypes("meat", "water", "rice", "mangoes"));


*/





//Events

//document.querySelector('html').addEventListener('click', function(){
  //  alert('You clicked me!')
//})

//the above is same as:

/*let myHTML = document.querySelector('html');

myHTML.addEventListener('click', function(){
    alert('Ouch! You need to stooop!')
})
*/

//we have used anonymous functions

//we can also use arrow functions


//document.querySelector('html').addEventListener('click', () => {
  //  alert('Alright. You need to stop poking me now!')
//})


//clicking an image to show the next image

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.jpg') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.jpg');
    }
}


let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');

    localStorage.setItem('name', myName);

    myHeading.textContent = 'Mozilla is cool, ' + myName;
}


if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');

    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}


myButton.onclick = function() {
    setUserName();
}


