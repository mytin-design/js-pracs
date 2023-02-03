var friend1 = "Tom";
var friend2 = "Two";
var friend3 = "Three";

//rather than creating a variable for each friend, we can store them in an array 

var friends = ["Tom", "Mia", "Lee"];
console.log(friends);


//the values of an array are called elements

//we use bracket braces to enclose array elements

var array1 = [];

//we use commas, to seaprate elements

//we can add as many values in an array as possible

var pet = "Coco";

var siblings = ["Luz"];


//

var activeUsers = ["Finn"];

console.log("Active");
console.log(activeUsers);


var characters = ["mario", "luigi", "peach", "bowser"];

console.log(characters);


var flavors = ["vanilla", "pistachio"];



var cats = ["whiskers", "tom"];

console.log(cats);



var themes = ["classic", "dark mode"];

console.log(themes);


var plans = [];

console.log("weekend plans: " + plans);



var players = ["Federer", "Messi"];

console.log("Players for the match:");

console.log(players);



var toDo = ["Feed Clawdius"];

console.log("To Do: ");
console.log(toDo);


var cars = ["Tesla", "BMW", "Macraren", "Lamborgini", "Rolls Royce", "Mercedez Benz"];
console.log("Cars I like: ");
console.log(cars);


var forecast = ['sunny'];

console.log(forecast);


var thrillers = ["Parasite", "Psycho"];

console.log(thrillers);


//an element is a value in an array

var playlist = [];

console.log("My playlist: ");
console.log(playlist);


var stars = ["polaris", "sirius"];
console.log(stars);



var shoppingList = [];
console.log(shoppingList);


var recentlyPlayed = ["Chet Baker", "A tribe called quest", "The smiths"];

console.log(recentlyPlayed);


var toppings = ["Mozarella", "salami", "pepperoni"];


var continents = [];

var countries = ["Romania", "Kyrgystan"];

var cities = ["Miami"];

var towns = [];


console.log(continents, countries, cities, towns);


var lunch = ["salad"];

console.log(lunch);


var students = ["Radu", "Lori", "Maria", "Helen", "Jose", "John"];

console.log(students);


var podcasts = ["RadioLab", "Reply All"];

console.log(podcasts);

var superheroes = ["Ben ten", "Batman", "Superman"];

console.log(superheroes);


var countries = ["Germany", "China"];
var cities = ["London", "Sydney"];


var ingredients;
console.log("Cookie ingridients:");
console.log(ingredients);


var shoppingList = ["bananas", "apples", "chocolate"];

console.log(shoppingList);



var missedCalls = [];

console.log(missedCalls);


var shoppingCart = [];

console.log(shoppingCart);


var recentlyWatched = ["Game of Thrones"];

var missedCalls = []; //an empty arrow


var toppings = ["Mozarella", "tops"];

console.log("My pizza toppings: ");
console.log(toppings);


var smoothie = ["spinach", "banana", "hem seeds", "avocado"];

console.log(smoothie);


var sports = ["Karate", "Jogging"];



//CHANGING VALUES WITH ARRAYS


var temperatures = [17, 20,26,24];

//every element in an array has a numbered position called an index

//plural -indices

//indices start at 0

console.log(temperatures[0]);

//so we can target any value in the array using indices

console.log(temperatures[2]);

//once we have accessed the value, we can change it


temperatures[2] = 25;

console.log(temperatures);

//we have changed value 26 to 25


//a string can have stringd, boolean and numbers


var friends = ["Kim"];
console.log(friends[0]);


//to update a value in an array, we access the value by its index, then assign another value

var options = [true, false];

var animals = ["cat", "dog"];


var lockCombination = [9, 4, 7];

var items = ["milk", "tomato", "apple"];
console.log(items [1]);


var even = [3, 4, 6];

even[0] = 2;


var topSpeeds = [100, 130, 240];
console.log(topSpeeds[2]);


var options = [true, false];

var michael = 13;
var anna = 20;
var tina = 5;

var candidates = [michael, anna, tina];

var testScores = [90, 85, 100];


var flavors = ["vanilla", "chocolate", "pistachio"];

flavors[2] = "strawberry";


//Thursday

var thursday = ["hp", "mac", "Asus", "Probook", "Lenovo"];

console.log(thursday[2] + " is a good gaming laptop");



