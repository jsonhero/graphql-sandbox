import React, { Component, PropTypes } from 'react';
import './style.scss';
import TodoList from '../TodoList';
import TodoInput from '../TodoInput';

class TodoContainer extends Component {
  render() {
    return (
      <div className='container'>
        <div>Todo List</div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default TodoContainer;
