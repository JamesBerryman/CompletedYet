var gamesList = ['Super Smash Bros','Shadow of the Tomb Raider','Breath of the Wild','Starlink','Metroid: Samus Returns'];

//If you did want everything to show at once...
//var i;
//for (i = 0; i < gamesList.length; i++) {
//    document.getElementById("showGame").innerHTML += "<p>" + gamesList[i] + "</p>";
//}

document.getElementById("showGame").innerHTML = gamesList[0];

document.getElementById("textBox").style.visibility = "hidden";
document.getElementById("add").style.visibility = "hidden";

var arrayIndex = 0;
function list(completed) {
    if(completed == 1){
        //The user said they have completed the game
        gamesList.splice(arrayIndex,1);
    } else {
        //The user has not completed the game, increment the arrayIndex
        if(arrayIndex < (gamesList.length - 1)){
            arrayIndex++;
        } else {
            arrayIndex = 0;
        }
    }
    document.getElementById("showGame").innerHTML = gamesList[arrayIndex];
}

function visible() {
    document.getElementById("textBox").style.visibility = "visible";
    document.getElementById("add").style.visibility = "visible";
}

const add = () => {
    var x = document.getElementById("textBox").value;
    document.getElementById("showGame").innerHTML = x;
    gamesList.push(x);
    document.getElementById("textBox").style.visibility = "hidden";
    document.getElementById("add").style.visibility = "hidden";
}