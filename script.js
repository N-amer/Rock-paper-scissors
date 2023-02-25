var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var speel = document.getElementById("speel");
var keuze1 = "";
var keuze2 = "";
player2.style.display = "none";
speel.style.display = "none";

function steen1() {
    keuze1 = "steen";
    player1.style.display = "none";
    player2.style.display = "block";
}
function papier1() {
    keuze1 = "papier";
    player1.style.display = "none";
    player2.style.display = "block";
}
function schaar1() {
    keuze1 = "schaar";
    player1.style.display = "none";
    player2.style.display = "block";
}

function steen2() {
    keuze2 = "steen";
    player2.style.display = "none";
    speel.style.display = "block";
}
function papier2() {
    keuze2 = "papier";
    player2.style.display = "none";
    speel.style.display = "block";
}
function schaar2() {
    keuze2 = "schaar";
    player2.style.display = "none";
    speel.style.display = "block";
}

function uitslag() {
    if (keuze1 == "steen" && keuze2 == "steen") {
        document.getElementById("winnaar").innerHTML = ("gelijkspel");
    }
    if (keuze1 == "steen" && keuze2 == "papier") {
        document.getElementById("winnaar").innerHTML = ("speler 2 wint");
    }
    if (keuze1 == "steen" && keuze2 == "schaar") {
        document.getElementById("winnaar").innerHTML = ("speler 1 wint");
    }

    if (keuze1 == "papier" && keuze2 == "steen") {
        document.getElementById("winnaar").innerHTML = ("speler 1 wint");
    }
    if (keuze1 == "papier" && keuze2 == "papier") {
        document.getElementById("winnaar").innerHTML = ("gelijkspel");
    }
    if (keuze1 == "papier" && keuze2 == "schaar") {
        document.getElementById("winnaar").innerHTML = ("speler 2 wint");
    }

    if (keuze1 == "schaar" && keuze2 == "steen") {
        document.getElementById("winnaar").innerHTML = ("speler 2 wint");
    }
    if (keuze1 == "schaar" && keuze2 == "papier") {
        document.getElementById("winnaar").innerHTML = ("speler 1 wint");
    }
    if (keuze1 == "schaar" && keuze2 == "schaar") {
        document.getElementById("winnaar").innerHTML = ("gelijkspel");
    }
}
console.log(keuze1);
console.log(keuze2);