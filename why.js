//Why did i start proramming? - I needed control
//What is my objective? - To be the leading provider of websites, web applications and software in Kenya & Africa
//What is the reason as to why? - I needed control - a computer is easy to, I just needed  to learn how to;
//So what is the why and what is the reason for the why? 


//Programming makes me feel like a god to a computer;
//With it I can create;
//To create God used commands; Let there be light.
//In Programming - we use commands; let t = 'light';
//For a command to be effective - work as intended
/* 
Must be 
1. Short.
2. Specific.
3. 
*/

//------------------------------------------------------------

//if someone asked me today - Denis, what is your God given ability?
//what are you good at?

//So there is - A God given ability; - 
//But first - what is a God given ability ?
//How do you identify it?
//And most importantly how can it be used - What was it's purpose;
//why do i have it?
//---------------------------

//Imagine - 
//Your body is the hardware - 
//Your spirit the software (Assume spirit = mind + heart);


//The hardware, as important as it is, is driven by software;
//So, my spirit, drives my body - 
//However, the desires of the body (sometimes) control - (drive) the spirit - 
//But what exactly does it mean - drive ?
//Drive - ?? Operate, direct, control, run, manipulate;?
//The things that the body needs or wants - `

//----------------------------------------------------
//Someone has said - you are what you listen to; 
//Another has said, - the things you love say who you are;
//What do I Love - ? 
/* 
1. Respect.
2. Order.
3. Cleanliness.
4. Perfection.
5. Truth.
6. Right.
7. Comfort.
8. Control.
9. Love.

*/
//Who am I if these are the things I love?
//A god


//----------------------------------------
//So what are the abilities of a god?
/*
1. To create. - To bring to life.
2. All knowing.
3. Everywhere.
4. All powerful.
5. 
*/

//How can I use these abilities?
//Before I use them, how can i activate them?
//But I am. I am a god. These abilities are already in me
//Meaning they are already at my disposal;
//Which means I can use them.



//-----------------------------------------------

//Assume you are the designer of your life - 
//How would be a good life look like - 
//What is it if you have it right now - you would not have a reason to pray ?
/*
1. I have work.
2. I have a healthy & loving family.
3. Free from fear.
4. Free from want.

*/

//----------------------------------------------
//Think of a system - 
//God created a human - a collection of systems;
//The body - hardware body parts and software - spirit;
/*
Every part - system has a:
1. Start point and end / stop point;
2. A function/objective.
3. Micro-tasks that work toward the main function.
4. Inputs and outputs. 
    a. All inputs are processed.
    b. Magnified Output = input magnified.
    b. Input checked - Output checked.
    c. Different Output = input changed.
    d. Good input = bad output.
    e. Bad input = good output.
    f. Example: Mastication - Mouth system. 
        i. Entry of solid food in mouth  = output - semi-liquid food.
        ii. There are enzymes, saliva, tongue, and teeth. 
        iii. Entry of food in mouth prompts saliva release.
        iv. Saliva has enzymes.
        v. Teeth breaks down food.
        vi. Tongue mixes food with saliva.
        vii. Each part must work well, otherwise the system will fail.
*/
//SYSTEM A
//Systems below are simple simulations of the general function.
//To advance a system means to get more specific - from general to specific; - deduction;

//A Mouth - 
//if system is working well - the boolean true is used.
let saliva = true;

let tongue = true;

let enzymes = true;

let teeth = true;

//food is the input - x parameter represents foodType
//expected output from food - semi-solid food - let semi-solidFood = y;

function processFood(x) {
    if(tongue && saliva && enzymes && teeth) { 
        let y = 'semiSolidRice';

        x = y;
        
        return y;
    }
    return 'Solid Food: Not Processed';
}

let mOutput = processFood('rice');
console.log(mOutput); 

