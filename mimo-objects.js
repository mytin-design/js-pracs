//OBJECTS
//GROUPING VALUES INTO OBJECTS

//lets say we have two variables name and favoriteFood which are both related to the same cat

var name = "Garfield";
var favoriteFood = "Lasagna";


//Instead of using two separate variables to describe our car, we can group these  into one variable, known as an aobject

var cat = {
    name: "Garlfied",
    favoriteFood: "Lasagna"
}

console.log(cat);

//We create objects similarly to variables with the keyword var followed by a name, an equal sign, and curly braces.
//e.g 

var cat = {};

//The information inside the object is known as the object's properties;
//The properties go inside the object's curly braces;

var cat = {
    name: "Garlfied"
};

//We create properties starting with a name, followed by a colon : and a value like name: "Garlfied";

var cat = {
    name: "Garlfied"
};


var dog = {
    name : "Odie"
};

//An object is basically related content grouped into one variable;

var person = {
    name: "Jon Arbuckle"
};


//To add more properties to an object, start with a comma, then add the property
//Remember the object holds related content;

var person = {
    name: "Joe Exotic",
    nickname: "Tiger King"
}


console.log(person);


//An object can have as many properties as we want as long as they are all separated with a comma

var person = {
    name : "Joe Exotic",
    nickname: "Tiger King",
    occupation: "Zoekeeper"
}

//Notice that the last property has not comma or semi-colon after

//Object properties can be numbers, strings, booleans, arrays, or even other objects.

var person = {
    name : "Joe Exotic",
    nickname: "Tiger King",
    occupation: "Zookeeper",
    age: 57
}

console.log(person);

//For example if we have many users, we can group their personal information in objects

//To access an object's property, we use the object's name, a period, and the property name

//e.g

console.log(person.nickname);

//To update a property, using an equal operator

person.nickname = "Tiger Prince";

console.log(person.nickname); //The value of the nickname property changes;


var person = {
    name: " Carole Baskin",
    occupation: "Animal Rights Activist",
    hair: "Blonde",
    married: true
}

console.log(person);
//Display the person's occupation

console.log(person.occupation);

//We use the equal sign to update an object's property

person.name = "Barole Baskin";

console.log(person.name);



var car = {
    make : "Toyota",
    model: "Camry"
}


console.log(car.make);


var car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
}

console.log(car.year);

console.log(car.model);

//

var pet = {
    animal : "dog",
    name : "Sunny"
}



var petty = {
    name: "Husky",
    animal: "dog",
    function: "COMPANY"
}


var pet = {
    animal: "dog",
    name: "Sunny",
    rescue: true,
    age: 7,
    litterMates: ["Bo", "Blue", "Clifford"]
}

console.log(pet);


//

var home = {
    style: "Tudor"
}


var home = {
    style: "Tudor",
    bedrooms : 2,
    squareFeet : 1000,
    renovated : false
}

console.log(home);

home.renovated = true;

console.log(home.bedrooms);


//Somtimes we have functions that are closely related to our objects.

var dog = {
    name: "Bo"
}

function bark() {
    console.log("Woof Woof");
}

bark();


//Similar to properties, we can group related functions into objects.
//Functions inside an object are called the objects methods

var dog = {
    name: "Bo",
    bark : function() {}
}

//We create object methods like properties.
//Starting with a name and a colon followed by the keyword function, parenthesis, and curly braces

var cow = {
    name: "cowy",
    mow: function () {}
}

//We call these methods with the object name, a period, the method name followed by the parenthesis

//eg dog.bark()

var dog = {
    name: "Bo",
    bark : function() {
        console.log("Woof woof");
    }
    
}

dog.bark();


//Methods are similar to regular functions. Meaning we can include parameters and return statements as well

var dog = {
    name: "Bo",
    bark: function (word) {
        return "Woof woof " + word;
    }
};

console.log(dog.bark("hungry"));


var phone = {
    brand: "Apple",
    number: "555-555-5555",
    ring: function () {}
}



var cat = {
    name: "Mittens",
    meow : function() {
        console.log("meow");
    }
}


cat.meow();


var phone = {
    brand : "Apple",
    number : "555-555-5555",
    ring: function () {
        console.log("ding ding ding");
    }
}

phone.ring();

var phone = {
    brand: "Apple",
    number: "555-555-5555",
    call: function(phoneNumber) {
        console.log("Calling " + phoneNumber);
    }
}

phone.call(phone.number);


//Learn how to use methods to access and update our objects properties

var myCereal = {
    name: "Trix",
    display: function () {
        console.log("Trix");
    }
}

myCereal.display();

//The keyword this refers to the object that contains the method
//In this case; myCereal;

var myCereal = {
    name: "Trix",
    display: function () {
        console.log(this);
    }
}

myCereal.display();

