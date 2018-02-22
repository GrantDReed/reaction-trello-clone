import React from 'react';
import PropTypes from 'prop-types';

import EditableListTitle from './EditableListTitle';
import ListOfCards from '../card/ListOfCards';
import AddCardToggle from '../card/AddCardToggle';

const List = props => {
  const id = props.id || 'loading'
  const title = props.title || 'Loading...'
  const cards = props.cards || []

  return (
    <div
      className="list-wrapper"
      data-list-id={id}
    >
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <EditableListTitle listId={props.id} title={props.title}/>
          <ListOfCards cards={cards}/>
          <AddCardToggle/>
        </div>
      </div>
    </div>
  )
};

List.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  cards: PropTypes.array,
};

export default List;
