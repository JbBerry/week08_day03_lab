import React from 'react';
import Photo from './Photo';
import './PhotoList.css'

const FavouritePhotosList = (props) => {
  const filteredList = props.photos.filter((item)=>{
    return item.liked;
  })

  const filteredItems = () => {
    switch (props.category) {
      case 'All':
      return filteredList
      default:
      return filteredList.filter((item) => {
        return props.category === item.category;
      })
    }
  }

    const listItems = filteredItems().map((element) => {
      return <Photo
        photo={element}
        key={element.id}
        favourite={props.favourite}
      />
    });

  return (
    <div className='photo-container'>
      {listItems}
    </div>
  );
}

export default FavouritePhotosList;
