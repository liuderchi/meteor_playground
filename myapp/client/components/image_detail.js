// create image detail component

// import react
import React from 'react';

// create component
const ImageDetail = (props) => {
  return (
    <li>  {/* NOTE you should return one root DOM element considering comment*/}
      <div className="media-left">
        <img src={props.image.link} className="media list-group-item" />
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {props.image.title}
        </h4>
      </div>
    </li>
  );
};

// export created component
export default ImageDetail;
