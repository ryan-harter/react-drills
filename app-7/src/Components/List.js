import React, {Component} from 'react'
import ToDo from './ToDo'

class List extends Component{
  render(){
    let list = this.props.tasks.map(e => {
      return <ToDo task = {e}/>
    })
    return(
      <div>{list}</div>
    )
  }
}

export default List