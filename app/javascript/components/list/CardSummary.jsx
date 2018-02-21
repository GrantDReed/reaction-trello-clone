import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CardSummary extends React.Component {
  hasComments = () => {
    return this.props.card.comments_count;
  }

  hasDueDate = () => {
    return !!this.props.card.due_date;
  }

  hasDescription = () => {
    const description = this.props.card.description;

    return description && description.trim().length > 0;
  }

  hasLabels = () => {
    return !!this.props.card.labels;
  }

  formattedDueDate = () => {
    if (!this.props.card.due_date) {
      return ''
    }

    const momentDate = moment(this.props.card.due_date);
    let formatString;

    if (momentDate.toDate().getFullYear() === (new Date()).getFullYear()) {
      formatString = 'MMM D';
    } else {
      formatString = 'MMM D, YYYY';
    }

    let formatted = momentDate.format(formatString);

    return `${formatted}`;
  }

  dueClass = () => {
    if (!this.props.card.due_date) {
      return ''
    }

    var diff = (moment(this.props.card.due_date).toDate() - new Date()) / (1000 * 60 * 60 * 24);

    if (this.props.card.completed) {
      return "completed";
    } else if (diff < -1) {
      return "overdue";
    } else if (diff < 0) {
      return "overdue-recent";
    } else if (diff < 1) {
      return "due-soon";
    } else {
      return "";
    }
  };

  render() {
    let content = 'Loading'
    if (this.props.card) {
      content = (
        <div className="card">
          <i className="edit-toggle edit-icon sm-icon"/>
          <div className="card-info">
            {
              this.hasLabels() ? (
                this.props.card.labels.map((label, index) => (
                  <div
                    className={`card-label ${label} colorblindable`}
                    key={index}
                  />
                ))
              ) : null
            }
            <p>{this.props.card.title}</p>
          </div>
          <div className="card-icons">
            {
              this.hasDueDate() ? (
                <i
                  className={`clock-icon sm-icon ${this.dueClass()}`}>
                  {this.formattedDueDate()}
                </i>
              ) : null
            }
            {
              this.hasDescription() ? (
                <i className="description-icon sm-icon"/>
              ) : null
            }
            {
              this.hasComments() ? (
                <i className="comment-icon sm-icon"/>
              ) : null
            }
          </div>
        </div>
      )
    }
    return (
      <div className="card-background">
        {content}
      </div>
    )
  }
}

CardSummary.propTypes = {
  card: PropTypes.object
};

export default CardSummary;
