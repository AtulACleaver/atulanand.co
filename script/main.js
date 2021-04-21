var colors = ['#025fff','#22d278','#f09835','#e9373f','#9650a9'];

var randomColors = colors[Math.floor(Math.random() * colors.length)];

function setColor(){
    $(":root").css("--scheme", randomColors);
}

setColor();