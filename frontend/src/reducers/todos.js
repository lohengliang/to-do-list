const initialState = {
  isFetching: false,
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TODOS':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVE_TODOS':
      return {
        ...state,
        isFetching: false,
        todos: action.todos
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }
    default:
      return state
  }
}

export default todos