var players = ["Meg", "Max", "Jill"];
players[1] = "Lukas";

console.log(players);


var background = "beige";

var text = "Salmon";

var colorScheme = [background, text];


var forecast = ["Sunny", "cloudy"];

forecast[0];


var flavors = ["vanilla", "chocolate", "pistachio"];

console.log(flavors[1] + " is the second value in the array");



var addresses = ["22 Baker Street", "London", "UK"];

var city = addresses[1];


var quizAnswers = [false, false, true, false];

console.log(quizAnswers[4]);
// expected output - undefined


var planets = ["mars", "mercury", "jupiter"];

var mercury = planets[1];


var topSpeeds = [100, 130, 240];

topSpeeds[2] = 240;

console.log(topSpeeds);


var scientists = ["Ada lovelace", "Margaret Hamilton", "Grace Hooper"];

console.log(scientists[2]);



var friends = ["Joey", "Mary"];

var goalReached = [false, false, true];


var ratings = [4.5, 5, 4];

console.log(ratings[2]);


var ages = [15, 25, 45];

var genres = ["fantasy", "adventure"];


var cars = ["Tesla", "BMW", "Saab"];

console.log([2]);

//expected output is [2] - which represents nothing of relevance

var goalReached = [false, true, false];

//update the last element to the boolean value true;

//we update a value in an array - by accessing the value by its index, then assigning another value


goalReached[2] = true;


var red = 100;

var green = 0;

var blue = 0;

var rgbColor = [red, green, blue];

console.log(rgbColor);




var s = true;

var m = false;

var l = false;

var sizes = [s, m, l];

sizes[2] = false;


//PUSHING AND POPPING ARRAYS

//we can add and remove values with arrays

//like in a to do list


//ex

//to add groceries

var toDo = ["call mom", "dishes"];

toDo.push("Groceries");


//push() function pushes values at the end of the array

//syntax = array.push(newValue);


//we can add several values by separating them using a comma 
//for example

var todo = ["dishes", "call mother"];

todo.push("groceries", "cook", "eat");

console.log(todo);



//to remove the last value from the value - we use the following function

//.pop()

//syntax = array.pop(newValue);


var todo = ["stuff", "other"];

todo.pop(); //removes the last value in the array

console.log(todo);


//we can assign the remove variable in a variable

//for ex

var chore = todo.pop();


console.log(chore);

/*

we use the ,push() function to add new values into an array,

the added values are pushed into the end of the array

and we can as many values as we want by separating them using commas



*/

var el = ["old", "older", "eldest"];

el.push("new");

console.log(el); // returns an array with the added value at the end


/* 
 we use the .pop() function to remove a value from an array

 we can save the removed value in a variable

 and display it in console or use it the code for something else;


 */


 var activeUsers = ["sue", "mike"];

 activeUsers.push("joe");

 console.log(activeUsers);



 var cookies = ["flour", "butter"];

 cookies.push("sugars");

 console.log(cookies);

 // we have added the value "sugar" - a string to the end of the array 
 //giving it an index position of 2

 var transactions = [-100, 5];

 transactions.push(2, 500);

 console.log(transactions);



 var ordersDelivered = [false, false, true];

 ordersDelivered.pop();

 console.log(ordersDelivered);




 var themes = ["classic", "dark mode"];

 var current = themes.pop();

 console.log(current);


 var doorCode = [2,5,0,0,1];

 var digit = doorCode.pop();

 console.log(digit);


 var numbers = [1,2];
 numbers.push(3);

 console.log(numbers);



 var toppings = ["mozarella"];

 toppings.push("salami");

 console.log(toppings);


 var forecast = ["sunny", "cloudy"];

 forecast.push("windy");

 console.log(forecast);



 var artist = ["tops"];

 artist.push("chris", "taylor");

 console.log(artist);



 var quizAnswers = [false, false, true, false];

 quizAnswers.pop();

 console.log(quizAnswers);



 var lottery = [3, 13, 37, 23];

 lottery.push(31,32);

 console.log(lottery);



 var characters = ["mario", "luigi", "princess peach"];

 player1 = characters.pop();

 console.log("Player 1: " + player1);



 var smoothie = ["spinach", "banana", "celery"];

 smoothie.push("avocado");

 console.log(smoothie);




 var players = ["Meg", "Max", "Lucas"];

 players.push("Jill");

 console.log(players);



