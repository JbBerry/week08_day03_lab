import React, {Component} from 'react';

class CategoryFilter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      category:''
    };
    this.populateCategories=this.populateCategories.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  render(){
    return(
      <div>
        <label> Category </label>
        <select
          id = 'category'
          value={this.state.category}
          onChange={this.handleInputChange}
        >
          {this.populateCategories()}
        </select>
      </div>
    )
  }

  populateCategories(){
    const arrOptions = this.props.photos.map((element,index)=>{
        return(
          element.category
        )
      });
    const uniqueArrOptions = []
      arrOptions.forEach((option,index)=>{
        if (arrOptions.indexOf(option) === index){
          uniqueArrOptions.push(option)
        }
      })

    const arrElements = uniqueArrOptions.map((element,index)=>{
      return(
        <option key={index}>{element}</option>
      )
    })
    arrElements.unshift(<option defaultValue key={-1}>All</option>)
    return arrElements;
  }


  handleInputChange(event) {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
    this.props.filter(event.target.value)
  }
}

export default CategoryFilter
