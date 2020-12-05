import React, {Component} from 'react'

class List extends Component{
  constructor(){
    super()
    this.state={
      groceryList: ['milk','eggs','beef','bacon','veggies']
    }
  }
  render(){
    let mappedGroceryList = this.state.groceryList.map(e => {
      return (
        
        <p>{e}</p>
      
      )
    })
    return(
      <div>
        {mappedGroceryList}
      </div>
    )
  }
}

export default List