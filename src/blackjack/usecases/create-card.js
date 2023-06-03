
/**
 * 
 * @param {String} card 
 * @returns { HTMLElement }
 */
export const createCardHtml = ( card ) => {

  if ( !card ) throw new Error('Card is required');

  const cardImage = document.createElement('img');
  cardImage.src = `assets/cartas/${ card }.png`; //3H, JD
  cardImage.classList.add('carta');

  return cardImage;

}