//The function of this object is to serve as a local server
//We should access, retrieve, add, delete data 

const localServer = {
    personalInformation: {
        ID : 33252323,
        name: 'Denis King',
        age: 6,
        gender: 'Male',
        skill : 'Computer Programming',
        work: 'Software Developer',
        maritalStatus: 'Single'
    },

    deviceInfo : {
        name : 'HP Notebook 8015',
        RAM : '4GB',
        ROM : '1TB',
        touchInput : true,
        isBatteryOkay : false,
        optimalOperation : 'Moderate'
    }
}

//Access data from the server

//Scenario 1
//Access user name and device name;


function displayUserInfo() {
    let info = localServer.personalInformation.name +' uses a ' + localServer.deviceInfo.name;
    return info;
}


console.log(displayUserInfo());
let sep = '///////////////////////////////////////////////////';
console.log(sep);



//Scenario 2;
//Use user Id to display user data

function authorizeDisplay(id) {
    if(id === localServer.personalInformation.ID) {
        return localServer;
    }
    return 'User Id not found';
}

let userFound = console.log(authorizeDisplay(33253));


//Scenario 3
//Check user age, if age is greater than 18, return user info

function checkAge(age, id) {
    if(age > 18) {
        return localServer.personalInformation;
    }
    return 'User is less than 18 years of age.';
}


let userPassed = checkAge(localServer.personalInformation.age);

console.log(userPassed);



console.log(sep);
//delete data from object
//delete user marital status -


function deleteUserData() {
    delete localServer.personalInformation.maritalStatus;
}

deleteUserData();

let remainingUserData = console.log(localServer.personalInformation);


console.log(sep);

//Add data in server
//add property - deviceGraphics: 'AMD'

function addProperty() {
    let added = localServer.deviceInfo.deviceGraphics = 'AMD';
    return added;
    
}


console.log(addProperty());

let newDeviceData = localServer.deviceInfo;
console.log(newDeviceData);



