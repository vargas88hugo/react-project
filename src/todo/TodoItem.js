function TodoItem({ todo, onRemovePressed }) {
  return (
    <div style={{ display: "flex", marginTop: 50, alignItems: "center" }}>
      <h3 style={{marginRight: 50}}>{ todo.text }</h3>
      <div>
        <button>Mark as a completed</button>
        <button
          onClick={() => onRemovePressed(todo.text)}
        >
          Remove task
        </button>
      </div>
    </div>
  )
}

export default TodoItem;