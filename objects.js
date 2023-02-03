//Objects as storage locations of large data sets - e.g JSON Files

const objectName = {
    'indexOne' : 'index0neValue',
    'indexTwo' : 'IndexTwoValue',
    'indexThree' : 'indexThreeValue',
    'indexFour' : 'indexFourValue'
}

/*
An object stores data in key-pair values;
It has a keyword (e.g. const), object name (e.g. objectName), 
and key-pair values enclosed in curly braces.
*/

//How to access a value in an object


//syntax - keyword.[key];

//example

let display = objectName.indexOne;

console.log(display);

//An object can have several grouped data, an array

const array = [
    {
        name : 'nameOne',
        nameTwo : 'nameTwo',
        nameThree : 'nameThree',
        nameFour : 'nameFour'
    },

    {
        indexer: 'indexerOne',
        indexerTwo : 'indexerTwo',
        indexerThree : 'indexerThree'
    }
]


console.log(array[1]);

//The indexing starts at 0. Therefore, index [0], is at the first position.
//As such, array[1] targets grouped data in the second position.



console.log("Separator-/////////////////////////////////////////////////");

console.log(array[1].indexerTwo);

//Using the syntax objectName[indexPositionValue]
//We can access an entire group of data

//Using the syntax objectName[indexPositionValue].key
//This targets a specific property value


//Say we want to access an entire group using an id;
//example.

const nameObject = [
    {
        Id_555 : {
            pName: 'Mary',
            sName: 'Martin',
            sTwo : 'nameTwo',
            sFour : 'nameThree',
            pId: '0987654321'
        }
    },

    {
        sdId : {
            schOne : 'schName',
            schId : 'schId Selected',
            schPri : 'schPri',
            pId : '1234567890'
        }
    }
]

console.log(nameObject[0].Id_555.pId);



console.log("Separator-/////////////////////////////////////////////////");
console.log("Separator-/////////////////////////////////////////////////");


//We can select a single grouped item in the object array;

//what if we want a single item in the single grouped data set;

console.log(nameObject[1].sdId.schId);

//The loop below outputs all grouped data sets in the object array;
for (var i = 0; i < nameObject.length; i++) {
    console.log(nameObject[i]);
}


//Loop through the entire 'nameObject and return pId for student id 555,

/*
The following loop does not function.

for (var i = 0; i < nameObject.length;i++) {
    console.log(nameObject[i][0].Id_555.pId);
}

*/

/*
let entryTime = '11:00';

for (var i = 0; i < nameObject.length; i++) {
    if(nameObject[i][0][555].pId === '0987654321') {
        let parentMessage = "Hi " + nameObject[i][0][555].pName + ", Your son " + nameObject[i][0][555].sName + ' has arrived at school at ' + entryTime;
        console.log(parentMessage);
    }
    console.log('Parent Id not found');

}

*/


console.log("Separator-/////////////////////////////////////////////////");
console.log("Separator-/////////////////////////////////////////////////");


//Continued in o.js


