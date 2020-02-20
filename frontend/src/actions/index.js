let nextTodoId = 0
export const addTodo = content => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    content
})

export const requestPostTodos = () => ({
    type: 'REQUEST_POST_TODOS'
})

export const receivePostTodos = () => ({
    type: 'RECEIVE_POST_TODOS'
})

export const postTodo = content => dispatch => {
    dispatch(requestPostTodos());
    return fetch("https://lit-ridge-37859.herokuapp.com/create-todo",
        {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content,
                completed: false
            })
        })
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then(todos => {
            console.log(todos);
            dispatch(receivePostTodos());
            return dispatch(fetchTodos())
        })
}

export const requestUpdateTodos = () => ({
    type: 'REQUEST_UPDATE_TODOS'
})

export const receiveUpdateTodos = () => ({
    type: 'RECEIVE_UPDATE_TODOS'
})

export const updateTodo = (id, completed) => dispatch => {
    requestUpdateTodos();
    return fetch("https://lit-ridge-37859.herokuapp.com/update-todo",
        {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todoItemId: id,
                completed: !completed
            })
        })
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then(todos => {
            console.log(todos);
            receiveUpdateTodos();
            return dispatch(fetchTodos())
        })
}

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const requestTodos = () => ({
    type: 'REQUEST_TODOS'
})

export const receiveTodos = todos => ({
    type: 'RECEIVE_TODOS',
    todos,
})

export const fetchTodos = () => dispatch => {
    dispatch(requestTodos());
    return fetch('https://lit-ridge-37859.herokuapp.com/retrieve-todo')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(todos => {
            console.log(todos);
            return dispatch(receiveTodos(todos))
        })
}

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

