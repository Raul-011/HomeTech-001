// script.js

AOS.init({

    duration: 1000,
    once: true

});

/* CASA */

const house = document.querySelector('.house');

const lightBtn =
document.querySelector('#lightBtn');

const curtainBtn =
document.querySelector('#curtainBtn');

/* LUZES */

let lightsOn = true;

lightBtn.addEventListener('click', () => {

    lightsOn = !lightsOn;

    house.classList.toggle('dark');

    if (lightsOn) {

        lightBtn.innerHTML =
        'Desligar Luzes';

    } else {

        lightBtn.innerHTML =
        'Ligar Luzes';

    }

});

/* CORTINAS */

let curtainsClosed = false;

curtainBtn.addEventListener('click', () => {

    curtainsClosed = !curtainsClosed;

    house.classList.toggle('closed');

    if (curtainsClosed) {

        curtainBtn.innerHTML =
        'Abrir Cortinas';

    } else {

        curtainBtn.innerHTML =
        'Fechar Cortinas';

    }

});