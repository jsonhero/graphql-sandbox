import React, { Component, PropTypes } from 'react';
import './style.scss';
import TodoItem from '../TodoItem';

class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array,
  }

  static defaultProps = {
    todos: [
      { text: 'Item 1' },
      { text: 'Item 2' },
    ],
  }

  render() {
    const { todos } = this.props;
    return (
      <div className='list'>
        {
          todos.map((todo) => (
            <TodoItem {...todo} />
          ))
        }
      </div>
    );
  }
}


export default TodoList;
