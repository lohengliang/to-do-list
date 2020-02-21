import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { fetchTodos, toggleTodo, VisibilityFilters, updateTodo } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  toggleTodo: id => {
    dispatch(toggleTodo(id))
  },
  updateTodo: (id, completed) => {
    dispatch(updateTodo(id, completed))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)