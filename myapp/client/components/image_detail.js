// create image detail component

// import react
import React from 'react';

// create component
const ImageDetail = (props) => {
  return (
    <li>  {/* NOTE you should return one root DOM element considering comment*/}
      <img src={props.image.link} />
      {props.image.title}
    </li>
  );
};

// export created component
export default ImageDetail;
