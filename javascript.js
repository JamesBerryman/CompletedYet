var gamesList = ['Super Smash Bros','Shadow of the Tomb Raider','Breath of the Wild','Starlink','Metroid: Samus Returns',''];

document.getElementById("textBox").style.visibility = "hidden";
document.getElementById("add").style.visibility = "hidden";
document.getElementById("showGame").innerHTML = gamesList[0];

const list = () => {
    gamesList.shift()
    var text = "";
    var i;
    for (i = 0; i < gamesList.length; i++) {
    text += gamesList[i] + "<br>";
    }
    document.getElementById("showGame").innerHTML = text;

}

function visible() {
    document.getElementById("textBox").style.visibility = "visible";
    document.getElementById("add").style.visibility = "visible";
}

const add = () => {
    var x = document.getElementById("textBox").value;
    document.getElementById("showGame").innerHTML = x;
    gamesList.push(x);
}