const object = [
    {
        first : {
            a : 'b',
        c : 'd',
        e : 'f'
        }
    },

    {
        second : {
            g : 'h',
        i : 'j',
        k : 'l'
        }
    },

    {
        third : {
            m : 'n',
        o : 'p',
        q : 'r'
        }
    }
]


function loop() {
    for (var i = 0; i < object.length; i++) {
        console.log(object[i]);
    }
}

loop();





