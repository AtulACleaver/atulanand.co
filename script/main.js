var colors = ['#025fff','#8ac926','#f09835','#e9373f','#9650a9'];

var randomColors = colors[Math.floor(Math.random() * colors.length)];

function setColor(){
    $(":root").css("--scheme", randomColors);
}

setColor();

// This will just a less opacity
var colors = ['#025fff3f','#8ac9263f','#f098353f','#e9373f3f','#9650a93f'];

var randomColors = colors[Math.floor(Math.random() * colors.length)];

function lightColor(){
    $(":root").css("--light", randomColors);
}

lightColor();