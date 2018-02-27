import React from 'react';
import PropTypes from 'prop-types';

export default class NewCommentForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    cardId: PropTypes.number,
  };

  state = {
    text: '',
  };

  onSubmit = () => {
    this.props.handleSubmit('User', this.state.text);
    this.setState({text: ''});
  };

  handleChange = (e) => {
    this.setState({text: e.target.value});
  };

  render() {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
          <div className="comment">
            <label>
                <textarea required=""
                          rows="1"
                          placeholder="Write a comment..."
                          value={this.state.text}
                          onChange={this.handleChange}
                />
              <div>
                <a className="light-button card-icon sm-icon"/>
                <a className="light-button smiley-icon sm-icon"/>
                <a className="light-button email-icon sm-icon"/>
                <a className="light-button attachment-icon sm-icon"/>
              </div>
              <div>
                <input type="submit" className="button" value="Save" onClick={this.onSubmit}/>
              </div>
            </label>
          </div>
        </div>
      </li>
    )
  }
}
