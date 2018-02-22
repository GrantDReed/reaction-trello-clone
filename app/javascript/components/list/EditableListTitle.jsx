import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ListActions';


class EditableListTitle extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  static propTypes = {
    list: PropTypes.object
  };

  state = {
    title: this.props.list.title,
    showInput: false
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ showInput: false });
  };

  handleBlur = (e) => {
    if (e.target.value !== this.props.list.title) {
      this.context.store.dispatch(
        actions.updateList(
          this.props.list.id,
          { title: e.target.value }
        )
      );
    } else {
      this.setState({ showInput: false });
    }
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') { e.target.blur(); }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleTitleClick = (e) => {
    this.setState({ showInput: true });
  };

  render() {
    if (this.state.showInput) {
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
            className={this.'list-title'}
            onClick={this.handleTitleClick}
          >{this.state.title}</p>
        </div>
      );
    }
  }
}

export default EditableListTitle;