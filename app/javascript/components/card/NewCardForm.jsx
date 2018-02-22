import React from 'react';
import PropTypes from 'prop-types';

export default class NewCardForm extends React.Component {
  state = {
    value: '',
  };

  handleSubmit = () => {
    console.log('handleSubmit');
    this.props.onSubmit(this.state.value)
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleChange = (e) => {
    this.setState({value: e.target.value});
  };

  render() {
    return (
      <div className="add-dropdown active-card">
        <div className="card">
          <div className="card-info"/>
          <textarea
            name="add-card"
            autoFocus={true}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="members"/>
        </div>
        <a className="button" onClick={this.handleSubmit}>Add</a>
        <i className="x-icon icon" onClick={this.handleClose}/>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    )
  }
}

NewCardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
