import _ from 'underscore';
import { createDeck, askLetter, valueCard, computerShift, createCardHtml }  from './usecases'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
let deck = [];
const cardTypes      = ['C','D','H','S'];
const specialCards   = ['A','J','Q','K'];

let playerPoints   = 0,
    computerPoints = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divPlayerCard   = document.querySelector('#jugador-cartas');
const divComputerCard = document.querySelector('#computadora-cartas');

const htmlPoints = document.querySelectorAll('small');

deck = createDeck(cardTypes, specialCards);

// Eventos
btnPedir.addEventListener('click', () => {

    const card = askLetter( deck );
    
    playerPoints = playerPoints + valueCard( card );
    htmlPoints[0].innerText = playerPoints;
    
    const cardImage = createCardHtml( card ); 
    divPlayerCard.append( cardImage );

    if ( playerPoints > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerShift( playerPoints, htmlPoints[1], divComputerCard, deck );

    } else if ( playerPoints === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerShift( playerPoints, htmlPoints[1], divComputerCard, deck );
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    computerShift( playerPoints, htmlPoints[1], divComputerCard, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck( cardTypes, specialCards );

    playerPoints     = 0;
    computerPoints = 0;
    
    htmlPoints[0].innerText = 0;
    htmlPoints[1].innerText = 0;

    divComputerCard.innerHTML = '';
    divPlayerCard.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
