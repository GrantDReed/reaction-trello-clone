import React from 'react';
import PropTypes from 'prop-types';

import EditableListTitle from './EditableListTitle';
import ListOfCards from './ListOfCards';
import AddCardToggle from './AddCardToggle';

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
          <EditableListTitle list={props.list}/>
          <ListOfCards cards={cards}/>
          <AddCardToggle/>
        </div>
      </div>
    </div>
  )
};

List.propTypes = {
  list: PropTypes.object,
};

export default List;
