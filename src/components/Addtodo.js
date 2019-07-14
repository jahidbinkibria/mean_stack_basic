import React, { Component } from 'react'

export class Addtodo extends Component {
  render() {
    return (
      <div>
        <form style={{display:'flex'}}>
            <input style={{flex:10,padding:'10px'}} type="text" palceholder="NewTodo" name="todo"/>
            <input style={{flex: 1}} type="submit" value="submit" className="btn"/>
        </form>
      </div>
    )
  }
}



export default Addtodo
