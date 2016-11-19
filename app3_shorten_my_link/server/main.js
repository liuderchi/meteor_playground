import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function(){
    return Links.find({});
  });
});

// when user hit localhost:3000/abcd
function onRoute(req, res, next) {    // next: call next middleware
  // find match record from req token
  const link = Links.findOne({ token: req.params.token});

  // if found, redirect to that url

  // if not found, send user to original app

}

const middleware = ConnectRoute(function(router){
  router.get('/:token', onRoute);
  // NOTE if incoming req match the string, call this middleware

  // localhost:3000/ NOT Match
  // localhost:3000/foo/bar NOT Match
  // localhost:3000/abcd Match
});

WebApp.connectHandlers.use(middleware);
