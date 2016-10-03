// create image list component

// import react
import React from 'react';
import ImageDetail from './image_detail';

// dummy image data
const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/300x150/000/fff'},
  {title: 'Apple', link: 'https://dummyimage.com/300x150/000/fff'},
  {title: 'Apple Pen', link: 'https://dummyimage.com/300x150/000/fff'}
];

// create component
const ImageList = () => {  // NOTE component is a function obj

  const RenderedImages = IMAGES.map(function(image) {
    return <ImageDetail image={image}/>
  });

  return (
    <ul>
      {/* NOTE return repeation of ImageDetail, using curly braces */}
      {RenderedImages}
    </ul>
  );  // NOTE use braces to wrap JSX
};

// export created component
export default ImageList;
