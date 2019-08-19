import React, { Component } from 'react'

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc solid',
      textDecoration: this.props.todo.completed? 'line-through': 'none'
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;

    return (
      <div style = {this.getStyle()}>
        <p>
          <input 
            type="checkbox" id={id}  
            checked={completed}
            onChange={this.props.markComplete.bind(this, id)}/> {"   "}
          {title}
          <button 
            style={delBtnStyle}
            onClick = {this.props.delItem.bind(this, id)}
          >x</button>
        </p>
      </div>
    )
  }
}

const delBtnStyle = {
  background: '#ff0000',
  color: "#fff",
  border:"none",
  padding: "5px 10px",
  borderRadius: "20%",
  cursor: "pointer",
  float: "right"
}

export default TodoItem;
