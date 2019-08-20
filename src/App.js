import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import About from './pages/About';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import DelAllAndSelectAll from './components/DelAllAndSelectAll';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.btnToggleFlag = "selectAll";
    this.selectAllBtnValue = "Select All";
  }
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "this is item 1",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "this is item 2",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "this is item 3",
        completed: false
      },
    ]
  }

  // to toggle completed state
  markComplete = (id) => {
    //console.log(id);
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  // to delete todos
  delItem = (id) => {
    //console.log(id);
    this.setState({todos: this.state.todos.filter((todo) => (todo.id !== id))});
  }

  //get data(title) passed from AddTodo 
  callbackAddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }

    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // Select all btn
  handleSelectAll = () => {
   // console.log(this.btnToggleFlag);
    if(this.btnToggleFlag == "selectAll"){
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo.completed !== true){
          todo.completed = true;
        }
        return todo;
      })});

      this.btnToggleFlag= "unselectAll";
      this.selectAllBtnValue = "Unselect All";
    } else if(this.btnToggleFlag == "unselectAll") {
      this.setState({todos: this.state.todos.map((todo) => {
        if(todo.completed !== false){
          todo.completed = false;
        }
        return todo;
      })});

      this.btnToggleFlag= "selectAll";
      this.selectAllBtnValue = "Select All";
    }
  }

  // Delete all btn
  handleDeleteAll = () => {
    //console.log("delete all is clicked 2222"); 
    this.setState({todos: this.state.todos.filter((todo) => (todo.completed !== true))});
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/todolist_v2" render={props => (
              <React.Fragment>
                <AddTodo  callbackFromParent={this.callbackAddTodo} />
                <DelAllAndSelectAll 
                  todos={this.state.todos} 
                  handleSelectAll={this.handleSelectAll} 
                  handleDeleteAll={this.handleDeleteAll}
                  selectAllBtnValue={this.selectAllBtnValue}/>
                <Todos 
                  todos={this.state.todos} 
                  markComplete = {this.markComplete}
                  delItem = {this.delItem}
                />
              </React.Fragment>
            )} />
            <Route path="/todolist_v2/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
