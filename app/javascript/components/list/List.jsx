import React from 'react';
import PropTypes from 'prop-types';

import ListOfCards from './ListOfCards';

const List = props => (
  <div
    className="list-wrapper"
    data-list-id={props.list.id}
  >
    <div className="list-background">
      <div className="list">
        <a className="more-icon sm-icon" href=""></a>
        <p>{props.list.title}</p>
        <ListOfCards cards={props.cards} />
      </div>
    </div>
  </div>
);

List.propTypes = {
  cards: PropTypes.array,
  list: PropTypes.object.isRequired,
};

export default List;