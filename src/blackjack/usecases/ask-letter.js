
/**
 * 
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const askLetter = ( deck ) => {

  if ( !deck || deck.length === 0 ) {
      throw 'There is not letter on the deck';
  }
  const card = deck.pop();
  return card;
  
}
