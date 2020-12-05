import React, {Component} from 'react'


class Input extends Component{
  constructor(){
    super()
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  render(){
    return(
      <div>
        <input onChange={e => this.handleChange(e)}/>
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default Input