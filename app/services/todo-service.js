import store from "../store.js";
import Todo from "../models/Todo.js";

// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/chris/todos/",
  timeout: 8000,
});

class TodoService {
  async getTodos() {
    let res = await _todoApi.get();
    //TODO Handle this response from the server
    let newTodos = res.data.data.map((t) => new Todo(t));
    store.commit("todos", newTodos);
  }

  async addTodoAsync(todo) {
    let res = await _todoApi.post("", todo);
    this.getTodos();
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find((todo) => todo._id == todoId);
    todo.completed = !todo.completed;
    await _todoApi.put(todo._id, todo);
    this.getTodos();

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    // todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    await _todoApi.delete(todoId);
    this.getTodos();
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
