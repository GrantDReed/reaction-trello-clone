import React from 'react';
import PropTypes from 'prop-types';

export default class DescriptionToggle extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    description: ''
  };

  state = {
    formShown: false,
    value: this.props.description || ''
  };

  hideForm = () => {
    this.setState({
      formShown: false
    });
  };

  showForm = () => {
    this.setState({
      formShown: true,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.hideForm();
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  renderForm = () => {
    return (
      <form className="description">
        <p>Description</p>
        <textarea
          className="textarea-toggle"
          rows="1"
          autoFocus
          value={this.state.value}
          onChange={this.onChange}
        />
        <div>
          <input type='submit' className='button' onClick={this.onSubmit} value='Save' />
          <i className='x-icon icon' onClick={this.hideForm} />
        </div>
      </form>
    )
  };

  renderText = () => {
    return (
      <div className="description">
        <p>Description</p>
        <span id="description-edit" className="link" onClick={this.showForm}>Edit</span>
        <p className="textarea-overlay">{this.props.description}</p>
      </div>
    )
  };

  render() {
    return this.state.formShown ? this.renderForm() : this.renderText()
  }
}
