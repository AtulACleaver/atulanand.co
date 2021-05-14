const colors = ['#025fff', '#f58634', '#81b214', '#fb3640', '#aa2ee6'];

const randomColors = colors[Math.floor(Math.random() * colors.length)];

function setColor(){
    $(":root").css("--scheme", randomColors);
}

setColor();