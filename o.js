//The essence of this file is to demonstrate access of property values from objects

const nameObject = [
    {
        Id_555 : {
            pName: 'Mary',
            sId: '5555',
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


//Loops through the object 'nameObject' and returns grouped data based on index position

/*
for (var i = 0; i < nameObject.length; i++) {
    console.log(nameObject[i]);
}
*/

/*
console.log(nameObject[0].Id_555.pName);
*/

//Objective of loop
//Target a value, check it against an inputted value and return 'x' if true

function checkValue(x) {
    for(i = 0; i < nameObject.length; i++) {
        if(x === nameObject[0].Id_555.pName) {
            console.log('Name is correct.');
            break;
        }
        console.log('Name is Incorrect.');
        break;
    }
}

checkValue('June');

//continued in ob.js





