import TodoItem from "./TodoItem"
import NewTodo from "./NewTodo";
import { connect } from 'react-redux';
import { removeTodo } from './actions';

function TodoList({ todos = [], onRemovePressed }) {

  return (
    <div>
      <NewTodo />
      {todos.map(todo => <TodoItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);