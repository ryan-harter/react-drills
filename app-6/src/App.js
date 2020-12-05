import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo'

class App extends Component {
  constructor(){
    super()
    this.state={
      newTask: '',
      taskList: [],
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  handleChange(e){
    this.setState({
      newTask: e.target.value 
    })
  }

  handleAddTask(){
    this.setState({
      taskList: [...this.state.taskList, this.state.newTask],
      newTask: ''
    })
  }

  render(){
    let mappedTaskList = this.state.taskList.map(e => {
      return <ToDo task={e}/>
    })
    //console.log(this.state.taskList, this.state.newTask)
    return (
      <div className="App">
        <h1>To Do List</h1>
        <input placeholder='Enter new task'
        value={this.state.newTask}
        onChange={e => this.handleChange(e)}/>
        <button onClick={this.handleAddTask}>Add</button>
        
        {mappedTaskList}
      </div>
    );
  }
  
}

export default App;
