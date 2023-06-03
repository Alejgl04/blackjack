import { askLetter, valueCard, createCardHtml } from './';

/**
 * 
 * @param {Number} minimumPoints
 * @param {HTMLElement} htmlPoints 
 * @param {array<String>} deck
 */

export const computerShift = ( minimumPoints, htmlPoints , divComputerCard, deck = [] ) => {
  
  if ( !minimumPoints ) throw new Error('Minimum points are required');
  if ( !htmlPoints ) throw new Error('htmlPoints are required');

	let computerPoints = 0;

  do {
    const card = askLetter( deck );

    computerPoints = computerPoints + valueCard( card );
    htmlPoints.innerText = computerPoints;
    
    const cardImage = createCardHtml( card );
   
    divComputerCard.append( cardImage );

    if( minimumPoints > 21 ) {
        break;
    }

  } while(  (computerPoints < minimumPoints)  && (minimumPoints <= 21 ) );

  setTimeout(() => {
      if( computerPoints === minimumPoints ) {
          alert('Nadie gana :(');
      } else if ( minimumPoints > 21 ) {
          alert('Computadora gana')
      } else if( computerPoints > 21 ) {
          alert('Jugador Gana');
      } else {
          alert('Computadora Gana')
      }
  }, 100 );
}