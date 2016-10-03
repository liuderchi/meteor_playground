// create image list component

// import react
import React from 'react';
import ImageDetail from './image_detail';

// create component
const ImageList = () => {  // NOTE component is a function obj
  return (
    <ul>
      <ImageDetail />
    </ul>
  );  // NOTE use braces to wrap JSX
};

// export created component
export default ImageList;
