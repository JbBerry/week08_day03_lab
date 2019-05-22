import React from 'react';
import Photo from './Photo';

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
    <>
      {listItems}
    </>
  );
}

export default PhotosList;
