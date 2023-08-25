import '/imports/api/todos';
import { Todos } from '/imports/api/todos';

Meteor.publish('todos', function() {
  return Todos.find();
});

Meteor.startup(() => {
  Todos.remove();
});
