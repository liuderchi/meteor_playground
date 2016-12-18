import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsList from './components/bins/bins_list';
import BinsMain from './components/bins/bins_main';
import { Bins } from '../imports/collections/bins';

const routes = (
  <Router history={browserHistory}>
    {/*NOTE jsx component as a Router*/}
    <Route path="/" component={App}>
      {/*TODO render BinList when path is / */}
      <Route path="list" component={BinsList}></Route>

      {/*TODO render BinMain when path is /bins/:binId */}
      <Route path="bins" component={BinsMain}></Route>
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