//What is happening - i.e - What is the software commanding the hardware to do?
/*
If selected item's value is true, it means it is present and working.
All parts must be present and working, for the food to be processed.

Notice the software has options : two states; For if, and For if not;

if all parts = true - semiSolidFood as Output;
if not, = false - Not Processed - Solid food.

Also notice - the state of inputs - 
(i.e - parts as inputs) - are either true or false - working or not working.
*/

//----------------------------------------------------------
//SYSTEM B

//If output = semiSolidFood, proceed to next system - epistalsis

function formBolus(eInput) {
    if(eInput === 'semiSolidRice') {
        let formedBalls = 'bolus';
        return formedBalls;
    }
    return 'Unable to form balls.'
}

let eOutput = formBolus(mOutput);
console.log(eOutput);

// mOutput used as epistalsis system's input;
//typeof mOutput determines typeOf eOutput;
//Instance a - one part in mouth's system is not functional
//therefore - mOutput = 'Solid food : Not processed'
//Hence, mOutput !== eInput, thus, 
//eOutput === 'Unable to form balls;


//---------------------------------------------------
//Instance b ; all parts in mouth's system are true;

//mOutput === eInput, thus,
//eOutput === 'bolus'; 

//--------------------------------------------------
//SYSTEM C

//Stomach - 
//Here, two states of sOutput are expected too
//Digested food or Undigested food.
//typeOf sOutput is dependent on typeOf eOutput, which is dependent on typeOf mOutput


function digestFood(sInput) {
    if(sInput === 'bolus') {
        let digestReq = []; //Use to check specific stomach parts function.
        let dStatus = 'Digestion phase 1 status: Completed';
        return dStatus;
    }

    return 'Digestion phase 1 status: Incomplete.';
}

//let dStatus; //redeclare variable to make it global;
let sOutput = digestFood(eOutput); 
console.log(sOutput);


/*
instance a: 
eOutput === sInput , thus
stomach system runs successfully, completing phase 1 of the digestion process.

instance b: 
eOutput !== sInput, thus,
stomach system is incomplete;
*/

//----------------------------------------------------
//SYSTEM  D;
//Ileum -system
//Function - absoption of digested food into the body

//Here two states exist too: 
//Instance a: sOutput === Iinput - Food is absorbed;
//Instance b: sOutput !== Iinput - Food is not absorbed;

function absorb(iInput) {
    if(iInput === 'Digestion phase 1 status: Completed') {
        let aStatus = 'Food absorption status: Absorbed';
        return aStatus;
    }
    return 'Food absorption status: Not Absorbed';
}

let iOutput = absorb(sOutput);
console.log(iOutput);



//-------------------------------------------------
//SYSTEM E
//The colon

//Main function - absorb water - digest undigested food;
// if absorption status is :Not absorbed;
//Absorb water, and digest 
//else pass to excretion system - hold ready to be excreeted;

function cAbsorb(cInput) {
    if(cInput !== 'Food absorption status: Absorbed') {
        let colonProcess = 'Undigested food: Digested.';
        return colonProcess;
    }
    return "Waste ready for excretion.";
}

let cOutput = cAbsorb(iOutput);

console.log(cOutput);


//--------------------------------------------------------
//SYSTEM F

//The excretion system
//Any output from colon - should be excreted;
//To make it a little bit interesting - check if eContainer is full, half or empty


let exContainer = 60;

//A small process for the excretory container;


function poop(cOutput) {
    if(cOutput) {
        if (exContainer > 50) {
            let goPoop = "Pooping required soon...";
        }
        
            return 'No poop available.';
        
        
    }

    return 'input from colon: Absent';

}

let exOutput = poop(cOutput);
console.log(exOutput);


//A simple system that proceeds from false principles;
//A system starts from what state - on or off

let m = "Mary";

m = 'Love';

let i = false;

if(i) {
    console.log("False");
}


let s = true;

if (!s) {
    console.log("Lights Off");
    
}

    console.log("Lights on!");