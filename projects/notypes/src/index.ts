import { Todo } from "./todo";
import { TodoList } from "./todolist";

const main = () => {
  const todoList = new TodoList([]);

  todoList.addTodo(
    new Todo(0, "new todo", "this is description", "progress", "alice")
  );
  todoList.addTodo(
    new Todo(1, "super todo title", "this is description!!", "done", "alex")
  );
  todoList.addTodo(
    new Todo(2, "this is todo", "description sample", "pending", "alex")
  );

  todoList.getAll().forEach((todo) => {
    console.log("-------------------");
    console.log(todo.title);
    console.log(todo.description);
    console.log(todo.status);
    console.log(todo.assign);
    console.log("-------------------");
  });
};

main();
