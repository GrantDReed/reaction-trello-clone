import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ListActions';
import { connect } from "react-redux";


class EditableListTitle extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    listId: PropTypes.number
  };

  state = {
    title: this.props.title,
    showForm: false
  };

  handleBlur = (e) => {
    if (e.target.value !== this.props.title) {
      this.props.updateList(this.props.listId, this.state.title)
    } else {
      this.setState({ showForm: false });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') { e.target.blur(); }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTitleClick = (e) => {
    this.setState({ showForm: true });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div>
          <input
            type="text"
            className='list-title'
            value={this.state.title}
            onBlur={this.handleBlur}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            autoFocus={true}
          />
        </div>
      );
    } else {
      return (
        <div>
          <p
            className='list-title'
            onClick={this.handleTitleClick}
          >{this.state.title}</p>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  updateList: (listId, title) => {
    dispatch(actions.updateList(listId, title))
  },
})

export default connect(null, mapDispatchToProps)(EditableListTitle);


