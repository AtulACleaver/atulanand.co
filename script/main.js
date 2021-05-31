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