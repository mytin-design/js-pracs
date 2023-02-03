let x = "loyal";

while (x) {
    console.log("Trust...");
    x = 'unloyal';
    break;
}

//What is the purpose of the while loop?

//A while loop - runs /repeats a specified code block for as long as
//a specified condition is true;

let tokens;

tokens = 1;

/*while(tokens > 0) {
    console.log('Lights on...');
    tokens = 0;
}
*/

//using if and while loops

while(tokens > 0) {
    console.log('Lights on...');
    if (tokens = 0){
        console.log('Lights turned off!');
        break;
    }
}


let uname = "maryagnesmumbi@gmail.com";
let pass = "Mary12780790";

//A simple error - 
//Use of the "=" operator, instead of the "===" equality operator
//Practice practice practice, and be not wise in your own eyes;


/*
if(uname = "maryagnesmumbi@gmail.com") {
    console.log("Next");
} else if(pass =  "Mary12780790") {
    console.log("Logging in now...Please wait...");
} else {
    console.log("Incorrect password or username");
}





//I think the if statement should be used to check one var at a time?
//For example we first check the username


if(uname = "maryagnesumbi@gmail.com") {
    console.log("Next...");

} else {
    console.log("Incorrect password:");
}



if(pass = "Mary12781790") {
    console.log("Logging in now...Please wait...");

} else {
    console.log("Incorrect Password:");
}

*/

//error rectified for the first block of code in enclosed comments for if statements
//copied as is...

if(uname === "maryagnesmumbi@gmail.com") {
    console.log("Next");
} else if(pass ===  "Mary12780790") {
    console.log("Logging in now...Please wait...");
} else {
    console.log("Incorrect password or username");
}
   
/* The above code outputs "Next", illustrating that 
the username matches the specified variable

Problem: The if statement ends at this point; why?

The if statement has three sections:
1. The if keyword ;
2. The condition -in parenthesis;
3. The code block - in curly braces;

general syntax:

if(condition) {
    code block;
}

See example below;
*/
let isOn = true;
if (isOn) {
    console.log("Wifi is On.");
}

/*
The example above illustrates an if statement at work;

What exactly is happening?
The if statement condition checks whether the conditio is true;
if the condition is true, the code block in the curly braces runs;

What if the condition is false?;
see below...
*/
let isSunday = false;

if(isSunday) {
    console.log("Keep the Sabbath day holy!");
}

/*
Notice - when condition is false, the code block is not executed;
is skipped- 


*/

/* 

An if statement in the above runs if and only when a condition is true;

If the condition is false, an if statement skips the code block;


----------------------------------------------

NOW WhAT IF?
We want to have an output when the condition is false?

To achieve this, we introduce a new section, called: the else statement;

thus, the new formula is called: 
the if else statement

it has four sections:
1. The if keyword;
2. The condition - in parenthesis;
3. The first code block - in curly braces;
4. An else keyword;
5. The second code block - in curly braces; 
syntax of the if else statement :

if (condition) {
    code block 1;
} else {
    code block 2;

}

An example is shown below;

*/
let child;
child = false;

if(child) {
    console.log("This is a child");
}else {
    console.log("This is not a child");
}

/*
Change the value of the child variable and see what happens;

if the value of child is true, the first code block runs;

The function of the if statement ends if the condition is true;

If the condition is false, i.e the value of child is false,
then, the first code block cannot be run so the second runs;



Notice- For a variable with two states, an if else statement works just fine;
however, what if a variable has more than two states?


For example;
water may be cold, warm or hot;
To assign these states, we can use numbers - temp values; such as;

cold = 0;
warm = 5;
hot = 10;

An if statement caters for variables with one state, if else statements cater for variables with two states, for a variable with more than two states, i.e three, four or twenty;
we use a formula or decision making tree called:
The else if statement;

Notice, that we are just adding an extra section to what we already have to cater for additional scenarios;
So that: the else if statement has the following sections:

1. The if statement - has an if keyword, a condition, and a code block
2. The else if statement - 
-has the else if keywords;
-the condition 2;
-the code block 3;
3. The else statement - has the else keyword, and a code block;

--general syntax - 

if (condition 1){
    code block 0;
} else if (condition 1) {
    code block 1;
}else {
    code block 2;
}

example:
*/

//we create one variable and use it to make comparisons throughout the code base;


let waterTemp = 0;

if(waterTemp === 0) {
    console.log("Water temperature: cold");
} else if(waterTemp === 5) {
    console.log("Water temperature: warm");
}else if(waterTemp === 10) {
    console.log("Water temperature: hot");
} else {
    console.log("Water temperature: unknown");
}

//expected outputs;
//the if statement runs if the value of waterTemp is equal to 0;
//the else if statement runs if the value of waterTemp is equal to 5 or 10;
//the else statement runs if the value of waterTemp has not been defined;


/* Basically,  if statements are used by programmers to define specific instructions for the computer to process

such that, if x is y, then y is x; or 

if x is not equal to y, then y is not equal to x;

if cup is red, store in red box;

if red box is full, create a new red box with a numbered filename;
if space is full, prompt user to release some storage;
if user does not release space, do not create red box, do not store red cup, and red cup should not be created;

//This way we learn that in a computer, every action has an effect, and every effect precedes an action. 

*/

