import { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from './actions';

function NewTodo({ todos = [], onCreatePressed }) {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div>
      <input 
        type="text"
        value={inputValue}
        placeholder="Type your new Todo"
        onChange={e => setInputValue(e.target.value)} 
      />
      <button
        onClick={() => {
          const isDuplicatedText = todos.some(todo => todo.text === inputValue);
          if (!isDuplicatedText) {
            onCreatePressed(inputValue);
            setInputValue('')
          }
        }}
      >
        Create Todo
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);