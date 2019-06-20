import React, { Component } from 'react';
import { addingItem } from '../actions'
import { connect } from 'react-redux'

class Form extends Component {

    

    state = {
        task: '',
        duedate: ''
    }


    onTaskInputChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    onDateInputChange = (event) => {
        this.setState({
            duedate: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.addingItem(this.state)
    }

    render() {
        return (
            <div className="ui segement">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Name of Task:</label>
                        <input 
                        type="text" 
                        value={this.state.task}
                        onChange={this.onTaskInputChange}
                        />
                        <input
                        type="text"
                        value={this.state.duedate}
                        onChange={this.onDateInputChange}
                        />
                    </div>
                    <button className="ui primary button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addingItem })(Form)