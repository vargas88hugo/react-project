import TodoItem from "./TodoItem"
import NewTodo from "./NewTodo";

function TodoList({ todos = [{value: "uno"}, {value: "dos"}] }) {
  return (
    <div>
      <NewTodo />
      {todos.map(todo => <TodoItem todo={todo} />)}
    </div>
  )
}

export default TodoList;