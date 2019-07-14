import React from 'react'

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>TodoList</h1>
    </div>
  )
}


const headerStyle = {
    padding: '12px',
    background: '#333',
    color:'#fff',
    margin: 0,
    textAlign: 'center',
}
