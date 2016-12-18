import React from 'react';
import Header from './header';

export default (props) => {
  return (
    <div>
      <Header />
      {/*NOTE show children component rather than hard-code BinsList*/}
      {props.children}
    </div>
  );
};
