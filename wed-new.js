//today we learn the use of the 'this' keyword
//where - used in objects
//why - to target object properties
//how - this.property


const object = {
    firstName : 'Denis',
    secondName : 'Muthee',
    age: '26',
    displayData: function display() {
        let fname = this.firstName;
        return fname;
    }
}

console.log(object.displayData());


//Example 2

const data = {
    schName : 'Karima',
    schLevel : 'Provincial',
    schId : 1234,
    schInfo: function showInfo() {
        return this;//returns entire object
        //this is only functional inside the method;
     }
     
}

console.log(data.schInfo());

