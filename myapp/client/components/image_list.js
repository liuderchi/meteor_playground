import React from 'react';
import ImageDetail from './image_detail';

// NOTE ImageList component is a function obj
const ImageList = (props) => {

  const ValidImages = props.images.filter(image => !image.is_album);

  const RenderedImages = ValidImages.map(image =>
    <ImageDetail key={image.title} image={image}/>
  );
  // NOTE omit return and curly braces for single return statement
  // add key prop to suppress warn

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );  // NOTE use braces to wrap JSX
};

export default ImageList;
