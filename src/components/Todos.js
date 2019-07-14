import React, { Component } from 'react'
import Todoitem from './Todoitem'


export class Todos extends Component {

  render() { 
    
    return this.props.todos.map((todo) =>(
    <Todoitem key = {todo.id} todo = {todo} markComplete={this.props.markComplete} removeItem={this.props.removeItem}/>
    ))
  }
}
export default Todos
