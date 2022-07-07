// Write your code here
const TodoItems = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails

  const DeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="list-Todo">
      <p>{title}</p>
      <button type="button" className="btn" onClick={DeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
