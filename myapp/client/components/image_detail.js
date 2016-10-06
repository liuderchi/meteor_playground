import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) =>
  <li>
    <div className="media-left">
      <img src={props.image.link} className="media list-group-item" />
    </div>
    <div className="media-body">
      <h4 className="media-heading">
        {props.image.title}
      </h4>
      <p>{props.image.description}</p>
      <ImageScore ups={props.image.ups} downs={props.image.downs}/>
    </div>
  </li>

// export created component
export default ImageDetail;
