import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './style.scss';

class TodoItem extends Component {

  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: 'Dummy Item',
  }

  render() {
    const { text } = this.props;
    return (
      <div className='item'>
        <div>
          {text}
        </div>
        <RaisedButton
          label='Delete'
          secondary
          />
      </div>
    )
  }
}

export default TodoItem;
