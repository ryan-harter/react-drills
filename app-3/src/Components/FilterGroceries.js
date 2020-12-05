import React, {Component} from 'react'

class FilterGroceries extends Component{
  constructor(){
    super()
    this.state={
      groceryList: ['milk','eggs','beef','bacon','veggies'],
      filterInput: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      filterInput: e.target.value
    })
  }

  render(){
    let filterGroceryList = this.state.groceryList.filter(e => {
      return e.includes(this.state.filterInput)
    })
    .map(e =>{
      return <p>{e}</p>
    })
    return(
      <div>
        <input onChange={e => this.handleChange(e)}/>
        {filterGroceryList}
      </div>
    )
  }
}

export default FilterGroceries