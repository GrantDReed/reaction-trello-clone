import React from 'react';
import PropTypes from 'prop-types';

import List from './../list/List';

const ListOfLists = props => {

  let lists = 'Loading...'

  if (props.lists.length > 0) {
    lists = props.lists.map(list => {
      return <List key={list.id} id={list.id} title={list.title} cards={list.cards}/>
    })
  }

  return (
    <div id="list-container" className="list-container">
      {lists}
    </div>
  )
};

ListOfLists.propTypes = {
  lists: PropTypes.array
};

ListOfLists.defaultProps = {
  lists: []
};
export default ListOfLists;
