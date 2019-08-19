import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    value: ''
  }

  handleOnChange = (e) => {
    //console.log(this.state.value);
    //e.target.name is the name attr. of input
    this.setState({[e.target.name]:e.target.value});
  }

  handleOnSubmit = (e) => {
    //console.log("onSubmit: "+this.state.value);
    e.preventDefault();
    this.props.callbackFromParent(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}  style={{display:'flex'}}>
        <input 
          type="text"
          style={{flex:'10'}}
          name="value"
          placeholder="Add Todo..."
          value={this.state.value}
          onChange={this.handleOnChange}
        />
        <input 
          className = "submitBtn" 
          type="submit" 
          value="Submit"
          style={{flex:'1'}}
        />
      </form>
    )
  }
}

export default AddTodo
