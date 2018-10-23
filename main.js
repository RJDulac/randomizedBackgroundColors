var output = document.getElementsByClassName("output");
var color = null;

onload = function () {
    //call on load
    changeColor();
    //repeat to change colors every x time
    setInterval(changeColor, 2000);
}
function changeColor() {
    //funColor(); here if we want each class to have the same random color
    for (var i = 0; i < output.length; i++) {
        //put her to create new execution context for each class
        funcColor();
        output[i].style.backgroundColor = color;
        console.log(color);
    }
}

function funcColor() {
    //call random function each time to have different rgb values.
    color = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";
    console.log("called");
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}
