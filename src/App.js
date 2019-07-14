import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import './App.css';

class App extends Component {

  state = {
    todos:[
      {
        title: 'Learn some shit',
        id: 1,
        complete: true
      },
      {
        title: 'Shut the fuck',
        id: 2,
        complete: false
      },
      {
        title: 'DO it again',
        id: 3,
        complete: false
      },
    ]
  }

 markComplete = (id) =>{
   this.setState({
     todos: this.state.todos.map(todo => {
       if(todo.id === id){
         todo.complete = !todo.complete;
       }
       return todo;
     })
   })
 } 

 removeItem = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if(todo.id !== id){
          return todo;
        }  
        return 0;  
      })
     
    })
 }


  render() {
    return (
      <div className="App">
        <Header/>
        <Addtodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} removeItem={this.removeItem}/>
      </div>
    );
  }
}

export default App;
