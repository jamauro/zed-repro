import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Todos = new Mongo.Collection('todos');

Meteor.methods({
  'todos.insert': function({ text }) {
    check(text, String);

    const todo = {
      text,
      createdAt: new Date(),
    }

    const todoId = Todos.insert(todo);

    return todoId;
  }
});
