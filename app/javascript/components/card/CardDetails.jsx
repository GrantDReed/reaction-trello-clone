import React from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import store from "../../lib/Store";
import * as actions from "../../actions/CurrentCardActions";
import * as cbActions from "../../actions/CurrentBoardActions";

import NewCommentForm from "../comments/NewCommentForm";

class CardDetails extends React.Component {
  static propTypes = {
    cardId: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
    card: PropTypes.object,
    fetchBoard: PropTypes.func,
    fetchCard: PropTypes.func,
    updateCard: PropTypes.func,
    createComment: PropTypes.func
  };

  componentWillMount() {
    this.props.fetchCard(this.props.cardId);
  }

  handleSubmitComment = (user, text) => {
    this.props.createComment(this.props.cardId, user, text);
  };

  handleBlurCardTitle = (e) => {
    this.props.updateCurrentCard(this.props.cardId, {title: e.target.value});
  };

  handleClose = () => {
    this.props.fetchBoard(store.getState().currentBoard.id);
    this.props.onClose();
  };

  userToInitials = (name) => {
    const initials = name.split(' ').map((n) => {
      return n[0];
    });
    return initials.join('');
  };

  render() {
    let content;
    if (this.props.card.id !== this.props.cardId) {
      content = (
        <section className="modal-main">
          <p>Loading...</p>
        </section>
      );
    } else {
      const commentList = this.props.card.comments.map((comment, index) => {
        return (
          <li key={index}>
            <div className="member-container">
              <div className="card-member">{this.userToInitials(comment.user)}</div>
            </div>
            <h3>{comment.user}</h3>
            <div className="comment static-comment">
              <span>{comment.text}</span>
            </div>
            <small>
              {comment.date} -
              <span className="link">Edit</span> -
              <span className="link">Delete</span>
            </small>
          </li>
        )
      });

      content = (
        <div>
          <header>
            <textarea className="list-title"
                      defaultValue={this.props.card.title}
                      onBlur={this.handleBlurCardTitle}
            />
            <p>
              in list <a className="link" onClick={this.handleClose}>
              {this.props.card.list_title}
            </a>
              <i className="sub-icon sm-icon"/>
            </p>
          </header>
          <section className="modal-main">
            <ul className="modal-outer-list">
              <li className="details-section">
                <ul className="modal-details-list">
                  <li className="labels-section">
                    <h3>Labels</h3>
                    <div className="member-container">
                      <div className="green label colorblindable"/>
                    </div>
                    <div className="member-container">
                      <div className="yellow label colorblindable"/>
                    </div>
                    <div className="member-container">
                      <div className="orange label colorblindable"/>
                    </div>
                    <div className="member-container">
                      <div className="blue label colorblindable"/>
                    </div>
                    <div className="member-container">
                      <div className="purple label colorblindable"/>
                    </div>
                    <div className="member-container">
                      <div className="red label colorblindable"/>
                    </div>
                    <div className="member-container"><i
                      className="plus-icon sm-icon"/>
                    </div>
                  </li>
                  <li className="due-date-section">
                    <h3>Due Date</h3>
                    <div id="dueDateDisplay" className="overdue completed">
                      <input id="dueDateCheckbox"
                             type="checkbox"
                             className="checkbox"
                             checked=""
                             defaultValue='Aug 4 at 10:42 AM (past due)'/>
                    </div>
                  </li>
                </ul>
                <form className="description">
                  <p>Description</p>
                  <span id="description-edit" className="link">Edit</span>
                  <p className="textarea-overlay">Cards have a symbol to
                    indicate if they contain a description.</p>
                  <p id="description-edit-options" className="hidden">
                    You have unsaved edits on this field. <span
                    className="link">View edits</span> - <span
                    className="link">Discard</span>
                  </p>
                </form>
              </li>
              <NewCommentForm cardId={this.props.cardId}
                              handleSubmit={this.handleSubmitComment}/>
              <li className="activity-section">
                <h2 className="activity-icon icon">Activity</h2>
                <ul className="horiz-list">
                  <li className="not-implemented">Show Details</li>
                </ul>
                <ul className="modal-activity-list">
                  {commentList}
                </ul>
              </li>
            </ul>
          </section>
          <aside className="modal-buttons">
            <h2>Add</h2>
            <ul>
              <li className="member-button"><i
                className="person-icon sm-icon"/>Members
              </li>
              <li className="label-button"><i className="label-icon sm-icon"/>Labels
              </li>
              <li className="checklist-button"><i
                className="checklist-icon sm-icon"/>Checklist
              </li>
              <li className="date-button not-implemented"><i
                className="clock-icon sm-icon"/>Due Date
              </li>
              <li className="attachment-button not-implemented"><i
                className="attachment-icon sm-icon"/>Attachment
              </li>
            </ul>
            <h2>Actions</h2>
            <ul>
              <li className="move-button">
                <i className="forward-icon sm-icon"/>Move
              </li>
              <li className="copy-button">
                <i className="card-icon sm-icon"/>Copy
              </li>
              <li className="subscribe-button">
                <i className="sub-icon sm-icon"/>Subscribe
                <i className="check-icon sm-icon"/>
              </li>
              <hr/>
              <li className="archive-button">
                <i className="file-icon sm-icon "/>Archive
              </li>
            </ul>
            <ul className="light-list">
              <li className="not-implemented">
                Share and more...
              </li>
            </ul>
          </aside>
        </div>
      )
    }

    return (
      <div id="modal-container">
        <div className="screen"/>
        <div id="modal">
          <i className="x-icon icon close-modal"
             onClick={this.handleClose}/>
          {content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  card: state.currentCard
});

const mapDispatchToProps = dispatch => ({
  fetchCard: (cardId) => {
    dispatch(actions.fetchCard(cardId))
  },
  updateCurrentCard: (cardId, obj) => {
    dispatch(actions.updateCurrentCard(cardId, obj))
  },
  createComment: (cardId, user, text) => {
    dispatch(actions.createComment(cardId, user, text))
  },
  fetchBoard: (boardId) => {
    dispatch(cbActions.fetchBoard(boardId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);



