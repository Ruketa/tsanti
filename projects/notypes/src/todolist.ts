export class TodoList {
  todoList;

  constructor(todos) {
    this.todoList = todos;
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }

  filterByStatus(status) {
    return this.todoList.filter((todo) => todo.status === status);
  }

  getAll() {
    return this.todoList;
  }
}
