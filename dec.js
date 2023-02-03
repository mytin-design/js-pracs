function myname(greet) {
    console.log(greet + " Martin");
}

myname("Hey");



//2022/23/12
//for loop use cases
//1. if i want to go through a list of elements
//2. if i want to go through a list and return a specific item
//3. if i want to repeat an action a number of times - objective
//bjame stroustrap - c++ founder says - look at something and ask yourself, why as it done
//why was the for loop created?
//x=y;for x<z x++
let t = 0;
let items = [1,2,3];
if(t < items.length) {
    console.log("Kick her");
 t++;   //this cannot repeat - why? because the if is true once and thats it, 3 > 0, so the condition runs
 //again the if condidition isnt designed to repeat;
 //but your guess is as good as mine; this could be the reason why the for loop was created;
 //i mean, the if condition is the basis of most decisions - so it must have been discovered first right?
 //then i'm sure Bredan Eich encountered this intance, where he would have wanted the "kick her" statement to be repeated a num of times
 //notice the set up is the same, we just use a new keyword, and arrange the components in such a manner that fulfills the desired function

}

for(var y = 0; y < items.length;y++) {
    console.log("Send message"); //send message this num of times - 3 times;
    //the array just maps the number of times the code block is going to be executed;
}

let u = 0;
let numofrounds = [1,2,3,4,5,6]; //or instead of using an array - just use a number

for(u = 0; u < 6; u++) {
    console.log("Run"); //it will repeat 6 times;
    //i think an array is useful when we have a list of items to go through
    //and where each item has some purpose in the code;

}

//say we want to send same message to different people
let people = ["Denis", "Chris", "Mbuthia"];
for(var p = 0; p < people.length;p++) {
    //for each name - send a message
    console.log("Hi " + people[p]); //expected output - Hi Denis, Hi Chris ...etc
}
//or different messages to same person

let msg = ["Hi", "Hey", "Babe"];
let m = 0;

for(m=0;m < msg.length;m++) {
    console.log(msg[m] + " Linsey"); //expected output - Hi Linsey, Hey Linsey ..etc
    if(msg[m] === msg[2]) {
        console.log("Linsey, hey " + msg[m]);
    }
}

//begs the question of how about sending different messages to different people?