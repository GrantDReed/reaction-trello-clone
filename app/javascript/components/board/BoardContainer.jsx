import React from 'react';
import PropTypes from 'prop-types';

import Board from './Board';

import { connect } from 'react-redux';
import * as actions from '../../actions/BoardActions';

const dummyData = {
  id: 1,
  title: 'My Title',
  lists: [
    {
      title: 'This is a list',
      cards: [
        {
          text: 'Cards do many cool things'
        },
        {
          text: 'Here is another card'
        },
        {
          text: 'Use the + in the top menu to make your first board now.'
        }
      ]
    },
    {
      title: 'List title',
      cards: [
        {
          text: 'Add members to a board (via the sidebar to collaborate, share and discuss.'
        },
        {
          text: 'You can also change the background and more.'
        }
      ]
    },
    {
      title: 'Third list',
      cards: [
        {
          text: 'This is a card. Drag it onto "Tried it" to show it\'s done.'
        },
        {
          text: 'Add all the cards and lists you need'
        }
      ]
    }
  ]
}

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: dummyData,
      isFetching: false
    };
  }

  // componentDidMount(){
  //   this.fetchBoard(this.boardId())
  // }

  boardId = () => (Number(this.props.match.params.id))

  // fetchBoard = (id) => {
  //   this.setState({
  //     isFetching: true,
  //   }, () => {
  //     this.fetchBoard(id, this.doneFetchingBoard)
  //   });
  // }
  //
  // doneFetchingBoard = (board) => {
  //   this.setState ({
  //     isFetching: false,
  //     board
  //   });
  // }

  render() {
    return (
      <div>
        <Board board={this.state.board} />
      </div>
    )
  }
}

BoardContainer.propTypes = {
  fetchBoard: PropTypes.func.isRequired
}

const mapStateToProps = dispatch => ({
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (boardId) => {
    dispatch(actions.fetchBoard(boardId))
  },
})

export default BoardContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);


