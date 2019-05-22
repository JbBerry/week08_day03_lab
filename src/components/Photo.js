import React from 'react';

const Photo = (props) => {

  const handleClick = () => {
    props.favourite(props.photo.id);
  }

  return (
    <div>
      <img src={props.photo.url} className="photo"/>
      <button onClick={handleClick}>👍</button>
    </div>
  );
}

export default Photo;
