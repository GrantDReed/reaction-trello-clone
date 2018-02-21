import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';

import { connect } from 'react-redux';
import * as actions from '../../actions/CurrentBoardActions';

class BoardContainer extends React.Component {
  static propTypes = {
    fetchBoard: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    board: PropTypes.object
  }

  static defaultProps = {
    board: {}
  }

  componentWillMount() {
    this.getBoard(this.boardId());
  }

  boardId = () => (Number(this.props.match.params.id))

  getBoard = (id) => {
    this.props.fetchBoard(id)
  }

  render() {
    return (
      <div>
        <Board board={this.props.board}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  board: state.currentBoard
})

const mapDispatchToProps = dispatch => ({
  fetchBoard: (boardId) => {
    dispatch(actions.fetchBoard(boardId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);


