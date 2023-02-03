//Something new

var myName = 'Denis';

let myId = 33252323;

const myPhone = 719444041;

var likes = ['Computer Programming', 'Adventure', 'Orchestras', 'Playing Piano', 'Love', 'Games'];

const workExperience = {
    where : ['Upwork', 'Turing'],
    what : ['Writing code', 'debugging', 'Code Optimization'],
    periodInYears : 2,
    currentRank : 'Web Developer',
    experience : 'Junior'
}


function displayUser(myId, myName, myPhone, likes) {
    return myName + ' of ID:' + myId + ', and Phone No.' + myPhone + ': ' + likes + ': ' + workExperience;
}

console.log(displayUser(myId, myName, myPhone, likes));


//Always state the objective of your program in short, specific words.

//Belief

function faith(level) {
    if(level !== 100) {
        return 'Request denied.';
    } 
    return 'Request granted.';

}

console.log(faith(100));



