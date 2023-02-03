
//Target the student id, and check it against an inputted student id (fingerprint)
//If stored id matches inputted id, send a message to that student's parent phone no.

const nameObject = [
    {
        pName: 'Mary',
        sId: '5555',
        sName: 'Martin',
        sTwo : 'nameTwo',
        sFour : 'nameThree',
        pId: '0987654321',
        pNo: '0719444041'
    },
            
    

    {
        sId: '1111',
        pName: 'June',
        className : '4K',
        sName: 'Conte',
        schId : 'schId Selected',
        schPri : 'schPri',
        pId : '1234567890',
        pNo: '0713778770'
        
    },

    {
        sId: '2222',
        pName: 'Hariet',
        sName: 'Boyie',
        className : '2N',
        schId : 'schId Selected',
        schPri : 'schPri',
        pId : '123451234',
        pNo: '0799202130'
        
    }
]

//console.log(nameObject[0].sId);

//pass student Id - assuming it is deduced from a fingerprint

let entryTime = '11:00';
function checkStudentId(id) {
    for(i = 0; nameObject.length; i++) {
        if(id === nameObject[i].sId) {
                
        let pMessage = 'Hi ' + nameObject[i].pName + '. Your son ' + nameObject[i].sName + ' has arrived at school at ' + entryTime + '.';
        return 'Send: ' + pMessage + '; to ' + nameObject[i].pNo; //- use console.log
        //console.log('Send: ' + pMessage + '; to ' + nameObject[i].pNo);
        }

        return 'Student not found.';     //- return ends the loop, use console.log
        //console.log('Student not found.');
  
    }
}


console.log(checkStudentId('5555'));


