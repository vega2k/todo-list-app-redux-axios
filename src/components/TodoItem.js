import React, { Component } from 'react';
import './TodoItem.css';

import { connect } from 'react-redux'
import { removeTodo, toggleTodo } from '../actions'

class TodoItem extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.checked !== nextProps.checked;
  // }

  handleToggle = (todo) => {
    todo.checked = !todo.checked;
    this.props.toggleTodo(todo)
  }

  handleRemove = (id) => {
    this.props.removeTodo(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div className="todo-item" onClick={() => this.handleToggle(todo)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          this.handleRemove(todo.id)}
        }>&times;</div>
        <div className={`todo-text ${todo.checked && 'checked'}`}>
          <div>{todo.text}</div>
        </div>
        {
          todo.checked && (<div className="check-mark">✓</div>)
        }
      </div>
    );
  }
}
export default connect(null, { toggleTodo, removeTodo })(TodoItem);
