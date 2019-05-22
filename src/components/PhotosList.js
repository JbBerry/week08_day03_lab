import React from 'react';
import Photo from './Photo';

const PhotosList = (props) => {


  const populateCategories=()=>{
      const arrOptions = props.photos.map((element,index)=>{
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


  const listItems = props.photos.map((element) => {
    return <Photo
      photo={element}
      key={element.id}
      favourite={props.favourite}
    />
  });

  return (
    <>
    <label> Category</label>
    <select
    // value={this.state.selectedAtribute}
    // onChange={handleAtributeChange}
    >
    {populateCategories()}
    </select>
      {listItems}
    </>
  );
}

export default PhotosList;
