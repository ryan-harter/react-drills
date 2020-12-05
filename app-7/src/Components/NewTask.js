import React, {Component} from 'react'

class NewTask extends Component{
  constructor(){
    super()
    this.state={
      input: '',

    }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  handleAdd(){
    this.props.add(this.state.input)
    this.setState({
      input: ''
    })

  }


  render(){
    return(
      <div>
        <input placeholder='enter new task'
        onChange={e => this.handleChange(e)}
        value={this.state.input}/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }

}

export default NewTask