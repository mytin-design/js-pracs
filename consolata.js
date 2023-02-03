let school = "Consolate Primary School";

let role = "Laboratory Technician";

let appointmentDate = "1st February 2023";

let jobDescription = {
    f1: "Write Standard Operating Procedures",
    f2: "Buy Reagents",
    f3: "Prepare reagents",
    f4: "Write Laboratory Safety Rules",
    f5: "Label reagents",
    f6: "Storage methods",
    f7: "Preparing experiments",
    f8: "Research",
    f9: "Laboratory set up",
    f10: "Control reagents",
    f11: "Cleaning reagents - Detergents, Methylated spirit",
    "Lab equipments": {
        le1: "Test tubes",
        Beakers: {
            "b1": "50 ml",
            b2: "100ml",
            b3: "250ml",
            b4: "500ml",
            b5: "1litre"
        },
        le3: "Gas burners - gas chambers",
        le4: "Burnsen burners",
        le5: "Measuring Cylinders - Plastic/glass",
        le6: "Tripod stands - used when heating a solution in a beaker",
        le7: "Pipettes",
        le8: "Titration Eqs - stands, etc",
        le9: "Conical flasks",
        le10: "Methylene Blue, Bromothymol blue etc",
        le11: "Table towels",
        le12: "Lab stools",
        le13: "Microscope",
        le14: "Slides",
        le15: "Razor Blades",
        le16: "Forceps",
        le17: "glass Stiring rod"
    },
    "Must Haves": {
        m1: "Running tap water",
        m2: "Sufficient ventilation",
        m3: "Proper protective equipments (PPE's)",
        m4: "Sufficient Lighting",
        m5: "Standard Operating Procedures"
    }
} 

//a days schedule
let dayOne = {
    "8:00 A.M": "Opened Laboratory"
}


let totalnumofstudents = 35;

if(totalnumofstudents === 35) {
    let eachGroup = totalnumofstudents / 5;
    eachGroup;
}

//each group = 7 

let result = jobDescription["Lab equipments"];

console.log(result);

let boo = jobDescription.hasOwnProperty("Lab equipments");

console.log(boo);
function returnBoo() {
    if(boo) { //if the property exists, return it;
         console.log(result);
    }else {
        console.log("boo is not available");
    }
}

returnBoo();


function changeStuff() {
    if(boo) {
        //let j = jobDescription;
        jobDescription["Lab equipments"].Beakers.b1 = "1000ML";
        return jobDescription;
        //console.log(jobDescription);
    }else {
        console.log("boo isnt available");
    }
}

console.log(changeStuff());

//jobDescription["Lab equipments"].Beakers.b1 = "1000ML";
//console.log(jobDescription);




