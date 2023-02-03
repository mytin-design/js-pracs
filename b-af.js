const mySongs = [
    {
        songName: "Overtime",
        songId: 001,
        dateAdded: "09/09/2022",
        songSize: "8MB",
        isLyrics: true,
        downloadable: true
    },

    {
        songName: "Aria",
        songId: 002,
        dateAdded: "04/09/2022",
        songSize: "7MB",
        isLyrics: false,
        downloadable: true
    },

    {
        songName: "Breathless",
        songId: 005,
        dateAdded: "01/01/2022",
        songSize: "4MB",
        isLyrics: true,
        downloadable: false
    }
]

//A function that searches songs and returns searched item;

//To search, we need to loop through the available songs and identify if searched item is available

function searchSong(songName) {
    for(i = 0; i < mySongs.length;i++) {
        //If item is found, return item;

        if(songName === mySongs[i].songName) {
            return songName + " found. Would you like to play it?";
        }
        return songName + ": Not found."
    }
}

console.log(searchSong("Breathless"));

//problem
//only the first item is read;
//if you search for an item in an array, only the first or last are returned

