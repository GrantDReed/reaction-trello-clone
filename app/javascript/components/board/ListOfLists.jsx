import React from 'react';
import PropTypes from 'prop-types';

import List from './../list/List';

const ListOfLists = props => (
  <div id="list-container" className="list-container">
    <List boardId={props.boardId} />
  </div>
);

ListOfLists.propTypes = {
  boardId: PropTypes.number
};

export default ListOfLists;