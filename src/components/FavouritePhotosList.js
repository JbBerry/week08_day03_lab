import React from 'react';
import Photo from './Photo';

const FavouritePhotosList = (props) => {
  const filteredList = props.photos.filter((item)=>{
    return item.liked;
  })

  const listItems = filteredList.map((item) => {
    return <Photo
      photo={item}
      key={item.id}
      favourite={props.favourite}
    />
  });

  return (
    <>
      {listItems}
    </>
  );
}

export default FavouritePhotosList;
