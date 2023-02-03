//Bjame stroustrap - look at something and and yourself, why it was created?

//the for loop
//One of the control loops

//why are they called control loops

//to control is to exercise restraint, or direction over, dominate, command / test- check, experiment

//say we have a set of data - 

var arr = ["developer 001", "developer 002", "developer 003", "developer 004"];

//say we have 4 developers 

//use a for loop to control this data set - 

//to control - to check;

//check number of developers available

for(let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
    //whats happening?
    //a counter is set at zero
    //a condition is set such specifying - counter is less than counter
    //so for each loop, the condition runs - checking if - the counter is still less than the number of items in the array
    //if the counter is less, then the loop continues, and otherwise if not;
    //for each loop, the counter is added by 1, incremented
    //so that if the counter was 0 during the first loop, 
    //it is going to be 1 in the second
    //i.e first run - i = 1; 1 < numbersOfItemsInArray;1 + 1;
    //second run - i = 2; 2 < numbersOfItemsInArray; 2 + 1; and so on;
    //in the curly braces - so for each run - something happens  - it could be anything
    //one- items in the array could be listed;
    //two - the array number of items can be used to control the function of another
    //i.e if number of values in array = 10,  use this to control another set of instructions;
    //for example - 600 students in a list;
    //one - create a lesson plan for each
    //two - for this number of times, do x

    for(let y = 0; y < arr.length;y++) {
        //notice - this is totally unrelated with developers
        //the number of developers in the list is used to determine the number of times hallelujah is written;
        console.log("Sing Hallelujah!");
    }

    //example two
    var hours = [1, 2,3,4,5,6,7];

    for (let p = 0; p < hours.length; p++) {
        //for every hour, a bell is run;
        //when an hour is reached, an action occurs;
        //number of hours are used to direct how bells are rung; - a control loop;
        console.log("Ring bell");
    }

    //expected output - the loop lists all the items in the array - one after the other - "developer 001",  and so on 
}

//in this scenario
//we are listing items in an array
//basically we are 
//checking - the number of values - (checking)
//listing them in order - from the first to the last - (direction);
//the above list - shows the values from the first to the last - 
//what if we wanted the last to the first ?then the direction would have changed - 

for(let x = 5; x > arr.length;x--) {
    console.log("Find me");
    //whats happenning?
    //a counter is defined at 5;
    //a condition - counter is greater than the number of items in the array;
    //if the condition is true, subtract the value of counter by 1;
    //the value of counter is used in the condition, to decide, whether its met;
}

for(let t = 10; t > 0; t--) {

    //if the counter is greater than something, anything, then something should happen;
    console.log("Write down");
}


//ex

var current = 5;

for(let c = 10; c > current;c--) {

    //loop returns that current is good, until its not,
    //in such a loop - we assume that current should never go below 5;
    console.log("Current's in good condition");
    console.log("Conducting electricity");
}


var pages = 10;

for(let pa = 20; pa  > pages; pa--) {
    console.log("Pages limit reached");
}








//check for the existence of a developer 

let myManger = "developer 002";

