import React, {Component} from 'react'

class ToDo extends Component{
  render(){
    return(
      <div>
        <p>{this.props.task}</p>
      </div>
    )
  }
}

export default ToDo