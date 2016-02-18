$(document).ready(function() {

    var userName = 'Adam Samaha';
    var userImg = 'img/adam.jpg';
    var userImgLink = '<a href="https://github.com/samaha999" target="_blank"><img alt="" class="img" src="' + userImg + '"><a/>';
    var nameInput = document.getElementById('name');
    var postGrap = document.getElementById('newMessage');
    var nameDisplay = $('#newName').html(userName);
    var imgDsiaply = $('#newImg').html(userImgLink);

    var thisUser = {
        id: 0,
        name: userName,
        img: userImg
    };

    var posts = $('#posts');
    /* Random words arrays to display random tweet posts */
    var users = [

        {
            id: 1,
            name: 'Barack Obama',
            img: 'img/male1.jpeg'
        },

        {
            id: 2,
            name: 'Hillary Clinton',
            img: 'img/female1.jpeg'
        },

        {
            id: 3,
            name: 'Tim Cook',
            img: 'img/male2.jpeg'
        },

        {
            id: 4,
            name: 'Anne Hathaway',
            img: 'img/female2.jpeg'
        },

        {
            id: 5,
            name: 'Bill Gates',
            img: 'img/male3.jpeg'
        },

        {
            id: 6,
            name: 'Oprah Winfrey',
            img: 'img/female3.jpeg'
        },

        {
            id: 7,
            name: 'Donald Trump',
            img: 'img/male4.jpeg'
        },

        {
            id: 8,
            name: 'Halle Berry',
            img: 'img/female4.jpeg'
        },

        {
            id: 9,
            name: 'Tom Hanks',
            img: 'img/male5.jpeg'
        },

        {
            id: 10,
            name: 'Jennifer Lawrence',
            img: 'img/female5.jpeg'
        }

    ];
    var wordOne = ["Lady Gaga", "Obama", "Almost", "Did you know i", "Today we", "Taylor Swift", "Last night i", "Miley cyrus", "Last night Madonna", "Angelina jolie", "Apple", "Democracy", "Christina Aguilera", "I wish we", "Beyonce", "Foreign policy", "Adam sandler", "The presidential debate", "Rihanna", "I", "Movie industry"];
    var wordTwo = ["crashed", "won", "volunteered", "understand", "smoked", "saved", "snort", "recommend", "remembered", "received", "quit", "provided", "produced", "noticeed", "learned", "joked at", "joined", "invented", "found", "entertained", "danced", "chewed", "crashed", "accepted", "attacked", "apologized", "begin", "attended"];
    var wordThree = ["my", "an entire", "this", "the", "the big", "a new form of", "all", "my", "your", "the", "a"];
    var wordFour = ["media", "paparazzi", "country", "people", "dream", "show", "oscar", "world", "government", "city", "system", "cloud", "money", "way of life", "belief system", "bad decisions", "future", "life", "party", "minds", "music", "media", "history", "community", "year", "society", "televison"];

    /* function to display random tweet post from mix arrays of users and words*/
    var getRandomFromArray = function(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };
    /* function to display random users*/
    var getRandomUsers = function() {
        return getRandomFromArray(users);
    };
    /* function to display random tweet*/
    var randomMessage = function() {
        return [getRandomFromArray(wordOne), getRandomFromArray(wordTwo), getRandomFromArray(wordThree), getRandomFromArray(wordFour)].join(' ');
    };

    /* function to display new random tweets*/
    function newTweet(msg, usr) {
        var rendomUser = usr || getRandomUsers();
        var tweet = '<li ' +
            'data-id="' + rendomUser.id + '" ' +
            'data-name="' + rendomUser.name + '" ' +
            '><a href="#" target="#"><img alt="" class="img" src="' +
            rendomUser.img + '" /> @ <span class="username">' +
            rendomUser.name + '</span></a>' + ': ' +
            '<p class="tweetColor">' + msg + '</p><p class="date">' +
            new Date() + ' </p></li>';
        posts.prepend(tweet);
        // on every new tweet we need to trigget a filter check to filter the new post
    }
    /* function to set random time to display new random tweets*/
    // setInterval(newTweet, (Math.random() * 3000) + 5000);
    setInterval(function() {
        newTweet(randomMessage());
    }, 3000);

    /* function to display new userName , new userImg and alert Hello message */

});