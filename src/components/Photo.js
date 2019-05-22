import React from 'react';
import './Photo.css';

const Photo = (props) => {

  const handleClick = () => {
    props.favourite(props.photo.id);
  }

  return (
    <div className = 'photo-tile'>
      <img src={props.photo.url} alt={props.photo.url} className='photo'/>
      <button onClick={handleClick}>👍</button>
    </div>
  );
}

export default Photo;
