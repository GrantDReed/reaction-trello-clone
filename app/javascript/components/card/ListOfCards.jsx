import React from 'react';
import PropTypes from 'prop-types';

import CardSummary from './CardSummary';

class ListOfCards extends React.Component {
  render() {
    let cardSummaries = ''

    if (this.props.cards.length > 0) {
      cardSummaries = this.props.cards.sort().map(card => (
        <CardSummary key={card.id} card={card}/>
      ))
    }

    return (
      <div id="cards-container">
        {cardSummaries}
      </div>
    );
  }
}

ListOfCards.propTypes = {
  cards: PropTypes.array
};

ListOfCards.defaultProps = {
  cards: []
}

export default ListOfCards;
