//GOD BLESS THE WORK OF MY HANDS
//Clothes server
//Types of clothes - dresses, parezzos, skirts, t-shirts, vests, socks, shoes, shorts etc


const clothesServer = [
    {
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
        }
    
    },

    {
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
    
        }
    
    },

    {
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
        }
    },

    {
        skirts : {
            stypeA : {
                name : 'Type A skirt',
                price: '$810',
                typeId : 4070,
                size: 'xl',
                color : 'cyan',
                isAvailable : false
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
        }
    
    },

    {
        shorts : {

        }
    },


    {
        vests : {

        }
    },

    {
        socks : {

        }
    },

    {
        shoes : {

        }
    }
    
]


//OBJECTIVE A
//Access data from the server

//The object from server-2.js has been modified into an array
//Create a function that lists all the items in the object;

function listItems() {
    for(var i = 0; i < clothesServer.length;i++) {
        console.log(clothesServer[i]);
    }
}

listItems();

//Now that the object is an array, we can loop through and list items;

//Our initial objective was to use the object as a server.
//As a server we can access, delete, store, retrieve data 

//Access data from the server

//Access typeA skirts, check if they are available, if true, indicate price

console.log('/////////////////////////////////////////////////');

//The function is used to search any type of cloth - item searched is passed as an argument and 
//received as a parameter

//Notice the passed argument;
//It is so, as the properties may change; 



function accessSkirt(itemSearched) {
    if(!itemSearched.isAvailable) {
    console.log(itemSearched.name + '  is out of stock.');

    }
    console.log(itemSearched.price);

}

accessSkirt(clothesServer[1].parezzos.ptypeC);



//Expected output ; $810
//Rationale : the dress is available, so the price is displayed;

//Change the availability status to : false, 



//OBJECTIVE C
//Delete data from the server

//Delete the color of t-shirts, typeC

function deleteItem() {
    delete clothesServer[2].t_shirts.ttypeC.color;
    return clothesServer[2].t_shirts.ttypeC;
}

let remainingItems = deleteItem();

console.log(remainingItems);
//In the displayed updated list of ttypeC items, color is absent


console.log('/////////////////////////////////////////////////');

//OBJECTIVE D
//Update server --change item


//change color of parezzo, ptypeB from green to cyan 
function changeItem(item) {
    item.color = "cyan";
    return item;
}

let updatedItem = changeItem(clothesServer[1].parezzos.ptypeB);

console.log(updatedItem);

console.log('////////////////////////////////////////////////////////////////////');
//OBJECTIVE E
//Add item on server

//add secondaryColor to typeA of dresses

//add secondaryColor to all types of dresses --for this to work, we need to modify, dresses into an array
//Try another day, when you have some more experience.



function addItemtoTypeA() {
    return clothesServer[0].dresses.typeA.sColor = 'skyBlue';
}

console.log(addItemtoTypeA());
console.log(clothesServer[0].dresses.typeA);


