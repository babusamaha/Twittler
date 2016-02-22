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
    function clearAndShow() {
        thisUser = {
            id: 0,
            name: '' + nameInput.value.toUpperCase(),
            img: 'img/anonymous.png'
        };
        nameDisplay = $('#newName').html(thisUser.name);
        imgDisplay = $('#newImg').html('<a href="https://github.com/samaha999" target="_blank"><img alt="" class="img" src="' + thisUser.img + '"></a>');
        nameInput.value = '';
        alert('HELLO ' + thisUser.name.toUpperCase() + '!' + ' FEEL FREE TO TWEET!');
    }
    /* function to display current userName , current userImg and alert enterName if input is empty */
    function newUserName() {
        // userName = '' + nameInput.value.toUpperCase();
        // userImg = '<a href="https://github.com/samaha999" target="_blank"><img alt="" class="img" src="img/anonymous.png"></a>';
        if (userName === '') {
            alert('PLEASE ENTER NAME!');
        } else {
            clearAndShow();
        }
    }
    /* function on submitButton click will invoke function newUserName() */
    $('#submitButton').on('click', function() {
        newUserName();
    });
    /* function on Enter click will invoke function newUserName() */
    $('#name').keypress(function(event) {
        if (event.which == 13) {
            return newUserName();
        }
    });
    /* function to display main user img ,new post and current date*/
    function newPost() {
        newTweet(postInput, thisUser);
        // posts.prepend(userImg + '<p class="tweetColor">' + '<a href="#">' + '@' + userName.toLowerCase() + '</a>' + ': ' + postInput + '</p>' + '<p class="date">' + new Date() + '</p>');
        postGrap.value = '';
    }
    /* function to alert enterMessage if input is empty or if statment to invoke function newPost() */
    function posting() {
        postInput = postGrap.value;
        if (postInput === '') {
            alert('PLEASE ENTER MESSAGE!');
        } else {
            newPost();
        }
    }
    /* function on postButton click will invoke function posting() */
    $('#postButton').on('click', function() {
        posting();
    });
    /* function on Enter click will invoke function posting() */
    $('#newMessage').keypress(function(event) {
        if (event.which == 13) {
            posting();
        }
    });

    /* function to clear all posts */
    function clearAllPosts() {
        posts.html('');
    }
    /* function on clearButton click will invoke function clearAllPosts() */
    $('#clearButton').on('click', function() {
        clearAllPosts();
    });

    // Higher-Order Functions


    var isUser = function(value, obj) {
        // console.log('isUser', arguments);
        var usernameText = $(obj).find('.username').html().toLowerCase();
        var enteredValue = $('#filterUser').val().toLowerCase();
        return (usernameText.indexOf(enteredValue) > -1);
    };

    var isInPost = function(value, obj) {
        // console.log('isUser', arguments);
        var userPostText = $(obj).find('.tweetColor').html().toLowerCase();
        var enteredValue = $('#filterPost').val().toLowerCase();
        return (userPostText.indexOf(enteredValue) > -1);
    };
    //Functino to filter tweets by user.
    $('#filterUser').keyup(function(event) {
        var list = $('#posts li').hide();
        var val = $(this).val();
        var filteredList = list.filter(isUser);
        $(filteredList).show();
    });
    //Functino to filter tweets by post.
    $('#filterPost').keyup(function(event) {
        var list = $('#posts li').hide();
        var val = $(this).val();
        var filteredList = list.filter(isInPost);
        $(filteredList).show();
    });
});