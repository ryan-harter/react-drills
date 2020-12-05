import React, {Component} from 'react'

class Login extends Component{
  constructor(){
    super()
    this.state={
      username: '',
      password: '',

    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handleChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(){
    return alert(`username: ${this.state.username} password: ${this.state.password}`)
  }

  render(){
    return (
      <div>
        <input placeholder="username" 
        onChange={e => this.handleChangeUsername(e)}/>
        <input placeholder='password' 
        onChange={e => this.handleChangePassword(e)}/>
        <button onClick={() => this.handleLogin()}>Login</button>
      </div>
      
    )
  }

}

export default Login