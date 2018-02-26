import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ListActions';
import { connect } from "react-redux";


class CreateListTile extends React.Component {
  static propTypes = {
    boardId: PropTypes.number
  };

  state = {
    title: '',
    showForm: false
  };

  handleSubmit = (e) => {
    e.preventDefault;
    this.props.createList(this.props.boardId, this.state.title);
    this.setState({
            showForm: false,
            title: ''
          });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });

      this.refs.submitButton.dispatchEvent(event);
    }
  };

  handleTileClick = (e) => {
    this.setState({ showForm: true });
  };

  handleCloseClick = (e) => {
    this.setState({ showForm: false });
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div className="new-list selected">
          <input
            type="text"
            placeholder="Add a list..."
            ref="input"
            defaultValue={this.state.title}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <div>
            <input
              type="submit"
              className="button"
              value="Save"
              ref="submitButton"
              onClick={this.handleSubmit}
            />
            <i
              className="x-icon icon"
              onClick={this.handleCloseClick}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div
          className="new-list"
          onClick={this.handleTileClick}
        >
          <span>Add a list...</span>
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  createList: (boardId, title) => {
    dispatch(actions.createList(boardId, title));
  },
})

export default connect(null, mapDispatchToProps)(CreateListTile);
