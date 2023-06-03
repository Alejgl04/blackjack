import _ from 'underscore';

/**
 *
 * @param {array<string>} cardTypes 
 * @param {array<string>} specialCards 
 * @returns {array<string>}
 */
export const createDeck = (cardTypes, specialCards ) => {
  let deck = [];

  if ( !cardTypes || specialCards === 0 ) throw new Error('Something went wrong!. Try again');

  for( let i = 2; i <= 10; i++ ) {
    for( let cardType of cardTypes ) {
      deck.push( i + cardType );
    }
  }

  for( let cardType of cardTypes ) {
    for( let specialCard of specialCards ) {
      deck.push( specialCard + cardType );
    }
  }

  deck = _.shuffle( deck );
  return deck;

}
