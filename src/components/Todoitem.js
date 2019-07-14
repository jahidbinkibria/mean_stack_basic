import React, { Component } from 'react'

export class Todoitem extends Component {
    
    itemStyle = () =>{
        const none= 'none';
        const lineThrough = 'line-through'
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.complete ? lineThrough: none,
        }
    } 

  render() {
    return (
        <div>
            <p style={this.itemStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
                {this.props.todo.title}
                <button style={btnStyle} onClick = {this.props.removeItem.bind(this, this.props.todo.id)}>X</button>
            </p>
        </div>
    )
  }
}


const btnStyle = {
    border: 'none',
    borderRadius: '50%',
    background: "red",
    padding: '5px 7px',
    float: 'right',
    color: '#fff',
    cursor: 'loading'
}


export default Todoitem
