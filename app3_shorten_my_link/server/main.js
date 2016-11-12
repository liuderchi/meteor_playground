import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function(){
    return Links.find({});
  });
});


const middleware = ConnectRoute(function(router){
  router.get('/:token', (req) => console.log(req.params.token));
  // NOTE if incoming req match the string, call this middleware

  // localhost:3000/ NOT Match
  // localhost:3000/foo/bar NOT Match
  // localhost:3000/abcd Match
});

WebApp.connectHandlers.use(middleware);
