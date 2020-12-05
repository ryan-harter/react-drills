import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends Component {
  constructor(){
    super()
    this.state={
      taskArray: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleAddTask(e){
    this.setState({
      taskArray: [...this.state.taskArray, e]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>My To Do List</h1>
        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.taskArray}/>
      </div>
    );
  }
  
}

export default App;
