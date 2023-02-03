/* 
for loop counts upward from 1 to 5. Lets learn how to change it 
to loop downward from 5 to 1;

*/

for (var i = 1; i < 6; i++) {
    console.log(i);
}


var s =  "/";
//we change the counter variable to 5;

for (var i = 5; i < 5; i++) {
    console.log(i);
}

console.log(s);
//now we change the condition so that the loop stops when i > 0;

for (var i = 5; i > 0; i--) {

    //every time the code block is run, the value is decreased by one;
    console.log(i);

}


//so that 5 moves to 1;
//if the value is incremented for each code block, then the loop runs infinitely


console.log(s);


for (var i = 5; i >= 0; i--) {
    console.log(i);
}

console.log(s);


for (var i = 10; i > 5; i--) {
    console.log(i);
}

console.log(s);


for (var i = 30; i > 25; i--) {
    console.log(i);
}


console.log(s);

for (var i = 5; i >= 1; i--) {
    console.log(i);
}






