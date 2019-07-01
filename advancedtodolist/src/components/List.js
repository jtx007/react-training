import React, { useEffect } from 'react'
import { fetchTodos } from '../actions/index'
import { connect } from 'react-redux'
import ListItem from './ListItem'



const renderList = (props) => {
    
    if (!props.todos) {
        return (
            <div class="ui segment">
                <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
                </div>
            </div>
        )
    } else {
    
    return props.todos.map(todo => <ListItem key={todo.id} todo={todo} />)
    }
}



const List = (props) => {

    const {fetchTodos} = props


    useEffect(() => {
        fetchTodos()
            
        }, [])

    console.log(props.todos)


        
    return (
        <div className="ui container cards">
            {renderList(props)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, { fetchTodos })(List)