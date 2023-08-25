<script>
  import { Meteor } from "meteor/meteor";
  import { Todos } from "../api/todos";

  let newTodo = "";

  $m: Meteor.subscribe("todos");

  // more information about $m at https://github.com/zodern/melte#tracker-statements
  $m: todos = Todos.find().fetch();

  function handleSubmit() {
    const text = newTodo;
    newTodo = "";

    Meteor.call("todos.insert", { text }, function (error, result) {
      if (error) {
        console.error(error);
        newTodo = text;
      }
    });
  }
</script>

<div class="container">
  <form on:submit|preventDefault={handleSubmit}>
    <input
      bind:value={newTodo}
      type="text"
      placeholder="Type to add new todos"
    />
  </form>
  <ul>
    {#each todos as todo (todo._id)}
      <li>
        <p>{todo.text}</p>
      </li>
    {/each}
  </ul>
</div>
