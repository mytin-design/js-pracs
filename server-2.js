//GOD BLESS THE WORK OF MY HANDS
//Clothes server
//Types of clothes - dresses, parezzos, skirts, t-shirts, vests, socks, shoes, shorts etc


const clothesServer = {
    dresses : {
        typeA : {
            name : 'Type A dress',
            price: '$440',
            typeId : 1112,
            size: 's',
            color : 'red',
            isAvailable : true
    },

        typeB : {
            name : 'Type B dress',
            price: '$150',
            typeId : 1122,
            size: 'XL',
            color : 'purple',
            isAvailable : false
        },

        typeC : {
            name : 'Type C dress',
            price: '$100',
            typeId : 2112,
            size: 'small',
            color : 'green & blue',
            isAvailable : true
        },

        typeD : {
            name : 'Type D dress',
            price: '$500',
            typeId : 1312,
            size: 'l',
            color : 'yellow',
            isAvailable : false
        }
    },

    parezzos : {
        ptypeA : {
            name : 'Type A Parezzo',
            price: '$540',
            typeId : 5112,
            size: 's',
            color : 'red',
            isAvailable : true
        },

        ptypeB : {
            name : 'Type B Parezzo',
            price: '$740',
            typeId : 5115,
            size: 'xl',
            color : 'green',
            isAvailable : false
        },

        ptypeC : {
            name : 'Type C Parezzo',
            price: '$510',
            typeId : 5100,
            size: 'xs',
            color : 'pink',
            isAvailable : true
        },

        ptypeD : {
            name : 'Type D Parezzo',
            price: '$610',
            typeId : 2212,
            size: 's',
            color : 'blue',
            isAvailable : false
        }

    },

    t_shirts : {
        ttypeA : {
            name : 'Type A T-shirt',
            price: '$110',
            typeId : 4000,
            size: 's',
            color : 'cyan',
            isAvailable : false
        },

        ttypeB : {
            name : 'Type B T-shirt',
            price: '$210',
            typeId : 4010,
            size: 'xl',
            color : 'navy',
            isAvailable : true
        },

        ttypeC : {
            name : 'Type C T-shirt',
            price: '$140',
            typeId : 4050,
            size: 'xs',
            color : 'white',
            isAvailable : true
        },

        ttypeD : {
            name : 'Type D T-shirt',
            price: '$610',
            typeId : 4700,
            size: 'l',
            color : 'black',
            isAvailable : false
        }
    },

    skirts : {
        stypeA : {
            name : 'Type A skirt',
            price: '$810',
            typeId : 4070,
            size: 'xl',
            color : 'cyan',
            isAvailable : true
        },

        stypeB : {
            name : 'Type B skirt',
            price: '$500',
            typeId : 4170,
            size: 'xs',
            color : 'navy',
            isAvailable : true
        },

        stypeC : {
            name : 'Type C skirt',
            price: '$210',
            typeId : 1470,
            size: 'm',
            color : 'black',
            isAvailable : false
        },

        stypeD : {
            name : 'Type D skirt',
            price: '$310',
            typeId : 1070,
            size: 'm',
            color : 'm',
            isAvailable : true
        }
    },

    shorts : {

    },

    vests : {

    },

    socks : {

    },

    shoes : {

    }
    
}

//There is no output from the following function:
//Rationale: The object is not an array;
//Therefore, we cannot index positions.

//In serve-2.js, clothesServer has been modified into an array;

function searchObject() {
    for(var i = 0; i < clothesServer.length; i++) {
        console.log(clothesServer[i]);
    }
}
 



//Access a type of clothing using and id;
//Access may be viewed as a search function

//Scenario 1
//User searches for a type of cloth
//Filter options: name, price range, size, color etc

//Objective:
//Use typeId to access cloth









/*
const tryObject = [
    
    {
        user : 'King',
        buy: true,
        check : false

},

    {
        u : 'abc',
        yes: true,
        no : false

    }
    
]

function loop() {
    for(var i = 0; i < tryObject.length; i++) {
        console.log(tryObject[i]);
    }
}

loop();

*/