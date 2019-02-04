import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends Component {
    render() {
      return (
        <ul className="todolist">
          {this.props.items.map(item => (
            <TodoItem key={item.id} id={item.id} text={item.text} completed={item.done} onItemCompleted={this.props.onItemCompleted} onDeleteItem={this.props.onDeleteItem} />
          ))}
        </ul>
      );
    }
}

export default TodoList