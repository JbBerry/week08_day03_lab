import React from 'react';
import Photo from './Photo';
import './PhotoList.css'

const PhotosList = (props) => {

const filteredItems = () => {
  switch (props.category) {
    case 'All':
    return props.photos
    default:
    return props.photos.filter((item) => {
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

export default PhotosList;
