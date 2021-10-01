import { useState } from 'react'

function NewTodo() {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <div>
      <input 
        type="text"
        value={inputValue}
        placeholder="Type your new Todo"
        onChange={e => setInputValue(e.target.value)} 
      />
      <button>Create Todo</button>
    </div>
  )
}

export default NewTodo;