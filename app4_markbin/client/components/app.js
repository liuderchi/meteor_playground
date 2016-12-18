import React from 'react';
import Header from './header';
import BinsList from './bins/bins_list';

export default (props) => {
  return (
    <div>
      <Header />
      {/*NOTE show children component rather than hard-code BinsList*/}
      {props.children}
    </div>
  );
};
