import React from 'react';
import PropTypes from 'prop-types';

import List from './List';
import CreateListTile from './CreateListTile';

const ListOfLists = props => {

  let lists;

  if (props.lists.length > 0) {
    lists = props.lists.map(list => {
      return <List key={list.id} id={list.id} title={list.title} cards={list.cards}/>
    })
  }

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists}
      </div>
      <CreateListTile boardId={props.boardId}/>
    </div>
  )
};

ListOfLists.propTypes = {
  lists: PropTypes.array,
  boardId: PropTypes.number
};

ListOfLists.defaultProps = {
  lists: []
};
export default ListOfLists;