var orderList = ["notebook", "pencil"];

orderList.push("eraser", "ruler");

console.log(orderList);


var pace = [4.5, 4, 5, 5.2];

var best = pace.pop();


console.log(best);


var devices = ["Iphone X", "Iphone 8", "Galaxy S8"];

devices.pop(devices);

console.log(devices);


var acceptCookies = [true, false];

var answer = acceptCookies.pop();

console.log(answer);


var destinations = ["New York", "Paris", "Madrid"];

destinations.push("Egypt", "China");

console.log(destinations);



var device = []


var quizAnswers = [false,false, true, false];
var lastAnswer = quizAnswers.pop();

console.log(lastAnswer);


var seatsPerRow = [20, 20, 14];
seatsPerRow.push(5);

console.log(seatsPerRow);



var chinese = 873;

var hindi = 370;

var spanish = 350;

var languages = [chinese];

languages.push(hindi, spanish);

console.log(languages);


var ratings = [4.5, 3];

ratings.push(5);

console.log(ratings);

//the added value is in the 3rd index position

var gold = "Nyah";

var bronze = "Sophia";

var silver = "Hina";

var winners = [bronze, silver];

winners.push(gold);


console.log(winners);



var colorScheme = ["lightBlue"];

colorScheme.push("orange", "gray");

console.log(colorScheme);



var themes = ["classic", "dark mode"];

themes.pop();

console.log(themes);

//remember the .pop() function removes the last element in the array


var green = false;

var yellow = false;

var red = true;

var trafficLights = [red, yellow];


trafficLights.push(green);



var transactions = [-100, 5, 20, 500];

var latest = transactions.pop();

console.log(latest);



var bingoAnswer = [16, 12, 22];

bingoAnswer.pop();

console.log(bingoAnswer);


//DECIDING WITH ARRAYS

var tasks = ["dishes", "windows", "vacuum"];

tasks.length;

//to get the number of values in an array - we use the following syntax

//array.length

console.log(tasks.length);

//expected output = 3


//we can store the length of an array in a variable


var length = tasks.length;


//then we can display the variable in the console

console.log(length);




//No matter the  number of values in the array the .lenght property counts them for us


var tasks = ["dishes", "windows", "cars", "floors", "laundry", "dusting", "vacuum"];


var lengther =  tasks.length;

console.log(lengther);




//even if the array is empty - the .length property gives us the number of values in the array


var tasks = [];

console.log(tasks.length); //expected output = 0


var tasks = ["dishes", "vacuum", "laundry"];

if (tasks.length > 0) {
    console.log("Urg more work!");

//the number of values in the array exceed the value specified in the condition thus, true, and the code block runs

}


//we can use the length of an array to create for loops that go through all of its elements

//for that we repear a loop as many times as there are elements in the array


var friends = ["Ana", "Eve", "Sam"];

for (var i = 0; i < 3; i++) {
    console.log(i);
}


console.log("/");


// so instead of specifying the number of times the loop should repeat,
//we use the number of values in the array using the array.length

 for (var i = 0; i < friends.length; i++) {
     console.log(i);
 }


 /* 

 The counter variable i stores the values 0, 1 and 2 as the loop repeats. But 0, 1, and 2 are also the indices of the elements in friends;


 So everytime the loop repeats, i stores an index of an element in the friends array. And we can use the index to access the element 

 */


 // the array.length counts items in our array

console.log("/");


 var items = ["milk", "tomato", "apple"];

 console.log(items.length);


console.log("/");



var family = ["Frank", "Monica", "Fiona", "Lip"];

family.pop();
family.pop();

console.log(family.length);

console.log("/");


var purse = ["wallet", "phone", "keys"];

purse.push("apple");
purse.push("tablet");

console.log(purse);

console.log("/");



var supplies = ["pencil", "book"];

for (var i = 0; i < supplies.length; i++) {
    console.log(supplies[i]);
}

console.log("/");


var books = ["48 LAWS OF power", "The art of seduction", "The superior man", "The game", "The riot", "The Upload"];

for (var i = 0; i < books.length; i++) {
    console.log("Fav book: " + i + " " + books[i]); //if you use parenthesis instead of square brackets, - error - "books is not a function"
}





































