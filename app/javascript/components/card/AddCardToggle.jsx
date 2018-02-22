import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";

import NewCardForm from './NewCardForm';

class AddCardToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShown: false,
    };
  }

  onClose = () => {
    this.setState({formShown: false});
  };

  onOpen = () => {
    this.setState({formShown: true});
  };

  onSubmit = (title) => {
    console.log('onSubmit in AddCardToggle');
    console.log('this.props.listId', this.props.listId);
    this.props.createCard(this.props.listId, {title})
  };

  renderForm = () => {
    return (
      <NewCardForm onClose={this.onClose}
                   onSubmit={this.onSubmit}/>
    )
  };

  renderPromptText = () => {
    return (
      <div className='add-card-toggle'>
        <a onClick={this.onOpen}>Add a card...</a>
      </div>
    )
  };

  render() {
    return this.state.formShown ? this.renderForm() : this.renderPromptText()
  }
}

AddCardToggle.propTypes = {
  listId: PropTypes.number.isRequired,
  createCard: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  createCard: (listId, card) => {
    dispatch(actions.createCard(listId, card))
  },
});

export default connect(null, mapDispatchToProps)(AddCardToggle);
