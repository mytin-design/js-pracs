//New word - remind yourself the use of the .hasOwnProperty() method

const object = {
    firstName : 'Denis',
    secondName : 'Muthee',
    age: 26,
    work : 'Software Developer'
}

//Example one;
console.log(object.hasOwnProperty('age'));
//Expected output - true;

//The method object.hasOwnProperty(v: property key): boolean - returns a boolean
//It determines whether an object has a property with the specified name;
//@param v - A property name.


//Example two
console.log(object.hasOwnProperty('Software Developer'));

//Expected output - false;

//Notice that the use of a value instead of a key results to : false 

//Thus, only use keys as values in the method.

//Example Three

const objectJson = {
    schoolName : 'Karima Boys High School',
    schoolId : 12345,
    schoolPrincipal : 'Mr Kigwa',
    schoolMotto : 'Na pamoja Tushinde'
}

if(objectJson.hasOwnProperty('schoolMotto')) {
    console.log(objectJson.schoolMotto);
}

