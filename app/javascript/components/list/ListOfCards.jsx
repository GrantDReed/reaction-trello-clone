import React from 'react';
import PropTypes from 'prop-types';

import CardSummary from './CardSummary';

const sortedCards = (cards) => {
  const copy = cards.slice();
  return copy.sort((a, b) => a.position - b.position);
};

const cardSummaries = props.cards.map(card => (
  <CardSummary key={card.id} card={card} />
))

const ListOfCards = (props) => (
  <div id="cards-container">
    {cardSummaries}
  </div>
);

ListOfCards.propTypes = {
  cards: PropTypes.array
};

export default ListOfCards;