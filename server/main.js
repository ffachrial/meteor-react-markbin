import { Meteor } from 'meteor/meteor';
import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
  });
});
