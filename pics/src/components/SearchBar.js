import React, { Component } from 'react'


export default class SearchBar extends Component {

    state = {
        input: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.input)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                        <label>Image Search:</label>
                        <input 
                        onChange={(e) => this.setState({ input: e.target.value})} 
                        type="text" 
                        value={this.state.input}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
