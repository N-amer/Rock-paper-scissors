let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let keuze1 = "";
let keuze2 = "";

const resultaat = document.getElementById('winnaar');

function firstpick(keuze, player) {
    if (player === 1) {
        keuze1 = keuze;
        document.getElementById('player1').style.display = 'none';
        document.getElementById('player2').style.display = 'block';
    } else {
        keuze2 = keuze;
        document.getElementById('player2').style.display = 'none';
        checkResultaat();
    }
}

const checkResultaat = () => {
    let winnaar = '';
    if (keuze1 === keuze2) {
      winnaar = 'gelijkspel';
    } else if (
      (keuze1 === 'steen' && keuze2 === 'schaar') ||
      (keuze1 === 'papier' && keuze2 === 'steen') ||
      (keuze1 === 'schaar' && keuze2 === 'papier')
    ) {
      winnaar = 'speler 1 wint';
    } else {
      winnaar = 'speler 2 wint';
    }
    resultaat.parentElement.style.display = 'block';
    resultaat.innerHTML = `Het resultaat is: ${winnaar}.`;
}
