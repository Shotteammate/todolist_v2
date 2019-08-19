import React, { Component } from 'react';

export class DelAllAndSelectAll extends Component {

  // handleSelectAll = (e) => {
  //   //console.log("select all is clicked");
  //   this.setState({todos: this.props.todos.map((todo) => {
  //     if(todo.completed !== true){
  //       todo.completed = true;
  //     }
  //     return todo;
  //   })});
  // }

  // handleDeleteAll= (e) => {
  //   console.log("delete all is clicked");
  // }

  render() {
    return (
      <div style={{display:'flex'}}> 
        <input 
          type="button" 
          className = "seldelBtn" 
          value={this.props.selectAllBtnValue}
          onClick={this.props.handleSelectAll}/>
        <input 
          type="button" 
          className = "seldelBtn" 
          value="Delete All"
          onClick={this.props.handleDeleteAll}/>
      </div>
    )
  }
}

export default DelAllAndSelectAll;
