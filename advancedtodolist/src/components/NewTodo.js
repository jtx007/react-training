import React, {useState} from 'react';
import { createTodo } from '../actions/index'
import { connect } from 'react-redux'




const NewTodo = (props) => {

    const onSubmit = (event) => {
        event.preventDefault()
        props.createTodo(title, dueby, description)
    }

    const [title, createTitle] = useState('')
    const [dueby, createDueDate] = useState('')
    const [description, createDescription] = useState('')

    return (
        <div className="ui container segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Title:</label>
                    <input onChange={(e) => createTitle(e.target.value)} 
                    type="text" 
                    value={title} 
                    />
                </div>
                <div className="field">
                    <label>Due By:</label>
                    <input onChange={(e) => createDueDate(e.target.value)}
                    type="text" 
                    value={dueby}
                    />
                </div>
                <div className="field">
                    <label>Description:</label>
                    <textarea onChange={(e) => createDescription(e.target.value)}
                    type="text"
                    value={description} />
                </div>
                <button type="submit" className="ui button">
                    Submit
                </button>
            </form>
        </div>

    )
}


export default connect(null, { createTodo })(NewTodo)