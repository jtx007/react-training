import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchTodo, deleteTodo } from '../actions/index'

const ShowListItem = (props) => {
    const { fetchTodo } = props

    console.log(props.todos)
    useEffect(() => {
        fetchTodo(props.match.params.id)
    }, [fetchTodo, props.match.params.id])

    return (
        <div className="ui container item card">
            <div className="content">
                <div className="header">{props.todos.title}</div>
                <div className="meta">
                    <span>Due By: {props.todos.duedate}</span>
                </div>
                <div className="description">
                    {props.todos.description}
                </div>
            </div>
            <div className="extra content">
                <div className="two buttons">
                    <button className="ui basic blue button">Edit</button>
                    <button className="ui basic red button">Delete</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { fetchTodo, deleteTodo })(ShowListItem)