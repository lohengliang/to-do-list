import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, content }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {content}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default Todo