//We can use this followed by a period to get the objects properties from inside its methods

var myCereals = {
    name: "Trix",
    legumes: [["Cooked", "Beans", "Managu"], ["Raw", "Kunde", "stuff"]],
    display: function () {
        console.log(this.legumes);
    }
}

myCereals.display();


//Similarly, we can use this followed by a period to update the objects properties from inside its methods


var myCereal = {
    name: "Trix",
    changeAndDisplay: function () {
        this.name = "Cap 'n Crunch";
        console.log(this.name);
    }
}

myCereal.changeAndDisplay();

//The this keyword can only be used to access an objects properties inside the objects method

var myCere = {
    name: "Trix",
    changeAndDisplay: function () {
        this.name = "Cap 'n Crunch";
        console.log(this.name);
    }
}

myCereal.changeAndDisplay();

//

var mycerea = {
    name: "Trix",
    display: function () {
        this.name = "Cocoa Puffs";
        console.log(this.name);
    }
}

mycerea.display();


//this.propertyName -used to get and update;


var myCe = {
    name: "Trix",
    display: function () {
        console.log(this);
    }
}

myCe.display();


//

var myCereall = {
    name: "Trix",
    display: function () {
        console.log(this.name);
    }
};

console.log(myCereall.name);

//


var microwave = {
    brand: "Samsung",
    heat: function() {}
}


var microwave = {
    brand: "LG",
    heat: function () {
        console.log("Now heating your food");
    }
}


microwave.heat();



var mouse = {
    squeak: function () {
        console.log("Mouse squeaks...");
    }

}


mouse.squeak();

//

var microwave = {
    brand: "Samsung",
    isOn: function () {
        return true;
    }
}

console.log("Microwave state: " + microwave.isOn());

//


var microwave = {
    brand: "Ramtoms",
    on: true,
    isOn : function () {
        return this.on;
    }
}


console.log(microwave.isOn);

//


var employee = {
    displayName: function () {

    }
}

console.log(employee.displayName());


//Examples;


var eggs = {
    type: "Kienyeji",
    price: 15,
    
}


var employee = {
    name: "Jim Harper",
    title: "Salesman",
    sellPaper: function () {
        console.log("Would you like some paper?"); 
    }
}

//if we want to call the object,


console.log(employee);



employee.sellPaper();


function callMe() {
    return "I called";
}

console.log(callMe());


//A method is basically a function defined as a value of a property inside an object.
//Thus the object and the function are similar and can accept parameters and arguments



var employee = {
    name: "Jim Harper",
    title: "Sales person",
    displayName: function () {
        console.log(this.name);
        console.log(this.title);
    }
}

employee.displayName();


//this- refers to the object in which the method exists;

var car = {
    manual: true,
    year: 2005,
    method: "function"
}


var boat = {
    manual: false,
    year: 2016,
    method: function () {}
}

var plane = {
    manual: function () {},
    year: function () {},
    method: function () {}
}


var bicycle = {
    manual: true,
    year: 2019,
    method: "ride"
}


//We have a method and an object // Note the difference;

//A method is a function defined as a property in an object
//An object is combines related variables or code;

//A variable is a storage location for data;

//A function combines reusable and related code;


var apartment = {
    number : 404,
    location: "unknown",
    display: function () {}
}

apartment.display();

//


var apartment = {
    number: 404,
    location: "unknown",
    display: function() {
        this.number = 200;
        console.log(this.number);
    }
}

apartment.display();
console.log("Apartment location: " + apartment.location);


//this keyword only works inisde the object's method


var ob = {
    color: "Blue",
    getColor: function () {
        console.log(this.color);
    }
}

ob.getColor();


var apa = {
    number : 200,
    location: "unknown",
    display: function () {
        this.number = 400;
        console.log(this.number);
    }
}

apa.display();



var cyber = {
    name : "Bamba",
    location: "Kasarani",
    owner: "Jeff",
    noOfComputers: 11,
    services: ["printing", "scanning", "typing", "photocopying"],
    askService: function () {
        console.log(this);
    }
}

cyber.askService();



var oliveHouses = {
    rent : 9000,
    house01: "John Kimwalel",
    house02: "Mary Kimani",
    house03: "Kim Kandi",
    house05: "Konte Kariuki",
    tenants : ["John Kimwalel","Mary Kimani","Kim Kandi","Konte Kariuki"],
    //How do we assign each tenant a balance?

    payRent: function (paybill) {
        
        
        for (var i = 0; i < this.tenants.length;i++) {
            
             
            console.log("Hello, " + this.tenants[i] + ", please pay Ksh:" + this.rent + " to " + paybill );
        }
        
    }

}

oliveHouses.payRent(222189);

//You can make it a little bit more interesting by checking the balance of each tenant, and if below,
//a certain amount, remind tenant -
//Using the while loop;

