const colors = ['#90e0ef', '#ffafcc', '#ffe18a','#76c893','#72efdd','#34a0a4','#deaaff','#52b788'];


// It gives random number
const randomNumber = Math.floor(Math.random() * colors.length);
// It gives random color
const randomColors = colors[randomNumber];

//Properties
const opacity = '1.99f';

//Scheme Color
const schemeColors = randomColors;


const backgroundColors = randomColors.concat(opacity);

function setColor(){
    $(":root").css("--scheme", schemeColors);
    $(":root").css("--background-color", backgroundColors);
}

setColor();

window.addEventListener("load", function () { 
    const loader = document.querySelector(".loading")
    loader.className += ' hidden';
 })

 var quotes = ["\"You can never become happy, you can only be happy\" – Sam Harris",
                "\"Perfectionism is a distraction.\" – Make Time",
               "\"Failure is an attitude and not an outcome\" – Harvey Mackay",
               "\"There is no greater agony than bearing an untold story inside you.\" – Maya Angelou",
               "\"Each traveler has to find their own way to climb their mountain.\"",
               "\"Everyone is a mirror of themselves.\" – Nathaniel Drew"
                ];

var randomQuotes = Math.floor(Math.random() * quotes.length);

document.getElementById("quote").innerHTML = quotes[randomQuotes];
